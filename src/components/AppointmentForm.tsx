"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setMessage("");

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
          reason: data.get("reason"),
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
      setMessage("Thank you — your appointment request was sent. We will respond within 24 hours.");
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
      <h2 className="font-display text-3xl text-ink">Request an Appointment</h2>
      <p className="mt-2 text-ink-soft">
        We aim to respond within 24 hours. For urgent matters, call{" "}
        <a className="font-semibold text-teal" href={site.phoneHref}>
          {site.phone}
        </a>
        .
      </p>

      {/* Honeypot field — hidden from users */}
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
          <span className="font-medium">Phone</span>
          <input required name="phone" type="tel" className="rounded-xl border border-[var(--line)] px-3 py-3" />
        </label>
        <label className="grid gap-1 text-sm md:col-span-2">
          <span className="font-medium">Email</span>
          <input required name="email" type="email" className="rounded-xl border border-[var(--line)] px-3 py-3" />
        </label>
        <label className="grid gap-1 text-sm md:col-span-2">
          <span className="font-medium">Reason for appointment</span>
          <textarea
            required
            name="reason"
            rows={4}
            className="rounded-xl border border-[var(--line)] px-3 py-3"
          />
        </label>
      </div>

      <button type="submit" className="btn btn-primary mt-6" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Submit Request"}
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
