import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Menopause Care & Hormone Therapy in Libertyville, IL",
  description:
    "Menopause care in Libertyville with Dr. Yasir A. Mekki — symptom relief, hormone replacement therapy counseling, and women’s health support.",
  alternates: { canonical: "/menopause" },
};

export default function MenopausePage() {
  return (
    <>
      <PageHero
        eyebrow="Menopause"
        title="Menopause Care in Libertyville, Illinois"
        description="Hot flashes, sleep changes, mood shifts, and vaginal dryness are common — and treatable. Dr. Yasir A. Mekki helps women navigate perimenopause and menopause with individualized plans."
      />
      <section className="section-pad pt-0">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-ink-soft">
            <p>
              Menopause typically occurs between ages 45 and 55. The years before menopause often
              bring hormonal fluctuations that affect comfort, intimacy, and daily energy. Care at
              Alliance OB/GYN may include lifestyle strategies, non-hormonal medications, or hormone
              replacement therapy when appropriate.
            </p>
            <Link href="/gynecology" className="btn btn-secondary">
              Gynecology & Women’s Health
            </Link>
          </div>
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6">
            <h2 className="font-display text-2xl text-ink">Symptoms we commonly address</h2>
            <ul className="mt-4 space-y-2 text-ink-soft">
              <li>Hot flashes and night sweats</li>
              <li>Sleep disturbance</li>
              <li>Vaginal dryness and discomfort</li>
              <li>Mood changes and fatigue</li>
              <li>Irregular periods in perimenopause</li>
              <li>Decreased libido</li>
            </ul>
          </div>
        </div>
      </section>
      <CtaBanner title="Schedule a menopause consultation" />
    </>
  );
}
