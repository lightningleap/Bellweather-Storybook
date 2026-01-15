import type { Preview } from '@storybook/nextjs-vite';
import '../app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: 'requiredFirst',
    },

    docs: {
      toc: true,
    },

    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1c1f26' },
        { name: 'neutral', value: '#f4f4f5' },
        { name: 'brand', value: '#fff7ed' },
      ],
    },

    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' },
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1280px', height: '800px' },
        },
        wide: {
          name: 'Wide Desktop',
          styles: { width: '1536px', height: '900px' },
        },
      },
    },

    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Introduction',
          'Design Tokens',
          ['Colors', 'Typography', 'Spacing', 'Shadows', 'Animation'],
          'Foundation',
          'Components',
          ['Button', 'Input', 'Card', 'Badge', '*'],
          'Forms',
          'Feedback',
          'Overlay',
          'Layout',
          'Data Display',
          '*',
        ],
      },
    },
  },

  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';

      // Apply theme class to the body
      if (typeof document !== 'undefined') {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
      }

      return Story();
    },
  ],

  tags: ['autodocs'],
};

export default preview;
