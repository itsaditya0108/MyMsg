import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="pt-48 pb-32 min-h-screen relative bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Terms of Service</h1>
          <p className="text-slate-500 font-medium tracking-wide">Last Updated: March 2026</p>
        </motion.div>

        <div className="space-y-12 text-slate-600 leading-relaxed font-medium text-lg">
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-widest text-sm">1. Agreement to Terms</h2>
            <p>By accessing or using MyMsg services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our platform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-widest text-sm">2. Use of Services</h2>
            <p>You agree to use MyMsg only for lawful purposes and in accordance with all applicable laws and regulations regarding electronic messaging.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-widest text-sm">3. Account Responsibility</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-widest text-sm">4. Limitation of Liability</h2>
            <p>MyMsg shall not be liable for any indirect, incidental, or consequential damages arising out of your use or inability to use our messaging services.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
