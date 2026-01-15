import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from './input';
import { Button } from './button';
import { Label } from './label';
import { Search as SearchIcon, Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import React, { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Input component provides a styled text input field for forms and data entry.
It supports all native HTML input types and attributes.

## Usage

\`\`\`tsx
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

<div>
  <Label htmlFor="email">Email</Label>
  <Input type="email" id="email" placeholder="Enter your email" />
</div>
\`\`\`

## Accessibility

- Always associate inputs with labels using \`htmlFor\` and \`id\`
- Use \`aria-describedby\` for helper text or error messages
- Includes visible focus states for keyboard navigation
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
      description: 'The type of input',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
  },
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

// Basic Input
export const Default: Story = {
  args: {
    placeholder: 'Enter your name',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'example@email.com',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '0',
  },
};

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Search...',
  },
};

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'John Doe',
  },
};

// With Label
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};

// With Helper Text
export const WithHelperText: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email-2">Email</Label>
      <Input type="email" id="email-2" placeholder="Email" />
      <p className="text-sm text-muted-foreground">
        We will never share your email with anyone.
      </p>
    </div>
  ),
};

// With Error
export const WithError: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email-error" className="text-destructive">
        Email
      </Label>
      <Input
        type="email"
        id="email-error"
        placeholder="Email"
        className="border-destructive focus-visible:ring-destructive"
        defaultValue="invalid-email"
        aria-invalid="true"
        aria-describedby="email-error-message"
      />
      <p id="email-error-message" className="text-sm text-destructive">
        Please enter a valid email address.
      </p>
    </div>
  ),
};

// With Icon
export const WithLeftIcon: Story = {
  render: () => (
    <div className="relative w-full max-w-sm">
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input className="pl-10" placeholder="Search..." />
    </div>
  ),
};

export const WithRightIcon: Story = {
  render: () => (
    <div className="relative w-full max-w-sm">
      <Input className="pr-10" placeholder="Email address" type="email" />
      <Mail className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
    </div>
  ),
};

// Password with Toggle
const PasswordToggle = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full max-w-sm">
      <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type={showPassword ? 'text' : 'password'}
        className="px-10"
        placeholder="Enter password"
        defaultValue="mypassword123"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
      >
        {showPassword ? (
          <EyeOff className="h-4 w-4" />
        ) : (
          <Eye className="h-4 w-4" />
        )}
      </button>
    </div>
  );
};

export const PasswordWithToggle: Story = {
  render: () => <PasswordToggle />,
};

// With Button
export const WithButton: Story = {
  render: () => (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  ),
};

// File Input
export const FileInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="file">Upload File</Label>
      <Input id="file" type="file" />
    </div>
  ),
};

// Form Example
export const FormExample: Story = {
  render: () => (
    <form className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input id="name" className="pl-10" placeholder="John Doe" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="form-email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="form-email"
            type="email"
            className="pl-10"
            placeholder="john@example.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="form-password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="form-password"
            type="password"
            className="pl-10"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A complete login form example showing inputs with icons and labels.',
      },
    },
  },
};

// Sizes Comparison
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <Input className="h-8 text-sm" placeholder="Small input" />
      <Input placeholder="Default input" />
      <Input className="h-12 text-base" placeholder="Large input" />
    </div>
  ),
};
