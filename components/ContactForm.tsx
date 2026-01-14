'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setMessage('Please fill in all required fields');
      return;
    }

    // Simulate sending email
    console.log('Form submitted:', formData);
    setStatus('success');
    setMessage("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleChange}
          required
          className="rounded p-3 border-2 focus:outline-none transition-colors"
          style={{ borderColor: '#2D5016' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email *"
          value={formData.email}
          onChange={handleChange}
          required
          className="rounded p-3 border-2 focus:outline-none transition-colors"
          style={{ borderColor: '#2D5016' }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="tel"
          name="phone"
          placeholder="Phone (optional)"
          value={formData.phone}
          onChange={handleChange}
          className="rounded p-3 border-2 focus:outline-none transition-colors"
          style={{ borderColor: '#2D5016' }}
        />
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="rounded p-3 border-2 focus:outline-none transition-colors"
          style={{ borderColor: '#2D5016' }}
        >
          <option value="">Select a topic</option>
          <option value="general">General Inquiry</option>
          <option value="cookies">Cookie Sales</option>
          <option value="volunteer">Volunteering</option>
          <option value="events">Events & Activities</option>
          <option value="other">Other</option>
        </select>
      </div>

      <textarea
        name="message"
        placeholder="Your Message *"
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        className="w-full rounded p-3 border-2 focus:outline-none transition-colors"
        style={{ borderColor: '#2D5016' }}
      />

      <button
        type="submit"
        className="w-full py-3 rounded font-semibold transition-all hover:shadow-lg"
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
        Send Message
      </button>

      {status === 'success' && (
        <p className="p-3 rounded text-green-700 bg-green-100 font-semibold animate-fade-in">
          {message}
        </p>
      )}
      {status === 'error' && (
        <p className="p-3 rounded text-red-700 bg-red-100 font-semibold animate-fade-in">
          {message}
        </p>
      )}
    </form>
  );
}
