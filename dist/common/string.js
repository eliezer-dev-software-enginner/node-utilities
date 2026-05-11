//src/common/string.ts
/**
 * Confere se a string recebida é vazia ou nula.
 * @param value string recebida
 * @author Eliezer Dev
 * @returns boolean
 */
function isEmpty(value) {
    var v = value.trim();
    return v.length == 0 || v == "";
}
export { isEmpty };
//# sourceMappingURL=string.js.map