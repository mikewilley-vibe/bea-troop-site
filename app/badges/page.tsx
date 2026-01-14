'use client';

import BadgeGrid from "@/components/BadgeGrid";
import Breadcrumb from "@/components/Breadcrumb";

export default function BadgesPage() {
  return (
    <div>
      <Breadcrumb />
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#2D5016" }}>
        Girl Scout Badges
      </h1>
      <p className="text-slate-600 mb-8">
        Explore the badges our Brownies can earn. Each badge represents skills learned and experiences gained! Click any badge to see details.
      </p>
      <BadgeGrid />
    </div>
  );
}
