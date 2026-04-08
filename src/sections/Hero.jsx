import { motion } from "framer-motion";
import PhoneMockup from "../components/PhoneMockup";
import { ArrowRight, Play, Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">

      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-brand-indigo/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] bg-brand-cyan/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-24 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center overflow-visible">

        {/* ===== LEFT CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-brand-indigo/5 border border-brand-indigo/10 mb-8 mx-auto lg:mx-0">
            <div className="w-5 h-5 bg-brand-indigo rounded-full flex items-center justify-center text-white">
              <Check size={12} strokeWidth={4} />
            </div>
            <span className="text-[10px] font-black text-brand-indigo uppercase tracking-[0.3em]">
              Verified MyMsg Solution
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-8 leading-[1.1] tracking-tighter">
            Elevate Your Brand with <br />
            <span className="gradient-text italic">MyMsg.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Revolutionize your customer engagement. Deliver{" "}
            <strong className="text-slate-900">
              immersive, branded experiences
            </strong>{" "}
             using the industry-leading <span className="text-brand-indigo font-bold">MyMsg</span> platform.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/services"
              className="btn btn-primary px-10 py-5 rounded-2xl flex items-center justify-center transform hover:scale-105 transition-all shadow-xl shadow-brand-indigo/25"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            <Link
              to="/about"
              className="btn bg-white border border-slate-200 text-slate-700 px-10 py-5 rounded-2xl flex items-center justify-center hover:bg-slate-50 transition-all font-black"
            >
              <Play className="w-4 h-4 mr-2 text-brand-indigo fill-brand-indigo" />
              Watch Demo
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 40}`}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white shadow-xl"
                />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <p className="text-sm font-black text-slate-900 uppercase tracking-widest leading-none mb-1">
                Trusted by Global Brands
              </p>
              <div className="flex items-center gap-1 justify-center sm:justify-start">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="text-orange-400 text-sm">★</span>
                ))}
                <span className="text-xs text-slate-400 font-bold ml-2">5.0 / 5.0</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== RIGHT VISUAL ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center mt-16 lg:mt-0"
        >
          {/* Subtle decorative glow */}
          <div className="absolute w-[400px] h-[400px] bg-brand-indigo/10 blur-[120px] rounded-full z-0 animate-pulse" />

          {/* Phone Wrapper */}
          <div className="relative z-10 overflow-visible scale-[0.75] sm:scale-85 md:scale-95 lg:scale-100 xl:scale-110">
            <PhoneMockup />
          </div>
        </motion.div>

      </div>
    </section>
  );
}