import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Infertility Evaluation & Treatment in Libertyville, IL",
  description:
    "Infertility evaluation in Libertyville with Dr. Yasir A. Mekki — initial fertility testing and coordinated care with fertility specialists when needed.",
  alternates: { canonical: "/infertility" },
};

export default function InfertilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Infertility"
        title="Infertility Evaluation & Treatment in Libertyville, IL"
        description="Alliance OB/GYN helps evaluate fertility concerns with compassion and clarity, then partners with trusted fertility centers when advanced treatment is recommended."
      />
      <section className="section-pad pt-0">
        <div className="container-site max-w-3xl space-y-4 text-lg text-ink-soft">
          <p>
            Infertility care begins with a careful history, exam, and targeted testing to identify
            barriers to conception. Your provider will explain findings and outline next steps that
            fit your goals and timeline.
          </p>
          <p>
            When advanced reproductive technologies are needed, our team coordinates with fertility
            specialists so care stays organized and supportive.
          </p>
          <Link href="/preconception" className="btn btn-secondary">
            Preconception Planning
          </Link>
        </div>
      </section>
      <CtaBanner title="Start a fertility evaluation" />
    </>
  );
}
