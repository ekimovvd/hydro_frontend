import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { NuxtApp } from "@nuxt/types/app";
import { ProjectServicesInterface } from "./shared/repository/factory";

declare module "vue/types/vue" {
  interface Vue {
    $projectServices: ProjectServicesInterface;
    $nuxt: NuxtApp;
  }
}

declare module "@nuxt/types" {
  interface Context {
    $axios: NuxtAxiosInstance;
    $projectServices: ProjectServicesInterface;
  }
}
