import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Abnormal Uterine Bleeding Care in Libertyville, IL",
  description:
    "Evaluation and treatment for abnormal uterine bleeding and heavy periods in Libertyville with Dr. Yasir A. Mekki, OB/GYN and gynecologic surgeon.",
  alternates: { canonical: "/abnormal-bleeding" },
};

export default function AbnormalBleedingPage() {
  return (
    <>
      <PageHero
        eyebrow="Abnormal Bleeding"
        title="Abnormal Uterine Bleeding Care in Libertyville"
        description="Heavy, prolonged, irregular, or postmenopausal bleeding deserves a careful gynecologic evaluation. Dr. Yasir A. Mekki identifies causes and guides treatment options — including surgery when appropriate."
      />
      <section className="section-pad pt-0 surface-white">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6">
            <h2 className="font-display text-2xl text-ink">Possible causes</h2>
            <ul className="mt-4 space-y-2 text-ink-soft">
              <li>Hormonal imbalances</li>
              <li>Uterine polyps or fibroids</li>
              <li>Thyroid disorders</li>
              <li>Ovulatory dysfunction</li>
              <li>Cervical or uterine infections</li>
              <li>Perimenopause or menopause-related changes</li>
              <li>Rarely, precancerous or cancerous conditions</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-teal-deep">
              Note: Postmenopausal bleeding should always be evaluated promptly.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6">
            <h2 className="font-display text-2xl text-ink">Treatment options</h2>
            <ul className="mt-4 space-y-2 text-ink-soft">
              <li>Medication to regulate bleeding</li>
              <li>Hormonal therapy</li>
              <li>Observation and monitoring</li>
              <li>Office-based procedures</li>
              <li>Gynecologic surgery when needed</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/fibroids" className="btn btn-secondary">
                Fibroids
              </Link>
              <Link href="/gynecologic-surgery" className="btn btn-secondary">
                Gynecologic Procedures and Surgeries
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Faq
        items={[
          {
            question: "When should I see a gynecologist for heavy periods?",
            answer:
              "Seek care if bleeding is soaking protection hourly, lasting longer than seven days, causing dizziness or fatigue, or occurring after menopause.",
          },
        ]}
      />
      <CtaBanner />
    </>
  );
}
