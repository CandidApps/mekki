import type { Metadata } from "next";
import Link from "next/link";
import { AppointmentForm } from "@/components/AppointmentForm";
import { PageHero } from "@/components/PageHero";
import { PatientForms } from "@/components/PatientForms";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Appointments | Alliance OB/GYN Libertyville",
  description:
    "Contact Alliance OB/GYN in Libertyville, IL. Call 847-336-8472 or request an appointment with Dr. Yasir A. Mekki for obstetrics and gynecology care.",
  alternates: { canonical: "/contact" },
};

const helpCards = [
  {
    href: "#appointment",
    title: "Schedule a Visit",
    text: "Request routine, follow-up, or problem-focused care.",
  },
  {
    href: "/obstetrics",
    title: "New OB Patient",
    text: "Start pregnancy care and prepare for your first visit.",
  },
  {
    href: "#forms",
    title: "Patient Forms",
    text: "Complete English or Spanish forms before you arrive.",
  },
  {
    href: "/patient-resources",
    title: "New Patient",
    text: "Find everything you need for your first appointment.",
  },
  {
    href: site.phoneHref,
    title: "Contact Our Team",
    text: "Call with scheduling, billing, or general questions.",
    external: true,
  },
  {
    href: site.googleMapsUrl,
    title: "Directions",
    text: "Find our Libertyville office and plan your visit.",
    external: true,
  },
];

const guidanceLinks = [
  { href: "/obstetrics", title: "Pregnancy or a positive test", label: "Obstetrics & Pregnancy" },
  { href: "/gynecology", title: "Annual exam, pelvic pain, or bleeding", label: "Gynecology" },
  { href: "/contraception", title: "Birth control options", label: "Contraception" },
  { href: "/menopause", title: "Perimenopause or menopause symptoms", label: "Menopause Care" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Alliance OB/GYN"
        title="We’re Here When You Need Us"
        description="Whether you’re scheduling a visit, have a question about your care, or need help preparing for an appointment, our Alliance OB/GYN team in Libertyville is here to help. Appointment requests are typically reviewed within one business day."
        ctaHref="#appointment"
        ctaLabel="Request an Appointment"
      />

      <section className="section-pad pt-0 surface-white">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">Start here</p>
          <h2 className="font-display mt-2 text-3xl text-ink">How Can We Help?</h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            Choose what you need and we’ll guide you to the right place.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {helpCards.map((card) => {
              const className =
                "rounded-[1.5rem] border border-[var(--line)] bg-white p-6 transition hover:border-teal/40 hover:shadow-[var(--shadow)]";
              const body = (
                <>
                  <h3 className="font-display text-2xl text-ink">{card.title}</h3>
                  <p className="mt-3 text-ink-soft">{card.text}</p>
                </>
              );
              return card.external ? (
                <a
                  key={card.title}
                  href={card.href}
                  className={className}
                  {...(card.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {body}
                </a>
              ) : (
                <Link key={card.title} href={card.href} className={className}>
                  {body}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad surface-paper">
        <div className="container-site grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6">
              <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
                Visit our office
              </p>
              <h2 className="font-display mt-2 text-2xl text-ink">
                Easy to find. Ready to welcome you.
              </h2>
              <p className="mt-4 font-semibold text-ink">{site.name}</p>
              <p className="text-ink-soft">{site.doctor.fullName}</p>
              <p className="mt-4 text-ink-soft">
                <a
                  className="hover:text-teal hover:underline"
                  href={site.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </a>
              </p>
              <p className="mt-4">
                <a className="font-semibold text-teal hover:underline" href={site.phoneHref}>
                  Phone: {site.phone}
                </a>
              </p>
              <p className="text-ink-soft">Fax: {site.fax}</p>
              <p>
                <a className="text-teal hover:underline" href={site.emailHref}>
                  {site.email}
                </a>
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={site.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Open in Google Maps
                </a>
                <a href={site.phoneHref} className="btn btn-primary">
                  Call the Office
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6">
              <h2 className="font-display text-2xl text-ink">Office Hours</h2>
              <ul className="mt-4 space-y-2 text-ink-soft">
                {site.hours.map((item) => (
                  <li
                    key={item.day}
                    className="flex justify-between gap-4 border-b border-[var(--line)] py-2"
                  >
                    <span>{item.day}</span>
                    <span>{item.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-soft">{site.doctorInOfficeNote}</p>
            </div>

            <div className="rounded-[1.75rem] border border-teal/20 bg-teal-soft/40 p-6">
              <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
                After hours & urgent concerns
              </p>
              <h2 className="font-display mt-2 text-2xl text-ink">
                You’re never left wondering what to do
              </h2>
              <p className="mt-4 text-ink-soft">
                For an urgent concern after office hours, call{" "}
                <a className="font-semibold text-teal hover:underline" href={site.phoneHref}>
                  {site.phone}
                </a>
                . Our answering service can help you reach a physician. If you may be experiencing a
                medical emergency, call 911.
              </p>
            </div>
          </div>

          <div className="self-start">
            <AppointmentForm />
          </div>
        </div>
      </section>

      <section id="forms" className="section-pad pt-0">
        <div className="container-site">
          <PatientForms />
        </div>
      </section>

      <section className="section-pad surface-white">
        <div className="container-site">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            A little guidance
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">
            Not Sure What Kind of Appointment You Need?
          </h2>
          <p className="mt-3 max-w-3xl text-ink-soft">
            Start with what you’re experiencing. We’ll help you find the right care.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {guidanceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[1.5rem] border border-[var(--line)] bg-white p-6 transition hover:border-teal/40"
              >
                <p className="font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-teal">{item.label} →</p>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-ink-soft">
            Still unsure? Call us at{" "}
            <a className="font-semibold text-teal hover:underline" href={site.phoneHref}>
              {site.phone}
            </a>{" "}
            and our team will guide you.
          </p>
        </div>
      </section>

      <section className="section-pad surface-paper">
        <div className="container-site rounded-[1.75rem] border border-[var(--line)] bg-white p-6 md:p-8">
          <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
            Hospital affiliations
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">Connected care in Lake County</h2>
          <p className="mt-4 max-w-3xl text-ink-soft">
            Our team provides compassionate obstetric, gynecologic, and women’s health care for
            patients throughout Libertyville and Lake County.
          </p>
          <ul className="mt-6 space-y-2 text-ink-soft">
            {site.hospitals.map((hospital) => (
              <li key={hospital}>{hospital}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
