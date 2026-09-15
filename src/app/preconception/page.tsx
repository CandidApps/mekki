import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Preconception Care in Libertyville, IL",
  description:
    "Preconception visits in Libertyville with Dr. Yasir A. Mekki — health review, labs, and planning before pregnancy.",
  alternates: { canonical: "/preconception" },
};

export default function PreconceptionPage() {
  return (
    <>
      <PageHero
        eyebrow="Preconception"
        title="Preconception Care in Libertyville, Illinois"
        description="A preconception visit helps you review medications, vaccines, gynecologic history, and lifestyle factors before trying to conceive — an important first step toward a healthy pregnancy."
      />
      <section className="section-pad pt-0">
        <div className="container-site max-w-3xl space-y-4 text-ink-soft">
          <p>
            Bring a medication and supplement list, vaccination history, and any prior pregnancy
            records. Your provider may discuss fertile timing, when to stop contraception, prenatal
            vitamins with folic acid, and labs such as immunity testing, blood type, vitamin D, or
            thyroid levels.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/obstetrics" className="btn btn-secondary">
              Obstetrics Care
            </Link>
            <Link href="/infertility" className="btn btn-secondary">
              Infertility Evaluation
            </Link>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
