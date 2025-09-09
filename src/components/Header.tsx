import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "About", href: "/about" },
    { label: "Offerings", href: "/offerings" },
    { label: "The Collective", href: "/collective" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-lg' 
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-200/30 shadow-sm'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className={`text-xl font-bold transition-colors duration-300 ${
              scrolled ? 'text-gray-900' : 'text-gray-800'
            }`}>
              The Re-membering Collective
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-amber-600 ${
                  location.pathname === item.href
                    ? "text-amber-600 font-semibold"
                    : scrolled 
                      ? "text-gray-700" 
                      : "text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button (placeholder for future mobile menu) */}
          <button className="md:hidden p-2 text-gray-600 hover:text-amber-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;