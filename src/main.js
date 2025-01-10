import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";


router.beforeEach((to, from, next) => {
  // Set title page sesuai meta title pada rute
  const defaultTitle = "My Vue App"; // Judul default jika meta.title tidak ada
  document.title = to.meta.title || defaultTitle;
  next();
});
const app = createApp(App);


app.use(router);
app.mount("#app");
