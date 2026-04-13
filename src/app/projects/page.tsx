import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectsGrid from "@/components/ProjectsGrid";
import { SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Projects & Portfolio | 150+ Completed Projects in Bangalore",
  description:
    "Browse Baserabuilders' portfolio of 150+ completed projects in Bangalore — luxury homes, corporate offices, elegant interiors, modular kitchens, and full renovation projects.",
  alternates: { canonical: `${SITE_URL}/projects` },
  openGraph: {
    title: "Projects & Portfolio | Baserabuilders Bangalore",
    description:
      "150+ completed construction and interior design projects across Bangalore. Residential, commercial, interior, and modular kitchen portfolios.",
    url: `${SITE_URL}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative overflow-hidden bg-charcoal py-20 sm:py-28">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=600&fit=crop"
          alt="Showcase of luxury construction projects by Baserabuilders in Bangalore"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Our Portfolio
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-warm-white sm:text-5xl">
            150+ Projects.
            <br />
            Every One a Story.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-warm-white/70">
            From intimate apartment interiors to sprawling commercial campuses —
            each project in our portfolio represents a promise kept and a client
            delighted across Bangalore.
          </p>
        </div>
      </section>

      {/* ── Portfolio Grid ── */}
      <section className="bg-warm-white py-16 sm:py-24" aria-labelledby="portfolio-heading">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Browse by Category
            </p>
            <h2
              id="portfolio-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Our Recent Work
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/60">
              Use the filter below to explore our projects by category. Each
              space reflects our commitment to quality, detail, and client
              satisfaction.
            </p>
          </div>

          {/* Client component handles filtering */}
          <ProjectsGrid />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal py-16" aria-labelledby="projects-cta-heading">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2
            id="projects-cta-heading"
            className="text-2xl font-bold tracking-tight text-warm-white sm:text-3xl"
          >
            Have a Project in Mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-warm-white/60">
            Let&apos;s make it the next addition to this portfolio. Contact us for
            a free site visit and consultation — no obligation, just ideas.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-gold-dark hover:shadow-lg"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="rounded-md border-2 border-warm-white/20 px-8 py-3.5 text-sm font-semibold text-warm-white transition-all duration-200 hover:border-gold hover:text-gold"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
