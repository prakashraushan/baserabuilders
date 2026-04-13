import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services, projects, testimonials, stats, SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: SITE_URL },
};

// Check icon for "Why Us" points
function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 text-gold"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}

const whyUsPoints = [
  {
    title: "On-Time Delivery",
    desc: "We respect your time. Every project is planned with detailed milestones and delivered as committed.",
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden charges. Detailed quotations and regular cost updates keep you in control throughout.",
  },
  {
    title: "Premium Materials",
    desc: "We source only ISI-certified, premium-grade materials from trusted, verified suppliers.",
  },
  {
    title: "End-to-End Management",
    desc: "A dedicated project manager oversees every detail from design brief to final key handover.",
  },
];

// Featured projects — first 3 only
const featuredProjects = projects.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        id="home"
        className="relative flex min-h-[92vh] items-center overflow-hidden bg-charcoal"
        aria-label="Hero"
      >
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop"
          alt="Luxury modern home exterior by Baserabuilders"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Home Builders &amp; Contractors — Bangalore
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-warm-white sm:text-5xl lg:text-6xl">
              Best Construction
              <br />
              Company in Bangalore
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-warm-white/75">
              Looking for reliable construction services in Bangalore? We are
              one of the leading home construction companies — offering
              end-to-end solutions from planning to execution. Whether you need
              house construction, home renovation, or commercial build-outs, we
              deliver quality, transparency, and on-time completion.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="rounded-md bg-gold px-8 py-3.5 text-center text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-gold-dark hover:shadow-lg"
              >
                View Our Portfolio
              </Link>
              <Link
                href="/contact"
                className="rounded-md border-2 border-warm-white/30 px-8 py-3.5 text-center text-sm font-semibold text-warm-white transition-all duration-200 hover:border-gold hover:text-gold"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section
        className="border-b border-warm-gray bg-warm-white"
        aria-label="Company statistics"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 lg:grid-cols-4 lg:px-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold tracking-tight text-gold">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-charcoal/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Intro / SEO paragraph ── */}
      <section className="bg-warm-white py-12 sm:py-16" aria-label="About our services">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
              Your Trusted Home Builders &amp; Building Contractors Near You
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/65">
              Baserabuilders is Bangalore&apos;s most trusted construction partner
              for homeowners and businesses. As experienced{" "}
              <strong className="font-semibold text-charcoal">
                home builders and building contractors near you
              </strong>
              , we specialise in complete{" "}
              <strong className="font-semibold text-charcoal">
                house construction
              </strong>
              , custom home building, home renovation, interior design, and
              commercial construction — all under one roof. We serve clients
              across{" "}
              <strong className="font-semibold text-charcoal">
                Whitefield, Sarjapur, Electronic City, Marathahalli, HSR Layout,
                Koramangala, Indiranagar, Jayanagar
              </strong>{" "}
              and everywhere across Bangalore.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
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
              ].map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-warm-gray bg-white px-4 py-1.5 text-xs font-medium text-charcoal/70"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section
        id="services"
        className="bg-warm-white py-16 sm:py-24"
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              What We Offer
            </p>
            <h2
              id="services-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Comprehensive Construction &amp; Design Services
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/60">
              From the first brick to the last light fitting — every aspect of
              your project is handled under one roof in Bangalore.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.slug}
                className="group rounded-xl border border-warm-gray bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-charcoal">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  {service.shortDesc}
                </p>
                <Link
                  href={`/services#${service.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold transition-colors duration-200 hover:text-gold-dark"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-md border-2 border-charcoal/20 px-8 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:border-gold hover:text-gold"
            >
              Explore All Services
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section
        id="about"
        className="bg-white py-16 sm:py-24"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop"
                alt="Baserabuilders construction team collaborating on a luxury project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-charcoal/10" />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Why Baserabuilders
              </p>
              <h2
                id="about-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
              >
                Why Homeowners &amp; Businesses Trust Us
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/60">
                With over a decade of experience in Bangalore&apos;s competitive
                construction market, we have built a reputation for reliability,
                precision, and uncompromising quality. Our clients return — and
                they refer their friends.
              </p>

              <div className="mt-8 space-y-5">
                {whyUsPoints.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10">
                      <CheckIcon />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-charcoal/60">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-dark"
              >
                Our Full Story
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section
        id="projects"
        className="bg-warm-white py-16 sm:py-24"
        aria-labelledby="projects-heading"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Portfolio
            </p>
            <h2
              id="projects-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              A Selection of Our Finest Work
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/60">
              150+ projects completed across Bangalore — from bespoke villas to
              corporate campuses.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article
                key={project.name}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="relative aspect-[3/2]">
                  <Image
                    src={project.image}
                    alt={`${project.name} — ${project.category} project by Baserabuilders in ${project.location}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="mb-1 inline-block rounded-full bg-gold/20 px-3 py-0.5 text-xs font-semibold text-gold">
                    {project.category}
                  </span>
                  <h3 className="text-base font-semibold text-warm-white">
                    {project.name}
                  </h3>
                  <p className="text-xs text-warm-white/70">
                    {project.location}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-gold-dark hover:shadow-lg"
            >
              View Full Portfolio
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        id="testimonials"
        className="bg-charcoal py-16 sm:py-24"
        aria-labelledby="testimonials-heading"
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Client Stories
            </p>
            <h2
              id="testimonials-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-warm-white sm:text-4xl"
            >
              What Our Clients Say
            </h2>
            <p className="mt-4 text-base leading-relaxed text-warm-white/60">
              200+ happy families and businesses across Bangalore trust us with
              their most important spaces.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-xl border border-white/10 bg-charcoal-light p-8 transition-all duration-300 hover:border-gold/30"
              >
                {/* Star rating */}
                <div className="mb-4 flex gap-1" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={`${t.name}-star-${i}`}
                      className="h-5 w-5 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-sm leading-relaxed text-warm-white/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-warm-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-warm-white/50">{t.location}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section
        className="bg-warm-white py-16 sm:py-24"
        aria-labelledby="cta-heading"
      >
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Ready to Start?
          </p>
          <h2
            id="cta-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
          >
            Let&apos;s Build Something Extraordinary
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-charcoal/60">
            Whether it&apos;s a new home, a commercial space, or a stunning
            interior makeover — our team is ready to turn your vision into
            reality. Get a free consultation today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-gold-dark hover:shadow-lg"
            >
              Get a Free Quote
            </Link>
            <a
              href="https://wa.me/919035817133"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border-2 border-charcoal/20 px-8 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:border-gold hover:text-gold"
            >
              <svg
                viewBox="0 0 32 32"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.742 5.486 2.035 7.788L0 32l8.418-2.01A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 19.518c-.398-.199-2.352-1.16-2.717-1.292-.364-.133-.63-.199-.895.199-.265.398-1.028 1.292-1.26 1.558-.232.265-.464.298-.862.1-.398-.2-1.682-.62-3.203-1.976-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.2-.232.266-.398.398-.663.133-.265.067-.497-.033-.696-.1-.199-.895-2.157-1.227-2.952-.322-.775-.65-.67-.895-.682l-.762-.013c-.265 0-.696.1-1.061.497-.364.398-1.393 1.36-1.393 3.317s1.426 3.847 1.625 4.112c.199.265 2.806 4.285 6.798 6.01.95.41 1.692.655 2.27.839.953.304 1.822.261 2.508.158.765-.114 2.352-.961 2.684-1.889.332-.928.332-1.724.232-1.889-.1-.166-.364-.265-.762-.464z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
