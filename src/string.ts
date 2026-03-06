/**
 * Confere se a string recebida é vazia ou nula.
 * @param value string recebida
 * @author Eliezer Dev
 * @returns boolean
 */
function isEmptyOrNull(value: string) {
  const v = value.trim();

  return v.length == 0 || v == '' || v == null;
}

export { isEmptyOrNull };
