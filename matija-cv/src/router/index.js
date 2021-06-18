import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/education",
    name: "education",
    component: () => import("../views/Education.vue")
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/Projects.vue")
  },
  {
    path: "/work-experience",
    name: "work-experience",
    component: () => import("../views/WorkExperience.vue")
  },
  {
    path: "/technologies",
    name: "technologies",
    component: () => import("../views/Technologies.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
