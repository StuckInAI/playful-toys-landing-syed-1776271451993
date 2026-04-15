'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['🎁', '⭐', '🎈', '🎉', '🦄', '🚀', '🎮', '🏆'].map((emoji, i) => (
          <span
            key={i}
            className="absolute text-3xl opacity-20"
            style={{
              left: `${i * 13}%`,
              top: i % 2 === 0 ? '10%' : '70%',
              transform: `rotate(${i * 30}deg)`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-6xl mb-6">📬</div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Get Exclusive Deals!
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about new arrivals, special offers, and magical surprises!
        </p>

        {submitted ? (
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 inline-block">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-extrabold text-white mb-2">You&apos;re In!</h3>
            <p className="text-white/90">Thank you for subscribing! Get ready for amazing deals!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-full text-gray-800 font-medium placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-white/50 shadow-lg"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
            >
              Subscribe 🎁
            </button>
          </form>
        )}

        <p className="text-white/70 text-sm mt-6">
          No spam ever. Unsubscribe at any time. 💌
        </p>
      </div>
    </section>
  );
}
