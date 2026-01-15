import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { spacing } from '@/lib/design-tokens';

const SpacingShowcase = () => {
  const spacingEntries = Object.entries(spacing).filter(
    ([key]) => key !== 'px' && !key.includes('.')
  );

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
          Spacing Tokens
        </h1>
        <p style={{ color: '#71717a', fontSize: '1rem', maxWidth: '600px' }}>
          Spacing tokens create consistent rhythm and visual hierarchy throughout
          the UI. Use these values for margins, padding, and gaps.
        </p>
      </div>

      {/* Visual Scale */}
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
          Spacing Scale
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {spacingEntries.map(([key, value]) => (
            <div
              key={key}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <code
                style={{
                  fontSize: '0.75rem',
                  color: '#71717a',
                  fontFamily: 'monospace',
                  minWidth: '3rem',
                  textAlign: 'right',
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
              <div
                style={{
                  height: '1.5rem',
                  width: value,
                  backgroundColor: '#ff6321',
                  borderRadius: '0.25rem',
                  minWidth: '2px',
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Usage Examples */}
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
          Usage Examples
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {/* Padding Example */}
          <div
            style={{
              border: '1px solid #e4e4e7',
              borderRadius: '0.5rem',
              padding: '1rem',
            }}
          >
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>
              Padding
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['2', '4', '6', '8'].map((size) => (
                <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#71717a', minWidth: '2rem' }}>
                    p-{size}
                  </span>
                  <div
                    style={{
                      backgroundColor: '#fff7ed',
                      border: '1px dashed #ff6321',
                    }}
                  >
                    <div
                      style={{
                        padding: spacing[size as keyof typeof spacing],
                        backgroundColor: '#ff6321',
                        color: 'white',
                        fontSize: '0.75rem',
                        borderRadius: '0.25rem',
                      }}
                    >
                      Content
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Margin Example */}
          <div
            style={{
              border: '1px solid #e4e4e7',
              borderRadius: '0.5rem',
              padding: '1rem',
            }}
          >
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>
              Margin
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['2', '4', '6', '8'].map((size) => (
                <div key={size} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: '#71717a', minWidth: '2.5rem' }}>
                    m-{size}
                  </span>
                  <div style={{ backgroundColor: '#fff7ed', display: 'inline-block' }}>
                    <div
                      style={{
                        margin: spacing[size as keyof typeof spacing],
                        backgroundColor: '#ff6321',
                        color: 'white',
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '0.25rem',
                      }}
                    >
                      Content
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gap Example */}
          <div
            style={{
              border: '1px solid #e4e4e7',
              borderRadius: '0.5rem',
              padding: '1rem',
            }}
          >
            <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>
              Gap (Flex/Grid)
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['2', '4', '6', '8'].map((size) => (
                <div key={size}>
                  <span style={{ fontSize: '0.75rem', color: '#71717a', display: 'block', marginBottom: '0.25rem' }}>
                    gap-{size}
                  </span>
                  <div
                    style={{
                      display: 'flex',
                      gap: spacing[size as keyof typeof spacing],
                      backgroundColor: '#f4f4f5',
                      padding: '0.5rem',
                      borderRadius: '0.25rem',
                    }}
                  >
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        style={{
                          width: '2rem',
                          height: '2rem',
                          backgroundColor: '#ff6321',
                          borderRadius: '0.25rem',
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Patterns */}
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
          Common Patterns
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          <div
            style={{
              border: '1px solid #e4e4e7',
              borderRadius: '0.75rem',
              padding: '1rem',
            }}
          >
            <code style={{ fontSize: '0.75rem', color: '#71717a' }}>
              Component padding
            </code>
            <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
              <strong>Small:</strong> p-2 (8px)
              <br />
              <strong>Medium:</strong> p-4 (16px)
              <br />
              <strong>Large:</strong> p-6 (24px)
            </div>
          </div>
          <div
            style={{
              border: '1px solid #e4e4e7',
              borderRadius: '0.75rem',
              padding: '1rem',
            }}
          >
            <code style={{ fontSize: '0.75rem', color: '#71717a' }}>
              Section spacing
            </code>
            <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
              <strong>Tight:</strong> py-8 (32px)
              <br />
              <strong>Normal:</strong> py-16 (64px)
              <br />
              <strong>Loose:</strong> py-24 (96px)
            </div>
          </div>
          <div
            style={{
              border: '1px solid #e4e4e7',
              borderRadius: '0.75rem',
              padding: '1rem',
            }}
          >
            <code style={{ fontSize: '0.75rem', color: '#71717a' }}>
              Stack gap
            </code>
            <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
              <strong>Compact:</strong> gap-1 (4px)
              <br />
              <strong>Normal:</strong> gap-3 (12px)
              <br />
              <strong>Relaxed:</strong> gap-6 (24px)
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const meta: Meta = {
  title: 'Design Tokens/Spacing',
  component: SpacingShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Spacing tokens create consistent rhythm and visual hierarchy. Use these values for margins, padding, gaps, and component dimensions.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const AllSpacing: Story = {
  render: () => <SpacingShowcase />,
};
