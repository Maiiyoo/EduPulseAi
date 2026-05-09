import React from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  ShieldAlert, 
  TrendingDown, 
  TrendingUp,
  Brain, 
  Lightbulb,
  FileText,
  AlertCircle,
  CheckCircle2,
  Share2,
  Download,
  AlertTriangle,
  BrainCircuit,
  Zap,
  Target,
  Fingerprint,
  Activity,
  MoreVertical,
  ChevronRight,
  Clock,
  LayoutGrid
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
  LineChart,
  Line
} from 'recharts';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Student } from '../types';

interface Props {
  student: Student;
  onBack: () => void;
}

const StudentDetail = ({ student, onBack }: Props) => {
  const [isScanning, setIsScanning] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsScanning(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const gradeData = [
    { subject: 'Math', score: student.grades.math },
    { subject: 'Science', score: student.grades.science },
    { subject: 'English', score: student.grades.english },
    { subject: 'History', score: student.grades.history },
  ];

  const trendData = student.performanceTrend.map((score, i) => ({
    month: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'][i],
    score
  }));

  const latenessData = [
    { day: 'Mon', mins: 12 },
    { day: 'Tue', mins: 0 },
    { day: 'Wed', mins: 5 },
    { day: 'Thu', mins: 20 },
    { day: 'Fri', mins: 0 },
  ];

  return (
    <div className="min-h-screen bg-brand-background text-slate-900 font-sans selection:bg-brand-primary/10 overflow-x-hidden">
      <div className="absolute inset-0 neural-grid opacity-[0.05] pointer-events-none"></div>
      <div className="ai-scan-line opacity-[0.05] pointer-events-none"></div>

      {/* Top Navigation */}
      <nav className="h-20 bg-white/70 backdrop-blur-3xl border-b border-slate-100 px-8 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <button 
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all active:scale-95 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <div>
            <h1 className="text-xl font-display font-black text-slate-900 tracking-tighter uppercase italic">Neural Core :: {student.id}</h1>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-none">Security Clearance: LEVEL 04 :: Extraction Active</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
           <button className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-all">
              <Share2 size={18} />
           </button>
           <button className="px-6 py-2.5 bg-brand-primary text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-blue-500/20 hover:bg-brand-secondary transition-all flex items-center gap-2">
              <Download size={16} />
              Export Full Intelligence
           </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-8 space-y-8 relative">
        {/* AI Scanner Animation */}
        {isScanning && (
          <motion.div 
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            transition={{ duration: 2.5, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-brand-primary shadow-[0_0_20px_#2563eb] z-40 pointer-events-none opacity-50"
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: IDENTITY & BIOMETRICS */}
          <div className="lg:col-span-4 space-y-6">
            {/* Identity Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bento-card !p-0 overflow-hidden relative group"
            >
               <div className="h-32 bg-slate-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-mesh opacity-5"></div>
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl"></div>
               </div>
               <div className="px-8 pb-8 -mt-16 relative z-10 text-center">
                  <div className="relative inline-block mb-6">
                     <div className="w-32 h-32 rounded-3xl bg-white p-1 border-4 border-white shadow-2xl overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-700">
                        <img src={`https://i.pravatar.cc/300?u=${student.id}`} alt={student.name} className="w-full h-full rounded-2xl object-cover" referrerPolicy="no-referrer" />
                     </div>
                     <motion.div 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className={cn(
                        "absolute -bottom-2 -right-2 w-12 h-12 rounded-2xl border-4 border-white flex items-center justify-center shadow-xl",
                        student.riskStatus === 'Safe' ? "bg-emerald-500 text-white" : student.riskStatus === 'Warning' ? "bg-amber-500 text-white" : "bg-rose-500 text-white"
                      )}>
                        {student.riskStatus === 'Safe' ? <Fingerprint size={24} /> : student.riskStatus === 'Warning' ? <Zap size={24} /> : <AlertCircle size={24} />}
                     </motion.div>
                  </div>
                  <h2 className="text-3xl font-display font-black text-slate-900 tracking-tight mb-1">{student.name}</h2>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">{student.class}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                      <div className="px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl">
                         <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Identity ID</p>
                         <p className="text-xs font-black text-slate-900">NISN {student.nis}</p>
                      </div>
                      <div className={cn(
                        "px-4 py-3 border rounded-2xl",
                        student.riskStatus === 'Safe' ? "bg-emerald-50 border-emerald-100 text-emerald-700" : 
                        student.riskStatus === 'Warning' ? "bg-amber-50 border-amber-100 text-amber-700" : 
                        "bg-rose-50 border-rose-100 text-rose-700"
                      )}>
                         <p className="text-[8px] font-black opacity-60 uppercase tracking-widest mb-1">AI Status</p>
                         <p className="text-xs font-black uppercase">{student.riskStatus}</p>
                      </div>
                  </div>

                  <div className="space-y-4 text-left border-t border-slate-100 pt-6">
                     <div className="flex items-center gap-4 group/item cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:text-brand-primary group-hover/item:bg-blue-50 transition-all">
                           <Mail size={18} />
                        </div>
                        <div>
                           <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Neural Direct</p>
                           <p className="text-sm font-bold text-slate-900">{student.name.toLowerCase().replace(' ', '.')}@edu.ai</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4 group/item cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:text-brand-primary group-hover/item:bg-blue-50 transition-all">
                           <Phone size={18} />
                        </div>
                        <div>
                           <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Emergency Comms</p>
                           <p className="text-sm font-bold text-slate-900">+62 812-4455-XXX (Encrypted)</p>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* Core Biometrics */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="bento-card"
            >
               <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                  <Activity size={12} className="text-brand-primary" />
                  Live Core Biometrics
               </h3>
               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                     <div className="flex justify-between items-center">
                        <p className="text-[9px] font-black text-slate-400 uppercase">Attendance</p>
                        <span className="text-xs font-black text-slate-900">{student.attendance}%</span>
                     </div>
                     <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: `${student.attendance}%` }}
                           transition={{ duration: 1, delay: 0.5 }}
                           className="h-full bg-brand-primary rounded-full shadow-[0_0_10px_#2563eb]"
                        ></motion.div>
                     </div>
                  </div>
                  <div className="space-y-3">
                     <div className="flex justify-between items-center">
                        <p className="text-[9px] font-black text-slate-400 uppercase">Grades (μ)</p>
                        <span className="text-xs font-black text-slate-900">82.5</span>
                     </div>
                     <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: `82%` }}
                           transition={{ duration: 1, delay: 0.7 }}
                           className="h-full bg-brand-secondary rounded-full shadow-[0_0_10px_#6366f1]"
                        ></motion.div>
                     </div>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col items-center">
                     <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Delay Vectors</p>
                     <p className="text-2xl font-display font-black text-slate-900">{student.lateCount}</p>
                     <p className="text-[9px] font-bold text-slate-400">Total Units</p>
                  </div>
                  <div className="p-4 bg-rose-50 border border-rose-100 rounded-2xl flex flex-col items-center">
                     <p className="text-[8px] font-black text-rose-400 uppercase tracking-widest mb-1">Infractions</p>
                     <p className="text-2xl font-display font-black text-rose-600">{student.violations}</p>
                     <p className="text-[9px] font-bold text-rose-400">Security Alerts</p>
                  </div>
               </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: AI INTELLIGENCE & TRAJECTORIES */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* AI Risk Matrix Visualization */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white text-slate-900 rounded-[32px] p-10 relative overflow-hidden shadow-2xl group border border-slate-100"
            >
               <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-primary text-white rounded-full text-[10px] font-black mb-6 uppercase tracking-[0.2em]">
                       <BrainCircuit size={16} />
                       AI Logic Analyzer v3.0
                    </div>
                    <h3 className="text-4xl font-display font-black mb-6 leading-tight tracking-tight">
                       Risk Exposure Index: <span className={cn(
                         "transition-colors duration-1000",
                         student.riskScore > 70 ? "text-rose-600" : 
                         student.riskScore > 30 ? "text-amber-600" : 
                         "text-emerald-600"
                       )}>{student.riskScore}.00</span>
                    </h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 italic border-l-2 border-brand-primary pl-4 bg-slate-50 py-4 rounded-r-2xl">
                       "{student.aiInsights || 'Synthetic heuristic engine analyzing multi-dimensional behavioral vectors for latent drop-out probability.'}"
                    </p>
                    <div className="flex flex-wrap gap-4">
                       <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                          <Target size={16} className="text-brand-primary" />
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Confidence: <span className="text-slate-900">{student.aiConfidence}%</span></p>
                       </div>
                       <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                          <Activity size={16} className={cn(student.currentPerformance > student.lastMonthPerformance ? "text-emerald-600" : "text-rose-600")} />
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Shift: <span className="text-slate-900">{student.currentPerformance > student.lastMonthPerformance ? '+' : ''}{student.currentPerformance - student.lastMonthPerformance}%</span></p>
                       </div>
                    </div>
                  </div>

                  <div className="relative shrink-0">
                     <div className="w-56 h-56 relative group">
                        {/* Interactive Radial Gauge */}
                        <svg className="w-full h-full transform -rotate-90">
                           <circle
                             cx="112"
                             cy="112"
                             r="90"
                             fill="transparent"
                             stroke="rgba(255,255,255,0.05)"
                             strokeWidth="16"
                             className="transition-all"
                           />
                           <motion.circle
                             cx="112"
                             cy="112"
                             r="90"
                             fill="transparent"
                             stroke="currentColor"
                             strokeWidth="16"
                             strokeDasharray={2 * Math.PI * 90}
                             initial={{ strokeDashoffset: 2 * Math.PI * 90 }}
                             animate={{ strokeDashoffset: 2 * Math.PI * 90 * (1 - student.riskScore / 100) }}
                             transition={{ duration: 2, ease: "easeOut" }}
                             className={cn(
                               "transition-all duration-1000",
                               student.riskScore > 70 ? "text-rose-500" : student.riskScore > 30 ? "text-amber-500" : "text-emerald-500"
                             )}
                           />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                           <motion.p 
                             initial={{ opacity: 0, scale: 0.5 }}
                             animate={{ opacity: 1, scale: 1 }}
                             className="text-5xl font-display font-black leading-none"
                           >
                             {student.riskScore}
                           </motion.p>
                           <p className="text-[8px] font-black text-slate-400 uppercase tracking-[0.3em] mt-2">Vector Index</p>
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Background Effects */}
               <div className="absolute top-0 right-0 w-80 h-80 bg-brand-primary/10 rounded-full blur-[120px] group-hover:scale-150 transition-transform duration-[3s]"></div>
               <div className="ai-scanner absolute inset-0 pointer-events-none opacity-10"></div>
            </motion.div>

            {/* Performance Matrix Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Academic Distribution Matrix */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="bento-card"
               >
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                       <LayoutGrid size={14} className="text-brand-primary" />
                       Academic Spectrum
                    </h3>
                  </div>
                  <div className="h-[240px] w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={gradeData}>
                           <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" strokeOpacity={0.3} />
                           <XAxis dataKey="subject" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 800 }} />
                           <YAxis hide domain={[0, 100]} />
                           <Tooltip 
                              cursor={{ fill: 'transparent' }}
                              contentStyle={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                              labelStyle={{ color: '#64748b', fontWeight: 800, fontSize: '10px', textTransform: 'uppercase' }}
                              itemStyle={{ color: '#0f172a', fontSize: '14px', fontWeight: 700 }}
                           />
                           <Bar dataKey="score" radius={[8, 8, 8, 8]} barSize={40}>
                              {gradeData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.score > 85 ? '#2563eb' : entry.score > 70 ? '#6366f1' : '#f43f5e'} className="hover:opacity-80 transition-opacity" />
                              ))}
                           </Bar>
                        </BarChart>
                     </ResponsiveContainer>
                  </div>
               </motion.div>

               {/* Growth Trajectory Area */}
               <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bento-card"
               >
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                       <TrendingUp size={14} className="text-brand-secondary" />
                       Behavioral Trajectory
                    </h3>
                  </div>
                  <div className="h-[240px] w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={trendData}>
                           <defs>
                              <linearGradient id="colorTrendDetail" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="5%" stopColor="#6366F1" stopOpacity={0.2}/>
                                 <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                              </linearGradient>
                           </defs>
                           <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" strokeOpacity={0.3} />
                           <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94a3b8', fontWeight: 800 }} />
                           <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                           <Tooltip 
                              contentStyle={{ backgroundColor: 'white', borderRadius: '16px', border: '1px solid #e2e8f0' }}
                              labelStyle={{ color: '#64748b', fontWeight: 800, fontSize: '10px' }}
                              itemStyle={{ color: '#0f172a', fontWeight: 700 }}
                           />
                           <Area type="monotone" dataKey="score" stroke="#6366F1" strokeWidth={4} fillOpacity={1} fill="url(#colorTrendDetail)" animationDuration={2000} />
                        </AreaChart>
                     </ResponsiveContainer>
                  </div>
               </motion.div>
            </div>

            {/* Neural Recommendations & Logic Predictions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Neuro-Link Recommendations */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 }}
                 className="bento-card !bg-white group"
               >
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                     <Lightbulb size={20} className="text-brand-warning drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]" />
                     Neuro-Link Protocols
                  </h3>
                  <div className="space-y-4">
                     {(student.aiRecommendations || ['Neural stabilization recommended', 'Vector maintenance required']).map((rec, i) => (
                        <motion.div 
                           key={i} 
                           whileHover={{ x: 5 }}
                           className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex gap-4 cursor-pointer hover:border-brand-primary/20 transition-all"
                        >
                           <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center text-brand-primary shrink-0">
                              <Target size={16} />
                           </div>
                           <div>
                              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Recommended Operation</p>
                              <p className="text-xs font-bold text-slate-900 leading-tight">{rec}</p>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </motion.div>

               {/* Predictive Risk Model */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5 }}
                 className="bento-card !bg-white relative overflow-hidden group border border-slate-100"
               >
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8 flex items-center gap-2 relative z-10">
                     <ShieldAlert size={20} className="text-brand-primary" />
                     Predictive Trajectory (T+30d)
                  </h3>
                  <div className="space-y-6 relative z-10">
                     <div className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-2xl">
                        <div>
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Dropout Probability</p>
                           <p className="text-3xl font-display font-black text-slate-900">{student.riskScore > 60 ? 'HIGH' : student.riskScore > 30 ? 'MEDIUM' : 'IMMATERIAL'}</p>
                        </div>
                        <div className={cn(
                          "w-16 h-16 rounded-2xl flex flex-col items-center justify-center border-2",
                          student.riskScore > 60 ? "bg-rose-50 border-rose-500 text-rose-600" : 
                          student.riskScore > 30 ? "bg-amber-50 border-amber-500 text-amber-600" : 
                          "bg-emerald-50 border-emerald-500 text-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                        )}>
                           <p className="text-xl font-display font-black leading-none">{student.riskScore > 60 ? '78' : student.riskScore > 30 ? '34' : '02'}%</p>
                        </div>
                     </div>
                     
                     <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl border-dashed">
                        <div className="flex gap-3">
                           <Brain size={20} className="text-brand-primary shrink-0" />
                           <div>
                              <p className="text-[10px] font-black text-brand-primary uppercase tracking-widest mb-1">AI Strategic Intelligence</p>
                              <p className="text-xs font-medium text-slate-500 leading-relaxed italic">
                                "Forecast indicates a {student.riskScore > 50 ? 'continuing downward' : 'stable'} vector. Deploy immediate {student.riskScore > 50 ? 'active intervention' : 'passive monitoring'} to neutralize potential friction points."
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-[4s]"></div>
               </motion.div>
            </div>

            {/* Neuro-Link Engagement History (Timeline) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bento-card"
            >
               <div className="flex items-center justify-between mb-10">
                 <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                    <Activity size={14} className="text-brand-primary" />
                    Neuro-Link Engagement Timeline
                 </h3>
                 <button className="text-[10px] font-black text-brand-primary uppercase tracking-widest hover:underline">Full Log Access</button>
               </div>
               
               <div className="space-y-0 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100 before:z-0">
                  {student.timeline.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + idx * 0.1 }}
                      className="relative z-10 flex gap-6 pb-10 last:pb-0"
                    >
                       <div className={cn(
                         "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border-4 border-white shadow-sm transition-all duration-500",
                         item.impact === 'positive' ? "bg-emerald-500 text-white" : 
                         item.impact === 'negative' ? "bg-rose-500 text-white" : "bg-slate-200 text-slate-500"
                       )}>
                          {item.type === 'Academic' ? <FileText size={16} /> : item.type === 'Attendance' ? <Clock size={16} /> : <BrainCircuit size={16} />}
                       </div>
                       <div className="flex-1 pt-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2">
                             <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.date}</span>
                                <span className={cn(
                                  "px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-[0.1em] border",
                                  item.type === 'Academic' ? "bg-blue-50 text-blue-600 border-blue-100" : 
                                  item.type === 'Attendance' ? "bg-indigo-50 text-indigo-600 border-indigo-100" : 
                                  "bg-purple-50 text-purple-600 border-purple-100"
                                )}>{item.type} Vector</span>
                             </div>
                             <div className="flex items-center gap-1">
                                <div className={cn("w-1.5 h-1.5 rounded-full", item.impact === 'positive' ? "bg-emerald-500" : item.impact === 'negative' ? "bg-rose-500" : "bg-slate-400")}></div>
                                <span className="text-[9px] font-black text-slate-500 uppercase">{item.impact} IMPACT</span>
                             </div>
                          </div>
                          <p className="text-sm font-bold text-slate-900 group-hover:text-brand-primary transition-colors">{item.content}</p>
                       </div>
                       <button className="self-center p-2 text-slate-300 hover:text-slate-900 transition-colors">
                          <MoreVertical size={16} />
                       </button>
                    </motion.div>
                  ))}
               </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
    </div>
  );
};

export default StudentDetail;
