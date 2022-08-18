<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form @submit.prevent="onSubmit" class="space-y-6 justify-start flex-col">
        <div class="row">
          <label for="fullname" class="flex flex-col">
            <span class="font-semibold">Full Name</span>
            <input id="fullname" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="text"
              placeholder="i money..." v-model="fullname">
          </label>
        </div>
        <div class="row">
          <label for="email" class="flex flex-col">
            <span class="font-semibold">Email Address</span>
            <input id="email" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="email" placeholder="Email"
              v-model="email">
          </label>
        </div>
        <div class="row">
          <label for="password" class="flex flex-col">
            <span class="font-semibold">Password</span>
            <input id="password" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="password"
              placeholder="............" v-model="password">
          </label>
        </div>

        <div class="row">
          <button type="submit" class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg">Sign
            Up</button>
        </div>

      </form>
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm already a member.</span>
        <span class="ml-1">
          <router-link :to="{name:'login' , params:{} }" class="text-primary font-bold">Sign In</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const fullname = ref("");
    const email = ref("");
    const password = ref("");

    function onSubmit() {
      console.log({fullname, email, password});
    }
    return {
      fullname,
      email,
      password,
      onSubmit
    }
  }
}
</script>