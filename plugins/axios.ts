export default function ({ $axios, store, redirect }) {
  // $api.interceptors.request.use((config) => {
  //   config.headers.Authorization = `Bearer ${localStorage.getItem(
  //     "access_token"
  //   )}`;
  //   return config;
  // });
  $axios.onError((error) => {
    console.log("error", error);
    // if (error.response && error.response.status === 500) {
    //   redirect("/login");
    // }
  });
  $axios.interceptors.response.use((response) => {
    console.log("response", response);
    // if (response.status === 200) {
    //   if (
    //     response.request.responseURL &&
    //     response.request.responseURL.includes("login")
    //   ) {
    //     store.dispatch("setUser", response);
    //   }
    // }
    return response;
  });
}
