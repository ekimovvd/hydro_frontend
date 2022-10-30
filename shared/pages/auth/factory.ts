export interface AuthRequestInterface {
  login: string;
  password: string;
}

export interface AuthResponseInterface {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export enum AuthApiEnum {
  auth = "/auth/Connect/token",
}
