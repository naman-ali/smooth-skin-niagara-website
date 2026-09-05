import { Calendar, Clock, Info, Shield } from "lucide-react";
import * as React from "react";

const AboutIcon = ({ color }: { color?: string }) => (
  <Info size={20} color={color} strokeWidth={1.5} />
);

const TreatmentIcon = ({ color }: { color?: string }) => (
  <Clock size={20} color={color} strokeWidth={1.5} />
);

const AppointmentIcon = ({ color }: { color?: string }) => (
  <Calendar size={20} color={color} strokeWidth={1.5} />
);

const SafetyIcon = ({ color }: { color?: string }) => (
  <Shield size={20} color={color} strokeWidth={1.5} />
);

export const cellumaFaqCategories = [
  {
    id: "about",
    label: "ABOUT CELLUMA",
    heading: "About Celluma",
    description:
      "Learn what Celluma is, how LED light therapy works, and how it differs from laser treatment.",
    icon: AboutIcon,
    questions: [
      {
        q: "What is Celluma LED light therapy?",
        a: (
          <>
            <p>
              Celluma is a non-invasive LED light therapy system that uses
              specific wavelengths of blue, red and near-infrared light. The
              Celluma PRO has treatment modes designed for concerns including
              acne, visible signs of aging and minor muscle or joint
              discomfort.
            </p>
          </>
        ),
      },
      {
        q: "How does Celluma LED light therapy work?",
        a: (
          <>
            <p>
              Celluma delivers light energy at different wavelengths that are
              absorbed at different depths within the skin and tissue. Its
              treatment programs use different combinations and doses of blue
              465 nm, red 640 nm and near-infrared 880 nm light depending on the
              treatment goal.
            </p>
          </>
        ),
      },
      {
        q: "What can Celluma PRO help with?",
        a: (
          <>
            <p>
              The Celluma PRO is designed for three main categories: acne, aging
              skin and pain management. Depending on your goals, treatment may
              be used to help reduce acne breakouts, improve the appearance of
              fine lines and skin quality, or provide temporary relief from
              minor muscle and joint discomfort.
            </p>
          </>
        ),
      },
      {
        q: "Is Celluma the same as a laser treatment?",
        a: (
          <>
            <p>
              No. Celluma uses light-emitting diodes, or LEDs, rather than a
              laser. It is non-ablative and does not remove or resurface the
              skin, which is why treatment does not require the recovery period
              associated with many laser procedures.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "treatment",
    label: "TREATMENT & RESULTS",
    heading: "Treatment & Results",
    description:
      "Find out how Celluma feels, how long sessions take, and what kind of results to expect.",
    icon: TreatmentIcon,
    questions: [
      {
        q: "Does Celluma hurt?",
        a: (
          <>
            <p>
              Celluma treatment is non-invasive and is intended to be painless
              when used correctly. You simply relax while the flexible panel is
              positioned close to the treatment area.
            </p>
          </>
        ),
      },
      {
        q: "Is there any downtime after Celluma?",
        a: (
          <>
            <p>
              There is generally no downtime from the LED treatment itself, so
              you can normally return to your usual activities immediately
              afterward.
            </p>
          </>
        ),
      },
      {
        q: "How long is a Celluma treatment?",
        a: (
          <>
            <p>
              Smooth Skin Niagara offers 15-minute, 20-minute and 30-minute
              sessions depending on your treatment plan.
            </p>
            <p>
              For context, Celluma&rsquo;s published protocols for acne and skin
              rejuvenation commonly use 30-minute treatments, particularly when
              following a structured treatment series. Ashley can recommend the
              most appropriate session length based on your treatment area and
              goals.
            </p>
          </>
        ),
      },
      {
        q: "How many Celluma treatments will I need?",
        a: (
          <>
            <p>
              It depends on what you are treating and how your body responds.
              Celluma&rsquo;s published acne protocol commonly recommends
              2&ndash;3 treatments per week for four weeks, while its standard
              aging-skin protocol commonly uses around 3 treatments per week for
              four weeks. Your schedule may differ, especially when Celluma is
              being used alongside another treatment.
            </p>
          </>
        ),
      },
      {
        q: "When will I start seeing results?",
        a: (
          <>
            <p>
              Results vary by concern and individual response. Celluma reports
              that some people notice changes relatively quickly, while concerns
              such as acne and visible signs of aging generally benefit from a
              consistent series of treatments rather than relying on one
              session. Many of Celluma&rsquo;s published before-and-after
              protocols use repeated treatments over approximately four weeks.
            </p>
          </>
        ),
      },
      {
        q: "Will one Celluma treatment be enough?",
        a: (
          <>
            <p>
              A single treatment can still be useful, particularly when
              Celluma is being used as an add-on or for a specific short-term
              goal, but most of the published protocols for acne and skin
              rejuvenation involve a series of treatments. We can recommend a
              schedule based on what you would like to achieve.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "appointment",
    label: "BEFORE & AFTER YOUR APPOINTMENT",
    heading: "Before & After Your Appointment",
    description:
      "Simple preparation and aftercare guidance to help you get the most from your session.",
    icon: AppointmentIcon,
    questions: [
      {
        q: "Do I need to prepare my skin before Celluma?",
        a: (
          <>
            <p>
              Yes. Celluma recommends treating clean, dry, bare skin. Makeup,
              moisturizers, sunscreen and other products should be removed
              before treatment because some products can reduce how much light
              reaches the skin.
            </p>
          </>
        ),
      },
      {
        q: "Can I apply skincare products after Celluma?",
        a: (
          <>
            <p>
              Yes. Celluma recommends applying products such as serums,
              moisturizers or SPF after the LED treatment rather than before it.
            </p>
          </>
        ),
      },
      {
        q: "Can Celluma be combined with other skincare treatments?",
        a: (
          <>
            <p>
              It can be incorporated alongside selected aesthetic treatments
              when appropriate. Celluma also publishes before-and-after examples
              involving LED treatment following procedures such as
              microneedling. The best timing depends on the treatment you are
              having, so we&rsquo;ll recommend whether adding Celluma makes sense
              for your specific plan.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "safety",
    label: "SAFETY & SUITABILITY",
    heading: "Safety & Suitability",
    description:
      "Important contraindications and guidance to help you decide if Celluma is right for you.",
    icon: SafetyIcon,
    questions: [
      {
        q: "Is Celluma safe for all skin types?",
        a: (
          <>
            <p>
              LED light therapy is non-invasive, does not use UV light and can
              be used across a wide range of skin types. However, it is not
              appropriate for everyone, and there are important medical
              contraindications that need to be considered before treatment.
            </p>
          </>
        ),
      },
      {
        q: "Does Celluma use UV light?",
        a: (
          <>
            <p>
              No. Celluma LED therapy does not use ultraviolet light. Its
              treatment programs use visible blue and red light together with
              near-infrared light.
            </p>
          </>
        ),
      },
      {
        q: "Who should not have Celluma LED light therapy?",
        a: (
          <>
            <p>
              Tell us about your medical history and medications before
              treatment. Celluma lists contraindications including
              photosensitizing medications, a history of epilepsy or seizures,
              certain steroid injections, and treatment directly over a known
              cancer or metastasis. Manufacturer guidance also places
              restrictions on treatment areas during pregnancy and breastfeeding.
              If any of these apply, medical clearance may be needed or
              treatment may not be appropriate.
            </p>
          </>
        ),
      },
      {
        q: "Can I have Celluma while pregnant?",
        a: (
          <>
            <p>
              Please tell us if you are pregnant or breastfeeding before booking.
              Celluma&rsquo;s current contraindication guidance says not to use
              LED therapy over the breast or stomach during pregnancy or
              breastfeeding, and treatment decisions should follow the
              manufacturer&rsquo;s guidance and your healthcare provider&rsquo;s
              advice.
            </p>
          </>
        ),
      },
      {
        q: "Can I have Celluma if I use retinol?",
        a: (
          <>
            <p>
              Retinol itself is not listed by Celluma as an absolute
              contraindication, but the manufacturer recommends caution because
              retinoids can increase skin sensitivity. Let us know what
              prescription and non-prescription skincare you use so we can
              advise you appropriately.
            </p>
          </>
        ),
      },
      {
        q: "Can Celluma PRO be used for hair growth?",
        a: (
          <>
            <p>
              Not as a dedicated hair-restoration treatment. The Celluma PRO has
              programs for acne, aging skin and pain. Celluma uses different
              devices and a specific proprietary Hair mode for its
              hair-restoration indication.
            </p>
          </>
        ),
      },
    ],
  },
];
