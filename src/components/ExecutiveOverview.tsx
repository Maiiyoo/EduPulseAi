import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Globe, 
  BrainCircuit, 
  ArrowLeft,
  Zap,
  Target,
  Sparkles,
  Activity,
  Heart,
  GraduationCap,
  ArrowRight,
  ShieldAlert,
  Cpu,
  Layers,
  Search
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface Props {
  onBack: () => void;
}

const ExecutiveOverview = ({ onBack }: Props) => {
  const impactData = [
    { name: 'Jan', prevented: 12, improvement: 45 },
    { name: 'Feb', prevented: 18, improvement: 52 },
    { name: 'Mar', prevented: 25, improvement: 68 },
    { name: 'Apr', prevented: 32, improvement: 75 },
    { name: 'May', prevented: 45, improvement: 88 },
  ];

  const distributionData = [
    { name: 'Critical', value: 5, color: '#f43f5e' },
    { name: 'Attention', value: 15, color: '#f59e0b' },
    { name: 'Stable', value: 80, color: '#10b981' },
  ];

  return (
    <div className="min-h-screen bg-brand-background text-slate-900 selection:bg-blue-500/10 overflow-x-hidden">
      {/* Cinematic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-blue-600/[0.03] rounded-full blur-[200px]"></div>
        <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-indigo-600/[0.03] rounded-full blur-[150px]"></div>
      </div>

      <nav className="h-24 bg-white/70 backdrop-blur-3xl border-b border-slate-100 px-10 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <button 
            onClick={onBack}
            className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all active:scale-95 group shadow-sm"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <div>
            <h1 className="text-2xl font-display font-black text-slate-900 tracking-tighter leading-none mb-1 uppercase italic">Executive Control Matrix</h1>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Institutional Security Protocol v9.4 Active</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
           <div className="hidden xl:flex items-center gap-6">
              <div className="flex flex-col items-end">
                 <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Global Precision Rank</p>
                 <p className="text-sm font-black text-slate-900 leading-none tracking-tight">Top Tier [Region-1]</p>
              </div>
              <div className="w-[1px] h-8 bg-slate-200"></div>
              <div className="flex flex-col items-end">
                 <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Uptime</p>
                 <p className="text-sm font-black text-emerald-600 leading-none tracking-tight">99.998%</p>
              </div>
           </div>
           <button className="px-8 py-3.5 bg-brand-primary text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/20 hover:bg-brand-secondary transition-all active:scale-95">
              Export Audit
           </button>
        </div>
      </nav>

      <main className="max-w-[1600px] mx-auto p-10 space-y-10 relative z-10">
        {/* Core Strategic Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           <ImpactMetricCard 
             label="Dropout Prevention" 
             value="42" 
             sub="Lives Impacted" 
             icon={ShieldCheck} 
             color="text-emerald-400" 
             trend="+12% YoY"
           />
           <ImpactMetricCard 
             label="Prevention Accuracy" 
             value="98.4%" 
             sub="Confidence Index" 
             icon={Target} 
             color="text-blue-400" 
             trend="Optimal"
           />
           <ImpactMetricCard 
             label="Performance Shift" 
             value="+22.5%" 
             sub="Avg Academic Gain" 
             icon={TrendingUp} 
             color="text-indigo-400" 
             trend="High Growth"
           />
           <ImpactMetricCard 
             label="System Supervision" 
             value="1.2k" 
             sub="Active Nodes" 
             icon={Globe} 
             color="text-slate-200" 
             trend="Scale Ready"
           />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Social Impact Storytelling */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="xl:col-span-8 p-10 bg-white border border-slate-100 rounded-[48px] relative overflow-hidden shadow-xl"
          >
             <div className="flex items-center justify-between mb-12">
                <div>
                   <h3 className="text-3xl font-display font-black text-slate-900 tracking-tight mb-2">Social Impact Velocity</h3>
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Preventative Education ROI Analysis</p>
                </div>
                <div className="flex gap-4">
                   <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-xl">
                      <Heart size={16} className="text-emerald-600" />
                      <span className="text-[10px] font-black uppercase text-emerald-600">Human Value Protected</span>
                   </div>
                </div>
             </div>

             <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={impactData}>
                      <defs>
                         <linearGradient id="colorPrevented" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                         </linearGradient>
                         <linearGradient id="colorImprovement" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                         </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b', fontWeight: 900 }} />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px' }}
                        labelStyle={{ color: '#64748b', fontWeight: 900, marginBottom: '8px' }}
                      />
                      <Area type="monotone" dataKey="prevented" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorPrevented)" />
                      <Area type="monotone" dataKey="improvement" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#colorImprovement)" />
                   </AreaChart>
                </ResponsiveContainer>
             </div>
             
             <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-100 pt-12">
                <div className="space-y-2">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest underline underline-offset-4 decoration-brand-primary decoration-2">Risk Intercepted</p>
                   <h4 className="text-3xl font-display font-black text-slate-900 leading-none tracking-tight">142</h4>
                   <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Potential dropouts averted</p>
                </div>
                <div className="space-y-2">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest underline underline-offset-4 decoration-brand-primary decoration-2">Academic Boost</p>
                   <h4 className="text-3xl font-display font-black text-slate-900 leading-none tracking-tight">18.4%</h4>
                   <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Cumulative GPA rise</p>
                </div>
                <div className="space-y-2">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest underline underline-offset-4 decoration-brand-primary decoration-2">Parental Sync</p>
                   <h4 className="text-3xl font-display font-black text-slate-900 leading-none tracking-tight">95%</h4>
                   <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">Effective communication</p>
                </div>
                <div className="space-y-2">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest underline underline-offset-4 decoration-brand-primary decoration-2">Counseling ROI</p>
                   <h4 className="text-3xl font-display font-black text-slate-900 leading-none tracking-tight">4.2x</h4>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Efficiency multiplier</p>
                </div>
             </div>
             <div className="absolute inset-0 pointer-events-none ai-scanner opacity-5"></div>
          </motion.div>

          {/* AI Decision Engine Visualization */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="xl:col-span-4 p-10 bg-slate-900 border border-slate-800 rounded-[48px] relative overflow-hidden flex flex-col items-center text-center justify-between shadow-2xl"
          >
             <div className="relative z-10 w-full">
                <div className="flex items-center justify-center gap-3 mb-8">
                   <div className="p-3 bg-brand-primary/10 rounded-2xl text-brand-primary">
                      <Cpu size={24} />
                   </div>
                   <h3 className="text-lg font-display font-black text-white uppercase tracking-tighter">Strategic Decision Core</h3>
                </div>
                
                <div className="relative py-10">
                   {/* Animated Neural Network Style Graphic */}
                   <div className="relative w-full aspect-square flex items-center justify-center">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-2 border-dashed border-white/5 rounded-full"
                      />
                      <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-8 border border-dashed border-blue-500/20 rounded-full"
                      />
                      
                      <div className="relative z-10">
                         <div className="w-24 h-24 bg-brand-primary rounded-[32px] flex items-center justify-center text-white shadow-2xl relative">
                            <BrainCircuit size={48} className="animate-pulse" />
                            <div className="absolute inset-0 bg-blue-500/20 rounded-[32px] blur-xl"></div>
                         </div>
                         {/* Dynamic Data Flow Nodes */}
                         {[0, 1, 2, 3].map((n) => (
                           <motion.div 
                             key={n}
                             animate={{ 
                               scale: [1, 1.5, 1],
                               opacity: [0.3, 0.7, 0.3]
                             }}
                             transition={{ duration: 3, delay: n * 0.75, repeat: Infinity }}
                             className="absolute w-4 h-4 bg-brand-primary border-4 border-slate-950 rounded-full"
                             style={{
                               top: `${50 + 60 * Math.sin(n * Math.PI / 2)}%`,
                               left: `${50 + 60 * Math.cos(n * Math.PI / 2)}%`,
                             }}
                           />
                         ))}
                      </div>
                   </div>
                </div>

                <div className="space-y-6 mt-8">
                   <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                      <span>Neural Throughput</span>
                      <span className="text-brand-primary">4.2k Vps</span>
                   </div>
                   <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ['20%', '80%', '60%', '90%'] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="h-full bg-brand-primary"
                      ></motion.div>
                   </div>
                   <p className="text-sm font-medium text-slate-400 italic">"AI is currently synthesizing behavioral drift cross-referenced with attendance heuristics."</p>
                </div>
             </div>

             <button className="w-full py-5 bg-white border-2 border-white hover:bg-slate-900 hover:text-white transition-all rounded-[28px] text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl active:scale-95">
                Neural Configuration
             </button>
             
             <div className="absolute inset-0 ai-scanner opacity-5 pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Global School Command Center Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-1 bento-card !bg-white/5 p-10 border-white/5 flex flex-col justify-between group overflow-hidden">
              <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-rose-500/10 border border-rose-500/20 rounded-2xl flex items-center justify-center text-rose-500">
                       <ShieldAlert size={24} />
                    </div>
                    <div>
                       <h4 className="text-lg font-display font-black text-white uppercase tracking-tighter">Cohort Stability</h4>
                       <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest">Active Vulnerability Scan</p>
                    </div>
                 </div>
                 <div className="space-y-6">
                    <StabilityBar label="Grade 10" percentage={92} color="bg-emerald-500" />
                    <StabilityBar label="Grade 11" percentage={74} color="bg-rose-500" />
                    <StabilityBar label="Grade 12" percentage={88} color="bg-amber-500" />
                 </div>
              </div>
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-rose-500 opacity-5 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-700"></div>
           </div>

           <div className="lg:col-span-2 bento-card !bg-slate-950 p-10 border-white/5 overflow-hidden group">
              <div className="flex items-center justify-between mb-10">
                 <div>
                    <h3 className="text-2xl font-display font-black text-white tracking-tight">Intelligence Feed Hub</h3>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Live Strategic Decision Streams</p>
                 </div>
                 <button className="text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] hover:underline">View System Audit</button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                 {[
                   { t: 'Strategic Alert', v: 'Early warning signal for Class XI-IPA-2 confirmed. Resource allocation needed.', type: 'critical' },
                   { t: 'Academic Optimization', v: 'Neural model detected 8% gain in overall mathematics engagement.', type: 'positive' },
                   { t: 'Behavioral Discovery', v: 'New attendance anomaly cluster identified in Grade 11 Block B.', type: 'warning' },
                   { t: 'System Synchronization', v: 'Parental contact established for 24 high-priority nodes.', type: 'system' }
                 ].map((feed, i) => (
                   <div key={i} className="p-5 bg-white/5 border border-white/5 rounded-[24px] hover:border-brand-primary/30 transition-all flex gap-4 ring-1 ring-white/5">
                      <div className={cn("w-1 h-full rounded-full shrink-0", feed.type === 'critical' ? 'bg-rose-500' : feed.type === 'positive' ? 'bg-emerald-500' : 'bg-brand-primary')}></div>
                      <div>
                         <p className={cn("text-[9px] font-black uppercase tracking-widest mb-1", feed.type === 'critical' ? 'text-rose-400' : feed.type === 'positive' ? 'text-emerald-400' : 'text-brand-primary')}>{feed.t}</p>
                         <p className="text-sm font-medium text-slate-300 leading-relaxed">{feed.v}</p>
                      </div>
                   </div>
                 ))}
              </div>
              <div className="ai-scanner absolute inset-0 opacity-[0.03] pointer-events-none"></div>
           </div>
        </section>

        {/* Future Vision Reveal Section */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative p-12 bg-white rounded-[56px] text-slate-900 overflow-hidden shadow-2xl group border-2 border-brand-primary/5"
        >
           <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                 <div className="inline-flex gap-2 items-center bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] mb-6">
                    <Sparkles size={14} className="text-brand-primary" />
                    AI Ecosystem Foundation v2.0
                 </div>
                 <h2 className="text-4xl font-display font-black tracking-tight leading-[0.95] mb-6">Building the Future of <br /><span className="text-brand-primary">Student Potential.</span></h2>
                 <p className="text-lg font-medium text-slate-500 leading-relaxed mb-10 italic">"Our mission is to ensure no student is left behind by transforming raw biometric data into life-saving academic interventions."</p>
                 <div className="flex gap-4">
                    <button className="px-10 py-5 bg-slate-900 text-white rounded-3xl text-xs font-black uppercase tracking-[0.3em] shadow-xl shadow-slate-900/10 hover:bg-brand-primary transition-all active:scale-95">Investor Relations</button>
                    <button className="px-10 py-5 bg-slate-100 text-slate-900 rounded-3xl text-xs font-black uppercase tracking-[0.3em] flex items-center gap-3 group/btn">
                       Vision Roadmap 
                       <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                 </div>
              </div>
              <div className="shrink-0 relative hidden lg:block">
                 <div className="w-80 h-80 bg-brand-primary/5 rounded-[48px] absolute -top-10 -right-10 blur-[100px]"></div>
                 <div className="w-64 h-64 bg-slate-900 rounded-[48px] shadow-2xl flex items-center justify-center p-12 text-white relative z-10 group-hover:scale-105 transition-transform duration-700">
                    <GraduationCap size={100} />
                 </div>
              </div>
           </div>
           {/* Abstract Design Elements */}
           <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -rotate-12 translate-x-12 pointer-events-none"></div>
        </motion.div>
      </main>

      <footer className="mt-20 p-20 border-t border-slate-100 bg-white/70 backdrop-blur-3xl relative z-10">
         <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-2xl">
                  <GraduationCap size={28} />
               </div>
               <div>
                  <h4 className="text-xl font-display font-black text-slate-900 tracking-tighter">EduPulse AI</h4>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Neural Education Ecosystem © 2026</p>
               </div>
            </div>
            <div className="flex gap-12">
               {['Strategy', 'Foundation', 'Ecosystem', 'Identity'].map(link => (
                 <button key={link} className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] hover:text-slate-900 transition-colors">{link}</button>
               ))}
            </div>
         </div>
      </footer>
    </div>
  );
};

