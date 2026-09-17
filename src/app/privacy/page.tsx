import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for Alliance OB/GYN patients and website visitors.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="Alliance OB/GYN respects patient privacy and protects health information in accordance with applicable law."
        ctaHref="/contact"
        ctaLabel="Contact the Office"
      />
      <section className="section-pad pt-0 surface-white">
        <div className="container-site max-w-3xl space-y-4 text-ink-soft">
          <p>
            This website may collect limited contact information when you request an appointment or
            send a message. We use that information only to respond to your inquiry and coordinate
            care-related communication.
          </p>
          <p>
            Protected health information shared during clinical care is handled under HIPAA and our
            practice privacy notice. For questions about medical records or privacy practices,
            contact the office at{" "}
            <a className="font-semibold text-teal" href={site.phoneHref}>
              {site.phone}
            </a>{" "}
            or{" "}
            <a className="font-semibold text-teal" href={site.emailHref}>
              {site.email}
            </a>
            .
          </p>
          <p>
            A detailed privacy policy PDF may also be available from the practice. Ask the front desk
            for the current notice of privacy practices.
          </p>
        </div>
      </section>
    </>
  );
}
