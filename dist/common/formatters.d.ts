/**
 * Formata uma string de CNPJ para o padrão oficial brasileiro: XX.XXX.XXX/XXXX-XX.
 * Caso a string não possua exatamente 14 dígitos, ela é retornada sem alteração.
 * @param cnpj String contendo o CNPJ (com ou sem formatação)
 * @author Eliezer Dev {@link https://github.com/eliezer-dev-software-enginner}
 * @returns CNPJ formatado ou a string original caso inválida
 */
declare function formatToCnpj(cnpj: string): string;
export { formatToCnpj };
//# sourceMappingURL=formatters.d.ts.map