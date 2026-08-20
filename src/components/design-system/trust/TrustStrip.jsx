import React from 'react';
import { IconCircle } from '../core/IconCircle.jsx';

export function TrustStrip({ items = [] }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {items.map((it, i) => (
        <div key={i} style={{
          flex: '1 1 200px', minWidth: 0, display: 'flex', gap: 15, alignItems: 'flex-start', padding: '22px 24px',
          background: 'var(--olive-100)', border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)',
        }}>
          <IconCircle icon={it.icon} size={44} />
          <div style={{ fontFamily: 'var(--font-body)' }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)' }}>{it.title}</div>
            <div style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginTop: 2, lineHeight: 1.4 }}>{it.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
