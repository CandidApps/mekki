import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accepted Insurance Plans | Alliance OB/GYN Libertyville",
  description:
    "Learn how to verify insurance benefits before your visit with Alliance OB/GYN in Libertyville. Call our office to schedule after checking coverage.",
  alternates: { canonical: "/insurance" },
};

export default function InsurancePage() {
  return (
    <>
      <PageHero
        eyebrow="Insurance"
        title="Accepted Insurance Plans"
        description={site.insuranceNote}
      />
      <section className="section-pad pt-0">
        <div className="container-site max-w-3xl space-y-6">
          <div className="rounded-[1.75rem] border border-[var(--line)] bg-white p-8">
            <h2 className="font-display text-2xl text-ink">Before you schedule</h2>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-ink-soft">
              <li>Call the member services number on the back of your insurance card.</li>
              <li>
                Ask about coverage for obstetrics and gynecology visits, and any deductible or
                coinsurance.
              </li>
              <li>Write down the representative’s name and a call reference number.</li>
              <li>
                Then call our Libertyville office at{" "}
                <a className="font-semibold text-teal" href={site.phoneHref}>
                  {site.phone}
                </a>{" "}
                to schedule your appointment.
              </li>
            </ol>
            <p className="mt-6 text-sm text-ink-soft">
              Checking benefits with your insurer is not the same as an authorization. Plan
              participation can change, so please confirm coverage for your specific visit type
              before you come in.
            </p>
          </div>
        </div>
      </section>
      <CtaBanner title="Ready to schedule after checking benefits?" />
    </>
  );
}
