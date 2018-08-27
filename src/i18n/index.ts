import i18n from 'react-native-i18n';

import zh from './zh';
import en from './en';

i18n.defaultLocale = 'en';
i18n.fallbacks = true;
i18n.translations = {
  en,
  zh
};

export { i18n };