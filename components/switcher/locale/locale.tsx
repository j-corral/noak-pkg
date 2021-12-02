import * as React from 'react';

import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { Selector, SelectorPublicProps } from '@hoomies/unagui.components.selector';

export function LocaleSwitcher(props: SelectorPublicProps) {
  const { t } = useTranslation();
  const { locales, pathname, asPath, query } = useRouter();
  const router = useRouter();

  const [selectedValue, setSelectedValue] = React.useState('');

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    void router.push({ pathname, query }, asPath, { locale: `${event.target.value}` });
  };

  //const leftIcon = <Icon name="globe" w={4} h={4} />;

  let rawOptions = [];
  locales.map((lang) => {
    rawOptions.push([String(lang), String(t(`menu:lang.${lang}`, { count: 1 }, { default: `${lang}` }))]);
  });

  const selectOptions = new Map<string, string>(rawOptions);

  return <Selector options={selectOptions} selected={selectedValue} onChange={handleLocaleChange} {...props} />;
}
