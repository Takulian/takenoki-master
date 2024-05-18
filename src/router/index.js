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
      path: "/admin/login",
      name: "loginDash",
      component: () => import("../views/Admin_View/LoginDash.vue"),
    },
    {
      path: "/admin/dashboard",
      name: "dashboard",
      component: () => import("../views/Admin_View/AdminDash.vue"),
    },
    {
      path: "/admin/menu",
      name: "menuDash",
      component: () => import("../views/Admin_View/AdminMenu.vue"),
    },
    {
      path: "/admin/news",
      name: "newsDash",
      component: () => import("../views/Admin_View/NewsDash.vue"),
    },
    {
      path: "/admin/feedback",
      name: "feedDash",
      component: () => import("../views/Admin_View/FeedDash.vue"),
    },
  ],
});

export default router;
