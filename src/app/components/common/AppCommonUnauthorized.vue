<template>
  <section id="unauthorized-screen">
    <h1>Not Auhtorized</h1>

    <button
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      @click="onBack"
    >
      Back
    </button>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const onBack = () => {
  router.push({ name: 'Dashboard' });
};
</script>
