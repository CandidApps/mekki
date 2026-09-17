import type { Metadata } from "next";
import { ContraceptionGuide } from "@/components/ContraceptionGuide";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Birth Control & IUDs in Libertyville, IL | Dr. Yasir Mekki",
  description:
    "Contraception counseling in Libertyville with Dr. Yasir A. Mekki — hormonal and copper IUDs, implants, pills, patches, shots, and barrier methods without pressure.",
  alternates: { canonical: "/contraception" },
};

const visitSteps = [
  {
    n: "01 · Listen",
    title: "Start with your priorities",
    text: "Tell us what you want from birth control and what has — or has not — worked before.",
  },
  {
    n: "02 · Compare",
    title: "Review benefits and tradeoffs",
    text: "We discuss safety, side effects, period changes, convenience, and future pregnancy plans.",
  },
  {
    n: "03 · Choose",
    title: "Make a plan together",
    text: "Your Alliance OB/GYN provider helps you choose, start, place, or schedule the right option.",
  },
];

const faqs = [
  {
    question: "Which method is most effective?",
    answer:
      "IUDs and the implant are among the most effective reversible methods because there is nothing to remember each day. The best choice still depends on your health and preferences.",
  },
  {
    question: "Can birth control help with heavy or painful periods?",
    answer:
      "Some hormonal methods may make periods lighter, more predictable, or less painful. Tell us which symptoms you want to improve so we can discuss appropriate options.",
  },
  {
    question: "Can I get pregnant after stopping birth control?",
    answer:
      "Most reversible methods are designed to allow pregnancy after they are stopped or removed, although the timing can vary by method and by person.",
  },
  {
    question: "Do IUD or implant visits require a separate appointment?",
    answer:
      "Sometimes. Placement, insurance verification, and preparation can vary. Our office will explain what is needed before your visit.",
  },
];

export default function ContraceptionPage() {
  return (
    <>
      <PageHero
        eyebrow="Contraception care · Libertyville, Illinois"
        title="Birth control that fits your life"
        description="Your health, comfort, periods, and future plans all matter. Dr. Yasir A. Mekki and the Alliance OB/GYN care team help you compare contraception options in Libertyville without pressure — and choose a method you feel confident using."
      />

      <ContraceptionGuide />

      <section className="section-pad surface-paper">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">Your visit</p>
          <h2 className="font-display mt-2 text-3xl text-ink">A decision you understand</h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            You do not need to choose before your appointment. We will help you narrow the options
            together.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {visitSteps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-[var(--line)] bg-white p-5">
                <p className="text-sm font-semibold text-teal">{step.n}</p>
                <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-ink-soft">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq items={faqs} title="Helpful answers, kept simple" />
      <CtaBanner
        title="Let’s find an option that works for you"
        text="Bring your questions. Our care team will help you understand your choices and decide on a next step that fits your health and your life."
      />
    </>
  );
}
