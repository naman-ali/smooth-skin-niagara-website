"use client";

import React, { useState } from "react";
import * as ButtonModule from "@/components/design-system/core/Button";

const Button: any = (ButtonModule as any).Button;

interface FaqItem {
  q: string;
  a: React.ReactNode;
}

const faqItems: FaqItem[] = [
  {
    q: "What are eyelash extensions?",
    a: (
      <p>
        Eyelash extensions are an exciting new way to extend the length and
        thickness of your natural eyelashes. Lash extensions are single strands
        of synthetic eyelashes that are curved to replicate a natural eyelash.
        They are applied to each individual natural lash one by one for a
        natural, beautiful and luscious look.
      </p>
    ),
  },
  {
    q: "What are Xtreme Lashes®?",
    a: (
      <>
        <p>
          Introducing Xtreme Lashes® Eyelash Extensions, your ultimate answer
          for longer, thicker, more beautiful-looking eyelashes. Developed to
          mimic your natural eyelashes, each Xtreme Lashes Eyelash Extension is
          individually applied to a single eyelash, resulting in a gorgeous,
          natural appearance. Using a proprietary adhesive, Xtreme Lashes
          Eyelash Extensions are only applied by a trained and certified Xtreme
          Lashes Eyelash Extensions Stylist. Xtreme Lashes Eyelash Extensions
          are not traditional false eyelashes, eyelash flares or implants. Safe
          and comfortable to wear, Xtreme Lashes Eyelash Extensions are never
          applied directly to your skin or eyelid. With routine touchups every
          two to four weeks, you can have amazing eyelashes indefinitely.
        </p>
        <p className="mt-[16px] font-semibold">
          The expertise and reputation of Xtreme Lashes
        </p>
        <p>Xtreme Lashes is today’s leader in the industry because of:</p>
        <ul
          className="m-0 pl-[20px] text-[var(--color-text-secondary)]" style={{ listStyle: "disc" }}
        >
          <li>
            Its safe application technique created by esthetic professionals
          </li>
          <li>
            Its high quality application products developed to obtain complete
            compatibility with the technique
          </li>
          <li>
            Its exclusive cosmetic products compatible with Xtreme Lashes
            Eyelash Extensions
          </li>
          <li>
            Its training program, the most comprehensive, structured and
            professional in the industry
          </li>
          <li>
            Its highest standards when it comes to training programs,
            certification, application technique and cosmetic products
          </li>
          <li>
            In addition, our products and services comply with Health Canada’s
            standards for quality and safety
          </li>
          <li>
            For these reasons, today, Xtreme Lashes is the preferred choice of
            consumers and celebrities
          </li>
          <li>
            Xtreme Lashes has been the exclusive provider of eyelash extensions
            for events such as: Academy Awards, Golden Globes, Emmy’s, Cannes
            Film Festival and the Latin Grammy’s
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "What do eyelash extensions look like when applied?",
    a: (
      <p>
        With proper application, meaning one synthetic eyelash applied to one
        natural lash, the look and feel is completely natural looking and real.
        No one will know you have extensions, they will just think you were born
        with beautiful, long lashes!
      </p>
    ),
  },
  {
    q: "How long will it take to apply eyelash extensions and how is it done?",
    a: (
      <p>
        Lashes are applied while you are lying down with your eyes closed in a
        cozy, warm spa bed. This beauty rest can take about 1.5 – 2.5 hours for
        a full set and a relash can take 1-2 hours depending on how long you
        wait from your initial full set or last relash. After cleaning and
        priming your lashes, your bottom lashes are protected with an
        anti-aging eye patch and/or medical tape. Then finally the lash
        extensions are applied 1-to-1 with medical-adhesive. It is a very
        relaxing, non-invasive procedure and most clients fall asleep.
      </p>
    ),
  },
  {
    q: "How long do eyelash extensions last?",
    a: (
      <p>
        Eyelash extensions can last up to 6 weeks when properly cared for.
        However, they are no longer full at 6 weeks. Therefore a relash is
        recommended to keep your lashes full. The extensions will shed with the
        natural growth cycle of your own lashes which is typically between 2 – 4
        weeks, in which your baby lashes will start to grow in and give us more
        to lash. If you choose to get touch-ups in between they will last as
        long as you continue to fill them in.
      </p>
    ),
  },
  {
    q: "When is a good time to ReLash?",
    a: (
      <>
        <p>
          We recommend a relash appointment every 2 to 4 weeks. If you wait
          further than 4 weeks your eyelash extensions will fall out and you
          will require a full set. Other factors such as exposure to steam,
          humidity or touching your eyes a lot may cause the extensions to fall
          sooner. Relash appointments can range between 1.5hr – 2hrs, depending
          on how long you wait between appointments. At this time, we will
          remove make-up residue, remove grown-out extensions, prime your lashes
          and apply extensions to new lash growth. A good indicator of when to
          schedule your next relash appointment is when your extensions are 50%
          gone.
        </p>
        <p className="mt-[16px] font-semibold">
          I’m a bride-to-be or going on vacation, when is the best time to
          book an appointment?
        </p>
        <p>
          If you’ve never had eyelash extensions applied before then we
          recommend scheduling a full set 2 weeks before your wedding date or
          departure date at the latest. And then schedule a relash 1 or 2 days
          before the date. This will allow time to experiment with different
          lengths, curls and thicknesses of lashes, learn proper aftercare and
          ensure there are no allergies to the product. Scheduling a month in
          advance plus 2 fills before the date would be an ideal situation.
        </p>
      </>
    ),
  },
  {
    q: "Can I apply mascara to eyelash extensions?",
    a: (
      <p>
        Yes, it must however only be water based mascara. DO NOT USE
        OIL-BASED OR WATER-PROOF MASCARA. Waterproof mascara or any type of
        oil based mascara can dissolve the bonding agent and shorten the life
        of your eyelash extensions causing them to fall sooner. Care also
        needs to be taken in washing off the mascara. Only use a water based
        eye makeup remover. Custom Lash & Laser sells a volumizing water based
        mascara and oil free makeup remover.
      </p>
    ),
  },
  {
    q: "Can I swim, shower, exercise, or visit a spa while wearing eyelash extensions?",
    a: (
      <p>
        Yes. The bonding agent we use is waterproof and allows you to shower,
        swim, exercise etc. Special care is required but overall maintenance is
        low. We do recommend however that you do not wash your eye area for at
        least 24 hours after the eyelash application.
      </p>
    ),
  },
  {
    q: "Is there anything I should do to prepare for my appointment?",
    a: (
      <p>
        Yes! Try your best to arrive without any eye makeup. This will minimize
        the cleanup time and allow more time for applying the extensions. When
        removing eye make up, make sure to use oil-free make up remover. Please
        do not wear contact lenses, wear your glasses or bring your contact
        case. You will need to keep your lashes dry for 24 hours after the
        application so it’s also a good idea to have your hair washed the day of
        or night before.
      </p>
    ),
  },
  {
    q: "How do I take care of my new eyelash extensions?",
    a: (
      <ul
        className="m-0 pl-[20px] text-[var(--color-text-secondary)]" style={{ listStyle: "disc" }}
      >
        <li>Do not get lashes wet for at least 24 hours</li>
        <li>Use oil-free eye makeup remover</li>
        <li>Avoid hot steam or sauna (minimize hot yoga)</li>
        <li>Avoid sleeping on your stomach to avoid pressure on the extensions</li>
        <li>Avoid running water directly on your lashes</li>
        <li>Do not rub, pick or pull your eyes</li>
        <li>
          Only use water based mascara (optional). If applying mascara, do so
          from middle to tip avoiding the root area.
        </li>
        <li>Do not use a mechanical eyelash curler</li>
      </ul>
    ),
  },
  {
    q: "Who should NOT wear eyelash extensions?",
    a: (
      <>
        <p>Eyelash extensions may not be suitable for people who:</p>
        <ul
          className="m-0 pl-[20px] text-[var(--color-text-secondary)]" style={{ listStyle: "disc" }}
        >
          <li>
            Have pre-existing eyelid or eye conditions such as blepharitis and
            ocular rosacea
          </li>
          <li>
            Are very rough with themselves and do not want to follow aftercare
            instructions
          </li>
          <li>
            Want a very heavy mascara look but do not have the natural lashes to
            support it
          </li>
          <li>
            Have a condition called Trichotillomania, which is compulsive
            pulling or twisting of hair or eyelashes
          </li>
          <li>Are in chlorinated water many times a week</li>
          <li>Cannot control rubbing their eyes</li>
        </ul>
      </>
    ),
  },
  {
    q: "What is a Classic Set?",
    a: (
      <p>
        Using our high quality lash extensions blending different lengths,
        curls and thicknesses to achieve a natural look.
      </p>
    ),
  },
  {
    q: "What are Xwrap eyelash extensions?",
    a: (
      <>
        <p>
          BRING ON THE DRAMA! BOLD, LOOK-AT-ME LASHES WITH THE ALL NEW
          X-WRAP FEATURES &amp; BENEFITS
        </p>
        <p>THE PERFECT FIT IS FINALLY HERE.</p>
        <ul
          className="m-0 pl-[20px] text-[var(--color-text-secondary)]" style={{ listStyle: "disc" }}
        >
          <li>Interlocking “X” shape secures extension to the natural lash</li>
          <li>Self-aligning attachment</li>
          <li>
            Flat and large surface area for more secure attachment with high
            definition curl
          </li>
          <li>Increased longevity</li>
          <li>Resistance to twisting and tangling</li>
          <li>53% lighter weight vs. round lash extensions</li>
          <li>Improved curl retention</li>
          <li>Defined lash line giving the look of wearing eyeliner!</li>
        </ul>
        <img
          src="https://smoothskinniagara.com/wp-content/uploads/2021/09/Xwrap-5c2d30a4b1ada.jpg"
          alt="Xwrap Eyelash Extension"
          className="mt-[16px] max-w-[175px] rounded-[8px] block"
        />
      </>
    ),
  },
  {
    q: "What is the Hybrid Full Set?",
    a: (
      <p>
        Using ultra light extensions, 2-3 individual extensions adhere to
        each natural lash to create a fluffy and full lash line. Lastly we add
        our new ellipse lashes in this mix for a fuller dramatic different look
        than the classic set of lashes.
      </p>
    ),
  },
  {
    q: "What is a Lash Lift and Tint?",
    a: (
      <p>
        The Lash Lift and Tint is a new service to Custom Lash and clients are
        raving about it! The Lash Lift is essentially perming the natural
        lashes to gain a beautiful natural curl and to top the look off we add
        a tint to darken the lash line (optional). This option is a great
        alternative if you are perhaps taking a break from eyelash extensions
        or not yet ready to try the extensions out. The process takes about
        45-60mins, we apply eyepatches to the lower lashes and place silicone
        pads to the upper eyelid to help with the perming process. You will
        leave with a nourishing oil on the lashes and are asked not to get them
        wet for 24hrs. After the 24 hours you can continue with your regular
        daily routine and apply makeup and mascara as you wish. After the
        treatment it’s recommended to keep the natural lashes soft during the
        evening so a lash growth serum, Vitamin E or coconut oil will help
        keep the lashes strong and will promote growth. Refer to the gallery
        section for before and after photo’s.
      </p>
    ),
  },
];

export function EyelashFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="pt-[90px] pr-[53px] pb-[90px] pl-[53px] bg-[var(--olive-50)]">
      <div className="max-w-[920px] mt-0 mr-auto mb-0 ml-auto">
        <div className="text-center mb-[56px]">
          <div
            className="flex items-center justify-center gap-[13px] mb-[22px]"
          >
            <span
              className="font-[var(--font-body)] text-[12px] tracking-[0.16em] uppercase text-[var(--color-brand-primary)] font-bold"
            >
              FREQUENTLY ASKED QUESTIONS
            </span>
            <span
              className="w-[48px] h-[1px] bg-[var(--color-border-strong)]"
            />
          </div>
          <h2
            className="font-[var(--font-display)] font-normal text-[48px] leading-[1.1] text-[var(--color-text-primary)] mt-0 mr-0 mb-[16px] ml-0"
          >
            Your Questions, Answered
          </h2>
          <p
            className="font-[var(--font-body)] text-[17px] leading-[1.6] text-[var(--color-text-secondary)] mt-0 mr-auto mb-0 ml-auto max-w-[620px]"
          >
            Everything you want to know about eyelash extensions, lash lifts,
            aftercare and what to expect during your appointment.
          </p>
        </div>

        <div className="flex flex-col gap-[14px]">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                onClick={() => toggle(i)}
                className="bg-[#fff] rounded-[14px] pt-[20px] pr-[22px] pb-[20px] pl-[22px] cursor-pointer" style={{ border: "1px solid var(--color-border)", transition: "box-shadow 0.15s ease", boxShadow: isOpen
                    ? "0 4px 16px rgba(37,38,36,0.04)"
                    : "none" }}
              >
                <div
                  className="flex items-center justify-between gap-[16px]"
                >
                  <h4
                    className="font-[var(--font-body)] text-[16px] font-semibold text-[var(--color-text-primary)] m-0 leading-[1.4]"
                  >
                    {item.q}
                  </h4>
                  <span
                    className="shrink-0 font-[var(--font-body)] text-[22px] text-[var(--color-brand-primary)] leading-[1]"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
                {isOpen && (
                  <div
                    className="mt-[14px] pt-[18px] font-[var(--font-body)] text-[15px] leading-[1.65] text-[var(--color-text-secondary)]" style={{ borderTop: "1px solid var(--color-border)" }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div
          className="mt-[48px] pt-[28px] pr-[24px] pb-[28px] pl-[24px] bg-[#fff] rounded-[16px] text-center" style={{ border: "1px solid var(--color-border)", boxShadow: "0 2px 14px rgba(0,0,0,0.04)" }}
        >
          <h4
            className="font-[var(--font-display)] text-[22px] font-medium text-[var(--color-text-primary)] mt-0 mr-0 mb-[10px] ml-0"
          >
            Still have a question?
          </h4>
          <p
            className="font-[var(--font-body)] text-[15px] leading-[1.6] text-[var(--color-text-secondary)] mt-0 mr-0 mb-[20px] ml-0"
          >
            We are happy to help. Call, text, or send us a message and we will
            answer anything you are unsure about.
          </p>
          <a
            href="/contact"
            className="no-underline inline-block"
          >
            <Button variant="primary">Ask A Question →</Button>
          </a>
          <a
            href="tel:+19059207229"
            className="block mt-[16px] font-[var(--font-body)] text-[16px] font-semibold text-[var(--color-brand-primary)] no-underline"
          >
            (905) 920-7229
          </a>
          <span
            className="block font-[var(--font-body)] text-[13px] text-[var(--color-text-secondary)]"
          >
            Call or Text
          </span>
        </div>
      </div>
    </section>
  );
}
