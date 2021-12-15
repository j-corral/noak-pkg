import * as React from 'react';

import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import { Selector, SelectorPublicProps } from '@hoomies/unagui.components.selector';
import { TRoute } from '@hoomies/noak.types.route';
import { getSeoPath } from '@hoomies/noak.functions.route';

export declare interface LocaleSwitcherProps extends SelectorPublicProps {
  route?: TRoute;
}

export function LocaleSwitcher({ route, ...rest }: LocaleSwitcherProps) {
  const { t } = useTranslation();
  const { asPath, locale, locales, pathname, query, push } = useRouter();

  const [selectedValue, setSelectedValue] = React.useState(locale ?? '');

  const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    const href = typeof route === 'object' ? getSeoPath(route, event.target.value) : asPath;
    push({ pathname, query }, href, { locale: `${event.target.value}` });
  };

  //const leftIcon = <Icon name="globe" w={4} h={4} />;

  const options = React.useMemo(() => {
    let rawOptions = [];
    locales.map((lang) => {
      rawOptions.push([String(lang), String(t(`menu:lang.${lang}`, { count: 1 }, { default: `${lang}` }))]);
    });
    const selectOptions = new Map<string, string>(rawOptions);
    return selectOptions;
  }, [locales, locale]);

  return (
    <Selector
      title="Locale Switcher"
      options={options}
      selected={selectedValue}
      onChange={handleLocaleChange}
      {...rest}
    />
  );
}
