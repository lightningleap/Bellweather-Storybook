import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const bellwetherTheme = create({
  base: 'light',

  // Brand
  brandTitle: 'Bellwether Design System',
  brandUrl: '/',
  brandTarget: '_self',

  // Colors
  colorPrimary: '#ff6321',
  colorSecondary: '#ff6321',

  // UI
  appBg: '#fafafa',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#e4e4e7',
  appBorderRadius: 8,

  // Text colors
  textColor: '#1c1f26',
  textInverseColor: '#ffffff',
  textMutedColor: '#71717a',

  // Toolbar default and active colors
  barTextColor: '#71717a',
  barSelectedColor: '#ff6321',
  barHoverColor: '#ff6321',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e4e4e7',
  inputTextColor: '#1c1f26',
  inputBorderRadius: 6,

  // Button
  buttonBg: '#f4f4f5',
  buttonBorder: '#e4e4e7',

  // Boolean
  booleanBg: '#f4f4f5',
  booleanSelectedBg: '#ff6321',
});

addons.setConfig({
  theme: bellwetherTheme,
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
