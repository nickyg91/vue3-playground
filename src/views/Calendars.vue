<style lang="scss">
.half-width {
  width: 50%;
}
</style>
<template>
  <div class="p-grid">
    <div class="p-col">
      <h1>Calendars</h1>
      <hr />
    </div>
  </div>

  <div class="p-grid">
    <div class="p-col-2">
      <div v-if="!calendars || calendars.length == 0">
        <div>There are no calendars to display at this time.</div>
      </div>
      <div v-else>
        <div v-bind:key="calendar?.title" v-for="calendar in calendars">
          <Panel :header="calendar.title">
            <div>
              <p v-bind:key="day" v-for="day in calendar.daysOfTheWeek?.sort()">
                {{ dayOfTheWeek[day].toString() }}
              </p>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { key } from "../store/index";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import Panel from "primevue/panel";
import { DayOfTheWeek } from "@/models/day-of-the-week.enum";
export default defineComponent({
  components: {
    Panel,
  },
  setup() {
    const store = useStore(key);
    const dayOfTheWeek = DayOfTheWeek;
    return {
      dayOfTheWeek,
      calendars: computed(() => {
        return store.state.calendars;
      }),
    };
  },
});
</script>
