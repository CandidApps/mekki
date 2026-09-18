import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gynecologic Procedures & Surgery in Libertyville, IL | Dr. Yasir Mekki",
  description:
    "Gynecologic procedures and surgery in Libertyville with Dr. Yasir A. Mekki — in-office care, hysteroscopy, laparoscopic surgery, fibroids, endometriosis, and hysterectomy counseling.",
  alternates: { canonical: "/gynecologic-surgery" },
};

const officeProcedures = [
  {
    title: "Colposcopy and cervical biopsy",
    text: "A closer look after an abnormal cervical screening result.",
  },
  {
    title: "Cryotherapy",
    text: "A controlled freezing treatment for selected areas of abnormal tissue.",
  },
  {
    title: "Endometrial biopsy",
    text: "A small sample of the uterine lining to help explain abnormal bleeding.",
  },
  {
    title: "IUD insertion and removal",
    text: "Birth control care with preparation and aftercare guidance.",
  },
  {
    title: "Contraceptive implant care",
    text: "Insertion or removal of a small arm implant.",
  },
  {
    title: "Vulvar biopsy or minor lesion treatment",
    text: "Evaluation of a skin change, irritation, or area of concern.",
  },
];

const flexibleProcedures = [
  {
    title: "Hysteroscopy, with or without D&C",
    text: "A slender camera is used to look inside the uterus; tissue may also be sampled or removed when needed.",
  },
  {
    title: "Endometrial ablation",
    text: "Treatment for selected patients with heavy bleeding who do not plan a future pregnancy.",
  },
];

const hospitalProcedures = [
  {
    title: "Laparoscopic surgery",
    text: "Small-incision surgery when a minimally invasive approach is appropriate.",
  },
  {
    title: "Ovarian cyst or endometriosis surgery",
    text: "Treatment planned around symptoms and reproductive goals.",
  },
  {
    title: "Myomectomy",
    text: "Removal of fibroids while preserving the uterus.",
  },
  {
    title: "Hysterectomy",
    text: "Removal of the uterus, with the safest appropriate approach discussed first.",
  },
  {
    title: "Permanent contraception",
    text: "Hospital-based tubal sterilization for patients certain they do not want a future pregnancy.",
  },
];

const reasons = [
  "Heavy or irregular bleeding",
  "Fibroids",
  "Ovarian cysts",
  "Endometriosis",
  "Pelvic pain or pressure",
  "Abnormal Pap test results",
  "Uterine polyps",
  "Contraception needs",
];

const steps = [
  {
    n: "1",
    title: "We listen first",
    text: "Tell us what you are experiencing and how it is affecting your life.",
  },
  {
    n: "2",
    title: "We review your choices",
    text: "You receive a clear explanation of alternatives, benefits, risks, and what happens next.",
  },
  {
    n: "3",
    title: "We plan together",
    text: "Your care plan reflects your health, priorities, and future pregnancy goals.",
  },
  {
    n: "4",
    title: "We stay connected",
    text: "Before and after a procedure, our team is here to answer questions and support recovery.",
  },
];

const faqs = [
  {
    question: "Will I need surgery?",
    answer:
      "Not necessarily. Many concerns can be managed with monitoring, medication, or a minor office procedure. Surgery is recommended only after your diagnosis, symptoms, preferences, and other options are carefully reviewed.",
  },
  {
    question: "Will an in-office procedure hurt?",
    answer:
      "Experiences vary by procedure and by person. We explain what you may feel, discuss comfort measures, and encourage you to tell us about past difficult exams or anxiety so we can plan with care.",
  },
  {
    question: "How long will recovery take?",
    answer:
      "Recovery can range from returning to normal activity the same day after a minor procedure to several weeks after major surgery. You will receive instructions tailored to your procedure, work, home responsibilities, and health.",
  },
  {
    question: "Can minimally invasive surgery be an option for me?",
    answer:
      "Minimally invasive approaches may offer smaller incisions and a shorter recovery for some patients. Dr. Mekki will review your condition, prior surgeries, overall health, and goals to determine the safest appropriate approach.",
  },
];

