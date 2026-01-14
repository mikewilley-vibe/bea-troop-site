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
      className="rounded-xl p-8 shadow-lg animate-fade-in card-hover transition-all duration-300"
      style={{
        backgroundColor: '#E8F3E8',
        borderLeft: '4px solid #2D5016',
      }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center drop-shadow-sm" style={{ color: '#2D5016' }}>
        💬 What People Say
      </h2>

      <div className="flex items-center gap-6">
        <button
          onClick={prev}
          className="p-3 rounded-lg hover:shadow-md transition-all transform hover:scale-110 active:scale-95 flex-shrink-0"
          style={{ backgroundColor: '#2D5016', color: 'white' }}
          aria-label="Previous testimonial"
        >
          ←
        </button>

        <div className="flex-1 text-center animate-scale-in">
          <p className="text-5xl mb-4 transform hover:scale-125 transition-transform duration-300 cursor-pointer">{testimonial.emoji}</p>
          <p className="text-slate-700 italic mb-6 text-lg leading-relaxed min-h-24">&quot;{testimonial.text}&quot;</p>
          <p className="font-bold" style={{ color: '#2D5016' }}>
            — {testimonial.name}
          </p>
          <p className="text-sm text-slate-600">{testimonial.role}</p>
        </div>

        <button
          onClick={next}
          className="p-3 rounded-lg hover:shadow-md transition-all transform hover:scale-110 active:scale-95 flex-shrink-0"
          style={{ backgroundColor: '#2D5016', color: 'white' }}
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>

      <div className="flex gap-3 justify-center mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="rounded-full transition-all duration-300 hover:shadow-md hover:scale-110 active:scale-95"
            style={{
              backgroundColor: idx === current ? '#2D5016' : '#ccc',
              width: idx === current ? '32px' : '10px',
              height: '10px',
            }}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
