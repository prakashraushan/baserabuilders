import Image from "next/image";

const services = [
  {
    title: "Residential Construction",
    description:
      "Custom-built homes designed to your lifestyle. From foundation to finish, we deliver quality craftsmanship.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    title: "Commercial Construction",
    description:
      "Office spaces, retail outlets, and commercial complexes built with precision and delivered on schedule.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
  },
  {
    title: "Interior Design",
    description:
      "Elegant interiors that blend aesthetics with functionality. Living rooms, bedrooms, and complete home styling.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Transform your existing space with modern upgrades, structural changes, and fresh design concepts.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743"
        />
      </svg>
    ),
  },
  {
    title: "Modular Kitchen",
    description:
      "Sleek, space-efficient modular kitchens with premium fittings, soft-close hardware, and custom layouts.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
        />
      </svg>
    ),
  },
  {
    title: "False Ceiling & Lighting",
    description:
      "Designer false ceilings with integrated ambient, task, and accent lighting for a premium finish.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>
    ),
  },
];

const projects = [
  {
    name: "Prestige Lakeside Villa",
    category: "Residential",
    location: "Whitefield, Bangalore",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
  },
  {
    name: "Skyline Corporate Office",
    category: "Commercial",
    location: "MG Road, Bangalore",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    name: "Zen Living Room Makeover",
    category: "Interior",
    location: "Indiranagar, Bangalore",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop",
  },
  {
    name: "Royal Kitchen Studio",
    category: "Modular Kitchen",
    location: "Koramangala, Bangalore",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
  },
  {
    name: "Harmony Heights Apartment",
    category: "Residential",
    location: "HSR Layout, Bangalore",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
  },
  {
    name: "Artisan Boutique Interiors",
    category: "Interior",
    location: "Jayanagar, Bangalore",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop",
  },
];

const testimonials = [
  {
    name: "Rajesh & Meena Sharma",
    location: "Whitefield, Bangalore",
    quote:
      "B4 Builders transformed our 3BHK into a dream home. The attention to detail, quality of materials, and timely delivery exceeded our expectations. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Ananya Krishnan",
    location: "Indiranagar, Bangalore",
    quote:
      "Their interior design team has impeccable taste. Our living room and modular kitchen look straight out of a magazine. The whole process was smooth and transparent.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Vikram Patel",
    location: "Koramangala, Bangalore",
    quote:
      "We hired them for our office renovation and the result was outstanding. Professional team, great communication, and the project was completed ahead of schedule.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
];

const stats = [
  {
    value: "150+",
    label: "Projects Completed",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0"
        />
      </svg>
    ),
  },
  {
    value: "12+",
    label: "Years Experience",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    value: "200+",
    label: "Happy Clients",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
        />
      </svg>
    ),
  },
  {
    value: "15+",
    label: "Expert Team Members",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
        />
      </svg>
    ),
  },
];

const socials = [
  {
    label: "Instagram",
    path: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
  },
  {
    label: "Facebook",
    path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z",
  },
  {
    label: "YouTube",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z",
  },
  {
    label: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z",
  },
];

