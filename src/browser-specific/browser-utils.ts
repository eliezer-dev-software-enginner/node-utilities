//src/browser-specific/browser-utils.ts

/**
 * Opens a new browser tab with a Google search for the given text.
 * Leading/trailing whitespace and duplicate spaces are removed before searching.
 * @param text The text to search for on Google
 * @author Eliezer Dev {@link https://github.com/eliezer-dev-software-enginner}
 */
function searchTextInAnotherTab(text: string) {
  const textoLimpo = text
    .trim() // remove espaços nas bordas
    .replace(/\s+/g, " "); // remove espaços duplicados

  const query = encodeURIComponent(textoLimpo);
  const url = `https://www.google.com/search?q=${query}`;

  window.open(url, "_blank");
}

export { searchTextInAnotherTab };
