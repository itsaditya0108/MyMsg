import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, MessageSquare, BarChart3, ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-brand-indigo" />,
    title: "Verified Identity",
    desc: "Build instant trust with verified profiles and brand logos right in the inbox.",
    color: "indigo"
  },
  {
    icon: <Sparkles className="w-10 h-10 text-brand-cyan" />,
    title: "Rich Interactions",
    desc: "Deliver high-res media, carousels, and visual product showcases effortlessly.",
    color: "cyan"
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-brand-violet" />,
    title: "Smart Automations",
    desc: "Use suggested replies and smart routing to guide your customers in real-time.",
    color: "violet"
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-brand-indigo" />,
    title: "Deep Insights",
    desc: "Monitor engagement metrics like read receipts and interaction rates with precision.",
    color: "blue"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <motion.div
               initial={{ opacity: 0, y: 15 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-[10px] font-black text-brand-indigo uppercase tracking-[0.4em] mb-6 block"
            >
              Enterprise Capabilities
            </motion.div>
            <motion.h2
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter"
            >
              Powerful Features for <br />
              <span className="gradient-text italic">Success.</span>
            </motion.h2>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed"
            >
              Unlock the future of customer interaction with the most advanced <span className="text-brand-indigo font-bold">MyMsg</span> toolset designed for enterprise scale.
            </motion.p>
          </div>

          <Link 
            to="/case-studies"
            className="btn btn-secondary px-10 py-5 !rounded-2xl group cursor-pointer"
          >
            View Case Studies
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-slate-50 border border-slate-100 p-10 rounded-[3rem] hover:bg-white hover:border-brand-indigo/20 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 relative"
            >
              <div className="mb-10 w-16 h-16 rounded-[1.5rem] bg-white border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-indigo group-hover:border-brand-indigo transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-brand-indigo/30">
                <div className="text-brand-indigo group-hover:text-white transition-colors">
                    {/* Cloning icon to override color on hover */}
                    {React.cloneElement(feature.icon, { 
                      className: "w-10 h-10 transition-colors" 
                    })}
                </div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">{feature.desc}</p>
              
              <button className="flex items-center gap-2 text-[10px] font-black text-brand-indigo uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-all duration-500">
                Learn More <ArrowUpRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
