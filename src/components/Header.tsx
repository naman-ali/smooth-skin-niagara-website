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
import { cn } from "@/lib/utils";
import { useConsultation } from "@/components/ConsultationModal";

const Button = (ButtonModule as unknown as { Button: React.FC<ButtonProps> })
  .Button;
const NavDropdown = (
  NavDropdownModule as unknown as { NavDropdown: React.FC<NavDropdownProps> }
).NavDropdown;
const PhoneCallout = (
  PhoneCalloutModule as unknown as { PhoneCallout: React.FC<PhoneCalloutProps> }
).PhoneCallout;

const serviceItems = [
  { label: "Laser Hair Removal", href: "/laser-hair-removal" },
  { label: "Microneedling", href: "/edermastamp-microneedling" },
  { label: "Chemical Peels", href: "/cosmetic-grade-pca-skin-peels" },
  { label: "OxyGeneo Facials", href: "/oxygeneo-3-1-super-facial" },
  { label: "RF Skin Tightening", href: "#" },
  { label: "Celluma LED Light Therapy", href: "/celluma-led-light-therapy" },
  { label: "Eyelash Extensions", href: "/eyelash-extensions" },
];

const desktopLinkStyle =
  "text-[var(--color-text-primary)] no-underline text-[16px] font-medium font-[var(--font-body)] whitespace-nowrap";

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
  const { open: openConsultation } = useConsultation();

  const closeMenu = () => setOpen(false);

  return (
    <header
      className="relative z-[50] flex flex-wrap items-center justify-between gap-[16px] pt-[20px] pr-[28px] pb-[20px] pl-[28px] bg-[var(--olive-100)]"
      style={{ borderBottom: "1px solid var(--color-border)" }}
    >
      <div className="flex items-center gap-[56px] flex-[1_1_auto] min-w-0">
        <Link href="/" style={{ flexShrink: 0 }}>
          <img
            src="/assets/logo.png"
            alt="Smooth Skin Niagara"
            className="h-[64px] block"
          />
        </Link>
        <nav
          className={cn(
            "hidden lg:flex",
            "items-center gap-[32px] text-[16px] min-w-0",
          )}
        >
          <NavDropdown label="Services" items={serviceItems} />
          <Link href="/about-us" className={desktopLinkStyle}>
            About
          </Link>
        </nav>
      </div>

      <div className={cn("hidden lg:flex", "items-center gap-[28px] shrink-0")}>
        <PhoneCallout />
        <Button variant="primary" size="sm" onClick={openConsultation}>
          I want a Free Consultation
        </Button>
        {isLoaded && userId && <UserButton />}
      </div>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "flex lg:hidden",
          "items-center justify-center w-[44px] h-[44px] rounded-[12px] bg-[var(--olive-100)] text-[var(--color-text-primary)] cursor-pointer",
        )}
        style={{ border: "1px solid var(--color-border)" }}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div
          onClick={(e) => {
            if (e.currentTarget === e.target) {
              setOpen(false);
            }
          }}
          className={cn(
            "flex lg:hidden",
            "fixed z-[40] bg-[var(--olive-100)] pt-[92px] pr-[28px] pb-[28px] pl-[28px] flex-col",
          )}
          style={{ inset: 0, overflowY: "auto" }}
        >
          <nav className="flex flex-col">
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
            <Link href="/about-us" onClick={closeMenu} style={mobileLinkStyle}>
              About
            </Link>
          </nav>

          <div className="mt-[auto] pt-[32px] flex flex-col gap-[16px]">
            <PhoneCallout />
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                closeMenu();
                openConsultation();
              }}
              style={{ width: "100%", justifyContent: "center" }}
            >
              I want a Free Consultation
            </Button>
            {isLoaded && userId && <UserButton />}
          </div>
        </div>
      )}
    </header>
  );
}
