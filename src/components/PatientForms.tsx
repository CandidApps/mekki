import { site } from "@/lib/site";

type PatientFormsProps = {
  compact?: boolean;
};

export function PatientForms({ compact = false }: PatientFormsProps) {
  return (
    <div
      className={
        compact
          ? "rounded-[1.75rem] border border-[var(--line)] bg-white p-6"
          : "rounded-[1.75rem] border border-[var(--line)] bg-white p-6 md:p-8"
      }
    >
      <p className="text-sm font-semibold tracking-[0.16em] text-teal uppercase">
        Forms & online check-in
      </p>
      <h2 className={`font-display text-ink ${compact ? "mt-2 text-2xl" : "mt-2 text-3xl"}`}>
        Complete your paperwork online
      </h2>
      <p className="mt-3 text-ink-soft">
        Fill out forms securely through Updox before your visit (about 10 minutes). Once submitted,
        the paperwork comes directly to our office — no account required.
      </p>

      <ul className={`mt-6 grid gap-4 ${compact ? "" : "md:grid-cols-3"}`}>
        {site.patientForms.map((form) => (
          <li
            key={form.title}
            className="rounded-2xl border border-[var(--line)] bg-[var(--paper)]/60 p-5"
          >
            <p className="text-xs font-semibold tracking-[0.12em] text-teal uppercase">
              {form.audience}
            </p>
            <h3 className="mt-1 font-display text-xl text-ink">{form.title}</h3>
            <p className="mt-2 text-sm text-ink-soft">{form.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {form.links.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary px-4 py-2 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-sm text-ink-soft">
        Prefer paper forms? Arrive 15 minutes early, or call{" "}
        <a className="font-semibold text-teal hover:underline" href={site.phoneHref}>
          {site.phone}
        </a>{" "}
        with questions.
      </p>
    </div>
  );
}
