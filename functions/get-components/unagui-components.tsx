import React from 'react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@chakra-ui/react';

import { TDObject } from '@hoomies/fuel.types.object';

const DCOpts = {
  ssr: false,
  loading: () => <Skeleton height="20px" />,
};

export const UnaguiComponents: TDObject = {
  UnaguiBoxer: dynamic<any>(() => import('@hoomies/unagui.components.boxer').then((mod) => mod.Boxer), DCOpts),
  UnaguiCopyright: dynamic<any>(
    () => import('@hoomies/unagui.components.copyright').then((mod) => mod.Copyright),
    DCOpts,
  ),
  UnaguiCreditList: dynamic<any>(
    () => import('@hoomies/unagui.components.credits').then((mod) => mod.CreditList),
    DCOpts,
  ),
  UnaguiFooter: dynamic<any>(() => import('@hoomies/unagui.components.footer').then((mod) => mod.Footer), DCOpts),
  UnaguiHeader: dynamic<any>(() => import('@hoomies/unagui.components.header').then((mod) => mod.Header), DCOpts),
  UnaguiHero: dynamic<any>(() => import('@hoomies/unagui.components.hero').then((mod) => mod.Hero), DCOpts),
  UnaguiIcon: dynamic<any>(() => import('@hoomies/unagui.components.icon').then((mod) => mod.Icon), DCOpts),
  UnaguiSection: dynamic<any>(() => import('@hoomies/unagui.components.section').then((mod) => mod.Section), DCOpts),
  UnaguiSelector: dynamic<any>(() => import('@hoomies/unagui.components.selector').then((mod) => mod.Selector), DCOpts),
  UnaguiThemeSwitcher: dynamic<any>(
    () => import('@hoomies/unagui.components.switcher.theme').then((mod) => mod.ThemeSwitcher),
    DCOpts,
  ),
};
