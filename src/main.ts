import { createApp } from "vue";
import router from "./router";
import store, { key } from "./store";
import App from "../src/App.vue";
// import Oruga from "@oruga-ui/oruga-next";
// import { bulmaConfig } from "./oruga-configs/bulma-config";

// import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
// import "@fortawesome/fontawesome-free/scss/regular.scss";
// import "@fortawesome/fontawesome-free/scss/solid.scss";
// import "bulma";
import PrimeVue from "primevue/config";
const app = createApp(App);
app
  .use(store, key)
  .use(router)
  .use(PrimeVue, { ripple: true, inputStyle: "outlined" })
  // .use(Oruga, {
  //   iconPack: "fas",
  //   ...bulmaConfig,
  // })
  .mount("#app");
