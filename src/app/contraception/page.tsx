import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Birth Control & IUDs in Libertyville, IL",
  description:
    "Contraception counseling in Libertyville with Dr. Yasir A. Mekki — birth control pills, patches, Depo-Provera, Mirena, and Paragard IUDs.",
  alternates: { canonical: "/contraception" },
};

export default function ContraceptionPage() {
  return (
    <>
      <PageHero
        eyebrow="Contraception"
        title="Birth Control & IUD Care in Libertyville, Illinois"
        description="Find a contraceptive method that fits your health, bleeding preferences, and life plans. Alliance OB/GYN offers counseling and in-office placement for long-acting options."
      />
      <section className="section-pad pt-0">
        <div className="container-site grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Birth control pills",
              text: "Daily hormonal options that can regulate cycles, lighten bleeding, and prevent pregnancy when taken consistently.",
            },
            {
              title: "Patch & injectable options",
              text: "Weekly patches and Depo-Provera injections for patients who prefer not to take a daily pill.",
            },
            {
              title: "Mirena IUD",
              text: "Hormonal intrauterine device offering long-term prevention and lighter periods for many patients.",
            },
            {
              title: "Paragard IUD",
              text: "Hormone-free copper IUD providing long-term contraception for patients who prefer non-hormonal methods.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-[var(--line)] bg-white p-6">
              <h2 className="font-display text-2xl text-ink">{item.title}</h2>
              <p className="mt-3 text-ink-soft">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner title="Discuss contraception options" />
    </>
  );
}
