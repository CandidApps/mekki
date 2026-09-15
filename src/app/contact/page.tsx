import type { Metadata } from "next";
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

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Alliance OB/GYN in Libertyville"
        description="Schedule obstetrics, pregnancy care, gynecology, or surgical consultation with Dr. Yasir A. Mekki. Please request appointments in advance and provide 24 hours’ notice for changes."
        ctaHref="#appointment"
      />

      <section className="section-pad pt-0">
        <div className="container-site grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6">
              <h2 className="font-display text-2xl text-ink">Office information</h2>
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
              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary mt-6"
              >
                Open in Google Maps
              </a>
            </div>

            <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6">
              <h2 className="font-display text-2xl text-ink">Office hours</h2>
              <ul className="mt-4 space-y-2 text-ink-soft">
                {site.hours.map((item) => (
                  <li key={item.day} className="flex justify-between gap-4 border-b border-[var(--line)] py-2">
                    <span>{item.day}</span>
                    <span>{item.time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink-soft">
                After-hours emergencies: our answering service can help you reach a physician.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6">
              <h2 className="font-display text-2xl text-ink">Hospital affiliations</h2>
              <ul className="mt-4 space-y-2 text-ink-soft">
                {site.hospitals.map((hospital) => (
                  <li key={hospital}>{hospital}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="self-start">
            <AppointmentForm />
          </div>
        </div>

        <div className="container-site mt-10">
          <PatientForms compact />
        </div>
      </section>
    </>
  );
}
