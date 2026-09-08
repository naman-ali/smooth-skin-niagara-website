"use client";

import {
  ArrowRight,
  Award,
  Heart,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  User,
} from "lucide-react";
import { HomeTreatmentDiscovery } from "./HomeTreatmentDiscovery";
import Link from "next/link";
import * as React from "react";
import Header from "@/components/Header";
import { AshleySection } from "@/components/AshleySection";
import { CtaSection } from "@/components/CtaSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import * as ButtonModule from "@/components/design-system/core/Button";
import type { ButtonProps } from "@/components/design-system/core/Button";
import * as GoogleReviewsModule from "@/components/design-system/trust/GoogleReviews";
import type { GoogleReviewsProps } from "@/components/design-system/trust/GoogleReviews";
import { cn } from "@/lib/utils";


const Button = (ButtonModule as unknown as { Button: React.FC<ButtonProps> })
  .Button;
const GoogleReviews = (
  GoogleReviewsModule as unknown as {
    GoogleReviews: React.FC<GoogleReviewsProps>;
  }
).GoogleReviews;

const containerMax = "max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto";
const displayHeadingStyle = "font-[var(--font-display)] font-normal text-[var(--color-text-primary)]";
const bodyTextStyle = "font-[var(--font-body)] text-[var(--color-text-secondary)]";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="font-[var(--font-body)] text-[12px] tracking-[0.16em] uppercase text-[var(--color-brand-primary)] font-bold"
    >
      {children}
    </span>
  );
}

