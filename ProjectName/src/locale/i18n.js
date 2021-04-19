import i18n from 'i18n-js';
import * as RNLocalize from "react-native-localize";
import en from './en.json';
import pl from './pl.json';

const locales = RNLocalize.getLocales();
if (Array.isArray(locales)) {
    i18n.locale = locales[0].languageTag
    i18n.country=locales[0].countryCodes
    i18n.myLanguage=locales[0].languageCode
}

i18n.defaultLocale = 'pl';
i18n.fallbacks = true;
i18n.translations = {pl, en};

export default i18n;