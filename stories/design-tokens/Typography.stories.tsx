import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { typography } from '@/lib/design-tokens';

const TypographyShowcase = () => {
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
          Typography Tokens
        </h1>
        <p style={{ color: '#71717a', fontSize: '1rem', maxWidth: '600px' }}>
          Typography defines the visual hierarchy and readability of content. Use
          these tokens to maintain consistency across the application.
        </p>
      </div>

      {/* Font Families */}
      <section style={{ marginBottom: '3rem' }}>
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
            paddingBottom: '0.5rem',
            borderBottom: '1px solid #e4e4e7',
          }}
        >
          Font Families
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <code
              style={{
                fontSize: '0.75rem',
                color: '#71717a',
                fontFamily: 'monospace',
              }}
            >
              --font-heading
            </code>
            <p
              style={{
                fontFamily: typography.fonts.heading,
                fontSize: '2rem',
                marginTop: '0.5rem',
                marginBottom: 0,
              }}
            >
              Playfair Display - The quick brown fox jumps over the lazy dog
            </p>
          </div>
          <div>
            <code
              style={{
                fontSize: '0.75rem',
                color: '#71717a',
                fontFamily: 'monospace',
              }}
            >
              --font-body
            </code>
            <p
              style={{
                fontFamily: typography.fonts.body,
                fontSize: '1.125rem',
                marginTop: '0.5rem',
                marginBottom: 0,
              }}
            >
              Lora - The quick brown fox jumps over the lazy dog
            </p>
          </div>
          <div>
            <code
              style={{
                fontSize: '0.75rem',
                color: '#71717a',
                fontFamily: 'monospace',
              }}
            >
              --font-sans
            </code>
            <p
              style={{
                fontFamily: typography.fonts.sans,
                fontSize: '1rem',
                marginTop: '0.5rem',
                marginBottom: 0,
              }}
            >
              DM Sans - The quick brown fox jumps over the lazy dog
            </p>
          </div>
          <div>
            <code
              style={{
                fontSize: '0.75rem',
                color: '#71717a',
                fontFamily: 'monospace',
              }}
            >
              --font-mono
            </code>
            <p
              style={{
                fontFamily: typography.fonts.mono,
                fontSize: '0.875rem',
                marginTop: '0.5rem',
                marginBottom: 0,
              }}
            >
              JetBrains Mono - const greeting = &quot;Hello, World!&quot;;
            </p>
          </div>
        </div>
      </section>

      {/* Font Sizes */}
      <section style={{ marginBottom: '3rem' }}>
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
            paddingBottom: '0.5rem',
            borderBottom: '1px solid #e4e4e7',
          }}
        >
          Font Sizes
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Object.entries(typography.fontSizes).map(([key, value]) => (
            <div
              key={key}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '1rem',
                borderBottom: '1px solid #f4f4f5',
                paddingBottom: '0.75rem',
              }}
            >
              <code
                style={{
                  fontSize: '0.75rem',
                  color: '#71717a',
                  fontFamily: 'monospace',
                  minWidth: '4rem',
                }}
              >
                {key}
              </code>
              <span
                style={{
                  fontSize: '0.75rem',
                  color: '#a1a1aa',
                  minWidth: '5rem',
                }}
              >
                {value}
              </span>
              <span style={{ fontSize: value }}>The quick brown fox</span>
            </div>
          ))}
        </div>
      </section>

      {/* Font Weights */}
      <section style={{ marginBottom: '3rem' }}>
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
            paddingBottom: '0.5rem',
            borderBottom: '1px solid #e4e4e7',
          }}
        >
          Font Weights
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Object.entries(typography.fontWeights).map(([key, value]) => (
            <div
              key={key}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                borderBottom: '1px solid #f4f4f5',
                paddingBottom: '0.75rem',
              }}
            >
              <code
                style={{
                  fontSize: '0.75rem',
                  color: '#71717a',
                  fontFamily: 'monospace',
                  minWidth: '6rem',
                }}
              >
                {key}
              </code>
              <span
                style={{
                  fontSize: '0.75rem',
                  color: '#a1a1aa',
                  minWidth: '3rem',
                }}
              >
                {value}
              </span>
              <span style={{ fontSize: '1.25rem', fontWeight: parseInt(value) }}>
                The quick brown fox jumps over the lazy dog
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Line Heights */}
      <section style={{ marginBottom: '3rem' }}>
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
            paddingBottom: '0.5rem',
            borderBottom: '1px solid #e4e4e7',
          }}
        >
          Line Heights
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {Object.entries(typography.lineHeights).map(([key, value]) => (
            <div
              key={key}
              style={{
                padding: '1rem',
                border: '1px solid #e4e4e7',
                borderRadius: '0.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem',
                }}
              >
                <code
                  style={{
                    fontSize: '0.75rem',
                    color: '#71717a',
                    fontFamily: 'monospace',
                  }}
                >
                  {key}
                </code>
                <span style={{ fontSize: '0.75rem', color: '#a1a1aa' }}>
                  {value}
                </span>
              </div>
              <p
                style={{
                  margin: 0,
                  lineHeight: value,
                  backgroundColor: '#fff7ed',
                  padding: '0.5rem',
                  borderRadius: '0.25rem',
                }}
              >
                The quick brown fox jumps over the lazy dog. Pack my box with
                five dozen liquor jugs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Letter Spacing */}
      <section>
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
            paddingBottom: '0.5rem',
            borderBottom: '1px solid #e4e4e7',
          }}
        >
          Letter Spacing
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Object.entries(typography.letterSpacing).map(([key, value]) => (
            <div
              key={key}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                borderBottom: '1px solid #f4f4f5',
                paddingBottom: '0.75rem',
              }}
            >
              <code
                style={{
                  fontSize: '0.75rem',
                  color: '#71717a',
                  fontFamily: 'monospace',
                  minWidth: '5rem',
                }}
              >
                {key}
              </code>
              <span
                style={{
                  fontSize: '0.75rem',
                  color: '#a1a1aa',
                  minWidth: '4rem',
                }}
              >
                {value}
              </span>
              <span
                style={{
                  fontSize: '1rem',
                  letterSpacing: value,
                  textTransform: 'uppercase',
                }}
              >
                Letter Spacing Example
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const meta: Meta = {
  title: 'Design Tokens/Typography',
  component: TypographyShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Typography tokens define the visual hierarchy and readability of content. These include font families, sizes, weights, line heights, and letter spacing.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const AllTypography: Story = {
  render: () => <TypographyShowcase />,
};

export const TypeScale: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '2rem', fontFamily: '"Playfair Display", serif' }}>
        Type Scale Demo
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h1 style={{ fontSize: typography.fontSizes['7xl'], margin: 0, fontFamily: '"Playfair Display", serif' }}>
          Display
        </h1>
        <h1 style={{ fontSize: typography.fontSizes['5xl'], margin: 0, fontFamily: '"Playfair Display", serif' }}>
          Heading 1
        </h1>
        <h2 style={{ fontSize: typography.fontSizes['4xl'], margin: 0, fontFamily: '"Playfair Display", serif' }}>
          Heading 2
        </h2>
        <h3 style={{ fontSize: typography.fontSizes['3xl'], margin: 0, fontFamily: '"Playfair Display", serif' }}>
          Heading 3
        </h3>
        <h4 style={{ fontSize: typography.fontSizes['2xl'], margin: 0, fontFamily: '"Playfair Display", serif' }}>
          Heading 4
        </h4>
        <h5 style={{ fontSize: typography.fontSizes.xl, margin: 0 }}>
          Heading 5
        </h5>
        <h6 style={{ fontSize: typography.fontSizes.lg, margin: 0 }}>
          Heading 6
        </h6>
        <p style={{ fontSize: typography.fontSizes.base, margin: 0, fontFamily: '"Lora", serif' }}>
          Body text - The quick brown fox jumps over the lazy dog.
        </p>
        <p style={{ fontSize: typography.fontSizes.sm, margin: 0, color: '#71717a' }}>
          Small text - Used for captions, labels, and helper text.
        </p>
        <p style={{ fontSize: typography.fontSizes.xs, margin: 0, color: '#a1a1aa' }}>
          Extra small - Used for fine print and legal text.
        </p>
      </div>
    </div>
  ),
};
