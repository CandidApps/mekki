import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gynecologic Procedures and Surgeries in Libertyville, IL | Dr. Yasir Mekki",
  description:
    "Gynecologic procedures and surgeries in Libertyville with Dr. Yasir A. Mekki — office procedures, surgical consultation, and minimally invasive options for fibroids, bleeding, cysts, and endometriosis.",
  alternates: { canonical: "/gynecologic-surgery" },
};

const reviewTopics = [
  {
    n: "01",
    title: "Medical history",
    text: "Health conditions such as high blood pressure, diabetes, thyroid concerns, bleeding disorders, or mental health needs — and how they are currently managed.",
  },
  {
    n: "02",
    title: "Medications & supplements",
    text: "Prescription medicines, over-the-counter products, vitamins, and herbal supplements. Please talk with us before stopping a prescribed medication.",
  },
  {
    n: "03",
    title: "Gynecologic & surgical history",
    text: "Prior pregnancies, deliveries, gynecologic surgeries, fibroids, cysts, endometriosis, menstrual cycles, and any symptoms that brought you in.",
  },
  {
    n: "04",
    title: "Imaging & testing",
    text: "Ultrasound, laboratory work, Pap or biopsy results, and whether additional evaluation is appropriate before a procedure.",
  },
  {
    n: "05",
    title: "Fertility & treatment goals",
    text: "Whether you hope to become pregnant, prefer to preserve the uterus when possible, or want the most definitive option available for your condition.",
  },
  {
    n: "06",
    title: "Everyday recovery",
    text: "Work, caregiving, activity limits, time off, and what recovery may look like after an office procedure versus hospital-based surgery.",
  },
];

const firstSteps = [
  {
    n: "1",
    title: "Gather your records",
    text: "Bring prior imaging, operative reports, pathology, and recent lab or Pap results if you have them.",
  },
  {
    n: "2",
    title: "List medications and supplements",
    text: "Include doses when you can. Some medicines affect bleeding, anesthesia, or healing and should be reviewed before a procedure.",
  },
  {
    n: "3",
    title: "Write down what matters to you",
    text: "Bring questions about alternatives, recovery, fertility, timing, or anything making you feel uncertain.",
  },
];

const faqs = [
  {
    question: "When should I schedule a consultation?",
    answer:
      "You can schedule whenever symptoms, imaging, or a prior visit suggest a procedure may help. A dedicated consultation gives time to review options, recovery, and personal goals before anything is scheduled.",
  },
  {
    question: "Do I need testing before a procedure or surgery?",
    answer:
      "Not everyone needs the same tests. Based on your history, we may review ultrasound, laboratory work, cervical screening, or other evaluation when it will change the plan.",
  },
  {
    question: "Is surgery always the next step?",
    answer:
      "No. Many conditions can be watched, treated with medication, or addressed with an office procedure. Surgery is considered when it is the most appropriate option for your diagnosis and goals.",
  },
  {
    question: "What is minimally invasive gynecologic surgery?",
    answer:
      "Minimally invasive approaches use smaller incisions or vaginal techniques when appropriate and may offer a faster recovery for selected patients compared with open surgery.",
  },
  {
    question: "When is a hysterectomy recommended?",
    answer:
      "Hysterectomy may be considered for severe fibroids, persistent bleeding, or other conditions after less invasive options are reviewed. Decisions are individualized.",
  },
];

