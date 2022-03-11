import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/About",
    name: "About",
    component: () => import("../views/Home.vue"),
  },

  {
    path: "/422",
    name: "422",
    component: () => import("../views/422.vue"),
  },
  {
    path: "/401",
    name: "401",
    component: () => import("../views/401.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory("/"),
  routes,
});

export default router;
