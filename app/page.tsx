import { events } from "@/data/events";
import Image from "next/image";

export default function Home() {
  const nextEvent = events[0];

  return (
    <section className="space-y-8">
      {/* Hero Image with Overlay Content */}
      <div className="relative -mx-4 -mt-8">
        <Image
          src="/images/1941Trooop21.jpg"
          alt="Girl Scout Troop 21"
          width={1200}
          height={500}
          priority
          className="w-full h-auto"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content overlaid on image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 space-y-6 pb-20">
          <div className="text-center text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Welcome to Girl Scout Troop 21 🌼</h1>
            <p className="text-xl opacity-95">
              We're dedicated to friendship, confidence, service, and fun. Building tomorrow's leaders today!
            </p>
          </div>

          {/* What We Do Cards on Image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl">
            {[
              {
                icon: "🤝",
                title: "Friendship",
                description: "Build strong bonds with fellow Girl Scouts",
              },
              {
                icon: "💪",
                title: "Confidence",
                description: "Develop skills and self-assurance",
              },
              {
                icon: "🌍",
                title: "Service",
                description: "Make a positive impact in our community",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg p-4 shadow-md text-center"
                style={{
                  backgroundColor: "rgba(232, 243, 232, 0.95)",
                  borderTop: "3px solid #2D5016",
                }}
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="text-sm font-bold mb-1" style={{ color: "#2D5016" }}>
                  {item.title}
                </h3>
                <p className="text-xs text-slate-700">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Next Meeting on Image */}
          {nextEvent && (
            <div
              className="rounded-lg p-6 shadow-lg max-w-sm"
              style={{
                backgroundColor: "rgba(232, 243, 232, 0.95)",
                borderLeft: "4px solid #2D5016"
              }}
            >
              <h2 className="text-xl font-bold mb-3" style={{ color: "#2D5016" }}>
                📅 Next Meeting
              </h2>
              <div className="space-y-2 text-slate-800">
                <p className="text-lg font-semibold">
                  {nextEvent.title}
                </p>
                <p>
                  <span className="font-semibold">📍 Location:</span> {nextEvent.location}
                </p>
                <p>
                  <span className="font-semibold">📆 Date:</span> {nextEvent.date}
                </p>
                {nextEvent.notes && (
                  <p className="text-sm italic text-slate-700">
                    <span className="font-semibold">Note:</span> {nextEvent.notes}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Privacy Notice */}
      <div
        className="rounded-lg p-6 border-l-4 shadow"
        style={{
          backgroundColor: "#FFF8DC",
          borderColor: "#2D5016",
        }}
      >
        <p className="font-semibold" style={{ color: "#2D5016" }}>
          🔒 Privacy & Safety
        </p>
        <p className="mt-2 text-slate-700">
          For safety and privacy, we don't post girls' names or identifiable photos publicly.
        </p>
      </div>
    </section>
  );
}
