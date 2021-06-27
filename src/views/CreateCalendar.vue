<template>
  <div>
    <h1 class="title is-size-3">Create a Calendar</h1>
  </div>
  <hr />
  <div class="columns">
    <div class="col is-two-thirds">
      <div class="field">
        <label class="label" for="title">Title</label>
        <div class="control">
          <input type="text" class="input" placeholder="Title" />
        </div>
      </div>
      <div class="field">
        <label class="label" for="title">Start Date</label>
        <div class="control">
          <o-datepicker v-model="calendar.startDate"></o-datepicker>
        </div>
      </div>
      <div class="field">
        <label class="label" for="title">End Date</label>
        <div class="control">
          <input type="text" class="input" placeholder="Title" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Calendar from "@/models/calendar.model";
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const calendar = ref(new Calendar());
    return {
      calendar,
    };
  },
});
</script>
