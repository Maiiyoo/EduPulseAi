import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Brain, Activity, ShieldAlert, ChevronRight, Menu, X, ArrowRight, Star, Users, CheckCircle2, TrendingDown, Clock, AlertTriangle, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

interface LandingPageProps {
  onGetStarted: () => void;
}

const Navbar = ({ onGetStarted }: { onGetStarted: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-slate-950/80 backdrop-blur-2xl border-b border-white/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-brand-primary rounded-[12px] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <GraduationCap size={24} />
          </div>
          <span className="logo-text text-2xl tracking-tighter text-white">
            EduPulseAI
          </span>
        </div>
 
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" onClick={(e) => scrollToSection(e as any, 'features')} className="text-[10px] font-black text-slate-400 hover:text-white uppercase tracking-widest transition-colors">Strategic Features</a>
          <a href="#solutions" onClick={(e) => scrollToSection(e as any, 'solutions')} className="text-[10px] font-black text-slate-400 hover:text-white uppercase tracking-widest transition-colors">Neural Solutions</a>
          <a href="#about" onClick={(e) => scrollToSection(e as any, 'about')} className="text-[10px] font-black text-slate-400 hover:text-white uppercase tracking-widest transition-colors">Core Intelligence</a>
          <button 
            onClick={onGetStarted}
            className="px-8 py-3 bg-white text-slate-900 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all shadow-2xl active:scale-95"
          >
            Launch Command Center
          </button>
        </div>
 
        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
 
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass border-b p-6 flex flex-col gap-4 md:hidden"
        >
          <a href="#features" className="text-lg font-medium text-slate-700" onClick={(e) => scrollToSection(e, 'features')}>Fitur</a>
          <a href="#solutions" className="text-lg font-medium text-slate-700" onClick={(e) => scrollToSection(e, 'solutions')}>Solusi</a>
          <a href="#about" className="text-lg font-medium text-slate-700" onClick={(e) => scrollToSection(e, 'about')}>Tentang</a>
          <button 
            onClick={() => { onGetStarted(); setIsMobileMenuOpen(false); }}
            className="w-full py-3 bg-brand-primary text-white rounded-xl font-bold mt-2"
          >
            Buka Dashboard
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative z-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-[10px] font-black text-brand-primary mb-6 uppercase tracking-[0.2em] backdrop-blur-sm">
            <Sparkles size={12} className="text-brand-primary animate-pulse" />
            AI-Powered Education Ecosystem
          </div>
          <h1 className="text-6xl lg:text-8xl font-display font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
            Future of <br />
            <span className="text-brand-primary text-glow">School AI.</span>
          </h1>
          <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
            Transforming education through neural-link student monitoring. Detect risks, analyze trends, and secure futures with enterprise-grade predictive intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onGetStarted}
              className="px-8 py-4 bg-slate-900 text-white rounded-[24px] font-black text-xs uppercase tracking-[0.2em] hover:bg-brand-primary transition-all shadow-2xl shadow-blue-500/25 flex items-center justify-center gap-3 group active:scale-[0.95] glow-blue"
            >
              Enter Dashboard
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/50 backdrop-blur-md text-slate-900 border border-slate-200 rounded-[24px] font-black text-xs uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-2 active:scale-[0.95]">
              Core Intelligence
            </button>
          </div>
          
          <div className="mt-16 flex items-center gap-8 border-t border-slate-200/50 pt-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5, zIndex: 10 }}
                  className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-xl"
                >
                  <img src={`https://i.pravatar.cc/150?u=edu${i}`} alt="user" referrerPolicy="no-referrer" />
                </motion.div>
              ))}
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Global Adoption</p>
              <p className="text-sm font-black text-slate-900 tracking-tight">Active in 850+ Institutions</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex items-center justify-center pt-20 lg:pt-0"
        >
          {/* Animated Brain Visual */}
          <div className="relative w-full aspect-square max-w-lg">
             <motion.div 
               animate={{ 
                 rotate: 360,
                 scale: [1, 1.05, 1]
               }}
               transition={{ 
                 rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                 scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
               }}
               className="absolute inset-0 rounded-full border-[1px] border-dashed border-blue-200 opacity-40"
             ></motion.div>
             <motion.div 
               animate={{ 
                 rotate: -360,
                 scale: [1.1, 1, 1.1]
               }}
               transition={{ 
                 rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                 scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
               }}
               className="absolute inset-4 rounded-full border-[1px] border-dashed border-indigo-200 opacity-60"
             ></motion.div>
             
             <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-64 h-64 bg-brand-primary rounded-full blur-[80px] opacity-20"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>
                <div className="relative z-10 floating">
                   <div className="w-40 h-40 bg-white rounded-[40px] shadow-2xl flex items-center justify-center p-8 premium-border">
                      <Brain size={80} className="text-brand-primary" />
                   </div>
                   {/* Data Particles */}
                   {[...Array(6)].map((_, i) => (
                     <motion.div
                       key={i}
                       className="absolute w-2 h-2 bg-brand-primary rounded-full"
                       animate={{
                         x: [0, (i % 2 === 0 ? 1 : -1) * (100 + Math.random() * 50)],
                         y: [0, (i % 3 === 0 ? 1 : -1) * (100 + Math.random() * 50)],
                         opacity: [0, 1, 0],
                         scale: [0, 1, 0]
                       }}
                       transition={{
                         duration: 2 + Math.random() * 2,
                         repeat: Infinity,
                         delay: i * 0.5
                       }}
                     />
                   ))}
                </div>
             </div>

             {/* UI Widgets Floating */}
             <motion.div 
               animate={{ x: [0, 10, 0], y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-10 right-0 glass-dark p-4 rounded-2xl shadow-2xl border-white/10"
             >
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Activity size={16} />
                   </div>
                   <div>
                      <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Accuracy</p>
                      <p className="text-sm font-black text-white">98.4%</p>
                   </div>
                </div>
             </motion.div>

             <motion.div 
               animate={{ x: [0, -10, 0], y: [0, 20, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -bottom-10 left-0 glass p-5 rounded-2xl shadow-2xl border-white/40"
             >
                <div className="flex items-center gap-4">
                   <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 border border-white"></div>
                      <div className="w-6 h-6 rounded-full bg-slate-100 border border-white"></div>
                   </div>
                   <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Realtime Active</p>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Hero Particles Surface */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
         <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
         <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping duration-1000"></div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="bento-card group flex flex-col items-start gap-4"
  >
    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-500">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="text-lg font-bold mb-2 text-slate-900">{title}</h3>
      <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  return (
    <div className="min-h-screen">
      <Navbar onGetStarted={onGetStarted} />
      <Hero onGetStarted={onGetStarted} />
      
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Core Ecosystem</h2>
            <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-6">Analisis AI Tercanggih Untuk Pendidikan</h2>
            <p className="text-slate-500">Platform terintegrasi yang menggabungkan psikologi pendidikan dengan machine learning untuk hasil yang akurat.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Brain}
              title="Predictive AI"
              desc="Memprediksi kemungkinan penurunan nilai dan risiko dropout sebelum terjadi menggunakan data historis."
              delay={0.1}
            />
            <FeatureCard 
              icon={TrendingDown}
              title="Risk Detection"
              desc="Mendeteksi perubahan perilaku siswa secara real-time dari absensi dan aktivitas akademik."
              delay={0.2}
            />
             <FeatureCard 
              icon={ShieldAlert}
              title="Smart Alerts"
              desc="Notifikasi instan untuk guru BK dan wali kelas jika terdeteksi anomali pada siswa tertentu."
              delay={0.3}
            />
             <FeatureCard 
              icon={Clock}
              title="Time Analytics"
              desc="Menganalisis tren kedisiplinan dan ketepatan waktu siswa secara komprehensif."
              delay={0.4}
            />
             <FeatureCard 
              icon={Activity}
              title="Actionable Insights"
              desc="Rekomendasi tindakan yang dipersonalisasi untuk setiap siswa oleh sistem AI."
              delay={0.5}
            />
             <FeatureCard 
              icon={Users}
              title="Class Overview"
              desc="Melihat performa kelas secara keseluruhan melalui dashboard yang intuitif."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      <section id="solutions" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img 
                   src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                   alt="Students" 
                   className="rounded-3xl shadow-2xl"
                   referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 -right-8 glass p-6 rounded-3xl shadow-2xl max-w-xs">
                   <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                         <CheckCircle2 />
                      </div>
                      <p className="font-bold text-slate-900">Akurasi 98%</p>
                   </div>
                   <p className="text-xs text-slate-500">Sistem kami teruji secara klinis untuk membantu sekolah menurunkan angka dropout hingga 40%.</p>
                </div>
              </div>
              <div>
                <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Solution Driven</h2>
                <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-8 leading-tight">Membangun Masa Depan <br /> Tanpa Ada Yang Tertinggal.</h2>
                <div className="space-y-6">
                   {[
                     "Analisis otomatis data absensi bulanan",
                     "Evaluasi tren akademik lintas mata pelajaran",
                     "Rekomendasi konseling berbasis data",
                     "Laporan otomatis untuk Kepala Sekolah"
                   ].map((item, idx) => (
                     <div key={idx} className="flex items-start gap-4">
                        <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-brand-primary flex-shrink-0">
                           <CheckCircle2 size={16} />
                        </div>
                        <p className="text-slate-600 font-medium">{item}</p>
                     </div>
                   ))}
                </div>
                <button 
                  onClick={onGetStarted}
                  className="mt-10 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center gap-2"
                >
                  Coba Dashboard Sekarang
                  <ArrowRight size={20} />
                </button>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-brand-primary">
         <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-5xl font-display font-extrabold mb-8 italic">Ready to transform your school?</h2>
            <p className="text-xl text-blue-100 mb-12">Bergabunglah dengan ratusan sekolah progresif yang sudah menggunakan EduPulse AI.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button className="px-10 py-5 bg-white text-brand-primary rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all active:scale-[0.98]">Daftar Sekolah</button>
               <button className="px-10 py-5 bg-blue-600/30 text-white border border-white/20 rounded-2xl font-bold text-xl hover:bg-blue-600/50 transition-all">Hubungi Tim Sales</button>
            </div>
         </div>
      </section>

      <footer id="about" className="py-12 bg-white border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white">
                <GraduationCap size={18} />
              </div>
              <span className="text-lg font-display font-bold tracking-tight text-slate-900">
                EduPulse<span className="text-brand-primary">AI</span>
              </span>
            </div>
            <p className="text-sm text-slate-400">© 2026 EduPulse AI. All rights reserved. Made for EdTech Excellence.</p>
            <div className="flex items-center gap-8">
               <a href="#" className="text-sm text-slate-500 hover:text-brand-primary">Privacy</a>
               <a href="#" className="text-sm text-slate-500 hover:text-brand-primary">Terms</a>
               <a href="#" className="text-sm text-slate-500 hover:text-brand-primary">Contact</a>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default LandingPage;
