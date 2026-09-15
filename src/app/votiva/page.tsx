import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Votiva Feminine Wellness in Libertyville, IL",
  description:
    "Votiva radiofrequency treatment for vaginal health and feminine wellness at Alliance OB/GYN in Libertyville. Non-surgical in-office care.",
  alternates: { canonical: "/votiva" },
};

export default function VotivaPage() {
  return (
    <>
      <PageHero
        eyebrow="Feminine Wellness"
        title="Votiva Radiofrequency Treatment in Libertyville"
        description="Votiva is a non-surgical, in-office radiofrequency (RF) treatment designed to support vaginal health and feminine wellness using FormaV technology. It is an elective wellness option for selected concerns related to aging, childbirth, or hormonal change."
      />
      <section className="section-pad pt-0">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-ink-soft">
            <p>
              FormaV gently heats vaginal and vulvar tissue to support collagen remodeling,
              elasticity, circulation, and tissue tone. Treatments typically involve little to no
              downtime and are performed in the office.
            </p>
            <p>
              RF treatments are not a replacement for pelvic floor physical therapy or surgical
              repair when those are indicated. Your provider will help determine whether Votiva is
              appropriate for your goals.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6">
            <h2 className="font-display text-2xl text-ink">Concerns it may help address</h2>
            <ul className="mt-4 space-y-2 text-ink-soft">
              <li>Vaginal laxity</li>
              <li>Changes in elasticity after childbirth or aging</li>
              <li>Decreased sensation</li>
              <li>Mild discomfort during intercourse</li>
              <li>Cosmetic or functional vulvar changes</li>
            </ul>
            <p className="mt-4 text-sm text-ink-soft">
              Votiva is considered an elective wellness treatment and is not covered by insurance.
              Call for current pricing.
            </p>
          </div>
        </div>
      </section>
      <Faq
        items={[
          {
            question: "How many treatments are needed?",
            answer:
              "Most patients benefit from 1 to 3 sessions depending on goals and tissue change. Your provider will recommend a personalized plan.",
          },
          {
            question: "Is there downtime?",
            answer:
              "Most patients return to normal daily activities quickly. Your provider will discuss any short-term activity modifications.",
          },
        ]}
      />
      <CtaBanner title="Ask about Votiva at our Libertyville office" />
    </>
  );
}
