import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Preconception Care in Libertyville, IL | Dr. Yasir Mekki",
  description:
    "Preconception visits in Libertyville with Dr. Yasir A. Mekki — health review, medications, vaccines, labs, and planning before pregnancy.",
  alternates: { canonical: "/preconception" },
};

const reviewTopics = [
  {
    title: "Medical history",
    text: "Health conditions such as high blood pressure, diabetes, thyroid concerns, seizures, or mental health needs — and how they are currently managed.",
  },
  {
    title: "Medications & supplements",
    text: "Prescription medicines, over-the-counter products, vitamins, and herbal supplements. Please talk with us before stopping a prescribed medication.",
  },
  {
    title: "Pregnancy & gynecologic history",
    text: "Prior pregnancies, deliveries, pregnancy losses, surgeries, menstrual cycles, contraception, and any concerns about becoming pregnant.",
  },
  {
    title: "Vaccines & testing",
    text: "Your immunization history and whether screening or laboratory work may be appropriate before pregnancy.",
  },
  {
    title: "Family & genetic history",
    text: "Health conditions in your family or your partner’s family and whether carrier screening or genetic counseling should be considered.",
  },
  {
    title: "Everyday well-being",
    text: "Nutrition, movement, sleep, stress, nicotine, alcohol, workplace exposures, and other factors that may affect you or a future pregnancy.",
  },
];

const firstSteps = [
  {
    n: "1",
    title: "Start a prenatal vitamin",
    text: "Choose one with at least 400 micrograms of folic acid unless a clinician has recommended a different amount for you.",
  },
  {
    n: "2",
    title: "Gather your health information",
    text: "Make a list of medications and supplements, vaccine records, health conditions, allergies, and prior pregnancy details.",
  },
  {
    n: "3",
    title: "Write down what matters to you",
    text: "Bring questions about timing, cycles, health risks, genetic screening, medications, or anything making you feel uncertain.",
  },
];

const scheduleIf = [
  "Manage a chronic medical or mental health condition",
  "Take medication you are unsure about during pregnancy",
  "Have experienced pregnancy complications or recurrent loss",
  "Have a personal or family history of a genetic condition",
  "Have questions about fertility, cycle timing, or age-related concerns",
];

const faqs = [
  {
    question: "When should I schedule a preconception visit?",
    answer:
      "You can schedule whenever you begin thinking about pregnancy. A visit before trying gives you time to review medications, vaccines, health conditions, and personal concerns, but it is never too late to ask questions.",
  },
  {
    question: "Do I need laboratory testing before pregnancy?",
    answer:
      "Not everyone needs the same tests. Based on your history, we may discuss immunity testing, carrier screening, STI screening, thyroid testing, or other laboratory work when appropriate.",
  },
  {
    question: "Should my partner be part of the conversation?",
    answer:
      "Partners are welcome if you would like them involved. Their family history, health, medications, and lifestyle can also be relevant to planning a pregnancy.",
  },
  {
    question: "When should I stop birth control?",
    answer:
      "The answer depends on the method you use and your preferred timing. We can explain what to expect when you stop and help you plan the transition.",
  },
  {
    question: "What if I am worried about infertility?",
    answer:
      "You can bring that concern to us. We can review your menstrual and health history, discuss when an initial evaluation may be appropriate, and refer to a fertility specialist if needed.",
  },
];

export default function PreconceptionPage() {
  return (
    <>
      <PageHero
        eyebrow="Preconception care · Libertyville, IL"
        title="Planning ahead can help you feel more prepared"
        description="Whether pregnancy is part of your near future or you are simply beginning to think about it, Dr. Yasir A. Mekki and the Alliance OB/GYN team are here to listen, answer questions, and help you take thoughtful first steps in Libertyville."
        ctaLabel="Request a Preconception Visit"
      />

      <section className="section-pad pt-0 surface-white">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            You do not need a perfect plan
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">
            Come with your questions — not all the answers
          </h2>
          <p className="mt-4 max-w-3xl text-ink-soft">
            Every path to pregnancy is different. We focus on what is relevant to your health, your
            timing, and your goals without judgment or pressure.
          </p>
        </div>
      </section>

      <section className="section-pad surface-paper">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            A healthy beginning starts with you
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">
            Preconception care is care for your whole health
          </h2>
          <p className="mt-4 max-w-3xl text-ink-soft">
            A visit before pregnancy gives us time to review health concerns that may affect
            pregnancy, make sure your current care still fits your needs, and discuss changes that
            could be helpful before you begin trying to conceive.
          </p>
        </div>
      </section>

      <section className="section-pad surface-white">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            Your visit, made useful
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">What we may review together</h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            The conversation is personalized. Not every patient needs every test, and
            recommendations depend on your history.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reviewTopics.map((item) => (
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
            Simple first steps
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">
            You can begin before your appointment
          </h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            Small, realistic actions matter more than trying to make everything perfect at once.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {firstSteps.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[var(--line)] bg-white p-5">
                <p className="text-sm font-semibold text-teal">{item.n}</p>
                <h3 className="mt-2 font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad surface-soft">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 md:p-8">
            <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
              Help us understand the full picture
            </p>
            <h2 className="font-display mt-2 text-2xl text-ink">What to bring</h2>
            <ul className="mt-4 space-y-2 text-ink-soft">
              <li>A medication and supplement list</li>
              <li>Your vaccination history, if available</li>
              <li>Details from prior pregnancies or surgeries</li>
              <li>Family health history for you and your partner</li>
              <li>Your questions, priorities, and timeline</li>
            </ul>
          </div>
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 md:p-8">
            <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
              Coordinated when needed
            </p>
            <h2 className="font-display mt-2 text-2xl text-ink">
              Some plans benefit from extra support
            </h2>
            <p className="mt-4 text-ink-soft">
              If your health history suggests specialized guidance may be helpful, we can discuss
              the next step and coordinate a referral. This may include maternal-fetal medicine,
              genetic counseling, or another specialist.
            </p>
            <p className="mt-4 font-semibold text-ink">You may want to schedule before trying if you:</p>
            <ul className="mt-3 space-y-2 text-ink-soft">
              {scheduleIf.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad surface-white">
        <div className="container-site">
          <div className="rounded-[1.75rem] border border-teal/20 bg-teal-soft/40 p-6 md:p-8">
            <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
              Already have a positive pregnancy test?
            </p>
            <h2 className="font-display mt-2 text-3xl text-ink">
              You did not miss your chance to prepare
            </h2>
            <p className="mt-4 max-w-3xl text-ink-soft">
              Contact our office to arrange prenatal care. Keep taking prescribed medication unless
              your clinician advises otherwise, and bring your questions to your first visit.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/obstetrics" className="btn btn-primary">
                Request a Prenatal Visit
              </Link>
              <Link href="/infertility" className="btn btn-secondary">
                Fertility Concerns
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Faq items={faqs} title="Clear answers before pregnancy" />
      <CtaBanner
        title="Let’s plan for your healthiest possible beginning"
        text="Our team will meet you where you are and help turn uncertainty into a practical, personalized plan."
        primaryLabel="Request a Preconception Visit"
      />
    </>
  );
}
