import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Progress } from './progress';
import React, { useState, useEffect } from 'react';

const meta: Meta<typeof Progress> = {
  title: 'Feedback/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Progress component displays the progress of a task or operation.

## Usage

\`\`\`tsx
import { Progress } from '@/components/ui/progress';

<Progress value={33} />
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The progress value (0-100)',
    },
  },
  args: {
    value: 60,
  },
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 60,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Progress {...args} />
    </div>
  ),
};

export const Empty: Story = {
  args: {
    value: 0,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Progress {...args} />
    </div>
  ),
};

export const Complete: Story = {
  args: {
    value: 100,
  },
  render: (args) => (
    <div className="w-[300px]">
      <Progress {...args} />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => {
    const value = 75;
    return (
      <div className="w-[300px] space-y-2">
        <div className="flex justify-between text-sm">
          <span>Uploading...</span>
          <span>{value}%</span>
        </div>
        <Progress value={value} />
      </div>
    );
  },
};

// Animated progress
const AnimatedProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-[300px] space-y-2">
      <div className="flex justify-between text-sm">
        <span>Loading...</span>
        <span>{progress}%</span>
      </div>
      <Progress value={progress} />
    </div>
  );
};

export const Animated: Story = {
  render: () => <AnimatedProgress />,
  parameters: {
    docs: {
      description: {
        story: 'Progress bar with animated value change.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Small (h-1)</p>
        <Progress value={60} className="h-1" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Default (h-2)</p>
        <Progress value={60} />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Medium (h-3)</p>
        <Progress value={60} className="h-3" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Large (h-4)</p>
        <Progress value={60} className="h-4" />
      </div>
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Success</p>
        <Progress
          value={75}
          className="[&>div]:bg-green-500"
        />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Warning</p>
        <Progress
          value={50}
          className="[&>div]:bg-yellow-500"
        />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Error</p>
        <Progress
          value={25}
          className="[&>div]:bg-red-500"
        />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">Info</p>
        <Progress
          value={60}
          className="[&>div]:bg-blue-500"
        />
      </div>
    </div>
  ),
};

export const MultipleSteps: Story = {
  render: () => {
    const steps = [
      { label: 'Account', complete: true },
      { label: 'Profile', complete: true },
      { label: 'Settings', complete: false },
      { label: 'Review', complete: false },
    ];
    const completedSteps = steps.filter((s) => s.complete).length;
    const progress = (completedSteps / steps.length) * 100;

    return (
      <div className="w-[400px] space-y-4">
        <div className="flex justify-between">
          {steps.map((step, index) => (
            <div
              key={step.label}
              className={`text-sm ${
                step.complete ? 'text-primary font-medium' : 'text-muted-foreground'
              }`}
            >
              {index + 1}. {step.label}
            </div>
          ))}
        </div>
        <Progress value={progress} />
        <p className="text-sm text-center text-muted-foreground">
          Step {completedSteps} of {steps.length} completed
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress bar used to show completion of multiple steps.',
      },
    },
  },
};

export const FileUpload: Story = {
  render: () => {
    const files = [
      { name: 'document.pdf', progress: 100 },
      { name: 'image.png', progress: 75 },
      { name: 'video.mp4', progress: 30 },
    ];

    return (
      <div className="w-[350px] space-y-4 p-4 border rounded-lg">
        <h4 className="font-medium">Uploading files</h4>
        {files.map((file) => (
          <div key={file.name} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="truncate">{file.name}</span>
              <span className="text-muted-foreground">{file.progress}%</span>
            </div>
            <Progress
              value={file.progress}
              className={file.progress === 100 ? '[&>div]:bg-green-500' : ''}
            />
          </div>
        ))}
      </div>
    );
  },
};
