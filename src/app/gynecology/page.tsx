import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gynecology & Women’s Health in Libertyville, IL | Dr. Yasir Mekki",
  description:
    "Gynecologist care in Libertyville with Dr. Yasir A. Mekki — well-woman exams, Pap testing, abnormal bleeding, fibroids, menopause, and women’s health.",
  alternates: { canonical: "/gynecology" },
};

const faqs = [
  {
    question: "When should I see a gynecologist for heavy periods?",
    answer:
      "Seek care if bleeding soaks pads or tampons hourly, lasts longer than a week, causes anemia symptoms, or occurs after menopause.",
  },
  {
    question: "What should I expect at my first OB/GYN visit?",
    answer:
      "Expect a history review, discussion of concerns, and exam components based on age and need. Cervical screening frequency depends on guidelines and your results history.",
  },
  {
    question: "Do annual visits always include a Pap smear?",
    answer:
      "Not always. Well-woman visits and cervical cancer screening schedules are related but not identical. Your gynecologist will personalize screening based on current guidelines.",
  },
];

export default function GynecologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Gynecology · Libertyville, IL"
        title="Gynecology & Women’s Health in Libertyville, Illinois"
        description="Dr. Yasir A. Mekki provides gynecologist-led care for well-woman exams, contraceptive counseling, abnormal uterine bleeding, fibroids, pelvic pain, menopause, and preventive women’s health in Libertyville and Lake County."
        ctaLabel="Schedule a Gynecology Consultation"
      />

      <section className="section-pad pt-0">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-ink-soft">
            <p>
              Gynecology focuses on female reproductive health — from routine exams to complex
              conditions. Patients visit Alliance OB/GYN for preventive care, new symptoms, and
              long-term management with a board certified obstetrician gynecologist who explains
              options clearly.
            </p>
            <p>
              Care is available in English, Arabic, and Spanish. When surgery may help, Dr. Mekki
              also provides consultation as an experienced gynecologic surgeon.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/abnormal-bleeding" className="btn btn-secondary">
                Abnormal Bleeding
              </Link>
              <Link href="/fibroids" className="btn btn-secondary">
                Fibroids
              </Link>
              <Link href="/menopause" className="btn btn-secondary">
                Menopause
              </Link>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6">
            <h2 className="font-display text-2xl text-ink">Common gynecology services</h2>
            <ul className="mt-4 columns-1 gap-x-8 space-y-2 text-ink-soft sm:columns-2">
              {[
                "Annual well-woman exams",
                "Pap testing & cervical cancer screening",
                "Pelvic exams",
                "Breast health evaluations",
                "Abnormal uterine bleeding",
                "Heavy periods",
                "Fibroids",
                "Endometriosis concerns",
                "Ovarian cysts",
                "Pelvic pain",
                "Birth control & IUDs",
                "Menopause care",
                "Hormone replacement therapy counseling",
                "Gynecologic surgery referral/planning",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Faq items={faqs} />
      <CtaBanner
        title="Schedule gynecology care in Libertyville"
        primaryLabel="Schedule a Gynecology Consultation"
      />
    </>
  );
}
