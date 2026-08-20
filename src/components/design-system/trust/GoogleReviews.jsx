import React from 'react';

export function GoogleReviews({ rating = '5.0', count = 61 }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 13, background: 'var(--olive-100)',
      border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)',
      padding: '13px 20px', fontFamily: 'var(--font-body)', width: 'fit-content',
    }}>
      <svg width="22" height="22" viewBox="0 0 48 48"><path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v9h11.84c-.51 2.75-2.06 5.09-4.39 6.65v5.52h7.11c4.16-3.83 6.56-9.48 6.56-16.67z"/><path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="#FBBC05" d="M11.69 28.18A13.99 13.99 0 0 1 10.9 24c0-1.45.25-2.86.7-4.18v-5.7H4.34A21.97 21.97 0 0 0 2 24c0 3.55.85 6.9 2.34 9.88l7.35-5.7z"/><path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg>
      <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-text-primary)' }}>Google Reviews</span>
      <span style={{ width: 1, height: 20, background: 'var(--color-border)' }} />
      <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)' }}>{rating}</span>
      <span style={{ display: 'flex', gap: 1 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#F5B400"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        ))}
      </span>
      <span style={{ width: 1, height: 20, background: 'var(--color-border)' }} />
      <span style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>Based on {count} reviews</span>
    </div>
  );
}
