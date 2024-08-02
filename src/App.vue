<template>
  <section id="root" class="relative inset-0 z-0">
    <component :is="layout" />

    <Teleport to="body">
      <AppBaseToast />
    </Teleport>
  </section>
</template>

<script setup lang="ts">
const route = useRoute();

const layout = computed(() => {
  return route.meta.layout ?? 'AppLayoutEmpty';
});
</script>
