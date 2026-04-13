import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { stats, SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | 12+ Years of Excellence in Bangalore",
  description:
    "Learn about Baserabuilders — founded in 2014, we are Bangalore's trusted premium construction and interior design company. Our story, values, mission, and expert team.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Baserabuilders | 12+ Years of Excellence in Bangalore",
    description:
      "Learn about Baserabuilders — founded in 2014, Bangalore's trusted construction and interior design company.",
    url: `${SITE_URL}/about`,
  },
};

const values = [
  {
    title: "Integrity",
    desc: "We do what we say. Transparent pricing, honest timelines, and no surprises — ever.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
  },
  {
    title: "Quality",
    desc: "Premium-grade, ISI-certified materials and skilled craftsmen ensure every project stands the test of time.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
        />
      </svg>
    ),
  },
  {
    title: "Innovation",
    desc: "We stay current with construction technology, sustainable practices, and design trends to bring fresh ideas.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
  {
    title: "Client-First",
    desc: "Your vision drives every decision. We listen, adapt, and deliver exactly what you envisioned — and more.",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
        />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Arjun Reddy",
    role: "Founder & CEO",
    bio: "15+ years in the Bangalore construction industry. Civil engineering graduate from BMS College of Engineering with a passion for sustainable building.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Priya Nair",
    role: "Head of Interior Design",
    bio: "Award-winning interior designer with a portfolio spanning luxury residences, boutique hotels, and corporate spaces across South India.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Suresh Kumar",
    role: "Lead Structural Engineer",
    bio: "M.Tech in Structural Engineering with expertise in high-rise residential and commercial construction, ensuring every project is built to last.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Deepa Menon",
    role: "Project Director",
    bio: "PMP-certified project director who has overseen 80+ major construction projects in Bangalore, delivering on time and within budget.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative overflow-hidden bg-charcoal py-20 sm:py-28">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=600&fit=crop"
          alt="Baserabuilders team at a construction site in Bangalore"
          fill
          className="object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Our Story
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-warm-white sm:text-5xl">
            Building Bangalore&apos;s Finest
            <br />
            Spaces Since 2014
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-warm-white/70">
            From a small team of passionate engineers and designers, Baserabuilders
            has grown into one of Bangalore&apos;s most respected construction and
            interior design companies — project by project, client by client.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-b border-warm-gray bg-warm-white" aria-label="Key metrics">
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

      {/* ── Our Story ── */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="story-heading">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Our Journey
              </p>
              <h2
                id="story-heading"
                className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
              >
                A Decade of Craftsmanship
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/70">
                <p>
                  Baserabuilders was founded in 2014 by Arjun Reddy, a civil
                  engineer with a vision: to create a construction company that
                  treated every project — whether a modest apartment renovation or
                  a large commercial complex — with the same level of care,
                  craftsmanship, and commitment.
                </p>
                <p>
                  Starting with a small team of five in HSR Layout, we built our
                  reputation one satisfied client at a time. Word spread. Projects
                  grew larger. Our team expanded to include expert interior
                  designers, structural engineers, project managers, and skilled
                  craftsmen who share a common philosophy: excellence is
                  non-negotiable.
                </p>
                <p>
                  Today, with 150+ completed projects and 200+ happy clients
                  across Bangalore, we remain committed to the values that built
                  us — transparency, quality, and a deep pride in our work.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=800&h=600&fit=crop"
                alt="Baserabuilders office and design studio in Bangalore"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-charcoal/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="bg-warm-white py-16 sm:py-24" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Purpose &amp; Direction
            </p>
            <h2
              id="mission-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Mission &amp; Vision
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-warm-gray bg-white p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-charcoal">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                To deliver exceptional construction and interior design solutions
                that transform spaces and exceed client expectations — through
                transparency, quality craftsmanship, and a relentless commitment
                to on-time delivery.
              </p>
            </div>
            <div className="rounded-xl border border-warm-gray bg-white p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-charcoal">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                To be Bangalore&apos;s most trusted construction and interior design
                partner — known for building spaces that families cherish and
                businesses thrive in, for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="bg-white py-16 sm:py-24" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              What We Stand For
            </p>
            <h2
              id="values-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Our Core Values
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-warm-gray bg-warm-white p-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
                  {value.icon}
                </div>
                <h3 className="text-base font-bold text-charcoal">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-warm-white py-16 sm:py-24" aria-labelledby="team-heading">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              The People Behind the Projects
            </p>
            <h2
              id="team-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Meet Our Leadership
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/60">
              A team of seasoned engineers, designers, and project managers united
              by a passion for exceptional construction.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="group text-center"
              >
                <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-warm-gray transition-all duration-300 group-hover:border-gold">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role} at Baserabuilders`}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <h3 className="text-base font-bold text-charcoal">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-sm font-semibold text-gold">
                  {member.role}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-charcoal/60">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal py-16 sm:py-20" aria-labelledby="about-cta-heading">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <h2
            id="about-cta-heading"
            className="text-3xl font-bold tracking-tight text-warm-white sm:text-4xl"
          >
            Ready to Work With Us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-warm-white/60">
            Let&apos;s discuss your project. Our team is ready to listen, plan,
            and deliver the space you&apos;ve been imagining.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-gold-dark hover:shadow-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/projects"
              className="rounded-md border-2 border-warm-white/20 px-8 py-3.5 text-sm font-semibold text-warm-white transition-all duration-200 hover:border-gold hover:text-gold"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
