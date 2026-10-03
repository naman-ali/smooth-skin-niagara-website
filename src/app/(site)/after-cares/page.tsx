"use client";

import React, { useMemo, useRef, useState } from "react";
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
    id: "microneedling",
    label: "Microneedling CIT",
    shortName: "eDermaStamp Microneedling",
    content: <MicroneedlingAftercare />,
  },
  {
    id: "celluma-led",
    label: "Celluma LED Light Therapy",
    shortName: "Celluma LED",
    content: <CellumaLedAftercare />,
  },
  {
    id: "oxygeneo",
    label: "OxyGeneo 3-1 Super Facial",
    shortName: "OxyGeneo 3-1 Facial",
    content: <OxyGeneoAftercare />,
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
        You can also leave a review on the{" "}
        <a
          href="https://www.facebook.com/eyelashextensionsniagarafalls/"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-[var(--color-brand-primary)] no-underline"
        >
          Smooth Skin Niagara Facebook page
        </a>{" "}
        to receive another <strong>$5 off</strong>.
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

function MicroneedlingAftercare() {
  return (
    <>
      <h2 className="mb-[12px] font-[var(--font-display)] text-[30px] font-normal leading-[1.2] text-[var(--color-text-primary)] md:text-[36px]">
        Microneedling Aftercare
      </h2>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Microneedling is an extremely safe and effective cosmetic procedure.
        However, as with all treatments, it&rsquo;s essential to take special
        care of your skin before and after the procedure for fast recovery and
        best results.
      </p>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Microneedling is an innovative cosmetic procedure that uses a device
        covered with tiny, shallow needles to cause a
        &ldquo;micro-injury.&rdquo; This prompts the skin to stimulate collagen
        production.
      </p>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        In this way, it promotes smoother, softer, and more youthful-looking
        skin after just 4&ndash;5 treatment sessions. It can be used effectively
        for a number of concerns, including:
      </p>
      <ul className="list-disc pl-[20px] mb-[28px] space-y-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <li className="pl-[6px]">Fine lines and deep wrinkles</li>
        <li className="pl-[6px]">Scars caused by acne or surgery</li>
        <li className="pl-[6px]">Skin pigmentation issues</li>
        <li className="pl-[6px]">
          Skin that has lost its plump, youthful appearance
        </li>
      </ul>

      <h3 className="mb-[16px] font-[var(--font-display)] text-[24px] font-normal leading-[1.3] text-[var(--color-text-primary)]">
        Microneedling Pre-Treatment Instructions
      </h3>
      <p className="mb-[16px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Following the right pre-treatment instructions ensures that your
        treatment will go smoothly and helps minimize side effects.
      </p>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        Pre-Treatment Tips
      </h4>
      <ul className="list-disc pl-[20px] mb-[28px] space-y-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <li className="pl-[6px]">
          Avoid Accutane in the six months prior to beginning your treatment
          sessions.
        </li>
        <li className="pl-[6px]">
          Do not use topical agents that may increase the sensitivity of your
          skin, such as retinoids, exfoliants, topical antibiotics, or acids,
          5&ndash;7 days prior to your treatment.
        </li>
        <li className="pl-[6px]">
          Do not take anti-inflammatory medications such as ibuprofen, Motrin,
          or Advil for at least 3 days prior to your microneedling session.
          These may interfere with the natural inflammatory process that is
          critical for skin rejuvenation.
        </li>
        <li className="pl-[6px]">
          Avoid IPL/laser procedures, unprotected sun exposure, or sunburn for
          at least 2 weeks prior to your procedure.
        </li>
        <li className="pl-[6px]">
          No waxing, depilatory creams, or electrolysis to the area being
          treated for 5&ndash;7 days prior.
        </li>
        <li className="pl-[6px]">
          Do not shave the day of the procedure to avoid skin irritation. If
          there is dense hair present in the treatment area, shave the day
          before you arrive for your appointment.
        </li>
        <li className="pl-[6px]">
          If you&rsquo;re prone to cold sores, take an antiviral agent for 2
          days prior to and the day of the treatment.
        </li>
        <li className="pl-[6px]">
          Avoid blood-thinning agents for one week prior because bruising is a
          common side effect of microneedling.
        </li>
      </ul>

      <h3 className="mb-[16px] font-[var(--font-display)] text-[24px] font-normal leading-[1.3] text-[var(--color-text-primary)]">
        Day of Treatment
      </h3>
      <p className="mb-[16px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Knowing what to expect on the day of your microneedling treatment will
        make this procedure as comfortable and anxiety-free as possible for you.
      </p>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        What to Expect at Your Appointment
      </h4>
      <ul className="list-disc pl-[20px] mb-[28px] space-y-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <li className="pl-[6px]">
          Your skin will be cleaned so it&rsquo;s free of lotion, oil, makeup,
          powder, or sunscreen. If you wish, you can wash your face in the
          office upon arrival.
        </li>
        <li className="pl-[6px]">
          You will be asked to inform your skin care specialist about any
          relevant changes in your medical history and all the medications
          you&rsquo;re taking.
        </li>
        <li className="pl-[6px]">
          Your specialist will ask if there are any cosmetic tattoos in the
          treatment areas.
        </li>
        <li className="pl-[6px]">
          30&ndash;45 minutes prior to your treatment, topical lidocaine will be
          applied to your skin.
        </li>
        <li className="pl-[6px]">
          The microneedling treatment is an in-office procedure that typically
          takes up to 60 minutes to complete.
        </li>
      </ul>

      <h3 className="mb-[16px] font-[var(--font-display)] text-[24px] font-normal leading-[1.3] text-[var(--color-text-primary)]">
        Post-Treatment Instructions
      </h3>
      <p className="mb-[16px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        As with any cosmetic skin treatment, it&rsquo;s important to look after
        your skin following a microneedling procedure for best results.
      </p>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        Post-Treatment Tips
      </h4>
      <ul className="list-disc pl-[20px] mb-[28px] space-y-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <li className="pl-[6px]">
          Do not take any anti-inflammatory medications for one week after the
          procedure.
        </li>
        <li className="pl-[6px]">
          Do not use ice on your face, and avoid using arnica/bromelain. These
          may interfere with the natural inflammatory process that&rsquo;s
          critical for your skin rejuvenation.
        </li>
        <li className="pl-[6px]">
          Avoid sun tanning and prolonged exposure to direct sunlight for at
          least 2 weeks. After 24 hours, always use sunblock (SPF 30 or higher)
          and wear a hat if you&rsquo;re outside.
        </li>
        <li className="pl-[6px]">
          Use a painkiller, such as Tylenol, if you experience any soreness.
        </li>
      </ul>

      <h3 className="mb-[16px] font-[var(--font-display)] text-[24px] font-normal leading-[1.3] text-[var(--color-text-primary)]">
        The Healing Process: What to Expect
      </h3>
      <p className="mb-[16px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Microneedling is a quick and non-invasive cosmetic procedure with
        minimal side effects. However, it&rsquo;s quite normal to experience the
        following:
      </p>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        Day 1&ndash;3
      </h4>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        A sunburn-like effect is normal. Your skin may feel tight, dry, or
        sensitive to touch. Treat the skin gently by washing it with a gentle
        cleanser and cool water, and use only your hands to pat dry no earlier
        than 4 hours after treatment.
      </p>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Some redness may also be present, and in some cases, patients may
        experience slight bruising that can last for 5&ndash;7 days and
        temporary swelling for 2&ndash;4 days.
      </p>
      <ul className="list-disc pl-[20px] mb-[24px] space-y-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <li className="pl-[6px]">
          Avoid strenuous exercise that causes sweating, as well as jacuzzis,
          saunas, and steam baths for up to 48 hours.
        </li>
        <li className="pl-[6px]">Use only mineral makeup after 24 hours.</li>
        <li className="pl-[6px]">
          Sleep on your back with the head of the bed elevated to minimize
          swelling or pain as needed.
        </li>
      </ul>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        Day 2&ndash;7
      </h4>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Peeling may start 3&ndash;5 days after the treatment. You&rsquo;ll
        notice skin dryness and flaking, which is due to an increased turnover
        of skin cells.
      </p>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] font-semibold leading-[1.7] text-[var(--color-text-primary)]">
        DO NOT pick, scratch, or scrub treated skin.
      </p>
      <p className="mb-[24px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <strong>Important information:</strong> You must allow the old skin to
        flake off naturally and keep it moisturized at all times. Talk to your
        skin specialist about which products to use.
      </p>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        Day 5&ndash;7
      </h4>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        You may start your regular skin care products again once your skin no
        longer feels irritated. Most patients notice continued skin improvement
        over the months following their last treatment.
      </p>
      <p className="mb-[28px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        For best results, we recommend follow-up and repeat microneedling
        treatments every 4&ndash;6 weeks, with a series of 3&ndash;5 treatments
        depending on your personalized care plan.
      </p>

      <div className="mt-[36px] rounded-[16px] bg-[var(--olive-100)] px-[24px] py-[22px]">
        <p className="m-0 font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
          For further questions or concerns, please contact Ashley at{" "}
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
  );
}

