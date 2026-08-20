import React from 'react';

export function Input({ label, placeholder, type = 'text', value, onChange }) {
  const [focused, setFocused] = React.useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)' }}>
      {label && <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>{label}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          font: 'inherit', fontSize: 15, padding: '12px 14px',
          borderRadius: 'var(--radius-sm)',
          border: `1px solid ${focused ? 'var(--color-brand-primary)' : 'var(--color-border)'}`,
          background: 'var(--olive-100)', color: 'var(--color-text-primary)',
          outline: focused ? '2px solid rgba(102,112,82,0.25)' : 'none',
          transition: 'border-color var(--duration-fast) var(--ease-standard)',
        }}
      />
    </label>
  );
}
