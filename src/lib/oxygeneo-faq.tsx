"use client";

import { Calendar, Heart, Shield } from "lucide-react";
import React from "react";

export const oxygeneoFaqCategories = [
  {
    id: "treatment",
    label: "TREATMENT & RESULTS",
    heading: "Treatment & Results",
    description:
      "What OxyGeneo is, how it works, and what to expect from your facial.",
    icon: ({ color = "currentColor" }: { color?: string }) => (
      <Heart color={color} size={20} strokeWidth={1.5} />
    ),
    questions: [
      {
        q: "What is an OxyGeneo facial?",
        a: (
          <>
            <p>
              OxyGeneo is a professional facial treatment that combines
              exfoliation, natural skin oxygenation and ingredient infusion
              within one treatment.
            </p>
            <p style={{ marginTop: 12 }}>
              The treatment can also be enhanced with technologies such as
              TriPollar radiofrequency, ultrasound infusion and Celluma LED light
              therapy depending on the package selected.
            </p>
          </>
        ),
      },
      {
        q: "What does the OxyGeneo 3-in-1 treatment do?",
        a: (
          <>
            <p>The treatment combines three main steps:</p>
            <ul
              style={{
                margin: "12px 0 0",
                paddingLeft: 20,
                listStyle: "disc",
                color: "var(--color-text-secondary)",
              }}
            >
              <li>
                <strong>Exfoliation</strong> helps remove dead surface skin
                cells.
              </li>
              <li>
                <strong>Oxygenation</strong> occurs through a physiological
                response triggered by carbon dioxide bubbles created during
                treatment.
              </li>
              <li>
                <strong>Infusion</strong> exposes the skin to professional
                ingredients selected according to your treatment goals.
              </li>
            </ul>
          </>
        ),
      },
      {
        q: "What is the Bohr Effect?",
        a: (
          <>
            <p>
              During the OxyGeneo treatment, the interaction between the OxyPod
              and treatment gel creates carbon dioxide at the skin&apos;s surface.
            </p>
            <p style={{ marginTop: 12 }}>
              The body responds by increasing oxygen-rich blood flow to the area.
              This physiological response is known as the <strong>Bohr Effect</strong>.
            </p>
            <p style={{ marginTop: 12 }}>
              OxyGeneo does not inject or pump oxygen into the skin.
            </p>
          </>
        ),
      },
      {
        q: "How soon will I see results?",
        a: (
          <>
            <p>
              Many clients choose OxyGeneo because skin can look and feel
              refreshed shortly after treatment.
            </p>
            <p style={{ marginTop: 12 }}>
              Longer-term changes depend on your skin, concerns, skincare
              routine and treatment frequency.
            </p>
            <p style={{ marginTop: 12 }}>Individual results vary.</p>
          </>
        ),
      },
      {
        q: "How long do results last?",
        a: (
          <>
            <p>
              There is no single duration that applies to everyone.
            </p>
            <p style={{ marginTop: 12 }}>
              Skin type, lifestyle, home skincare and how often treatments are
              performed all influence how long your skin maintains its
              post-treatment appearance.
            </p>
          </>
        ),
      },
      {
        q: "How often should I have an OxyGeneo facial?",
        a: (
          <>
            <p>
              Treatment frequency depends on your skin and goals.
            </p>
            <p style={{ marginTop: 12 }}>
              Some clients book OxyGeneo periodically for maintenance or before
              events, while others choose a more consistent facial schedule.
            </p>
            <p style={{ marginTop: 12 }}>
              We&apos;ll recommend an appropriate frequency for your skin.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "comfort",
    label: "COMFORT & PREPARATION",
    heading: "Comfort & Preparation",
    description:
      "What to expect during and after your OxyGeneo facial.",
    icon: ({ color = "currentColor" }: { color?: string }) => (
      <Calendar color={color} size={20} strokeWidth={1.5} />
    ),
    questions: [
      {
        q: "Does OxyGeneo hurt?",
        a: (
          <>
            <p>
              OxyGeneo is designed to be a comfortable facial experience.
            </p>
            <p style={{ marginTop: 12 }}>
              You may feel exfoliation, massage and warmth depending on the
              treatment technologies being used, but the treatment should not
              feel aggressive.
            </p>
          </>
        ),
      },
      {
        q: "Is there downtime?",
        a: (
          <>
            <p>
              The core OxyGeneo facial generally requires no downtime.
            </p>
            <p style={{ marginTop: 12 }}>
              Most clients can return to their usual activities following
              treatment.
            </p>
            <p style={{ marginTop: 12 }}>
              Temporary mild redness may occur depending on skin sensitivity and
              the technologies included in your appointment.
            </p>
          </>
        ),
      },
      {
        q: "Can I have OxyGeneo before an event?",
        a: (
          <>
            <p>
              OxyGeneo is commonly chosen before events because it is designed
              to leave skin looking refreshed without significant downtime.
            </p>
            <p style={{ marginTop: 12 }}>
              However, if it is your first treatment or you have particularly
              reactive skin, scheduling it several days before an important
              event can be sensible.
            </p>
          </>
        ),
      },
      {
        q: "Do I need to prepare my skin?",
        a: (
          <>
            <p>
              Arrive with your skin in its normal condition and let us know
              about:
            </p>
            <ul
              style={{
                margin: "12px 0 0",
                paddingLeft: 20,
                listStyle: "disc",
                color: "var(--color-text-secondary)",
              }}
            >
              <li>prescription skincare</li>
              <li>active irritation</li>
              <li>recent procedures</li>
              <li>sunburn</li>
              <li>allergies</li>
              <li>medications</li>
              <li>relevant medical conditions</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              We&apos;ll advise you if anything needs to be adjusted before treatment.
            </p>
          </>
        ),
      },
      {
        q: "Can I wear makeup afterward?",
        a: (
          <>
            <p>
              Because OxyGeneo is non-ablative and does not involve aggressive
              resurfacing, makeup can often be resumed relatively quickly.
            </p>
            <p style={{ marginTop: 12 }}>
              Follow the specific aftercare guidance given after your treatment,
              particularly if additional technologies were used.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "options",
    label: "OPTIONS & SUITABILITY",
    heading: "Options & Suitability",
    description:
      "Choosing an OxyGeneo treatment, OxyPod and add-ons based on your skin.",
    icon: ({ color = "currentColor" }: { color?: string }) => (
      <Shield color={color} size={20} strokeWidth={1.5} />
    ),
    questions: [
      {
        q: "Which OxyGeneo treatment should I choose?",
        a: (
          <>
            <p>
              You do not need to decide entirely on your own. The three options
              provide different levels of treatment:
            </p>
            <ul
              style={{
                margin: "12px 0 0",
                paddingLeft: 20,
                listStyle: "disc",
                color: "var(--color-text-secondary)",
              }}
            >
              <li>
                <strong>Express — $185 + HST</strong>
                <br />
                The core OxyGeneo facial.
              </li>
              <li>
                <strong>Deluxe — $225 + HST</strong>
                <br />
                Adds technologies such as RF Eye Lift and ultrasound infusion.
              </li>
              <li>
                <strong>Signature — $285 + HST</strong>
                <br />
                The most comprehensive treatment, including RF, ultrasound and
                Celluma LED therapy.
              </li>
            </ul>
            <p style={{ marginTop: 12 }}>
              We&apos;ll help you choose based on your skin, goals, schedule and
              desired treatment experience.
            </p>
          </>
        ),
      },
      {
        q: "Which OxyPod is best for my skin?",
        a: (
          <>
            <p>That depends on your skin concerns.</p>
            <p style={{ marginTop: 12 }}>Current options include:</p>
            <ul
              style={{
                margin: "12px 0 0",
                paddingLeft: 20,
                listStyle: "disc",
                color: "var(--color-text-secondary)",
              }}
            >
              <li>Detox</li>
              <li>Hydrate</li>
              <li>Illuminate</li>
              <li>Balance</li>
              <li>Revive</li>
            </ul>
            <p style={{ marginTop: 12 }}>
              Your OxyPod can be selected during your treatment consultation
              rather than requiring you to choose before arriving.
            </p>
          </>
        ),
      },
      {
        q: "Is OxyGeneo suitable for sensitive skin?",
        a: (
          <>
            <p>
              OxyGeneo treatments can be customized for different skin needs,
              including more sensitive skin.
            </p>
            <p style={{ marginTop: 12 }}>
              However, suitability depends on your current skin condition and
              health history. Let us know about active irritation, allergies,
              medications and previous reactions before treatment.
            </p>
          </>
        ),
      },
      {
        q: "Can I add Celluma LED therapy?",
        a: (
          <>
            <p>Yes.</p>
            <p style={{ marginTop: 12 }}>
              Celluma can be added to selected treatments when appropriate.
              Current add-on pricing:
            </p>
            <p style={{ marginTop: 12 }}>
              <strong>30 Minutes — $30</strong>
            </p>
            <p style={{ marginTop: 12 }}>
              The Signature OxyGeneo already includes 30 minutes of Celluma LED
              light therapy.
            </p>
          </>
        ),
      },
      {
        q: "Can OxyGeneo be used on areas other than the face?",
        a: (
          <>
            <p>
              Selected areas such as the neck, chest and back may also be
              treated.
            </p>
            <p style={{ marginTop: 12 }}>
              Current pricing to extend an OxyGeneo treatment is:
            </p>
            <p style={{ marginTop: 12 }}>
              <strong>$50 per additional area</strong>
            </p>
            <p style={{ marginTop: 12 }}>
              Suitability depends on the treatment area and concern.
            </p>
          </>
        ),
      },
      {
        q: "What should I tell you before treatment?",
        a: (
          <>
            <p>Please tell us about:</p>
            <ul
              style={{
                margin: "12px 0 0",
                paddingLeft: 20,
                listStyle: "disc",
                color: "var(--color-text-secondary)",
              }}
            >
              <li>allergies</li>
              <li>medications</li>
              <li>pregnancy</li>
              <li>prescription skincare</li>
              <li>recent cosmetic procedures</li>
              <li>active skin conditions</li>
              <li>infections</li>
              <li>recent sunburn</li>
              <li>anything else that may affect your skin or treatment suitability</li>
            </ul>
          </>
        ),
      },
    ],
  },
];
