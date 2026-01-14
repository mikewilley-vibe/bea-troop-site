import { badges } from "@/data/badges";

export default function BadgeGrid() {
  // Group badges by category
  const badgesByCategory = badges.reduce(
    (acc, badge) => {
      if (!acc[badge.category]) {
        acc[badge.category] = [];
      }
      acc[badge.category].push(badge);
      return acc;
    },
    {} as Record<string, typeof badges>
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "earned":
        return { bg: "#E8F3E8", border: "#2D5016", icon: "✓" };
      case "worked":
        return { bg: "#FFF8DC", border: "#DAA520", icon: "◐" };
      case "planned":
        return { bg: "#F0F0F0", border: "#999999", icon: "○" };
      default:
        return { bg: "#E8F3E8", border: "#2D5016", icon: "✓" };
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "earned":
        return "Earned";
      case "worked":
        return "In Progress";
      case "planned":
        return "Planned";
      default:
        return status;
    }
  };

  return (
    <div className="space-y-12">
      {/* Legend */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { status: "earned", label: "Earned", color: "#2D5016" },
          { status: "worked", label: "In Progress", color: "#DAA520" },
          { status: "planned", label: "Planned", color: "#999999" },
        ].map((item) => (
          <div key={item.status} className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{ backgroundColor: item.color }}
            >
              {item.status === "earned" ? "✓" : item.status === "worked" ? "◐" : "○"}
            </div>
            <span className="text-sm font-semibold" style={{ color: item.color }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Badges by Category */}
      {Object.entries(badgesByCategory).map(([category, categoryBadges]) => (
        <div key={category}>
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: "#2D5016" }}
          >
            {category}
          </h2>

          {/* Progress Grid - 3 columns for status */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {["planned", "worked", "earned"].map((status) => (
              <div key={status}>
                <h3
                  className="text-lg font-bold mb-4 pb-2"
                  style={{
                    color: status === "earned" ? "#2D5016" : status === "worked" ? "#DAA520" : "#999999",
                    borderBottom: `2px solid ${status === "earned" ? "#2D5016" : status === "worked" ? "#DAA520" : "#999999"}`,
                  }}
                >
                  {getStatusLabel(status)}
                </h3>

                <div className="space-y-3">
                  {categoryBadges
                    .filter((b) => b.status === status)
                    .map((badge, idx) => {
                      const statusStyle = getStatusColor(badge.status);
                      return (
                        <div
                          key={badge.id}
                          className="rounded-lg p-4 shadow-md hover:shadow-lg transition animate-fade-in-delay-1"
                          style={{
                            backgroundColor: statusStyle.bg,
                            borderLeft: `4px solid ${statusStyle.border}`,
                            animationDelay: `${idx * 0.05}s`,
                          }}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-lg"
                              style={{ backgroundColor: statusStyle.border }}
                            >
                              {statusStyle.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4
                                className="font-bold text-sm"
                                style={{ color: statusStyle.border }}
                              >
                                {badge.name}
                              </h4>
                              <p className="text-xs text-slate-600 mt-1">
                                {badge.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
