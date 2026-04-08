import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Check, Send, User, ChevronRight } from "lucide-react";

const chatSteps = [
  { 
    type: "incoming", 
    text: "Hello! We've found a special offer for you. View our latest collection?", 
    time: "10:00 AM",
    chips: ["Show me!", "Maybe later", "Current Deals"]
  },
  { 
    type: "outgoing", 
    text: "Show me!", 
    time: "10:01 AM" 
  },
  { 
    type: "incoming", 
    isCarousel: true,
    items: [
      { title: "Summer Collection", price: "$49.99", img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=300&fit=crop" },
      { title: "Limited Edition", price: "$89.99", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop" }
    ],
    time: "10:01 AM"
  },
  { 
    type: "incoming", 
    text: "Great choice! Would you like to check out now?", 
    time: "10:02 AM",
    chips: ["Buy Now", "Add to Cart", "Contact Support"]
  }
];

export default function LivePreview() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % chatSteps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[10px] font-black text-brand-indigo uppercase tracking-[0.4em] mb-6 block">Experience the Difference</div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tighter leading-tight">
              Interactive <br />
              <span className="gradient-text italic">Engagement.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 mb-12 font-medium leading-relaxed max-w-xl">
               See why MyMsg RCS outperforms traditional SMS. Deliver rich media, carousel cards, and interactive chips that drive 3x more conversions—all within the native messaging app.
            </p>
            
            <div className="space-y-6">
               {[
                 { title: "Verified Sender", desc: "Build instant trust with verified brand profiles and logos." },
                 { title: "Rich Media Support", desc: "Send high-res images, videos, and product carousels." },
                 { title: "Suggested Actions", desc: "Guide users with interactive reply buttons and chips." }
               ].map((feature, i) => (
                 <div key={i} className="flex gap-4 group cursor-pointer p-4 rounded-3xl hover:bg-slate-50 transition-all duration-300">
                    <div className="mt-1 w-8 h-8 rounded-xl bg-gradient-to-br from-brand-indigo to-brand-cyan text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-brand-indigo/20">
                       <Check size={16} strokeWidth={4} />
                    </div>
                    <div>
                       <h4 className="text-lg font-black text-slate-900 group-hover:text-brand-indigo transition-colors duration-300">{feature.title}</h4>
                       <p className="text-slate-500 text-sm font-medium leading-relaxed">{feature.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* RIGHT VISUAL - INTERACTIVE PHONE */}
          <div className="relative flex justify-center items-center">
            {/* Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-brand-cyan/10 blur-[140px] rounded-full z-0" />
            
            {/* Phone Frame */}
            <div className="relative z-10 w-[320px] h-[640px] bg-slate-950 rounded-[3rem] border-[8px] border-slate-900 shadow-[20px_40px_100px_rgba(0,0,0,0.2)] overflow-hidden">
               {/* Phone Top Bar */}
               <div className="h-16 bg-white border-b border-slate-100 flex items-center px-4 gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-indigo flex items-center justify-center text-white shadow-inner">
                     <User size={16} />
                  </div>
                  <div>
                     <p className="text-xs font-black text-slate-900 leading-none flex items-center gap-1">
                        Luxury Brand
                        <div className="w-2.5 h-2.5 bg-brand-cyan rounded-full flex items-center justify-center text-white p-[1.5px]">
                           <Check size={10} strokeWidth={5} />
                        </div>
                     </p>
                     <p className="text-[9px] text-brand-cyan font-bold">Verified Business</p>
                  </div>
               </div>

               {/* Chat Body */}
               <div className="p-4 h-[500px] overflow-hidden flex flex-col gap-4 bg-slate-50 relative">
                  <AnimatePresence mode="popLayout">
                    {chatSteps.slice(0, currentStep + 1).map((step, idx) => (
                       <motion.div
                         key={idx}
                         initial={{ opacity: 0, y: 10, scale: 0.95 }}
                         animate={{ opacity: 1, y: 0, scale: 1 }}
                         className={`flex ${step.type === "incoming" ? "justify-start" : "justify-end"}`}
                       >
                         <div className={`p-3 rounded-2xl max-w-[85%] text-[11px] font-medium shadow-sm leading-relaxed ${
                            step.type === "incoming" ? "bg-white text-slate-700" : "bg-brand-indigo text-white"
                         }`}>
                           {step.text && <div>{step.text}</div>}
                           
                           {/* Carousel Markup */}
                           {step.isCarousel && (
                              <div className="flex gap-2 mt-2 -mx-2 px-2 overflow-x-hidden">
                                {step.items.map((item, i) => (
                                   <div key={i} className="min-w-[140px] bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm">
                                      <img src={item.img} className="w-full h-24 object-crop" />
                                      <div className="p-2">
                                         <p className="font-black text-[9px] text-slate-900">{item.title}</p>
                                         <p className="text-slate-400 text-[8px] font-bold">{item.price}</p>
                                      </div>
                                   </div>
                                ))}
                              </div>
                           )}

                           <div className={`text-[8px] mt-1 text-right opacity-40`}>{step.time}</div>
                         </div>
                       </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Typing Indicator */}
                  {currentStep < chatSteps.length - 1 && (
                     <div className="flex gap-1 mt-2">
                        {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />)}
                     </div>
                  )}
               </div>

               {/* Interaction Chips */}
               <div className="absolute bottom-4 left-0 right-0 px-4 flex flex-wrap gap-2 justify-center">
                  {chatSteps[currentStep].chips?.map((chip, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="px-3 py-1.5 bg-white border border-brand-indigo/20 text-brand-indigo text-[10px] font-black rounded-full shadow-sm"
                     >
                        {chip}
                     </motion.div>
                  ))}
               </div>
            </div>
            
            {/* Phone Side Decor */}
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-24 h-24 bg-brand-indigo/10 blur-2xl rounded-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
