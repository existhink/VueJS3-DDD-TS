import type { RouteRecordRaw } from 'vue-router';

// Components
import AppBaseWrapper from '@/app/components/base/AppBaseWrapper.vue';

// Constants
import { LAYOUT_OPTIONS } from '@/app/constants';

const routes: RouteRecordRaw[] = [
  {
    path: '/dashboard',
    component: AppBaseWrapper,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('../views/DashboardUI.vue'),
        meta: {
          requiresAuthorization: false,
          layout: LAYOUT_OPTIONS.EMPTY,
        },
      },
    ],
  },
];

export default routes;
