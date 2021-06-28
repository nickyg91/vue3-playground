import { Calendar } from "@/models/calendar.model";
import { InjectionKey } from "@vue/runtime-core";
import { createStore, Store } from "vuex";

export interface State {
  calendars: Calendar[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state() {
    return {
      calendars: [] as Calendar[],
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
  },
  actions: {
    storeCalendar(context, calendar) {
      context.commit("storeCalendar", calendar);
    },
    removeCalendar(context, calendar: Calendar) {
      context.commit("removeCalendar", calendar);
    },
  },
  modules: {},
});
