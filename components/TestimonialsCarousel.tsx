'use client';

import { useState } from 'react';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () =>
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);

  const testimonial = testimonials[current];

  return (
    <div
      className="rounded-lg p-8 shadow-md animate-fade-in"
      style={{
        backgroundColor: '#E8F3E8',
        borderLeft: '4px solid #2D5016',
      }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#2D5016' }}>
        💬 What People Say
      </h2>

      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          className="p-2 rounded-lg hover:shadow-md transition"
          style={{ backgroundColor: '#2D5016', color: 'white' }}
          aria-label="Previous testimonial"
        >
          ←
        </button>

        <div className="flex-1 text-center">
          <p className="text-4xl mb-3">{testimonial.emoji}</p>
          <p className="text-slate-700 italic mb-4 text-lg">"{testimonial.text}"</p>
          <p className="font-bold" style={{ color: '#2D5016' }}>
            — {testimonial.name}
          </p>
          <p className="text-sm text-slate-600">{testimonial.role}</p>
        </div>

        <button
          onClick={next}
          className="p-2 rounded-lg hover:shadow-md transition"
          style={{ backgroundColor: '#2D5016', color: 'white' }}
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>

      <div className="flex gap-2 justify-center mt-6">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="w-2 h-2 rounded-full transition-all"
            style={{
              backgroundColor: idx === current ? '#2D5016' : '#ccc',
              width: idx === current ? '24px' : '8px',
            }}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
