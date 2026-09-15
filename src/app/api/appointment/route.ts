import { Resend } from "resend";
import { site } from "@/lib/site";

export const runtime = "nodejs";

type AppointmentPayload = {
  firstName?: string;
  lastName?: string;
  dob?: string;
  phone?: string;
  email?: string;
  reason?: string;
  website?: string; // honeypot
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: AppointmentPayload;

  try {
    body = (await request.json()) as AppointmentPayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot — bots fill this; humans never see it
  if (clean(body.website)) {
    return Response.json({ ok: true });
  }

  const firstName = clean(body.firstName);
  const lastName = clean(body.lastName);
  const dob = clean(body.dob);
  const phone = clean(body.phone);
  const email = clean(body.email);
  const reason = clean(body.reason);

  if (!firstName || !lastName || !dob || !phone || !email || !reason) {
    return Response.json({ error: "Please fill out all required fields." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return Response.json(
      { error: "Appointment requests are temporarily unavailable. Please call the office." },
      { status: 503 },
    );
  }

  const to = process.env.APPOINTMENT_TO_EMAIL || site.email;
  const from =
    process.env.APPOINTMENT_FROM_EMAIL || "Alliance OB/GYN <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const text = [
    "New appointment request from the Alliance OB/GYN website",
    "",
    `Name: ${firstName} ${lastName}`,
    `Date of birth: ${dob}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    "",
    "Reason for appointment:",
    reason,
  ].join("\n");

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Appointment request — ${firstName} ${lastName}`,
    text,
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json(
      { error: "We could not send your request. Please call the office." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
