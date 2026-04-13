// Single source of truth for all site content.
// Import from here into any page or component.

export const SITE_URL = "https://baserabuilders.in";
export const WHATSAPP_NUMBER = "919035817133";
export const PHONE_DISPLAY = "+91 90358 17133";
export const EMAIL = "info@baserabuilders.in";
export const ADDRESS_LINE1 = "HSR Layout, Sector 7";
export const ADDRESS_LINE2 = "Bangalore — 560102, Karnataka";

export const services = [
  {
    title: "Residential Construction",
    slug: "residential",
    shortDesc:
      "Custom-built homes designed to your lifestyle — from foundation to final handover.",
    description:
      "From land development and structural planning to the last coat of paint, we build custom homes tailored to your family's lifestyle. Our in-house teams handle BBMP approvals, structural engineering, MEP (mechanical, electrical, plumbing), tiling, woodwork, and a complete snagging walkthrough before key handover.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
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
    slug: "commercial",
    shortDesc:
      "Office complexes, retail outlets, and institutional buildings — delivered on schedule.",
    description:
      "We manage end-to-end commercial projects including office campuses, retail showrooms, restaurants, and institutional buildings. Our teams are adept at large-scale project management, safety compliance, design-build coordination, and multi-discipline engineering — completing projects without delays.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
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
    slug: "interior",
    shortDesc:
      "Elegant interiors that blend aesthetics with functionality for every room.",
    description:
      "Our interior designers transform blank spaces into personalised environments — living rooms, bedrooms, dining areas, home offices, and hospitality venues. We curate furniture, lighting, textures, wallcoverings, and custom joinery to create spaces that are as liveable as they are beautiful.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
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
    slug: "renovation",
    shortDesc:
      "Transform your existing space with modern upgrades and fresh design concepts.",
    description:
      "Whether it's a kitchen upgrade, bathroom overhaul, or a complete structural transformation, our renovation teams refresh your property with minimal disruption. We handle permits, demolition, reconstruction, civil finishing, and handover — delivering the new while honouring what you love about the old.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
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
    slug: "kitchen",
    shortDesc:
      "Sleek, space-efficient modular kitchens with premium fittings and custom layouts.",
    description:
      "Custom-designed modular kitchens built around your cooking habits, storage needs, and aesthetic vision. We use premium European hardware, soft-close mechanisms, anti-scratch laminates, engineered stone countertops, and integrated appliance planning — creating kitchens that are as practical as they are stunning.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
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
    slug: "ceiling",
    shortDesc:
      "Designer false ceilings with integrated ambient, task, and accent lighting.",
    description:
      "Elevate your interiors with bespoke false ceiling solutions — gypsum board, POP, wooden panels, or grid systems — seamlessly integrated with ambient, task, and accent lighting. Our lighting designers craft mood-perfect atmospheres for living spaces, offices, showrooms, and hospitality venues.",
    icon: (
      <svg
        className="h-8 w-8"
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
];

export const projects = [
  {
    name: "Prestige Lakeside Villa",
    category: "Residential",
    location: "Whitefield, Bangalore",
    area: "3,200 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
  },
  {
    name: "Skyline Corporate Office",
    category: "Commercial",
    location: "MG Road, Bangalore",
    area: "8,500 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    name: "Zen Living Room Makeover",
    category: "Interior",
    location: "Indiranagar, Bangalore",
    area: "1,800 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop",
  },
  {
    name: "Royal Kitchen Studio",
    category: "Modular Kitchen",
    location: "Koramangala, Bangalore",
    area: "420 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
  },
  {
    name: "Harmony Heights Apartment",
    category: "Residential",
    location: "HSR Layout, Bangalore",
    area: "2,100 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
  },
  {
    name: "Artisan Boutique Interiors",
    category: "Interior",
    location: "Jayanagar, Bangalore",
    area: "2,800 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop",
  },
  {
    name: "The Lakeview Penthouse",
    category: "Residential",
    location: "Hebbal, Bangalore",
    area: "4,500 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop",
  },
  {
    name: "Modern Studio Apartment",
    category: "Interior",
    location: "Malleshwaram, Bangalore",
    area: "650 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop",
  },
  {
    name: "Tech Campus Cafeteria",
    category: "Commercial",
    location: "Electronic City, Bangalore",
    area: "3,200 sq.ft.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
  },
];

export const testimonials = [
  {
    name: "Rajesh & Meena Sharma",
    location: "Whitefield, Bangalore",
    quote:
      "Baserabuilders transformed our 3BHK into a dream home. The attention to detail, quality of materials, and timely delivery exceeded our expectations. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Ananya Krishnan",
    location: "Indiranagar, Bangalore",
    quote:
      "Their interior design team has impeccable taste. Our living room and modular kitchen look straight out of a magazine. The entire process was smooth and transparent.",
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

export const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "12+", label: "Years Experience" },
  { value: "200+", label: "Happy Clients" },
  { value: "15+", label: "Expert Team Members" },
];

export const socials = [
  {
    label: "Instagram",
    // Update this URL once your Instagram handle is confirmed
    href: "https://instagram.com/baserabuilders",
    path: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z",
  },
  {
    label: "Facebook",
    // Update this URL once your Facebook page is confirmed
    href: "https://facebook.com/baserabuilders",
    path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12Z",
  },
  {
    label: "YouTube",
    // Update this URL once your YouTube channel is confirmed
    href: "https://youtube.com/@baserabuilders",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z",
  },
  {
    label: "LinkedIn",
    // Update this URL once your LinkedIn company page is confirmed
    href: "https://linkedin.com/company/baserabuilders",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z",
  },
];
