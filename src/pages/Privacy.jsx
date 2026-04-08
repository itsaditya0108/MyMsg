import { motion } from "framer-motion";

export default function Privacy() {
  const lastUpdated = "April 8, 2026";
  
  const sections = [
    {
      title: "1. Introduction",
      content: "At MyMsg (a brand of My Message Ltd.), we value your privacy. This policy explains how we handle your information when you use our messaging services, including RCS, WhatsApp, and SMS."
    },
    {
      title: "2. Information We Collect",
      content: "We collect basic information needed to provide our services, such as your name, email address, and phone number when you contact us or request a service."
    },
    {
      title: "3. Messaging Data",
      content: "We process messages sent through our platform to ensure delivery. We treat all message content as confidential and only retain data as long as necessary for service fulfillment and legal compliance."
    },
    {
      title: "4. How We Use Your Data",
      content: "Your data is used to provide support, deliver messages, and improve our services. By submitting your contact details, you agree that we may contact you via phone, SMS, or WhatsApp regarding your inquiries."
    },
    {
      title: "5. Data Security",
      content: "We use industry-standard encryption and security protocols to protect your data from unauthorized access or disclosure."
    },
    {
      title: "6. Your Rights",
      content: "You have the right to access, update, or request the deletion of your personal information at any time. To do so, please contact our support team."
    },
    {
      title: "7. Contact Us",
      content: "If you have any questions about this policy, please email us at support@mymsg.ltd."
    }
  ];

  return (
    <div className="pt-56 pb-32 min-h-screen bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-16 border-b border-slate-100 pb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
            Privacy Policy
          </h1>
          <p className="text-slate-500 font-medium tracking-wide">
            Last Updated: {lastUpdated}
          </p>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                {section.title}
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                {section.content}
              </p>
            </motion.section>
          ))}
        </div>
        
        <div className="mt-20 pt-12 border-t border-slate-100">
          <p className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} My Message Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
