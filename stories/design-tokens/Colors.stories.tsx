import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { colors } from '@/lib/design-tokens';

const ColorSwatch = ({
  name,
  value,
  textColor = 'black',
}: {
  name: string;
  value: string;
  textColor?: string;
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    }}
  >
    <div
      style={{
        width: '100%',
        height: '4rem',
        backgroundColor: value,
        borderRadius: '0.5rem',
        border: '1px solid #e4e4e7',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '0.5rem',
      }}
    >
      <span
        style={{
          fontSize: '0.75rem',
          color: textColor,
          fontFamily: 'monospace',
        }}
      >
        {value}
      </span>
    </div>
    <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{name}</span>
  </div>
);

const ColorPalette = ({
  title,
  colors: colorList,
}: {
  title: string;
  colors: { name: string; value: string; textColor?: string }[];
}) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3
      style={{
        fontSize: '1.25rem',
        fontWeight: 600,
        marginBottom: '1rem',
        color: '#1c1f26',
      }}
    >
      {title}
    </h3>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '1rem',
      }}
    >
      {colorList.map((color) => (
        <ColorSwatch key={color.name} {...color} />
      ))}
    </div>
  </div>
);

const ColorsShowcase = () => {
  const brandPrimary = Object.entries(colors.brand.primary).map(
    ([key, value]) => ({
      name: `primary-${key}`,
      value,
      textColor: parseInt(key) >= 500 ? 'white' : 'black',
    })
  );

  const neutralColors = Object.entries(colors.neutral).map(([key, value]) => ({
    name: `neutral-${key}`,
    value,
    textColor: parseInt(key) >= 500 ? 'white' : 'black',
  }));

  const feedbackColors = [
    { name: 'success-light', value: colors.feedback.success.light },
    {
      name: 'success',
      value: colors.feedback.success.DEFAULT,
      textColor: 'white',
    },
    {
      name: 'success-dark',
      value: colors.feedback.success.dark,
      textColor: 'white',
    },
    { name: 'warning-light', value: colors.feedback.warning.light },
    {
      name: 'warning',
      value: colors.feedback.warning.DEFAULT,
      textColor: 'white',
    },
    {
      name: 'warning-dark',
      value: colors.feedback.warning.dark,
      textColor: 'white',
    },
    { name: 'error-light', value: colors.feedback.error.light },
    {
      name: 'error',
      value: colors.feedback.error.DEFAULT,
      textColor: 'white',
    },
    {
      name: 'error-dark',
      value: colors.feedback.error.dark,
      textColor: 'white',
    },
    { name: 'info-light', value: colors.feedback.info.light },
    { name: 'info', value: colors.feedback.info.DEFAULT, textColor: 'white' },
    { name: 'info-dark', value: colors.feedback.info.dark, textColor: 'white' },
  ];

  const semanticColors = [
    { name: 'background', value: colors.semantic.background.DEFAULT },
    { name: 'background-secondary', value: colors.semantic.background.secondary },
    { name: 'background-tertiary', value: colors.semantic.background.tertiary },
    {
      name: 'background-inverse',
      value: colors.semantic.background.inverse,
      textColor: 'white',
    },
    {
      name: 'foreground',
      value: colors.semantic.foreground.DEFAULT,
      textColor: 'white',
    },
    {
      name: 'foreground-secondary',
      value: colors.semantic.foreground.secondary,
      textColor: 'white',
    },
    { name: 'border', value: colors.semantic.border.DEFAULT },
    { name: 'border-secondary', value: colors.semantic.border.secondary },
    {
      name: 'border-focus',
      value: colors.semantic.border.focus,
      textColor: 'white',
    },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
            fontFamily: '"Playfair Display", serif',
          }}
        >
          Color Tokens
        </h1>
        <p style={{ color: '#71717a', fontSize: '1rem', maxWidth: '600px' }}>
          The color palette forms the foundation of the Bellwether visual
          identity. Use these tokens consistently across all components.
        </p>
      </div>

      <ColorPalette title="Brand Primary" colors={brandPrimary} />
      <ColorPalette title="Neutral" colors={neutralColors} />
      <ColorPalette title="Semantic" colors={semanticColors} />
      <ColorPalette title="Feedback" colors={feedbackColors} />
    </div>
  );
};

const meta: Meta = {
  title: 'Design Tokens/Colors',
  component: ColorsShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Color tokens define the visual language of the design system. They ensure consistency across all components and provide semantic meaning for different use cases.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const AllColors: Story = {
  render: () => <ColorsShowcase />,
};

export const BrandColors: Story = {
  render: () => {
    const brandPrimary = Object.entries(colors.brand.primary).map(
      ([key, value]) => ({
        name: `primary-${key}`,
        value,
        textColor: parseInt(key) >= 500 ? 'white' : 'black',
      })
    );
    return (
      <div style={{ padding: '1rem' }}>
        <ColorPalette title="Brand Primary" colors={brandPrimary} />
      </div>
    );
  },
};

export const SemanticColors: Story = {
  render: () => {
    const semanticColors = [
      { name: 'background', value: colors.semantic.background.DEFAULT },
      { name: 'background-secondary', value: colors.semantic.background.secondary },
      {
        name: 'background-inverse',
        value: colors.semantic.background.inverse,
        textColor: 'white',
      },
      {
        name: 'foreground',
        value: colors.semantic.foreground.DEFAULT,
        textColor: 'white',
      },
      { name: 'border', value: colors.semantic.border.DEFAULT },
      {
        name: 'border-focus',
        value: colors.semantic.border.focus,
        textColor: 'white',
      },
    ];
    return (
      <div style={{ padding: '1rem' }}>
        <ColorPalette title="Semantic Colors" colors={semanticColors} />
      </div>
    );
  },
};

export const FeedbackColors: Story = {
  render: () => {
    const feedbackColors = [
      {
        name: 'success',
        value: colors.feedback.success.DEFAULT,
        textColor: 'white',
      },
      {
        name: 'warning',
        value: colors.feedback.warning.DEFAULT,
        textColor: 'white',
      },
      {
        name: 'error',
        value: colors.feedback.error.DEFAULT,
        textColor: 'white',
      },
      { name: 'info', value: colors.feedback.info.DEFAULT, textColor: 'white' },
    ];
    return (
      <div style={{ padding: '1rem' }}>
        <ColorPalette title="Feedback Colors" colors={feedbackColors} />
      </div>
    );
  },
};
