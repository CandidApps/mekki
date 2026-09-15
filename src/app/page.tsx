import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Faq } from "@/components/Faq";
import { ParallaxHeroImage } from "@/components/ParallaxHeroImage";
import { featuredReviews } from "@/lib/reviews";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Obstetrics & Gynecology in Libertyville, IL | Dr. Yasir Mekki",
  description:
    "Dr. Yasir A. Mekki is a board certified obstetrician gynecologist and experienced gynecologic surgeon providing obstetrics, pregnancy care, gynecology, and surgical care in Libertyville and Lake County. English, Arabic & Spanish.",
  alternates: { canonical: "/" },
};

const reasons = [
  "Board certified obstetrician gynecologist",
  "Decades of clinical experience",
  "Experienced gynecologic surgeon",
  "Pregnancy and gynecologic care under one roof",
  "High-risk pregnancy experience",
  "Serving Lake County since 1998",
  "English, Arabic, and Spanish",
  "Personalized physician-led care",
  "Verified patient reviews",
];

const serviceLinks = [
  {
    href: "/obstetrics",
    title: "Obstetrics & Pregnancy Care",
    text: "Prenatal care, ultrasound, labor planning, and postpartum support in Libertyville.",
    image: "/images/services/obstetrics.jpg",
  },
  {
    href: "/gynecology",
    title: "Gynecology & Women’s Health",
    text: "Well-woman exams, abnormal bleeding, fibroids, menopause, and preventive care.",
    image: "/images/services/gynecology.jpg",
  },
  {
    href: "/gynecologic-surgery",
    title: "Gynecologic Procedures and Surgeries",
    text: "Office procedures, surgical evaluation, and minimally invasive options when clinically appropriate.",
    image: "/images/services/gynecologic-surgery.jpg",
  },
];

