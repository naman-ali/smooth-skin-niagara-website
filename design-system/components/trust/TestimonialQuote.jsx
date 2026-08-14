import React from 'react';

export function TestimonialQuote({ quote, author, rating = 5 }) {
  return (
    <div style={{
      background: 'var(--olive-100)', border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', padding: '22px 24px',
    }}>
      <svg width="22" height="16" viewBox="0 0 32 24" fill="var(--color-brand-primary)" style={{ marginBottom: 10, display: 'block' }}><path d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0l1.6 4.8C9.6 6 7.2 8.4 7.2 12H14v12H0Zm17.6 0V14.4c0-8 4.8-13.2 12.8-14.4l1.6 4.8c-4.8 1.2-7.2 3.6-7.2 7.2h6.4v12H17.6Z"/></svg>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--color-text-primary)', margin: '0 0 14px' }}>{quote}</p>
      <div style={{ height: 1, background: 'var(--color-border)', margin: '0 0 12px' }} />
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 6 }}>{author}</div>
      <div style={{ display: 'flex', gap: 2 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < rating ? 'var(--color-brand-primary)' : 'var(--olive-300)'}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        ))}
      </div>
    </div>
  );
}