const ImpactMetricCard = ({ label, value, sub, icon: Icon, color, trend }: any) => (
  <motion.div 
    whileHover={{ y: -8, scale: 1.02 }}
    className="p-10 bg-white/5 backdrop-blur-3xl border border-white/5 rounded-[48px] group relative overflow-hidden"
  >
     <div className="relative z-10 flex flex-col items-start gap-8">
        <div className="flex items-center justify-between w-full">
           <div className={cn("w-16 h-16 rounded-[24px] bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-700 group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110", color)}>
              <Icon size={32} />
           </div>
           <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-white/[0.03] px-3 py-1.5 rounded-xl border border-white/5">
              {trend}
           </div>
        </div>
        <div>
           <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">{label}</p>
           <h3 className="text-5xl font-display font-black text-white tracking-tight leading-none mb-1 group-hover:text-brand-primary transition-colors">{value}</h3>
           <p className="text-[11px] font-bold text-slate-400 italic">"{sub}"</p>
        </div>
     </div>
     <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-white/[0.01] rounded-full blur-[80px] group-hover:bg-brand-primary/5 transition-all"></div>
     <div className="ai-scanner absolute inset-0 opacity-[0.03] pointer-events-none"></div>
  </motion.div>
);

const StabilityBar = ({ label, percentage, color }: any) => (
  <div className="space-y-2">
     <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
        <span className="text-slate-400">{label} Stability</span>
        <span className={cn(percentage > 85 ? "text-emerald-400" : percentage > 70 ? "text-amber-400" : "text-rose-400")}>{percentage}%</span>
     </div>
     <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={cn("h-full rounded-full", color)}
        ></motion.div>
     </div>
  </div>
);

export default ExecutiveOverview;
