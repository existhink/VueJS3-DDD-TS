import { BaseValidation } from '@vuelidate/core';

/**
 * @description Handle binding state form
 */
export const useBindStateForm = (placeholder: string): IBindStateForm => {
  return {
    solo: true,
    flat: true,
    placeholder,
    class: 'custom-textfield font-weight-bold font-inter',
    hideDetails: 'auto',
    autocomplete: 'new-password',
  };
};

/**
 * @description Handle listener form
 */
export const useListenerForm = (validations: BaseValidation, formName: string): IResponseListenerForm => {
  return {
    input: validations[formName].$touch,
    blur: validations[formName].$touch,
  };
};
