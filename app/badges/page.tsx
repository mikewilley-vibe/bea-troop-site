import BadgeGrid from "@/components/BadgeGrid";

export default function BadgesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2" style={{ color: "#2D5016" }}>
        Girl Scout Badges
      </h1>
      <p className="text-slate-600 mb-8">
        Explore the badges our Brownies can earn. Each badge represents skills learned and experiences gained!
      </p>
      <BadgeGrid />
    </div>
  );
}
