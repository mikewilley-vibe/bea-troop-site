'use client';

import { useState } from 'react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon?: string;
  details?: Record<string, string>;
}

export default function DetailModal({
  isOpen,
  onClose,
  title,
  description,
  icon,
  details,
}: DetailModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 animate-fade-in">
        <div
          className="bg-white rounded-lg shadow-2xl max-w-md w-full animate-fade-in"
          style={{ backgroundColor: '#ffffff' }}
        >
          <div className="p-6">
            {icon && <div className="text-5xl mb-4">{icon}</div>}
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: '#2D5016' }}
            >
              {title}
            </h2>
            <p className="text-slate-700 mb-4">{description}</p>

            {details && (
              <div className="space-y-3 mb-6">
                {Object.entries(details).map(([key, value]) => (
                  <div key={key}>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: '#2D5016' }}
                    >
                      {key}
                    </p>
                    <p className="text-slate-700 text-sm">{value}</p>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={onClose}
              className="w-full py-2 rounded-lg font-semibold transition-colors"
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
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
