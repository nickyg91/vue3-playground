<template>
  <Menubar class="p-menubar" :model="routes"></Menubar>
  <div class="content">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Menubar from "primevue/menubar";
export default defineComponent({
  components: {
    Menubar,
  },
  setup() {
    const routes = ref([
      {
        label: "Calendars",
        to: "/",
      },
      {
        label: "Create",
        to: "/create",
      },
    ]);
    return {
      routes,
    };
  },
});
</script>
<style lang="scss">
@import "~primevue/resources/themes/vela-blue/theme.css"; //theme
@import "~primevue/resources/primevue.min.css"; //core css
@import "~primeicons/primeicons.css"; //icons
@import "~primeflex/primeflex.css";
html {
  min-height: 100vh;
}
.content {
  padding-left: 10%;
  padding-right: 10%;
  margin-top: 15px;
}
.p-menubar {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  color: white;
  background-color: var(--surface-0);
}
</style>
