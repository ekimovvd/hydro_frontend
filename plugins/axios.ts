import { Plugin } from "@nuxt/types";
import { initializeAxios } from "~/shared/repository/initialize";

const axiosPlugin: Plugin = (context) => {
  const { $axios } = context;

  initializeAxios($axios);

  $axios.interceptors.request.use(
    async (config) => {
      return config;
    },

    (error) => {
      return Promise.reject(error);
    }
  );

  $axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      //   const { response } = error;
      //   const { status } = response;

      console.log("error", error);

      //   return Promise.reject(status);
    }
  );
};

export default axiosPlugin;
