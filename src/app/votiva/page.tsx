import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Votiva & Intimate Wellness in Libertyville, IL | Alliance OB/GYN",
  description:
    "Private Votiva consultation in Libertyville with Alliance OB/GYN — FormaV radiofrequency for intimate wellness concerns after childbirth, hormonal change, or aging.",
  alternates: { canonical: "/votiva" },
};

const concerns = [
  {
    title: "Vaginal dryness or irritation",
    text: "Especially with hormonal changes, menopause, or after certain medical treatments.",
  },
  {
    title: "Discomfort with intimacy",
    text: "Pain or discomfort during sex deserves evaluation rather than assumptions about the cause.",
  },
  {
    title: "Changes after childbirth",
    text: "Concerns about tissue quality, sensation, or pelvic support after pregnancy and delivery.",
  },
  {
    title: "Mild urinary leakage",
    text: "Leakage with coughing, laughing, or exercise may require pelvic-floor assessment and a discussion of established treatment choices.",
  },
  {
    title: "Vulvar tissue changes",
    text: "Functional or appearance-related concerns that affect comfort or confidence.",
  },
  {
    title: "Questions about your options",
    text: "You may simply want a clear explanation of benefits, limitations, alternatives, cost, and recovery.",
  },
];

const whyEval = [
  {
    title: "We listen first",
    text: "Tell us what changed, when it began, and how it affects daily life or intimacy.",
  },
  {
    title: "We evaluate appropriately",
    text: "Your visit may include a health-history review and an exam when clinically appropriate and with your consent.",
  },
  {
    title: "We compare options",
    text: "Depending on the cause, options may include moisturizers, lubricants, prescription therapy, pelvic-floor physical therapy, observation, Votiva, or specialist care.",
  },
];

const experience = [
  {
    n: "1",
    title: "Consultation",
    text: "Review your goals, medical history, symptoms, alternatives, and what outcomes are realistic.",
  },
  {
    n: "2",
    title: "Treatment planning",
    text: "Discuss the treatment area, expected sensation, number and timing of sessions, possible side effects, and cost.",
  },
  {
    n: "3",
    title: "Office procedure",
    text: "The applicator delivers controlled warmth while the treatment temperature is monitored.",
  },
  {
    n: "4",
    title: "Aftercare",
    text: "Most patients can return to routine daily activities quickly. We provide specific instructions, including any temporary activity restrictions.",
  },
];

const faqs = [
  {
    question: "How many treatments will I need?",
    answer:
      "There is no single plan for everyone. The number and timing of sessions depend on your concern, medical history, response, and goals. We will discuss the recommendation before you commit.",
  },
  {
    question: "Is there downtime?",
    answer:
      "Many patients return to normal daily activities quickly, but short-term restrictions may apply. You will receive instructions based on the area treated and your individual plan.",
  },
  {
    question: "Will Votiva treat the cause of urinary leakage?",
    answer:
      "Urinary leakage has different types and causes. An evaluation is important. Pelvic-floor exercises or physical therapy, medication, devices, or other treatment may be more appropriate, and Votiva should not be assumed to fix every type of leakage.",
  },
  {
    question: "Is Votiva the same as pelvic-floor physical therapy?",
    answer:
      "No. Pelvic-floor physical therapy evaluates and treats muscle strength, coordination, pain, and related function. Votiva is an energy-based procedure. One does not automatically replace the other.",
  },
  {
    question: "Are results guaranteed?",
    answer:
      "No. Evidence for energy-based intimate-wellness procedures is still developing, and results vary. We discuss realistic expectations and uncertainties so you can make an informed choice.",
  },
];

export default function VotivaPage() {
  return (
    <>
      <PageHero
        eyebrow="Votiva & intimate wellness · Libertyville, IL"
        title="Intimate changes deserve a thoughtful medical conversation"
        description="Changes after childbirth, hormonal shifts, or aging can affect comfort and confidence. Alliance OB/GYN offers private, respectful evaluation and can help you decide whether Votiva — or another option — is appropriate for your goals."
        ctaLabel="Request a Private Consultation"
      />

      <section className="section-pad pt-0 surface-white">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            Your comfort comes first
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">
            You never have to minimize what you are experiencing
          </h2>
          <p className="mt-4 max-w-3xl text-ink-soft">
            You set the pace of the conversation. We explain what we find, discuss reasonable
            options, and answer questions without pressure.
          </p>
        </div>
      </section>

      <section className="section-pad surface-paper">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            An in-office, energy-based procedure
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">What is Votiva?</h2>
          <p className="mt-4 max-w-3xl text-ink-soft">
            Votiva uses a temperature-controlled radiofrequency applicator called FormaV to warm
            vaginal or vulvar tissue. It is a nonsurgical, elective procedure performed in the
            office. The technology is intended to support tissue quality and comfort for selected
            intimate-wellness concerns — not a replacement for pelvic-floor therapy or surgery when
            those are indicated.
          </p>
        </div>
      </section>

      <section className="section-pad surface-white">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            Begin with the concern — not the device
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">
            Reasons patients start the conversation
          </h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            These symptoms can have different causes. A medical evaluation helps determine whether
            Votiva, another treatment, or further evaluation may be appropriate.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {concerns.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-[var(--line)] bg-white p-6"
              >
                <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-ink-soft">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad surface-paper">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            Physician-guided care
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">Why an evaluation matters</h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            Dryness, pain, leakage, and tissue changes are not all treated the same way. Before
            recommending an elective procedure, we consider other possible causes and whether a
            different approach may better address your concern.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {whyEval.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[var(--line)] bg-white p-5">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad surface-soft">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">What to expect</p>
          <h2 className="font-display mt-2 text-3xl text-ink">
            A private, individualized treatment experience
          </h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            If Votiva is appropriate and you choose to proceed, we will explain the recommended plan
            before treatment begins.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {experience.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[var(--line)] bg-white p-5">
                <p className="text-sm font-semibold text-teal">{item.n}</p>
                <h3 className="mt-2 font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad surface-white">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 md:p-8">
            <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
              Safety starts with an honest history
            </p>
            <h2 className="font-display mt-2 text-2xl text-ink">Tell us before treatment</h2>
            <p className="mt-4 text-ink-soft">
              Please share if you are pregnant or may be pregnant, have an active infection or
              unexplained bleeding, use an implanted medical device, have an IUD, recently had pelvic
              surgery, or have another condition that could affect candidacy. Your history helps us
              keep care appropriate and safe.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 md:p-8">
            <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
              Clear expectations
            </p>
            <h2 className="font-display mt-2 text-2xl text-ink">Votiva is an elective service</h2>
            <p className="mt-4 text-ink-soft">
              Insurance generally does not cover elective intimate-wellness treatment. We will
              explain current pricing and the proposed number of sessions before you decide. A
              consultation does not obligate you to proceed. Call{" "}
              <a className="font-semibold text-teal hover:underline" href={site.phoneHref}>
                {site.phone}
              </a>{" "}
              for current pricing.
            </p>
          </div>
        </div>
      </section>

      <Faq items={faqs} title="What patients often want to know" />
      <CtaBanner
        title="Let’s talk about what you are experiencing"
        text="You deserve clear answers and options grounded in your health — not pressure or promises."
        primaryLabel="Request a Consultation"
      />
    </>
  );
}
