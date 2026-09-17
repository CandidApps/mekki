import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gynecology & Women’s Health in Libertyville, IL | Dr. Yasir Mekki",
  description:
    "Gynecologist care in Libertyville with Dr. Yasir A. Mekki — well-woman exams, period concerns, pelvic pain, birth control, menopause, and women’s health.",
  alternates: { canonical: "/gynecology" },
};

const concerns = [
  {
    href: "/patient-resources",
    title: "Preventive & well-woman care",
    text: "Routine visits, age-appropriate screening, breast and pelvic health, and time to ask questions about your overall well-being.",
  },
  {
    href: "/abnormal-bleeding",
    title: "Periods, bleeding & hormones",
    text: "Heavy, painful, irregular, or missed periods; bleeding between periods; PCOS concerns; and other cycle changes.",
  },
  {
    href: "/fibroids",
    title: "Pelvic pain & pressure",
    text: "Help finding the cause of persistent pain, painful sex, pressure, fibroids, ovarian cysts, or possible endometriosis.",
  },
  {
    href: "/contraception",
    title: "Birth control & family planning",
    text: "Judgment-free conversations about contraception, IUDs, reproductive goals, and preparing for a future pregnancy.",
  },
  {
    href: "/votiva",
    title: "Vaginal, vulvar & sexual health",
    text: "Confidential care for irritation, discharge, infections, STI screening, dryness, skin changes, or sexual discomfort.",
  },
  {
    href: "/menopause",
    title: "Perimenopause & menopause",
    text: "Individualized support for hot flashes, sleep changes, mood concerns, vaginal symptoms, and hormone therapy questions.",
  },
];

const respectPoints = [
  {
    title: "We listen before making assumptions",
    text: "Your symptoms and their effect on your life are part of the medical picture.",
  },
  {
    title: "We explain what comes next",
    text: "We discuss why an exam, test, or treatment may help before moving forward.",
  },
  {
    title: "We welcome questions",
    text: "You deserve plain-language answers and time to understand your choices.",
  },
  {
    title: "We make decisions together",
    text: "Your health history, priorities, and reproductive goals help shape the plan.",
  },
];

const stages = [
  {
    eyebrow: "Teens & young adults",
    title: "A comfortable place to begin",
    text: "Education about periods and body changes, private questions, preventive care, and contraception when needed. A first visit does not automatically mean a pelvic exam.",
  },
  {
    eyebrow: "Reproductive years",
    title: "Care that fits real life",
    text: "Wellness, cycle concerns, contraception, fertility questions, pregnancy planning, pelvic pain, and treatment options that respect your goals.",
  },
  {
    eyebrow: "Midlife & beyond",
    title: "Guidance for changing needs",
    text: "Perimenopause and menopause support, bleeding changes, sexual and vaginal health, bone-health conversations, and continued preventive care.",
  },
];

const faqs = [
  {
    question: "What happens at a gynecology visit?",
    answer:
      "We begin by discussing your health history, concerns, medications, and goals. Any exam, screening, or testing is based on your age, symptoms, history, and what is appropriate for that visit.",
  },
  {
    question: "Does every visit include a pelvic exam or Pap test?",
    answer:
      "No. A well-woman visit and cervical cancer screening are not always the same thing. We explain what is recommended for you and why before an exam or test.",
  },
  {
    question: "What if pelvic exams are difficult for me?",
    answer:
      "Please tell us. Anxiety, pain, past experiences, and personal boundaries matter. We can talk through the visit, explain each step, and discuss ways to make care more comfortable.",
  },
  {
    question: "Should I make an appointment if I am unsure something is wrong?",
    answer:
      "Yes. You do not need to diagnose yourself first. If a symptom is new, persistent, worrying, or affecting daily life, a conversation can help determine whether evaluation is needed.",
  },
];

export default function GynecologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Gynecology & women’s health · Libertyville, IL"
        title="Care that starts with listening"
        description="Your symptoms, questions, and concerns deserve thoughtful attention. Dr. Yasir A. Mekki provides personalized gynecology and women’s health care in Libertyville for everyday needs, new changes, and ongoing conditions — with clear explanations in English, Arabic, and Spanish."
        ctaLabel="Schedule a Gynecology Consultation"
      />

      <section className="section-pad pt-0 surface-white">
        <div className="container-site max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            Your concern is enough
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">
            You do not need to wait until something feels unbearable
          </h2>
          <p className="mt-4 text-ink-soft">
            Periods that interrupt your life, pelvic discomfort, changes in your body, questions
            about birth control, or simply wanting to stay well are all valid reasons to make an
            appointment. We meet you where you are.
          </p>
        </div>
      </section>

      <section className="section-pad surface-paper">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            What brings you in?
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">
            Care for the concerns women are navigating now
          </h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            Choose the area that feels closest to what you are experiencing. You do not need to know
            the medical name for it before you call.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {concerns.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-[1.5rem] border border-[var(--line)] bg-white p-6 transition hover:border-teal/40 hover:shadow-[var(--shadow)]"
              >
                <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-ink-soft">{item.text}</p>
                <span className="mt-4 inline-block font-semibold text-teal">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad surface-white">
        <div className="container-site grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
              A more respectful visit
            </p>
            <h2 className="font-display mt-2 text-3xl text-ink">
              You should feel informed, not rushed
            </h2>
            <p className="mt-4 text-ink-soft">
              Gynecologic care can feel deeply personal. Whether this is your first visit, you have
              had a difficult healthcare experience, or you are worried your symptoms will be
              dismissed, you are welcome to tell us what you need.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {respectPoints.map((item) => (
              <li key={item.title} className="rounded-2xl border border-[var(--line)] bg-white p-5">
                <p className="font-semibold text-ink">✓ {item.title}</p>
                <p className="mt-2 text-sm text-ink-soft">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad surface-paper">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            Care that changes with you
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">Support through every stage</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {stages.map((stage) => (
              <article
                key={stage.title}
                className="rounded-[1.5rem] border border-[var(--line)] bg-white p-6"
              >
                <p className="text-sm font-semibold text-teal">{stage.eyebrow}</p>
                <h3 className="font-display mt-2 text-2xl text-ink">{stage.title}</h3>
                <p className="mt-3 text-ink-soft">{stage.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad surface-soft">
        <div className="container-site rounded-[1.75rem] border border-[var(--line)] bg-white p-6 md:p-8">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            Complete gynecologic care
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">From answers to treatment</h2>
          <p className="mt-4 max-w-3xl text-ink-soft">
            We begin with a conversation and recommend only the evaluation or treatment that makes
            sense for you. When additional care is needed — including gynecologic procedures or
            surgery — we guide you through the options with clear next steps.
          </p>
          <ul className="mt-6 columns-1 gap-x-8 space-y-2 text-ink-soft sm:columns-2 lg:columns-3">
            {[
              "Annual wellness visits",
              "Pap & HPV screening",
              "Breast health evaluation",
              "Pelvic examination",
              "Ultrasound evaluation",
              "Contraception & IUDs",
              "STI testing",
              "Abnormal bleeding care",
              "Fibroid evaluation",
              "Endometriosis concerns",
              "Ovarian cysts",
              "Menopause care",
            ].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link href="/gynecologic-surgery" className="btn btn-secondary mt-8">
            Explore procedures & surgery
          </Link>
        </div>
      </section>

      <Faq items={faqs} title="It is okay to ask" />
      <CtaBanner
        title="Bring the questions you have been carrying"
        text="Whether you need a routine visit or answers about a change in your body, our Libertyville team is ready to listen and help you move forward."
        primaryLabel="Schedule a Gynecology Consultation"
      />
    </>
  );
}