function HomeHero() {
  const trustPoints = [
    {
      icon: Award,
      title: "10+ Years Experience",
      sub: "Trusted care in aesthetic skincare",
    },
    {
      icon: Sparkles,
      title: "Advanced Professional Technology",
      sub: "Proven systems. Real results.",
    },
    {
      icon: User,
      title: "Personalized Treatment Plans",
      sub: "Tailored to your skin and goals",
    },
    {
      icon: MapPin,
      title: "Niagara Falls, Ontario",
      sub: "Your local skincare destination",
    },
  ];

  return (
    <section
      
      className={cn("relative min-h-[760px] overflow-hidden lg:min-h-[840px]", "bg-[url('/assets/home-hero-2.jpg')] bg-cover")} style={{ backgroundPosition: "70% center" }}
    >
      <div
        
        className={cn("pointer-events-none absolute bottom-44 left-6 z-20 hidden lg:block", "font-['Brush_Script_MT',_'Segoe_Script',_cursive] text-[28px] text-[var(--olive-600)] leading-[1.2] opacity-[0.85]")} style={{ transform: "rotate(-4deg)" }}
      >
        More confident.
        <br />
        More you.
      </div>

      <div
        
        className={cn("relative z-10 flex min-h-[760px] flex-col px-6 lg:min-h-[840px] lg:px-12", "pt-[60px] pb-[40px]")}
      >
        <div
          
          className={cn("flex flex-1 items-center justify-center", "pb-[120px]")}
        >
          <div
            
            className={cn("w-full max-w-[720px] text-center lg:-translate-x-[8%]", "max-w-[720px]")}
          >
            <div
              className="flex flex-col items-center gap-[12px] mb-[28px]"
            >
              <Eyebrow>SMOOTH SKIN NIAGARA</Eyebrow>
              <span
                className="w-[64px] h-[1px] bg-[var(--olive-600)] opacity-[0.4]"
              />
            </div>

            <h1
              
              className={cn("text-[46px] leading-[1.02] md:text-[62px] lg:text-[68px]", "font-[var(--font-display)] font-normal text-[var(--color-text-primary)] mt-0 mr-0 mb-[28px] ml-0")}
            >
              Feel Good in Your Skin.
              <br />
              <span
                
                className={cn("italic", "font-[var(--font-display)] text-[var(--olive-600)]")}
              >
                At Every Stage.
              </span>
            </h1>

            <p
              
              className={cn("mx-auto text-[17px] leading-relaxed lg:text-[19px]", "font-[var(--font-body)] text-[var(--color-text-secondary)] mt-0 mr-0 mb-[36px] ml-0 max-w-[620px]")}
            >
              Advanced skincare, laser and beauty treatments thoughtfully
              selected around your skin, your goals and the way you want to
              feel.
            </p>

            <div
              
              className={cn("mx-auto flex flex-col items-center gap-3 lg:flex-row lg:justify-center", "mb-[28px]")}
            >
              <Link href="#services" style={{ textDecoration: "none" }}>
                <Button
                  variant="primary"
                  icon={<ArrowRight size={18} />}
                  style={{
                    width: "min(100%, 360px)",
                    height: 60,
                    background: "var(--olive-600)",
                    color: "#fff",
                    borderColor: "var(--olive-600)",
                  }}
                >
                  Find Your Treatment
                </Button>
              </Link>
              <Link
                href="/laser-hair-removal"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="secondary"
                  style={{
                    width: "min(100%, 360px)",
                    height: 54,
                    background: "rgba(251, 250, 247, 0.65)",
                    color: "var(--olive-700)",
                    borderColor: "var(--olive-600)",
                    borderWidth: 1,
                  }}
                >
                  Book a Free Consultation
                </Button>
              </Link>
            </div>

            <div className="flex justify-center">
              <GoogleReviews rating="5.0" count="61+" />
            </div>
          </div>
        </div>

        <div  className={cn("relative z-10 w-full", "mb-[16px]")}>
          <p
            
            className={cn("text-center text-[11px] font-semibold uppercase tracking-[0.2em]", "font-[var(--font-body)] text-[var(--olive-700)] opacity-[0.85]")}
          >
            SKIN · CONFIDENCE · CARE
          </p>
        </div>

        <div
          
          className={cn("w-full border border-[rgba(191,174,151,0.35)] bg-[rgba(251,250,247,0.86)]", "rounded-[14px]")}
        >
          <div className="grid grid-cols-2 gap-y-6 divide-y divide-olive-300 py-6 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-y-0">
            {trustPoints.map((point, i) => (
              <div
                key={point.title}
                className={`flex flex-col items-center justify-center px-4 text-center lg:px-6 ${
                  i === trustPoints.length - 1 ? "lg:border-r-0" : ""
                }`}
              >
                <point.icon
                  size={22}
                  strokeWidth={1.5}
                  color="var(--olive-600)"
                  className="mb-[10px]"
                />
                <h4
                  className="font-[var(--font-body)] text-[13px] font-bold text-[var(--color-text-primary)] mt-0 mr-0 mb-[4px] ml-0 leading-[1.25]"
                >
                  {point.title}
                </h4>
                <p
                  className="font-[var(--font-body)] text-[12px] text-[var(--color-text-secondary)] m-0 leading-[1.4]"
                >
                  {point.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeServices() {
  return <HomeTreatmentDiscovery />;
}

function HomeWhy() {
  return (
    <section id="why"  className={cn("bg-olive-50", "pt-[90px] pr-[53px] pb-[90px] pl-[53px]")}>
      <div className="max-w-[var(--container-max)] mt-0 mr-auto mb-0 ml-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>WHY SMOOTH SKIN NIAGARA</Eyebrow>
            <h2
              
              className={cn("text-[36px] leading-[1.1] lg:text-[44px]", "font-[var(--font-display)] font-normal text-[var(--color-text-primary)] mt-[22px] mr-0 mb-[20px] ml-0")}
            >
              A Personal Approach to Aesthetic Care
            </h2>
            <p
              
              className={cn("mb-8 text-[17px] leading-relaxed", "font-[var(--font-body)] text-[var(--color-text-secondary)]")}
            >
              Every client is assessed individually. Ashley selects the right
              treatment, strength and plan for your skin and goals — without
              one-size-fits-all promises.
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                {
                  icon: User,
                  title: "One-on-One Care",
                  text: "Ashley performs treatments personally and takes time to understand your goals.",
                },
                {
                  icon: Shield,
                  title: "Thoughtful Selection",
                  text: "Treatments are chosen based on your skin, health and desired outcome.",
                },
                {
                  icon: Heart,
                  title: "Comfort First",
                  text: "A calm, professional environment where you can ask questions and feel at ease.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <item.icon
                    size={24}
                    strokeWidth={1.5}
                    color="var(--color-brand-primary)"
                    className="mb-[12px]"
                  />
                  <h4
                    className="font-[var(--font-display)] font-normal text-[var(--color-text-primary)] text-[20px] mt-0 mr-0 mb-[8px] ml-0"
                  >
                    {item.title}
                  </h4>
                  <p
                    
                    className={cn("text-[14px] leading-relaxed", "font-[var(--font-body)] text-[var(--color-text-secondary)]")}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl border border-[var(--color-border)] bg-olive-100 p-10">
            <img
              src="/assets/ashley-section-bg-4.png"
              alt="Smooth Skin Niagara treatment environment"
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-2xl object-cover opacity-40"
            />
            <div className="relative z-10">
              <h3
                
                className={cn("mb-4 text-[26px]", "font-[var(--font-display)] font-normal text-[var(--color-text-primary)]")}
              >
                Ready to Get Started?
              </h3>
              <p
                
                className={cn("mb-6 text-[16px] leading-relaxed", "font-[var(--font-body)] text-[var(--color-text-secondary)]")}
              >
                Call or text the studio to ask questions or book your first
                appointment.
              </p>
              <a
                href="tel:+19059207229"
                className="inline-flex items-center gap-[10px] font-[var(--font-body)] text-[18px] font-semibold text-[var(--color-text-primary)] no-underline"
              >
                <Phone size={20} color="var(--color-brand-primary)" />
                (905) 920-7229
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <HomeServices />
        <AshleySection />
        <ReviewsSection />
        <HomeWhy />
        <CtaSection />
      </main>
    </>
  );
}
