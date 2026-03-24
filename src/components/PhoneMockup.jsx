import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, MoreVertical, Plus, Mic } from "lucide-react";

const rcsMessages = [
  {
    type: "in",
    content: "Hi! Ready to see how RCS can transform your customer engagement?",
  },
  {
    type: "carousel",
    items: [
      {
        title: "Brand Authority",
        desc: "Build trust with verified sender profiles.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
        action: "View Profile"
      },
      {
        title: "Visual Impact",
        desc: "Deliver stunning media directly to the inbox.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500",
        action: "See Demo"
      }
    ]
  },
  {
    type: "suggested",
    replies: ["Book Demo", "View Pricing", "Learn More"]
  }
];

export default function PhoneMockup() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[300px] h-[600px] md:w-[320px] md:h-[640px]">
      {/* Side Buttons */}
      <div className="absolute left-[-2px] top-24 w-[3px] h-10 bg-slate-200 rounded-l-sm" />
      <div className="absolute left-[-2px] top-40 w-[3px] h-16 bg-slate-200 rounded-l-sm" />
      <div className="absolute right-[-2px] top-44 w-[4px] h-20 bg-slate-200 rounded-r-sm" />

      {/* Device Frame */}
      <div className="absolute inset-0 bg-white rounded-[3.5rem] p-2.5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-100 ring-2 ring-slate-50 overflow-hidden">
        {/* Inner Screen */}
        <div className="relative w-full h-full bg-[#f1f5f9] rounded-[2.8rem] overflow-hidden flex flex-col">
          
          {/* Dynamic Island */}
          <div className="absolute top-0 left-0 w-full h-10 flex items-center justify-center z-30">
            <div className="w-24 h-7 bg-black rounded-full mt-2" />
          </div>

          {/* Chat Header */}
          <div className="bg-white/95 backdrop-blur-md pt-16 pb-4 px-5 border-b border-slate-200/50 flex items-center gap-3 z-20">
            <div className="w-10 h-10 bg-brand-indigo rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg shadow-brand-indigo/20">M</div>
            <div className="flex-1">
              <div className="text-xs font-black text-slate-900 flex items-center gap-1 leading-none">
                MyMsg Solutions
                <CheckCircle className="w-3.5 h-3.5 text-brand-indigo fill-brand-indigo/10" strokeWidth={3} />
              </div>
              <p className="text-[9px] font-bold text-brand-indigo uppercase tracking-wider mt-1.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-brand-indigo rounded-full animate-pulse" />
                Verified Business
              </p>
            </div>
            <MoreVertical size={16} className="text-slate-400" />
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 space-y-6 overflow-hidden">
            <div className="text-center">
              <span className="text-[9px] font-black text-slate-400 bg-slate-200/50 px-3 py-1 rounded-full uppercase tracking-widest">Today</span>
            </div>

            <AnimatePresence mode="wait">
              {activeStep === 0 && (
                <motion.div
                  key="light-msg-0"
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white p-4 rounded-2xl rounded-tl-none text-[11px] font-medium text-slate-700 shadow-xl shadow-slate-200/50 border border-slate-100 max-w-[85%] leading-relaxed"
                >
                  {rcsMessages[0].content}
                </motion.div>
              )}

              {activeStep === 1 && (
                <motion.div
                   key="light-msg-1"
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   className="space-y-4"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/60 border border-slate-100">
                    <div className="relative h-28">
                      <img src={rcsMessages[1].items[0].image} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute bottom-2 left-3 text-white font-black text-[11px]">{rcsMessages[1].items[0].title}</span>
                    </div>
                    <div className="p-3">
                      <p className="text-[10px] text-slate-500 leading-snug mb-3">{rcsMessages[1].items[0].desc}</p>
                      <button className="w-full py-2 bg-brand-indigo rounded-lg text-white font-black text-[10px] hover:bg-brand-indigo/90 transition-colors uppercase tracking-wider shadow-lg shadow-brand-indigo/20">
                        {rcsMessages[1].items[0].action}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeStep === 2 && (
                <motion.div
                   key="light-msg-2"
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0 }}
                   className="flex flex-col gap-2 pt-2"
                >
                  {rcsMessages[2].replies.map((reply, i) => (
                    <motion.button
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={reply}
                      className="w-full bg-white border border-slate-200 px-5 py-3 rounded-2xl text-[11px] font-black text-brand-indigo shadow-sm hover:shadow-md hover:border-brand-indigo/30 transition-all text-center"
                    >
                      {reply}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input Bar */}
          <div className="bg-white p-4 border-t border-slate-100 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
              <Plus size={18} />
            </div>
            <div className="flex-1 bg-slate-100/80 rounded-full py-2.5 px-5 text-[10px] text-slate-400 font-bold">
              Message...
            </div>
            <div className="text-slate-300">
              <Mic size={18} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Top Floating Badge - Verified */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute -top-6 -right-12 z-40 bg-white/90 backdrop-blur-xl p-4 rounded-3xl border border-slate-200 shadow-2xl flex items-center gap-4 min-w-[180px]"
      >
        <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 shadow-inner">
          <CheckCircle className="w-7 h-7" strokeWidth={3} />
        </div>
        <div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Verified</span>
          <span className="text-sm font-black text-slate-900 leading-tight">Business Approved</span>
        </div>
      </motion.div>

      {/* Bottom Floating Badge - ROI */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute -bottom-10 -left-12 z-40 bg-white/90 backdrop-blur-xl p-4 rounded-3xl border border-slate-200 shadow-2xl flex items-center gap-4 min-w-[180px]"
      >
        <div className="w-12 h-12 bg-brand-indigo rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-brand-indigo/30">
          3x
        </div>
        <div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">ROI</span>
          <span className="text-sm font-black text-slate-900 leading-tight">Higher Conversion</span>
        </div>
      </motion.div>

      {/* Decorative Shadow Blur */}
      <div className="absolute -inset-10 bg-brand-indigo/10 blur-[100px] -z-10 animate-pulse" />
    </div>
  );
}
