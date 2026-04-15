export default function FeaturedCategories() {
  const categories = [
    { emoji: '🚂', name: 'Vehicles', count: '320+ items', color: 'from-blue-400 to-cyan-400', bg: 'bg-blue-50', border: 'border-blue-200' },
    { emoji: '🧩', name: 'Puzzles', count: '180+ items', color: 'from-green-400 to-emerald-400', bg: 'bg-green-50', border: 'border-green-200' },
    { emoji: '🎨', name: 'Art & Craft', count: '250+ items', color: 'from-pink-400 to-rose-400', bg: 'bg-pink-50', border: 'border-pink-200' },
    { emoji: '🦸', name: 'Action Figures', count: '190+ items', color: 'from-purple-400 to-violet-400', bg: 'bg-purple-50', border: 'border-purple-200' },
    { emoji: '🎮', name: 'Board Games', count: '140+ items', color: 'from-yellow-400 to-orange-400', bg: 'bg-yellow-50', border: 'border-yellow-200' },
    { emoji: '🧸', name: 'Plush Toys', count: '210+ items', color: 'from-red-400 to-pink-400', bg: 'bg-red-50', border: 'border-red-200' },
    { emoji: '🔬', name: 'Science Kits', count: '90+ items', color: 'from-teal-400 to-cyan-400', bg: 'bg-teal-50', border: 'border-teal-200' },
    { emoji: '🏰', name: 'Playsets', count: '160+ items', color: 'from-indigo-400 to-blue-400', bg: 'bg-indigo-50', border: 'border-indigo-200' },
  ];

  return (
    <section className="py-20 bg-white" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-pink-100 text-pink-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            🎠 Shop by Category
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
            Find the Perfect{' '}
            <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
              Toy
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Browse our wide selection of categories to find the toy that will light up your child&apos;s face!
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`group ${cat.bg} border-2 ${cat.border} rounded-2xl p-6 flex flex-col items-center gap-3 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}>
                <span className="text-3xl">{cat.emoji}</span>
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-800 text-sm sm:text-base">{cat.name}</div>
                <div className="text-xs text-gray-500 mt-0.5">{cat.count}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
