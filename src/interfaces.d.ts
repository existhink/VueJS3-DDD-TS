import { BaseValidation } from '@vuelidate/core';

export {};

/**
 * @description Here's a way to extend the global interfaces.
 */
declare global {
  interface IBindStateForm {
    solo: boolean;
    flat: boolean;
    placeholder: string;
    class: string;
    hideDetails: string;
    autocomplete: string;
  }

  interface IComponentComposableOptions {
    clearBeforeUnmount?: boolean;
  }

  interface ICurrencyOptions {
    minimumFractionDigits: number;
    style: string;
    currency: string;
  }

  interface IPagination {
    total: number;
    skip: number;
    limit: number;
  }

  interface IPropsFormGroup {
    isNameAsLabel: boolean;
    isNameAsPlaceholder: boolean;
    isNotHaveSpacing: boolean;
    labelFor?: string;
    name: string;
    spacingBottom: string;
    validators: BaseValidation;
  }

  interface IResponseListenerForm {
    input: () => void;
    blur: () => void;
  }

  interface IBusEvent {
    [key: string]: unknown;
    [key: symbol]: unknown;
  }
}
