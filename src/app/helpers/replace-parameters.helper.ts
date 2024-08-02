/**
 *
 * @param str
 * @param replacements
 * @example replaceParams("url/{id}", { id: 1 }) => "url/1"
 * @returns {string}
 */
export const replaceParams = (str: string, replacements: Record<string, string> = {}) => {
  return str.replace(
    /{\w+}/g,
    placeholder => replacements[placeholder.substring(1, placeholder.length - 1)] || placeholder,
  );
};
