'use client';

export default function Hero() {
  const floatingEmojis = ['🚀', '⭐', '🎈', '🦄', '🎮', '🎨', '🏆', '🎁'];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingEmojis.map((emoji, index) => (
          <div
            key={index}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${10 + index * 12}%`,
              top: `${15 + (index % 3) * 25}%`,
              animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
              animationDelay: `${index * 0.4}s`,
            }}
          >
            {emoji}
          </div>
        ))}
        {/* Colorful blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-semibold text-sm mb-6">
              <span>🎉</span>
              <span>Free Shipping on Orders Over $50!</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              <span className="text-gray-800">Where </span>
              <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
                Dreams
              </span>
              <br />
              <span className="text-gray-800">Come to </span>
              <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                Play!
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Discover thousands of amazing toys that spark imagination, creativity, and endless joy for kids of all ages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                Shop Now 🛍️
              </button>
              <button className="bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:border-pink-400 hover:text-pink-500 hover:shadow-lg transition-all duration-300">
                Explore Categories
              </button>
            </div>
            {/* Stats */}
            <div className="flex gap-8 mt-10 justify-center lg:justify-start">
              {[
                { number: '5000+', label: 'Happy Kids' },
                { number: '1200+', label: 'Products' },
                { number: '4.9★', label: 'Rating' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-extrabold text-gray-800">{stat.number}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Toy Showcase */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Main circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-300 opacity-30" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-pink-400 to-yellow-400 opacity-20" />

              {/* Central toy emoji */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl" style={{ animation: 'float 3s ease-in-out infinite' }}>🧸</span>
              </div>

              {/* Orbiting toys */}
              {[
                { emoji: '🚂', top: '5%', left: '50%', delay: '0s' },
                { emoji: '🎮', top: '50%', right: '5%', delay: '0.5s' },
                { emoji: '🎨', bottom: '5%', left: '50%', delay: '1s' },
                { emoji: '🦄', top: '50%', left: '5%', delay: '1.5s' },
                { emoji: '⚽', top: '20%', right: '15%', delay: '0.3s' },
                { emoji: '🎸', bottom: '20%', right: '15%', delay: '0.8s' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="absolute text-4xl bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
                  style={{
                    top: item.top,
                    left: item.left,
                    right: item.right,
                    bottom: item.bottom,
                    transform: 'translate(-50%, -50%)',
                    animation: `bounce2 ${2 + idx * 0.3}s ease-in-out infinite`,
                    animationDelay: item.delay,
                  }}
                >
                  {item.emoji}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
