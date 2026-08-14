import React from 'react';

export function NavDropdown({ label, items = [] }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ position: 'relative' }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button style={{
        display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none',
        font: 'inherit', fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500,
        color: 'var(--color-text-primary)', cursor: 'pointer', padding: '8px 4px',
      }}>
        {label}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform var(--duration-fast) var(--ease-standard)' }}><path d="M6 9l6 6 6-6"/></svg>
      </button>
      {open && items.length > 0 && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, minWidth: 200, background: 'var(--olive-100)',
          border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)',
          padding: 8, display: 'flex', flexDirection: 'column', zIndex: 10,
        }}>
          {items.map(i => (
            <a key={i} href="#" style={{ padding: '10px 12px', borderRadius: 'var(--radius-sm)', color: 'var(--color-text-primary)', textDecoration: 'none', fontSize: 14 }}>{i}</a>
          ))}
        </div>
      )}
    </div>
  );
}
