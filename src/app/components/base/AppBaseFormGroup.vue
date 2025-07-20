<script setup lang="ts">
// Constants
import { BaseValidation, ErrorObject } from '@vuelidate/core';

/**
 * @description Define the props interface
 */
interface IProps {
  classLabel?: string;
  isHideErrorMessage?: boolean;
  isNameAsLabel?: boolean;
  isNameAsPlaceholder?: boolean;
  isNotHaveSpacing?: boolean;
  labelFor?: string;
  name: string;
  spacingBottom?: string;
  validators: BaseValidation;
}

/**
 * @description Define props with default values and interfaces
 */
const props = withDefaults(defineProps<IProps>(), {
  classLabel: '',
  isHideErrorMessage: false,
  isNameAsLabel: false,
  isNameAsPlaceholder: false,
  isNotHaveSpacing: false,
  name: '',
  spacingBottom: 'mb-4',
  validators: undefined,
});

/**
 * @description Check if the form is invalid
 */
const isInvalid = computed(() => props.validators.$dirty && props.validators.$invalid);

/**
 * @description Check the error message and retrieve the first error
 */
const error: ComputedRef<ErrorObject | null> = computed(() => {
  if (!props.validators && (props.validators as BaseValidation)?.$errors.length === 0) return null;

  return props.validators.$errors[0];
});

/**
 * @description Handle format error message should same as on the consants, Then don't forget to replace special character {attribute} with the value from the form
 */
const message: ComputedRef<string> = computed(() => {
  const errorValidator = error ? error?.value?.$validator : null;

  if (!errorValidator) return '';

  return replaceParams(VALIDATION_MESSAGE[errorValidator] ?? `Error : ${errorValidator}`, {
    attribute: props.name,
    ...error?.value?.$params,
  });
});
</script>

<template>
  <div id="form-group" :class="{ [spacingBottom]: !isNotHaveSpacing }">
    <label v-if="isNameAsLabel" :class="classLabel" :for="labelFor">{{ name }}</label>
    <slot
      :is-error="!!error"
      :is-valid="isInvalid"
      :classes="{ 'border border-solid border-red-600': !!error, 'p-success': !isInvalid }"
    />
    <small class="text-red-600">{{ message }}</small>
  </div>
</template>
