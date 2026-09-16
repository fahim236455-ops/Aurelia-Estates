import { ReactNode } from 'react';
import { cn } from '../utils/cn';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light' | 'ghost';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  to,
  onClick,
  variant = 'primary',
  className,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-block text-center text-[11px] tracking-[0.15em] font-medium uppercase transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-primary text-secondary py-4 px-10 hover:bg-primary/90 hover:shadow-xl',
    secondary: 'bg-secondary text-primary py-4 px-10 hover:bg-secondary/90 hover:shadow-xl',
    outline: 'border border-primary/20 text-primary py-4 px-10 hover:bg-primary hover:text-secondary',
    'outline-light': 'border border-secondary/20 text-secondary py-4 px-10 hover:bg-secondary hover:text-primary',
    ghost: 'text-primary hover:text-primary/70 py-2 px-4',
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
