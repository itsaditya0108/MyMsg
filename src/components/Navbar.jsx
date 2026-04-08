import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, MessageSquare } from "lucide-react";

const navLinks = [
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 sm:px-6 lg:px-12 xl:px-24 pt-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-[2rem] transition-all duration-500 w-full border ${
          isScrolled 
            ? "glass-card !bg-white/80 !shadow-2xl border-brand-indigo/10 py-3 mt-0" 
            : "bg-white/50 backdrop-blur-md border-white mt-2 shadow-sm"
        }`}
      >
        <Link 
          to="/" 
          className="flex items-center gap-3 text-2xl font-black tracking-tighter text-slate-900 group"
        >
          <div className="relative w-11 h-11 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
            {/* Multi-color gradient rings - more vibrant */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo via-brand-cyan to-yellow-400 rounded-[1.2rem] opacity-30 scale-110 blur-md group-hover:opacity-50 transition-opacity duration-500" />
            
            {/* Inner colorful box - multi-stop gradient */}
            <div className="relative w-10 h-10 bg-gradient-to-br from-[#4f46e5] via-[#8b5cf6] to-[#06b6d4] text-white rounded-[1.1rem] flex items-center justify-center shadow-2xl shadow-brand-indigo/30 transition-all duration-500 border-t border-white/40 border-l border-white/20 font-heading">
              <MessageSquare size={20} strokeWidth={2.5} className="drop-shadow-lg" />
              
              {/* Vibrant accent dots - different colors */}
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-yellow-400 rounded-full border-2 border-white shadow-lg animate-pulse" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-brand-cyan rounded-full border-2 border-white shadow-md" />
              <div className="absolute top-1/2 -right-1 w-2 h-2 bg-pink-500 rounded-full border-2 border-white shadow-sm" />
            </div>
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-indigo via-brand-cyan to-brand-violet font-heading tracking-[-0.05em]">MyMsg</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 p-1.5 bg-slate-100/50 backdrop-blur-sm rounded-2xl border border-slate-200/60 relative">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-6 py-2.5 text-[13px] font-black transition-colors duration-300 rounded-xl z-20 ${
                  isActive ? "text-brand-indigo" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white shadow-[0_4px_12px_-4px_rgba(0,0,0,0.12)] border border-slate-100 rounded-xl z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden sm:flex btn btn-primary !py-2.5 !px-6 text-[12px] uppercase tracking-[0.1em] !rounded-xl group gap-2">
            Get Started
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-900 border border-slate-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className="absolute top-full left-4 right-4 mt-4 md:hidden bg-white/95 backdrop-blur-2xl rounded-[2.5rem] border border-slate-200 shadow-2xl p-8 flex flex-col gap-5 overflow-hidden z-50"
              >
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-bold px-6 py-3.5 rounded-2xl transition-all ${
                        location.pathname === link.path 
                          ? "bg-brand-indigo text-white shadow-lg shadow-brand-indigo/20" 
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                <div className="h-px bg-slate-100 my-2" />
                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn btn-primary w-full py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em]"
                >
                  Get Started Now
                </Link>
              </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
