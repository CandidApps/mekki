import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { PatientForms } from "@/components/PatientForms";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Resources | Alliance OB/GYN Libertyville",
  description:
    "Prenatal appointment schedules, gynecology visit prep, and online patient forms for Alliance OB/GYN in Libertyville, IL.",
  alternates: { canonical: "/patient-resources" },
};

export default function PatientResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Resources"
        title="Prepare for Your OB/GYN Visit"
        description="Helpful guidance for prenatal care schedules, gynecology appointments, and online paperwork at Alliance OB/GYN in Libertyville."
      />
      <section className="section-pad pt-0">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6">
            <h2 className="font-display text-2xl text-ink">Prenatal appointment schedule</h2>
            <ul className="mt-4 space-y-3 text-ink-soft">
              <li>
                <strong className="text-ink">Weeks 4–28:</strong> about once per month
              </li>
              <li>
                <strong className="text-ink">Weeks 28–36:</strong> about every two weeks
              </li>
              <li>
                <strong className="text-ink">Weeks 36–birth:</strong> weekly visits
              </li>
            </ul>
            <p className="mt-4 text-sm text-ink-soft">
              High-risk pregnancies may need more frequent visits. Schedule early prenatal care as
              soon as you know you are pregnant.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6">
            <h2 className="font-display text-2xl text-ink">Preparing for a gynecology visit</h2>
            <p className="mt-4 text-ink-soft">
              When possible, schedule on a day you are not menstruating. Avoid intercourse, tampons,
              lubricants, and douches for 48 hours before your appointment if a pelvic exam or Pap
              test may be done.
            </p>
            <p className="mt-3 text-ink-soft">
              Bring medical history details, menstrual cycle information, and a medication list.
              Cervical cancer screening intervals may differ from how often you schedule well-woman
              visits — ask your provider what applies to you.
            </p>
          </article>
          <div className="lg:col-span-2">
            <PatientForms />
          </div>
          <article className="rounded-[1.75rem] border border-[var(--line)] bg-white p-6 lg:col-span-2">
            <h2 className="font-display text-2xl text-ink">Paperwork & check-in</h2>
            <p className="mt-4 text-ink-soft">
              Arrive 15 minutes early if bringing paper forms. For faster check-in, complete
              paperwork online before your visit using the Updox links above. Questions? Call{" "}
              <a className="font-semibold text-teal" href={site.phoneHref}>
                {site.phone}
              </a>
              .
            </p>
          </article>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
