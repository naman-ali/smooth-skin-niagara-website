// Smooth Skin Niagara — Tailwind design tokens
// Mirrors tokens/colors.css, tokens/typography.css, tokens/spacing.css
// Usage: <script src="https://cdn.tailwindcss.com"></script>
// then <script>tailwind.config = SSN_TAILWIND_CONFIG</script>
// or, in a build setup: module.exports = SSN_TAILWIND_CONFIG in tailwind.config.js
const SSN_TAILWIND_CONFIG = {
  theme: {
    extend: {
      colors: {
        linen: '#F5F2EB',
        'warm-white': '#FBFAF7',
        stone: '#D9D5C8',
        olive: { 300: '#DDD8CF', 500: '#87907A', 600: '#667052', 700: '#4F5B3A' },
        ink: { 900: '#252624', 600: '#64655F' },
        star: '#F5B400',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Manrope', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['11px', { letterSpacing: '0.16em' }],
        'display-lg': ['64px', { lineHeight: '1.05' }],
        'display-xl': ['80px', { lineHeight: '1.05' }],
      },
      borderRadius: { sm: '8px', md: '12px', lg: '16px' },
      boxShadow: {
        sm: '0 1px 2px rgba(37,38,36,0.04)',
        md: '0 4px 16px rgba(37,38,36,0.06)',
        lg: '0 12px 32px rgba(37,38,36,0.08)',
      },
      maxWidth: { container: '1480px' },
      transitionTimingFunction: { standard: 'cubic-bezier(0.4,0,0.2,1)' },
    },
  },
};
if (typeof module !== 'undefined') module.exports = SSN_TAILWIND_CONFIG;
