import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './card';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Badge } from './badge';
import { Bell, CreditCard, Users, Activity, DollarSign, ArrowUpRight } from 'lucide-react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
Cards are used to group related content and actions. They provide a consistent container for various types of content.

## Usage

\`\`\`tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content...</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
\`\`\`

## Composition

Cards are composed of several sub-components:
- **CardHeader**: Contains the title and description
- **CardTitle**: The main heading of the card
- **CardDescription**: Secondary descriptive text
- **CardContent**: The main body content area
- **CardFooter**: Contains actions and secondary information
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

// Basic Card
export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a card description.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here. This is where you put the main information.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

// Simple Card
export const Simple: Story = {
  render: () => (
    <Card className="w-[350px] p-6">
      <p className="text-sm text-muted-foreground">
        A simple card with just content, no header or footer.
      </p>
    </Card>
  ),
};

// With Form
export const WithForm: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Create account</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Card with a form for user input, commonly used for authentication.',
      },
    },
  },
};

// Notification Card
export const NotificationCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader className="pb-3">
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center gap-4 rounded-md border p-4">
          <Bell className="h-5 w-5" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Push Notifications</p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-md border p-4">
          <CreditCard className="h-5 w-5" />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">Card Payment</p>
            <p className="text-sm text-muted-foreground">
              Your payment has been processed.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Mark all as read</Button>
      </CardFooter>
    </Card>
  ),
};

// Stats Card
export const StatsCard: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+2,350</div>
          <p className="text-xs text-muted-foreground">
            +180.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sales</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12,234</div>
          <p className="text-xs text-muted-foreground">
            +19% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Now</CardTitle>
          <Activity className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+573</div>
          <p className="text-xs text-muted-foreground">
            +201 since last hour
          </p>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Dashboard-style stats cards showing key metrics.',
      },
    },
  },
};

// Clickable Card
export const ClickableCard: Story = {
  render: () => (
    <Card className="w-[350px] cursor-pointer transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Project Alpha</CardTitle>
          <ArrowUpRight className="h-4 w-4" />
        </div>
        <CardDescription>Last updated 2 hours ago</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Click this card to view project details and recent activity.
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex gap-2">
          <Badge>Active</Badge>
          <Badge variant="secondary">Frontend</Badge>
        </div>
      </CardFooter>
    </Card>
  ),
};

// Featured Card
export const FeaturedCard: Story = {
  render: () => (
    <Card className="w-[400px] overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5" />
      <CardHeader>
        <div className="flex items-center gap-2">
          <Badge>Featured</Badge>
          <Badge variant="outline">New</Badge>
        </div>
        <CardTitle className="mt-2">Getting Started Guide</CardTitle>
        <CardDescription>
          Learn how to set up and use the design system in your projects.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This comprehensive guide covers everything from installation to
          advanced customization options.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Preview</Button>
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  ),
};

// Horizontal Card
export const HorizontalCard: Story = {
  render: () => (
    <Card className="flex w-[500px] overflow-hidden">
      <div className="w-1/3 bg-gradient-to-br from-primary/30 to-primary/10" />
      <div className="flex-1">
        <CardHeader>
          <CardTitle>Horizontal Layout</CardTitle>
          <CardDescription>
            Cards can be laid out horizontally for different use cases.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Perfect for media cards, product listings, or feature highlights.
          </p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Learn More</Button>
        </CardFooter>
      </div>
    </Card>
  ),
};

// Card Grid
export const CardGrid: Story = {
  render: () => (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>Card {i}</CardTitle>
            <CardDescription>Card description {i}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Card content for item {i}.
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Responsive grid of cards that adjusts to screen size.',
      },
    },
  },
};
