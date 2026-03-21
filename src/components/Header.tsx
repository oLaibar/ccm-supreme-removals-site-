import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Truck } from "lucide-react";
import { Button } from "./Button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Tips", path: "/tips" },
  { name: "FAQ", path: "/faq" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down
        setIsHidden(true);
        setIsMobileMenuOpen(false);
      } else {
        // Scrolling up
        setIsHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      } ${isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 z-50 transition-transform hover:scale-105">
            <img 
              src="/logo.png" 
              alt="CCM Supreme Removals" 
              className="h-24 md:h-36 w-auto object-contain" 
              style={{ filter: 'drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.85)) drop-shadow(0px 0px 4px rgba(255, 255, 255, 1))' }}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-accent ${
                  location.pathname === link.path
                    ? "text-brand-accent"
                    : isScrolled
                    ? "text-slate-200"
                    : "text-white drop-shadow-md"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:01582292303" className={`flex items-center gap-2 text-sm font-semibold transition-colors hover:text-brand-accent ${isScrolled ? "text-white" : "text-white drop-shadow-md"}`}>
              <Phone size={16} className="text-brand-accent" />
              01582 292303
            </a>
            <Button href="/quote" variant="primary" size="sm">
              GET A QUOTE
            </Button>
          </div>

          <button
            className={`lg:hidden z-50 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-md ${isScrolled ? "text-white" : "text-white drop-shadow-md"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-navy border-t border-white/10 shadow-2xl lg:hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-medium py-3 border-b border-white/5 ${
                    location.pathname === link.path ? "text-brand-accent" : "text-slate-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <a href="tel:01582292303" className="flex items-center justify-center gap-2 text-white font-semibold py-4 bg-white/5 rounded-lg active:bg-white/10 transition-colors">
                  <Phone size={18} className="text-brand-accent" />
                  01582 292303
                </a>
                <Button href="/quote" variant="primary" fullWidth className="py-4">
                  GET A QUOTE
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
