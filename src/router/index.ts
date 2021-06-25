import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import Home from "../views/Home.vue";
import Layout from "../layout/Index.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: '/dashboard',
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("../views/dashboard/Index.vue"),
      },
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "/404",
    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
