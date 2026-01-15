import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './button';
import { Mail, Loader2, ChevronRight, Download, Plus, Trash2 } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Button component is a fundamental UI element for triggering actions.
It supports multiple variants, sizes, and states to cover all use cases.

## Usage

\`\`\`tsx
import { Button } from '@/components/ui/button';

<Button variant="default">Click me</Button>
<Button variant="outline" size="lg">Large Outline</Button>
<Button disabled>Disabled</Button>
\`\`\`

## Accessibility

- Uses native \`<button>\` element for proper semantics
- Supports keyboard navigation (Tab, Enter, Space)
- Includes focus ring for visibility
- Disabled state removes from tab order
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The visual style variant of the button',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    asChild: {
      control: 'boolean',
      description: 'Render as a child component (for composition)',
    },
    children: {
      control: 'text',
      description: 'The content of the button',
    },
  },
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Basic variants
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const IconButton: Story = {
  args: {
    size: 'icon',
    children: <Plus className="h-4 w-4" />,
  },
};

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const Loading: Story = {
  render: () => (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  ),
};

// With Icons
export const WithLeftIcon: Story = {
  render: () => (
    <Button>
      <Mail className="mr-2 h-4 w-4" />
      Login with Email
    </Button>
  ),
};

export const WithRightIcon: Story = {
  render: () => (
    <Button>
      Next
      <ChevronRight className="ml-2 h-4 w-4" />
    </Button>
  ),
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants displayed together for comparison.',
      },
    },
  },
};

// All Sizes Showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available button sizes displayed together for comparison.',
      },
    },
  },
};

// Real-world Examples
export const ActionButtons: Story = {
  render: () => (
    <div className="flex gap-3">
      <Button>
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">
        <Trash2 className="mr-2 h-4 w-4" />
        Delete
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common action button patterns used in dialogs and forms.',
      },
    },
  },
};

export const ButtonGroup: Story = {
  render: () => (
    <div className="inline-flex rounded-lg border border-input bg-background p-1">
      <Button variant="ghost" size="sm" className="rounded-md">
        Day
      </Button>
      <Button variant="secondary" size="sm" className="rounded-md">
        Week
      </Button>
      <Button variant="ghost" size="sm" className="rounded-md">
        Month
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Segmented button group for toggle-like selections.',
      },
    },
  },
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-80">
      <Button className="w-full">Full Width Button</Button>
    </div>
  ),
};
