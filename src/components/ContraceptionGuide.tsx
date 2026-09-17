"use client";

import { useState } from "react";
import Link from "next/link";

type Filter = "all" | "low-maintenance" | "lighter-periods" | "no-hormones" | "self-managed";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All options" },
  { id: "low-maintenance", label: "Low maintenance" },
  { id: "lighter-periods", label: "Lighter periods" },
  { id: "no-hormones", label: "No hormones" },
  { id: "self-managed", label: "I control when I use it" },
];

const methods = [
  {
    title: "Hormonal IUD",
    text: "Long-acting, reversible birth control that can make periods lighter for many patients.",
    remember: "Every few years",
    hormones: "Yes",
    tags: ["low-maintenance", "lighter-periods"] as Filter[],
  },
  {
    title: "Copper IUD",
    text: "A long-acting, reversible option for patients who want to avoid hormones.",
    remember: "Every few years",
    hormones: "No",
    tags: ["low-maintenance", "no-hormones"] as Filter[],
  },
  {
    title: "Arm implant",
    text: "A small, flexible implant placed under the skin for long-acting pregnancy prevention.",
    remember: "Every few years",
    hormones: "Yes",
    tags: ["low-maintenance"] as Filter[],
  },
  {
    title: "Pill, patch or ring",
    text: "Short-acting options you manage on a daily, weekly, or monthly schedule.",
    remember: "Regular schedule",
    hormones: "Yes",
    tags: ["lighter-periods", "self-managed"] as Filter[],
  },
  {
    title: "Birth control shot",
    text: "An injection given on a repeating schedule for patients who prefer not to use a daily method.",
    remember: "Every 3 months",
    hormones: "Yes",
    tags: ["low-maintenance", "lighter-periods"] as Filter[],
  },
  {
    title: "Barrier methods",
    text: "Options used at the time of sex. Condoms also help reduce the risk of many STIs.",
    remember: "Each time",
    hormones: "No",
    tags: ["no-hormones", "self-managed"] as Filter[],
  },
];

const statusLabels: Record<Exclude<Filter, "all">, string> = {
  "low-maintenance": "low-maintenance options",
  "lighter-periods": "options that may help lighten periods",
  "no-hormones": "hormone-free options",
  "self-managed": "options you control when using",
};

export function ContraceptionGuide() {
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <section className="section-pad pt-0 surface-white">
      <div className="container-site">
        <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
          A quick way to begin
        </p>
        <h2 className="font-display mt-2 text-3xl text-ink md:text-4xl">
          What matters most to you?
        </h2>
        <p className="mt-3 max-w-3xl text-ink-soft">
          Select a priority to see which methods are often worth discussing. This is a conversation
          starter — not a medical recommendation.
        </p>

        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter birth control options">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                filter === item.id
                  ? "border-teal bg-teal text-white"
                  : "border-[var(--line)] bg-white text-ink hover:border-teal/40"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-soft" aria-live="polite">
          {filter === "all"
            ? "Showing all commonly discussed options."
            : `Highlighting ${statusLabels[filter]}. Your provider will help confirm what is medically appropriate.`}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {methods.map((method) => {
            const match = filter === "all" || method.tags.includes(filter);
            return (
              <article
                key={method.title}
                className={`rounded-[1.5rem] border bg-white p-6 transition ${
                  match
                    ? "border-[var(--line)] opacity-100"
                    : "border-[var(--line)] opacity-40"
                }`}
              >
                <h3 className="font-display text-2xl text-ink">{method.title}</h3>
                <p className="mt-3 text-ink-soft">{method.text}</p>
                <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <dt className="font-semibold text-ink">Remember it</dt>
                    <dd className="mt-1 text-ink-soft">{method.remember}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Hormones</dt>
                    <dd className="mt-1 text-ink-soft">{method.hormones}</dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-[var(--line)] bg-white p-6 md:flex md:items-center md:justify-between md:gap-6">
          <div>
            <p className="font-semibold text-ink">Thinking about a permanent option?</p>
            <p className="mt-2 text-ink-soft">
              We can discuss sterilization if you are certain you do not want a future pregnancy.
            </p>
          </div>
          <Link href="/gynecologic-surgery" className="btn btn-secondary mt-4 shrink-0 md:mt-0">
            Talk with our team →
          </Link>
        </div>
      </div>
    </section>
  );
}
