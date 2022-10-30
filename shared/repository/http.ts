import { AxiosInstance } from "axios";
import {
  AuthRequestInterface,
  AuthResponseInterface,
} from "../pages/auth/factory";
import { ApiWrapper, ProjectRepositoryInterface } from "./factory";
import { Url } from "./url";

export class Http implements ProjectRepositoryInterface {
  constructor(
    private readonly axios: AxiosInstance,
    private readonly url: Url
  ) {}

  async auth(params: AuthRequestInterface): Promise<AuthResponseInterface> {
    const { data } = await this.axios.post<ApiWrapper<AuthResponseInterface>>(
      this.url.auth(),
      params
    );

    return data.response;
  }
}
