"use client";

import * as React from "react";
import Link from "next/link";
import { useAuth, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import * as ButtonModule from "@/components/design-system/core/Button";
import type { ButtonProps } from "@/components/design-system/core/Button";
import * as NavDropdownModule from "@/components/design-system/navigation/NavDropdown";
import type { NavDropdownProps } from "@/components/design-system/navigation/NavDropdown";
import * as PhoneCalloutModule from "@/components/design-system/navigation/PhoneCallout";
import type { PhoneCalloutProps } from "@/components/design-system/navigation/PhoneCallout";

const Button = (ButtonModule as unknown as { Button: React.FC<ButtonProps> })
  .Button;
const NavDropdown = (
  NavDropdownModule as unknown as { NavDropdown: React.FC<NavDropdownProps> }
).NavDropdown;
const PhoneCallout = (
  PhoneCalloutModule as unknown as { PhoneCallout: React.FC<PhoneCalloutProps> }
).PhoneCallout;

const serviceItems = [
  { label: "Laser Hair Removal", href: "#" },
  { label: "Microneedling", href: "/edermastamp-microneedling" },
  { label: "Chemical Peels", href: "/cosmetic-grade-pca-skin-peels" },
  { label: "OxyGeneo Facials", href: "/oxygeneo-3-1-super-facial" },
  { label: "RF Skin Tightening", href: "#" },
  { label: "Celluma LED Light Therapy", href: "/celluma-led-light-therapy" },
  { label: "Eyelash Extensions", href: "/eyelash-extensions" },
];

const moreItems = ["FAQ", "Careers", "Contact"];

const desktopLinkStyle = {
  color: "var(--color-text-primary)",
  textDecoration: "none",
  fontSize: 16,
  fontWeight: 500,
  fontFamily: "var(--font-body)",
  whiteSpace: "nowrap" as const,
};

const mobileLinkStyle = {
  display: "block" as const,
  padding: "12px 0",
  color: "var(--color-text-primary)",
  textDecoration: "none",
  fontSize: 17,
  fontFamily: "var(--font-body)",
  fontWeight: 500,
  borderBottom: "1px solid var(--color-border)",
};

const dividerStyle = {
  border: 0,
  borderTop: "1px solid var(--color-border)",
  margin: "8px 0",
};

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const { isLoaded, userId } = useAuth();

  const closeMenu = () => setOpen(false);

  return (
    <header
      style={{
        position: "relative",
        zIndex: 50,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        padding: "20px 28px",
        background: "var(--olive-100)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 56,
          flex: "1 1 auto",
          minWidth: 0,
        }}
      >
        <Link href="/" style={{ flexShrink: 0 }}>
          <img
            src="/assets/logo.png"
            alt="Smooth Skin Niagara"
            style={{ height: 64, display: "block" }}
          />
        </Link>
        <nav
          className="hidden lg:flex"
          style={{
            alignItems: "center",
            gap: 32,
            fontSize: 16,
            minWidth: 0,
          }}
        >
          <NavDropdown label="Services" items={serviceItems} />
          <a href="#" style={desktopLinkStyle}>
            About
          </a>
          <a href="#" style={desktopLinkStyle}>
            Results
          </a>
          <a href="#" style={desktopLinkStyle}>
            Pricing
          </a>
          <NavDropdown label="More" items={moreItems} />
        </nav>
      </div>

      <div
        className="hidden lg:flex"
        style={{ alignItems: "center", gap: 28, flexShrink: 0 }}
      >
        <PhoneCallout />
        <Button variant="primary" size="sm">
          Book a Free Consultation
        </Button>
        {isLoaded && userId && <UserButton />}
      </div>

      <button
        type="button"
        className="flex lg:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 44,
          height: 44,
          borderRadius: 12,
          border: "1px solid var(--color-border)",
          background: "var(--olive-100)",
          color: "var(--color-text-primary)",
          cursor: "pointer",
        }}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div
          className="flex lg:hidden"
          onClick={(e) => {
            if (e.currentTarget === e.target) {
              setOpen(false);
            }
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 40,
            background: "var(--olive-100)",
            padding: "92px 28px 28px",
            overflowY: "auto",
            flexDirection: "column",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column" }}>
            {serviceItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                style={mobileLinkStyle}
              >
                {item.label}
              </a>
            ))}
            <hr style={dividerStyle} />
            <a href="#" onClick={closeMenu} style={mobileLinkStyle}>
              About
            </a>
            <a href="#" onClick={closeMenu} style={mobileLinkStyle}>
              Results
            </a>
            <a href="#" onClick={closeMenu} style={mobileLinkStyle}>
              Pricing
            </a>
            <hr style={dividerStyle} />
            {moreItems.map((label) => (
              <a
                key={label}
                href="#"
                onClick={closeMenu}
                style={mobileLinkStyle}
              >
                {label}
              </a>
            ))}
          </nav>

          <div
            style={{
              marginTop: "auto",
              paddingTop: 32,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <PhoneCallout />
            <Button
              variant="primary"
              size="sm"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Book a Free Consultation
            </Button>
            {isLoaded && userId && <UserButton />}
          </div>
        </div>
      )}
    </header>
  );
}
