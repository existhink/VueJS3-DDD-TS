import { defineStore } from 'pinia';

// Interfaces
import { AxiosRequestConfig } from 'axios';
import { IAuthenticationResponse, IAuthenticationStateStore } from '../interfaces';

// Plugins
import httpClient from '@/plugins/axios';
import { AUTHENTICATION_ENDPOINT_LOGIN } from '../constants';

export const useAuthenticationStore = defineStore('authentication', {
  state: (): IAuthenticationStateStore => ({
    authentication_isLoading: false,
    authentication_token: '',
    authentication_userData: null,
  }),
  getters: {
    /**
     * @description Usually, we define getters if the getter name is different from the state name.
     */
  },
  actions: {
    /**
     * @description Handle fetch api authentication login.
     * @url /authentication/login
     * @method POST
     * @access public
     */
    async fetchAuthentication_login(
      payload: unknown,
      requestConfigurations: AxiosRequestConfig,
    ): Promise<IAuthenticationResponse> {
      this.authentication_isLoading = true;

      try {
        const response = await httpClient.post<IAuthenticationResponse>(AUTHENTICATION_ENDPOINT_LOGIN, payload, {
          ...requestConfigurations,
        });
        this.authentication_token = response.data.token;

        return Promise.resolve(response.data);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        this.authentication_isLoading = false;
      }
    },
  },
  persist: {
    key: 'authentication',
    paths: ['authentication_token'],
    storage: sessionStorage,
  },
});
