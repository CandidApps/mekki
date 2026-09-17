import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "First Steps for Fertility Concerns in Libertyville, IL | Dr. Yasir Mekki",
  description:
    "Initial infertility evaluation in Libertyville with Dr. Yasir A. Mekki — first steps for fertility concerns and referral to reproductive endocrinology when needed.",
  alternates: { canonical: "/infertility" },
};

const timingCards = [
  {
    eyebrow: "Under 35",
    title: "After 12 months",
    text: "Consider an evaluation after one year of regular attempts to conceive without pregnancy.",
  },
  {
    eyebrow: "Ages 35–40",
    title: "After 6 months",
    text: "Because fertility changes with age, an earlier evaluation is generally recommended.",
  },
  {
    eyebrow: "Over 40",
    title: "Talk with us now",
    text: "A more immediate conversation may help you understand your options and timeline.",
  },
];

const soonerReasons = [
  "Irregular or absent periods",
  "Known or suspected PCOS or endometriosis",
  "Prior pelvic surgery or infection",
  "Recurrent pregnancy loss",
  "Known concerns affecting either partner",
];

const steps = [
  {
    n: "1",
    title: "Listen & understand",
    text: "We discuss cycle patterns, pregnancy history, medical conditions, medications, prior testing, and your family-building goals.",
  },
  {
    n: "2",
    title: "Consider an initial evaluation",
    text: "When appropriate, first steps may include an exam, cycle or ovulation review, selected bloodwork, ultrasound, or discussion of evaluation for both partners.",
  },
  {
    n: "3",
    title: "Review what we know",
    text: "We explain the findings, what they may mean, and whether more specialized testing is recommended.",
  },
  {
    n: "4",
    title: "Refer when specialty care is needed",
    text: "If the concern requires advanced testing or treatment, we discuss referral to a reproductive endocrinology and infertility specialist.",
  },
];

const guidance = [
  {
    title: "Plain-language explanations",
    text: "We slow down and make room for your questions.",
  },
  {
    title: "Both partners may need evaluation",
    text: "When applicable, we may recommend that a partner seek evaluation through an appropriate clinician.",
  },
  {
    title: "Honest guidance",
    text: "We explain what can reasonably begin in our office and what requires specialty care.",
  },
  {
    title: "A supported referral",
    text: "If an infertility clinic is needed, we help you understand why and what to expect next.",
  },
];

const faqs = [
  {
    question: "How can Alliance OB/GYN help with fertility concerns?",
    answer:
      "We can begin with an OB/GYN evaluation when infertility is suspected. If more advanced testing or treatment is appropriate, we will explain why and discuss referral to a reproductive endocrinology and infertility specialist.",
  },
  {
    question: "Does an initial evaluation mean I will need IVF?",
    answer:
      "No. The purpose of the first evaluation is to review possible contributing factors and decide on the appropriate next step. IUI and IVF are advanced treatments provided through infertility specialists, not automatically required after a first visit.",
  },
  {
    question: "Should my partner be evaluated too?",
    answer:
      "When applicable, fertility evaluation often considers both partners because pregnancy can be affected by female, male, combined, or unexplained factors.",
  },
  {
    question: "What should I bring to my appointment?",
    answer:
      "Bring a medication list, relevant records or test results, menstrual-cycle information if available, and your questions. You do not need perfectly tracked data to begin.",
  },
  {
    question: "Will insurance cover the initial evaluation?",
    answer:
      "Coverage varies by plan and service. Contact your insurer about diagnostic infertility benefits. Some testing or specialist referrals may require approval.",
  },
];

export default function InfertilityPage() {
  return (
    <>
      <PageHero
        eyebrow="First steps for fertility concerns · Libertyville, IL"
        title="Wondering if it may be time for an infertility evaluation?"
        description="Our team at Alliance OB/GYN helps you take the first steps — listening to your concerns, reviewing your health history, considering an initial evaluation, and connecting you with a fertility specialist when advanced care is needed."
        ctaLabel="Request an OB/GYN Visit"
      />

      <section className="section-pad pt-0 surface-white">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
              Our role in your care
            </p>
            <h2 className="font-display mt-2 text-3xl text-ink">A familiar place to begin</h2>
            <p className="mt-4 text-ink-soft">
              We can begin with an OB/GYN assessment for suspected infertility. If advanced testing
              or treatment may be helpful, we will explain the next step and discuss a referral to a
              fertility specialist.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6">
            <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
              Your questions are valid
            </p>
            <h2 className="font-display mt-2 text-2xl text-ink">
              You do not need to diagnose infertility yourself
            </h2>
            <p className="mt-4 text-ink-soft">
              If pregnancy is taking longer than expected, your periods are irregular, or your
              history raises concerns, an OB/GYN visit can be a sensible first step.
            </p>
            <Link href="/preconception" className="btn btn-secondary mt-6">
              Preconception Planning
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad surface-paper">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            When to talk with us
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">
            You can reach out whenever you are concerned
          </h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            General timing guidelines can help, but your history matters. You do not need to wait if
            something feels off or you already know of a condition that may affect fertility.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {timingCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.5rem] border border-[var(--line)] bg-white p-6"
              >
                <p className="text-sm font-semibold text-teal">{card.eyebrow}</p>
                <h3 className="font-display mt-2 text-2xl text-ink">{card.title}</h3>
                <p className="mt-3 text-ink-soft">{card.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-[1.75rem] border border-[var(--line)] bg-white p-6 md:p-8">
            <p className="font-semibold text-ink">Reach out sooner if you have:</p>
            <ul className="mt-4 grid gap-2 text-ink-soft sm:grid-cols-2">
              {soonerReasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad surface-white">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">What to expect</p>
          <h2 className="font-display mt-2 text-3xl text-ink">
            The first steps at your OB/GYN office
          </h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            Not every patient needs every test. The exact starting point depends on your age, cycle
            history, health history, how long you have been trying, and any known concerns.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-[var(--line)] bg-white p-5">
                <p className="text-sm font-semibold text-teal">{step.n}</p>
                <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-ink-soft">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad surface-paper">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            Knowing when to refer
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">
            We help you reach the right level of care
          </h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            Some possible causes of infertility can be considered during an initial OB/GYN
            evaluation. Other situations are best evaluated by a reproductive endocrinology and
            infertility specialist. We will be clear about which path fits your situation.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {guidance.map((item) => (
              <li key={item.title} className="rounded-2xl border border-[var(--line)] bg-white p-5">
                <p className="font-semibold text-ink">✓ {item.title}</p>
                <p className="mt-2 text-sm text-ink-soft">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq items={faqs} title="Answers before your first visit" />
      <CtaBanner
        title="Let’s decide whether an initial evaluation is the right next step"
        text="Our OB/GYN team can listen to your concerns and discuss whether evaluation in our Libertyville office or referral to an infertility specialist is appropriate."
        primaryLabel="Request an OB/GYN Visit"
      />
    </>
  );
}
