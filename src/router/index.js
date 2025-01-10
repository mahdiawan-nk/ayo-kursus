// import { meta } from '@babel/eslint-parser'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      title: "Ayo Kursus",
    },
  },
  {
    path: "/course/:type",
    name: "Course",
    component: () => import("../views/Course.vue"),
    meta: {
      title: "Ayo Kursus",
    },
  },
  {
    path: "/daftar",
    name: "Daftar",
    component: () => import("../views/FormPendaftaran.vue"),
    meta: {
      title: "Ayo Kursus",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
