import Hero from "../sections/Hero";
import Features from "../sections/Features";
import WhyRCS from "../sections/WhyRCS";
import FAQ from "../sections/FAQ";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <WhyRCS />
      <FAQ />
      
      {/* Final CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative backdrop glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-indigo/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative bg-white p-12 md:p-20 rounded-[3.5rem] text-center border border-slate-100 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden"
          >
            {/* Inner glow effect */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-indigo/5 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-cyan/5 blur-3xl rounded-full" />

            <h2 className="text-4xl md:text-6xl font-heading font-black text-slate-900 mb-8 leading-tight tracking-tighter">
              Ready to <span className="gradient-text italic">Level Up</span>?
            </h2>
            <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Join the future of business messaging. Start your RCS journey with <span className="text-brand-indigo font-bold">MyMsg</span> and transform how you connect with customers.
            </p>
            <Link to="/services" className="btn btn-primary btn-large !rounded-2xl shadow-xl shadow-brand-indigo/20 inline-flex">
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
