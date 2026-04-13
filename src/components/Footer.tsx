import Link from "next/link";
import { socials, services, EMAIL, PHONE_DISPLAY } from "@/lib/data";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Construction Cost Guide", href: "/construction-cost-bangalore" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal py-12" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-warm-white"
              aria-label="Baserabuilders — home"
            >
              basera<span className="text-gold">builders</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-warm-white/50">
              Premium construction and interior design company delivering luxury
              spaces across Bangalore since 2014.
            </p>

            {/* Social icons */}
            <div className="mt-5 flex gap-3" aria-label="Social media links">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Baserabuilders on ${social.label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-warm-white/50 transition-all duration-200 hover:border-gold hover:text-gold"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-warm-white/50 transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-sm text-warm-white/50 transition-colors duration-200 hover:text-gold"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-warm-white">
              Contact
            </h3>
            <address className="mt-4 space-y-2.5 text-sm not-italic text-warm-white/50">
              <p>
                <a
                  href="tel:+919035817133"
                  className="transition-colors hover:text-gold"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="transition-colors hover:text-gold"
                >
                  {EMAIL}
                </a>
              </p>
              <p>
                HSR Layout, Sector 7
                <br />
                Bangalore &mdash; 560102
                <br />
                Karnataka, India
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-warm-white/30">
          &copy; {year} Baserabuilders. All rights reserved.{" "}
          <span aria-hidden="true">|</span> Designed &amp; built with{" "}
          <span aria-hidden="true">♥</span> in Bangalore
        </div>
      </div>
    </footer>
  );
}
