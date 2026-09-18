import { site } from "@/lib/site";
import { featuredReviews } from "@/lib/reviews";

export function PracticeJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "MedicalClinic", "LocalBusiness"],
        "@id": `${site.url}/#practice`,
        name: site.name,
        url: site.url,
        telephone: site.phone,
        email: site.email,
        image: `${site.url}/images/logo.png`,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.state,
          postalCode: site.address.zip,
          addressCountry: "US",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Thursday"],
            opens: "08:00",
            closes: "18:00",
          },
        ],
        medicalSpecialty: ["Obstetric", "Gynecologic"],
        areaServed: ["Libertyville, IL", "Lake County, IL"],
        availableLanguage: [...site.doctor.languages],
        sameAs: [site.social.facebook, site.social.instagram],
      },
      {
        "@type": "Physician",
        "@id": `${site.url}/#dr-mekki`,
        name: "Yasir A. Mekki, MD",
        honorificPrefix: "Dr.",
        url: `${site.url}/providers`,
        image: `${site.url}/images/dr-yasir-mekki-obgyn-libertyville.png`,
        telephone: site.phone,
        medicalSpecialty: ["Obstetric", "Gynecologic"],
        knowsLanguage: [...site.doctor.languages],
        worksFor: { "@id": `${site.url}/#practice` },
        hospitalAffiliation: site.hospitals.map((name) => ({
          "@type": "Hospital",
          name,
        })),
        alumniOf: [
          { "@type": "CollegeOrUniversity", name: "University of Baghdad College of Medicine" },
          { "@type": "CollegeOrUniversity", name: "University of Miami / Jackson Memorial Hospital" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "What languages does Dr. Mekki speak?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dr. Yasir A. Mekki speaks English, Arabic, and Spanish — including Spanish for patients and families who prefer care in Spanish.",
            },
          },
          {
            "@type": "Question",
            name: "Does Dr. Mekki perform gynecologic surgery?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Dr. Mekki is an experienced gynecologic surgeon offering procedures including minimally invasive options when clinically appropriate.",
            },
          },
          {
            "@type": "Question",
            name: "Where does Dr. Mekki practice?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `Alliance OB/GYN is located at ${site.address.full}.`,
            },
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Patient reviews",
        itemListElement: featuredReviews.slice(0, 3).map((review, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Review",
            reviewBody: review.quote,
            author: { "@type": "Person", name: review.author },
            datePublished: review.date,
            publisher: { "@type": "Organization", name: review.source },
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
