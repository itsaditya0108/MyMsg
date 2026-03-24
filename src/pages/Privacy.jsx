import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="pt-48 pb-32 min-h-screen relative bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Privacy Policy</h1>
          <p className="text-slate-500 font-medium tracking-wide">Last Updated: March 2026</p>
        </motion.div>

        <div className="space-y-12 text-slate-600 leading-relaxed font-medium text-lg">
          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-widest text-sm">1. Introduction</h2>
            <p>At MyMsg, we take your privacy seriously. This policy outlines how we collect, use, and protect your data when you use our RCS messaging services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-widest text-sm">2. Information Collection</h2>
            <p>We collect information you provide directly to us, such as when you create an account, request a demo, or contact support. This may include your name, email, and business details.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-widest text-sm">3. Messaging Data</h2>
            <p>As a messaging provider, we process messages sent through our platform. All data is handled in accordance with global security standards and is only used to facilitate delivery and provide analytics to the sender.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-widest text-sm">4. Data Security</h2>
            <p>We implement industry-standard encryption and security protocols to ensure that your data remains safe from unauthorized access or disclosure.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
