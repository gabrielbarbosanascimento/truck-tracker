import { ColorHelper } from '../../../helpers';
import { OPACITY_LEVEL } from '../opacity/opacity';
import { BASE_COLOR } from './base_color';

export const CONTEXTUAL_COLORS_ALT = {
  CONTENT: {
    BRAND: BASE_COLOR.PRIMARY[200],
    TITLE: BASE_COLOR.NEUTRAL[100],
    BASE: ColorHelper.hexToRGB(
      BASE_COLOR.NEUTRAL[100],
      OPACITY_LEVEL.SEMIOPAQUE
    ),
    PLACEHOLDER: ColorHelper.hexToRGB(
      BASE_COLOR.NEUTRAL[100],
      OPACITY_LEVEL.DEEP
    ),
  },
  LAYOUT: {
    BRAND: BASE_COLOR.PRIMARY[200],
    BODY: '#0D131D',
    SURFACE: BASE_COLOR.NEUTRAL[700],
    SPOTLIGHT: BASE_COLOR.NEUTRAL[800],
  },
  INTERACTIVE: {
    PRIMARY: BASE_COLOR.NEUTRAL[100],
    PRIMARY_HOVER: BASE_COLOR.NEUTRAL[300],
    SECONDARY: ColorHelper.hexToRGB(
      BASE_COLOR.NEUTRAL[200],
      OPACITY_LEVEL.LIGHT
    ),
    SECONDARY_HOVER: ColorHelper.hexToRGB(
      BASE_COLOR.NEUTRAL[200],
      OPACITY_LEVEL.MEDIUM
    ),
    DESTRUCTIVE: BASE_COLOR.DANGER[200],
    DESTRUCTIVE_HOVER: BASE_COLOR.DANGER[500],
  },
  HIGHTLIGHT: {
    FOCUS: BASE_COLOR.PRIMARY[200],
    PROMOTE: BASE_COLOR.ACCENT[100],
  },
};
