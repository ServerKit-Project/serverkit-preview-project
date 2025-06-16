import React from 'react';
import { ButtonBase, Variant, Size } from './styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style of the button
   * @default "default"
   */
  variant?: Variant;

  /**
   * The size of the button
   * @default "default"
   */
  size?: Size;

  /**
   * Optional CSS class name for custom styling
   */
  className?: string;

  /**
   * The content of the button
   */
  children: React.ReactNode;
}

/**
 * A versatile button component that supports different variants and sizes.
 * 
 * @example
 * ```tsx
 * // Default button
 * <Button>Click me</Button>
 * 
 * // Destructive button
 * <Button variant="destructive">Delete</Button>
 * 
 * // Small outline button
 * <Button variant="outline" size="sm">Small Outline</Button>
 * 
 * // Large secondary button
 * <Button variant="secondary" size="lg">Large Secondary</Button>
 * 
 * // Icon button
 * <Button variant="ghost" size="icon"><Icon /></Button>
 * 
 * // Link button
 * <Button variant="link">Link Style</Button>
 * 
 * // Disabled button
 * <Button disabled>Disabled</Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'default',
  ...props
}) => {
  return (
    <ButtonBase $variant={variant} $size={size} {...props}>
      {children}
    </ButtonBase>
  );
};

Button.displayName = 'Button';
