import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-warm-white px-4">
      <div className="mx-auto max-w-md text-center">
        {/* Check icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold/10">
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

        <Link
          href="/"
          className="mt-8 inline-block rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-charcoal transition-all duration-200 hover:bg-gold-dark hover:shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
