import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
  title: 'Layout/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Separators visually divide content into sections.

## Usage

\`\`\`tsx
import { Separator } from '@/components/ui/separator';

<Separator />
<Separator orientation="vertical" />
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the separator',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-[300px]">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Blog</div>
      <Separator orientation="vertical" />
      <div>Docs</div>
      <Separator orientation="vertical" />
      <div>Source</div>
    </div>
  ),
};

export const InList: Story = {
  render: () => (
    <div className="w-[300px]">
      <div className="py-3">
        <h4 className="text-sm font-medium">Getting Started</h4>
        <p className="text-sm text-muted-foreground">
          Learn the basics of the platform.
        </p>
      </div>
      <Separator />
      <div className="py-3">
        <h4 className="text-sm font-medium">Components</h4>
        <p className="text-sm text-muted-foreground">
          Explore available components.
        </p>
      </div>
      <Separator />
      <div className="py-3">
        <h4 className="text-sm font-medium">Theming</h4>
        <p className="text-sm text-muted-foreground">
          Customize the look and feel.
        </p>
      </div>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[400px]">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Separator with centered label, commonly used in auth forms.',
      },
    },
  },
};

export const InMenu: Story = {
  render: () => (
    <div className="w-[200px] rounded-lg border p-1">
      <div className="px-2 py-1.5 text-sm hover:bg-accent rounded cursor-pointer">
        Profile
      </div>
      <div className="px-2 py-1.5 text-sm hover:bg-accent rounded cursor-pointer">
        Settings
      </div>
      <div className="px-2 py-1.5 text-sm hover:bg-accent rounded cursor-pointer">
        Billing
      </div>
      <Separator className="my-1" />
      <div className="px-2 py-1.5 text-sm text-destructive hover:bg-accent rounded cursor-pointer">
        Log out
      </div>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="w-[350px] rounded-lg border">
      <div className="p-4">
        <h3 className="font-semibold">Account Details</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account settings.
        </p>
      </div>
      <Separator />
      <div className="p-4 space-y-3">
        <div className="flex justify-between">
          <span className="text-sm">Name</span>
          <span className="text-sm font-medium">John Doe</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Email</span>
          <span className="text-sm font-medium">john@example.com</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Plan</span>
          <span className="text-sm font-medium">Pro</span>
        </div>
      </div>
      <Separator />
      <div className="p-4">
        <button className="text-sm text-primary hover:underline">
          Edit profile
        </button>
      </div>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div className="w-[300px] space-y-6">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Default</p>
        <Separator />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Thicker</p>
        <Separator className="h-[2px]" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Dashed</p>
        <div className="border-t border-dashed" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Primary color</p>
        <Separator className="bg-primary" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Gradient</p>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </div>
  ),
};

export const VerticalInToolbar: Story = {
  render: () => (
    <div className="flex items-center gap-2 p-2 border rounded-lg">
      <button className="p-2 hover:bg-accent rounded">
        <span className="text-sm">Bold</span>
      </button>
      <button className="p-2 hover:bg-accent rounded">
        <span className="text-sm">Italic</span>
      </button>
      <button className="p-2 hover:bg-accent rounded">
        <span className="text-sm">Underline</span>
      </button>
      <Separator orientation="vertical" className="h-6" />
      <button className="p-2 hover:bg-accent rounded">
        <span className="text-sm">Left</span>
      </button>
      <button className="p-2 hover:bg-accent rounded">
        <span className="text-sm">Center</span>
      </button>
      <button className="p-2 hover:bg-accent rounded">
        <span className="text-sm">Right</span>
      </button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Vertical separators used to group toolbar buttons.',
      },
    },
  },
};
