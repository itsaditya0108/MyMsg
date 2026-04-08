import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-40 pb-32 min-h-screen relative bg-brand-bg md:bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="text-xs font-black text-brand-indigo uppercase tracking-[0.4em] mb-6 block">Contact Us</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">
            Get in <span className="gradient-text italic">Touch.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Ready to elevate your messaging strategy? Our team is here to help you get verified and get results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* INFO */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Inquiries</p>
                  <p className="text-xl font-black text-slate-900">support@mymsg.ltd</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Support</p>
                  <p className="text-xl font-black text-slate-900">support@mymsg.ltd</p>
                </div>
              </div>
            </motion.div>


          </div>

          {/* FORM */}
          <div className="lg:col-span-7">
            <motion.form
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 lg:p-14 rounded-[3.5rem] shadow-2xl shadow-slate-200/60 border border-slate-50 space-y-6"
            >
              <div className="space-y-5">
                <input
                  type="text"
                  required
                  className="w-full bg-slate-50 border-none rounded-2xl px-8 py-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-indigo/20 transition-all font-medium placeholder:text-slate-400"
                  placeholder="Your name"
                />

                <input
                  type="email"
                  required
                  className="w-full bg-slate-50 border-none rounded-2xl px-8 py-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-indigo/20 transition-all font-medium placeholder:text-slate-400"
                  placeholder="Your email"
                />

                <input
                  type="tel"
                  required
                  className="w-full bg-slate-50 border-none rounded-2xl px-8 py-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-indigo/20 transition-all font-medium placeholder:text-slate-400"
                  placeholder="Your phone number"
                />

                <div className="relative">
                  <select required className="w-full bg-slate-50 border-none rounded-2xl px-8 py-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-indigo/20 transition-all font-medium appearance-none cursor-pointer">
                    <option value="" disabled selected>Service Required</option>
                    <option>RCS Business Messaging</option>
                    <option>WhatsApp Business API</option>
                    <option>Verified SMS & OTP</option>
                    <option>Campaign Management</option>
                    <option>Enterprise API</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <textarea
                  rows="5"
                  required
                  className="w-full bg-slate-50 border-none rounded-2xl px-8 py-5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-indigo/20 transition-all font-medium resize-none placeholder:text-slate-400"
                  placeholder="Your Message"
                ></textarea>

                <div className="flex items-start gap-4 pt-2">
                  <div className="pt-1">
                    <input
                      type="checkbox"
                      id="agreement"
                      className="w-5 h-5 rounded border-slate-200 text-brand-indigo focus:ring-brand-indigo cursor-pointer transition-all"
                    />
                  </div>
                  <label htmlFor="agreement" className="text-sm text-slate-600 leading-relaxed cursor-pointer select-none">
                    Yes, I agree to receive RCS, SMS, Email, WhatsApp etc. from My Message Ltd.
                  </label>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed pl-9">
                  We will use your phone number to contact you via phone, SMS, WhatsApp, or other messaging services.
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#1a2b4b] hover:bg-[#15233d] text-white px-10 py-5 rounded-full font-bold transition-all active:scale-[0.98] shadow-lg shadow-blue-900/20"
                >
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}
