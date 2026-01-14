'use client';

import { resources } from "@/data/resources";
import Breadcrumb from "@/components/Breadcrumb";

export default function ResourcesPage() {
  const categories = [...new Set(resources.map((r) => r.category))];

  return (
    <div>
      <Breadcrumb />
      <h1 className="text-3xl font-bold mb-2 drop-shadow-sm" style={{ color: "#2D5016" }}>
        📚 Troop Resources
      </h1>
      <p className="text-slate-600 mb-8 text-lg">
        Everything you need to support your Girl Scout experience.
      </p>

      {categories.map((category) => (
        <div key={category} className="mb-10">
          <h2
            className="text-3xl font-bold mb-6 drop-shadow-sm"
            style={{ color: "#2D5016" }}
          >
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources
              .filter((r) => r.category === category)
              .map((resource, idx) => (
                <a
                  key={resource.id}
                  href={resource.link}
                  className="rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all animate-fade-in-delay-1 card-hover transform hover:scale-105 active:scale-95"
                  style={{
                    backgroundColor: "#E8F3E8",
                    borderTop: "4px solid #2D5016",
                    textDecoration: "none",
                    animationDelay: `${idx * 0.05}s`,
                  }}
                >
                  <h3
                    className="text-lg font-bold mb-2 drop-shadow-sm"
                    style={{ color: "#2D5016" }}
                  >
                    {resource.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </a>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
