/* @ds-bundle: {"format":4,"namespace":"SmoothSkinNiagaraDesignSystem_31611e","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconCircle","sourcePath":"components/core/IconCircle.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"NavDropdown","sourcePath":"components/navigation/NavDropdown.jsx"},{"name":"PhoneCallout","sourcePath":"components/navigation/PhoneCallout.jsx"},{"name":"GoogleReviews","sourcePath":"components/trust/GoogleReviews.jsx"},{"name":"StatItem","sourcePath":"components/trust/StatItem.jsx"},{"name":"TestimonialQuote","sourcePath":"components/trust/TestimonialQuote.jsx"},{"name":"TrustStrip","sourcePath":"components/trust/TrustStrip.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"035a1b421e02","components/core/Button.jsx":"44313213c3bc","components/core/Card.jsx":"bf96a3be9ca4","components/core/IconCircle.jsx":"fb68ead951b7","components/core/Input.jsx":"4af33a3cbe65","components/core/Select.jsx":"cecb52f00d5c","components/navigation/NavDropdown.jsx":"e7c069aaf0a6","components/navigation/PhoneCallout.jsx":"13c9389a008e","components/trust/GoogleReviews.jsx":"fce2202cff96","components/trust/StatItem.jsx":"2fa5da07940f","components/trust/TestimonialQuote.jsx":"8cc449d50017","components/trust/TrustStrip.jsx":"c90c384f8734","tailwind/tailwind.config.js":"87b969e6caab","ui_kits/website/Homepage.jsx":"45cf0312c7e4"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SmoothSkinNiagaraDesignSystem_31611e = window.SmoothSkinNiagaraDesignSystem_31611e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'olive'
}) {
  const tones = {
    olive: {
      background: 'rgba(102,112,82,0.1)',
      color: 'var(--color-brand-deep)'
    },
    neutral: {
      background: 'var(--olive-200)',
      color: 'var(--color-text-primary)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '5px 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.02em',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const sizeStyles = {
  md: {
    padding: '15px 27px',
    fontSize: 16
  },
  sm: {
    padding: '10px 20px',
    fontSize: 15
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  disabled = false,
  children,
  onClick,
  style
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    borderRadius: 'var(--radius-md)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    whiteSpace: 'nowrap',
    flexShrink: 0,
    transition: 'background var(--duration-normal) var(--ease-standard), border-color var(--duration-normal) var(--ease-standard), opacity var(--duration-fast) var(--ease-standard)',
    opacity: disabled ? 0.5 : 1,
    ...sizeStyles[size]
  };
  const variants = {
    primary: {
      background: 'var(--cta-primary-bg)',
      color: 'var(--cta-primary-text)'
    },
    secondary: {
      background: 'var(--cta-secondary-bg)',
      color: 'var(--cta-secondary-text)',
      borderColor: 'var(--cta-secondary-border)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-brand-deep)'
    }
  };
  const hover = {
    primary: {
      background: '#3d4630'
    },
    secondary: {
      background: 'rgba(102,112,82,0.08)'
    },
    ghost: {
      background: 'rgba(102,112,82,0.06)'
    }
  };
  const [isHover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...(isHover && !disabled ? hover[variant] : {}),
      ...style
    }
  }, icon && iconPosition === 'left' ? icon : null, children, icon && iconPosition === 'right' ? icon : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = 24,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconCircle.jsx
try { (() => {
function IconCircle({
  icon,
  size = 48
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      border: '1.5px solid var(--color-brand-primary)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-brand-primary)',
      flexShrink: 0
    }
  }, icon);
}
Object.assign(__ds_scope, { IconCircle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconCircle.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      font: 'inherit',
      fontSize: 15,
      padding: '12px 14px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${focused ? 'var(--color-brand-primary)' : 'var(--color-border)'}`,
      background: 'var(--olive-100)',
      color: 'var(--color-text-primary)',
      outline: focused ? '2px solid rgba(102,112,82,0.25)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard)'
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    style: {
      font: 'inherit',
      fontSize: 15,
      padding: '12px 14px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--color-border)',
      background: 'var(--olive-100)',
      color: 'var(--color-text-primary)'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavDropdown.jsx
try { (() => {
function NavDropdown({
  label,
  items = []
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false)
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      background: 'none',
      border: 'none',
      font: 'inherit',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--color-text-primary)',
      cursor: 'pointer',
      padding: '8px 4px'
    }
  }, label, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    style: {
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--duration-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))), open && items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      minWidth: 200,
      background: 'var(--olive-100)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      padding: 8,
      display: 'flex',
      flexDirection: 'column',
      zIndex: 10
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      padding: '10px 12px',
      borderRadius: 'var(--radius-sm)',
      color: 'var(--color-text-primary)',
      textDecoration: 'none',
      fontSize: 14
    }
  }, i))));
}
Object.assign(__ds_scope, { NavDropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavDropdown.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PhoneCallout.jsx
try { (() => {
function PhoneCallout({
  phone = '(905) 920-7229',
  label = 'Call or Text'
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: `tel:${phone.replace(/[^0-9+]/g, '')}`,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none',
      color: 'var(--color-text-primary)',
      fontFamily: 'var(--font-body)',
      flexShrink: 0,
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--color-brand-primary)",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      whiteSpace: 'nowrap'
    }
  }, phone), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--color-text-secondary)'
    }
  }, label)));
}
Object.assign(__ds_scope, { PhoneCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PhoneCallout.jsx", error: String((e && e.message) || e) }); }

// components/trust/GoogleReviews.jsx
try { (() => {
function GoogleReviews({
  rating = '5.0',
  count = 61
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      background: 'var(--olive-100)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      padding: '13px 20px',
      fontFamily: 'var(--font-body)',
      width: 'fit-content'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 48 48"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v9h11.84c-.51 2.75-2.06 5.09-4.39 6.65v5.52h7.11c4.16-3.83 6.56-9.48 6.56-16.67z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M11.69 28.18A13.99 13.99 0 0 1 10.9 24c0-1.45.25-2.86.7-4.18v-5.7H4.34A21.97 21.97 0 0 0 2 24c0 3.55.85 6.9 2.34 9.88l7.35-5.7z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--color-text-primary)'
    }
  }, "Google Reviews"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 20,
      background: 'var(--color-border)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--color-text-primary)'
    }
  }, rating), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 1
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("svg", {
    key: i,
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "#F5B400"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 20,
      background: 'var(--color-border)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-secondary)'
    }
  }, "Based on ", count, " reviews"));
}
Object.assign(__ds_scope, { GoogleReviews });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/GoogleReviews.jsx", error: String((e && e.message) || e) }); }

// components/trust/StatItem.jsx
try { (() => {
function StatItem({
  icon,
  value,
  label,
  divider = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      maxWidth: 92
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--color-brand-primary)',
      marginBottom: 10
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      color: 'var(--color-brand-deep)',
      fontWeight: 500,
      lineHeight: 1.1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--color-text-secondary)',
      marginTop: 4,
      lineHeight: 1.35
    }
  }, label)), divider && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 56,
      background: 'var(--color-border)',
      flexShrink: 0
    }
  }));
}
Object.assign(__ds_scope, { StatItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/StatItem.jsx", error: String((e && e.message) || e) }); }

// components/trust/TestimonialQuote.jsx
try { (() => {
function TestimonialQuote({
  quote,
  author,
  rating = 5
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--olive-100)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      padding: '22px 24px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "16",
    viewBox: "0 0 32 24",
    fill: "var(--color-brand-primary)",
    style: {
      marginBottom: 10,
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 24V14.4C0 6.4 4.8 1.2 12.8 0l1.6 4.8C9.6 6 7.2 8.4 7.2 12H14v12H0Zm17.6 0V14.4c0-8 4.8-13.2 12.8-14.4l1.6 4.8c-4.8 1.2-7.2 3.6-7.2 7.2h6.4v12H17.6Z"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.6,
      color: 'var(--color-text-primary)',
      margin: '0 0 14px'
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--color-border)',
      margin: '0 0 12px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--color-text-primary)',
      marginBottom: 6
    }
  }, author), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("svg", {
    key: i,
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: i < rating ? 'var(--color-brand-primary)' : 'var(--olive-300)'
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.86L12 17.77l-6.18 3.23L7 14.14 2 9.27l6.91-1.01L12 2z"
  })))));
}
Object.assign(__ds_scope, { TestimonialQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/TestimonialQuote.jsx", error: String((e && e.message) || e) }); }

// components/trust/TrustStrip.jsx
try { (() => {
function TrustStrip({
  items = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: '1 1 200px',
      minWidth: 0,
      display: 'flex',
      gap: 15,
      alignItems: 'flex-start',
      padding: '22px 24px',
      background: 'var(--olive-100)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconCircle, {
    icon: it.icon,
    size: 44
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: 'var(--color-text-primary)'
    }
  }, it.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-text-secondary)',
      marginTop: 2,
      lineHeight: 1.4
    }
  }, it.desc)))));
}
Object.assign(__ds_scope, { TrustStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trust/TrustStrip.jsx", error: String((e && e.message) || e) }); }

// tailwind/tailwind.config.js
try { (() => {
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
        olive: {
          300: '#DDD8CF',
          500: '#87907A',
          600: '#667052',
          700: '#4F5B3A'
        },
        ink: {
          900: '#252624',
          600: '#64655F'
        },
        star: '#F5B400'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Manrope', '-apple-system', 'sans-serif']
      },
      fontSize: {
        eyebrow: ['11px', {
          letterSpacing: '0.16em'
        }],
        'display-lg': ['64px', {
          lineHeight: '1.05'
        }],
        'display-xl': ['80px', {
          lineHeight: '1.05'
        }]
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px'
      },
      boxShadow: {
        sm: '0 1px 2px rgba(37,38,36,0.04)',
        md: '0 4px 16px rgba(37,38,36,0.06)',
        lg: '0 12px 32px rgba(37,38,36,0.08)'
      },
      maxWidth: {
        container: '1480px'
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.4,0,0.2,1)'
      }
    }
  }
};
if (typeof module !== 'undefined') module.exports = SSN_TAILWIND_CONFIG;
})(); } catch (e) { __ds_ns.__errors.push({ path: "tailwind/tailwind.config.js", error: String((e && e.message) || e) }); }

// ui_kits/website/Homepage.jsx
try { (() => {
const {
  Button,
  IconCircle
} = window.SmoothSkinNiagaraDesignSystem_31611e;
const {
  NavDropdown,
  PhoneCallout
} = window.SmoothSkinNiagaraDesignSystem_31611e;
const {
  GoogleReviews,
  TrustStrip,
  StatItem,
  TestimonialQuote
} = window.SmoothSkinNiagaraDesignSystem_31611e;
const Arrow = () => /*#__PURE__*/React.createElement("svg", {
  width: "14",
  height: "14",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14M13 6l6 6-6 6"
}));
const Pin = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "9",
  r: "2.5"
}));
const Shield = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 2 3 6v6c0 5 4 8 9 10 5-2 9-5 9-10V6l-9-4Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M9 12l2 2 4-4"
}));
const Leaf = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 21s-8-4.5-8-11a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 6.5-8 11-8 11Z"
}));
const Person = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "8",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 21c0-4 4-6 8-6s8 2 8 6"
}));
const Sparkle = () => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 3v4M12 17v4M4 12h4M16 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8"
}));
const ClockLeaf = () => /*#__PURE__*/React.createElement("svg", {
  width: "26",
  height: "26",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "13",
  r: "7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M11 9v4l3 2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 4c2 0 3 1 3 3-2 0-3-1-3-3Z"
}));
const PersonHeart = () => /*#__PURE__*/React.createElement("svg", {
  width: "26",
  height: "26",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "7",
  r: "4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 21c0-4 3-7 7-7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16.5 15c-1.5 0-2.5 1.2-2.5 1.2S12.5 15 11 15c-1.4 0-2.5 1.1-2.5 2.5C8.5 20 13 22.5 14 22.5s5.5-2.5 5.5-5c0-1.4-1.1-2.5-2.5-2.5Z"
}));
const GradCap = () => /*#__PURE__*/React.createElement("svg", {
  width: "26",
  height: "26",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12 4 2 9l10 5 10-5-10-5Z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5"
}));
function Header() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '20px 28px',
      background: 'var(--olive-100)',
      borderBottom: '1px solid var(--color-border)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "Smooth Skin Niagara",
    style: {
      height: 46,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("nav", {
    className: "ssn-header-nav",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      fontSize: 14,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(NavDropdown, {
    label: "Services",
    items: ['Laser Hair Removal', 'Microneedling', 'Chemical Peels', 'OxyGeneo Facials', 'RF Skin Tightening', 'LED Therapy', 'Lash Services']
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--color-text-primary)',
      textDecoration: 'none',
      fontSize: 14,
      fontWeight: 500,
      fontFamily: 'var(--font-body)',
      whiteSpace: 'nowrap'
    }
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--color-text-primary)',
      textDecoration: 'none',
      fontSize: 14,
      fontWeight: 500,
      fontFamily: 'var(--font-body)',
      whiteSpace: 'nowrap'
    }
  }, "Results"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--color-text-primary)',
      textDecoration: 'none',
      fontSize: 14,
      fontWeight: 500,
      fontFamily: 'var(--font-body)',
      whiteSpace: 'nowrap'
    }
  }, "Pricing"), /*#__PURE__*/React.createElement(NavDropdown, {
    label: "More",
    items: ['FAQ', 'Careers', 'Contact']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(PhoneCallout, null), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 32,
      background: 'var(--color-border)'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Book a Free Consultation")));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '80px 53px 70px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(../../assets/hero-treatment.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'right center'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'linear-gradient(to right, var(--olive-50) 0%, var(--olive-50) 44%, transparent 66%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '42%',
      minWidth: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      marginBottom: 31
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--color-brand-primary)',
      fontWeight: 700
    }
  }, "Niagara ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-brand-deep)'
    }
  }, "Laser Hair Removal")), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 1,
      background: 'var(--color-border-strong)'
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 80,
      lineHeight: 1.05,
      color: 'var(--color-text-primary)',
      margin: '0 0 31px'
    }
  }, "Confident Skin.", /*#__PURE__*/React.createElement("br", null), "Every Day."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 20,
      lineHeight: 1.6,
      color: 'var(--color-text-secondary)',
      margin: '0 0 40px'
    }
  }, "Advanced laser technology meets personalized care for long-lasting results and beautifully smooth skin."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginBottom: 31
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement(Arrow, null)
  }, "Book Your Free Consultation"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "View Results")), /*#__PURE__*/React.createElement(GoogleReviews, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '62px auto 0'
    }
  }, /*#__PURE__*/React.createElement(TrustStrip, {
    items: [{
      icon: /*#__PURE__*/React.createElement(Pin, null),
      title: 'Proudly Serving',
      desc: 'Niagara Falls and surrounding communities'
    }, {
      icon: /*#__PURE__*/React.createElement(Shield, null),
      title: 'Safe & Effective',
      desc: 'Advanced technology for all skin types'
    }, {
      icon: /*#__PURE__*/React.createElement(Leaf, null),
      title: 'Long-Lasting Results',
      desc: 'Noticeable reduction in fewer sessions'
    }, {
      icon: /*#__PURE__*/React.createElement(Person, null),
      title: 'Personalized Care',
      desc: 'Customized treatments for your unique skin'
    }]
  })));
}
function AshleySection() {
  const rightTestimonials = [{
    quote: /*#__PURE__*/React.createElement(React.Fragment, null, "Ashley is ", /*#__PURE__*/React.createElement("strong", null, "extremely kind, knowledgeable"), ", and truly amazing at what she does. She makes you feel ", /*#__PURE__*/React.createElement("strong", null, "comfortable instantly"), "."),
    author: 'Bri McKinnon'
  }, {
    quote: /*#__PURE__*/React.createElement(React.Fragment, null, "Ashley made me ", /*#__PURE__*/React.createElement("strong", null, "feel at ease right away"), ", talking me through appointments and the entire process."),
    author: 'Stephanie D'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '90px 53px',
      overflow: 'hidden',
      backgroundImage: 'url(../../assets/ashley-section-bg.png)',
      backgroundSize: 'auto 118%',
      backgroundPosition: 'center 8%',
      backgroundRepeat: 'no-repeat'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 32,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 320px',
      minWidth: 280,
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 13,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--color-brand-primary)',
      fontWeight: 700
    }
  }, "Meet Ashley"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 1,
      background: 'var(--color-border-strong)'
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 48,
      lineHeight: 1.1,
      color: 'var(--color-text-primary)',
      margin: '0 0 8px',
      textShadow: '0 1px 12px var(--olive-50), 0 1px 3px var(--olive-50)'
    }
  }, "Ashley Romano"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 22,
      lineHeight: 1.3,
      color: 'var(--color-brand-deep)',
      margin: '0 0 22px',
      textShadow: '0 1px 12px var(--olive-50), 0 1px 3px var(--olive-50)'
    }
  }, "The expert behind Smooth Skin Niagara"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--color-text-primary)',
      margin: '0 0 26px',
      textShadow: '0 1px 14px var(--olive-50), 0 1px 4px var(--olive-50), 0 1px 4px var(--olive-50)'
    }
  }, "Ashley is the founder of Smooth Skin Niagara and personally performs every treatment. With more than 10 years of experience, she is known for her thoughtful, professional approach and her ability to make every client feel comfortable and confident right away."), /*#__PURE__*/React.createElement(TestimonialQuote, {
    quote: /*#__PURE__*/React.createElement(React.Fragment, null, "Ashley was ", /*#__PURE__*/React.createElement("strong", null, "clear, professional"), ", and I truly appreciated her ", /*#__PURE__*/React.createElement("strong", null, "patience and guidance"), ". What a wonderful human being."),
    author: "Anderson Lopez Pena",
    rating: 5
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 1 32%',
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 260px',
      minWidth: 260,
      maxWidth: 340,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, rightTestimonials.map((t, i) => /*#__PURE__*/React.createElement(TestimonialQuote, {
    key: i,
    quote: t.quote,
    author: t.author,
    rating: 5
  })))));
}
Object.assign(window, {
  Header,
  Hero,
  AshleySection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Homepage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconCircle = __ds_scope.IconCircle;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.NavDropdown = __ds_scope.NavDropdown;

__ds_ns.PhoneCallout = __ds_scope.PhoneCallout;

__ds_ns.GoogleReviews = __ds_scope.GoogleReviews;

__ds_ns.StatItem = __ds_scope.StatItem;

__ds_ns.TestimonialQuote = __ds_scope.TestimonialQuote;

__ds_ns.TrustStrip = __ds_scope.TrustStrip;

})();
