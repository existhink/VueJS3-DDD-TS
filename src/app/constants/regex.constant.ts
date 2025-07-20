export const REGEX_ANY_CHAR = /.*$/;
export const REGEX_DIGIT = /(?=.*\d)/;
export const REGEX_NO_PERIOD_OR_NEWLINE = /^(?![.\n])/;
export const REGEX_LOWERCASE = /(?=.*[a-z])/;
export const REGEX_PHONE_NUMBER = /^\d{8,12}$/;
export const REGEX_PHONE_CODE = /^\+\d{1,5}$/;
export const REGEX_SPECIAL_CHAR = /(?=.*\W)/;
export const REGEX_UPPERCASE = /(?=.*[A-Z])/;

export const REGEX_PASSWORD = new RegExp(
  `${REGEX_NO_PERIOD_OR_NEWLINE.source}${REGEX_UPPERCASE.source}${REGEX_LOWERCASE.source}(?:${REGEX_DIGIT.source}|${REGEX_SPECIAL_CHAR.source})${REGEX_ANY_CHAR.source}`,
);
