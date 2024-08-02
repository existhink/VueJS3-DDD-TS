import { createApp } from 'vue';
import App from './App.vue';

// MITT
import { Emitter } from 'mitt';

// Configurations
import components from './app/components';
import loadAllRoutes from './app/router';
import pinia from './app/store';

// Plugins
import eventBus from './plugins/mitt';

// Stylesheets
import './style.css';

// SVG Icons
import 'virtual:svg-icons-register';

const initialize = async () => {
  const app = createApp(App);
  const router = await loadAllRoutes();

  // Use everything what we have
  app.use(pinia);
  app.use(router);

  // Register global event bus
  app.provide<Emitter<IBusEvent>>('eventBus', eventBus);

  // Register global components
  components(app);

  // Mount app
  app.mount('#main-content');
};

(async () => {
  await initialize();
})();
