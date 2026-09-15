import Link from "next/link";
import { site } from "@/lib/site";

type CtaBannerProps = {
  title?: string;
  text?: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function CtaBanner({
  title = "Ready to schedule?",
  text = `Call our Libertyville office or request an appointment with ${site.doctor.fullName}.`,
  primaryHref = "/contact#appointment",
  primaryLabel = "Request an Appointment",
}: CtaBannerProps) {
  return (
    <section className="section-pad surface-paper">
      <div className="container-site overflow-hidden rounded-[2rem] bg-teal-deep px-6 py-10 text-white md:px-12 md:py-12">
        <div className="grid items-center gap-8 md:grid-cols-[1.4fr_auto]">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
            <p className="mt-3 max-w-2xl text-white/80">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={primaryHref} className="btn btn-sand">
              {primaryLabel}
            </Link>
            <a href={site.phoneHref} className="btn btn-secondary">
              Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
