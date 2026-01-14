export default function SwitzerlandTrip() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#2D5016" }}>
        🇨🇭 Switzerland Adventure 2026
      </h1>
      <p className="text-slate-600 mb-8">
        Troop 21 is heading to Switzerland for an incredible international experience!
      </p>

      {/* Trip Details */}
      <div
        className="rounded-lg p-8 mb-8 shadow-md"
        style={{
          background: "linear-gradient(135deg, #2D5016 0%, #3D7B2F 100%)",
          color: "white",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-3">📅 Trip Dates</h2>
            <p className="text-lg">July 4th - July 14th, 2026</p>
            <p className="text-sm opacity-90 mt-2">11 days of adventure!</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">✈️ Destination</h2>
            <p className="text-lg">Switzerland</p>
            <p className="text-sm opacity-90 mt-2">Explore the Alps and Swiss culture</p>
          </div>
        </div>
      </div>

      {/* What We'll Do */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#2D5016" }}>
          🎯 What We'll Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: "⛰️",
              title: "Mountain Hiking",
              description: "Explore breathtaking alpine trails and scenic vistas"
            },
            {
              icon: "🏰",
              title: "Historic Sites",
              description: "Visit Swiss castles and cultural landmarks"
            },
            {
              icon: "🧀",
              title: "Local Culture",
              description: "Experience Swiss traditions, food, and hospitality"
            },
            {
              icon: "🚡",
              title: "Adventure Activities",
              description: "Try new outdoor sports and challenges"
            },
            {
              icon: "👫",
              title: "International Friends",
              description: "Connect with Girl Guides from around the world"
            },
            {
              icon: "📸",
              title: "Lasting Memories",
              description: "Create unforgettable experiences with your troop sisters"
            }
          ].map((activity, idx) => (
            <div
              key={idx}
              className="rounded-lg p-6 shadow-md animate-fade-in-delay-1"
              style={{
                backgroundColor: "#E8F3E8",
                borderTop: "3px solid #2D5016",
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              <div className="text-4xl mb-3">{activity.icon}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#2D5016" }}>
                {activity.title}
              </h3>
              <p className="text-slate-700 text-sm">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why This Trip */}
      <div
        className="rounded-lg p-8 mb-8 shadow-md"
        style={{
          backgroundColor: "#E8F3E8",
          borderLeft: "4px solid #2D5016"
        }}
      >
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#2D5016" }}>
          🌍 Why International Travel?
        </h2>
        <div className="space-y-3 text-slate-700">
          <p>
            International travel is a cornerstone of the Girl Scout experience. Our Switzerland trip will:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Build cultural awareness and global citizenship</li>
            <li>Develop independence and confidence</li>
            <li>Create lifelong friendships across borders</li>
            <li>Provide hands-on learning about new environments</li>
            <li>Strengthen troop bonds and teamwork</li>
            <li>Inspire future leaders with diverse perspectives</li>
          </ul>
        </div>
      </div>

      {/* Preparation */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#2D5016" }}>
          📋 Trip Preparation
        </h2>
        <div className="space-y-4">
          {[
            "Passport and travel documents",
            "Physical fitness training",
            "Language basics (French, German, Italian)",
            "Cultural orientation and etiquette",
            "Packing preparation",
            "Travel insurance and medical clearance"
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg p-4 bg-white shadow"
              style={{
                backgroundColor: "#F5FAF5",
                borderLeft: "3px solid #2D5016"
              }}
            >
              <p className="font-semibold text-slate-800">✓ {item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <div
        className="rounded-lg p-8 shadow"
        style={{
          backgroundColor: "#FFF8DC",
          borderLeft: "4px solid #2D5016"
        }}
      >
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#2D5016" }}>
          ❓ Questions?
        </h2>
        <p className="text-slate-700 mb-4">
          For more information about the Switzerland trip, including costs, itinerary details, and registration, please contact your troop leader.
        </p>
        <p className="text-slate-700 font-semibold">
          This adventure awaits! 🚀
        </p>
      </div>
    </div>
  );
}
