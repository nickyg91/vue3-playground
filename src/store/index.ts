import { Calendar } from "@/models/calendar.model";
import User from "@/models/user.model";
import { InjectionKey } from "@vue/runtime-core";
import { createStore, Store } from "vuex";

export interface State {
  calendars: Calendar[];
  users: User[];
}
export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state() {
    return {
      calendars: [] as Calendar[],
      users: [] as User[],
      isNewUserBannerDismissed: false,
    };
  },
  mutations: {
    storeCalendar(state, item: Calendar) {
      state.calendars.push(item);
    },
    removeCalendar(state, item: Calendar) {
      const itemToRemove = state.calendars.findIndex(
        (x) => x.title === item.title
      );
      state.calendars.splice(itemToRemove, 1);
    },
    storeUser(state, item: User) {
      state.users.push(item);
    },
    removeUser(state, item: User) {
      const userToDelete = state.users.findIndex((x) => x.guid === item.guid);
      state.users.splice(userToDelete, 1);
    },
  },
  actions: {
    storeCalendar(context, calendar) {
      context.commit("storeCalendar", calendar);
    },
    removeCalendar(context, calendar: Calendar) {
      context.commit("removeCalendar", calendar);
    },
    storeUser(context, user) {
      context.commit("storeUser", user);
    },
    removeUser(context, user) {
      context.commit("removeUser", user);
    },
  },
  getters: {
    getStoreCalendars(state) {
      return state.calendars;
    },
    getUsers(state) {
      return state.users;
    },
  },
  modules: {},
});
