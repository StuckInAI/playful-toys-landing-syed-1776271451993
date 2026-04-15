export default function WhyChooseUs() {
  const features = [
    {
      emoji: '🛡️',
      title: 'Safe & Certified',
      description: 'All our toys meet the highest safety standards and certifications. Your child\'s safety is our top priority.',
      color: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      textColor: 'text-blue-600',
    },
    {
      emoji: '🚚',
      title: 'Fast Delivery',
      description: 'Get your toys delivered in 24-48 hours. Free shipping on orders over $50 across the country.',
      color: 'bg-green-50',
      iconBg: 'bg-green-100',
      textColor: 'text-green-600',
    },
    {
      emoji: '💰',
      title: 'Best Prices',
      description: 'We offer competitive prices with regular discounts and deals. Get the best value for your money.',
      color: 'bg-yellow-50',
      iconBg: 'bg-yellow-100',
      textColor: 'text-yellow-600',
    },
    {
      emoji: '🔄',
      title: 'Easy Returns',
      description: 'Not satisfied? Return within 30 days hassle-free. We want you and your kids to be 100% happy.',
      color: 'bg-pink-50',
      iconBg: 'bg-pink-100',
      textColor: 'text-pink-600',
    },
    {
      emoji: '🎁',
      title: 'Gift Wrapping',
      description: 'Make every occasion special with our beautiful gift wrapping service available on all products.',
      color: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      textColor: 'text-purple-600',
    },
    {
      emoji: '💬',
      title: '24/7 Support',
      description: 'Our friendly customer support team is available around the clock to help you with any queries.',
      color: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      textColor: 'text-orange-600',
    },
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-purple-100 text-purple-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            💫 Why ToyLand?
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            We Make Kids{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Smile!
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            We&apos;re not just a toy store — we&apos;re a place where memories are made and imaginations run wild.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`${feature.color} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div className={`${feature.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{feature.emoji}</span>
              </div>
              <h3 className={`text-xl font-bold ${feature.textColor} mb-3`}>{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-16 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-10 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {['🎉', '🎈', '🎁', '⭐', '🦄', '🎮'].map((emoji, i) => (
              <span
                key={i}
                className="absolute text-4xl"
                style={{ left: `${i * 17}%`, top: '20%', opacity: 0.6 }}
              >
                {emoji}
              </span>
            ))}
          </div>
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 relative z-10">
            🎉 Join 5000+ Happy Families!
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto relative z-10">
            Become a ToyLand member and enjoy exclusive discounts, early access to new arrivals, and special birthday surprises!
          </p>
          <button className="relative z-10 bg-white text-purple-600 font-bold px-10 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg">
            Join the Fun! 🚀
          </button>
        </div>
      </div>
    </section>
  );
}
