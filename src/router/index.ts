import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../pages/Home.vue";
import DashBoard from "../components/layout/DashBoard.vue";
import About from "../pages/About.vue";

console.log('Home',Home);
console.log('DashBoard',DashBoard);
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
        component: About
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
