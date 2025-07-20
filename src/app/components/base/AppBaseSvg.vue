<script setup lang="ts">
/**
 * @description Define the props interface
 */
interface IProps {
  prefix?: string;
  name: string;
  color?: string;
}

/**
 * @description Define props with default values and interfaces
 */
const props = withDefaults(defineProps<IProps>(), {
  prefix: 'icon',
  color: '#333',
});

/**
 * @description Handle generated symbol id
 *
 * @returns {String}
 */
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>

<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
