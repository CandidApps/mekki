"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, primaryNavLinks, secondaryNavLinks, site } from "@/lib/site";

type NavLink = {
  href: string;
  label: string;
  children?: readonly { href: string; label: string }[];
};

function NavDropdown({
  link,
  align = "left",
}: {
  link: NavLink;
  align?: "left" | "right";
}) {
  if (!link.children) return null;

  return (
    <div className="group relative">
      <Link
        href={link.href}
        className="inline-flex items-center justify-center rounded-full px-2.5 py-2 text-[13px] font-medium leading-tight text-ink whitespace-nowrap hover:bg-teal-soft/70 xl:px-3 xl:text-sm"
      >
        {link.label}
      </Link>
      {/* pt-1 keeps a continuous hover bridge so the menu does not close in the gap */}
      <div
        className={`invisible absolute top-full z-20 pt-1 opacity-0 transition group-hover:visible group-hover:opacity-100 ${
          align === "right" ? "right-0" : "left-0"
        }`}
      >
        <div className="min-w-[240px] rounded-2xl border border-[var(--line)] bg-white p-2 shadow-[var(--shadow)]">
          {link.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block rounded-xl px-3 py-2 text-sm text-ink-soft hover:bg-paper-deep hover:text-teal-deep"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/95 backdrop-blur-md">
      <div className="border-b border-[var(--line)] bg-teal-deep text-white">
        <div className="container-site flex items-center justify-between gap-3 px-5 py-2 text-sm">
          <a
            className="hidden truncate text-white/90 underline-offset-2 hover:underline lg:block"
            href={site.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {site.address.full}
          </a>
          <div className="flex w-full items-center justify-between gap-4 lg:w-auto lg:justify-end">
            <a className="font-semibold hover:underline" href={site.phoneHref}>
              {site.phone}
            </a>
            <a className="hidden hover:underline xl:inline" href={site.emailHref}>
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div className="container-site flex items-center justify-between gap-3 px-5 py-2.5">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Alliance OB/GYN — Libertyville, Lake County"
            width={160}
            height={30}
            className="h-7 w-auto sm:h-8"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary">
          {primaryNavLinks.map((link) =>
            "children" in link && link.children ? (
              <NavDropdown key={link.href} link={link} />
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex items-center justify-center rounded-full px-2.5 py-2 text-[13px] font-medium leading-tight text-ink whitespace-nowrap hover:bg-teal-soft/70 xl:px-3 xl:text-sm"
              >
                {link.label}
              </Link>
            ),
          )}

          <div className="group relative">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full px-2.5 py-2 text-[13px] font-medium leading-tight text-ink whitespace-nowrap hover:bg-teal-soft/70 xl:px-3 xl:text-sm"
            >
              More
            </button>
            <div className="invisible absolute right-0 top-full z-20 pt-1 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="min-w-[200px] rounded-2xl border border-[var(--line)] bg-white p-2 shadow-[var(--shadow)]">
                {secondaryNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-xl px-3 py-2 text-sm text-ink-soft hover:bg-paper-deep hover:text-teal-deep"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact#appointment"
            className="btn btn-primary ml-2 shrink-0 px-4 py-2.5 text-[13px] xl:text-sm"
          >
            Request Appointment
          </Link>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <Link href="/contact#appointment" className="btn btn-primary px-3 py-2 text-xs sm:text-sm">
            Request Appointment
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-white"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span className={`h-0.5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-[var(--line)] bg-white xl:hidden">
          <div className="container-site flex max-h-[70vh] flex-col gap-1 overflow-y-auto px-5 py-4">
            {navLinks.map((link) =>
              "children" in link && link.children ? (
                <div key={link.href} className="border-b border-[var(--line)] pb-2">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-left font-medium"
                    onClick={() => setServicesOpen((v) => !v)}
                  >
                    {link.label}
                    <span aria-hidden>{servicesOpen ? "−" : "+"}</span>
                  </button>
                  {servicesOpen
                    ? link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 pl-3 text-ink-soft"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))
                    : null}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-[var(--line)] py-3 font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
