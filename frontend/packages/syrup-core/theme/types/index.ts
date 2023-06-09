import React, { CSSProperties } from 'react';
import { AlignmentValue, JustificationValue } from '../base';
import { AnimationStyles, Breakpoints, Colors } from '../common';
import { shadows, Shadows } from '../common/shadows';

type FlexFn = (
  align: AlignmentValue,
  justify: JustificationValue
) => {
  display: string;
  justifyContent: CSSProperties['justifyContent'];
  alignItems: CSSProperties['justifyContent'];
};

export interface BaseTheme extends Colors {
  anim: AnimationStyles;
  bp: Breakpoints;
  dividerLight: string;
  dividerNormal: string;
  dividerDark: string;
  dividerMin: string;
  dividerDrawer: string;
  errorNoticeBackground: string;
  errorNoticeBorder: string;
  fontFamily: string;
  fontFamilyMono: string;
  flex: FlexFn;
  imageBorderRadius: string | number;
  imageBoxShadow: any;
  imageBorderBottomLeftRadius: string | number;
  imageBorderBottomRightRadius: string | number;
  menuItemSelected: string;
  menuBackground: string;
  menuBorder: string;
  menuShadow: typeof shadows | string;
  shadows: Shadows;
  sp: (...values: number[]) => string;
  tableSelectedBackground: string;
  tableHover: string;
  textHighlight: string;
  textHighlightForeground: string;
  textAccent: string;
  textSelected: string;
  zIndex: Record<string, number>;
}

export interface ExtendedTheme extends BaseTheme {
  isDark: true | false;
  buttonNeutralBackground?: string;
  buttonNeutralText?: string;
  buttonNeutralBorder?: string;

  background: string;
  secondaryBackground: string;
  link: string;

  inputBorder: string;
  inputBorderFocused: string;

  listItemHoverBackground: string;

  modalBackdrop: string;
  modalBackground: string;
  modalShadow: string;

  tableDivider: string;
  tableSelected: string;

  text: string;
  textSecondary: string;
  textTertiary: string;

  tooltipBackground: string;
  tooltipText: string;
}

export type { Breakpoints };
