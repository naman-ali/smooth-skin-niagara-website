"use client";

import React, { useMemo, useState } from "react";
import Header from "@/components/Header";

interface AfterCareTreatment {
  id: string;
  label: string;
  shortName: string;
  content: React.ReactNode;
}

const treatments: AfterCareTreatment[] = [
  {
    id: "laser-hair-removal",
    label: "Laser Hair Removal",
    shortName: "Soprano ICE Platinum",
    content: (
      <>
        <h2 className="mb-[12px] font-[var(--font-display)] text-[30px] font-normal leading-[1.2] text-[var(--color-text-primary)] md:text-[36px]">
          Tips to Remember Laser Hair Removal
        </h2>
        <h3 className="mb-[28px] font-[var(--font-body)] text-[16px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
          Soprano ICE Platinum
        </h3>

        <ul className="space-y-[16px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
          <li className="pl-[6px]">
            Each client&apos;s results will vary due to their age, genetics,
            family background, skin type and hormonal imbalances. Please keep
            these expectations and guidelines in mind, as your results will
            depend on them!
          </li>
          <li className="pl-[6px]">
            Results may vary due to skin type, hair colour, thickness, hormones
            and even genetics. Laser hair removal needs patience, commitment and
            time.
          </li>
          <li className="pl-[6px]">
            Depending on the hair type, skin type and body regions, 6 to 8, even
            12 treatments may be needed, especially on the most stubborn of
            hair.
          </li>
          <li className="pl-[6px]">
            Stubborn hairs are fine, thin, peach fuzz-like around the face,
            labia area and new hairs that are growing after final treatments in
            all treatment regions.
          </li>
          <li className="pl-[6px]">
            Laser hair removal is 75% to 85% reduction. Laser will not remove
            blond, gray, thin or peach fuzz-looking hair.
          </li>
          <li className="pl-[6px]">
            The Laser will only destroy thick, dark, coarse hair that is in the
            first stage of hair growth. When attached to the blood supply, the
            laser will travel down the hair shaft and kill the blood supply with
            high-intensity heat. The hairs that are not in this phase (50% of
            them are NOT in the first three sessions) will need to wait and be
            treated at the next session. This is why it&apos;s very important to
            commit yourself to at least 8 sessions for true results. After your
            8<sup>th</sup> treatment, we can discuss electrolysis to get rid of
            stubborn hair if need be.
          </li>
          <li className="pl-[6px]">
            DO NOT wax, sugar, pluck or epilate during your laser treatments
            unless instructed by Ashley. The end goal at session 6 is to train
            the hair to be attached to the blood supply. HOWEVER, you may ONLY
            shave TWO to THREE weeks after your laser treatment.
          </li>
          <li className="pl-[6px]">
            Throughout your sessions, you will notice NEW growth. This is NOT
            the hair coming back! These are new follicles forming and creating
            new hair that we cannot control. FYI you may see an influx of new
            hair at session three. Don&apos;t panic; this is normal as the
            follicles that were forming during your first session are now
            starting to sprout. This is a good thing, as we now have new hair
            attached to the blood supply to destroy!
          </li>
          <li className="pl-[6px]">
            Please keep in mind certain factors will generate hair growth. Such
            as; hypo/hyper thyroid, medications, stress, change in diet, weight
            gain/loss, coming off and on birth control, hormonal imbalance, PCOS
            (Polycystic Ovary Syndrome), pregnancy, miscarriages, breast feeding
            Etc.
          </li>
          <li className="pl-[6px]">
            Facial laser hair removal is the hardest to treat due to hormonal
            imbalances and fast growth rate. (as stated above) These areas
            include: upper lip, chin and neck area. Electrolysis is an Ideal
            treatment for facial hair removal after laser treatments are
            complete. Approximately 6-8 laser treatments.
          </li>
          <li className="pl-[6px]">
            Treatments are recommended 6-12 weeks apart. The more hair you have,
            the better the result! However, if you let treatment lapse for too
            long, the pattern of hair growth is disrupted and may result in
            additional treatments.
          </li>
          <li className="pl-[6px]">
            Reminders are sent the day before your treatment. If I do not
            receive a response by 8:00 pm the same day, I will assume you do not
            wish to continue treatment and your appointment time will be given
            to another client. If you have bought a package, your session will
            be lost.
          </li>
          <li className="pl-[6px]">
            Please avoid direct sun 24-48hrs before and after laser treatment.
          </li>
          <li className="pl-[6px]">
            Please avoid high-intensity heat (hot steam showers, saunas/steam
            rooms) for 24-48 hours after your laser hair removal treatment. The
            treatment may cause mild inflammation. Keeping the skin cool with
            Alo and an ice pack is ideal. 20 mins at a time.
          </li>
          <li className="pl-[6px]">
            Always avoid oils, lotions, and makeup on desired treatments before
            treatment.
          </li>
          <li className="pl-[6px]">
            We ask that the desired area be exfoliated and closely shaved the
            day before treatment. The closer the shave, the better and easier
            the pain-free treatment.
          </li>
          <li className="pl-[6px]">
            Please do not hesitate to contact Ashley with any questions, issues
            or concerns.
          </li>
          <li className="pl-[6px]">
            Regarding no-shows and short cancellations: Any no-show or short
            cancellations will result in lost treatment time. If you have
            purchased a package, the amount for that appointment will be lost.
            Or, a cancellation charge will apply. Thank you for respecting our
            time and the time of others.
          </li>
        </ul>

        <div className="mt-[36px] rounded-[16px] bg-[var(--olive-100)] px-[24px] py-[22px]">
          <p className="m-0 font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
            Thank you for taking the time to read and understand the above
            guidelines. If you have any questions or concerns, please contact
            Ashley at{" "}
            <a
              href="tel:+19059207229"
              className="font-semibold text-[var(--color-brand-primary)] no-underline"
            >
              905 920 7229
            </a>
            .
          </p>
        </div>
      </>
    ),
  },
  {
    id: "pca-skin-peels",
    label: "PCA SKIN Peels",
    shortName: "PCA SKIN Peels",
    content: (
      <p className="font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        After-care guide coming soon. Please contact Ashley at{" "}
        <a
          href="tel:+19059207229"
          className="font-semibold text-[var(--color-brand-primary)] no-underline"
        >
          905 920 7229
        </a>{" "}
        for personalized instructions.
      </p>
    ),
  },
  {
    id: "microneedling",
    label: "Microneedling CIT",
    shortName: "eDermaStamp Microneedling",
    content: (
      <p className="font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        After-care guide coming soon. Please contact Ashley at{" "}
        <a
          href="tel:+19059207229"
          className="font-semibold text-[var(--color-brand-primary)] no-underline"
        >
          905 920 7229
        </a>{" "}
        for personalized instructions.
      </p>
    ),
  },
  {
    id: "celluma-led",
    label: "Celluma LED Light Therapy",
    shortName: "Celluma LED",
    content: (
      <p className="font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        After-care guide coming soon. Please contact Ashley at{" "}
        <a
          href="tel:+19059207229"
          className="font-semibold text-[var(--color-brand-primary)] no-underline"
        >
          905 920 7229
        </a>{" "}
        for personalized instructions.
      </p>
    ),
  },
  {
    id: "oxygeneo",
    label: "OxyGeneo 3-1 Super Facial",
    shortName: "OxyGeneo 3-1 Facial",
    content: (
      <p className="font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        After-care guide coming soon. Please contact Ashley at{" "}
        <a
          href="tel:+19059207229"
          className="font-semibold text-[var(--color-brand-primary)] no-underline"
        >
          905 920 7229
        </a>{" "}
        for personalized instructions.
      </p>
    ),
  },
  {
    id: "eyelash-extensions",
    label: "Eyelash Extensions",
    shortName: "Eyelash Extensions",
    content: (
      <p className="font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        After-care guide coming soon. Please contact Ashley at{" "}
        <a
          href="tel:+19059207229"
          className="font-semibold text-[var(--color-brand-primary)] no-underline"
        >
          905 920 7229
        </a>{" "}
        for personalized instructions.
      </p>
    ),
  },
];

