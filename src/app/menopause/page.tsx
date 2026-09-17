import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Perimenopause & Menopause Care in Libertyville, IL | Dr. Yasir Mekki",
  description:
    "Perimenopause and menopause care in Libertyville with Dr. Yasir A. Mekki — symptom relief, nonhormonal options, and hormone therapy counseling.",
  alternates: { canonical: "/menopause" },
};

const symptoms = [
  {
    title: "Temperature changes",
    text: "Hot flashes, night sweats, chills, or waking overheated.",
  },
  {
    title: "Sleep & energy",
    text: "Trouble falling asleep, waking often, fatigue, or lower daytime energy.",
  },
  {
    title: "Periods & bleeding",
    text: "Cycles that become irregular, closer together, farther apart, heavier, or lighter.",
  },
  {
    title: "Mood & focus",
    text: "Irritability, anxiety, mood changes, forgetfulness, or difficulty concentrating.",
  },
  {
    title: "Vaginal & urinary health",
    text: "Dryness, irritation, painful sex, urinary urgency, or repeated urinary infections.",
  },
  {
    title: "Sexual well-being",
    text: "Changes in desire, comfort, arousal, or how you feel about intimacy.",
  },
];

const options = [
  {
    title: "Lifestyle & comfort strategies",
    text: "Sleep habits, movement, nutrition, stress support, vaginal moisturizers, lubricants, and other practical changes may help specific symptoms and overall health.",
  },
  {
    title: "Nonhormonal treatment",
    text: "Nonhormonal prescription options may help with hot flashes, sleep disruption, vaginal discomfort, or other symptoms when appropriate.",
  },
  {
    title: "Menopausal hormone therapy",
    text: "Hormone therapy can be effective for some symptoms, but it is not right for everyone. We review potential benefits, risks, forms of treatment, and whether it fits your health history.",
  },
];

const visitSteps = [
  {
    n: "1",
    title: "Tell us what you are experiencing",
    text: "Share the symptoms that matter most — even if they feel unrelated.",
  },
  {
    n: "2",
    title: "Review your health history",
    text: "We consider medications, personal and family risks, prior surgery, and preventive-care needs.",
  },
  {
    n: "3",
    title: "Compare appropriate options",
    text: "We explain benefits, limitations, and possible risks in clear language.",
  },
  {
    n: "4",
    title: "Make a follow-up plan",
    text: "Symptoms and needs can change, so care may be adjusted over time.",
  },
];

const faqs = [
  {
    question: "Do I need hormone testing to know if I am in perimenopause?",
    answer:
      "Often, perimenopause can be recognized from your age, symptoms, and changes in your periods. Testing may be considered in certain situations, including symptoms at a younger age or when another condition needs to be ruled out.",
  },
  {
    question: "Is hormone therapy the only treatment?",
    answer:
      "No. Depending on your symptoms and health history, options may include lifestyle measures, nonhormonal medication, local vaginal treatment, or menopausal hormone therapy.",
  },
  {
    question: "How do we decide if hormone therapy is appropriate?",
    answer:
      "We review your symptoms, age, time since menopause, whether you have a uterus, and personal and family history. Together, we consider potential benefits and risks and revisit the decision over time.",
  },
  {
    question: "Can you help with vaginal dryness or pain during sex?",
    answer:
      "Yes. These symptoms are common and treatable. Options may include moisturizers, lubricants, local prescription treatment, or other care based on the cause and your history.",
  },
  {
    question: "Do I still need gynecology visits after menopause?",
    answer:
      "Yes. Preventive care, breast and bone health discussions, sexual and urinary health, and evaluation of new symptoms remain important after menopause.",
  },
];

export default function MenopausePage() {
  return (
    <>
      <PageHero
        eyebrow="Perimenopause & menopause · Libertyville, IL"
        title="You deserve to feel heard through every change"
        description="Hot flashes, disrupted sleep, changing periods, vaginal discomfort, or feeling unlike yourself can affect everyday life. Dr. Yasir A. Mekki and the Alliance OB/GYN team take your symptoms seriously and help you understand your options in Libertyville."
        ctaLabel="Request a Menopause Visit"
      />

      <section className="section-pad pt-0 surface-white">
        <div className="container-site max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            Your experience is personal
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">
            There is no “right” way to feel during menopause
          </h2>
          <p className="mt-4 text-ink-soft">
            Some women have few symptoms. Others experience changes that affect sleep, work,
            relationships, intimacy, or emotional well-being. Both experiences are valid.
          </p>
        </div>
      </section>

      <section className="section-pad surface-paper">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            More than hot flashes
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">
            Menopause can affect many parts of your health
          </h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            Perimenopause is the transition leading up to menopause and may last several years.
            Menopause is reached after 12 months without a menstrual period. Symptoms can change
            over time, and you do not have to manage them alone.
          </p>
        </div>
      </section>

      <section className="section-pad surface-white">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            What are you noticing?
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">
            Bring the symptoms that are affecting you
          </h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            You do not need to decide whether a symptom is “hormonal” before your visit. We can
            discuss the full picture and consider other possible causes when appropriate.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {symptoms.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-[var(--line)] bg-white p-6"
              >
                <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-ink-soft">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad surface-paper">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            Care built around you
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">
            Options — not a one-size-fits-all plan
          </h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            Treatment depends on which symptoms bother you, your personal and family history,
            medications, preferences, and individual risks.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {options.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-[var(--line)] bg-white p-6"
              >
                <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-ink-soft">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/gynecology" className="btn btn-secondary">
              Gynecology & Women’s Health
            </Link>
            <Link href="/votiva" className="btn btn-secondary">
              Intimate Wellness
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad surface-soft">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            A visit focused on your goals
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">What to expect when we talk</h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            We begin with what has changed and how it affects your life. Testing is not
            automatically needed to identify perimenopause; recommendations are based on your age,
            symptoms, cycle changes, and health history.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      <section className="section-pad surface-white">
        <div className="container-site max-w-3xl rounded-[1.75rem] border border-teal/20 bg-teal-soft/40 p-6 md:p-8">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            Please do not ignore bleeding changes
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">
            Bleeding after menopause should be evaluated
          </h2>
          <p className="mt-4 text-ink-soft">
            Periods often change during perimenopause, but heavy bleeding, bleeding between periods,
            or any bleeding after 12 months without a period deserves a conversation with your
            OB/GYN.
          </p>
          <Link href="/abnormal-bleeding" className="btn btn-primary mt-6">
            Request an Evaluation
          </Link>
        </div>
      </section>

      <Faq items={faqs} title="Clear answers for a changing season" />
      <CtaBanner
        title="Let’s talk about what has changed"
        text="You deserve thoughtful answers and a plan that reflects your whole health — not just a list of symptoms."
        primaryLabel="Request a Menopause Visit"
      />
    </>
  );
}
