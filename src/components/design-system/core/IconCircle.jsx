import React from 'react';

export function IconCircle({ icon, size = 48 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      border: '1.5px solid var(--color-brand-primary)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--color-brand-primary)', flexShrink: 0,
    }}>{icon}</div>
  );
}
