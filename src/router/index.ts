import CreateCalendarVue from "@/views/CreateCalendar.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Calendars from "../views/Calendars.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Calendars",
    component: Calendars,
  },
  {
    path: "/create",
    name: "CreateCalendar",
    component: CreateCalendarVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "is-active",
});

export default router;
