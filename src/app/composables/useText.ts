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
 * @description Handle format text to snake case
 */
export const useSnakeCase = (keywords: string | undefined): string => {
  if (!keywords) return '';

  return keywords
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replace(/\s+/g, '_')
    .toLowerCase();
};

/**
 * @description Handle Currency Format with vanilla JavaScript
 * @param params - Configuration object
 * @param params.data - The number to format
 * @param params.options - Intl.NumberFormat options (defaults to DEFAULT_CURRENCY_OPTIONS)
 * @param params.hidePrefix - Whether to hide the currency symbol (e.g., Rp) (default: false)
 * @param params.addSuffix - Whether to add a suffix (e.g., ,00) (default: false)
 */
export const useCurrencyFormat = ({
  data,
  options = DEFAULT_CURRENCY_OPTIONS,
  hidePrefix = false,
  addSuffix = false,
}: {
  data: number;
  options?: Intl.NumberFormatOptions;
  hidePrefix?: boolean;
  addSuffix?: boolean;
}): string => {
  // Ensure the currency symbol is included unless explicitly hidden
  const formatOptions: Intl.NumberFormatOptions = {
    ...options,
    style: hidePrefix ? 'decimal' : 'currency', // Use 'decimal' to hide currency symbol
    currency: hidePrefix ? undefined : options.currency || 'IDR', // Ensure currency is set for 'currency' style
  };

  let formatted = new Intl.NumberFormat('id-ID', formatOptions).format(data);

  // Add suffix if specified
  if (addSuffix) {
    formatted = formatted.replace(/,\d{2}$/, ''); // Remove decimal part if present
    formatted = `${formatted},00`; // Append ,00
  }

  return formatted;
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

/**
 * @description Handle format date
 * - yyyy: year (e.g. 2025)
 * - mm: month (01-12)
 * - dd: day (01-31)
 * - hh: hour (00-23)
 * - MM: minutes (00-59)
 * - ss: seconds (00-59)
 * - am/pm: am or pm (12-hour format)
 */
/**
 * @description Handle format date
 * - yyyy: year (e.g. 2025)
 * - mm: month (01-12)
 * - dd: day (01-31)
 * - hh: hour (00-23 for 24-hour, 01-12 for 12-hour with am/pm)
 * - MM: minutes (00-59)
 * - ss: seconds (00-59)
 * - am/pm: AM or PM (12-hour format)
 */
export const useFormatDate = (
  dateInput: string | number | Date,
  format: string = 'dd/mm/yyyy hh:MM am/pm',
): string => {
  let date: Date;

  if (typeof dateInput === 'number') {
    // Unix timestamp in seconds
    date = new Date(dateInput * 1000); // Convert seconds to milliseconds
  } else if (typeof dateInput === 'string') {
    // String date
    date = new Date(dateInput);
  } else if (dateInput instanceof Date) {
    // Date object
    date = dateInput;
  } else {
    throw new Error('Invalid date input');
  }

  // Handle invalid date
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  const hours = date.getHours();
  const is12HourFormat = format.includes('am/pm');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 || 12; // Convert 0 to 12 for 12-hour format

  const map: Record<string, string | number> = {
    yyyy: date.getFullYear(),
    mm: String(date.getMonth() + 1).padStart(2, '0'),
    dd: String(date.getDate()).padStart(2, '0'),
    hh: is12HourFormat ? String(hours12).padStart(2, '0') : String(hours).padStart(2, '0'),
    MM: String(date.getMinutes()).padStart(2, '0'),
    ss: String(date.getSeconds()).padStart(2, '0'),
    'am/pm': ampm,
  };

  return format.replace(/yyyy|mm|dd|hh|MM|ss|am\/pm/g, matched => map[matched].toString());
};

export const useFormatDateLocal = (date: string | Date | number) => {
  const d = new Date(date);
  const pad = (n: unknown) => String(n).padStart(2, '0');
  const ms = String(d.getMilliseconds()).padStart(3, '0');

  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}.${ms}`;
};

export const useTitleCaseWithSpaces = (inputString: string): string => {
  if (!inputString) {
    return ''; // Handle empty or null/undefined input
  }

  // Replace underscores with spaces
  const withSpaces = inputString.replace(/_/g, ' ');

  // Capitalize the first letter of each word
  // This uses a regular expression to match the first character of the string
  // and the first character after any whitespace, then converts it to uppercase.
  const titleCase = withSpaces.replace(/\b\w/g, char => char.toUpperCase());

  return titleCase;
};
