import React from 'react';
import { ThemeSwitcher as UTS, ThemeSwitcherProps as UTSP } from '@hoomies/unagui.components.switcher.theme';
import useTranslation from 'next-translate/useTranslation';

export interface ThemeSwitcherProps extends UTSP {}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { t } = useTranslation();
  const { labelLight = t('theme:mode.light'), labelDark = t('theme:mode.dark'), ...rest } = props;
  return <UTS labelLight={labelLight} labelDark={labelDark} {...rest} />;
}
