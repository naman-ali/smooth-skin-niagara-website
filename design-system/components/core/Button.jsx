import React from 'react';

const sizeStyles = {
  md: { padding: '15px 27px', fontSize: 16 },
  sm: { padding: '10px 20px', fontSize: 15 },
};

export function Button({ variant = 'primary', size = 'md', icon, iconPosition = 'right', disabled = false, children, onClick, style }) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    borderRadius: 'var(--radius-md)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    transition: 'background var(--duration-normal) var(--ease-standard), border-color var(--duration-normal) var(--ease-standard), opacity var(--duration-fast) var(--ease-standard)',
    opacity: disabled ? 0.5 : 1,
    ...sizeStyles[size],
  };
  const variants = {
    primary: { background: 'var(--cta-primary-bg)', color: 'var(--cta-primary-text)' },
    secondary: { background: 'var(--cta-secondary-bg)', color: 'var(--cta-secondary-text)', borderColor: 'var(--cta-secondary-border)' },
    ghost: { background: 'transparent', color: 'var(--color-brand-deep)' },
  };
  const hover = {
    primary: { background: '#3d4630' },
    secondary: { background: 'rgba(102,112,82,0.08)' },
    ghost: { background: 'rgba(102,112,82,0.06)' },
  };
  const [isHover, setHover] = React.useState(false);
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...(isHover && !disabled ? hover[variant] : {}), ...style }}
    >
      {icon && iconPosition === 'left' ? icon : null}
      {children}
      {icon && iconPosition === 'right' ? icon : null}
    </button>
  );
}
