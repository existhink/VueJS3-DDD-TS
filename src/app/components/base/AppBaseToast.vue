<script setup lang="ts">
import eventBus from '@/plugins/mitt';

// Interfaces
interface IProps {
  isOpen: boolean;
  message: string;
  position: EToastPosition;
  type: EToastType;
}

const toast = ref<IProps>({
  isOpen: false,
  message: '',
  position: EToastPosition.TOP_RIGHT,
  type: EToastType.SUCCESS,
});

/**
 * @description Handle dynamic icon name of toast icon
 */
const iconName: ComputedRef<string> = computed(() => {
  switch (toast.value.type) {
    case EToastType.DANGER:
      return 'Error icon';
    case EToastType.WARNING:
      return 'Warning icon';
    default:
      return 'Check icon';
  }
});

/**
 * @description Handle dynamic id name of toast
 */
const toastId: ComputedRef<string> = computed(() => {
  switch (toast.value.position) {
    case EToastPosition.TOP_LEFT:
      return 'toast-top-left';
    case EToastPosition.TOP_RIGHT:
      return 'toast-top-right';
    case EToastPosition.BOTTOM_LEFT:
      return 'toast-bottom-left';
    case EToastPosition.BOTTOM_RIGHT:
      return 'toast-bottom-right';
    default:
      return '';
  }
});

/**
 * @description Handle dynamic class name icon based on type toast
 */
const classNameBasedOnTypeToast: ComputedRef<string> = computed(() => {
  switch (toast.value.type) {
    case EToastType.DANGER:
      return 'text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200';
    case EToastType.WARNING:
      return 'text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200';
    case EToastType.SUCCESS:
      return 'text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200';
    default:
      return '';
  }
});

/**
 * @description Handle dynamic class name based on position of toast
 */
const classNameBasedOnPositionToast: ComputedRef<string> = computed(() => {
  switch (toast.value.position) {
    case EToastPosition.TOP_LEFT:
      return 'top-5 left-5';
    case EToastPosition.TOP_RIGHT:
      return 'top-5 right-5';
    case EToastPosition.BOTTOM_LEFT:
      return 'bottom-5 left-5';
    case EToastPosition.BOTTOM_RIGHT:
      return 'bottom-5 right-5';
    default:
      return '';
  }
});

/**
 * @description Handle dynamic data target of data-dismiss-targer
 */
const dataTarget: ComputedRef<string> = computed(() => {
  switch (toast.value.type) {
    case EToastType.DANGER:
      return '#toasts-danger';
    case EToastType.WARNING:
      return '#toast-warning';
    case EToastType.SUCCESS:
      return '#toast-success';
    default:
      return '';
  }
});

/**
 * @description Handle event on close toast
 */
const onClose = (): void => {
  toast.value.isOpen = false;
};

eventBus.on(EToastType.DANGER, (params: unknown) => {
  console.log('params', params);
  toast.value = params as IProps;
});
</script>

<template>
  <Transition>
    <div
      v-if="toast.isOpen"
      :id="toastId"
      class="fixed flex items-center w-full max-w-xs p-4 space-x-4 divide-gray-200 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 space-x"
      :class="classNameBasedOnPositionToast"
      role="alert"
      v-bind="toast"
    >
      <div
        class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8"
        :class="classNameBasedOnTypeToast"
      >
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"
          />
        </svg>
        <span class="sr-only">{{ iconName }}</span>
      </div>
      <div class="ml-3 text-sm font-normal w-full">{{ toast.message }}</div>
      <button
        type="button"
        class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        :data-dismiss-target="dataTarget"
        aria-label="Close"
        @click="onClose"
      >
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
