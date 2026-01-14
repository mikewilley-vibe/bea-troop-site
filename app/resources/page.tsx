import { resources } from "@/data/resources";

export default function ResourcesPage() {
  const categories = [...new Set(resources.map((r) => r.category))];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#2D5016" }}>
        📚 Troop Resources
      </h1>
      <p className="text-slate-600 mb-8">
        Everything you need to support your Girl Scout experience.
      </p>

      {categories.map((category) => (
        <div key={category} className="mb-10">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "#2D5016" }}
          >
            {category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resources
              .filter((r) => r.category === category)
              .map((resource) => (
                <a
                  key={resource.id}
                  href={resource.link}
                  className="rounded-lg p-6 shadow-md hover:shadow-lg transition"
                  style={{
                    backgroundColor: "#E8F3E8",
                    borderTop: "3px solid #2D5016",
                    textDecoration: "none",
                  }}
                >
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "#2D5016" }}
                  >
                    {resource.title}
                  </h3>
                  <p className="text-slate-700 text-sm">
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
