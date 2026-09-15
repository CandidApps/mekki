import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "High-Risk Pregnancy Care in Lake County, IL | Dr. Yasir Mekki",
  description:
    "High-risk pregnancy care in Libertyville and Lake County with obstetrician Dr. Yasir A. Mekki — closer monitoring for medical and pregnancy-related complications.",
  alternates: { canonical: "/high-risk-pregnancy" },
};

const faqs = [
  {
    question: "Does Dr. Mekki treat high-risk pregnancies?",
    answer:
      "Yes. High-risk pregnancy experience is part of obstetrics care at Alliance OB/GYN, with closer monitoring when needed.",
  },
  {
    question: "What makes a pregnancy high risk?",
    answer:
      "Chronic conditions, multiples, prior complications, or issues that develop during pregnancy such as gestational diabetes or hypertension can increase risk and monitoring needs.",
  },
];

export default function HighRiskPregnancyPage() {
  return (
    <>
      <PageHero
        eyebrow="High-Risk Pregnancy · Lake County, IL"
        title="High-Risk Pregnancy Care in Libertyville & Lake County"
        description="Dr. Yasir A. Mekki provides obstetric care with high-risk pregnancy experience — closer visits, additional testing, and coordinated planning when medical history or pregnancy complications require extra attention."
        ctaLabel="Schedule a Pregnancy Appointment"
      />

      <section className="section-pad pt-0">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-ink-soft">
            <p>
              Some pregnancies need more frequent monitoring because of pre-existing conditions such
              as high blood pressure, diabetes, or autoimmune disease. Others become higher risk when
              gestational diabetes, preeclampsia, growth concerns, or multiples develop.
            </p>
            <p>
              Alliance OB/GYN supports patients through additional ultrasounds, labs, and delivery
              planning while keeping communication clear in English, Arabic, or Spanish.
            </p>
            <Link href="/obstetrics" className="btn btn-secondary">
              Obstetrics & Pregnancy Care
            </Link>
          </div>
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6">
            <h2 className="font-display text-2xl text-ink">When closer monitoring helps</h2>
            <ul className="mt-4 space-y-2 text-ink-soft">
              <li>Pre-existing hypertension or diabetes</li>
              <li>Gestational diabetes or pregnancy hypertension</li>
              <li>Multiple pregnancy (twins or more)</li>
              <li>Prior preterm birth or pregnancy loss</li>
              <li>Fetal growth or structural concerns</li>
              <li>Advanced maternal age with additional risk factors</li>
            </ul>
          </div>
        </div>
      </section>

      <Faq items={faqs} />
      <CtaBanner primaryLabel="Schedule a Pregnancy Appointment" />
    </>
  );
}
