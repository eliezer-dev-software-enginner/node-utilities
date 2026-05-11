/**
 * Formata uma string de CNPJ para o padrão oficial brasileiro: XX.XXX.XXX/XXXX-XX.
 * Caso a string não possua exatamente 14 dígitos, ela é retornada sem alteração.
 * @param cnpj String contendo o CNPJ (com ou sem formatação)
 * @author Eliezer Dev {@link https://github.com/eliezer-dev-software-enginner}
 * @returns CNPJ formatado ou a string original caso inválida
 */
function formatToCnpj(cnpj: string): string {
  const apenasDigitos = cnpj.replace(/\D/g, "");
  if (apenasDigitos.length !== 14) return cnpj;
  return apenasDigitos.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5",
  );
}

export { formatToCnpj };
