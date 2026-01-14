import { events } from "@/data/events";
import Image from "next/image";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ActivityFeed from "@/components/ActivityFeed";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
  const nextEvent = events[0];

  return (
    <section className="space-y-12">
      {/* Hero Image with Overlay Content */}
      <div className="relative -mx-4 -mt-8 overflow-hidden rounded-b-3xl shadow-2xl">
        <Image
          src="/images/1941Trooop21.jpg"
          alt="Girl Scout Troop 21"
          width={1200}
          height={500}
          priority
          className="w-full h-auto animate-blur-in"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>

        {/* Content overlaid on image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 space-y-8 pb-20 animate-fade-in">
          <div className="text-center text-white max-w-2xl">
            <h1 className="text-6xl font-bold mb-4 drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300">Welcome to Girl Scout Troop 21 🌼</h1>
            <p className="text-xl opacity-95 drop-shadow-md">
              We're dedicated to friendship, confidence, service, and fun. Building tomorrow's leaders today!
            </p>
          </div>

          {/* What We Do Cards on Image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl w-full">
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
                className="rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 card-hover animate-fade-in-delay-1 cursor-pointer backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(232, 243, 232, 0.95)",
                  borderTop: "3px solid #2D5016",
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                <div className="text-3xl mb-2 transform hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-sm font-bold mb-1 truncate" style={{ color: "#2D5016" }}>
                  {item.title}
                </h3>
                <p className="text-xs text-slate-700 line-clamp-2">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Next Meeting on Image */}
          {nextEvent && (
            <div
              className="rounded-xl p-6 shadow-2xl max-w-sm w-full animate-fade-in-delay-3 card-hover hover:scale-105 transition-all duration-300 backdrop-blur-sm"
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

      {/* Activity Feed */}
      <ActivityFeed />

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Newsletter Signup */}
      <NewsletterSignup />

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
