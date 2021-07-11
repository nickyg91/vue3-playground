<template>
  <div class="p-formgrid p-grid">
    <div class="p-md-offset-3 p-md-6 p-sm-12">
      <div>
        <h1>Create a Calendar</h1>
      </div>
      <Divider></Divider>
      <div class="p-fluid p-field">
        <label class="label" for="title">Title</label>
        <InputText
          :class="{
            'p-invalid': v$.title.$invalid,
          }"
          v-model="v$.title.$model"
          type="text"
        />
        <small v-if="v$.title.$invalid" class="p-error"
          >Title is required.</small
        >
      </div>
      <div class="p-fluid p-field">
        <label class="label" for="title">Start Date</label>
        <Calendar
          :class="{
            'p-invalid': v$.startDate.$invalid,
            'p-valid': !v$.startDate.$invalid,
          }"
          v-model="calendar.startDate"
          :showIcon="true"
        />
        <div
          v-for="error in v$.startDate.$silentErrors"
          v-bind:key="error.$uid"
        >
          <small class="p-error">
            {{ error.$message }}
          </small>
        </div>
      </div>
      <div class="p-fluid p-field">
        <label class="label" for="title">End Date</label>
        <Calendar
          :class="{ 'p-invalid': v$.endDate.$invalid }"
          v-model="calendar.endDate"
          :showIcon="true"
        />
        <div v-for="error in v$.endDate.$silentErrors" v-bind:key="error.$uid">
          <small class="p-error">
            {{ error.$message }}
          </small>
        </div>
      </div>
      <div class="p-fluid p-field">
        <label class="label" for="title">Repeats</label>
        <Dropdown
          :class="{ 'p-invalid': v$.repeatsEvery.$invalid }"
          v-model="calendar.repeatsEvery"
          :options="repeatDropdownData"
          optionLabel="key"
          optionValue="value"
        />
        <small v-if="v$.repeatsEvery.$invalid" class="p-error"
          >Repeats is required.</small
        >
      </div>
      <div class="p-fluid p-formgroup-inline">
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
        <small v-if="v$.daysOfTheWeek.$invalid" class="p-error"
          >At least one day of the week is required.</small
        >
      </div>
      <div class="p-col-12 p-text-right">
        <Button
          icon="pi pi-save"
          v-bind:disabled="v$.$invalid"
          class="p-mt-2 p-md-3 p-sm-12 p-button-md"
          @click="submitCalendar"
          label="Submit"
        ></Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Calendar as MyCalendar } from "@/models/calendar.model";
import { DayOfTheWeek } from "@/models/day-of-the-week.enum";
import Button from "primevue/button";
import Calendar from "primevue/calendar";
import Checkbox from "primevue/checkbox";
import { defineComponent, reactive } from "vue";
import Divider from "primevue/divider";
import InputText from "primevue/inputtext";
import { useStore } from "vuex";
import { useToast } from "primevue/usetoast";
import { key } from "@/store";
import { helpers, minLength, required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import Dropdown from "primevue/dropdown";
import { CalendarRepeat } from "@/models/calendar-repeat.enum";
export default defineComponent({
  components: {
    Divider,
    InputText,
    Calendar,
    Button,
    Checkbox,
    Dropdown,
  },
  setup() {
    const toastService = useToast();
    const store = useStore(key);
    let calendar = reactive(new MyCalendar());
    const validateStartDateLessThanEndDate = () => {
      console.log(calendar.startDate < calendar.endDate);
      return calendar.startDate < calendar.endDate;
    };

    const validateEndDateGreaterThanStartDate = () => {
      console.log(calendar.endDate > calendar.startDate);
      return calendar.endDate > calendar.startDate;
    };
    const formRules = {
      daysOfTheWeek: { required, minLength: minLength(1) },
      title: { required },
      startDate: {
        required: helpers.withMessage("Start Date is required.", required),
        validateStartDateLessThanEndDate: helpers.withMessage(
          "Start Date must be less than End Date.",
          validateStartDateLessThanEndDate
        ),
      },
      endDate: {
        required: helpers.withMessage("End Date is required.", required),
        validateEndDateGreaterThanStartDate: helpers.withMessage(
          "End Date must be greater than Start Date.",
          validateEndDateGreaterThanStartDate
        ),
      },
      repeatsEvery: { required },
    };

    const v$ = useVuelidate(formRules, calendar);

    const daysOfTheWeek: DayOfTheWeek[] = [];
    const dayOfTheWeek = DayOfTheWeek;
    const repeatDropdownData = [
      { key: "Weekly", value: CalendarRepeat.Weekly },
      { key: "Bi-Weekly", value: CalendarRepeat.Weekly },
      { key: "Monthly", value: CalendarRepeat.Weekly },
    ];

    for (const item in dayOfTheWeek) {
      if (!isNaN(Number(item))) {
        daysOfTheWeek.push(Number(item));
      }
    }
    const submitCalendar = () => {
      store.dispatch("storeCalendar", calendar);
      calendar = reactive(new MyCalendar());
      toastService.add({
        severity: "success",
        summary: "Calendar successfully created!",
        life: 3000,
        closable: true,
      });
      calendar = reactive(new MyCalendar());
    };
    return {
      calendar,
      daysOfTheWeek,
      dayOfTheWeek,
      submitCalendar,
      v$,
      repeatDropdownData,
    };
  },
});
</script>
