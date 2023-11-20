import 'server-only';

export type LangQueryType = 'ja' | 'en';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  ja: () => import('./ja.json').then((module) => module.default),
};

export const getDictionary = async (lang: LangQueryType) =>
  dictionaries[lang]();
