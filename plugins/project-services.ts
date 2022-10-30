import { Plugin } from "@nuxt/types";
import { initializeProjectServices } from "~/shared/repository/initialize";
import { createProjectServices } from "~/shared/repository/services";

const projectServicesPlugin: Plugin = (context, inject) => {
  const projectServicesInstance = createProjectServices(context);

  initializeProjectServices(projectServicesInstance);
  inject("projectServices", projectServicesInstance);
};

export default projectServicesPlugin;