const faqs = [
  {
    question: "What languages does Dr. Mekki speak?",
    answer:
      "Dr. Yasir A. Mekki speaks English, Arabic, and Spanish, helping many Lake County families communicate comfortably during obstetric and gynecologic visits.",
  },
  {
    question: "Does Dr. Mekki treat high-risk pregnancies?",
    answer:
      "Yes. Dr. Mekki provides high-risk pregnancy experience as part of obstetrics care, with closer monitoring when medical history or pregnancy complications require it.",
  },
  {
    question: "Does Dr. Mekki perform gynecologic surgery?",
    answer:
      "Yes. He is an experienced gynecologic surgeon and offers surgical consultation for fibroids, abnormal bleeding, ovarian cysts, endometriosis, and related conditions.",
  },
  {
    question: "What hospital is Dr. Mekki affiliated with?",
    answer: `Hospital affiliations include ${site.hospitals.join(" and ")}. Please confirm delivery location and privileges when you schedule prenatal care.`,
  },
  {
    question: "Does the office accept my insurance?",
    answer:
      "Alliance OB/GYN works with many major plans. Call the Libertyville office to confirm your coverage before your visit.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden">
        <ParallaxHeroImage
          src="/images/hero.jpg"
          alt="Women’s health and pregnancy care atmosphere at Alliance OB/GYN in Libertyville"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/55" />
        <div className="relative z-10 container-site flex min-h-[88vh] flex-col justify-end px-5 pb-16 pt-28 text-white md:justify-center md:pb-24">
          <p className="fade-up font-display text-4xl leading-none md:text-6xl">Alliance OB/GYN</p>
          <h1 className="fade-up-delay mt-5 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
            Experienced Obstetrics and Gynecology Care in Libertyville, Illinois
          </h1>
          <p className="fade-up-delay-2 mt-5 max-w-2xl text-base text-white/90 md:text-lg">
            Dr. Yasir A. Mekki is a board certified obstetrician gynecologist and experienced
            gynecologic surgeon providing comprehensive obstetrics, pregnancy care, gynecology,
            women’s health, and surgical care to patients in Libertyville and throughout Lake
            County, Illinois. Care is available in English, Arabic, and Spanish.
          </p>
          <p className="fade-up-delay-2 mt-4 text-sm text-white/75 md:text-base">
            {site.tagline}
          </p>
          <div className="fade-up-delay-2 mt-8 flex flex-wrap gap-3">
            <Link href="/contact#appointment" className="btn btn-sand">
              Request an Appointment
            </Link>
            <a href={site.phoneHref} className="btn btn-secondary">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-white">
        <div className="container-site grid items-stretch gap-3 px-5 py-5 text-sm md:grid-cols-4">
          {[
            "Board Certified Obstetrician Gynecologist",
            "Experienced Gynecologic Surgeon",
            "Decades of Experience",
            "English · Arabic · Spanish",
          ].map((item) => (
            <span key={item} className="pill bg-teal-soft font-medium text-teal-deep">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section-pad surface-paper">
        <div className="container-site grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
              Why choose Dr. Mekki
            </p>
            <h2 className="font-display mt-3 text-4xl text-ink md:text-5xl">
              Trusted obstetrics and gynecology for women in Lake County
            </h2>
            <p className="mt-5 text-lg text-ink-soft">
              Since {site.doctor.practiceSince}, {site.doctor.fullName} has cared for women and
              families across Libertyville and Lake County as a board certified obstetrician
              gynecologist and experienced gynecologic surgeon. Patients come to Alliance OB/GYN for
              pregnancy care, well-woman exams, complex gynecologic concerns, and surgery — with a
              physician who listens and explains.
            </p>
            <div className="chip mt-6 border border-teal/20 bg-white text-sm font-semibold text-teal-deep">
              Languages: English · Arabic · Spanish
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/providers" className="btn btn-primary">
                Meet Dr. Mekki
              </Link>
              <Link href="/gynecologic-surgery" className="btn btn-secondary">
                Learn More About Procedures and Surgeries
              </Link>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow)]">
            <Image
              src="/images/dr-yasir-mekki-obgyn-libertyville.png"
              alt="Dr. Yasir Mekki, board certified obstetrician gynecologist in Libertyville, Illinois"
              width={900}
              height={1100}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-pad surface-white">
        <div className="container-site">
          <h2 className="font-display text-3xl text-ink md:text-4xl">Why Women Choose Dr. Mekki</h2>
          <ul className="mt-8 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <li
                key={reason}
                className="flex min-h-[3.25rem] items-center rounded-2xl border border-[var(--line)] bg-paper px-5 py-3 text-ink-soft"
              >
                <span className="mr-2 shrink-0 font-semibold text-teal">✓</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad surface-paper">
        <div className="container-site">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">Services</p>
              <h2 className="font-display mt-2 text-3xl text-ink md:text-4xl">
                Obstetrics, gynecology, and surgery
              </h2>
            </div>
            <Link href="/services" className="font-semibold text-teal hover:underline">
              View all services →
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {serviceLinks.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group overflow-hidden rounded-[1.75rem] border border-[var(--line)] bg-white shadow-[var(--shadow)] transition hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-ink">{service.title}</h3>
                  <p className="mt-2 text-ink-soft">{service.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad surface-soft">
        <div className="container-site texture-panel rounded-[2rem] px-6 py-8 md:px-10 md:py-10">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
                Surgical expertise
              </p>
              <h2 className="font-display mt-3 text-3xl text-ink md:text-4xl">
                Experienced Gynecologic Surgeon in Libertyville, Illinois
              </h2>
              <p className="mt-4 text-ink-soft">
                From evaluation of fibroids and abnormal bleeding to surgical planning for cysts,
                endometriosis, and hysterectomy when indicated, Dr. Mekki focuses on clear options —
                including minimally invasive approaches when clinically appropriate.
              </p>
              <Link href="/gynecologic-surgery" className="btn btn-primary mt-6">
                Explore Procedures and Surgeries
              </Link>
            </div>
            <ul className="grid items-stretch gap-3 sm:grid-cols-2">
              {[
                "Minimally invasive options when appropriate",
                "Fibroid and abnormal bleeding care",
                "Ovarian cyst evaluation and treatment",
                "Endometriosis and pelvic surgery consultation",
                "Hysterectomy counseling and surgery",
                "Hospital-affiliated surgical care",
              ].map((item) => (
                <li key={item} className="flex min-h-[3.25rem] items-center rounded-2xl bg-white px-4 py-3 text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad surface-white">
        <div className="container-site">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl text-ink md:text-4xl">
                What Our Patients Are Saying
              </h2>
              <p className="mt-3 max-w-2xl text-ink-soft">
                Genuine patient reviews from Healthgrades. Read more verified feedback and leave a
                Google review after your visit.
              </p>
            </div>
            <a
              href={site.healthgradesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-teal hover:underline"
            >
              More verified reviews →
            </a>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {featuredReviews.slice(0, 3).map((review) => (
              <figure
                key={review.author + review.date}
                className="flex h-full flex-col rounded-[1.5rem] border border-[var(--line)] bg-paper p-6"
              >
                <blockquote className="flex-1 text-ink-soft">&ldquo;{review.quote}&rdquo;</blockquote>
                <figcaption className="mt-5 border-t border-[var(--line)] pt-4 text-sm">
                  <p className="font-semibold text-ink">{review.author}</p>
                  <p className="text-ink-soft">
                    {review.date} · {review.source}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {featuredReviews.slice(3).map((review) => (
              <figure
                key={review.author + review.date}
                className="rounded-[1.5rem] border border-[var(--line)] bg-paper p-6"
              >
                <blockquote className="text-ink-soft">&ldquo;{review.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-ink">
                  {review.author} · {review.date} · {review.source}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Faq items={faqs} />
      <CtaBanner
        title="Schedule obstetrics or gynecology care in Libertyville"
        text="Request an appointment with Dr. Yasir A. Mekki — board certified OB/GYN care in English, Arabic, and Spanish."
      />
    </>
  );
}
