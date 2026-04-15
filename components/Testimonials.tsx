'use client';

import { useState } from 'react';

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  product: string;
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'Mom of 2',
      avatar: '👩‍👧‍👦',
      rating: 5,
      text: 'My kids absolutely love every toy we\'ve ordered from ToyLand! The quality is amazing and they arrived super fast. My daughter hasn\'t put down her unicorn plush in weeks!',
      product: '🦄 Magical Unicorn Plush',
    },
    {
      name: 'Michael Chen',
      role: 'Dad of 3',
      avatar: '👨‍👦‍👦',
      rating: 5,
      text: 'The Space Explorer Kit was a huge hit with my son. He spent the whole weekend learning about planets. ToyLand truly offers educational toys that make learning fun!',
      product: '🚀 Space Explorer Kit',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Mom of 1',
      avatar: '👩‍👧',
      rating: 5,
      text: 'Excellent customer service and the toys are always well-packaged. The Princess Castle Playset kept my daughter busy for hours. Will definitely order again!',
      product: '🏰 Princess Castle Playset',
    },
    {
      name: 'David Kim',
      role: 'Dad of 2',
      avatar: '👨‍👧‍👦',
      rating: 5,
      text: 'Free shipping, fast delivery, and top-notch quality. What more could you ask for? My boys love their race car set and they\'re always asking for more from ToyLand!',
      product: '🏎️ Turbo Speed Race Car Set',
    },
  ];

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-green-100 text-green-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            💬 Happy Parents
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            What Parents{' '}
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Don&apos;t just take our word for it — hear from the thousands of happy families we&apos;ve served!
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                activeIndex === index ? 'border-pink-400 shadow-pink-100' : 'border-transparent'
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl bg-gradient-to-br from-pink-100 to-purple-100 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-800">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                  <div className="flex mt-1">{renderStars(t.rating)}</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full text-sm text-gray-500">
                <span>Purchased:</span>
                <span className="font-medium text-gray-700">{t.product}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-8 h-3 bg-pink-500' : 'w-3 h-3 bg-gray-300'
              }`}
              aria-label={`Select testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
