<template>
  <div class="p-formgrid p-grid p-shadow-3">
    <form class="p-md-offset-3 p-md-6 p-sm-12" autocomplete="off">
      <div>
        <div class="p-fluid p-field">
          <label class="label" for="firstName">First Name</label>
          <InputText id="firstName" type="text" v-model="user.firstName" />
        </div>
        <div class="p-fluid p-field">
          <label class="label" for="lastName">Last Name</label>
          <InputText id="lastName" type="text" v-model="user.lastName" />
        </div>
        <div class="p-fluid p-field">
          <label class="label" for="email">Email</label>
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-user"> </i>
            </span>
            <InputText autoc id="email" type="text" v-model="user.email" />
          </div>
        </div>
        <div class="p-fluid p-field">
          <label class="label" for="password">Password</label>
          <Password id="password" v-model="user.password" toggleMask />
        </div>
        <div class="p-fluid p-field">
          <label class="label" for="email">Birth Date</label>
          <Calendar v-model="user.birthDate" :showIcon="true"></Calendar>
        </div>
        <div class="p-fluid p-field">
          <label class="label" for="email">Profile Picture</label>
          <FileUpload
            :custom-upload="true"
            @uploader="uploadProfilePicture"
            mode="basic"
            name="profilePicture"
            :auto="true"
          ></FileUpload>
        </div>
        <div class="p-col-12 p-text-right">
          <Button
            icon="pi pi-save"
            class="p-mt-2 p-md-3 p-sm-12 p-button-md"
            @click="submitUser"
            label="Submit"
          ></Button>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import User from "@/models/user.model";
import { defineComponent } from "@vue/runtime-core";
import { reactive } from "vue";
import InputText from "primevue/inputtext";
import FileUpload from "primevue/fileupload";
import Calendar from "primevue/calendar";
import Password from "primevue/password";
import Button from "primevue/button";
import store from "@/store";
export default defineComponent({
  components: {
    InputText,
    Calendar,
    FileUpload,
    Password,
    Button,
  },
  setup() {
    let user = reactive(new User());
    const uploadProfilePicture = (event: HTMLInputElement) => {
      const files = event.files;
      if (files) {
        const fileReader = new FileReader();
        fileReader.addEventListener("load", () => {
          if (fileReader.result) {
            user.profilePicture = fileReader.result.toString();
          }
        });
        fileReader.readAsDataURL(files[0]);
      }
    };
    const submitUser = () => {
      user.isNewUser = true;
      store.dispatch("storeUser", user);
      user = reactive(new User());
    };
    return {
      user,
      uploadProfilePicture,
      submitUser,
    };
  },
});
</script>
