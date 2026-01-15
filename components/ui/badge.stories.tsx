import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from './badge';
import { Check, X, AlertCircle, Clock, Star, Zap } from 'lucide-react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Badges are used to highlight important information, status, or categorize items.
They draw attention to new or important content.

## Usage

\`\`\`tsx
import { Badge } from '@/components/ui/badge';

<Badge>New</Badge>
<Badge variant="secondary">Draft</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Coming Soon</Badge>
\`\`\`

## Best Practices

- Use badges sparingly to maintain their impact
- Keep badge text short (1-2 words)
- Use semantic colors for status indicators
- Consider accessibility when using color alone to convey meaning
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'The visual style variant of the badge',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    children: {
      control: 'text',
      description: 'The content of the badge',
    },
  },
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

// Basic Variants
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Default',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available badge variants displayed together for comparison.',
      },
    },
  },
};

// With Icons
export const WithIcon: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge>
        <Check className="mr-1 h-3 w-3" />
        Verified
      </Badge>
      <Badge variant="destructive">
        <X className="mr-1 h-3 w-3" />
        Failed
      </Badge>
      <Badge variant="secondary">
        <Clock className="mr-1 h-3 w-3" />
        Pending
      </Badge>
      <Badge variant="outline">
        <AlertCircle className="mr-1 h-3 w-3" />
        Warning
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges can include icons for additional visual context.',
      },
    },
  },
};

// Status Badges
export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Badge className="bg-green-500 hover:bg-green-500/80">
          <Check className="mr-1 h-3 w-3" />
          Success
        </Badge>
        <Badge className="bg-yellow-500 hover:bg-yellow-500/80">
          <AlertCircle className="mr-1 h-3 w-3" />
          Warning
        </Badge>
        <Badge variant="destructive">
          <X className="mr-1 h-3 w-3" />
          Error
        </Badge>
        <Badge variant="secondary">
          <Clock className="mr-1 h-3 w-3" />
          Pending
        </Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common status indicators using semantic colors.',
      },
    },
  },
};

// Category Badges
export const CategoryBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="outline">React</Badge>
      <Badge variant="outline">TypeScript</Badge>
      <Badge variant="outline">Tailwind CSS</Badge>
      <Badge variant="outline">Next.js</Badge>
      <Badge variant="outline">Storybook</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tags or categories using outline badges.',
      },
    },
  },
};

// Priority Badges
export const PriorityBadges: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge className="bg-red-500 hover:bg-red-500/80">
        <Zap className="mr-1 h-3 w-3" />
        Critical
      </Badge>
      <Badge className="bg-orange-500 hover:bg-orange-500/80">High</Badge>
      <Badge className="bg-yellow-500 hover:bg-yellow-500/80 text-black">Medium</Badge>
      <Badge className="bg-blue-500 hover:bg-blue-500/80">Low</Badge>
    </div>
  ),
};

// Notification Badge
export const NotificationBadge: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <span className="text-lg">Notifications</span>
        <Badge className="absolute -top-2 -right-6 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
          3
        </Badge>
      </div>
      <div className="relative">
        <span className="text-lg">Messages</span>
        <Badge
          variant="destructive"
          className="absolute -top-2 -right-6 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
        >
          9+
        </Badge>
      </div>
    </div>
  ),
};

// Feature Badges
export const FeatureBadges: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge>
        <Star className="mr-1 h-3 w-3 fill-current" />
        Featured
      </Badge>
      <Badge variant="secondary">New</Badge>
      <Badge variant="outline">Beta</Badge>
      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 border-0">
        Pro
      </Badge>
    </div>
  ),
};

// Size Variations
export const SizeVariations: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge className="text-[10px] px-1.5 py-0">Tiny</Badge>
      <Badge className="text-xs">Default</Badge>
      <Badge className="text-sm px-3 py-1">Large</Badge>
      <Badge className="text-base px-4 py-1.5">Extra Large</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badge sizes can be customized using Tailwind classes.',
      },
    },
  },
};

// Removable Badge
export const RemovableBadge: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge className="pr-1">
        React
        <button className="ml-1 rounded-full hover:bg-primary-foreground/20 p-0.5">
          <X className="h-3 w-3" />
        </button>
      </Badge>
      <Badge variant="secondary" className="pr-1">
        TypeScript
        <button className="ml-1 rounded-full hover:bg-secondary-foreground/20 p-0.5">
          <X className="h-3 w-3" />
        </button>
      </Badge>
      <Badge variant="outline" className="pr-1">
        Node.js
        <button className="ml-1 rounded-full hover:bg-foreground/10 p-0.5">
          <X className="h-3 w-3" />
        </button>
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges can include a close/remove button for filter-like behavior.',
      },
    },
  },
};

// In Context
export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div>
          <p className="font-medium">Document.pdf</p>
          <p className="text-sm text-muted-foreground">2.4 MB</p>
        </div>
        <Badge variant="secondary">Uploaded</Badge>
      </div>
      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div>
          <p className="font-medium">Image.png</p>
          <p className="text-sm text-muted-foreground">1.2 MB</p>
        </div>
        <Badge className="bg-green-500 hover:bg-green-500/80">
          <Check className="mr-1 h-3 w-3" />
          Complete
        </Badge>
      </div>
      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div>
          <p className="font-medium">Video.mp4</p>
          <p className="text-sm text-muted-foreground">45 MB</p>
        </div>
        <Badge variant="destructive">Failed</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Badges used in a file upload context to show status.',
      },
    },
  },
};
