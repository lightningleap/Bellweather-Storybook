import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Badge } from './badge';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Avatars represent a user or entity with an image or initials fallback.

## Usage

\`\`\`tsx
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

<Avatar>
  <AvatarImage src="https://example.com/avatar.jpg" alt="User name" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
\`\`\`

## Best Practices

- Always provide alt text for the image
- Use initials as fallback (first letter of first and last name)
- Keep fallback text to 2 characters max
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="/broken-image.jpg" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'When the image fails to load, the fallback initials are displayed.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar className="h-6 w-6">
        <AvatarFallback className="text-xs">XS</AvatarFallback>
      </Avatar>
      <Avatar className="h-8 w-8">
        <AvatarFallback className="text-xs">SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarFallback className="text-lg">XL</AvatarFallback>
      </Avatar>
      <Avatar className="h-20 w-20">
        <AvatarFallback className="text-xl">2X</AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatars can be sized using Tailwind width and height classes.',
      },
    },
  },
};

export const WithBadge: Story = {
  render: () => (
    <div className="relative">
      <Avatar className="h-12 w-12">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Online status indicator using a positioned badge.',
      },
    },
  },
};

export const AvatarGroup: Story = {
  render: () => (
    <div className="flex -space-x-4">
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/shadcn.png" alt="User 1" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback className="bg-blue-500 text-white">U2</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback className="bg-green-500 text-white">U3</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback className="bg-yellow-500 text-white">U4</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback className="bg-muted text-muted-foreground text-xs">
          +5
        </AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Overlapping avatar group to show multiple users.',
      },
    },
  },
};

export const ColoredFallbacks: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar>
        <AvatarFallback className="bg-red-500 text-white">AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-blue-500 text-white">CD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-green-500 text-white">EF</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-purple-500 text-white">GH</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-primary text-primary-foreground">
          IJ
        </AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium">John Doe</p>
        <p className="text-xs text-muted-foreground">john@example.com</p>
      </div>
    </div>
  ),
};

export const UserCard: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-4 border rounded-lg w-[300px]">
      <Avatar className="h-14 w-14">
        <AvatarImage src="https://github.com/shadcn.png" alt="Sarah Wilson" />
        <AvatarFallback>SW</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <p className="font-medium">Sarah Wilson</p>
          <Badge variant="secondary" className="text-[10px]">
            Pro
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">Product Designer</p>
        <p className="text-xs text-muted-foreground">San Francisco, CA</p>
      </div>
    </div>
  ),
};

export const CommentThread: Story = {
  render: () => (
    <div className="space-y-4 w-[400px]">
      {[
        {
          name: 'Alice Johnson',
          initials: 'AJ',
          time: '2h ago',
          message: 'This looks great! I love the new design direction.',
          color: 'bg-blue-500',
        },
        {
          name: 'Bob Smith',
          initials: 'BS',
          time: '1h ago',
          message: 'Agreed! The typography choices are excellent.',
          color: 'bg-green-500',
        },
        {
          name: 'Carol White',
          initials: 'CW',
          time: '30m ago',
          message: 'Can we discuss the color palette in the next meeting?',
          color: 'bg-purple-500',
        },
      ].map((comment, index) => (
        <div key={index} className="flex gap-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback className={`${comment.color} text-white text-xs`}>
              {comment.initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{comment.name}</span>
              <span className="text-xs text-muted-foreground">
                {comment.time}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{comment.message}</p>
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatars used in a comment thread layout.',
      },
    },
  },
};

export const SquareAvatar: Story = {
  render: () => (
    <div className="flex gap-4">
      <Avatar className="rounded-md">
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback className="rounded-md">JD</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-lg">
        <AvatarFallback className="rounded-lg bg-primary text-primary-foreground">
          AB
        </AvatarFallback>
      </Avatar>
      <Avatar className="rounded-none">
        <AvatarFallback className="rounded-none">CD</AvatarFallback>
      </Avatar>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Avatars with different border radius styles.',
      },
    },
  },
};
