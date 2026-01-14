import { activityFeed } from '@/data/activityFeed';

export default function ActivityFeed() {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold mb-8 drop-shadow-sm" style={{ color: '#2D5016' }}>
        📰 Recent Activity
      </h2>

      <div className="space-y-4">
        {activityFeed.map((activity, idx) => (
          <div
            key={activity.id}
            className="rounded-xl p-6 shadow-lg hover:shadow-2xl card-hover transition-all duration-300 transform hover:scale-102 border-l-4"
            style={{
              backgroundColor: '#E8F3E8',
              borderColor: '#2D5016',
              animationDelay: `${idx * 0.05}s`,
            }}
          >
            <div className="flex gap-4">
              <div className="text-5xl flex-shrink-0 transform hover:scale-110 transition-transform duration-200 cursor-pointer">{activity.icon}</div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-lg drop-shadow-sm" style={{ color: '#2D5016' }}>
                    {activity.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-semibold bg-white/50 px-2 py-1 rounded-full">{activity.date}</p>
                </div>
                <p className="text-slate-700 leading-relaxed">{activity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
