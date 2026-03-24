import { Link } from "react-router-dom";
import { MessageSquare, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-brand-indigo rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-brand-indigo/20 opacity-20" />
                <div className="relative w-8 h-8 bg-gradient-to-br from-brand-indigo via-brand-violet to-brand-cyan rounded-lg flex items-center justify-center text-white shadow-md">
                  <MessageSquare size={18} strokeWidth={3} />
                </div>
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900">
                My<span className="gradient-text">Msg</span>
              </span>
            </Link>
            <p className="text-slate-500 font-medium max-w-sm mb-8 leading-relaxed text-sm">
              Empowering global brands with the next generation of verified, interactive messaging solutions.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Linkedin', 'Github'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-brand-indigo hover:border-brand-indigo/20 hover:shadow-lg transition-all"
                  title={social}
                >
                  {social === 'Twitter' && <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>}
                  {social === 'Linkedin' && <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}
                  {social === 'Github' && <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Services", "About", "FAQ", "Contact"].map(item => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-slate-500 hover:text-brand-indigo font-bold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8">Newsletter</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-indigo w-full" />
              <button className="bg-brand-indigo p-3 text-white rounded-xl hover:bg-brand-indigo/90 transition-colors">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-medium">© 2026 MyMsg. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-slate-400 hover:text-slate-600 text-sm font-bold">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-400 hover:text-slate-600 text-sm font-bold">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
