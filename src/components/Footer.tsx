import Link from "next/link";
import { site } from "@/lib/site";

const footerLinks = [
  { href: "/obstetrics", label: "Obstetrics" },
  { href: "/gynecology", label: "Gynecology" },
  { href: "/gynecologic-surgery", label: "Gynecologic Procedures and Surgeries" },
  { href: "/high-risk-pregnancy", label: "High-Risk Pregnancy" },
  { href: "/providers", label: "Providers" },
  { href: "/insurance", label: "Insurance" },
  { href: "/patient-resources", label: "Patient Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-ink text-white">
      <div className="container-site grid gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl text-white">{site.name}</p>
          <p className="mt-3 max-w-md text-white/75">
            {site.doctor.fullName} is a board certified obstetrician gynecologist and experienced
            gynecologic surgeon serving women in Libertyville and Lake County since{" "}
            {site.doctor.practiceSince}. Care available in English, Arabic, and Spanish.
          </p>
          <div className="mt-6 space-y-1 text-white/85">
            <p>
              <a
                className="hover:underline"
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.address.street}
              </a>
            </p>
            <p>
              <a
                className="hover:underline"
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.address.city}, {site.address.state} {site.address.zip}
              </a>
            </p>
            <p>
              <a className="font-semibold hover:underline" href={site.phoneHref}>
                {site.phone}
              </a>
            </p>
            <p>
              <a className="hover:underline" href={site.emailHref}>
                {site.email}
              </a>
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
              <a
                className="text-sand hover:underline"
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                className="text-sand hover:underline"
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-sand uppercase">Explore</p>
          <ul className="mt-4 space-y-2 text-white/80">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-white" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-sand uppercase">
            Office Hours
          </p>
          <ul className="mt-4 space-y-2 text-white/80">
            {site.hours.map((item) => (
              <li key={item.day} className="flex justify-between gap-4">
                <span>{item.day}</span>
                <span>{item.time}</span>
              </li>
            ))}
          </ul>
          <Link href="/contact#appointment" className="btn btn-sand mt-6 text-sm">
            Request an Appointment
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-white/60">
        © {new Date().getFullYear()} {site.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
