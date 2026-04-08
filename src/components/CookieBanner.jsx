import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("mymsg_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("mymsg_cookie_consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100]"
        >
          <div className="bg-white rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 bg-brand-indigo h-full" />
            
            <div className="flex gap-5">
              <div className="w-12 h-12 rounded-2xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo shrink-0">
                <Cookie size={24} />
              </div>
              
              <div className="flex-1 pt-1">
                <h4 className="text-sm font-black text-slate-900 mb-2 uppercase tracking-widest">Cookie Notice</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed font-medium mb-4">
                  We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies. <Link to="/privacy" className="text-brand-indigo hover:underline font-bold">Learn more</Link>
                </p>
                
                <div className="flex gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 bg-[#1a2b4b] text-white text-[11px] font-black uppercase tracking-widest py-3 rounded-xl hover:bg-slate-800 transition-all"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="bg-slate-100 text-slate-600 text-[11px] font-black uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-slate-200 transition-all border border-slate-200/50"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-slate-300 hover:text-slate-600 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
