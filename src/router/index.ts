import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import DashBoard from "../components/layout/DashBoard.vue";
import MainDashboard from "../pages/MainDashboard.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "overview",
    component: DashBoard,
    redirect: {
      name: "overview.main"
    },
    children: [
      {
        path: "/",
        name: "overview.main",
        component: MainDashboard
      },
      {
        path: "animals",
        name: "overview.animals",
      },
      {
        path: "food",
        name: "overview.food",
      },
      {
        path: "music",
        name: "overview.music",
      },
      {
        path: "settings",
        name: "overview.settings",

      },     {
        path: "logout",
        name: "overview.logout",

      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
