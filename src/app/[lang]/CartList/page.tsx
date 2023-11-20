import {
  getDictionary,
  LangQueryType,
} from '@/i18n/dictionaries/getDictionary';

export default async function CartList({
  params: { lang },
}: {
  params: { lang: LangQueryType };
}) {
  const dict = await getDictionary(lang);
  return (
    <div>
      <h1>CartList</h1>
      <h2>{dict.title}</h2>
    </div>
  );
}
