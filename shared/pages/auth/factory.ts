export interface AuthRequestInterface {
  login: string;
  password: string;
}

export interface AuthResponseInterface {
  accessToken: string;
  expiresIn: number;
  tokenType: string;
}

export enum AuthApiEnum {
  auth = "/auth/Connect/token",
}
