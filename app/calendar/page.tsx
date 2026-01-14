import { events } from "@/data/events";

export default function CalendarPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#2D5016" }}>
        📅 Troop Calendar
      </h1>
      <p className="text-slate-600 mb-8">
        Mark your calendars! Here are our upcoming troop events and meetings.
      </p>

      <div className="space-y-4">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="rounded-lg p-6 shadow-md animate-fade-in-delay-1"
            style={{
              backgroundColor: "#E8F3E8",
              borderLeft: "4px solid #2D5016",
              animationDelay: `${idx * 0.05}s`,
            }}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold" style={{ color: "#2D5016" }}>
                  {event.title}
                </h3>
                <p className="text-slate-700 mt-2">
                  <span className="font-semibold">📍 Location:</span> {event.location}
                </p>
                <p className="text-slate-700">
                  <span className="font-semibold">📆 Date:</span> {event.date}
                </p>
                {event.notes && (
                  <p className="text-slate-600 mt-2 text-sm italic">
                    <span className="font-semibold">Note:</span> {event.notes}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className="rounded-lg p-6 mt-8 shadow"
        style={{
          backgroundColor: "#FFF8DC",
          borderLeft: "4px solid #2D5016",
        }}
      >
        <p className="font-semibold" style={{ color: "#2D5016" }}>
          ✉️ Stay Updated
        </p>
        <p className="text-slate-700 mt-2">
          For the most up-to-date schedule, please contact your troop leader or check back regularly.
        </p>
      </div>
    </div>
  );
}
