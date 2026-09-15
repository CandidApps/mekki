export type Review = {
  quote: string;
  author: string;
  date: string;
  source: "Healthgrades";
  sourceUrl: string;
  themes: string[];
};

/** Verbatim patient reviews from Healthgrades — do not invent or rewrite. */
export const featuredReviews: Review[] = [
  {
    quote:
      "Dr. Mekki delivered my daughter via c-section, and preformed laparoscopic surgery to fix my twisted-up ovary (ovary was dying) while I was in the first trimester with my current pregnancy. He is a confident and precise surgeon. I completely trust his abilities and judgement. He is mentally present and caring at all of my visits. I really feel like he looks out for me, as a family member would. His staff is also very caring, and easy to talk to about concerns.",
    author: "Patient in Gurnee",
    date: "Apr 30, 2018",
    source: "Healthgrades",
    sourceUrl: "https://www.healthgrades.com/physician/dr-yasir-mekki-27bgn",
    themes: ["Surgery", "Delivery", "Trust", "Staff"],
  },
  {
    quote:
      "Dr. Mekki was wonderful to me from beginning to end throughout my pregnancy. The staff was great as well during my prenatal visits. He made sure that I was comfortable & made sure my baby was healthy. I would recommend him to anyone because he is very caring & patient which means that he takes pride in his clients.",
    author: "Jasmine King",
    date: "Nov 14, 2017",
    source: "Healthgrades",
    sourceUrl: "https://www.healthgrades.com/physician/dr-yasir-mekki-27bgn",
    themes: ["Pregnancy", "Bedside manner", "Staff"],
  },
  {
    quote:
      "I've been seeing Dr Mekki for years. I've had several friends and family members come to him as well. He is very knowledgeable and has a very good in office nurse. He speaks Spanish which is helpful as most of my family speaks Spanish.",
    author: "Jennifer Rodriguez",
    date: "Nov 25, 2019",
    source: "Healthgrades",
    sourceUrl: "https://www.healthgrades.com/physician/dr-yasir-mekki-27bgn",
    themes: ["Long-term care", "Spanish", "Staff"],
  },
  {
    quote:
      "Love his office and his nurses!! Highly recommend them and Dr. Mekki! Would definitely come back again.",
    author: "Kayla",
    date: "May 25, 2021",
    source: "Healthgrades",
    sourceUrl: "https://www.healthgrades.com/physician/dr-yasir-mekki-27bgn",
    themes: ["Staff", "Trust"],
  },
  {
    quote:
      "The doctor is very detailed, courteous, and knowledgeable.",
    author: "Verified patient",
    date: "Jul 15, 2019",
    source: "Healthgrades",
    sourceUrl: "https://www.healthgrades.com/physician/dr-yasir-mekki-27bgn",
    themes: ["Bedside manner"],
  },
];