export default function GynecologicSurgeryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gynecologic procedures & surgery · Libertyville, IL"
        title="Thoughtful care for sensitive gynecologic concerns"
        description="When a gynecologic problem affects your comfort, health, or daily life, you deserve to feel heard. Dr. Yasir A. Mekki and the Alliance OB/GYN team explain what may be causing your symptoms and which treatment options fit your needs — from monitoring and medication to in-office procedures or hospital-based surgery in Libertyville and Lake County."
        ctaLabel="Request a Consultation"
      />

      <section className="section-pad pt-0 surface-white">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            Care centered on you
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink md:text-4xl">
            Start with the least invasive option that makes sense
          </h2>
          <p className="mt-4 max-w-3xl text-ink-soft">
            Not every concern requires surgery. Your visit begins with listening, an exam when
            needed, and a review of your symptoms, test results, health history, and future
            pregnancy goals. Together, we can consider monitoring, medication, an in-office
            procedure, or hospital-based surgery.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/fibroids" className="btn btn-secondary">
              Fibroid Treatment
            </Link>
            <Link href="/abnormal-bleeding" className="btn btn-secondary">
              Abnormal Bleeding
            </Link>
            <Link href="/contraception" className="btn btn-secondary">
              Contraception
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad surface-paper">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            Your care options
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink md:text-4xl">
            Procedures in the office and hospital
          </h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            Some procedures have more than one safe setting. The choice between our office and the
            hospital is personalized around your medical needs, comfort, anesthesia needs, and
            insurance approval.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <article className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 md:p-7">
              <p className="text-sm font-semibold text-teal">01 · In-office care</p>
              <h3 className="font-display mt-2 text-2xl text-ink">
                Convenient procedures with personal support
              </h3>
              <p className="mt-3 text-sm text-ink-soft">
                Many diagnostic and minor procedures can be completed in our office, often with
                little or no downtime.
              </p>
              <ul className="mt-5 space-y-4">
                {officeProcedures.map((item) => (
                  <li key={item.title}>
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p className="mt-1 text-sm text-ink-soft">{item.text}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-ink-soft">
                Available procedures and comfort options are discussed before your visit.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 md:p-7">
              <p className="text-sm font-semibold text-teal">02 · Office or hospital</p>
              <h3 className="font-display mt-2 text-2xl text-ink">
                Flexible care based on your needs
              </h3>
              <p className="mt-3 text-sm text-ink-soft">
                These procedures may be performed in our office or at the hospital. We recommend the
                setting that is appropriate for you and work with your insurance plan when approval
                is required.
              </p>
              <ul className="mt-5 space-y-4">
                {flexibleProcedures.map((item) => (
                  <li key={item.title}>
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p className="mt-1 text-sm text-ink-soft">{item.text}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-teal/15 bg-teal-soft/50 p-4">
                <p className="font-semibold text-teal-deep">Comfort and anesthesia options</p>
                <p className="mt-2 text-sm text-ink-soft">
                  For select office procedures, we coordinate with an experienced anesthesia team
                  when appropriate. Availability depends on the procedure, your medical needs, and
                  insurance approval.
                </p>
              </div>
              <p className="mt-4 text-sm font-semibold text-ink">How the setting is chosen</p>
              <ul className="mt-2 space-y-1 text-sm text-ink-soft">
                <li>Your health and procedure needs</li>
                <li>Your comfort and anesthesia needs</li>
                <li>Insurance coverage and approval</li>
              </ul>
            </article>

            <article className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 md:p-7">
              <p className="text-sm font-semibold text-teal">03 · Hospital-based care</p>
              <h3 className="font-display mt-2 text-2xl text-ink">
                Surgery planned carefully around your goals
              </h3>
              <p className="mt-3 text-sm text-ink-soft">
                When surgery is the best next step, Dr. Mekki reviews the approach, benefits, risks,
                hospital experience, and recovery with you in clear language.
              </p>
              <ul className="mt-5 space-y-4">
                {hospitalProcedures.map((item) => (
                  <li key={item.title}>
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p className="mt-1 text-sm text-ink-soft">{item.text}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-[var(--line)] bg-white p-6 md:p-8">
            <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
              A plan you understand
            </p>
            <h3 className="font-display mt-2 text-2xl text-ink">
              Three questions we help you answer
            </h3>
            <ol className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                "Why is this procedure being recommended?",
                "What are the alternatives, including waiting or medication?",
                "What should I expect for comfort, cost, time off, and recovery?",
              ].map((question, index) => (
                <li
                  key={question}
                  className="rounded-2xl border border-[var(--line)] bg-[var(--paper)]/70 p-5"
                >
                  <p className="text-sm font-semibold text-teal">0{index + 1}</p>
                  <p className="mt-2 font-semibold text-ink">{question}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-pad surface-white">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            Reasons patients seek care
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">
            You do not have to simply live with your symptoms
          </h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            Bleeding, pelvic pain, pressure, or uncertainty can be exhausting. We take these
            concerns seriously and work with you to find answers.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="rounded-2xl border border-[var(--line)] bg-white px-5 py-4 font-medium text-ink"
              >
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad surface-paper">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">What to expect</p>
          <h2 className="font-display mt-2 text-3xl text-ink">Clear guidance at every step</h2>
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

      <Faq items={faqs} title="Questions patients often ask" />
      <CtaBanner
        title="Let’s talk about what you are going through"
        text="A consultation is a conversation — not a commitment to a procedure. Bring your questions, and we will take the next step together."
        primaryLabel="Request a Consultation"
      />
    </>
  );
}
