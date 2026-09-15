import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Alliance OB/GYN in Libertyville, IL",
  description:
    "Learn how Dr. Yasir A. Mekki has provided trusted obstetrics and gynecology care in Libertyville and Lake County since 1998. English, Arabic, and Spanish.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Alliance OB/GYN"
        title="Trusted by Generations of Women in Lake County"
        description="Alliance OB/GYN is the Libertyville practice of Dr. Yasir A. Mekki — a board certified obstetrician gynecologist and experienced gynecologic surgeon who has cared for women and families in Lake County since 1998."
      />

      <section className="section-pad pt-0">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-lg text-ink-soft">
            <p>
              Patients choose Alliance OB/GYN because care feels personal, not templated.{" "}
              {site.doctor.fullName} takes time to listen, explain options clearly, and stay with
              patients through pregnancy, annual women’s health visits, complex gynecologic
              concerns, and surgery when needed.
            </p>
            <p>
              Serving Libertyville and the surrounding Lake County community for decades means many
              patients return year after year — and often refer sisters, daughters, and friends. That
              continuity is part of what makes this practice feel distinctly like Dr. Mekki’s office.
            </p>
            <p>
              Care is available in <strong>English, Arabic, and Spanish</strong>, which helps many
              families communicate comfortably about pregnancy, contraception, menopause, and
              surgical decisions.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-8">
            <h2 className="font-display text-3xl text-ink">Our commitment</h2>
            <ul className="mt-6 space-y-4 text-ink-soft">
              <li>
                <strong className="text-ink">Experienced OB/GYN care</strong> — decades of obstetrics
                and gynecology experience with physician-led decision making.
              </li>
              <li>
                <strong className="text-ink">Surgical expertise</strong> — evaluation and treatment
                with an experienced gynecologic surgeon in Libertyville, Illinois.
              </li>
              <li>
                <strong className="text-ink">Multilingual communication</strong> — English, Arabic,
                and Spanish.
              </li>
              <li>
                <strong className="text-ink">Local roots</strong> — established Lake County practice
                since {site.doctor.practiceSince}.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-site rounded-[2rem] bg-teal-deep px-6 py-10 text-white md:px-10">
          <h2 className="font-display text-3xl">Hospital affiliations</h2>
          <p className="mt-3 max-w-3xl text-white/80">
            Dr. Mekki maintains hospital affiliations that support obstetric delivery and surgical
            care. Please confirm current privileges and delivery location when you schedule prenatal
            care.
          </p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {site.hospitals.map((hospital) => (
              <li key={hospital} className="rounded-2xl bg-white/10 px-5 py-4">
                {hospital}
              </li>
            ))}
          </ul>
          <Link href="/providers" className="btn btn-sand mt-8">
            Meet Our Providers
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
