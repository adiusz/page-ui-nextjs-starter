import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
        // bg-indigo-500 text-primary-foreground hover:bg-indigo-600 dark:text-foreground shadow-lg shadow-indigo-400 dark:shadow-indigo-700
          'bg-primary-300/70 text-primary-foreground hover:bg-primary-300/90 dark:bg-primary-700 dark:hover:bg-primary-700/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        outlinePrimary:
          'border border-primary-300 dark:border-primary-900 hover:bg-primary-100/50 dark:hover:bg-primary-900',
        outlineSecondary:
          'border border-secondary-300 dark:border-secondary-900  hover:bg-secondary-100/50 dark:hover:bg-secondary-900',
        outlineDestructive:
          'border border-red-500 bg-background hover:bg-red-500',
        primary:
          'bg-primary-600 hover:bg-primary-300 transition-all dark:bg-primary text-white shadow-lg shadow-primary-300 ',
        secondary:
          'bg-secondary-300/70 text-secondary-foreground hover:bg-secondary-300/90 dark:bg-secondary-700 dark:hover:bg-secondary-700/90',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        unstyled: '',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-full px-3',
        lg: 'h-11 rounded-full px-8',
        xl: 'h-12 rounded-full px-6 text-md',
        icon: 'h-10 w-10',
        unsized: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
