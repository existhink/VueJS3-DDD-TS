export interface IAuthenticationStateStore {
  authentication_isLoading: boolean;
  authentication_token: string;
  authentication_userData: unknown;
}

export interface IAuthenticationPayload {
  email: string;
  password: string;
}

export interface IAuthenticationResponse {
  token: string;
  userData: unknown;
}
