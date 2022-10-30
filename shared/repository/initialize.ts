import { ProjectServicesInterface } from "./factory";
import { NuxtAxiosInstance } from "@nuxtjs/axios";

let $axios: NuxtAxiosInstance;
let $projectServices: ProjectServicesInterface;

function initializeAxios(axiosInstance: NuxtAxiosInstance): void {
  $axios = axiosInstance;
}

function initializeProjectServices(
  projectServicesInstance: ProjectServicesInterface
): void {
  $projectServices = projectServicesInstance;
}

export { initializeAxios, initializeProjectServices, $axios, $projectServices };
