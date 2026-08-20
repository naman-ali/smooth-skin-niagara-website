import React from 'react';

export function Select({ label, options = [], value, onChange }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)' }}>
      {label && <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>{label}</span>}
      <select value={value} onChange={onChange} style={{
        font: 'inherit', fontSize: 15, padding: '12px 14px',
        borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)',
        background: 'var(--olive-100)', color: 'var(--color-text-primary)',
      }}>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
