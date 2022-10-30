import { Context } from "@nuxt/types";
import { ProjectServicesInterface } from "./factory";
import { Http } from "./http";
import { Url } from "./url";

export function createProjectServices(
  context: Context
): ProjectServicesInterface {
  const { $axios } = context;

  const projectUrlGenerator = new Url();
  const projectRepository = new Http($axios, projectUrlGenerator);

  return {
    projectRepository,
  };
}
