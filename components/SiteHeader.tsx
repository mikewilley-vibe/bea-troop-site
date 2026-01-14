'use client';

import { useEffect, useState } from 'react';

export default function SiteHeader() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const targetDate = new Date('2026-07-04').getTime();
    
    const calculateTimeLeft = () => {
      const difference = targetDate - new Date().getTime();

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null;

  return (
    <div
      className="w-full py-4 px-4 text-center shadow-md"
      style={{
        background: 'linear-gradient(135deg, #2D5016 0%, #3D7B2F 100%)',
        color: 'white',
      }}
    >
      <p className="text-sm opacity-90 font-semibold mb-2">🇨🇭 Switzerland Adventure</p>
      <div className="flex justify-center gap-4 items-center flex-wrap">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-1">
            <span className="text-2xl font-bold drop-shadow-lg" style={{ color: '#E8F3E8' }}>
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="text-xs opacity-90">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
