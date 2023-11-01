// Composables
import { useHttpAbort } from '@/app/composables';

// Constants
import { AUTHENTICATION_LOGIN_REQUEST } from '../constants';

// Store / Pinia
import { useAuthenticationStore } from '../store';

// Vuelidate
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { computed, reactive } from 'vue';

// Vue Router
import { useRouter } from 'vue-router';

/**
 * @description Closure function that returns everything what we need into an object
 */
export const useAuthenticationLoginService = () => {
  const { httpAbort_registerAbort, httpAbort_abortAllRequest } = useHttpAbort();
  const store = useAuthenticationStore(); // Instance of the store
  const router = useRouter(); // Instance of the router

  /**
   * @description Reactive data binding
   */
  const authentication_isLoading = store.authentication_isLoading;
  const authentication_formData = reactive({
    username: '',
    password: '',
  });

  /**
   * @description Form validations
   */
  const authentication_formRules = computed(() => ({
    username: { required },
    password: { required },
  }));
  const authentication_formValidations = useVuelidate(authentication_formRules, authentication_formData, {
    $autoDirty: true,
  });

  /**
   * @description Handle fetch api authentication login. We call the fetchAuthenticationLogin function from the store to handle the request.
   */
  const authentication_fetchAuthenticationLogin = async () => {
    try {
      const result = await store.fetchAuthentication_login(authentication_formData, {
        ...httpAbort_registerAbort(AUTHENTICATION_LOGIN_REQUEST),
      });
      router.push({ name: 'dashboard' });

      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  /**
   * @description Handle action on submit form.
   */
  const authentication_onSubmit = async (): Promise<void> => {
    authentication_formValidations.value.$touch();
    if (authentication_formValidations.value.$invalid) return;

    try {
      await authentication_fetchAuthenticationLogin();
    } catch (error) {
      Promise.reject(error);
    }
  };

  return {
    authentication_abortAllRequest: httpAbort_abortAllRequest,
    authentication_formData,
    authentication_formValidations,
    authentication_isLoading,
    authentication_onSubmit,
  };
};
