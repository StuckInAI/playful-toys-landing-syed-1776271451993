export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: ['New Arrivals', 'Best Sellers', 'Sale Items', 'Gift Cards', 'Bundles'],
    Support: ['FAQ', 'Shipping Info', 'Returns & Refunds', 'Track Order', 'Contact Us'],
    Company: ['About Us', 'Our Story', 'Careers', 'Press', 'Blog'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'],
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🧸</span>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-400 bg-clip-text text-transparent">
                ToyLand
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The magical toy store where every child&apos;s dream comes true. Quality toys, fast delivery, and smiles guaranteed!
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: '📘', label: 'Facebook' },
                { icon: '📸', label: 'Instagram' },
                { icon: '🐦', label: 'Twitter' },
                { icon: '▶️', label: 'YouTube' },
                { icon: '📌', label: 'Pinterest' },
              ].map((social) => (
                <button
                  key={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-pink-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-pink-400 transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* App Download */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-bold text-white mb-2">📱 Download Our App</h4>
              <p className="text-gray-400 text-sm">Shop smarter with the ToyLand mobile app!</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-xl transition-colors">
                <span className="text-xl">🍎</span>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-5 py-3 rounded-xl transition-colors">
                <span className="text-xl">🤖</span>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
            {/* Payment methods */}
            <div>
              <p className="text-gray-400 text-sm mb-2 text-center">Accepted Payments</p>
              <div className="flex gap-2">
                {['💳', '🏦', '📱', '🅿️'].map((icon, i) => (
                  <span key={i} className="bg-gray-800 px-3 py-1.5 rounded-lg text-lg">{icon}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {currentYear} ToyLand. All rights reserved. Made with ❤️ for kids everywhere.
          </p>
          <div className="flex gap-4">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
