import type { App } from 'vue';

// Layouts
import { AppLayoutDefault, AppLayoutEmpty } from './layouts';

/**
 * @description Register the components for make it globally available.
 *
 * @note We just need to import the layout components or the component that we want to make dynamically using <component :is="component" /> in the template. We've already used the Vite plugin to automatically import the components from the directory.
 */
export default (app: App): void => {
  // Layout Components
  app.component('AppLayoutDefault', AppLayoutDefault);
  app.component('AppLayoutEmpty', AppLayoutEmpty);
};
