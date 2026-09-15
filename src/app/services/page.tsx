import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "OB/GYN Services in Libertyville, IL",
  description:
    "Explore obstetrics, pregnancy care, gynecology, women’s health, and gynecologic surgery with Dr. Yasir A. Mekki at Alliance OB/GYN in Libertyville.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    href: "/obstetrics",
    title: "Obstetrics & Pregnancy Care",
    text: "Prenatal visits, ultrasound, screening, labor planning, and postpartum care.",
    image: "/images/services/obstetrics.jpg",
    alt: "Pregnant woman cradling her belly — obstetrics and pregnancy care in Libertyville",
  },
  {
    href: "/high-risk-pregnancy",
    title: "High-Risk Pregnancy",
    text: "Closer monitoring for medical or pregnancy-related complications.",
    image: "/images/services/high-risk-pregnancy.jpg",
    alt: "Prenatal ultrasound visit for high-risk pregnancy care",
  },
  {
    href: "/gynecology",
    title: "Gynecology & Women’s Health",
    text: "Well-woman exams, Pap/HPV screening, pelvic pain, and preventive care.",
    image: "/images/services/gynecology.jpg",
    alt: "Gynecologist consulting with a patient in a women’s health clinic",
  },
  {
    href: "/gynecologic-surgery",
    title: "Gynecologic Procedures and Surgeries",
    text: "Office procedures, surgical consultation, and minimally invasive options when appropriate.",
    image: "/images/services/gynecologic-surgery.jpg",
    alt: "Surgeons performing a procedure in a modern operating room",
  },
  {
    href: "/contraception",
    title: "Contraception",
    text: "Pills, patches, injections, IUDs, and counseling tailored to your goals.",
    image: "/images/services/contraception.jpg",
    alt: "Birth control and contraception counseling options",
  },
  {
    href: "/infertility",
    title: "Infertility Evaluation",
    text: "Initial fertility evaluation and coordinated referral when advanced care is needed.",
    image: "/images/services/infertility.jpg",
    alt: "Couple discussing infertility evaluation and fertility care",
  },
  {
    href: "/menopause",
    title: "Menopause & Hormone Care",
    text: "Symptom relief, hormone replacement therapy counseling, and long-term wellness.",
    image: "/images/services/menopause.jpg",
    alt: "Woman considering menopause and hormone care options",
  },
  {
    href: "/preconception",
    title: "Preconception",
    text: "Health review and planning before you try to conceive.",
    image: "/images/services/preconception.jpg",
    alt: "Couple planning for pregnancy with preconception care",
  },
  {
    href: "/abnormal-bleeding",
    title: "Abnormal Bleeding",
    text: "Evaluation and treatment for heavy, irregular, or postmenopausal bleeding.",
    image: "/images/services/abnormal-bleeding.jpg",
    alt: "Patient discussing abnormal uterine bleeding with her provider",
  },
  {
    href: "/fibroids",
    title: "Fibroids",
    text: "Diagnosis and medical or surgical options for uterine fibroids.",
    image: "/images/services/fibroids.jpg",
    alt: "Patient consulting with an OB/GYN about uterine fibroids",
  },
  {
    href: "/votiva",
    title: "Votiva Feminine Wellness",
    text: "In-office radiofrequency treatment for vaginal health concerns.",
    image: "/images/services/votiva.jpg",
    alt: "Feminine wellness and Votiva treatment consultation",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Obstetrics and Gynecology Services in Libertyville"
        description="Comprehensive OB/GYN, pregnancy care, women’s health, and gynecologic surgery with Dr. Yasir A. Mekki — serving Libertyville and Lake County."
      />
      <section className="section-pad pt-0">
        <div className="container-site grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-white shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-teal/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-paper-deep">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl text-ink">{service.title}</h2>
                <p className="mt-2 text-ink-soft">{service.text}</p>
                <span className="mt-4 inline-block font-semibold text-teal">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
