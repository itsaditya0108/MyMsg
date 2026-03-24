import FAQ from "../sections/FAQ";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function FAQPage() {
  return (
    <div className="pt-24 pb-24 min-h-screen relative bg-brand-bg md:bg-white overflow-hidden text-center">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-16 pt-16"
        >
          <span className="text-xs font-black text-brand-indigo uppercase tracking-[0.4em] mb-6 block">Help Center</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">
            Help & <span className="gradient-text italic">Support.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Find technical and business answers to common RCS questions.
          </p>
        </motion.div>
        
        <FAQ />
        
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 bg-slate-50 p-16 rounded-[4rem] text-center max-w-4xl mx-auto border border-slate-100 shadow-sm"
        >
          <div className="w-16 h-16 bg-brand-indigo/10 rounded-2xl flex items-center justify-center text-brand-indigo mx-auto mb-8">
              <Mail size={32} />
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Need dedicated help?</h3>
          <p className="text-slate-500 mb-10 max-w-xl mx-auto font-medium">Our global team of RCS experts is here to assist you 24 hours a day, 7 days a week.</p>
          <button className="btn btn-primary px-10">Get In Touch Now</button>
        </motion.div>
      </div>
    </div>
  );
}
