import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "How does verified RCS differ from SMS?",
    a: "Unlike SMS, RCS allows for verified sender IDs, brand logos, high-resolution media, and interactive 'Quick Response' buttons, leading to significantly higher trust and engagement."
  },
  {
    q: "Is RCS truly universal across all devices?",
    a: "RCS is the global standard supported natively on Android and recently on iOS 18. This covers over 95% of modern smartphone users globally."
  },
  {
    q: "How do I get my business verified?",
    a: "Our team handles the end-to-end verification process with carriers. You simply provide your brand assets and business documentation, and we handle the rest."
  },
  {
    q: "Can I track the ROI of my RCS campaigns?",
    a: "Yes. RCS provides granular, real-time analytics including read receipts, click-through rates, and message delivery confirmations."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-indigo/5 blur-[140px] rounded-full pointer-events-none" />
        
      <div className="container mx-auto px-6 lg:px-12 xl:px-24 relative z-10 max-w-4xl">
        <div className="text-center mb-20 lg:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-black text-brand-indigo uppercase tracking-[0.4em] mb-6 block"
            >
              Frequently Asked Questions
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter"
            >
              Have <span className="gradient-text italic">Questions?</span>
            </motion.h2>
            <p className="text-lg text-slate-500 font-medium max-w-xl mx-auto">
               Find the answers to common questions about MyMsg RCS and next-gen business messaging.
            </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.05 }}
               className={`rounded-[2rem] overflow-hidden transition-all duration-500 border ${
                  openIdx === idx 
                      ? "bg-slate-50 border-brand-indigo/10 shadow-xl shadow-slate-200/50" 
                      : "bg-white border-slate-100 hover:border-slate-200"
               }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-8 text-left flex items-center justify-between group cursor-pointer"
              >
                <span className={`font-black text-lg md:text-xl transition-colors duration-300 ${openIdx === idx ? "text-brand-indigo" : "text-slate-600"}`}>
                    {faq.q}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0 ${
                    openIdx === idx ? "bg-brand-indigo text-white rotate-180" : "bg-slate-50 text-slate-400 group-hover:bg-slate-100 group-hover:text-slate-600"
                }`}>
                    <ChevronDown size={20} />
                </div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-8 pb-10">
                      <div className="text-slate-600 leading-relaxed font-medium text-lg pt-2">
                        {faq.a}
                      </div>
                      
                      <div className="mt-8 flex flex-wrap gap-4">
                         <div className="flex items-center gap-3 bg-white p-3 px-5 rounded-full border border-slate-100 shadow-sm">
                            <CheckCircle2 size={16} className="text-brand-indigo" />
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Verified Solution</span>
                         </div>
                         <Link to="/contact" className="flex items-center gap-2 text-[10px] font-black text-brand-indigo uppercase tracking-widest hover:gap-3 transition-all cursor-pointer">
                            Ask Team <ArrowRight size={14} />
                         </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
