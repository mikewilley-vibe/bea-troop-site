export default function ContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#2D5016" }}>
        📧 Contact Us
      </h1>
      <p className="text-slate-600 mb-8">
        Have questions? Get in touch with us!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Contact Info Cards */}
        {[
          {
            icon: "👩‍🏫",
            title: "Troop Leader",
            info: "Jane Smith",
            detail: "jane.smith@email.com"
          },
          {
            icon: "👩‍🤝‍👩",
            title: "Co-Leader",
            info: "Sarah Johnson",
            detail: "sarah.johnson@email.com"
          }
        ].map((contact, idx) => (
          <div
            key={idx}
            className="rounded-lg p-6 shadow-md"
            style={{
              backgroundColor: "#E8F3E8",
              borderLeft: "4px solid #2D5016"
            }}
          >
            <div className="text-4xl mb-3">{contact.icon}</div>
            <h3 className="text-lg font-bold mb-2" style={{ color: "#2D5016" }}>
              {contact.title}
            </h3>
            <p className="text-slate-800 font-semibold">{contact.info}</p>
            <p className="text-slate-600 text-sm">{contact.detail}</p>
          </div>
        ))}
      </div>

      {/* General Info */}
      <div
        className="rounded-lg p-6 shadow-md mb-6"
        style={{
          backgroundColor: "#E8F3E8",
          borderLeft: "4px solid #2D5016"
        }}
      >
        <h3 className="text-lg font-bold mb-3" style={{ color: "#2D5016" }}>
          📍 Meeting Location
        </h3>
        <p className="text-slate-700">
          Community Center<br />
          123 Main Street<br />
          Your City, State 12345
        </p>
      </div>

      {/* Quick Note */}
      <div
        className="rounded-lg p-6 shadow"
        style={{
          backgroundColor: "#FFF8DC",
          borderLeft: "4px solid #2D5016",
        }}
      >
        <p className="font-semibold" style={{ color: "#2D5016" }}>
          💬 Send a Message
        </p>
        <p className="text-slate-700 mt-2">
          For general inquiries about the troop, cookie sales, or volunteering opportunities, please reach out to your troop leader. They'll be happy to help!
        </p>
      </div>
    </div>
  );
}
