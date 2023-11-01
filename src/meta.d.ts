export {};

import 'vue-router';

// Constants
import { LAYOUT_OPTIONS } from './app/constants';

declare module 'vue-router' {
  interface RouteMeta {
    requiresAuthorization: boolean;
    layout?: LAYOUT_OPTIONS;
    title?: string;
    breadcrumb?: string;
    breadcrumbDisabled?: boolean;
    menuGroup?: string;
  }
}
