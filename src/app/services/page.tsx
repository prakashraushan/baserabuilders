import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services, SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services | Construction & Interior Design in Bangalore",
  description:
    "Explore Baserabuilders' full range of services: residential construction, commercial construction, interior design, renovation, modular kitchens, and false ceiling in Bangalore. Expert team, premium materials.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Our Services | Construction & Interior Design — Baserabuilders Bangalore",
    description:
      "Residential & commercial construction, interior design, modular kitchens, renovation, and false ceiling solutions in Bangalore.",
    url: `${SITE_URL}/services`,
  },
};

const process = [
  {
    step: "01",
    title: "Free Consultation",
    desc: "We begin with a free site visit and in-depth discussion about your requirements, vision, and budget. No obligations, just honest advice.",
  },
  {
    step: "02",
    title: "Design & Estimate",
    desc: "Our designers create detailed plans and 3D visualisations. You receive a transparent, itemised cost estimate with zero hidden charges.",
  },
  {
    step: "03",
    title: "Approvals & Scheduling",
    desc: "We handle all BBMP permits and regulatory approvals, then present a detailed project schedule with clear milestones.",
  },
  {
    step: "04",
    title: "Construction & Execution",
    desc: "Our skilled site team begins work with daily progress updates, weekly review meetings, and strict quality checks at every stage.",
  },
  {
    step: "05",
    title: "Handover & Support",
    desc: "A thorough snagging walkthrough ensures everything is perfect before key handover. Post-completion support is always a call away.",
  },
];

const faqs = [
  {
    q: "How long does a typical residential construction project take?",
    a: "A new home construction in Bangalore typically takes 12–18 months depending on the size and complexity. We provide a detailed schedule at the start and keep you updated throughout.",
  },
  {
    q: "Do you handle BBMP and BDA approvals?",
    a: "Yes. We manage all regulatory paperwork including BBMP building plan sanction, BDA approvals, occupancy certificates, and other statutory requirements.",
  },
  {
    q: "What is your warranty on completed work?",
    a: "We provide a 12-month structural defect warranty and 6-month warranty on all finishing work. Our after-sales support team remains available beyond the warranty period.",
  },
  {
    q: "Can you work within a fixed budget?",
    a: "Absolutely. We work closely with your budget constraints. Our transparent quotation process ensures you know where every rupee is going, and we never recommend unnecessary upgrades.",
  },
  {
    q: "Do you take up interior design projects independently (without construction)?",
    a: "Yes. Our interior design and modular kitchen services are available as standalone projects for existing spaces across Bangalore.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative overflow-hidden bg-charcoal py-20 sm:py-28">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=600&fit=crop"
          alt="Baserabuilders construction and interior design services in Bangalore"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            What We Do
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-warm-white sm:text-5xl">
            Complete Construction &amp;
            <br />
            Design Services in Bangalore
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-warm-white/70">
            From the first brick to the final flourish — every service you need
            to build, design, and transform your space, delivered under one roof
            by a team you can trust.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-gold-dark hover:shadow-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/projects"
              className="inline-block rounded-md border-2 border-warm-white/30 px-8 py-3.5 text-sm font-semibold text-warm-white transition-all duration-200 hover:border-gold hover:text-gold"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services Detail ── */}
      <section className="bg-warm-white py-16 sm:py-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Our Expertise
            </p>
            <h2
              id="services-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Six Ways We Serve You
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/60">
              Whether you&apos;re building from scratch or transforming an existing
              space, we have the expertise, the team, and the passion to make it
              exceptional.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {services.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className={`grid items-center gap-10 scroll-mt-24 lg:grid-cols-2 lg:gap-16 ${
                  index % 2 !== 0 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl ${
                    index % 2 !== 0 ? "lg:col-start-2" : ""
                  }`}
                >
                  <Image
                    src={`https://images.unsplash.com/photo-${
                      [
                        "1600607687644-aac4c3eac7f4",
                        "1497366216548-37526070297c",
                        "1618221195710-dd6b41faaea6",
                        "1504917595217-d4dc5ebe6122",
                        "1556909114-f6e7ad7d3136",
                        "1586023492125-27b2c045efd4",
                      ][index]
                    }?w=800&h=600&fit=crop`}
                    alt={`${service.title} by Baserabuilders in Bangalore`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-charcoal/10" />
                </div>

                {/* Content */}
                <div className={index % 2 !== 0 ? "lg:col-start-1" : ""}>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-charcoal">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-charcoal/70">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {[
                      ...getServiceHighlights(service.slug),
                    ].map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-charcoal/70">
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
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-gold-dark hover:shadow-lg"
                  >
                    Enquire About This Service
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="bg-charcoal py-16 sm:py-24" aria-labelledby="process-heading">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Our Process
            </p>
            <h2
              id="process-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-warm-white sm:text-4xl"
            >
              How We Bring Your Project to Life
            </h2>
            <p className="mt-4 text-base leading-relaxed text-warm-white/60">
              A structured, transparent process designed to keep you informed and
              in control at every step.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step) => (
              <div
                key={step.step}
                className="relative rounded-xl border border-white/10 bg-charcoal-light p-6"
              >
                <p className="text-4xl font-bold text-gold/20">{step.step}</p>
                <h3 className="mt-2 text-base font-bold text-warm-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-white/60">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Frequently Asked Questions
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
      <section className="bg-warm-white py-16" aria-labelledby="services-cta-heading">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2
            id="services-cta-heading"
            className="text-2xl font-bold tracking-tight text-charcoal sm:text-3xl"
          >
            Not Sure Which Service You Need?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-charcoal/60">
            Talk to our team. We&apos;ll assess your requirements and recommend
            the right approach — free of charge, no obligation.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-gold-dark hover:shadow-lg"
            >
              Book a Free Consultation
            </Link>
            <a
              href="tel:+919035817133"
              className="text-sm font-semibold text-charcoal/70 transition-colors hover:text-gold"
            >
              Or call +91 90358 17133
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function getServiceHighlights(slug: string): string[] {
  const map: Record<string, string[]> = {
    residential: [
      "Custom architectural design and 3D visualisation",
      "BBMP/BDA approvals and statutory compliance",
      "Structural, MEP, and finishing — end to end",
      "Dedicated site supervisor and project manager",
    ],
    commercial: [
      "Design-build delivery for offices, retail, and F&B",
      "Multi-discipline engineering coordination",
      "Safety compliance and quality audits",
      "Flexible project phasing to minimise business disruption",
    ],
    interior: [
      "Residential and commercial interior spaces",
      "3D design renderings before execution",
      "Custom joinery, furniture, and lighting curation",
      "Turnkey delivery including loose furniture",
    ],
    renovation: [
      "Structural and cosmetic renovation of any scale",
      "Minimal disruption to your daily routine",
      "Material procurement and supply coordination",
      "Post-renovation cleaning and snagging",
    ],
    kitchen: [
      "Premium European soft-close hardware",
      "Anti-scratch laminates and engineered stone tops",
      "Integrated appliance planning",
      "Custom layouts for L-shape, U-shape, and island kitchens",
    ],
    ceiling: [
      "Gypsum, POP, wooden, and metal grid ceiling systems",
      "Integrated ambient, task, and accent lighting design",
      "Fire-rated solutions for commercial applications",
      "Energy-efficient LED lighting packages",
    ],
  };
  return map[slug] ?? [];
}
