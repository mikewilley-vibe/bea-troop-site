'use client';

import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <Breadcrumb />
      <h1 className="text-3xl font-bold mb-2 drop-shadow-sm" style={{ color: "#2D5016" }}>
        📧 Contact Us
      </h1>
      <p className="text-slate-600 mb-8 text-lg">
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
            className="rounded-xl p-6 shadow-lg hover:shadow-2xl animate-fade-in-delay-1 card-hover transition-all transform hover:scale-105"
            style={{
              backgroundColor: "#E8F3E8",
              borderLeft: "4px solid #2D5016",
              animationDelay: `${idx * 0.1}s`,
            }}
          >
            <div className="text-5xl mb-3 transform hover:scale-110 transition-transform duration-200">{contact.icon}</div>
            <h3 className="text-lg font-bold mb-2 drop-shadow-sm" style={{ color: "#2D5016" }}>
              {contact.title}
            </h3>
            <p className="text-slate-800 font-semibold">{contact.info}</p>
            <p className="text-slate-600 text-sm">{contact.detail}</p>
          </div>
        ))}
      </div>

      {/* General Info */}
      <div
        className="rounded-xl p-6 shadow-lg mb-6 card-hover transition-all duration-300"
        style={{
          backgroundColor: "#E8F3E8",
          borderLeft: "4px solid #2D5016"
        }}
      >
        <h3 className="text-lg font-bold mb-3 drop-shadow-sm" style={{ color: "#2D5016" }}>
          📍 Meeting Location
        </h3>
        <p className="text-slate-700 leading-relaxed">
          Community Center<br />
          123 Main Street<br />
          Your City, State 12345
        </p>
      </div>

      {/* Map */}
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-4 drop-shadow-sm" style={{ color: "#2D5016" }}>📌 Find Us</h3>
        <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover">
          <iframe
            width="100%"
            height="400"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.00!3d40.71!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjMuNjM4ODMsIDQ2LjcxODg4!5e0!3m2!1sen!2sus!4v1234567890"
            title="Troop 21 Meeting Location"
          ></iframe>
        </div>
        <p className="text-sm text-slate-600 mt-2">
          Click the map or search "Community Center, Your City" in Google Maps for directions.
        </p>
      </div>

      {/* Quick Note */}
      <div
        className="rounded-lg p-6 shadow mb-8"
        style={{
          backgroundColor: "#FFF8DC",
          borderLeft: "4px solid #2D5016",
        }}
      >
        <p className="font-semibold" style={{ color: "#2D5016" }}>
          💬 Send us a Message
        </p>
        <p className="text-slate-700 mt-2">
          Use the form below for inquiries about the troop, cookie sales, or volunteering opportunities. We'll get back to you within 48 hours!
        </p>
      </div>

      {/* Contact Form */}
      <div
        className="rounded-lg p-8 shadow-md"
        style={{
          backgroundColor: "#E8F3E8",
          borderLeft: "4px solid #2D5016"
        }}
      >
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#2D5016" }}>
          Contact Form
        </h2>
        <ContactForm />
      </div>
    </div>
  );
}
