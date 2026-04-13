import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Thank You | Enquiry Received",
  description:
    "Thank you for contacting Baserabuilders. Your enquiry has been received and our team will get back to you within 24 hours.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/thank-you` },
};

export default function ThankYouPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-warm-white px-4 py-24">
      <div className="mx-auto max-w-md text-center">
        {/* Success icon */}
        <div
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/10"
          aria-hidden="true"
        >
          <svg
            className="h-10 w-10 text-gold"
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

        <h1 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
          Thank You!
        </h1>
        <p className="mt-4 text-base leading-relaxed text-charcoal/60">
          Your enquiry has been submitted successfully. Our team will review
          your request and get back to you within 24 hours.
        </p>
        <p className="mt-2 text-sm text-charcoal/40">
          Prefer to reach us sooner? Give us a call or send a WhatsApp message.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-gold-dark hover:shadow-lg"
          >
            Back to Home
          </Link>
          <a
            href="https://wa.me/919035817133"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border-2 border-charcoal/15 px-8 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:border-[#25D366] hover:text-[#25D366]"
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
    </div>
  );
}
