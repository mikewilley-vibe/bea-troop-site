'use client';

import { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: Date;
  eventName: string;
}

export default function CountdownTimer({ targetDate, eventName }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

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
  }, [targetDate]);

  if (!timeLeft) return null;

  return (
    <div
      className="rounded-xl p-8 shadow-2xl animate-fade-in mb-8 card-hover transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, #2D5016 0%, #3D7B2F 100%)',
        color: 'white',
      }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center drop-shadow-lg">⏱️ {eventName}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds },
        ].map((item) => (
          <div key={item.label} className="text-center transform hover:scale-110 transition-transform duration-200">
            <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-2 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-200 shadow-lg hover:shadow-xl">
              <p className="text-5xl font-bold drop-shadow-lg animate-pulse" style={{ animationDuration: '1.5s' }}>{String(item.value).padStart(2, '0')}</p>
            </div>
            <p className="text-sm opacity-90 font-semibold">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
