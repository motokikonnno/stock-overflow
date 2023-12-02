import 'server-only';

export type LangQueryType = 'ja' | 'en';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ja: () => import('./dictionaries/ja.json').then((module) => module.default),
};

export const getDictionary = async (lang: LangQueryType) =>
  dictionaries[lang]();
