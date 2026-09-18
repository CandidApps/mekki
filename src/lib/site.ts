export const site = {
  name: "Alliance OB/GYN",
  legalName: "Alliance OB/GYN",
  doctor: {
    fullName: "Dr. Yasir A. Mekki",
    shortName: "Dr. Mekki",
    credentials: "M.D.",
    title: "Board Certified Obstetrician Gynecologist",
    surgeonTitle: "Experienced Gynecologic Surgeon",
    languages: ["Spanish", "Arabic", "English"] as const,
    languagesNote: "Also familiar with French",
    yearsExperience: "39+",
    practiceSince: 1998,
    education: {
      medicalSchool: "University of Baghdad College of Medicine (1983)",
      residency: "University of Miami / Jackson Memorial Hospital — Obstetrics and Gynecology (1994–1998)",
    },
    boardCertification: "American Board of Obstetrics and Gynecology",
    memberships: ["American College of Obstetricians and Gynecologists"],
    npi: "1902947575",
  },
  nursePractitioner: {
    fullName: "Kelsey Augusta, FNP-C",
    title: "Family Nurse Practitioner Specializing in Women’s Health",
    education: "BSN & MSN — Old Dominion University, Norfolk, Virginia",
  },
  phone: "847-336-8472",
  phoneHref: "tel:8473368472",
  fax: "847-360-2229",
  email: "awebster@drmekkiobgyn.com",
  emailHref: "mailto:awebster@drmekkiobgyn.com",
  address: {
    street: "1795 N. Butterfield Rd Ste 101",
    city: "Libertyville",
    state: "IL",
    zip: "60048",
    full: "1795 N. Butterfield Rd Ste 101, Libertyville, IL 60048",
  },
  hours: [
    { day: "Monday", time: "8:00 AM – 6:00 PM" },
    { day: "Tuesday", time: "8:00 AM – 6:00 PM" },
    { day: "Wednesday", time: "Closed" },
    { day: "Thursday", time: "8:00 AM – 6:00 PM" },
    { day: "Friday", time: "Closed" },
    { day: "Saturday – Sunday", time: "Closed" },
  ],
  /** Dr. Mekki sees patients in the Libertyville office these days */
  doctorInOfficeDays: "Monday, Tuesday, and Thursday",
  doctorInOfficeNote:
    "Dr. Mekki is in the Libertyville office Monday, Tuesday, and Thursday. Call to schedule with Dr. Mekki or Kelsey Augusta, FNP-C.",
  hospitals: [
    "Northwestern Medicine Lake Forest Hospital",
    "Vista Medical Center East",
  ],
  insuranceNote:
    "Call the member services number on the back of your insurance card to check your benefits. Ask what coverage you have and any out-of-pocket costs (deductible, coinsurance, etc.). Get the name of the person you speak with and a call reference number. This call is not an authorization — it helps you make an informed decision before scheduling.",
  googleMapsUrl: "https://share.google/WGCNagLqgF3Pz9hjb",
  googleReviewsUrl:
    "https://www.google.com/search?q=Alliance+OB%2FGYN+Dr+Yasir+Mekki+Libertyville+reviews",
  healthgradesUrl: "https://www.healthgrades.com/physician/dr-yasir-mekki-27bgn",
  social: {
    facebook: "https://business.facebook.com/WomensHealthPartnersIL/",
    instagram: "https://www.instagram.com/womenshealthpartnersil/",
  },
  tagline: "Caring for Women, One Patient at a Time",
  url: "https://www.drmekkiobgyn.com",
  patientForms: [
    {
      title: "GYN Intake Packet",
      audience: "New Patients",
      description:
        "Complete before your first gynecology visit. Includes patient information, health history, and consent forms.",
      links: [
        {
          label: "English",
          href: "https://myupdox.com/form-dashboard/p/100d8817-a2ad-4b01-aa7e-f4318cddccfa",
        },
        {
          label: "Español",
          href: "https://myupdox.com/form-dashboard/p/9858c617-811c-4536-954e-4fb1b3771e18",
        },
      ],
    },
    {
      title: "New OB Intake Packet",
      audience: "Obstetrics",
      description:
        "Complete before your first obstetrics visit. Includes patient information, pregnancy history, and consent forms.",
      links: [
        {
          label: "English",
          href: "https://myupdox.com/form-dashboard/p/6fc9e460-c260-430e-9aa2-4b99bd0b6af2",
        },
        {
          label: "Español",
          href: "https://myupdox.com/form-dashboard/p/4d223573-c543-4430-8c0a-078d3c0dc754",
        },
      ],
    },
    {
      title: "Online Paperwork Form",
      audience: "All Patients",
      description:
        "Complete your required paperwork online before your visit. Submitted securely through our online form system.",
      links: [
        {
          label: "Open Form",
          href: "https://myupdox.com/form-dashboard/p/100d8817-a2ad-4b01-aa7e-f4318cddccfa",
        },
      ],
    },
  ],
} as const;

export const servicesNavLinks = [
  { href: "/obstetrics", label: "Obstetrics & Pregnancy" },
  { href: "/high-risk-pregnancy", label: "High-Risk Pregnancy" },
  { href: "/gynecology", label: "Gynecology & Women’s Health" },
  { href: "/gynecologic-surgery", label: "Gynecologic Procedures and Surgeries" },
  { href: "/contraception", label: "Contraception" },
  { href: "/infertility", label: "Infertility" },
  { href: "/menopause", label: "Menopause" },
  { href: "/preconception", label: "Preconception" },
  { href: "/abnormal-bleeding", label: "Abnormal Bleeding" },
  { href: "/fibroids", label: "Fibroids" },
  { href: "/votiva", label: "Votiva Feminine Wellness" },
] as const;

/** Shown in the main desktop nav bar */
export const primaryNavLinks = [
  { href: "/about", label: "About" },
  { href: "/providers", label: "Providers" },
  {
    href: "/services",
    label: "Services",
    children: servicesNavLinks,
  },
  { href: "/contact", label: "Contact" },
] as const;

/** Grouped under “More” on desktop; full list still in mobile menu */
export const secondaryNavLinks = [
  { href: "/patient-resources", label: "Patient Resources" },
  { href: "/insurance", label: "Insurance" },
  { href: "/blog", label: "Blog" },
] as const;

/** Full navigation for mobile menu */
export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/providers", label: "Providers" },
  {
    href: "/services",
    label: "Services",
    children: servicesNavLinks,
  },
  { href: "/patient-resources", label: "Patient Resources" },
  { href: "/insurance", label: "Insurance" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
