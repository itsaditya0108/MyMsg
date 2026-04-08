import React from "react";
import Hero from "../sections/Hero";
import Features from "../sections/Features";
import HowItWorks from "../sections/HowItWorks";
import UseCases from "../sections/UseCases";
import WhyRCS from "../sections/WhyRCS";
import LivePreview from "../sections/LivePreview";
import CaseStudiesSection from "../sections/CaseStudiesSection";
import FAQ from "../sections/FAQ";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <WhyRCS />
      <LivePreview />
      <CaseStudiesSection />
      <FAQ />
      
      {/* Final CTA */}
      <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
        {/* Decorative backdrop glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-indigo/5 blur-[140px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 xl:px-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative bg-[#1a2b4b] p-12 md:p-24 rounded-[4rem] text-center shadow-3xl shadow-slate-200 overflow-hidden text-white"
          >
            {/* Inner glow effect */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-indigo/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-cyan/20 blur-3xl rounded-full" />

            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
              Ready to <span className="italic text-brand-cyan">Scale</span> Up?
            </h2>
            <p className="text-brand-indigo-100/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Join the future of business messaging. Start your <span className="text-white font-bold">MyMsg</span> journey today and transform how you connect with your customers forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/services" className="btn bg-white text-[#1a2b4b] hover:bg-slate-50 px-12 py-5 !rounded-2xl shadow-xl shadow-black/10 font-black uppercase text-xs tracking-widest transition-all">
                Get Started with MyMsg
              </Link>
              <Link to="/contact" className="btn border border-white/20 text-white px-12 py-5 !rounded-2xl hover:bg-white/10 transition-all font-black uppercase text-xs tracking-widest backdrop-blur-sm">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
