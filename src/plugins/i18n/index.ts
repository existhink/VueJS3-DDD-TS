import { createI18n, I18n } from 'vue-i18n';

// Define the type for the messages object
interface Messages {
  [key: string]: any;
}

const autoLoadLocalization = async (): Promise<I18n> => {
  const modules = import.meta.glob('/**/*.locale.json');
  const messages: Messages = {};

  for (const path in modules) {
    const matched = path.match(/([a-z\d]+)\./gi); // Hyphen placed at the end
    if (matched && matched.length > 1) {
      const locale = matched[1].replace('.', '');

      // Use 'unknown' and then type assertion
      const module = await modules[path]();
      const moduleMessages = module as { default: any };

      if (!messages[locale]) {
        messages[locale] = moduleMessages.default;
      } else {
        messages[locale] = { ...messages[locale], ...moduleMessages.default };
      }
    }
  }

  const i18n = createI18n({
    locale: localStorage.getItem('lang') ?? 'en',
    fallbackLocale: 'en',
    messages,
    legacy: false,
  });

  return i18n;
};

export default autoLoadLocalization;
