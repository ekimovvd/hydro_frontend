export default function ({ app, redirect }) {
  const access_token = app.$cookies.get("access_token");

  if (!access_token) {
    redirect("/auth");
  }
}
