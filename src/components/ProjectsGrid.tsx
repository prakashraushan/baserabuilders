"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/data";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Modular Kitchen",
];

export default function ProjectsGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div
        className="mt-10 flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Filter projects by category"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
              active === cat
                ? "bg-gold text-charcoal shadow-md"
                : "border border-warm-gray bg-white text-charcoal/70 hover:border-gold hover:text-gold"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <article
            key={project.name}
            className="group relative overflow-hidden rounded-xl bg-charcoal"
          >
            <div className="relative aspect-[3/2]">
              <Image
                src={project.image}
                alt={`${project.name} — ${project.category} project by Baserabuilders in ${project.location}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />

            {/* Info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="mb-2 inline-block rounded-full bg-gold/25 px-3 py-0.5 text-xs font-semibold text-gold">
                {project.category}
              </span>
              <h3 className="text-sm font-bold text-warm-white">
                {project.name}
              </h3>
              <div className="mt-1 flex items-center gap-3 text-xs text-warm-white/60">
                <span>{project.location}</span>
                <span aria-hidden="true">·</span>
                <span>{project.area}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 py-16 text-center text-charcoal/40">
          No projects found in this category.
        </div>
      )}
    </>
  );
}