export default function GynecologicSurgeryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gynecologic procedures & surgeries · Libertyville, IL"
        title="Understanding your options can help you feel more prepared"
        description="Whether you need an in-office procedure or are considering surgery, our team at Alliance OB/GYN is here to listen, answer questions, and help you take thoughtful next steps."
        ctaLabel="Request a Consultation"
      />

      <section className="section-pad pt-0">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-ink-soft">
            <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
              You do not need a perfect plan
            </p>
            <h2 className="font-display text-3xl text-ink">Come with your questions—not all the answers.</h2>
            <p>
              Every path to treatment is different. We focus on what is relevant to your health, your
              timing, and your goals without judgment or pressure.
            </p>
            <p>
              A visit before a procedure gives us time to review the condition being treated, make
              sure your current care still fits your needs, and discuss options that could be
              helpful — including observation, medication, office procedures, or surgery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/fibroids" className="btn btn-secondary">
                Fibroid Treatment
              </Link>
              <Link href="/abnormal-bleeding" className="btn btn-secondary">
                Abnormal Bleeding
              </Link>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6">
            <h2 className="font-display text-2xl text-ink">Conditions & procedures</h2>
            <ul className="mt-4 space-y-2 text-ink-soft">
              <li>Office-based gynecologic procedures</li>
              <li>Minimally invasive gynecologic surgery</li>
              <li>Laparoscopic surgery consultation</li>
              <li>Hysterectomy counseling and surgery</li>
              <li>Fibroid treatment</li>
              <li>Endometriosis treatment planning</li>
              <li>Ovarian cyst treatment</li>
              <li>Abnormal bleeding procedures</li>
              <li>Pelvic surgery evaluation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">Your visit, made useful</p>
          <h2 className="font-display mt-2 text-3xl text-ink">What we may review together</h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            The conversation is personalized. Not every patient needs every test or procedure, and
            recommendations depend on your history.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviewTopics.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-5 border border-[var(--line)]">
                <p className="text-sm font-semibold text-teal">{item.n}</p>
                <h3 className="mt-2 font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">Simple first steps</p>
          <h2 className="font-display mt-2 text-3xl text-ink">You can begin before your appointment</h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            Small, realistic actions matter more than trying to make everything perfect at once.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {firstSteps.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-5 border border-[var(--line)]">
                <p className="text-sm font-semibold text-teal">{item.n}</p>
                <h3 className="mt-2 font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6">
            <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
              Help us understand the full picture
            </p>
            <h2 className="font-display mt-2 text-2xl text-ink">What to bring</h2>
            <ul className="mt-4 space-y-2 text-ink-soft">
              <li>A medication and supplement list</li>
              <li>Prior imaging, operative reports, or pathology, if available</li>
              <li>Details from prior pregnancies or gynecologic surgeries</li>
              <li>Recent Pap, biopsy, or laboratory results</li>
              <li>Your questions, priorities, and timeline</li>
            </ul>
          </div>
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6">
            <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
              Coordinated when needed
            </p>
            <h2 className="font-display mt-2 text-2xl text-ink">Some plans benefit from extra support</h2>
            <p className="mt-4 text-ink-soft">
              If your history suggests that specialized guidance or hospital-based surgery may be
              helpful, we can discuss the next step and coordinate care. This may include additional
              imaging, a fertility-preserving approach, or surgery at an affiliated hospital.
            </p>
            <p className="mt-4 font-semibold text-ink">You may want to schedule a consultation if you:</p>
            <ul className="mt-3 space-y-2 text-ink-soft">
              <li>Have fibroids, cysts, endometriosis, or abnormal bleeding</li>
              <li>Were told a procedure or hysterectomy may be needed</li>
              <li>Want to understand minimally invasive options</li>
              <li>Have questions about fertility, recovery, or alternatives to surgery</li>
              <li>Need a second look at imaging or a prior recommendation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-site max-w-3xl">
          <h2 className="font-display text-3xl text-ink">Surgery is not the only path</h2>
          <p className="mt-4 text-ink-soft">
            If you already have a diagnosis, you did not miss your chance to ask questions. Keep
            taking prescribed medication unless your clinician advises otherwise, and bring your
            concerns to your consultation. We will review whether observation, an office procedure,
            or surgery is the most appropriate next step.
          </p>
        </div>
      </section>

      <Faq items={faqs} title="Clear answers before a procedure" />
      <CtaBanner
        title="Let’s plan the next step together"
        text="Our team will meet you where you are and help turn uncertainty into a practical, personalized plan."
        primaryLabel="Request a Consultation"
      />
    </>
  );
}
