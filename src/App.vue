<template>
  <component :is="layout" />

  <Teleport to="body">
    <AppBaseToast />
  </Teleport>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { AppBaseToast } from './app/components/base';

const route = useRoute();

const layout = computed(() => {
  return route.meta.layout ?? 'AppLayoutEmpty';
});
</script>
