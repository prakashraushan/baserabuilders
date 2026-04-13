import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "House Construction Cost in Bangalore (2026 Guide) | Per Sq Ft Rates",
  description:
    "Complete guide to house construction cost in Bangalore for 2026. Know the cost per sq ft for basic to premium builds, factors affecting price, and get a free estimate from Baserabuilders.",
  keywords: [
    "house construction cost in Bangalore",
    "construction cost per sq feet Bangalore",
    "home construction cost Bangalore 2026",
    "estimate building cost Bangalore",
    "house construction cost per sq ft",
    "residential construction cost Bangalore",
    "building construction cost Bangalore",
    "cost to build a house Bangalore",
  ],
  alternates: { canonical: `${SITE_URL}/construction-cost-bangalore` },
  openGraph: {
    title: "House Construction Cost in Bangalore (2026 Guide)",
    description:
      "Know the cost per sq ft to build a house in Bangalore. Basic ₹1,500–₹1,800 | Premium ₹2,000–₹3,500. Get a free estimate from Baserabuilders.",
    url: `${SITE_URL}/construction-cost-bangalore`,
  },
};

const costTiers = [
  {
    tier: "Economy",
    range: "₹1,200 – ₹1,500",
    unit: "per sq.ft.",
    description:
      "Standard materials, basic fittings, simple design. Suitable for budget-conscious builds where functionality takes precedence over aesthetics.",
    features: [
      "Standard brick/block construction",
      "Basic tiles and flooring",
      "Standard electrical & plumbing",
      "Minimal interior finishing",
      "No false ceiling or woodwork",
    ],
    tag: "Budget",
    tagColor: "text-charcoal/60 bg-warm-gray",
  },
  {
    tier: "Standard",
    range: "₹1,500 – ₹2,000",
    unit: "per sq.ft.",
    description:
      "Good quality materials, better fittings, and improved finishes. The most popular choice for Bangalore homeowners seeking a balance of quality and cost.",
    features: [
      "Quality brick/AAC block construction",
      "Mid-range tiles and vitrified flooring",
      "Branded electrical & CP fittings",
      "Basic modular kitchen provision",
      "Simple false ceiling in living/bedroom",
    ],
    tag: "Most Popular",
    tagColor: "text-charcoal bg-gold",
    highlight: true,
  },
  {
    tier: "Premium",
    range: "₹2,000 – ₹3,500",
    unit: "per sq.ft.",
    description:
      "Premium materials, custom design, luxury fittings, and full interior design. For those who want a bespoke home with no compromises on quality.",
    features: [
      "High-end imported tiles, marble, or hardwood",
      "Premium branded fittings (Kohler, Grohe, etc.)",
      "Full modular kitchen with appliances",
      "Designer false ceiling with integrated lighting",
      "Complete interior design & custom joinery",
    ],
    tag: "Premium",
    tagColor: "text-warm-white bg-charcoal",
  },
];

const factors = [
  {
    title: "Location",
    desc: "Construction costs vary across Bangalore. Premium localities like Whitefield, Indiranagar, and Koramangala may have higher costs due to logistics and regulations compared to areas like Electronic City or Sarjapur.",
  },
  {
    title: "Materials",
    desc: "The choice between standard, ISI-certified, or imported materials significantly impacts cost. We always recommend ISI-certified materials as the minimum standard for structural safety.",
  },
  {
    title: "Design Complexity",
    desc: "Simple rectangular layouts cost less than G+2 or G+3 buildings, cantilever designs, curved walls, or homes with large basement areas.",
  },
  {
    title: "Size (sq.ft.)",
    desc: "Larger homes benefit from economies of scale — cost per sq.ft. generally decreases for projects above 3,000 sq.ft. Smaller apartments (<1,000 sq.ft.) often cost more per sq.ft.",
  },
  {
    title: "Finishing Level",
    desc: "Civil finishing, interior design, modular kitchen, false ceiling, and custom woodwork each add to the cost. You can phase these over time to manage budget.",
  },
  {
    title: "Regulatory Approvals",
    desc: "BBMP/BDA plan sanction fees, property tax, water connection, electricity connection, and BESCOM charges are additional to construction cost.",
  },
];

const faqs = [
  {
    q: "What is the cost to build a house in Bangalore in 2026?",
    a: "The cost to build a house in Bangalore in 2026 typically ranges from ₹1,200 to ₹3,500 per sq.ft. depending on material quality, design complexity, and finishing level. A 1,500 sq.ft. standard home would cost approximately ₹22.5 lakh to ₹30 lakh in construction cost alone.",
  },
  {
    q: "Does the construction cost include interior design?",
    a: "Standard construction cost estimates typically cover civil work, basic electrical, plumbing, and flooring. Interior design, modular kitchen, false ceiling, and custom furniture are usually quoted separately. Baserabuilders provides an itemised estimate so you know exactly what's included.",
  },
  {
    q: "How long does house construction take in Bangalore?",
    a: "A typical 1,200–2,000 sq.ft. residential home takes 10–14 months from BBMP approval to possession. Larger homes or G+2 buildings may take 16–20 months. We provide a detailed schedule with milestones before work begins.",
  },
  {
    q: "Can I build in phases to manage the budget?",
    a: "Yes. Many Bangalore homeowners choose to complete civil and structural work first, then phase interior finishing over 2–3 years. We can design and plan with this approach in mind from the start.",
  },
  {
    q: "What is the BBMP approval cost in Bangalore?",
    a: "BBMP building plan sanction fees depend on the plot size, number of floors, and FAR used. For a typical residential plot, expect ₹50,000 to ₹2,00,000 in government fees. Baserabuilders handles all approvals on your behalf.",
  },
];

