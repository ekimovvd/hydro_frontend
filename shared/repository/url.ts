import { AuthApiEnum } from "../pages/auth/factory";

export class Url {
  auth(): string {
    return AuthApiEnum.auth;
  }
}
