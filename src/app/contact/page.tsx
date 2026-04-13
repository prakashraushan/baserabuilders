import type { Metadata } from "next";
import Link from "next/link";
import { services, SITE_URL, PHONE_DISPLAY, EMAIL, ADDRESS_LINE1, ADDRESS_LINE2, WHATSAPP_NUMBER } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote in Bangalore",
  description:
    "Contact Baserabuilders for your construction or interior design project in Bangalore. Call, WhatsApp, or submit an online enquiry for a free site visit and consultation.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact Baserabuilders | Free Quote — Bangalore",
    description:
      "Get in touch with Baserabuilders for construction and interior design enquiries in Bangalore. Free consultation, no obligation.",
    url: `${SITE_URL}/contact`,
  },
};

const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

export default function ContactPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="bg-charcoal py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Get in Touch
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-warm-white sm:text-5xl">
            Let&apos;s Build Something
            <br />
            Great Together
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-warm-white/70">
            Tell us about your project and we&apos;ll get back to you within 24
            hours with a free consultation and no-obligation quote.
          </p>
        </div>
      </section>

      {/* ── Contact Content ── */}
      <section className="bg-warm-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* ── Left: Contact Info ── */}
            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-bold text-charcoal">
                  Reach Us Directly
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                  Prefer a quick call or WhatsApp? We&apos;re available Monday to
                  Saturday, 9 AM – 6 PM.
                </p>
              </div>

              {/* Phone */}
              <address className="not-italic space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
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
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal">Phone</h3>
                    <a
                      href={`tel:+${WHATSAPP_NUMBER}`}
                      className="mt-1 block text-sm text-charcoal/70 transition-colors hover:text-gold"
                    >
                      {PHONE_DISPLAY}
                    </a>
                    <p className="mt-0.5 text-xs text-charcoal/40">
                      Monday – Saturday, 9 AM – 6 PM
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
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
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal">Email</h3>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="mt-1 block text-sm text-charcoal/70 transition-colors hover:text-gold"
                    >
                      {EMAIL}
                    </a>
                    <p className="mt-0.5 text-xs text-charcoal/40">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
                    <svg
                      viewBox="0 0 32 32"
                      className="h-6 w-6"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.742 5.486 2.035 7.788L0 32l8.418-2.01A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 19.518c-.398-.199-2.352-1.16-2.717-1.292-.364-.133-.63-.199-.895.199-.265.398-1.028 1.292-1.26 1.558-.232.265-.464.298-.862.1-.398-.2-1.682-.62-3.203-1.976-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.2-.232.266-.398.398-.663.133-.265.067-.497-.033-.696-.1-.199-.895-2.157-1.227-2.952-.322-.775-.65-.67-.895-.682l-.762-.013c-.265 0-.696.1-1.061.497-.364.398-1.393 1.36-1.393 3.317s1.426 3.847 1.625 4.112c.199.265 2.806 4.285 6.798 6.01.95.41 1.692.655 2.27.839.953.304 1.822.261 2.508.158.765-.114 2.352-.961 2.684-1.889.332-.928.332-1.724.232-1.889-.1-.166-.364-.265-.762-.464z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-charcoal">
                      WhatsApp
                    </h3>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        "Hi Baserabuilders, I'd like to enquire about your services."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-charcoal/70 transition-colors hover:text-[#25D366]"
                    >
                      {PHONE_DISPLAY}
                    </a>
                    <p className="mt-0.5 text-xs text-charcoal/40">
                      Click to open WhatsApp chat
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
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
                    <h3 className="text-sm font-semibold text-charcoal">Office</h3>
                    <p className="mt-1 text-sm text-charcoal/70">
                      {ADDRESS_LINE1}
                      <br />
                      {ADDRESS_LINE2}
                    </p>
                  </div>
                </div>
              </address>

              {/* Map placeholder */}
              <div className="overflow-hidden rounded-xl border border-warm-gray">
                <a
                  href="https://maps.google.com/?q=HSR+Layout+Bangalore+560102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex aspect-video items-center justify-center bg-warm-gray/50 transition-colors hover:bg-warm-gray"
                  aria-label="Open our location in Google Maps"
                >
                  <div className="text-center">
                    <svg
                      className="mx-auto mb-2 h-10 w-10 text-charcoal/30 transition-colors group-hover:text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                      />
                    </svg>
                    <p className="text-sm font-medium text-charcoal/50 group-hover:text-gold">
                      View on Google Maps
                    </p>
                    <p className="mt-1 text-xs text-charcoal/30">
                      HSR Layout, Bangalore
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* ── Right: Contact Form ── */}
            <div className="rounded-xl border border-warm-gray bg-white p-8 shadow-sm">
              <h2 className="text-xl font-bold text-charcoal">
                Send Us an Enquiry
              </h2>
              <p className="mt-1 text-sm text-charcoal/60">
                Fill in the form and we&apos;ll get back to you within 24 hours.
              </p>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="mt-6 space-y-5"
                aria-label="Contact enquiry form"
              >
                {/* Web3Forms configuration */}
                <input type="hidden" name="access_key" value={web3FormsKey} />
                <input
                  type="hidden"
                  name="redirect"
                  value={`${SITE_URL}/thank-you`}
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Enquiry from Baserabuilders Website"
                />
                {/* Honeypot spam prevention */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  aria-hidden="true"
                />

                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-charcoal"
                  >
                    Full Name <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-warm-gray bg-warm-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-charcoal"
                    >
                      Phone <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      autoComplete="tel"
                      placeholder="+91 90000 00000"
                      className="w-full rounded-lg border border-warm-gray bg-warm-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-charcoal"
                    >
                      Email <span aria-hidden="true" className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-warm-gray bg-warm-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-sm font-medium text-charcoal"
                  >
                    Service Interested In <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-warm-gray bg-warm-white px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Other">Other / Not Sure Yet</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="mb-1.5 block text-sm font-medium text-charcoal"
                  >
                    Project Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="e.g. Whitefield, Bangalore"
                    className="w-full rounded-lg border border-warm-gray bg-warm-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
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
                    rows={4}
                    placeholder="Tell us about your project — size, timeline, budget, or anything else..."
                    className="w-full resize-none rounded-lg border border-warm-gray bg-warm-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-gold-dark hover:shadow-lg"
                >
                  Send Enquiry
                </button>
                <p className="text-center text-xs text-charcoal/40">
                  We&apos;ll respond within 24 hours &mdash; Mon–Sat, 9 AM–6 PM.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Links ── */}
      <section className="border-t border-warm-gray bg-warm-white py-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="text-center text-sm text-charcoal/50">
            Looking for something specific?{" "}
            <Link href="/services" className="font-semibold text-gold hover:text-gold-dark">
              View our services
            </Link>
            {" "}or{" "}
            <Link href="/projects" className="font-semibold text-gold hover:text-gold-dark">
              browse our portfolio
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
