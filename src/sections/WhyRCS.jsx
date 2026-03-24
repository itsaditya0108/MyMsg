import { motion } from "framer-motion";
import { CheckCircle2, Zap, BarChart, ArrowRight } from "lucide-react";

export default function WhyRCS() {
  return (
    <section className="py-24 lg:py-32 relative bg-brand-bg overflow-hidden">
      <div className="container mx-auto px-8 lg:px-24 xl:px-32 grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-[11px] font-black text-brand-indigo uppercase tracking-[0.4em] mb-6 block">Proof in Numbers</div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 leading-[1.2] tracking-tighter">
            Build Trust with <br />
            <span className="gradient-text italic">Verified RCS.</span>
          </h2>
          <p className="text-lg text-slate-500 mb-12 leading-relaxed max-w-xl font-medium">
            Join the elite 1% of brands that utilize verified messaging to cut through the noise and build genuine connections.
          </p>

          <div className="space-y-8">
            {[
              { icon: <CheckCircle2 className="w-5 h-5 text-green-500" />, title: "98% Reach Stability", desc: "Reliable delivery to 100% of RCS-enabled Android and iOS devices." },
              { icon: <Zap className="w-5 h-5 text-brand-indigo" />, title: "Instant Conversion", desc: "Direct action buttons drive immediate results without app switching." },
              { icon: <BarChart className="w-5 h-5 text-brand-cyan" />, title: "Granular Analytics", desc: "Track every open, click, and interaction in real-time." }
            ].map((item, i) => (
              <div key={i} className="flex gap-5 group items-start">
                <div className="mt-1 w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-black text-slate-900 mb-1 group-hover:text-brand-indigo transition-colors">{item.title}</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="btn btn-secondary mt-12 group">
              View Case Studies
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* RIGHT STATS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 bg-brand-indigo/5 blur-[120px] rounded-full -z-10" />
          
          <div className="bg-white p-16 rounded-[4rem] border border-slate-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden group">
            <div className="relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                    <span className="text-[100px] font-black gradient-text leading-none italic tracking-tighter">3x</span>
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mt-4 mb-16 underline decoration-brand-cyan decoration-2 underline-offset-8">Engagement ROI</p>
                </motion.div>

                <div className="grid grid-cols-2 gap-12 pt-12 border-t border-slate-100">
                    <div className="text-left">
                        <p className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">42%</p>
                        <p className="text-[10px] text-brand-indigo font-black uppercase tracking-widest">Active Click rate</p>
                    </div>
                    <div className="text-left">
                        <p className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">8.5m</p>
                        <p className="text-[10px] text-brand-cyan font-black uppercase tracking-widest">Monthly Users</p>
                    </div>
                </div>
            </div>
            
            {/* Hover Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-indigo/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
