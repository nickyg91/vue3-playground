<style lang="scss">
.half-width {
  width: 50%;
}
</style>
<template>
  <div class="section title is-size-3">
    Calendars
    <hr />
    <div v-if="calendars?.length == 0">
      <div class="subtitle is-4">
        There are no calendars to display at this time.
      </div>
    </div>
    <div v-else>
      <div v-bind:key="calendar.title" v-for="calendar in calendars">
        {{ calendar.title }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { key } from "../store/index";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore(key);
    return {
      calendars: computed(() => store.state.calendars),
    };
  },
});
</script>
