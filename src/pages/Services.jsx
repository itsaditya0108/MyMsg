import { motion } from "framer-motion";
import { CheckCircle2, Layout, Zap, Users, ArrowRight, Server, Search } from "lucide-react";

export default function Services() {
  const servicesList = [
    { 
        icon: <CheckCircle2 className="w-8 h-8 text-brand-indigo" />,
        title: "RCS Business Messaging", 
        desc: "Transform standard texting into a rich, app-like experience with verified brand logos and interactive features." 
    },
    { 
        icon: <Layout className="w-8 h-8 text-brand-cyan" />,
        title: "WhatsApp Business API", 
        desc: "Reach billions of users worldwide with secure, end-to-end encrypted messaging and rich media support." 
    },
    { 
        icon: <Zap className="w-8 h-8 text-brand-violet" />,
        title: "Verified SMS & OTP", 
        desc: "Ensure deliverability and trust for critical alerts and logins with our globally verified SMS infrastructure." 
    },
    { 
        icon: <Users className="w-8 h-8 text-brand-indigo" />,
        title: "Multi-Channel Solutions", 
        desc: "Consolidate your messaging across RCS, WhatsApp, and SMS into a single, cohesive brand strategy." 
    },
    { 
        icon: <Server className="w-8 h-8 text-brand-cyan" />,
        title: "Enterprise Messaging API", 
        desc: "Highly scalable, low-latency APIs designed for high-volume enterprise traffic with 99.99% uptime." 
    },
    { 
        icon: <ArrowRight className="w-8 h-8 text-brand-violet" />,
        title: "Campaign Management", 
        desc: "Build and deploy complex messaging flows with ease using our intuitive campaign management dashboard." 
    }
  ];

  const steps = [
    { icon: <Search />, title: "Strategy", desc: "We analyze your customer journey to identify the best RCS touchpoints." },
    { icon: <CheckCircle2 />, title: "Verification", desc: "Our team handles the end-to-end RBM verification with global carriers." },
    { icon: <Server />, title: "Integration", desc: "Seamlessly connect our API with your existing marketing stack." },
    { icon: <Zap />, title: "Launch", desc: "Deploy your campaign and watch engagement metrics soar in real-time." }
  ];



  return (
    <div className="pt-24 pb-24 min-h-screen relative bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* HERO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 pt-16"
        >
          <span className="text-xs font-black text-brand-indigo uppercase tracking-[0.4em] mb-6 block">Our Solutions</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">
            Next-Gen <span className="gradient-text italic">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Everything you need to master the future of business messaging and deliver premium experiences.
          </p>
        </motion.div>

        {/* CORE SERVICES GRID */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-32">
          {servicesList.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 hover:bg-white hover:border-brand-indigo/20 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 group"
            >
              <div className="mb-8 w-16 h-16 rounded-[1.5rem] bg-white border border-slate-100 flex items-center justify-center group-hover:bg-brand-indigo group-hover:text-white transition-all duration-500 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-brand-indigo transition-colors">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-lg mb-8 font-medium">{service.desc}</p>

              <button className="text-[11px] font-black uppercase tracking-widest text-brand-indigo flex items-center gap-2">
                Learn More <div className="w-8 h-[2px] bg-brand-indigo/30 group-hover:w-12 transition-all" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* HOW IT WORKS */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">How It Works</h2>
            <div className="h-1.5 w-24 bg-brand-indigo mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-slate-100 rounded-[2rem] flex items-center justify-center text-brand-indigo mx-auto mb-8 group-hover:bg-brand-indigo group-hover:text-white transition-all duration-500 text-2xl">
                  {step.icon}
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{step.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT SUPPORT CTA */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative bg-brand-indigo rounded-[4rem] p-16 text-center overflow-hidden group shadow-2xl shadow-brand-indigo/30"
        >
          {/* Background Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl group-hover:bg-white/10 transition-colors" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-cyan/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl group-hover:bg-brand-cyan/30 transition-colors" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
              Ready to <span className="italic text-yellow-300">Scale</span> Your Business?
            </h2>
            <p className="text-brand-indigo-100/80 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
              Our experts are ready to build a custom messaging strategy tailored to your brand's unique needs. Skip the tiers and get a solution that actually works.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="btn bg-white text-brand-indigo hover:bg-slate-50 !px-12 !py-5 !rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-black/10 transition-all hover:-translate-y-1"
              >
                Contact Support Team
              </Link>
              <Link
                to="/about"
                className="text-white font-black text-xs uppercase tracking-widest hover:text-yellow-300 transition-colors flex items-center gap-2 group/btn"
              >
                Learn Our Process
                <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
