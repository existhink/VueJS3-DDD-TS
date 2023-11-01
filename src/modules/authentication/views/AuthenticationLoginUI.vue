<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST" @submit.prevent="authentication_onSubmit()">
        <div>
          <AppBaseFormGroup
            class-label="block text-sm font-medium leading-6 text-gray-900"
            is-name-as-label
            label-for="username"
            name="Username"
            :validators="authentication_formValidations.username"
            v-slot="{ classes }"
          >
            <div class="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                v-model="authentication_formData.username"
                v-bind="{ ...useBindStateForm('John Doe') }"
                v-on="useListenerForm(authentication_formValidations, 'username')"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                :class="{ ...classes }"
              />
            </div>
          </AppBaseFormGroup>
        </div>

        <div>
          <AppBaseFormGroup
            name="Password"
            :validators="authentication_formValidations.password"
            v-slot="{ classes }"
          >
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>

            <div class="mt-2">
              <input
                id="password"
                :class="{ ...classes }"
                name="password"
                type="password"
                v-model="authentication_formData.password"
                v-bind="{ ...useBindStateForm('*********') }"
                v-on="useListenerForm(authentication_formValidations, 'password')"
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </AppBaseFormGroup>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >Start a 14 day free trial</a
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Composables
import { useBindStateForm, useListenerForm } from '@/app/composables';

// Services
import { useAuthenticationLoginService } from '../services/useAuthenticationLogin.service';

/**
 * @description Destructure all the data and methods what we need
 */
const { authentication_formData, authentication_formValidations, authentication_onSubmit } =
  useAuthenticationLoginService();
</script>
