//src/browser-specific/browser-utils.ts
/**
 * Opens a new browser tab with a Google search for the given text.
 * Leading/trailing whitespace and duplicate spaces are removed before searching.
 * @param text The text to search for on Google
 * @author Eliezer Dev {@link https://github.com/eliezer-dev-software-enginner}
 */
function searchTextInAnotherTab(text) {
    var textoLimpo = text
        .trim() // remove espaços nas bordas
        .replace(/\s+/g, " "); // remove espaços duplicados
    var query = encodeURIComponent(textoLimpo);
    var url = "https://www.google.com/search?q=".concat(query);
    window.open(url, "_blank");
}
/**
 * Downloads a file with the specified content, file name, and MIME type.
 * @param content The text to be downloaded
 * @param fileName The name of the file that will be generated
 * @param mimeType The mimeType that browser can understand to trigger download
 *
 * @author Eliezer Dev {@link https://github.com/eliezer-dev-software-enginner}
 */
function downloadFile(content, fileName, mimeType) {
    var blob = new Blob([content], { type: mimeType });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
}
export { searchTextInAnotherTab, downloadFile };
//# sourceMappingURL=browser-utils.js.map