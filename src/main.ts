import { createApp } from "vue";
import router from "./router";
import store, { key } from "./store";
import App from "../src/App.vue";
import ToastService from "primevue/toastservice";
import PrimeVue from "primevue/config";
const app = createApp(App);
app
  .use(store, key)
  .use(router)
  .use(ToastService)
  .use(PrimeVue, { ripple: true, inputStyle: "outlined" })
  .mount("#app");
