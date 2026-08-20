import React from 'react';

export function Badge({ children, tone = 'olive' }) {
  const tones = {
    olive: { background: 'rgba(102,112,82,0.1)', color: 'var(--color-brand-deep)' },
    neutral: { background: 'var(--olive-200)', color: 'var(--color-text-primary)' },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', padding: '5px 14px',
      borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-body)',
      fontSize: 12, fontWeight: 600, letterSpacing: '0.02em', ...tones[tone],
    }}>{children}</span>
  );
}
