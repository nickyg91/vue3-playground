/* eslint-disable */
import { State } from "./store";
import { Store } from "vuex";

declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module "@vue/runtime-core" {
  export default interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
