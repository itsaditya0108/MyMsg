import { motion } from "framer-motion";
import PhoneMockup from "../components/PhoneMockup";
import { ArrowRight, Play, Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">

      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-brand-indigo/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] bg-brand-cyan/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">

        {/* ===== LEFT CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-brand-indigo/5 border border-brand-indigo/10 mb-6">
            <div className="w-5 h-5 bg-brand-indigo rounded-full flex items-center justify-center text-white">
              <Check size={12} strokeWidth={4} />
            </div>
            <span className="text-[11px] font-black text-brand-indigo uppercase tracking-[0.2em]">
              Verified RCS Solution
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Message Your Customers <br />
            <span className="gradient-text italic">The Modern Way.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-slate-500 mb-10 max-w-xl">
            Go beyond SMS. Deliver{" "}
            <strong className="text-slate-900">
              rich, interactive experiences
            </strong>{" "}
            that drive 3x more conversions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="btn btn-primary !rounded-xl px-8 flex items-center justify-center"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            <Link
              to="/about"
              className="btn btn-secondary !rounded-xl px-8 flex items-center justify-center"
            >
              <Play className="w-4 h-4 mr-2 text-brand-indigo" />
              Watch Demo
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 30}`}
                  className="w-10 h-10 rounded-full border-2 border-white shadow"
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Trusted by brands
              </p>
              <p className="text-xs text-slate-400">★★★★★ 5.0</p>
            </div>
          </div>
        </motion.div>

        {/* ===== RIGHT VISUAL ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center mt-12 lg:mt-0"
        >
          {/* Glow */}
          <div className="absolute w-[320px] h-[320px] bg-brand-indigo/10 blur-[120px] rounded-full z-0" />

          {/* Phone Wrapper */}
          <div className="relative z-10 overflow-visible scale-[0.9] sm:scale-100">
            <PhoneMockup />

            {/* VERIFIED CARD */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute 
                         top-6 left-1/2 -translate-x-1/2
                         sm:top-2 sm:left-auto sm:right-4 sm:translate-x-0
                         
                         bg-white/95 backdrop-blur-xl
                         px-4 py-3 rounded-xl
                         shadow-xl border border-slate-100
                         ring-1 ring-black/5
                         
                         flex items-center gap-3
                         z-50"
            >
              <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center text-green-600 font-bold">
                ✓
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">
                  Verified
                </p>
                <p className="text-xs font-semibold text-slate-900">
                  Business Approved
                </p>
              </div>
            </motion.div>

            {/* ROI CARD */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute 
                         -bottom-6 left-2
                         sm:-bottom-8 sm:-left-6
                         
                         bg-white/95 backdrop-blur-xl
                         px-4 py-3 rounded-xl
                         shadow-xl border border-slate-100
                         ring-1 ring-black/5
                         
                         flex items-center gap-3
                         z-50"
            >
              <div className="w-9 h-9 rounded-lg bg-brand-indigo text-white flex items-center justify-center font-bold">
                3x
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase">
                  ROI
                </p>
                <p className="text-xs font-semibold text-slate-900">
                  Higher Conversion
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}