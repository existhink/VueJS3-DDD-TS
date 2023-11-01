import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';

// Components
import { AppCommonNotFound, AppCommonUnauthorized } from '../components/common';

// Stores
import { useAuthenticationStore } from '@/modules/authentication/store';

/**
 * Autoload route
 * Will read file with prefix .route.js
 */
const loadAllRoutes = async (): Promise<Router> => {
  const routes = [];
  const modules: Record<string, () => Promise<unknown>> = import.meta.glob('/**/*.route.ts');

  for (const path in modules) {
    const module = await modules[path]();
    console.log((module as { default: RouteRecordRaw[] }).default, 'module');
    routes.push(...(module as { default: RouteRecordRaw[] }).default);
  }

  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        redirect: { name: 'dashboard' },
      },

      // Auto register routes
      ...routes,

      // 403
      {
        path: '/not-authorized',
        name: 'not-authorized',
        component: AppCommonUnauthorized,
      },

      // // 404
      {
        path: '/:catchAll(.*)',
        component: AppCommonNotFound,
      },
    ],
  });

  router.beforeEach((to, _from, next) => {
    const authenticationStore = useAuthenticationStore();

    if (to.meta.requiresAuthorization && !authenticationStore.authentication_token) {
      next({ name: 'authenticationLogin' });
    } else {
      next();
    }
  });

  return router;
};

export default loadAllRoutes;
