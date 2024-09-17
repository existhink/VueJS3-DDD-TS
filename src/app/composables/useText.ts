import { DEFAULT_CURRENCY_OPTIONS } from '../constants/useText.constant';

/**
 * @description Handle Capitalize the first letter of each word in a string
 */
export const useCapitalize = (keywords: string): string => {
  const capitalized: Array<unknown> = [];

  keywords.split(' ').forEach((word: string) => {
    capitalized.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  });

  return capitalized.join(' ');
};

/**
 * @description Handle format text to camel case
 */
export const useCamelCase = (keywords: string | undefined): string => {
  if (!keywords) return '';

  return keywords
    .replace(/\s(.)/g, $1 => {
      return $1.toUpperCase();
    })
    .replace(/\s/g, '')
    .replace(/^(.)/, $1 => {
      return $1.toLowerCase();
    });
};

/**
 * @description Handle Currency Format with vanilla javascript
 */
export const useCurrencyFormat = (data: number, options = DEFAULT_CURRENCY_OPTIONS): string => {
  return new Intl.NumberFormat('id-ID', options).format(data);
};

/**
 * @description Handle Parse String HTML to Text
 */
export const useParseStringHtmlToText = (keywords: string): string => {
  return new DOMParser().parseFromString(keywords, 'text/html').body.textContent ?? '';
};

/**
 * @description Handle Remove Special Character
 */
export const useRemoveSpecialCharacter = (keywords: string) => {
  return keywords.replace(/[^a-zA-Z0-9 ]/g, '');
};

/**
 * @description Handle Remove Space
 */
export const useRemoveSpace = (keywords: string) => {
  return keywords.replace(/\s/g, '');
};
