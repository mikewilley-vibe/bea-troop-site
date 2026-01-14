import { activityFeed } from '@/data/activityFeed';

export default function ActivityFeed() {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-6" style={{ color: '#2D5016' }}>
        📰 Recent Activity
      </h2>

      <div className="space-y-4">
        {activityFeed.map((activity, idx) => (
          <div
            key={activity.id}
            className="rounded-lg p-6 shadow-md animate-fade-in-delay-1 border-l-4"
            style={{
              backgroundColor: '#E8F3E8',
              borderColor: '#2D5016',
              animationDelay: `${idx * 0.05}s`,
            }}
          >
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">{activity.icon}</div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg" style={{ color: '#2D5016' }}>
                    {activity.title}
                  </h3>
                  <p className="text-xs text-slate-600">{activity.date}</p>
                </div>
                <p className="text-slate-700">{activity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
