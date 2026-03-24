import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 pb-32 min-h-screen relative bg-brand-bg md:bg-white overflow-hidden">
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
                  <p className="text-xl font-black text-slate-900">hello@mymsg.ltd</p>
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

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-violet/10 flex items-center justify-center text-brand-violet">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Location</p>
                  <p className="text-xl font-black text-slate-900">No. 42, Lalbagh Road, 9, Shanthi Road, Bengaluru, Karnataka 560027</p>
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
              className="bg-slate-50 p-12 lg:p-16 rounded-[4rem] border border-slate-100 space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-brand-indigo transition-all font-bold placeholder:text-slate-300" placeholder="John Smith" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-brand-indigo transition-all font-bold placeholder:text-slate-300" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Service Required</label>
                <select className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-brand-indigo transition-all font-bold appearance-none cursor-pointer">
                  <option className="font-bold">RCS Business Messaging</option>
                  <option className="font-bold">WhatsApp Business API</option>
                  <option className="font-bold">Verified SMS & OTP</option>
                  <option className="font-bold">Campaign Management</option>
                  <option className="font-bold">Enterprise API</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                <textarea rows="4" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-brand-indigo transition-all font-bold resize-none placeholder:text-slate-300" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full py-5 text-sm uppercase tracking-[0.2em] group shadow-xl shadow-brand-indigo/10">
                Send Inquiry
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}
