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
export { searchTextInAnotherTab };
//# sourceMappingURL=browser-utils.js.map