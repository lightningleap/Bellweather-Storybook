import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { shadows, radii } from '@/lib/design-tokens';

const ShadowsShowcase = () => {
  const shadowEntries = Object.entries(shadows).filter(
    ([key]) => key !== 'none'
  );

  const radiiEntries = Object.entries(radii).filter(
    ([key]) => key !== 'none' && key !== 'full'
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
          Shadows & Radii
        </h1>
        <p style={{ color: '#71717a', fontSize: '1rem', maxWidth: '600px' }}>
          Shadows create depth and elevation, while border radius defines the
          roundness of UI elements. Together they contribute to the visual style.
        </p>
      </div>

      {/* Box Shadows */}
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
          Box Shadows
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '2rem',
            padding: '1rem',
          }}
        >
          {shadowEntries.map(([key, value]) => (
            <div
              key={key}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '8rem',
                  height: '8rem',
                  backgroundColor: 'white',
                  borderRadius: '0.75rem',
                  boxShadow: value,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '0.875rem',
                    color: '#71717a',
                    textAlign: 'center',
                  }}
                >
                  {key}
                </span>
              </div>
              <code
                style={{
                  fontSize: '0.625rem',
                  color: '#a1a1aa',
                  fontFamily: 'monospace',
                  textAlign: 'center',
                  wordBreak: 'break-all',
                  maxWidth: '200px',
                }}
              >
                {value}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Elevation Levels */}
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
          Elevation Levels
        </h2>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            gap: '2rem',
            padding: '3rem 1rem',
            backgroundColor: '#f4f4f5',
            borderRadius: '0.75rem',
          }}
        >
          {['xs', 'sm', 'DEFAULT', 'lg', 'xl', '2xl'].map((level, index) => (
            <div
              key={level}
              style={{
                width: '6rem',
                height: `${4 + index * 1}rem`,
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                boxShadow: shadows[level as keyof typeof shadows],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '0.75rem', color: '#71717a' }}>
                {level === 'DEFAULT' ? 'md' : level}
              </span>
            </div>
          ))}
        </div>
        <p
          style={{
            textAlign: 'center',
            marginTop: '1rem',
            fontSize: '0.875rem',
            color: '#71717a',
          }}
        >
          Higher elevation = more prominent shadow = element appears closer to user
        </p>
      </section>

      {/* Border Radius */}
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
          Border Radius
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {radiiEntries.map(([key, value]) => (
            <div
              key={key}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <div
                style={{
                  width: '6rem',
                  height: '6rem',
                  backgroundColor: '#ff6321',
                  borderRadius: value,
                }}
              />
              <div style={{ textAlign: 'center' }}>
                <code
                  style={{
                    fontSize: '0.875rem',
                    color: '#1c1f26',
                    fontFamily: 'monospace',
                    fontWeight: 500,
                  }}
                >
                  {key === 'DEFAULT' ? 'default' : key}
                </code>
                <p
                  style={{
                    margin: '0.25rem 0 0 0',
                    fontSize: '0.75rem',
                    color: '#71717a',
                  }}
                >
                  {value}
                </p>
              </div>
            </div>
          ))}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <div
              style={{
                width: '6rem',
                height: '6rem',
                backgroundColor: '#ff6321',
                borderRadius: radii.full,
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <code
                style={{
                  fontSize: '0.875rem',
                  color: '#1c1f26',
                  fontFamily: 'monospace',
                  fontWeight: 500,
                }}
              >
                full
              </code>
              <p
                style={{
                  margin: '0.25rem 0 0 0',
                  fontSize: '0.75rem',
                  color: '#71717a',
                }}
              >
                {radii.full}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
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
          Common Use Cases
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: 'white',
              borderRadius: radii.xl,
              boxShadow: shadows.sm,
              border: '1px solid #e4e4e7',
            }}
          >
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>Card</h4>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#71717a' }}>
              shadow-sm + rounded-xl
            </p>
          </div>
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: 'white',
              borderRadius: radii.lg,
              boxShadow: shadows.lg,
            }}
          >
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>Modal</h4>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#71717a' }}>
              shadow-lg + rounded-lg
            </p>
          </div>
          <div
            style={{
              padding: '1rem 1.5rem',
              backgroundColor: '#ff6321',
              color: 'white',
              borderRadius: radii.lg,
              boxShadow: shadows.primary,
              display: 'inline-block',
            }}
          >
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>
              Primary Button
            </h4>
            <p style={{ margin: 0, fontSize: '0.875rem', opacity: 0.9 }}>
              shadow-primary + rounded-lg
            </p>
          </div>
          <div
            style={{
              padding: '1rem',
              backgroundColor: 'white',
              borderRadius: radii['2xl'],
              boxShadow: shadows.xl,
            }}
          >
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>Dropdown</h4>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#71717a' }}>
              shadow-xl + rounded-2xl
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const meta: Meta = {
  title: 'Design Tokens/Shadows',
  component: ShadowsShowcase,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Shadow and radius tokens create depth, elevation, and visual style. Use shadows to establish hierarchy and radii for consistent roundness.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const AllShadows: Story = {
  render: () => <ShadowsShowcase />,
};

export const ElevationScale: Story = {
  render: () => (
    <div
      style={{
        padding: '3rem',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: '2rem',
        backgroundColor: '#f4f4f5',
        minHeight: '400px',
      }}
    >
      {['none', 'xs', 'sm', 'DEFAULT', 'lg', 'xl', '2xl'].map((level, index) => (
        <div
          key={level}
          style={{
            width: '6rem',
            height: `${3 + index * 1.5}rem`,
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: shadows[level as keyof typeof shadows],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '0.25rem',
          }}
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 500 }}>
            {level === 'DEFAULT' ? 'md' : level}
          </span>
          <span style={{ fontSize: '0.625rem', color: '#a1a1aa' }}>
            Level {index}
          </span>
        </div>
      ))}
    </div>
  ),
};
