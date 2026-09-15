import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Fibroid Treatment in Libertyville, IL | Dr. Yasir Mekki",
  description:
    "Uterine fibroid evaluation and treatment in Libertyville with Dr. Yasir A. Mekki — symptoms, diagnosis, and surgical options including minimally invasive approaches.",
  alternates: { canonical: "/fibroids" },
};

export default function FibroidsPage() {
  return (
    <>
      <PageHero
        eyebrow="Fibroids"
        title="Fibroid Evaluation & Treatment in Libertyville"
        description="Uterine fibroids can cause heavy bleeding, pelvic pressure, pain, or fertility concerns. Dr. Yasir A. Mekki provides diagnosis and individualized treatment, including gynecologic surgery when needed."
      />
      <section className="section-pad pt-0">
        <div className="container-site max-w-3xl space-y-5 text-ink-soft">
          <p>
            Fibroids are common noncancerous uterine growths. Some cause few symptoms; others
            disrupt daily life. Evaluation often includes pelvic exam and ultrasound to understand
            size, number, and location.
          </p>
          <p>
            Treatment may include observation, medication, procedures, or surgery depending on
            symptoms and pregnancy goals. When surgery is appropriate, minimally invasive options
            may be considered.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/gynecologic-surgery" className="btn btn-secondary">
              Gynecologic Procedures and Surgeries
            </Link>
            <Link href="/abnormal-bleeding" className="btn btn-secondary">
              Abnormal Bleeding
            </Link>
          </div>
        </div>
      </section>
      <CtaBanner title="Schedule a fibroid consultation" />
    </>
  );
}
