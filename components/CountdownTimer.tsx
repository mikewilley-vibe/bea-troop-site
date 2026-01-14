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
      className="rounded-lg p-8 shadow-md animate-fade-in mb-8"
      style={{
        background: 'linear-gradient(135deg, #2D5016 0%, #3D7B2F 100%)',
        color: 'white',
      }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">⏱️ {eventName}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-2">
              <p className="text-4xl font-bold">{String(item.value).padStart(2, '0')}</p>
            </div>
            <p className="text-sm opacity-90">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
