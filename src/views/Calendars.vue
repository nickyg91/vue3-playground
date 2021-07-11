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
    <DataTable :value="calendars">
      <Column field="title" header="Title"></Column>
      <Column field="startDate" header="Start Date">
        <template #body="slotProps">
          <p>
            {{
              slotProps.data.startDate.toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
            }}
          </p>
        </template>
      </Column>
      <Column field="endDate" header="End Date">
        <template #body="slotProps">
          <p>
            {{
              slotProps.data.endDate.toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })
            }}
          </p>
        </template>
      </Column>
      <Column field="daysOfTheWeek" header="Days of the Week">
        <template #body="slotProps">
          <p>
            {{ convertDayOfWeekToDayString(slotProps.data.daysOfTheWeek) }}
          </p>
        </template>
      </Column>
      <Column field="repeatsEvery" header="Repeats">
        <template #body="slotProps">
          <p>
            {{ convertRepeatToReadableString(slotProps.data.repeatsEvery) }}
          </p>
        </template>
      </Column>
      <Column class="p-text-right" header="">
        <template #body="slotProps">
          <Button
            @click="removeCalendar(slotProps.data)"
            icon="pi pi-times"
            class="p-button-outlined p-button-rounded p-button-danger"
          ></Button>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
<script lang="ts">
import { key } from "../store/index";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { DayOfTheWeek } from "@/models/day-of-the-week.enum";
import { CalendarRepeat } from "@/models/calendar-repeat.enum";
import Button from "primevue/button";
import { Calendar } from "@/models/calendar.model";
export default defineComponent({
  components: {
    DataTable,
    Column,
    Button,
  },
  setup() {
    const store = useStore(key);
    const dayOfTheWeek = DayOfTheWeek;
    const convertDayOfWeekToDayString = (daysOfTheWeek: DayOfTheWeek[]) => {
      return daysOfTheWeek
        .sort()
        .map((x) => DayOfTheWeek[x].toString())
        .join(", ");
    };
    const convertRepeatToReadableString = (repeat: CalendarRepeat) => {
      return CalendarRepeat[repeat].toString();
    };
    const removeCalendar = (calendar: Calendar) => {
      store.dispatch("removeCalendar", calendar);
    };
    return {
      dayOfTheWeek,
      calendars: computed(() => {
        return store.getters.getgetStoreCalendars;
      }),
      convertDayOfWeekToDayString,
      convertRepeatToReadableString,
      removeCalendar,
    };
  },
});
</script>
