'use client';

import { useState } from 'react';
import CookieOrderForm from "@/components/CookieOrderForm";
import DetailModal from "@/components/DetailModal";

const COOKIES_INFO = [
  {
    name: "Thin Mints",
    icon: "🍫",
    description: "Crispy chocolate cookies dipped in a thin layer of chocolate mint icing",
    allergens: ["Soy", "Wheat", "Tree Nuts"],
    taste: "Rich chocolate with refreshing mint flavor",
    price: "$6.00 per box",
  },
  {
    name: "Caramel Delites",
    icon: "🍪",
    description: "Chocolate cookies topped with caramel and a sprinkle of coconut",
    allergens: ["Soy", "Wheat", "Coconut"],
    taste: "Sweet caramel with a hint of coconut",
    price: "$6.00 per box",
  },
  {
    name: "Peanut Butter Patties",
    icon: "🥜",
    description: "Chocolate cookies with a peanut butter filling",
    allergens: ["Peanuts", "Soy", "Wheat"],
    taste: "Creamy peanut butter with chocolate",
    price: "$6.00 per box",
  },
  {
    name: "Girl Scout S'mores",
    icon: "🏕️",
    description: "Chocolate cookies with marshmallow and graham cracker pieces",
    allergens: ["Wheat", "Soy"],
    taste: "Campfire favorite in cookie form",
    price: "$6.00 per box",
  },
  {
    name: "Peanut Butter Cookie Crumbs",
    icon: "🍪",
    description: "Peanut butter cookies with crispy cookie pieces baked in",
    allergens: ["Peanuts", "Soy", "Wheat"],
    taste: "Crunchy peanut butter goodness",
    price: "$6.00 per box",
  },
  {
    name: "Lemonades",
    icon: "🍋",
    description: "Crispy lemon cookies with a delightful citrus flavor",
    allergens: ["Wheat", "Soy"],
    taste: "Bright and refreshing lemon flavor",
    price: "$6.00 per box",
  },
];

export default function CookiesPage() {
  const [selectedCookie, setSelectedCookie] = useState<typeof COOKIES_INFO[0] | null>(null);

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
            className="rounded-lg p-6 shadow-md text-center animate-fade-in-delay-1 hover:shadow-lg transition-shadow cursor-pointer"
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

      {/* Browse Cookies - Click for Details */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#2D5016" }}>
          🍪 Our Cookie Varieties
        </h2>
        <p className="text-slate-600 mb-6">Click any cookie to learn more details</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COOKIES_INFO.map((cookie, idx) => (
            <button
              key={cookie.name}
              onClick={() => setSelectedCookie(cookie)}
              className="rounded-lg p-6 shadow-md text-center animate-fade-in-delay-1 hover:shadow-lg hover:scale-105 transition-all cursor-pointer"
              style={{
                backgroundColor: "#E8F3E8",
                borderLeft: "4px solid #2D5016",
                animationDelay: `${idx * 0.05}s`,
              }}
            >
              <div className="text-5xl mb-3">{cookie.icon}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#2D5016" }}>
                {cookie.name}
              </h3>
              <p className="text-slate-700 text-sm">{cookie.description}</p>
              <p className="text-xs text-slate-600 mt-3 font-semibold">Click to learn more →</p>
            </button>
          ))}
        </div>
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

      {/* Cookie Detail Modal */}
      <DetailModal
        isOpen={!!selectedCookie}
        onClose={() => setSelectedCookie(null)}
        title={selectedCookie?.name || ''}
        description={selectedCookie?.description || ''}
        icon={selectedCookie?.icon}
        details={{
          'Flavor Profile': selectedCookie?.taste || '',
          'Allergens': selectedCookie?.allergens?.join(', ') || '',
          'Price': selectedCookie?.price || '',
        }}
      />
    </div>
  );
}
