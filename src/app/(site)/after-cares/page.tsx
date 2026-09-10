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

        <ul className="list-disc pl-[20px] space-y-[16px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
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
    id: "eyelash-extensions",
    label: "Eyelash Extensions",
    shortName: "Eyelash Extensions",
    content: <EyelashExtensionsAftercare />,
  },
  {
    id: "lash-lift-tint",
    label: "Lash Lift & Tint",
    shortName: "Lash Lift & Tint",
    content: <LashLiftTintAftercare />,
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
];

const DEFAULT_TREATMENT_ID = treatments[0].id;

function EyelashExtensionsAftercare() {
  return (
    <>
      <h2 className="mb-[12px] font-[var(--font-display)] text-[30px] font-normal leading-[1.2] text-[var(--color-text-primary)] md:text-[36px]">
        Eyelash Aftercare
      </h2>
      <p className="mb-[24px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Follow the aftercare instructions for your treatment to help protect
        your lashes and keep your results looking their best.
      </p>

      <h3 className="mb-[16px] font-[var(--font-display)] text-[24px] font-normal leading-[1.3] text-[var(--color-text-primary)]">
        Eyelash Extensions Aftercare
      </h3>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Your natural lashes continuously grow and shed, so some extension loss
        is completely normal.
      </p>
      <p className="mb-[20px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        For the best results, maintenance fills are generally recommended every{" "}
        <strong>2–3 weeks</strong>.
      </p>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        First 24 Hours
      </h4>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        The first 24 hours are especially important while the lash adhesive
        fully cures.
      </p>
      <ul className="list-disc pl-[20px] mb-[24px] space-y-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <li className="pl-[6px]">
          Keep your lashes completely dry for the first{" "}
          <strong>24 hours</strong>.
        </li>
        <li className="pl-[6px]">
          Avoid water, steam, high humidity, saunas, and excessive moisture.
        </li>
        <li className="pl-[6px]">
          Do not wash or soak the lashes during this time.
        </li>
      </ul>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        Daily Care
      </h4>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        After the first 24 hours:
      </p>
      <ul className="list-disc pl-[20px] mb-[24px] space-y-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <li className="pl-[6px]">
          Gently clean your lashes every day using an{" "}
          <strong>oil-free foaming cleanser</strong>.
        </li>
        <li className="pl-[6px]">
          Brush your extensions daily with a clean lash spoolie.
        </li>
        <li className="pl-[6px]">
          Avoid oil-based products around the eyes, as oils can weaken the
          adhesive.
        </li>
        <li className="pl-[6px]">Do not pick, pull, or rub your extensions.</li>
        <li className="pl-[6px]">
          Try not to sleep directly on your face or press your lashes into your
          pillow.
        </li>
      </ul>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        Natural Lash Shedding
      </h4>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        It is normal to lose extensions as your natural lashes shed.
      </p>
      <p className="mb-[24px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Lash growth happens in cycles, so your lashes may look fuller some weeks
        than others. You may also notice more shedding during certain times of
        the year.
      </p>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        Lash Fills
      </h4>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        For the best appearance, book your fill within <strong>3 weeks</strong>.
      </p>
      <p className="mb-[24px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Appointments after 3 weeks may require additional work and could be
        charged differently or require a new full set.
      </p>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        Problems or Reactions
      </h4>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        If you experience any problems with your extensions, please contact
        Ashley as soon as possible, preferably within <strong>3 days</strong> of
        your appointment.
      </p>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        If you experience an allergic reaction, contact Ashley immediately so
        the extensions can be professionally removed.
      </p>
      <p className="mb-[24px] font-[var(--font-body)] text-[16px] font-semibold leading-[1.7] text-[var(--color-text-primary)]">
        Do not attempt to remove eyelash extensions yourself, as this may damage
        your natural lashes.
      </p>

      <h3 className="mb-[16px] font-[var(--font-display)] text-[24px] font-normal leading-[1.3] text-[var(--color-text-primary)]">
        Questions or Concerns
      </h3>
      <p className="mb-[24px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        If you have any questions or concerns about your lashes, please contact
        Ashley.
      </p>
      <p className="mb-[32px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <strong>Phone/Text:</strong>{" "}
        <a
          href="tel:+19059207229"
          className="font-semibold text-[var(--color-brand-primary)] no-underline"
        >
          (905) 920-7229
        </a>
      </p>

      <h3 className="mb-[16px] font-[var(--font-display)] text-[24px] font-normal leading-[1.3] text-[var(--color-text-primary)]">
        Appointment &amp; Cancellation Policy
      </h3>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Please arrive on time for your appointment.
      </p>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Arriving late may reduce your treatment time, but the full appointment
        price will still apply.
      </p>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        For cancellations within <strong>48 hours</strong> or missed
        appointments:
      </p>
      <ul className="list-disc pl-[20px] mb-[12px] space-y-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <li className="pl-[6px]">
          After the first occurrence, a credit card may be required to book
          another appointment.
        </li>
        <li className="pl-[6px]">
          If a second late cancellation or no-show occurs, the card may be
          charged the full cost of the appointment.
        </li>
      </ul>
      <p className="mb-[32px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        This policy helps cover appointment times that cannot be filled at short
        notice.
      </p>

      <h3 className="mb-[16px] font-[var(--font-display)] text-[24px] font-normal leading-[1.3] text-[var(--color-text-primary)]">
        Loyalty Program
      </h3>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Love your lashes?
      </p>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Refer someone using Ashley&apos;s referral card. If they book and attend
        their appointment, you can receive{" "}
        <strong>$5 off your next fill</strong>.
      </p>
      <p className="font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        You can also leave a review on the Custom Lash Facebook page to receive
        another <strong>$5 off</strong>.
      </p>
    </>
  );
}

