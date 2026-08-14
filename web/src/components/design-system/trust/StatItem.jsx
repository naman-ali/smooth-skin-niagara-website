import React from 'react';

export function StatItem({ icon, value, label, divider = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, minWidth: 0 }}>
      <div style={{ minWidth: 0, maxWidth: 92 }}>
        {icon && <div style={{ color: 'var(--color-brand-primary)', marginBottom: 10 }}>{icon}</div>}
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, color: 'var(--color-brand-deep)', fontWeight: 500, lineHeight: 1.1 }}>{value}</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--color-text-secondary)', marginTop: 4, lineHeight: 1.35 }}>{label}</div>
      </div>
      {divider && <span style={{ width: 1, height: 56, background: 'var(--color-border)', flexShrink: 0 }} />}
    </div>
  );
}
