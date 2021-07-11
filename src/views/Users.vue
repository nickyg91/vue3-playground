<template>
  <div>Users here!</div>
  <AddUserForm></AddUserForm>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import AddUserForm from "@/components/AddUserForm.vue";
export default defineComponent({
  components: {
    AddUserForm,
  },
  setup() {
    return {};
  },
});
</script>
