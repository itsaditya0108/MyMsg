import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Landmark, HeartPulse, Plane, Smartphone, ArrowRight } from "lucide-react";

const useCases = [
  {
    icon: <ShoppingBag className="w-10 h-10" />,
    title: "Retail & E-commerce",
    desc: "Drive personalized promotions with rich media carousels and direct purchase links in the inbox.",
    metrics: "4.5x CTR",
    color: "from-brand-indigo/10 to-transparent text-brand-indigo"
  },
  {
    icon: <Landmark className="w-10 h-10" />,
    title: "Banking & Finance",
    desc: "Secure OTPs and transaction alerts with verified profiles for instant brand trust and safety.",
    metrics: "98% Open Rate",
    color: "from-brand-cyan/10 to-transparent text-brand-cyan"
  },
  {
    icon: <HeartPulse className="w-10 h-10" />,
    title: "Healthcare",
    desc: "Appointment reminders with interactive 'Confirm' or 'Reschedule' buttons for better patient flow.",
    metrics: "60% No-show Reduction",
    color: "from-brand-violet/10 to-transparent text-brand-violet"
  },
  {
    icon: <Plane className="w-10 h-10" />,
    title: "Travel & Hospitality",
    desc: "Digital boarding passes and real-time updates with immersive visuals for a premium guest experience.",
    metrics: "3x Engagement",
    color: "from-orange-500/10 to-transparent text-orange-500"
  }
];

export default function UseCases() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50/50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-black text-brand-indigo uppercase tracking-[0.4em] mb-6 block"
            >
              Industry Deep Dive
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter"
            >
              RCS for Every <br />
              <span className="gradient-text italic">Vertical.</span>
            </motion.h2>
            <p className="text-lg md:text-xl text-slate-500 font-medium">
              Explore how MyMsg RCS transforms customer interactions across the world's most demanding sectors.
            </p>
          </div>
          
          <button className="flex items-center gap-3 text-sm font-black text-slate-900 group">
             View All Industries 
             <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-brand-indigo group-hover:text-white transition-all">
                <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
             </div>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {useCases.map((useCase, idx) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group bg-white p-12 rounded-[4rem] border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-700 relative overflow-hidden"
            >
              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${useCase.color} blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="flex flex-col md:flex-row md:items-center gap-8 mb-10">
                <div className="w-20 h-20 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-indigo group-hover:scale-110 group-hover:bg-brand-indigo group-hover:text-white transition-all duration-700 shadow-sm group-hover:shadow-lg group-hover:shadow-brand-indigo/30">
                   {useCase.icon}
                </div>
                <div>
                   <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">{useCase.title}</h3>
                   <div className="text-brand-indigo font-black text-sm uppercase tracking-widest flex items-center gap-2">
                      <Smartphone size={14} /> {useCase.metrics} Impact
                   </div>
                </div>
              </div>
              
              <p className="text-slate-500 text-lg font-medium leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
                {useCase.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
