import React from 'react';

export function PhoneCallout({ phone = '(905) 920-7229', label = 'Call or Text' }) {
  return (
    <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} style={{
      display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none',
      fontFamily: 'var(--font-body)', flexShrink: 0, whiteSpace: 'nowrap',
    }}>
      <span style={{
        width: 38, height: 38, borderRadius: '50%', border: '1px solid #667052',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#667052" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.25 }}>
        <span style={{ fontSize: 18, fontWeight: 600, whiteSpace: 'nowrap', color: '#252624' }}>{phone}</span>
        <span style={{ fontSize: 13, color: '#6B6C67' }}>{label}</span>
      </div>
    </a>
  );
}
