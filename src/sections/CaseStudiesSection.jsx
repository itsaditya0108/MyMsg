import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Target, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    title: "Global Retailer ROI",
    company: "Fashion Hub",
    metric: "42%",
    label: "Increase in Daily Revenue",
    desc: "Using rich media carousels to showcase new collections directly in the RCS inbox.",
    icon: <TrendingUp className="w-6 h-6 text-brand-indigo" />,
    bg: "bg-brand-indigo/5"
  },
  {
    title: "Banking Verification",
    company: "SecureBank",
    metric: "98%",
    label: "Customer Trust Rating",
    desc: "Implemented verified sender profiles for all transaction alerts and OTPs.",
    icon: <Target className="w-6 h-6 text-brand-cyan" />,
    bg: "bg-brand-cyan/5"
  },
  {
    title: "Support Success",
    company: "TravelMate",
    metric: "65%",
    label: "Reduction in Call Volume",
    desc: "Automated standard FAQs using suggested replies and rich card interactions.",
    icon: <Users className="w-6 h-6 text-brand-violet" />,
    bg: "bg-brand-violet/5"
  }
];

export default function CaseStudiesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24 relative z-10">
        <div className="text-center mb-24 cursor-pointer">
          <Link to="/case-studies">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-black text-brand-indigo uppercase tracking-[0.4em] mb-6 block"
            >
              Proof of Excellence
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter hover:text-brand-indigo transition-colors"
            >
              Results that <span className="gradient-text italic">Matter.</span>
            </motion.h2>
          </Link>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Real stories from global leaders who transformed their messaging with MyMsg.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:border-brand-indigo/20 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-700 relative overflow-hidden"
            >
              <Link to="/case-studies" className="absolute inset-0 z-0" />
              <div className={`w-14 h-14 rounded-2xl ${study.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative z-10`}>
                {study.icon}
              </div>
              
              <div className="relative z-10">
                <p className="text-[10px] font-black text-brand-indigo uppercase tracking-widest mb-2 opacity-60">{study.company}</p>
                <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">{study.title}</h3>
                
                <div className="mb-8">
                   <span className="text-5xl font-black gradient-text tracking-tighter italic">{study.metric}</span>
                   <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mt-2">{study.label}</p>
                </div>

                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10 group-hover:text-slate-700 transition-colors">
                  {study.desc}
                </p>

                <div className="flex items-center gap-2 text-[10px] font-black text-brand-indigo uppercase tracking-widest hover:gap-3 transition-all">
                  Read Success Story <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
           <Link to="/case-studies" className="btn btn-secondary px-12 py-5 !rounded-2xl group flex items-center gap-3">
              Explore More Stories
              <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
           </Link>
        </div>
      </div>
    </section>
  );
}
