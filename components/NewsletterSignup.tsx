'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    // Simulate submission
    setStatus('success');
    setMessage('Thanks for subscribing! Check your email for confirmation.');
    setEmail('');
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div
      className="rounded-lg p-8 shadow-md animate-fade-in mb-8"
      style={{
        backgroundColor: '#E8F3E8',
        borderLeft: '4px solid #2D5016',
      }}
    >
      <h3 className="text-2xl font-bold mb-2" style={{ color: '#2D5016' }}>
        📬 Stay Updated!
      </h3>
      <p className="text-slate-700 mb-6">
        Subscribe to our newsletter for updates on meetings, events, and cookie sales.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded px-4 py-3 border-2 focus:outline-none transition-colors"
          style={{ borderColor: '#2D5016' }}
          required
        />
        <button
          type="submit"
          className="px-6 py-3 rounded font-semibold transition-all hover:shadow-lg"
          style={{
            backgroundColor: '#2D5016',
            color: 'white',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#3D7B2F';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#2D5016';
          }}
        >
          Subscribe
        </button>
      </form>

      {status === 'success' && (
        <p className="mt-3 text-green-600 font-semibold animate-fade-in">{message}</p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-red-600 font-semibold animate-fade-in">{message}</p>
      )}
    </div>
  );
}
