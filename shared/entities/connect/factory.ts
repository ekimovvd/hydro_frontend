export interface AuthInterface {
  login: string;
  password: string;
}

export interface TokenInterface {
  access_token: string;
  expires_in: number;
  token_type: string;
}
