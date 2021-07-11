import CreateCalendar from "@/views/CreateCalendar.vue";
import Users from "@/views/Users.vue";
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
    component: CreateCalendar,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "is-active",
});

export default router;
