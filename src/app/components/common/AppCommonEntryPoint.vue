<template>
  <section id="entry-point">
    <!-- Adjust entry point to your needs, for this sample only use for redirect to dashboard or login if user access "/" -->
    <p>If you can see me, your network is slow :D.</p>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
router.replace({
  name: 'authenticationLogin',
});
</script>
