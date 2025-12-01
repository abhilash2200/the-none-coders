import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, MotionProps } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-foreground)] disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-[#000000] text-white shadow-sm hover:bg-[#111111] active:bg-[#0a0a0a] dark:bg-[#ffffff] dark:text-[#000000] dark:hover:bg-[#f5f5f5] dark:active:bg-[#e5e5e5]",
        secondary:
          "bg-white text-[#000000] border border-[#e5e5e5] shadow-sm hover:bg-[#fafafa] hover:border-[#d4d4d4] active:bg-[#f5f5f5] dark:bg-[#1a1a1a] dark:text-white dark:border-[#404040] dark:hover:bg-[#262626] dark:hover:border-[#525252]",
        outline:
          "bg-transparent text-[#000000] border border-[#d4d4d4] hover:bg-[#fafafa] hover:border-[#a3a3a3] active:bg-[#f5f5f5] dark:text-white dark:border-[#404040] dark:hover:bg-[#262626] dark:hover:border-[#525252]",
        ghost:
          "bg-transparent text-[#000000] hover:bg-[#f5f5f5] active:bg-[#e5e5e5] dark:text-white dark:hover:bg-[#262626] dark:active:bg-[#1f1f1f]",
      },
      size: {
        sm: "h-9 px-5 py-2.5 text-sm rounded-md",
        md: "h-11 px-6 py-3 text-base rounded-lg",
        lg: "h-14 px-7 py-4 text-base rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "size" | "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  >,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  asLink?: boolean;
  href?: string;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  motionProps?: Partial<MotionProps>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      asLink = false,
      href,
      loading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      motionProps,
      ...props
    },
    ref
  ) => {
    // Handle ref for motion.button
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    React.useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement);
    const isDisabled = disabled || loading;

    // Motion props for animations
    const defaultMotionProps = {
      whileHover: { scale: 1.02 },
      whileTap: { scale: 0.98 },
      transition: { duration: 0.2, ease: "easeOut" as const },
      ...motionProps,
    };

    // If it's a link, render as Link (without motion to avoid type conflicts)
    if (asLink && href) {
      return (
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant, size }),
            fullWidth && "w-full",
            "transition-transform duration-200 hover:scale-105 active:scale-95",
            className
          )}
          aria-disabled={isDisabled}
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {leftIcon && !loading && leftIcon}
          {children}
          {rightIcon && !loading && rightIcon}
        </Link>
      );
    }

    // If asChild, use Slot (for composition)
    if (asChild) {
      return (
        <Slot
          className={cn(
            buttonVariants({ variant, size }),
            fullWidth && "w-full",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    // Regular button with motion
    // Type assertion to avoid conflicts between React's event handlers and Framer Motion's types
    return (
      <motion.button
        ref={buttonRef}
        className={cn(
          buttonVariants({ variant, size }),
          fullWidth && "w-full",
          className
        )}
        disabled={isDisabled}
        {...defaultMotionProps}
        {...(props as Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd' | 'size'>)}
        aria-busy={loading}
        aria-disabled={isDisabled}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {leftIcon && !loading && leftIcon}
        {children}
        {rightIcon && !loading && rightIcon}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
