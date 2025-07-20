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

/**
 * @description A composable to simplify accessing Vuelidate validation states for nested fields.
 * Handles single-level, nested, and sub-nested fields in a Vuelidate $each structure.
 */
export const useFormValidateEach = ({
  validation,
  field,
  fieldIndex,
  nesting = null,
  subNesting = null,
}: IVuelidateValidationEachConfig): IValidationResult => {
  // Guard clause for required validation parameter
  if (!validation) {
    throw new Error('Parameter "validation" is required in useFormValidateEach');
  }

  // Helper to safely navigate nested Vuelidate structure
  const getErrors = (): unknown[] => {
    try {
      let current = validation.$each.$response;

      // Handle nesting (e.g., competency[0])
      if (nesting) {
        current = current.$data[nesting.index][nesting.field].$each;
      }

      // Handle sub-nesting (e.g., competency[0].budget[1])
      if (subNesting) {
        current = current.$data[subNesting.index][subNesting.field].$each;
      }

      // Get errors for the field at the specified index
      return current.$errors[fieldIndex][field] ?? [];
    } catch (error) {
      console.error(`Error accessing validation for field "${field}":`, error);

      return [];
    }
  };

  return {
    $invalid: validation.$invalid,
    $dirty: validation.$dirty,
    $errors: getErrors(),
  };
};
