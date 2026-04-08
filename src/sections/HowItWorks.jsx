import React from "react";
import { motion } from "framer-motion";
import { Search, CheckCircle2, Server, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Strategy",
    desc: "We analyze your customer journey to identify the best RCS touchpoints and interaction goals.",
    color: "bg-brand-indigo/10 text-brand-indigo"
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: "Verification",
    desc: "Our team handles the end-to-end RBM verification with global carriers for your brand.",
    color: "bg-brand-cyan/10 text-brand-cyan"
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Integration",
    desc: "Seamlessly connect our enterprise-grade API with your existing marketing and CRM stack.",
    color: "bg-brand-violet/10 text-brand-violet"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Scale",
    desc: "Deploy your campaign and watch engagement metrics soar with real-time deep analytics.",
    color: "bg-orange-500/10 text-orange-500"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-black text-brand-indigo uppercase tracking-[0.4em] mb-6 block"
          >
            The MyMsg Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter"
          >
            How it <span className="gradient-text italic">Works.</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium">
            Explore how MyMsg RCS transforms customer interactions across the world's most demanding sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[15%] right-[15%] h-px bg-slate-100 -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group relative"
            >
              <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-10 mx-auto lg:mx-0 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-500 border border-current/10`}>
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[11px] font-black text-slate-400 group-hover:text-brand-indigo transition-colors shadow-sm">
                  0{idx + 1}
                </div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight text-center lg:text-left">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed text-center lg:text-left group-hover:text-slate-700 transition-colors">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
