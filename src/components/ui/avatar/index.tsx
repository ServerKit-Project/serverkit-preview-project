import React from 'react';
import styled, { css } from 'styled-components';

export interface AvatarProps {
  /**
   * The size of the avatar
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * The image source URL
   */
  src?: string;

  /**
   * Alt text for the avatar image
   */
  alt?: string;

  /**
   * Fallback text when image fails to load or no image is provided
   * Usually initials of a name
   */
  fallback?: string;

  /**
   * Optional CSS class name
   */
  className?: string;
}

const sizes = {
  sm: {
    width: '2rem',
    fontSize: '0.75rem',
  },
  md: {
    width: '2.5rem',
    fontSize: '0.875rem',
  },
  lg: {
    width: '3rem',
    fontSize: '1rem',
  },
  xl: {
    width: '4rem',
    fontSize: '1.25rem',
  },
};

const AvatarContainer = styled.div<{
  $size: keyof typeof sizes;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  border-radius: 9999px;
  background-color: #f3f4f6;
  color: #4b5563;

  ${props => css`
    width: ${sizes[props.$size].width};
    height: ${sizes[props.$size].width};
    font-size: ${sizes[props.$size].fontSize};
  `}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const Fallback = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  line-height: 1;
  text-transform: uppercase;
`;

/**
 * Avatar component for displaying user images with fallback
 * 
 * @example
 * ```tsx
 * // With image
 * <Avatar
 *   src="https://example.com/avatar.jpg"
 *   alt="User avatar"
 * />
 * 
 * // With fallback
 * <Avatar fallback="JD" />
 * 
 * // Different sizes
 * <Avatar size="sm" fallback="SM" />
 * <Avatar size="md" fallback="MD" />
 * <Avatar size="lg" fallback="LG" />
 * <Avatar size="xl" fallback="XL" />
 * ```
 */
export const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  src,
  alt,
  fallback,
  className,
}) => {
  const [hasError, setHasError] = React.useState(false);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <AvatarContainer $size={size} className={className}>
      {src && !hasError ? (
        <Image
          src={src}
          alt={alt || fallback || 'Avatar'}
          onError={handleError}
        />
      ) : (
        <Fallback>
          {fallback?.substring(0, 2)}
        </Fallback>
      )}
    </AvatarContainer>
  );
}; 