import React from 'react';

export function Card({ children, padding = 24, style }) {
  return (
    <div style={{
      background: 'var(--surface-card)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding,
      ...style,
    }}>{children}</div>
  );
}