const DEFAULT_TREATMENT_ID = treatments[0].id;

export default function AfterCaresPage() {
  const [selectedId, setSelectedId] = useState<string>(DEFAULT_TREATMENT_ID);

  const selectedTreatment = useMemo(
    () => treatments.find((t) => t.id === selectedId) ?? treatments[0],
    [selectedId],
  );

  const handleSelect = (id: string) => {
    setSelectedId(id);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-olive-50">
        <section className="px-3 py-[64px] md:px-10 lg:py-[90px]">
          <div className="mx-auto max-w-[860px]">
            <div className="mb-[30px] flex items-center gap-[12px]">
              <span className="h-[1px] w-[40px] bg-[var(--color-border-strong)]" />
              <span className="font-[var(--font-body)] text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--color-brand-primary)]">
                Client Care
              </span>
            </div>

            <h1 className="mb-[14px] font-[var(--font-display)] text-[40px] font-normal leading-[1.1] text-[var(--color-text-primary)] md:text-[56px]">
              After-Care Instructions
            </h1>
            <p className="mb-[40px] max-w-[620px] font-[var(--font-body)] text-[17px] leading-[1.6] text-[var(--color-text-secondary)]">
              Select your treatment below to view the after-care guidelines and
              tips tailored to your service.
            </p>

            <div
              className="mb-[40px] grid grid-cols-1 gap-[12px] rounded-[20px] border bg-[#fff] p-[16px] md:grid-cols-2 lg:grid-cols-3"
              style={{ borderColor: "var(--color-border)" }}
              role="tablist"
              aria-label="Select a treatment"
            >
              {treatments.map((treatment) => {
                const isSelected = treatment.id === selectedId;
                return (
                  <button
                    key={treatment.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(treatment.id)}
                    className={`
                      rounded-[12px] px-[18px] py-[16px] text-left transition-all duration-200
                      font-[var(--font-body)] text-[15px] font-semibold leading-[1.4]
                      focus:outline-none focus:ring-2 focus:ring-[var(--color-ring)]
                      ${
                        isSelected
                          ? "bg-[var(--color-brand-primary)] text-white shadow-md"
                          : "bg-[var(--olive-50)] text-[var(--color-text-primary)] hover:bg-[var(--olive-100)]"
                      }
                    `}
                  >
                    <span className="block text-[12px] font-medium uppercase tracking-[0.1em] opacity-80">
                      {treatment.label}
                    </span>
                    <span className="block mt-[2px]">
                      {treatment.shortName}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              className="rounded-[20px] border bg-[#fff] px-[24px] py-[30px] md:px-[36px] md:py-[42px]"
              style={{ borderColor: "var(--color-border)" }}
            >
              {selectedTreatment.content}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
