import { Plugin } from "@nuxt/types";
import { initializeAxios } from "~/shared/repository/initialize";

const axiosPlugin: Plugin = (context) => {
  const { $axios, app, redirect } = context;

  initializeAxios($axios);

  $axios.interceptors.request.use(
    async (config) => {
      config.headers.Authorization = `Bearer ${app.$cookies.get(
        "access_token"
      )}`;
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
      if (error.response.status === 401) {
        redirect("/auth");
      }
    }
  );
};

export default axiosPlugin;