const whyUsPoints = [
  {
    title: "On-Time Delivery",
    desc: "We respect your time. Every project is planned and executed to meet committed deadlines.",
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden charges. Detailed quotations and regular cost updates throughout the project.",
  },
  {
    title: "Quality Materials",
    desc: "We source only premium, ISI-certified materials from trusted suppliers.",
  },
  {
    title: "End-to-End Project Management",
    desc: "From design to handover, a dedicated project manager oversees every detail.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Navigation ── */}
      <header className="sticky top-0 z-50 border-b border-charcoal/5 bg-warm-white/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-charcoal"
          >
            B4<span className="text-gold"> Builders</span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {[
              "Home",
              "About",
              "Services",
              "Projects",
              "Testimonials",
              "Contact",
            ].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-charcoal/70 transition-colors duration-200 hover:text-gold"
              >
                {link}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-gold-dark hover:shadow-lg"
          >
            Get Free Quote
          </a>
        </nav>
      </header>

      <main>
        {/* ── Hero ── */}
        <section
          id="home"
          className="relative flex min-h-[90vh] items-center overflow-hidden bg-charcoal"
        >
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop"
            alt="Luxury modern home exterior"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />

          <div className="relative mx-auto max-w-7xl px-4 py-24 lg:px-8">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Premium Construction &amp; Interior Design
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-warm-white sm:text-5xl lg:text-6xl">
                Building Dreams,
                <br />
                Crafting Spaces
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-warm-white/70">
                Premium Construction &amp; Interior Design across Bangalore.
                Turning your vision into extraordinary living spaces with 12+
                years of trusted craftsmanship.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="rounded-md bg-gold px-8 py-3.5 text-center text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-gold-dark hover:shadow-lg"
                >
                  View Our Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-md border-2 border-warm-white/30 px-8 py-3.5 text-center text-sm font-semibold text-warm-white transition-all duration-200 hover:border-gold hover:text-gold"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="border-b border-warm-gray bg-warm-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 lg:grid-cols-4 lg:px-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 text-center sm:text-left"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-3xl font-bold tracking-tight text-gold">
                    {stat.value}
                  </p>
                  <p className="text-sm font-medium text-charcoal/60">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Services ── */}
        <section id="services" className="bg-warm-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                What We Offer
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/60">
                Comprehensive construction and design solutions tailored to your
                needs and budget.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-xl border border-warm-gray bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-charcoal">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-charcoal">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold transition-colors duration-200 hover:text-gold-dark"
                  >
                    Learn More
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section id="about" className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop"
                  alt="Construction team working on a project"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-charcoal/10" />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                  Why B4 Builders
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                  Why Homeowners Trust Us
                </h2>
                <p className="mt-4 text-base leading-relaxed text-charcoal/60">
                  With over a decade of experience in Bangalore&apos;s
                  construction industry, we bring reliability, transparency, and
                  craftsmanship to every project.
                </p>

                <div className="mt-8 space-y-5">
                  {whyUsPoints.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/10">
                        <svg
                          className="h-5 w-5 text-gold"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-charcoal">
                          {item.title}
                        </h4>
                        <p className="mt-0.5 text-sm text-charcoal/60">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Featured Projects ── */}
        <section id="projects" className="bg-warm-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Portfolio
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                Our Recent Projects
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/60">
                A selection of our finest work across Bangalore.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.name}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-charcoal/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <a
                        href="#"
                        className="rounded-md border-2 border-gold px-6 py-2.5 text-sm font-semibold text-gold transition-all duration-200 hover:bg-gold hover:text-charcoal"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent p-5 pt-12">
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section id="testimonials" className="bg-charcoal py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Testimonials
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-warm-white sm:text-4xl">
                What Our Clients Say
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-3">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-xl border border-white/10 bg-charcoal-light p-8 transition-all duration-300 hover:border-gold/30"
                >
                  {/* Stars */}
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed text-warm-white/80">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact / Lead Form ── */}
        <section id="contact" className="bg-warm-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                Get In Touch
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
                Let&apos;s Build Something Great
              </h2>
            </div>

            <div className="mt-12 grid gap-12 sm:mt-16 lg:grid-cols-2">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal">
                      Phone
                    </h4>
                    <p className="mt-1 text-sm text-charcoal/60">
                      +91 98765 43210
                    </p>
                    <p className="text-sm text-charcoal/60">+91 80 4567 8900</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal">
                      Email
                    </h4>
                    <p className="mt-1 text-sm text-charcoal/60">
                      info@b4builders.in
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-charcoal">
                      Office Address
                    </h4>
                    <p className="mt-1 text-sm text-charcoal/60">
                      123, 5th Cross, HSR Layout,
                      <br />
                      Sector 7, Bangalore — 560102,
                      <br />
                      Karnataka, India
                    </p>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="overflow-hidden rounded-xl border border-warm-gray">
                  <div className="flex aspect-video items-center justify-center bg-warm-gray/50 text-sm text-charcoal/40">
                    <div className="text-center">
                      <svg
                        className="mx-auto mb-2 h-10 w-10 text-charcoal/20"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                        />
                      </svg>
                      Google Maps Embed
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-xl border border-warm-gray bg-white p-8 shadow-sm">
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="space-y-5"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="e5b94148-e63c-4b2a-a5e1-e403093edc16"
                  />
                  <input
                    type="hidden"
                    name="redirect"
                    value="https://b4builders.in/thank-you"
                  />
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-charcoal"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-warm-gray bg-warm-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-1.5 block text-sm font-medium text-charcoal"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full rounded-lg border border-warm-gray bg-warm-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-charcoal"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-warm-gray bg-warm-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-sm font-medium text-charcoal"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full rounded-lg border border-warm-gray bg-warm-white px-4 py-3 text-sm text-charcoal focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-charcoal"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full resize-none rounded-lg border border-warm-gray bg-warm-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-gold-dark hover:shadow-lg"
                  >
                    Send Enquiry
                  </button>
                  <p className="text-center text-xs text-charcoal/40">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-charcoal py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <p className="text-xl font-bold tracking-tight text-warm-white">
                B4<span className="text-gold"> Builders</span>
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-warm-white/50">
                Premium construction and interior design company delivering
                luxury spaces across Bangalore since 2014.
              </p>
              {/* Social icons */}
              <div className="mt-5 flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-warm-white/50 transition-all duration-200 hover:border-gold hover:text-gold"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-warm-white">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Home",
                  "About Us",
                  "Services",
                  "Projects",
                  "Testimonials",
                  "Contact",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-warm-white/50 transition-colors duration-200 hover:text-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-warm-white">
                Services
              </h4>
              <ul className="mt-4 space-y-2.5">
                {services.map((s) => (
                  <li key={s.title}>
                    <a
                      href="#services"
                      className="text-sm text-warm-white/50 transition-colors duration-200 hover:text-gold"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-warm-white">
                Contact
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-warm-white/50">
                <li>+91 98765 43210</li>
                <li>info@b4builders.in</li>
                <li>
                  123, 5th Cross, HSR Layout,
                  <br />
                  Bangalore — 560102
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-warm-white/30">
            &copy; 2026 B4 Builders. All rights reserved. | Designed &amp; Built
            with ♥ in Bangalore
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/919035817133?text=Hi%20B4%20Builders%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20enquire%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 transition-transform duration-200 hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="white"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.742 5.486 2.035 7.788L0 32l8.418-2.01A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.795-1.867l-.486-.29-5.006 1.196 1.25-4.87-.317-.5A13.234 13.234 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.815c-.398-.199-2.352-1.16-2.717-1.292-.364-.133-.63-.199-.895.199-.265.398-1.028 1.292-1.26 1.558-.232.265-.464.298-.862.1-.398-.2-1.682-.62-3.203-1.976-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.2-.232.266-.398.398-.663.133-.265.067-.497-.033-.696-.1-.199-.895-2.157-1.227-2.952-.322-.775-.65-.67-.895-.682l-.762-.013c-.265 0-.696.1-1.061.497-.364.398-1.393 1.36-1.393 3.317s1.426 3.847 1.625 4.112c.199.265 2.806 4.285 6.798 6.01.95.41 1.692.655 2.27.839.953.304 1.822.261 2.508.158.765-.114 2.352-.961 2.684-1.889.332-.928.332-1.724.232-1.889-.1-.166-.364-.265-.762-.464z" />
        </svg>
      </a>
    </>
  );
}
