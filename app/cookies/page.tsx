import CookieOrderForm from "@/components/CookieOrderForm";

export default function CookiesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#2D5016" }}>
        Girl Scout Cookie Sale 🍪
      </h1>
      <p className="text-slate-600 mb-8">
        Support Troop 21 by ordering delicious Girl Scout cookies! Every box purchased helps us fund badges, trips, and community service projects.
      </p>

      {/* Why Buy Girl Scout Cookies */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {[
          {
            icon: "🎖️",
            title: "Troop Activities",
            description: "Funds badges, workshops, and skill-building activities"
          },
          {
            icon: "🚀",
            title: "Adventures",
            description: "Supports field trips and troop outings"
          },
          {
            icon: "❤️",
            title: "Community",
            description: "Enables service projects that give back locally"
          }
        ].map((item, idx) => (
          <div
            key={idx}
            className="rounded-lg p-6 shadow-md text-center animate-fade-in-delay-1"
            style={{
              backgroundColor: "#E8F3E8",
              borderTop: "3px solid #2D5016",
              animationDelay: `${idx * 0.1}s`,
            }}
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-lg font-bold mb-2" style={{ color: "#2D5016" }}>
              {item.title}
            </h3>
            <p className="text-slate-700 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Exploramores Video */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#2D5016" }}>
          🎥 Meet Our New Exploramores!
        </h2>
        <div className="rounded-lg overflow-hidden shadow-md mb-8">
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/MhqJRQkcu5U"
            title="New Girl Scout Exploramores"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-slate-600 mb-8">
          Discover the exciting new Exploramores program! Girl Scouts in grades K-2 can now join this immersive experience designed to build confidence and explore new interests.
        </p>
      </div>

      {/* Cookie Order Form */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#2D5016" }}>
          📝 Order Now
        </h2>
        <CookieOrderForm />
      </div>

      {/* Cookie Information */}
      <div
        className="rounded-lg p-8 shadow-md"
        style={{
          backgroundColor: "#E8F3E8",
          borderLeft: "4px solid #2D5016"
        }}
      >
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#2D5016" }}>
          ℹ️ About Our Cookies
        </h2>
        <div className="space-y-4 text-slate-700">
          <p>
            Girl Scout cookies are a delicious tradition! Since 1917, Girl Scouts have been building business skills, leadership, and confidence through cookie sales.
          </p>
          <p>
            Our cookies are baked fresh and made with high-quality ingredients. We offer six delicious varieties to satisfy every cookie lover:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Thin Mints</strong> - The classic favorite with chocolate mint flavor</li>
            <li><strong>Caramel Delites</strong> - Chocolate, caramel, and coconut perfection</li>
            <li><strong>Peanut Butter Patties</strong> - Rich peanut butter meets chocolate</li>
            <li><strong>Girl Scout S'mores</strong> - A campfire favorite in cookie form</li>
            <li><strong>Peanut Butter Cookie Crumbs</strong> - Crunchy peanut butter goodness</li>
            <li><strong>Lemonades</strong> - Bright and refreshing lemon flavor</li>
          </ul>
          <p className="mt-4">
            <strong>Allergen Information:</strong> Please review allergen details for each cookie variety above. Cookies contain various allergens including wheat, soy, peanuts, and tree nuts.
          </p>
          <p>
            <strong>Delivery:</strong> Orders will be delivered by Troop 21 in the coming weeks. Thank you for supporting Girl Scout Brownies!
          </p>
        </div>
      </div>
    </div>
  );
}