function CellumaLedAftercare() {
  return (
    <>
      <h2 className="mb-[12px] font-[var(--font-display)] text-[30px] font-normal leading-[1.2] text-[var(--color-text-primary)] md:text-[36px]">
        Celluma LED Aftercare
      </h2>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Celluma LED light therapy is a gentle, non-invasive treatment with no
        downtime. Following a few simple guidelines before and after your
        session helps you get the most out of each treatment.
      </p>
      <p className="mb-[28px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Each session lasts about <strong>30 minutes</strong>, during which the
        light panel is positioned close to your skin while you relax. You may
        feel mild warmth &mdash; most clients find the treatment comfortable and
        relaxing.
      </p>

      <h3 className="mb-[16px] font-[var(--font-display)] text-[24px] font-normal leading-[1.3] text-[var(--color-text-primary)]">
        Before Your Treatment
      </h3>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        LED light works best on bare skin &mdash; many skincare and makeup
        formulas contain minerals that can deflect the light and reduce how much
        energy your skin absorbs.
      </p>
      <ul className="list-disc pl-[20px] mb-[28px] space-y-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <li className="pl-[6px]">
          Arrive with skin that is clean, bare, and dry &mdash; free of makeup,
          moisturizer, sunscreen, lotions, or oils.
        </li>
        <li className="pl-[6px]">
          If needed, you can cleanse your skin at the studio before your
          session.
        </li>
        <li className="pl-[6px]">
          Protective goggles are provided &mdash; avoid looking directly at the
          light during your session.
        </li>
        <li className="pl-[6px]">
          Let Ashley know about any medications or products you&rsquo;re using
          that may increase light sensitivity.
        </li>
      </ul>

      <h3 className="mb-[16px] font-[var(--font-display)] text-[24px] font-normal leading-[1.3] text-[var(--color-text-primary)]">
        After Your Treatment
      </h3>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Your skin may be slightly more sensitive to sunlight after LED therapy,
        so protection and gentle care are key.
      </p>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        First 24&ndash;48 Hours
      </h4>
      <ul className="list-disc pl-[20px] mb-[24px] space-y-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <li className="pl-[6px]">
          Apply a broad-spectrum <strong>SPF 30+</strong> sunscreen daily, and
          avoid direct sun exposure for 24&ndash;48 hours.
        </li>
        <li className="pl-[6px]">
          Avoid hot showers, saunas, steam rooms, and vigorous exercise for at
          least 24 hours, as heat can aggravate sensitive skin.
        </li>
        <li className="pl-[6px]">
          Skip exfoliating products, retinoids, and strong acids (AHAs/BHAs) for
          at least 48 hours.
        </li>
        <li className="pl-[6px]">
          If possible, let your skin breathe and avoid makeup for 24 hours. If
          makeup is needed, choose a lightweight, non-comedogenic or mineral
          formula.
        </li>
        <li className="pl-[6px]">
          Avoid picking or scratching the treated area if it feels sensitive or
          tight.
        </li>
      </ul>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        Keep Skin Hydrated
      </h4>
      <ul className="list-disc pl-[20px] mb-[24px] space-y-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <li className="pl-[6px]">
          Apply a gentle, hydrating moisturizer &mdash; ingredients like
          hyaluronic acid, glycerin, or ceramides work well.
        </li>
        <li className="pl-[6px]">
          Drink plenty of water to keep your skin hydrated from the inside out.
        </li>
        <li className="pl-[6px]">
          Right after treatment is a great time for your serum or moisturizer
          &mdash; your skin absorbs products especially well in the first
          30&ndash;60 minutes post-session.
        </li>
      </ul>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        What&rsquo;s Normal
      </h4>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Mild redness or sensitivity is normal and usually fades within a few
        hours. If redness or irritation persists beyond a day or two, let Ashley
        know.
      </p>
      <p className="mb-[28px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        For best results, LED treatments are typically done as a series &mdash;
        often 2&ndash;3 sessions per week over several weeks &mdash; depending
        on your personalized plan.
      </p>

      <div className="mt-[36px] rounded-[16px] bg-[var(--olive-100)] px-[24px] py-[22px]">
        <p className="m-0 font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
          For further questions or concerns, please contact Ashley at{" "}
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
  );
}

