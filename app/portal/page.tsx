"use client";

import { useState } from "react";
import { checkPassword } from "@/lib/auth";

export default function Portal() {
  const [pw, setPw] = useState("");
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  const handlePasswordSubmit = () => {
    if (!pw) {
      setError("Please enter a password");
      return;
    }
    if (checkPassword(pw)) {
      setOk(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
      setPw("");
    }
  };

  if (!ok) {
    return (
      <div className="flex items-center justify-center min-h-screen -mx-4 -my-8" style={{ backgroundColor: "#F5FAF5" }}>
        <div className="rounded-xl p-8 shadow-lg max-w-sm w-full mx-4" style={{ backgroundColor: "#ffffff", border: "2px solid #2D5016" }}>
          <h1 className="text-2xl font-bold mb-2" style={{ color: "#2D5016" }}>🔐 Troop Family Portal</h1>
          <p className="text-sm text-slate-600 mb-6">Password protected access for Troop 21 families</p>
          <input
            type="password"
            className="w-full rounded p-3 border-2 focus:outline-none mb-3"
            style={{ borderColor: "#2D5016", backgroundColor: "#ffffff" }}
            placeholder="Enter password"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
              setError("");
            }}
            onKeyPress={(e) => e.key === "Enter" && handlePasswordSubmit()}
          />
          {error && (
            <p className="text-red-600 text-sm mb-4 font-semibold">{error}</p>
          )}
          <button
            className="w-full rounded py-3 text-white font-semibold hover:opacity-90 transition"
            style={{ backgroundColor: "#2D5016" }}
            onClick={handlePasswordSubmit}
          >
            Enter Portal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#2D5016" }}>
        🔐 Troop Family Portal
      </h1>
      <p className="text-slate-600 mb-8">
        Welcome! Here you'll find photos, documents, and announcements for Troop 21 families.
      </p>

      {/* Announcements */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#2D5016" }}>
          📢 Announcements
        </h2>
        <div className="space-y-4">
          {[
            {
              title: "Switzerland Trip Registration Open",
              date: "January 13, 2026",
              content: "Registration for our July trip to Switzerland is now open! Sign up by February 15th."
            },
            {
              title: "Cookie Sale Underway",
              date: "January 10, 2026",
              content: "Our annual cookie sale has started! Orders are being taken now through February 28th."
            },
            {
              title: "Winter Meeting Schedule",
              date: "January 5, 2026",
              content: "Check the calendar for our winter meeting dates and special events."
            }
          ].map((announcement, idx) => (
            <div
              key={idx}
              className="rounded-lg p-6 shadow-md"
              style={{
                backgroundColor: "#E8F3E8",
                borderLeft: "4px solid #2D5016"
              }}
            >
              <h3 className="text-lg font-bold mb-2" style={{ color: "#2D5016" }}>
                {announcement.title}
              </h3>
              <p className="text-sm text-slate-500 mb-3">{announcement.date}</p>
              <p className="text-slate-700">{announcement.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Forms & Documents */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#2D5016" }}>
          📄 Forms & Documents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              icon: "📋",
              title: "Permission Slips",
              description: "Download trip permission forms"
            },
            {
              icon: "💰",
              title: "Financial Forms",
              description: "Budget and donation information"
            },
            {
              icon: "📖",
              title: "Handbook",
              description: "Troop policies and guidelines"
            },
            {
              icon: "🏕️",
              title: "Event Registration",
              description: "Sign up for troop activities"
            }
          ].map((form, idx) => (
            <a
              key={idx}
              href="#"
              className="rounded-lg p-6 shadow-md hover:shadow-lg transition"
              style={{
                backgroundColor: "#E8F3E8",
                borderTop: "3px solid #2D5016",
                textDecoration: "none"
              }}
            >
              <div className="text-3xl mb-3">{form.icon}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "#2D5016" }}>
                {form.title}
              </h3>
              <p className="text-slate-700 text-sm">{form.description}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6" style={{ color: "#2D5016" }}>
          📸 Photo Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Fall Activities", image: "🎨" },
            { title: "Badge Workshops", image: "🏆" },
            { title: "Community Service", image: "❤️" },
            { title: "Camping Trip", image: "🏕️" },
            { title: "Cookie Sale", image: "🍪" },
            { title: "Meetings", image: "👫" },
            { title: "Skills Workshop", image: "💪" },
            { title: "Celebrations", image: "🎉" }
          ].map((photo, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              style={{
                backgroundColor: "#E8F3E8",
                border: "2px solid #2D5016",
                aspectRatio: "1"
              }}
            >
              <button
                className="w-full h-full flex flex-col items-center justify-center hover:bg-white transition"
                style={{
                  backgroundColor: "#E8F3E8"
                }}
              >
                <div className="text-4xl mb-2">{photo.image}</div>
                <p className="text-sm font-semibold text-center px-2" style={{ color: "#2D5016" }}>
                  {photo.title}
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Important Links */}
      <div
        className="rounded-lg p-8 shadow-md"
        style={{
          backgroundColor: "#E8F3E8",
          borderLeft: "4px solid #2D5016"
        }}
      >
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#2D5016" }}>
          🔗 Important Links
        </h2>
        <ul className="space-y-2 text-slate-700">
          <li>
            <a href="/calendar" className="font-semibold hover:underline" style={{ color: "#2D5016" }}>
              📅 View Full Calendar
            </a>
          </li>
          <li>
            <a href="/cookies" className="font-semibold hover:underline" style={{ color: "#2D5016" }}>
              🍪 Order Cookies
            </a>
          </li>
          <li>
            <a href="/badges" className="font-semibold hover:underline" style={{ color: "#2D5016" }}>
              🏆 View Badges
            </a>
          </li>
          <li>
            <a href="/switzerland" className="font-semibold hover:underline" style={{ color: "#2D5016" }}>
              🇨🇭 Switzerland Trip Info
            </a>
          </li>
          <li>
            <a href="/contact" className="font-semibold hover:underline" style={{ color: "#2D5016" }}>
              📧 Contact Troop Leaders
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}