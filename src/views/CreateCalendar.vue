<template>
  <div>
    <h1>Create a Calendar</h1>
  </div>
  <Divider></Divider>
  <div class="p-fluid p-formgrid p-grid">
    <div class="p-col-6">
      <div class="p-field">
        <label class="label" for="title">Title</label>
        <InputText v-model="calendar.title" id="firstname" type="text" />
      </div>
      <div class="p-field">
        <label class="label" for="title">Start Date</label>
        <Calendar v-model="calendar.startDate" />
      </div>
      <div class="p-field">
        <label class="label" for="title">End Date</label>
        <Calendar v-model="calendar.endDate" />
      </div>
      <div class="p-formgroup-inline">
        <div
          v-bind:key="day"
          v-for="day in daysOfTheWeek"
          class="p-field-checkbox"
        >
          <Checkbox
            :id="day.toString()"
            :value="day"
            v-model="calendar.daysOfTheWeek"
          />
          <label :for="day.toString()">{{ dayOfTheWeek[day] }}</label>
        </div>
      </div>
    </div>
  </div>
  <Button @click="submitCalendar" label="Submit"></Button>
</template>
<script lang="ts">
import { Calendar as MyCalendar } from "@/models/calendar.model";
import { DayOfTheWeek } from "@/models/day-of-the-week.enum";
import { key } from "@/store";
import Button from "primevue/button";
import Calendar from "primevue/calendar";
import Checkbox from "primevue/checkbox";
import Divider from "primevue/divider";
import InputText from "primevue/inputtext";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useToast } from "primevue/usetoast";
export default defineComponent({
  components: {
    Divider,
    InputText,
    Calendar,
    Button,
    Checkbox,
  },
  setup() {
    const toastService = useToast();
    const store = useStore(key);
    const calendar = ref(new MyCalendar());
    const daysOfTheWeek: DayOfTheWeek[] = [];
    const dayOfTheWeek = DayOfTheWeek;
    for (const item in dayOfTheWeek) {
      if (!isNaN(Number(item))) {
        daysOfTheWeek.push(Number(item));
      }
    }
    const submitCalendar = () => {
      store.dispatch("storeCalendar", calendar.value);
      calendar.value = new MyCalendar();
      toastService.add({
        severity: "success",
        summary: "Calendar successfully created!",
        life: 3000,
        closable: true,
      });
    };
    return {
      calendar,
      daysOfTheWeek,
      dayOfTheWeek,
      submitCalendar,
    };
  },
});
</script>
