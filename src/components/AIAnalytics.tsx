import React from 'react';
import { 
  BrainCircuit, 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  ShieldAlert, 
  Target, 
  Activity, 
  Calendar,
  Layers,
  BarChart3,
  PieChart as PieChartIcon,
  Flame,
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  Monitor,
  Globe,
  Cpu,
  FileText
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface Props {
  onBack: () => void;
}

const AIAnalytics = ({ onBack }: Props) => {
  const trendData = [
    { name: 'PH-1', performance: 72, risk: 20 },
    { name: 'PH-2', performance: 78, risk: 18 },
    { name: 'PH-3', performance: 70, risk: 25 },
    { name: 'PH-4', performance: 85, risk: 12 },
    { name: 'PH-5', performance: 82, risk: 15 },
    { name: 'PH-6', performance: 90, risk: 8 },
  ];

  const radarData = [
    { subject: 'Engagement', A: 120, B: 110, fullMark: 150 },
    { subject: 'Academic', A: 98, B: 130, fullMark: 150 },
    { subject: 'Psychology', A: 140, B: 130, fullMark: 150 },
    { subject: 'Social', A: 99, B: 100, fullMark: 150 },
    { subject: 'Stability', A: 85, B: 90, fullMark: 150 },
  ];

  return (
    <div className="min-h-screen bg-brand-background text-slate-900 font-sans selection:bg-brand-primary/10 overflow-x-hidden">
      {/* Cinematic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/[0.03] rounded-full blur-[150px]"></div>
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/[0.03] rounded-full blur-[120px]"></div>
      </div>

      {/* Premium Navigation */}
      <nav className="h-24 bg-white/70 backdrop-blur-3xl border-b border-slate-100 px-10 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <button 
            onClick={onBack}
            className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all active:scale-95 group shadow-sm"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <div>
            <h1 className="text-2xl font-display font-black text-slate-900 tracking-tighter leading-none mb-1">Predictive Matrix</h1>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                 <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse px-0 py-0"></div>
                 <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Global Engine: ACTIVE</p>
              </div>
              <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
              <p className="text-[10px] font-black text-brand-primary uppercase tracking-widest leading-none">v4.0.2 STABLE</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
           <div className="hidden xl:flex items-center gap-4 bg-white border border-slate-200 px-6 py-2.5 rounded-2xl shadow-sm">
              <Globe size={16} className="text-brand-primary animate-spin duration-[5s]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Regional Synapse Node: ASIA-SOUTHEAST-01</span>
           </div>
           <button className="px-8 py-3.5 bg-brand-primary text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/20 hover:bg-brand-secondary transition-all active:scale-95">
              Force Sync
           </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-10 space-y-10 relative z-10">
        {/* Intelligence Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-10 bg-brand-primary rounded-[48px] overflow-hidden relative shadow-2xl group flex flex-col md:flex-row items-center justify-between gap-10"
        >
           <div className="relative z-10 flex items-center gap-8 text-white max-w-2xl">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-2xl rounded-3xl flex items-center justify-center shadow-inner shrink-0 group-hover:rotate-6 transition-transform duration-700">
                 <BrainCircuit size={40} />
              </div>
              <div>
                 <h2 className="text-3xl font-display font-black tracking-tight mb-2">Neural Strategy Detected</h2>
                 <p className="text-blue-100 text-sm font-medium leading-relaxed opacity-90">Cognitive drift detected in Cohort XI-LMS. Probability of systemic performance failure increased by 14.8%. Deploy intervention protocol "Alpha-Omega" within 48 hours for recovery.</p>
              </div>
           </div>
           <div className="relative z-10 shrink-0">
             <button className="px-10 py-5 bg-slate-900 text-white rounded-[24px] font-black text-xs uppercase tracking-[0.3em] hover:bg-black transition-all active:scale-95 shadow-2xl">
                Execute Protocol
             </button>
           </div>
           <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none"></div>
           <div className="ai-scanner absolute inset-0 opacity-20 pointer-events-none"></div>
        </motion.div>

        {/* Core Matrix Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           <PremiumStatCard label="Global Risk" value="4.20%" change="-1.2%" icon={ShieldAlert} color="text-emerald-400" />
           <PremiumStatCard label="Burnout Index" value="28.4" change="+5.4" icon={Flame} color="text-rose-400" />
           <PremiumStatCard label="Unit Engagement" value="92/100" change="+8.1%" icon={Zap} color="text-brand-primary" />
           <PremiumStatCard label="Model Drift" value="0.02" change="Stable" icon={Target} color="text-indigo-400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
           {/* Primary Analysis Chart */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.98 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.2 }}
             className="lg:col-span-8 p-10 bg-white border border-slate-100 rounded-[48px] relative overflow-hidden shadow-xl"
           >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-12">
                 <div>
                    <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight mb-1">Vector Velocity Analysis</h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Phase 18 Cumulative Performance</p>
                 </div>
                 <div className="flex gap-6">
                    <div className="flex items-center gap-3">
                       <div className="w-3 h-3 rounded-full bg-brand-primary shadow-[0_0_10px_rgba(37,99,235,0.3)]"></div>
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Performance</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="w-3 h-3 rounded-full bg-rose-600 shadow-[0_0_10px_rgba(225,44,44,0.3)]"></div>
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Risk Factor</span>
                    </div>
                 </div>
              </div>

              <div className="h-[400px] w-full">
                 <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData}>
                       <defs>
                          <linearGradient id="colorPerfPremium" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                             <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorRiskPremium" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.2}/>
                             <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                          </linearGradient>
                       </defs>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                       <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b', fontWeight: 900 }} />
                       <YAxis hide domain={[0, 100]} />
                       <Tooltip 
                         contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '24px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                         labelStyle={{ color: '#64748b', fontWeight: 900, fontSize: '10px', textTransform: 'uppercase', marginBottom: '12px' }}
                         itemStyle={{ color: '#0f172a', fontSize: '15px', fontWeight: 800 }}
                       />
                       <Area type="monotone" dataKey="performance" stroke="#2563eb" strokeWidth={5} fillOpacity={1} fill="url(#colorPerfPremium)" animationDuration={4000} />
                       <Area type="monotone" dataKey="risk" stroke="#f43f5e" strokeWidth={5} fillOpacity={1} fill="url(#colorRiskPremium)" animationDuration={4000} />
                    </AreaChart>
                 </ResponsiveContainer>
              </div>
              <div className="absolute inset-0 pointer-events-none ai-scanner opacity-5"></div>
           </motion.div>

           {/* Precision Dial */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.3 }}
             className="lg:col-span-4 p-10 bg-white border border-slate-100 rounded-[48px] flex flex-col items-center justify-center text-center relative overflow-hidden group shadow-xl"
           >
              <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-12">Model Precision Index</h3>
              <div className="relative mb-12">
                 <svg className="w-56 h-56 transform -rotate-90">
                    <circle cx="112" cy="112" r="100" fill="transparent" stroke="#f1f5f9" strokeWidth="16" />
                    <motion.circle 
                      cx="112" cy="112" r="100" fill="transparent" 
                      stroke="#2563eb" strokeWidth="16" 
                      strokeDasharray={2 * Math.PI * 100}
                      initial={{ strokeDashoffset: 2 * Math.PI * 100 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 100 * (1 - 0.984) }}
                      transition={{ duration: 2.5, ease: "easeOut" }}
                      className="shadow-[0_0_30px_#2563eb]"
                    />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-6xl font-display font-black text-slate-900 group-hover:scale-110 transition-transform">98.4</p>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">% Accuracy</p>
                 </div>
              </div>
              <p className="text-sm font-medium text-slate-500 mb-10 px-4 leading-relaxed">System architecture verified by PulseEngine Core. Latency stabilized at 12ms.</p>
              <button className="w-full py-5 bg-white border border-slate-200 rounded-3xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-50 transition-all active:scale-95 shadow-sm">
                 Audit Neural Path
              </button>
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/5 rounded-full blur-[100px]"></div>
           </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
           {/* Radar Distribution */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="p-10 bg-white border border-slate-100 rounded-[48px] shadow-xl"
           >
              <div className="flex items-center justify-between mb-12">
                 <div>
                    <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight mb-1">Dimensional Synthesis</h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Ecosystem Profile</p>
                 </div>
                 <Activity size={24} className="text-brand-primary animate-pulse" />
              </div>
              <div className="h-[340px] w-full">
                 <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                       <PolarGrid stroke="#e2e8f0" />
                       <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 900 }} />
                       <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '20px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                       <Radar
                          name="Live Matrix"
                          dataKey="A"
                          stroke="#2563eb"
                          strokeWidth={3}
                          fill="#2563eb"
                          fillOpacity={0.3}
                       />
                       <Radar
                          name="Control Group"
                          dataKey="B"
                          stroke="#6366f1"
                          strokeWidth={2}
                          fill="#6366f1"
                          fillOpacity={0.05}
                       />
                    </RadarChart>
                 </ResponsiveContainer>
              </div>
           </motion.div>

           {/* Knowledge Log Panel */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="p-10 bg-white border border-slate-100 rounded-[48px] relative overflow-hidden shadow-xl"
           >
              <div className="flex items-center justify-between mb-12">
                 <div>
                    <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight mb-1">Neural Integration Feed</h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Live Knowledge Base Updates</p>
                 </div>
                 <Globe size={24} className="text-brand-secondary" />
              </div>
              <div className="space-y-6">
                 {[
                   { t: '12m ago', label: 'Biometric Input', v: 'Scanning cohort XII-A for anomaly detection...' },
                   { t: '1h ago', label: 'Matrix Sync', v: 'Unified 4,200 data points across 8 servers.' },
                   { t: '3h ago', label: 'Report Generated', v: 'Strategic Intelligence Summary Cycle #42 uploaded.' },
                   { t: '5h ago', label: 'Protocol Update', v: 'Refined predictive weights for dropout probability.' }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 group cursor-pointer p-4 hover:bg-slate-50 rounded-2xl transition-all border border-transparent hover:border-slate-100 text-xs">
                      <div className="w-1.5 h-full self-stretch bg-brand-primary/20 rounded-full group-hover:bg-brand-primary transition-all"></div>
                      <div className="flex-1">
                         <div className="flex justify-between items-center mb-1">
                            <p className="text-[10px] font-black text-brand-primary uppercase tracking-widest">{item.label}</p>
                            <p className="text-[10px] font-bold text-slate-500">{item.t}</p>
                         </div>
                         <p className="font-bold text-slate-300 group-hover:text-white transition-colors">{item.v}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </motion.div>
        </div>

        {/* Global Action Terminal */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="p-10 bg-slate-900 border border-slate-800 rounded-[48px] flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden"
        >
           <div className="relative z-10 flex items-center gap-8">
              <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-[28px] flex items-center justify-center text-brand-primary shadow-inner">
                 <Monitor size={40} />
              </div>
              <div>
                 <h3 className="text-3xl font-display font-black text-white tracking-tight mb-2">Matrix Synchronization Report</h3>
                 <p className="text-slate-300 text-sm font-medium">Export raw data or formatted intelligence summaries for institutional audit.</p>
              </div>
           </div>
           <div className="relative z-10 flex gap-4">
              <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-[24px] font-black text-xs uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-all">Raw Data</button>
              <button className="px-10 py-5 bg-brand-primary text-white rounded-[24px] font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-blue-500/20 hover:bg-brand-secondary transition-all">Export Matrix (.pdf)</button>
           </div>
           <div className="absolute inset-0 ai-scanner opacity-5 pointer-events-none"></div>
        </motion.div>
      </main>

      <footer className="text-center p-12 text-[10px] font-black text-slate-700 uppercase tracking-[0.4em] relative z-10">
         EduPulse Intelligent Matrix © 2026. Non-Destructive Analysis Mode Active.
      </footer>
    </div>
  );
};

const PremiumStatCard = ({ label, value, change, icon: Icon, color }: any) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    className="p-8 bg-white border border-slate-100 rounded-[40px] shadow-xl group relative overflow-hidden flex flex-col items-start gap-8"
  >
     <div className="relative z-10 w-full flex items-center justify-between">
        <div className={cn("w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center transition-all duration-700 group-hover:bg-slate-900 group-hover:text-white group-hover:scale-110", color)}>
           <Icon size={26} />
        </div>
        <div className={cn(
          "px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border",
          change.startsWith('+') ? "bg-rose-50 border-rose-100 text-rose-600" : "bg-emerald-50 border-emerald-100 text-emerald-600"
        )}>
          {change}
        </div>
     </div>
     <div className="relative z-10">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{label}</p>
        <h4 className="text-4xl font-display font-black text-slate-900 leading-none group-hover:text-brand-primary transition-colors">{value}</h4>
     </div>
     <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-slate-100 rounded-full blur-[60px] group-hover:bg-brand-primary/5 transition-all"></div>
  </motion.div>
);

export default AIAnalytics;
