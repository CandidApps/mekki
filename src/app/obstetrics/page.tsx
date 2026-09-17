import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Obstetrics & Pregnancy Care in Libertyville, IL | Dr. Yasir Mekki",
  description:
    "Obstetrics and pregnancy care in Libertyville with Dr. Yasir A. Mekki — prenatal visits, ultrasound, high-risk monitoring, and postpartum support for Lake County patients.",
  alternates: { canonical: "/obstetrics" },
};

const faqs = [
  {
    question: "When should I schedule my first prenatal appointment?",
    answer:
      "Most patients schedule between weeks 8 and 10. Call sooner if you have medical conditions or prior pregnancy complications.",
  },
  {
    question: "What hospital does Dr. Mekki deliver at?",
    answer: `Hospital affiliations include ${site.hospitals.join(" and ")}. Confirm your delivery hospital when you begin prenatal care.`,
  },
  {
    question: "Do you offer pregnancy ultrasound in the office?",
    answer:
      "Yes. Alliance OB/GYN provides in-office ultrasound to monitor pregnancy and support timely prenatal decisions.",
  },
];

export default function ObstetricsPage() {
  return (
    <>
      <PageHero
        eyebrow="Obstetrics · Libertyville, IL"
        title="Obstetrics & Pregnancy Care in Libertyville, Illinois"
        description="Dr. Yasir A. Mekki provides obstetrician-led prenatal care, pregnancy ultrasound, laboratory screening, labor planning, and postpartum support for patients in Libertyville and throughout Lake County."
        ctaLabel="Schedule a Pregnancy Appointment"
      />

      <section className="section-pad pt-0 surface-white">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-ink-soft">
            <p>
              Obstetrics covers pregnancy, childbirth planning, and postpartum care. At Alliance
              OB/GYN, prenatal visits help monitor your health and your baby’s development through
              exams, measurements, ultrasounds, and testing — with guidance for common symptoms and
              preparation for delivery.
            </p>
            <p>
              Whether this is your first pregnancy or you are growing your family, Dr. Mekki offers
              personalized obstetric care in English, Arabic, and Spanish.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/high-risk-pregnancy" className="btn btn-secondary">
                High-Risk Pregnancy Care
              </Link>
              <Link href="/preconception" className="btn btn-secondary">
                Preconception Visits
              </Link>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6">
            <h2 className="font-display text-2xl text-ink">Obstetric services</h2>
            <ul className="mt-4 space-y-3 text-ink-soft">
              <li>Routine low-risk pregnancy care</li>
              <li>High-risk pregnancy monitoring</li>
              <li>Multiple pregnancy (twins) care</li>
              <li>In-office pregnancy ultrasound</li>
              <li>Prenatal laboratory and genetic screening options</li>
              <li>Labor, delivery planning, and cesarean care when needed</li>
              <li>Postpartum care</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad surface-paper">
        <div className="container-site">
          <h2 className="font-display text-3xl text-ink">What prenatal care includes</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Ongoing monitoring",
                text: "Regular visits to track blood pressure, growth, fetal wellbeing, and maternal symptoms.",
              },
              {
                title: "Ultrasound & testing",
                text: "Imaging and labs that guide screening decisions and reassure you about development.",
              },
              {
                title: "Delivery planning",
                text: "Discussion of birth preferences, warning signs, and hospital affiliation details.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-teal-soft/40 p-5">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq items={faqs} />
      <CtaBanner
        title="Schedule pregnancy care in Libertyville"
        primaryLabel="Schedule a Pregnancy Appointment"
      />
    </>
  );
}
