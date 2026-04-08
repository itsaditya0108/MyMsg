import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Target, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const studies = [
  {
    category: "Retail & ROI",
    title: "How Fashion Hub Boosted Sales by 42% with RCS Carousels",
    stats: [
      { label: "Increase in Daily Revenue", value: "42%" },
      { label: "Click-Through Rate", value: "12.5%" },
      { label: "Return on Ad Spend", value: "8.2x" }
    ],
    desc: "Fashion Hub wanted to cut through the noise of traditional SMS marketing. By implementing MyMsg carousels during their summer campaign, they delivered immersive product showcases directly to customer inboxes.",
    color: "brand-indigo"
  },
  {
    category: "Banking & Security",
    title: "SecureBank: Achieving 98% Customer Trust for OTPs",
    stats: [
      { label: "Customer Trust Rating", value: "98%" },
      { label: "Fraud Attempt Reduction", value: "35%" },
      { label: "Open Rate", value: "99.1%" }
    ],
    desc: "By verifying their sender profile with MyMsg, SecureBank eliminated the risk of phishing and ensured every transaction alert inspired confidence through verified branding.",
    color: "brand-cyan"
  },
  {
    category: "Travel & Automation",
    title: "TravelMate Reduced Customer Support Call Volume by 65%",
    stats: [
      { label: "Reduction in Support Calls", value: "65%" },
      { label: "Automated Ticket Resolves", value: "80%" },
      { label: "User Engagement ROI", value: "3x" }
    ],
    desc: "TravelMate integrated MyMsg suggested replies for flight status updates and check-ins, allowing customers to resolve common queries without waiting for an agent.",
    color: "brand-violet"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-40 pb-32 min-h-screen bg-brand-bg md:bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-24">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center mb-32"
        >
          <span className="text-xs font-black text-brand-indigo uppercase tracking-[0.4em] mb-6 block">Our Impact</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter">
            Success <span className="gradient-text italic">Stories.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
             Explore how industry leaders are leveraging <span className="text-brand-indigo font-black">MyMsg</span> to redefine business messaging and drive measurable growth.
          </p>
        </motion.div>

        <div className="space-y-32">
          {studies.map((study, index) => (
            <motion.div 
               key={index}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="grid lg:grid-cols-2 gap-16 items-center"
            >
               <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-${study.color}/5 border border-${study.color}/10 mb-8`}>
                     <span className={`text-[10px] font-black text-${study.color} uppercase tracking-widest`}>{study.category}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">{study.title}</h2>
                  <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-10 font-medium">{study.desc}</p>
                  
                  <div className="grid grid-cols-3 gap-6 mb-12 py-8 border-t border-b border-slate-100">
                     {study.stats.map((s, i) => (
                        <div key={i}>
                           <p className={`text-2xl md:text-3xl font-black text-${study.color} mb-1`}>{s.value}</p>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">{s.label}</p>
                        </div>
                     ))}
                  </div>

                  <Link to="/contact" className="btn btn-primary px-10 py-5 !rounded-2xl inline-flex items-center gap-3">
                     Get Similar Results
                     <ArrowRight size={18} />
                  </Link>
               </div>

               <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className={`absolute inset-0 bg-brand-indigo/5 blur-[120px] rounded-full z-0 translate-x-1/4`} />
                  <div className="relative z-10 bg-white p-12 rounded-[4rem] border border-slate-100 shadow-2xl shadow-slate-100/60 overflow-hidden group">
                     {/* Decorative background logo icon */}
                     <div className="absolute -top-10 -right-10 w-48 h-48 bg-slate-50 rounded-full group-hover:scale-110 transition-transform duration-700" />
                     <div className="relative z-20">
                        <div className={`w-16 h-16 rounded-2xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo mb-8 group-hover:scale-110 transition-transform`}>
                           {index === 0 && <TrendingUp size={32} />}
                           {index === 1 && <Target size={32} />}
                           {index === 2 && <Users size={32} />}
                        </div>
                        <h4 className="text-2xl font-black text-slate-900 mb-6">Key Insights</h4>
                        <div className="space-y-6">
                           <div className="flex gap-4">
                              <ShieldCheck className="text-brand-indigo flex-shrink-0" size={24} />
                              <p className="text-sm font-medium text-slate-500 leading-relaxed italic">"Verified messaging solved our deliverability issues and built instant customer trust."</p>
                           </div>
                           <div className="flex gap-4">
                              <Zap className="text-brand-indigo flex-shrink-0" size={24} />
                              <p className="text-sm font-medium text-slate-500 leading-relaxed italic">"Suggested actions and carousels made the interaction feel more like an app than a text."</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>

        {/* FINAL CTA */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mt-40 bg-[#1a2b4b] rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-brand-indigo/20 blur-[140px] rounded-full" />
           <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">Ready to be our next <br /> <span className="italic text-brand-cyan">Success Story?</span></h2>
              <p className="text-brand-indigo-100/70 text-lg md:text-xl font-medium mb-12 leading-relaxed">Join hundreds of brands who elevated their conversion rates using MyMsg infrastructure.</p>
              <Link to="/contact" className="btn bg-white text-[#1a2b4b] hover:bg-slate-50 px-12 py-5 !rounded-2xl text-xs font-black uppercase tracking-widest shadow-2xl">Start Your Journey Now</Link>
           </div>
        </motion.div>
      </div>
    </div>
  );
}
