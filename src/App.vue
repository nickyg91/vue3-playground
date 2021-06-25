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
        label: "Home",
        to: "/",
      },
      {
        label: "About",
        to: "/About",
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
  justify-content: center;
  display: flex;
}
.p-menubar {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
body {
  margin: 0;
}
</style>