export default function ConstructionCostPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="bg-charcoal py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              2026 Guide
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-warm-white sm:text-5xl">
              House Construction Cost in Bangalore
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-warm-white/70">
              Planning to build your dream home? Here&apos;s everything you need
              to know about construction costs in Bangalore — from cost per sq.ft.
              to factors that affect your final budget.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-gold-dark hover:shadow-lg"
              >
                Get a Free Estimate
              </Link>
              <a
                href="tel:+919035817133"
                className="text-sm font-semibold text-warm-white/70 transition-colors hover:text-gold"
              >
                Or call +91 90358 17133
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cost Tiers ── */}
      <section className="bg-warm-white py-16 sm:py-24" aria-labelledby="cost-tiers-heading">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Cost Breakdown
            </p>
            <h2
              id="cost-tiers-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Approximate House Construction Cost
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/60">
              These are indicative rates for Bangalore (2026). Actual costs
              depend on your specific site, design, and material choices.
              Contact us for a detailed, itemised estimate.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-3">
            {costTiers.map((tier) => (
              <div
                key={tier.tier}
                className={`relative rounded-xl border p-8 ${
                  tier.highlight
                    ? "border-gold shadow-xl shadow-gold/10"
                    : "border-warm-gray"
                } bg-white`}
              >
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${tier.tagColor}`}
                >
                  {tier.tag}
                </span>
                <h3 className="mt-4 text-xl font-bold text-charcoal">
                  {tier.tier}
                </h3>
                <p className="mt-1 text-3xl font-bold tracking-tight text-gold">
                  {tier.range}
                </p>
                <p className="text-sm text-charcoal/50">{tier.unit}</p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
                  {tier.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-charcoal/70">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 block rounded-lg px-6 py-3 text-center text-sm font-semibold transition-all duration-200 ${
                    tier.highlight
                      ? "bg-gold text-charcoal hover:bg-gold-dark hover:shadow-lg"
                      : "border border-warm-gray text-charcoal hover:border-gold hover:text-gold"
                  }`}
                >
                  Get a {tier.tier} Quote
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-charcoal/40">
            * All rates are approximate and subject to site-specific factors.
            Final costs are provided in a detailed written estimate after a free
            site consultation.
          </p>
        </div>
      </section>

      {/* ── Areas Served (elegant strip) ── */}
      <section className="border-b border-warm-gray bg-white py-8" aria-label="Areas served in Bangalore">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm font-semibold text-charcoal/50 sm:shrink-0">
              Serving clients across Bangalore:
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:justify-end">
              {[
                "Whitefield",
                "Sarjapur",
                "Electronic City",
                "Marathahalli",
                "HSR Layout",
                "Koramangala",
                "Indiranagar",
                "Jayanagar",
                "Hebbal",
                "Malleshwaram",
                "Bannerghatta Road",
                "Yelahanka",
                "JP Nagar",
                "Rajajinagar",
                "Banashankari",
              ].map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-warm-gray/60 px-3.5 py-1 text-xs font-medium text-charcoal/60"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Factors ── */}
      <section className="bg-warm-white py-16 sm:py-24" aria-labelledby="factors-heading">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              What Affects the Price?
            </p>
            <h2
              id="factors-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Factors That Determine Your Construction Cost
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {factors.map((factor, i) => (
              <div
                key={factor.title}
                className="rounded-xl border border-warm-gray bg-white p-6"
              >
                <span className="text-3xl font-bold text-gold/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-base font-bold text-charcoal">
                  {factor.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                  {factor.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="cost-faq-heading">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Common Questions
            </p>
            <h2
              id="cost-faq-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Construction Cost FAQs
            </h2>
          </div>

          <div className="mt-12 divide-y divide-warm-gray">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-charcoal list-none">
                  {faq.q}
                  <svg
                    className="h-5 w-5 shrink-0 text-gold transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal py-16" aria-labelledby="cost-cta-heading">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2
            id="cost-cta-heading"
            className="text-3xl font-bold tracking-tight text-warm-white sm:text-4xl"
          >
            Get a Free Construction Estimate
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-warm-white/60">
            Every project is unique. Share your requirements and we&apos;ll give
            you a detailed, itemised cost estimate at no charge — with no
            obligation to proceed.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-gold-dark hover:shadow-lg"
            >
              Request Free Estimate
            </Link>
            <a
              href="https://wa.me/919035817133?text=Hi%2C%20I%20want%20to%20know%20the%20construction%20cost%20estimate%20for%20my%20project%20in%20Bangalore."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border-2 border-warm-white/20 px-8 py-3.5 text-sm font-semibold text-warm-white transition-all duration-200 hover:border-gold hover:text-gold"
            >
              WhatsApp for Quick Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
