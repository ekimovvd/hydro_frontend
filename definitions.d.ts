import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { NuxtApp } from "@nuxt/types/app";
import { ProjectServicesInterface } from "./shared/repository/factory";
import cookies from "cookie-universal-nuxt";

declare module "vue/types/vue" {
  interface Vue {
    $projectServices: ProjectServicesInterface;
    $nuxt: NuxtApp;
    $cookies: cookies;
    b: Block;
  }
}

declare module "@nuxt/types" {
  interface Context {
    $axios: NuxtAxiosInstance;
    $projectServices: ProjectServicesInterface;
    $cookies: cookies;
  }
}

interface Block {
  (element?: string, mods?: ModsType | null): string;
  (mods?: ModsType): string;
}

interface ModsType {
  [key: string]: boolean | string | number | undefined;
}
