import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/NewsView.vue"),
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("../views/MenuView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/admin",
      name: "dashboard",
      component: () => import("../views/Admin_View/AdminMenu.vue"),
    },
    {
      path: "/admin/login",
      name: "loginDash",
      component: () => import("../views/Admin_View/LoginDash.vue"),
    },
    {
      path: "/admin/menu",
      name: "menuDash",
      component: () => import("../views/Admin_View/AdminMenu.vue"),
    },
    {
      path: "/admin/menu",
      name: "menuDash",
      component: () => import("../views/Admin_View/AdminMenu.vue"),
    },
  ],
});

export default router;
