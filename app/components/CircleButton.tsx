import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CircleButtonProps {
  onClick?: () => void;
  text?: string;
  ariaLabel?: string;
  className?: string;
}

function CircleButton({ onClick, text = "Read More", ariaLabel, className = '' }: CircleButtonProps) {
  return (
    <Button
      onClick={onClick || (() => {})}
      variant="outline"
      size="sm"
      aria-label={ariaLabel || text}
      className={`rounded-full w-12 h-12 p-0 ${className}`}
      rightIcon={<ArrowRight className="w-4 h-4" />}
    >
      {text && <span className="sr-only">{text}</span>}
    </Button>
  );
}

export default CircleButton;
