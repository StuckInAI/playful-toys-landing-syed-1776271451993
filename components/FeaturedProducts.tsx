'use client';

import { useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  emoji: string;
  badge: string;
  badgeColor: string;
  age: string;
};

export default function FeaturedProducts() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const products: Product[] = [
    { id: 1, name: 'Magic Rainbow Teddy Bear', price: 29.99, originalPrice: 39.99, rating: 5, reviews: 128, emoji: '🧸', badge: 'Best Seller', badgeColor: 'bg-pink-500', age: '3+' },
    { id: 2, name: 'Turbo Speed Race Car Set', price: 49.99, originalPrice: 64.99, rating: 5, reviews: 95, emoji: '🏎️', badge: 'New', badgeColor: 'bg-green-500', age: '5+' },
    { id: 3, name: 'Space Explorer Kit', price: 34.99, originalPrice: 44.99, rating: 4, reviews: 72, emoji: '🚀', badge: 'Popular', badgeColor: 'bg-purple-500', age: '6+' },
    { id: 4, name: 'Princess Castle Playset', price: 59.99, originalPrice: 79.99, rating: 5, reviews: 156, emoji: '🏰', badge: 'Best Seller', badgeColor: 'bg-pink-500', age: '4+' },
    { id: 5, name: 'Creative Art Studio Kit', price: 24.99, originalPrice: 32.99, rating: 4, reviews: 63, emoji: '🎨', badge: 'Sale', badgeColor: 'bg-orange-500', age: '5+' },
    { id: 6, name: 'Dino World Adventure Set', price: 44.99, originalPrice: 54.99, rating: 5, reviews: 89, emoji: '🦕', badge: 'New', badgeColor: 'bg-green-500', age: '4+' },
    { id: 7, name: 'Musical Instrument Bundle', price: 39.99, originalPrice: 54.99, rating: 4, reviews: 47, emoji: '🎸', badge: 'Sale', badgeColor: 'bg-orange-500', age: '3+' },
    { id: 8, name: 'Magical Unicorn Plush', price: 19.99, originalPrice: 27.99, rating: 5, reviews: 201, emoji: '🦄', badge: 'Best Seller', badgeColor: 'bg-pink-500', age: '2+' },
  ];

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  const discount = (price: number, original: number) =>
    Math.round(((original - price) / original) * 100);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            ⭐ Featured Toys
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            Kids{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              Love These!
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Hand-picked toys that kids absolutely adore. Quality guaranteed, fun guaranteed!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              {/* Product Image Area */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-48 flex items-center justify-center">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {product.emoji}
                </span>
                {/* Badge */}
                <span className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                  {product.badge}
                </span>
                {/* Discount */}
                <span className="absolute top-3 right-12 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  -{discount(product.price, product.originalPrice)}%
                </span>
                {/* Wishlist */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                  aria-label="Add to wishlist"
                >
                  <span className={wishlist.includes(product.id) ? 'text-red-500' : 'text-gray-300'}>
                    ❤
                  </span>
                </button>
                {/* Age badge */}
                <span className="absolute bottom-3 right-3 bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                  Age {product.age}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-sm mb-2 line-clamp-2 leading-snug">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-2">
                  {renderStars(product.rating)}
                  <span className="text-xs text-gray-400 ml-1">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-extrabold text-gray-800">${product.price}</span>
                  <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                </div>
                <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2.5 rounded-xl font-semibold text-sm hover:shadow-md hover:scale-105 transition-all duration-200">
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            View All Products →
          </button>
        </div>
      </div>
    </section>
  );
}