function OxyGeneoAftercare() {
  return (
    <>
      <h2 className="mb-[12px] font-[var(--font-display)] text-[30px] font-normal leading-[1.2] text-[var(--color-text-primary)] md:text-[36px]">
        OxyGeneo Aftercare
      </h2>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        The OxyGeneo 3-in-1 Super Facial exfoliates, oxygenates, and infuses
        your skin in a single treatment &mdash; with no downtime. Because the
        exfoliation leaves fresh, new skin cells at the surface, your skin is
        more sensitive to sunlight and active products for the first few days.
      </p>
      <p className="mb-[28px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        Temporary redness, tightness, or tingling are normal reactions that
        typically settle within a few hours to 72 hours, depending on your skin
        sensitivity.
      </p>

      <h3 className="mb-[16px] font-[var(--font-display)] text-[24px] font-normal leading-[1.3] text-[var(--color-text-primary)]">
        Before Your Treatment
      </h3>
      <ul className="list-disc pl-[20px] mb-[28px] space-y-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <li className="pl-[6px]">
          Stop using retinoids, alpha hydroxy acids (AHAs), and beta hydroxy
          acids (BHAs) at least 72 hours before your facial.
        </li>
        <li className="pl-[6px]">
          Do not wax, shave, thread, or receive laser hair removal on the
          treatment area for 48 hours before your treatment.
        </li>
        <li className="pl-[6px]">
          Avoid excessive direct sunlight &mdash; skin that is sunburned cannot
          be treated.
        </li>
        <li className="pl-[6px]">
          If you have a history of cold sores, let Ashley know before your
          appointment.
        </li>
      </ul>

      <h3 className="mb-[16px] font-[var(--font-display)] text-[24px] font-normal leading-[1.3] text-[var(--color-text-primary)]">
        After Your Treatment
      </h3>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        First 24&ndash;48 Hours
      </h4>
      <ul className="list-disc pl-[20px] mb-[24px] space-y-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <li className="pl-[6px]">
          Apply a hydrating mask or moisturizer, followed by a broad-spectrum{" "}
          <strong>SPF 30+</strong> sunscreen &mdash; the exfoliation process
          increases your skin&rsquo;s sensitivity to sunlight.
        </li>
        <li className="pl-[6px]">
          For best results, avoid makeup for 24 hours. If you must wear makeup,
          apply a light mineral formula with a clean applicator or clean hands.
        </li>
        <li className="pl-[6px]">
          No exercise, hot tubs, saunas, steam rooms, swimming pools, or massage
          until your skin is back to normal &mdash; about 24&ndash;48 hours.
        </li>
        <li className="pl-[6px]">
          Use only lukewarm water on your face for 24&ndash;72 hours.
        </li>
        <li className="pl-[6px]">
          Avoid touching your face unnecessarily &mdash; do not pick or squeeze
          any blemishes.
        </li>
      </ul>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        Products &amp; Other Treatments
      </h4>
      <ul className="list-disc pl-[20px] mb-[24px] space-y-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        <li className="pl-[6px]">
          Avoid mechanical and chemical exfoliation for at least 72 hours.
        </li>
        <li className="pl-[6px]">
          Wait 7 days before resuming active ingredients such as Retin-A
          (tretinoin), Renova, Differin, glycolic acids, or other exfoliating
          agents &mdash; including cleansing brushes like Clarisonic.
        </li>
        <li className="pl-[6px]">
          Do not have fillers or Botox within 1 week of treatment in the treated
          area.
        </li>
        <li className="pl-[6px]">
          Wait 3 weeks before additional treatments such as peels,
          microdermabrasion, laser, or light therapy.
        </li>
        <li className="pl-[6px]">
          No bleaching, tweezing, waxing, threading, depilatory creams, or
          electrolysis on the treated area for 2 weeks.
        </li>
        <li className="pl-[6px]">
          Keep your skin hydrated and stick to gentle skincare products while it
          settles.
        </li>
      </ul>

      <h4 className="mb-[12px] font-[var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-brand-primary)]">
        Results &amp; Rebooking
      </h4>
      <p className="mb-[12px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        You will likely see results immediately, and your skin can feel smooth
        and hydrated for one to four weeks with appropriate home care.
      </p>
      <p className="mb-[28px] font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
        For best results, treatments are recommended about{" "}
        <strong>4 weeks apart</strong> &mdash; prebook your next appointment
        before you leave.
      </p>

      <div className="mt-[36px] rounded-[16px] bg-[var(--olive-100)] px-[24px] py-[22px]">
        <p className="m-0 font-[var(--font-body)] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
          For further questions or concerns, please contact Ashley at{" "}
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
  );
}

export default function AfterCaresPage() {
  const [selectedId, setSelectedId] = useState<string>(DEFAULT_TREATMENT_ID);
  const contentRef = useRef<HTMLDivElement>(null);

  const selectedTreatment = useMemo(
    () => treatments.find((t) => t.id === selectedId) ?? treatments[0],
    [selectedId],
  );

  const handleSelect = (id: string) => {
    setSelectedId(id);
    contentRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
                    id={`aftercare-tab-${treatment.id}`}
                    aria-selected={isSelected}
                    aria-controls={`aftercare-panel-${treatment.id}`}
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
              ref={contentRef}
              className="scroll-mt-[20px] rounded-[20px] border bg-[#fff] px-[24px] py-[30px] md:px-[36px] md:py-[42px]"
              style={{ borderColor: "var(--color-border)" }}
            >
              {treatments.map((treatment) => (
                <div
                  key={treatment.id}
                  role="tabpanel"
                  id={`aftercare-panel-${treatment.id}`}
                  aria-labelledby={`aftercare-tab-${treatment.id}`}
                  hidden={treatment.id !== selectedTreatment.id}
                >
                  {treatment.content}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
