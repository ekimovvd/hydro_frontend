import {
  AuthRequestInterface,
  AuthResponseInterface,
} from "../pages/auth/factory";

export interface ProjectRepositoryInterface {
  auth(params?: AuthRequestInterface): Promise<AuthResponseInterface>;
}

export interface ProjectServicesInterface {
  projectRepository: ProjectRepositoryInterface;
}

export interface ApiWrapper<T> {
  status?: string;
  description?: string;
  response: T;
}