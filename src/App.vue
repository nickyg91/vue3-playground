<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <router-link
        class="navbar-item"
        v-bind:key="route.to"
        v-for="route in routes"
        :to="route.to"
        active
      >
        {{ route.label }}</router-link
      >
    </div>
  </nav>
  <div class="mt-5 container">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const routes = ref([
      {
        label: "Home",
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
html {
  min-height: 100vh;
}
</style>
