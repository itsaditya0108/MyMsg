import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Globe } from "lucide-react";

export default function About() {
  const values = [
    { icon: <Target />, title: "Precision", desc: "Every message is optimized for maximum impact and conversion." },
    { icon: <Eye />, title: "Transparency", desc: "Clear reporting and analytics for every campaign you run." },
    { icon: <ShieldCheck />, title: "Security", desc: "Enterprise-grade encryption and carrier-level verification." },
    { icon: <Globe />, title: "Reach", desc: "Omnichannel delivery to billions of devices worldwide." }
  ];

  const stats = [
    { label: "Messages Delivered", value: "500M+", color: "text-brand-indigo" },
    { label: "Verified Brands", value: "1,200+", color: "text-brand-cyan" },
    { label: "Countries Reached", value: "85+", color: "text-brand-violet" },
    { label: "Uptime SLA", value: "99.99%", color: "text-brand-indigo" }
  ];

  const journey = [
    { year: "2021", title: "The Inception", desc: "MyMsg was founded with a vision to humanize mobile messaging." },
    { year: "2022", title: "Carrier Grade", desc: "Achieved direct connectivity with 50+ global tier-1 carriers." },
    { year: "2023", title: "RCS Pioneer", desc: "Launched one of the first verified RBM platforms for enterprise." },
    { year: "2024", title: "Global Scale", desc: "Expanding to reach 1 billion+ devices across all continents." }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen relative bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 pt-16"
        >
          <span className="text-xs font-black text-brand-indigo uppercase tracking-[0.4em] mb-6 block">Our Mission</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">
            Pioneering <span className="gradient-text italic">Trust.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
            At MyMsg, we believe every business conversation should be meaningful, secure, and beautiful.
          </p>
        </motion.div>

        {/* VISION & MISSION */}
        <div className="grid lg:grid-cols-2 gap-12 mb-32">
            <motion.div 
               whileInView={{ opacity: 1, x: 0 }}
               initial={{ opacity: 0, x: -30 }}
               viewport={{ once: true }}
               className="bg-slate-50 p-12 md:p-16 rounded-[3.5rem] border border-slate-100"
            >
                <div className="w-14 h-14 bg-brand-indigo text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-brand-indigo/20">
                    <Eye size={28} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight">Our Vision</h2>
                <p className="text-slate-500 leading-relaxed text-lg font-medium">
                    To define the new standard of global business communications where trust is native and every message delivers unparalleled value.
                </p>
            </motion.div>
            <motion.div 
               whileInView={{ opacity: 1, x: 0 }}
               initial={{ opacity: 0, x: 30 }}
               viewport={{ once: true }}
               className="bg-brand-indigo p-12 md:p-16 rounded-[3.5rem] text-white"
            >
                <div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md border border-white/10">
                    <Target size={28} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tight text-white">Our Goal</h2>
                <p className="text-white/80 leading-relaxed text-lg font-medium">
                    We aim to empower 100,000+ brands by 2028 with verified, interactive RCS channels that bridge the gap between businesses and customers.
                </p>
            </motion.div>
        </div>

        {/* STATS SECTION */}
        <div className="mb-32">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((s, i) => (
                    <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="text-center p-8 bg-white border border-slate-100 rounded-[2.5rem] hover:shadow-xl hover:shadow-slate-100 transition-all duration-500"
                    >
                        <h4 className={`text-3xl md:text-4xl font-black mb-2 tracking-tighter ${s.color}`}>{s.value}</h4>
                        <p className="text-slate-500 text-xs font-black uppercase tracking-widest">{s.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* JOURNEY/TIMELINE */}
        <div>
            <div className="text-center mb-20">
                <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Our Journey</h2>
                <p className="text-slate-500 font-medium">Evolution of the world's most trusted RCS platform.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 relative">
                {/* Horizontal line for desktop */}
                <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-px bg-slate-100 -z-10" />
                
                {stats.map((_, i) => journey[i] && (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-50/50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500 text-center md:text-left"
                    >
                        <span className="text-brand-indigo text-sm font-black mb-4 block">{journey[i].year}</span>
                        <h4 className="text-xl font-black text-slate-900 mb-4">{journey[i].title}</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{journey[i].desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
