import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Textarea } from './textarea';
import { Label } from './label';
import { Button } from './button';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Textarea component provides a multi-line text input for longer form content.

## Usage

\`\`\`tsx
import { Textarea } from '@/components/ui/textarea';

<Textarea placeholder="Type your message here." />
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
  },
  args: {
    placeholder: 'Type your message here...',
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </div>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Tell us about yourself" />
      <p className="text-sm text-muted-foreground">
        Your bio will be visible on your public profile.
      </p>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled textarea',
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue:
      'This is some default text that appears in the textarea. It can span multiple lines and be edited by the user.',
  },
};

export const CustomRows: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <div>
        <Label htmlFor="small">Small (3 rows)</Label>
        <Textarea id="small" rows={3} placeholder="Small textarea" />
      </div>
      <div>
        <Label htmlFor="medium">Medium (5 rows)</Label>
        <Textarea id="medium" rows={5} placeholder="Medium textarea" />
      </div>
      <div>
        <Label htmlFor="large">Large (8 rows)</Label>
        <Textarea id="large" rows={8} placeholder="Large textarea" />
      </div>
    </div>
  ),
};

export const WithCharacterCount: Story = {
  render: () => {
    const maxLength = 280;
    return (
      <div className="grid w-full max-w-sm gap-1.5">
        <Label htmlFor="tweet">Message</Label>
        <Textarea
          id="tweet"
          placeholder="What's happening?"
          maxLength={maxLength}
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Max {maxLength} characters</span>
        </div>
      </div>
    );
  },
};

export const WithError: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="error-textarea" className="text-destructive">
        Description
      </Label>
      <Textarea
        id="error-textarea"
        placeholder="Enter description"
        className="border-destructive focus-visible:ring-destructive"
        aria-invalid="true"
      />
      <p className="text-sm text-destructive">Description is required.</p>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <form className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <input
          id="subject"
          type="text"
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
          placeholder="Enter subject"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="form-message">Message</Label>
        <Textarea
          id="form-message"
          placeholder="Enter your message"
          rows={6}
        />
      </div>
      <div className="flex gap-2">
        <Button type="submit">Send Message</Button>
        <Button type="button" variant="outline">
          Cancel
        </Button>
      </div>
    </form>
  ),
};

export const Resizable: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="resizable">Resizable Textarea</Label>
      <Textarea
        id="resizable"
        placeholder="Drag the bottom-right corner to resize..."
        className="resize"
      />
      <p className="text-sm text-muted-foreground">
        This textarea can be resized by dragging the corner.
      </p>
    </div>
  ),
};

export const NoResize: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="no-resize">Fixed Size Textarea</Label>
      <Textarea
        id="no-resize"
        placeholder="This textarea cannot be resized..."
        className="resize-none"
        rows={4}
      />
    </div>
  ),
};
