import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight, CheckCircle2 } from "lucide-react";

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
        {/* Decorative backdrop glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-indigo/5 blur-[120px] rounded-full pointer-events-none" />
        
      <div className="container mx-auto px-8 lg:px-24 xl:px-32 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
            {/* LEFT HEADER */}
            <div className="lg:w-1/3">
                <div className="sticky top-40">
                    <div className="w-16 h-16 bg-brand-indigo text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-brand-indigo/20">
                        <HelpCircle size={32} />
                    </div>
                    <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">
                        Common <br />
                        <span className="gradient-text italic">Questions.</span>
                    </h2>
                    <p className="text-slate-500 font-medium leading-relaxed mb-10">Everything you need to know about launching your next-gen messaging campaign.</p>
                    <button className="text-sm font-black text-brand-indigo flex items-center gap-2 group hover:gap-4 transition-all">
                        Visit Help Center <ArrowRight size={18} />
                    </button>
                </div>
            </div>

            {/* RIGHT ACCORDION */}
            <div className="lg:w-2/3 space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className={`rounded-[2.5rem] overflow-hidden transition-all duration-500 border ${
                    openIdx === idx 
                        ? "bg-slate-50 border-brand-indigo/10 shadow-lg shadow-slate-100" 
                        : "bg-white border-slate-100 hover:border-slate-300"
                }`}>
                  <button
                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    className="w-full p-8 text-left flex items-center justify-between group"
                  >
                    <span className={`font-black text-xl transition-colors duration-300 ${openIdx === idx ? "text-slate-900" : "text-slate-500"}`}>
                        {faq.q}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                        openIdx === idx ? "bg-brand-indigo text-white rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
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
                          <div className="text-slate-500 leading-relaxed font-medium text-lg pt-2 mb-6">
                            {faq.a}
                          </div>
                          <div className="flex items-center gap-3 bg-brand-indigo/5 p-4 rounded-2xl border border-brand-indigo/10 w-fit">
                            <div className="w-8 h-8 bg-brand-indigo text-white rounded-full flex items-center justify-center">
                                <CheckCircle2 size={16} strokeWidth={3} />
                            </div>
                            <span className="text-xs font-black text-brand-indigo uppercase tracking-widest">Verified RCS Channel</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
