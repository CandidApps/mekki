import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Providers | Dr. Yasir Mekki, OB/GYN in Libertyville",
  description:
    "Meet Dr. Yasir A. Mekki, board certified obstetrician gynecologist and experienced gynecologic surgeon, and Kelsey Augusta, FNP-C. English, Arabic, and Spanish.",
  alternates: { canonical: "/providers" },
};

export default function ProvidersPage() {
  return (
    <>
      <PageHero
        eyebrow="Providers"
        title="Meet Our Team"
        description="Board certified obstetrics and gynecology care in Libertyville with Dr. Yasir A. Mekki and Kelsey Augusta, FNP-C. Dr. Mekki speaks Spanish, Arabic, and English, and is in the office Monday, Tuesday, and Thursday."
      />

      <section className="section-pad pt-0 surface-white">
        <div className="container-site grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow)]">
            <Image
              src="/images/dr-yasir-mekki-obgyn-libertyville.png"
              alt="Dr. Yasir Mekki, board certified obstetrician gynecologist in Libertyville, Illinois"
              width={900}
              height={1100}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
              OB/GYN Physician
            </p>
            <h2 className="font-display mt-2 text-4xl text-ink">
              {site.doctor.fullName}, {site.doctor.credentials}
            </h2>
            <p className="mt-2 text-lg text-teal-deep">
              {site.doctor.title} · {site.doctor.surgeonTitle}
            </p>
            <div className="chip mt-4 bg-teal-soft font-semibold text-teal-deep">
              Speaks Spanish · Arabic · English
            </div>
            <p className="mt-3 text-sm text-ink-soft">
              In the Libertyville office {site.doctorInOfficeDays}.
            </p>
            <div className="mt-6 space-y-4 text-ink-soft">
              <p>
                {site.doctor.fullName} is a Board Certified Obstetrician and Gynecologist with more
                than {site.doctor.yearsExperience} years of experience caring for women at every
                stage of life. He completed residency training at the University of Miami / Jackson
                Memorial Hospital and graduated from the University of Baghdad College of Medicine.
              </p>
              <p>
                Since establishing his practice in Lake County, Illinois in {site.doctor.practiceSince},
                Dr. Mekki has remained committed to high-quality women’s healthcare with a personal
                approach — whether patients are coming in for preventive gynecology, pregnancy care,
                high-risk monitoring, or gynecologic surgery.
              </p>
              <p>
                Along with obstetric and gynecologic care, Dr. Mekki brings broad medical experience
                that supports thorough evaluation and thoughtful treatment planning.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--line)] bg-white p-5">
                <h3 className="font-semibold text-ink">Credentials & expertise</h3>
                <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                  <li>Board Certified OB/GYN</li>
                  <li>{site.doctor.yearsExperience} years experience</li>
                  <li>Obstetrics & pregnancy care</li>
                  <li>Gynecology & women’s health</li>
                  <li>High-risk pregnancy</li>
                  <li>Minimally invasive gynecologic surgery</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[var(--line)] bg-white p-5">
                <h3 className="font-semibold text-ink">Education & affiliations</h3>
                <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                  <li>{site.doctor.education.medicalSchool}</li>
                  <li>{site.doctor.education.residency}</li>
                  <li>{site.doctor.boardCertification}</li>
                  {site.hospitals.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad surface-paper">
        <div className="container-site grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] shadow-[var(--shadow)]">
            <Image
              src="/images/kelsey-augusta-fnp-libertyville.png"
              alt="Kelsey Augusta, FNP-C, family nurse practitioner specializing in women’s health in Libertyville, Illinois"
              width={900}
              height={1024}
              className="h-auto w-full object-cover object-top"
            />
          </div>
          <div className="rounded-[2rem] border border-[var(--line)] bg-white p-8 md:p-10">
            <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
              Nurse Practitioner
            </p>
            <h2 className="font-display mt-2 text-3xl text-ink">
              {site.nursePractitioner.fullName}
            </h2>
            <p className="mt-2 text-teal-deep">{site.nursePractitioner.title}</p>
            <p className="mt-5 text-ink-soft">
              Kelsey Augusta, FNP-C, provides comprehensive women’s health care at Alliance OB/GYN,
              including preventive visits, gynecologic evaluations, prenatal and postpartum care, and
              patient education. She earned her BSN and MSN from Old Dominion University and is a
              trusted provider for women throughout the Lake County community.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-ink-soft sm:grid-cols-2">
              <li>FNP-C</li>
              <li>Women’s health</li>
              <li>Gynecology & obstetrics support</li>
              <li>Preventive care focus</li>
              <li>{site.nursePractitioner.education}</li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner title="Schedule with our Libertyville OB/GYN team" />
    </>
  );
}
