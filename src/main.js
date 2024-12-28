import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";

router.beforeEach((to, from, next) => {
  // Set title page sesuai meta title pada rute
  const defaultTitle = "My Vue App"; // Judul default jika meta.title tidak ada
  document.title = to.meta.title || defaultTitle;
  next();
});
const app = createApp(App);
app.use(
  Vue3Toasity,
  {
    autoClose: 2000,
    closeOnClick: false,
    pauseOnHover: false,
    pauseOnFocusLoss: false,
    limit: 1,
    dangerouslyHTMLString: true,
  } // global options type definition --> ToastContainerOptions
);

app.use(router);
app.mount("#app");
