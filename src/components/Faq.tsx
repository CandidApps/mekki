type FaqItem = { question: string; answer: string };

export function Faq({ items, title = "Frequently Asked Questions" }: { items: FaqItem[]; title?: string }) {
  return (
    <section className="section-pad surface-paper">
      <div className="container-site">
        <h2 className="font-display text-3xl text-ink md:text-4xl">{title}</h2>
        <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">
          {items.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="cursor-pointer list-none pr-8 font-semibold text-ink marker:content-none">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <span className="text-teal transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-ink-soft">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
