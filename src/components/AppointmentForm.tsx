"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const visitReasons = [
  "Annual wellness exam",
  "Pregnancy / new OB visit",
  "Gynecology concern",
  "Birth control consultation",
  "Menopause care",
  "Procedure or surgery consultation",
  "Other / not sure",
];

const providers = ["First Available", "Dr. Mekki", "Kelsey, NP", "No Preference"];

export function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setMessage("");

    const visitReason = String(data.get("visitReason") || "");
    const details = String(data.get("reason") || "").trim();
    const preferredProvider = String(data.get("preferredProvider") || "");
    const combinedReason = [
      visitReason ? `Visit type: ${visitReason}` : "",
      preferredProvider ? `Preferred provider: ${preferredProvider}` : "",
      details ? `Details: ${details}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          dob: data.get("dob"),
          phone: data.get("phone"),
          email: data.get("email"),
          reason: combinedReason || details,
          preferredProvider,
          website: data.get("website"),
        }),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(result.error || "Something went wrong. Please call the office.");
        return;
      }

      form.reset();
      setStatus("success");
      setMessage(
        "Thank you — your appointment request was sent. A member of our care team will contact you to confirm a date and time.",
      );
    } catch {
      setStatus("error");
      setMessage(`Unable to send right now. Please call ${site.phone} or email ${site.email}.`);
    }
  }

  return (
    <form
      id="appointment"
      onSubmit={onSubmit}
      className="h-fit w-full rounded-[1.75rem] border border-[var(--line)] bg-white p-6 shadow-[var(--shadow)] md:p-8"
    >
      <h2 className="font-display text-3xl text-ink">Tell us how we can help</h2>
      <p className="mt-2 text-ink-soft">
        Share your preferences below. A member of our care team will contact you to confirm a date
        and time. Please do not include urgent or sensitive medical details — call{" "}
        <a className="font-semibold text-teal" href={site.phoneHref}>
          {site.phone}
        </a>{" "}
        for prompt guidance.
      </p>

      <div aria-hidden="true" className="absolute left-[-10000px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" name="website" type="text" />
        </label>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="grid gap-1 text-sm">
          <span className="font-medium">First name</span>
          <input required name="firstName" className="rounded-xl border border-[var(--line)] px-3 py-3" />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium">Last name</span>
          <input required name="lastName" className="rounded-xl border border-[var(--line)] px-3 py-3" />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium">Date of birth</span>
          <input required name="dob" type="date" className="rounded-xl border border-[var(--line)] px-3 py-3" />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium">Preferred provider</span>
          <select
            name="preferredProvider"
            defaultValue="First Available"
            className="rounded-xl border border-[var(--line)] bg-white px-3 py-3"
          >
            {providers.map((provider) => (
              <option key={provider} value={provider}>
                {provider}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm md:col-span-2">
          <span className="font-medium">Reason for visit</span>
          <select
            required
            name="visitReason"
            defaultValue=""
            className="rounded-xl border border-[var(--line)] bg-white px-3 py-3"
          >
            <option value="" disabled>
              Select a reason
            </option>
            {visitReasons.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium">Phone</span>
          <input required name="phone" type="tel" className="rounded-xl border border-[var(--line)] px-3 py-3" />
        </label>
        <label className="grid gap-1 text-sm">
          <span className="font-medium">Email</span>
          <input required name="email" type="email" className="rounded-xl border border-[var(--line)] px-3 py-3" />
        </label>
        <label className="grid gap-1 text-sm md:col-span-2">
          <span className="font-medium">Anything else we should know? (optional)</span>
          <textarea name="reason" rows={3} className="rounded-xl border border-[var(--line)] px-3 py-3" />
        </label>
      </div>

      <p className="mt-4 text-sm text-ink-soft">
        Submitting a request does not confirm an appointment. Our team will contact you to finalize
        scheduling.
      </p>

      <button type="submit" className="btn btn-primary mt-6" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Continue Request"}
      </button>

      {message ? (
        <p
          className={`mt-3 text-sm ${status === "success" ? "text-teal" : "text-red-700"}`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
