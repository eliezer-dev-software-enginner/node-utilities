/**
 * Opens a new browser tab with a Google search for the given text.
 * Leading/trailing whitespace and duplicate spaces are removed before searching.
 * @param text The text to search for on Google
 * @author Eliezer Dev {@link https://github.com/eliezer-dev-software-enginner}
 */
declare function searchTextInAnotherTab(text: string): void;
type MimeType = "application/json" | "text/plain" | "text/csv";
/**
 * Downloads a file with the specified content, file name, and MIME type.
 * @param content The text to be downloaded
 * @param fileName The name of the file that will be generated
 * @param mimeType The mimeType that browser can understand to trigger download
 *
 * @author Eliezer Dev {@link https://github.com/eliezer-dev-software-enginner}
 */
declare function downloadFile(content: string, fileName: string, mimeType: MimeType): void;
export { searchTextInAnotherTab, downloadFile };
//# sourceMappingURL=browser-utils.d.ts.map