function LashLiftTintAftercare() {
  return (
    <>
      <h2 className="mb-[12px] font-[var(--font-display)] text-[30px] font-normal leading-[1.2] text-[var(--color-text-primary)] md:text-[36px]">
        Lash Lift &amp; Tint Aftercare
      </h2>
      <p className="mb-[24px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Your lashes may initially look slightly clumped because of the
        conditioning oil applied after your treatment. This oil helps keep the
        natural lashes moisturized after the lifting process.
      </p>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        First 24 Hours
      </h4>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Allow your lash lift to fully set for the first{" "}
        <strong>24 hours</strong>.
      </p>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        During this time:
      </p>
      <ul className="list-disc pl-[20px] mb-[24px] space-y-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <li className="pl-[6px]">Do not wash your lashes.</li>
        <li className="pl-[6px]">Avoid showering or getting the lashes wet.</li>
        <li className="pl-[6px]">Avoid steam and excessive moisture.</li>
        <li className="pl-[6px]">Do not apply mascara.</li>
      </ul>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        Brushing Your Lashes
      </h4>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Use your lash spoolie regularly to keep the lashes separated and
        maintain the lift.
      </p>
      <ul className="list-disc pl-[20px] mb-[24px] space-y-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <li className="pl-[6px]">
          Always brush your lashes <strong>upward</strong>.
        </li>
        <li className="pl-[6px]">Avoid brushing them downward.</li>
        <li className="pl-[6px]">Brush gently to maintain the curl.</li>
      </ul>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        Keep Your Lashes Conditioned
      </h4>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Keeping your lashes moisturized is an important part of your aftercare.
      </p>
      <ul className="list-disc pl-[20px] mb-[12px] space-y-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <li className="pl-[6px]">
          Apply the provided conditioning oil in the evenings for at least{" "}
          <strong>2 weeks</strong>.
        </li>
        <li className="pl-[6px]">
          Apply a small amount of oil to your lash spoolie and gently brush
          upward through the lashes.
        </li>
      </ul>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Once your provided oil runs out, the original aftercare guidance
        recommends products such as:
      </p>
      <ul className="list-disc pl-[20px] mb-[12px] space-y-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <li className="pl-[6px]">Vitamin E oil</li>
        <li className="pl-[6px]">Coconut oil</li>
        <li className="pl-[6px]">Baby oil</li>
        <li className="pl-[6px]">Bio-Oil</li>
        <li className="pl-[6px]">Xtreme Lash Growth Serum</li>
      </ul>
      <p className="mb-[24px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        A mixture of castor oil, Vitamin E oil, and coconut oil may also be used
        according to the original aftercare instructions.
      </p>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        Sleeping
      </h4>
      <p className="mb-[24px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Try not to sleep with your face pressed into your pillow, as this can
        affect the direction and shape of the lifted lashes.
      </p>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        How Long Will My Lash Lift Last?
      </h4>
      <p className="font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        With proper aftercare, your lash lift should last approximately{" "}
        <strong>4–8 weeks</strong>.
      </p>
    </>
  );
}

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
