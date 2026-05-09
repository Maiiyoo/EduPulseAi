import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  BrainCircuit, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  GraduationCap,
  ShieldAlert,
  TrendingDown,
  UserCheck,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  ArrowRight,
  Calendar,
  Filter,
  Activity,
  Zap,
  Target,
  Sparkles,
  ChevronRight,
  Scan,
  Database,
  Mic,
  Globe,
  Terminal
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
} from 'recharts';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { DUMMY_STUDENTS } from '../constants';
import { Student, ViewType, Notification } from '../types';
import NotificationCenter from './NotificationCenter';

interface DashboardProps {
  onNavigate: (view: ViewType) => void;
  onSelectStudent: (id: string) => void;
}

const Dashboard = ({ onNavigate, onSelectStudent }: DashboardProps) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [aiStatus, setAiStatus] = React.useState('');
  const [livePulse, setLivePulse] = React.useState(0);
  const [systemLogs, setSystemLogs] = React.useState<string[]>([]);
  
  const [notifications, setNotifications] = React.useState<Notification[]>([
    {
      id: '1',
      type: 'critical',
      title: 'Academic Risk Alert',
      message: 'AI mendeteksi penurunan drastis pada parameter akademik Budi Santoso.',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      isRead: false,
      studentId: '1',
      studentName: 'Budi Santoso',
      impactValue: '+24% Risk'
    },
    {
      id: '2',
      type: 'warning',
      title: 'Attendance Anomaly',
      message: 'Ketidakhadiran jam pertama meningkat di Kelas XI-IPA-2.',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      isRead: true,
    }
  ]);

  const unreadCount = notifications.filter(n => !n.isRead).length;
  
  React.useEffect(() => {
    const statuses = [
      'Analyzing attendance patterns...',
      'Generating behavioral insights...',
      'Updating prediction model...',
      'Scanning biometric vectors...',
      'Calculating dropout probability...',
      'Neural link optimization active...',
      'Syncing classroom metadata...'
    ];
    
    let i = 0;
    let charIndex = 0;
    let currentStatus = '';
    
    const typeInterval = setInterval(() => {
       if (charIndex < statuses[i].length) {
          currentStatus += statuses[i][charIndex];
          setAiStatus(currentStatus + '_');
          charIndex++;
       } else {
          setAiStatus(statuses[i]);
          clearInterval(typeInterval);
          setTimeout(() => {
             i = (i + 1) % statuses.length;
             charIndex = 0;
             currentStatus = '';
             startTyping();
          }, 3000);
       }
    }, 50);

    const startTyping = () => {
       // Logic handled inside the interval recursion above
    };

    const pulseInterval = setInterval(() => {
      setLivePulse(prev => prev + 1);
      const newLog = `[${new Date().toLocaleTimeString()}] NODE_SYNC: ${statuses[Math.floor(Math.random() * statuses.length)]} :: LATENCY ${Math.floor(Math.random() * 50) + 12}ms`;
      setSystemLogs(prev => [newLog, ...prev].slice(0, 6));
    }, 4000);

    return () => {
       clearInterval(typeInterval);
       clearInterval(pulseInterval);
    };
  }, []);

  const handleMarkAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

   const stats = [
    { label: 'Total Matrix', value: (1240 + (livePulse % 3)).toLocaleString(), change: '+12%', icon: Users, color: 'bg-blue-600', sub: 'Active Students', info: 'Live Synced' },
    { label: 'Neural Health', value: (88.4 + (Math.sin(livePulse) * 0.2)).toFixed(1) + '%', change: '+5%', icon: UserCheck, color: 'bg-emerald-500', sub: 'Performance Avg', info: 'Optimal' },
    { label: 'Supervision', value: (145 + (livePulse % 2)), change: '-2%', icon: ShieldAlert, color: 'bg-amber-500', sub: 'Observation Req', info: 'Pending' },
    { label: 'Critical Risk', value: (42 + (livePulse % 2)), change: '+8%', icon: TrendingDown, color: 'bg-rose-500', sub: 'Immediate Action', glow: true, info: 'Urgent' },
  ];

  const chartData = [
    { name: 'W1', performance: 72, risk: 20 },
    { name: 'W2', performance: 78, risk: 18 },
    { name: 'W3', performance: 75, risk: 22 },
    { name: 'W4', performance: 85, risk: 12 },
    { name: 'W5', performance: 82, risk: 15 },
    { name: 'W6', performance: 90, risk: 8 },
  ];

  const filteredStudents = DUMMY_STUDENTS.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.class.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-brand-background bg-mesh">
      
      {/* Sidebar - Premium Glass */}
      <aside className="w-72 bg-white/40 backdrop-blur-3xl border-r border-slate-200/50 hidden lg:flex flex-col sticky top-0 h-screen z-50">
        <div className="p-10 flex items-center gap-4 group cursor-pointer" onClick={() => onNavigate('landing')}>
          <div className="w-12 h-12 bg-slate-900 rounded-[20px] flex items-center justify-center text-white shadow-2xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
            <GraduationCap size={28} />
          </div>
          <div>
            <h1 className="logo-text text-2xl tracking-tighter leading-none mb-1">EduPulse</h1>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Neural v4.0</p>
          </div>
        </div>

        <nav className="flex-1 px-6 space-y-3">
          <SidebarItem icon={LayoutDashboard} label="Command Center" active />
          <SidebarItem icon={Globe} label="Executive Matrix" onClick={() => onNavigate('executive-overview')} />
          <SidebarItem icon={Activity} label="AI Analytics" onClick={() => onNavigate('ai-analysis')} />
          <SidebarItem icon={Mic} label="Voice AI" onClick={() => onNavigate('ai-voice')} />
          <SidebarItem icon={BrainCircuit} label="Neural Chat" onClick={() => onNavigate('ai-chat')} />
          <SidebarItem icon={Users} label="Student Matrix" />
          <SidebarItem icon={Calendar} label="Engagement Logs" />
          <SidebarItem icon={Database} label="Knowledge Base" />
          <SidebarItem icon={Settings} label="System Config" />
        </nav>

        <div className="p-8">
           <div className="p-6 bg-white rounded-[28px] relative overflow-hidden group border border-slate-100 shadow-sm">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Core Status</span>
                </div>
                <p className="text-xs text-slate-600 font-bold leading-relaxed mb-4">Pulse Engine is actively processing 4.2k data vectors.</p>
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                   <motion.div 
                    animate={{ width: ['20%', '80%', '40%'] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="h-full bg-brand-primary"
                   ></motion.div>
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
           </div>
        </div>

        <div className="p-6 border-t border-slate-200/50">
           <button 
             onClick={() => onNavigate('landing')}
             className="w-full flex items-center gap-4 px-6 py-4 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-2xl transition-all font-black text-[10px] uppercase tracking-widest"
           >
             <LogOut size={18} />
             System Termination
           </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Floating Glass Nav */}
        <header className="h-24 px-10 flex items-center justify-between sticky top-0 z-40">
           <div className="glass px-6 py-3 rounded-2xl flex items-center gap-4 border-slate-200 shadow-xl max-w-md w-full ring-1 ring-slate-100 shrink-0">
              <Search className="text-slate-400 shrink-0" size={18} />
              <input 
                type="text" 
                placeholder="Search neural matrix..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-sm font-bold text-slate-900 placeholder:text-slate-400 w-full"
              />
              <div className="hidden sm:flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg border border-slate-200">
                 <span className="text-[9px] font-black text-slate-400">⌘</span>
                 <span className="text-[9px] font-black text-slate-400">K</span>
              </div>
           </div>

           <div className="flex items-center gap-6 shrink-0">
              {/* AI Badge */}
              <div className="hidden xl:flex items-center gap-3 bg-white/80 backdrop-blur border border-slate-200 px-4 py-2 rounded-xl shadow-sm">
                 <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse shadow-[0_0_8px_#2563eb]"></div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Model Alpha v2</p>
              </div>

              <div className="flex items-center gap-2">
                 <button className="w-11 h-11 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-400 hover:bg-brand-primary hover:text-white transition-all hover:scale-105 active:scale-95 shadow-sm" onClick={() => setIsNotificationOpen(true)}>
                    <Bell size={20} />
                    {unreadCount > 0 && (
                      <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white animate-bounce"></span>
                    )}
                 </button>
                  <button className="w-11 h-11 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-400 hover:bg-brand-primary hover:text-white transition-all hover:scale-105 active:scale-95 shadow-sm" onClick={() => onNavigate('ai-voice')}>
                    <Mic size={20} />
                 </button>
                 <button className="w-11 h-11 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-white transition-all hover:scale-105 active:scale-95 shadow-sm">
                    <Scan size={20} />
                 </button>
              </div>

              <div className="h-10 w-px bg-slate-200 mx-2"></div>

              <div className="flex items-center gap-4 group cursor-pointer p-1 pr-4 bg-white backdrop-blur-md rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all shadow-sm">
                 <div className="w-10 h-10 rounded-xl border-2 border-slate-100 shadow-sm overflow-hidden group-hover:rotate-6 transition-transform">
                    <img src="https://i.pravatar.cc/100?u=admin" alt="" referrerPolicy="no-referrer" />
                 </div>
                 <div className="hidden md:block">
                    <p className="text-xs font-black text-slate-900 leading-none mb-1">Dr. Alex Rivera</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Executive Principal</p>
                 </div>
              </div>
           </div>
        </header>

        {/* Content Section */}
        <section className="px-10 py-6 space-y-10 relative">
           
           {/* Live Processing Banner */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.98 }}
             animate={{ opacity: 1, scale: 1 }}
             className="relative overflow-hidden p-8 bg-white rounded-[40px] shadow-2xl border border-slate-100"
           >
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-brand-primary rounded-[28px] flex items-center justify-center text-white shadow-2xl animate-pulse">
                       <Target size={32} />
                    </div>
                    <div>
                       <div className="flex items-center gap-3 mb-1">
                          <h2 className="text-2xl font-display font-black text-slate-900 tracking-tight">Strategy Execution Mode</h2>
                          <div className="px-2 py-0.5 bg-brand-primary/10 border border-brand-primary/20 rounded-lg text-[8px] font-black text-brand-primary uppercase tracking-[0.2em]">Alpha-01</div>
                       </div>
                       <div className="flex items-center gap-2">
                          <p className="text-sm font-medium text-slate-500">{aiStatus}</p>
                          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                          <p className="text-xs font-bold text-brand-success">98.4% Confidence</p>
                       </div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <button className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs font-black text-slate-400 uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all active:scale-95">View Neural Map</button>
                    <button className="px-8 py-3 bg-brand-primary text-white rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl shadow-blue-500/25 hover:bg-brand-secondary transition-all active:scale-95">Execute Interventions</button>
                 </div>
              </div>
              <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-slate-200 to-transparent"></div>
           </motion.div>

           {/* Stats Section with Hover Glow */}
           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={cn(
                    "relative overflow-hidden p-8 rounded-[36px] glass transition-all duration-500 group",
                    stat.glow ? "hover:glow-red" : "hover:glow-blue"
                  )}
                >
                   <div className="relative z-10 flex flex-col items-start gap-6">
                      <div className="flex items-center justify-between w-full">
                         <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl transition-all duration-700 group-hover:rotate-6 group-hover:scale-110", stat.color)}>
                            <stat.icon size={26} />
                         </div>
                         <div className={cn(
                           "flex items-center gap-1 px-3 py-1.5 rounded-xl border text-[10px] font-black uppercase tracking-wider",
                           stat.change.startsWith('+') ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-rose-50 text-rose-600 border-rose-100"
                         )}>
                            {stat.change.startsWith('+') ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                            {stat.change}
                         </div>
                      </div>
                      <div>
                         <div className="flex items-center gap-2 mb-1">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</p>
                            <span className="text-[8px] font-bold text-slate-300 bg-slate-900/50 px-1.5 py-0.5 rounded border border-white/5">{stat.info}</span>
                         </div>
                         <h3 className="text-4xl font-display font-black text-slate-900 tracking-tight leading-none mb-1">{stat.value}</h3>
                         <p className="text-[10px] font-bold text-slate-400 italic">"{stat.sub}"</p>
                      </div>
                   </div>
                   <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-slate-100/50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                   {stat.glow && <div className="absolute inset-0 ai-scanner opacity-10 pointer-events-none"></div>}
                </motion.div>
              ))}
           </div>

           {/* Main Data Section */}
           <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
              {/* Analytics Center */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="xl:col-span-8 p-10 bento-card relative overflow-hidden"
              >
                 <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
                    <div>
                        <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight mb-1">Global Performance Trajectory</h3>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Predictive Academic Modeling Active</p>
                    </div>
                    <div className="flex gap-4">
                       <span className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase">
                          <div className="w-2.5 h-2.5 rounded-full bg-brand-primary shadow-[0_0_8px_#2563eb]"></div>
                          Performance
                       </span>
                       <span className="flex items-center gap-2 text-[10px] font-black text-slate-500 uppercase">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                          Risk Shift
                       </span>
                    </div>
                 </div>

                 <div className="h-[400px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={chartData}>
                          <defs>
                             <linearGradient id="colorMainPerf" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                             </linearGradient>
                             <linearGradient id="colorMainRisk" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                             </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" strokeOpacity={0.4} />
                          <XAxis 
                             dataKey="name" 
                             axisLine={false} 
                             tickLine={false} 
                             tick={{ fontSize: 11, fill: '#94a3b8', fontWeight: 800 }} 
                             dy={15}
                          />
                          <YAxis hide domain={[0, 100]} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', backdropFilter: 'blur(10px)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.1)', overflow: 'hidden' }}
                            labelStyle={{ color: '#94a3b8', fontWeight: 800, fontSize: '10px', textTransform: 'uppercase', marginBottom: '12px' }}
                            itemStyle={{ color: '#fff', fontSize: '14px', fontWeight: 700 }}
                          />
                          <Area type="monotone" dataKey="performance" stroke="#2563eb" strokeWidth={5} fillOpacity={1} fill="url(#colorMainPerf)" animationDuration={3000} />
                          <Area type="monotone" dataKey="risk" stroke="#f43f5e" strokeWidth={5} fillOpacity={1} fill="url(#colorMainRisk)" animationDuration={3000} />
                       </AreaChart>
                    </ResponsiveContainer>
                 </div>
                 <div className="absolute inset-0 pointer-events-none ai-scanner opacity-5"></div>
              </motion.div>

              {/* Recommendation Panel */}
              <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.5 }}
                 className="xl:col-span-4 space-y-8"
              >
                 <div className="bento-card bg-white relative overflow-hidden group">
                    <div className="relative z-10">
                       <div className="flex items-center gap-3 mb-8">
                          <Sparkles className="text-brand-primary" size={24} />
                          <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em]">Daily AI Strategy</h3>
                       </div>
                       <div className="space-y-4">
                          <RecommendationItem 
                             icon={ShieldAlert}
                             title="Risk Protocol"
                             text="Urgent intervention needed for X-B cohort."
                             color="text-rose-600"
                          />
                          <RecommendationItem 
                             icon={Target}
                             title="Insight Shift"
                             text="XI-IPA-2 engagement index decreased by 12%."
                             color="text-amber-600"
                          />
                          <RecommendationItem 
                             icon={BrainCircuit}
                             title="System Prompt"
                             text="AI suggests rescheduling counseling session."
                             color="text-blue-600"
                          />
                       </div>
                       <button className="w-full mt-10 py-5 bg-slate-900 text-white rounded-3xl text-xs font-black uppercase tracking-widest shadow-2xl shadow-slate-900/30 hover:scale-[1.02] active:scale-95 transition-all">
                          Apply Intelligence
                       </button>
                    </div>
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/5 rounded-full blur-3xl"></div>
                 </div>

                 <div className="bento-card p-0 overflow-hidden relative group">
                    <div className="p-8 pb-4">
                       <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-1">Matrix Health</h3>
                       <p className="text-[10px] font-bold text-slate-400 uppercase italic">Cohort Safety Monitoring</p>
                    </div>
                    <div className="px-4 pb-8 space-y-4">
                       {[
                         { name: 'X-Matrix', score: 92, color: 'bg-emerald-500' },
                         { name: 'XI-Matrix', score: 68, color: 'bg-amber-500' },
                         { name: 'XII-Matrix', score: 85, color: 'bg-emerald-500' }
                       ].map((m, i) => (
                         <div key={i} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-xl transition-all">
                            <div className="flex justify-between items-center mb-2">
                               <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{m.name}</span>
                               <span className="text-[10px] font-black text-slate-500 uppercase">{m.score}% Stability</span>
                            </div>
                            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 animate={{ width: `${m.score}%` }}
                                 transition={{ duration: 1, delay: i * 0.2 }}
                                 className={cn("h-full rounded-full", m.color)}
                               ></motion.div>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </motion.div>
           </div>

           {/* Neural Terminal Simulation */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bento-card !bg-white p-0 border-slate-100 shadow-sm relative overflow-hidden group"
           >
              <div className="p-8 pb-4 flex items-center justify-between border-b border-slate-100">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                       <Terminal size={20} />
                    </div>
                    <div>
                       <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest leading-none mb-1">PulseEngine Core Neural Terminal</h3>
                       <p className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.3em] italic">Realtime Biometric Vector Extraction :: Port 8080 Active</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                       {[0, 1, 2].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>)}
                    </div>
                 </div>
              </div>
              <div className="p-8 font-mono text-[9px] min-h-[180px] max-h-[300px] overflow-y-auto no-scrollbar space-y-2 relative">
                 <AnimatePresence>
                    {systemLogs.map((log, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-slate-500 border-l-2 border-slate-200 pl-4 py-1.5 hover:bg-slate-50 transition-colors"
                      >
                         <span className="text-slate-400 font-black opacity-50 mr-2">{'>'}</span> 
                         <span className={cn(log.includes('CRITICAL') ? "text-rose-500 font-black" : log.includes('Analyzing') ? "text-slate-900" : "")}>{log}</span>
                      </motion.div>
                    ))}
                 </AnimatePresence>
                 <div className="flex items-center gap-3 text-emerald-600 mt-6 pt-4 border-t border-slate-100">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                    <p className="font-bold uppercase tracking-widest text-[8px] opacity-70">Neural Link Stabilized (12.4ms) :: Sub-Matrix Monitoring Active</p>
                 </div>
              </div>
           </motion.div>

           {/* Full Matrix Table */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             viewport={{ once: true }}
             className="bento-card !p-0 overflow-hidden shadow-2xl"
           >
              <div className="p-10 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                 <div>
                    <h3 className="text-2xl font-display font-black text-slate-900 tracking-tight">Active Student Biometric Matrix</h3>
                    <p className="text-sm font-medium text-slate-400 italic">Analyzing 452 multidimensional data units per student.</p>
                 </div>
                 <div className="flex gap-4">
                    <button className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-all">Filter Matrix</button>
                    <button className="px-8 py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-brand-primary transition-all">Matrix Expansion</button>
                 </div>
              </div>
              
              <div className="overflow-x-auto no-scrollbar">
                 <table className="w-full text-left">
                    <thead className="bg-slate-50/50">
                       <tr>
                          <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Identity Node</th>
                          <th className="px-6 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Cohort</th>
                          <th className="px-6 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Engagement Index</th>
                          <th className="px-6 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Risk Potential</th>
                          <th className="px-6 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">AI Decision Status</th>
                          <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] text-right">Integrate</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                       {filteredStudents.slice(0, 10).map((student, i) => (
                         <tr 
                          key={student.id} 
                          className="hover:bg-blue-50/30 transition-all group cursor-pointer"
                          onClick={() => onSelectStudent(student.id)}
                         >
                            <td className="px-10 py-6">
                               <div className="flex items-center gap-5">
                                  <div className="w-12 h-12 rounded-[18px] bg-white p-0.5 border border-slate-200 shadow-sm group-hover:rotate-6 transition-transform">
                                      <img src={`https://i.pravatar.cc/150?u=${student.id}`} alt="" className="w-full h-full rounded-[16px]" referrerPolicy="no-referrer" />
                                  </div>
                                  <div>
                                     <p className="text-sm font-black text-slate-900">{student.name}</p>
                                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">NODE_X{student.id}42</p>
                                  </div>
                               </div>
                            </td>
                            <td className="px-6 py-6">
                               <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-[10px] font-black text-slate-600 uppercase tracking-widest">{student.class}</span>
                            </td>
                            <td className="px-6 py-6">
                               <div className="flex items-center gap-4">
                                  <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                                     <motion.div 
                                       initial={{ width: 0 }}
                                       animate={{ width: `${student.attendance}%` }}
                                       transition={{ duration: 1, delay: 0.8 + i * 0.05 }}
                                       className={cn("h-full rounded-full", student.attendance > 80 ? "bg-emerald-500 shadow-[0_0_8px_#10b981]" : student.attendance > 60 ? "bg-amber-500 shadow-[0_0_8px_#f59e0b]" : "bg-rose-500 shadow-[0_0_8px_#ef4444]")}
                                     ></motion.div>
                                  </div>
                                  <span className="text-[10px] font-black text-slate-700">{student.attendance}%</span>
                               </div>
                            </td>
                            <td className="px-6 py-6">
                               <span className={cn(
                                 "text-sm font-black tracking-tight",
                                 student.riskScore > 70 ? "text-rose-600" : student.riskScore > 30 ? "text-amber-600" : "text-emerald-600"
                               )}>{student.riskScore}.00</span>
                            </td>
                            <td className="px-6 py-6">
                               <div className={cn(
                                 "inline-flex items-center gap-3 px-4 py-2 rounded-2xl text-[9px] font-black uppercase tracking-[0.1em] border shadow-sm transition-all group-hover:scale-105",
                                 student.riskScore > 70 ? "bg-rose-50 text-rose-600 border-rose-100" : 
                                 student.riskScore > 30 ? "bg-amber-50 text-amber-600 border-amber-100" : 
                                 "bg-emerald-50 text-emerald-600 border-emerald-100"
                               )}>
                                  <div className={cn("w-1.5 h-1.5 rounded-full", student.riskScore > 70 ? "bg-rose-500 animate-pulse" : "bg-current")}></div>
                                  {student.riskScore > 70 ? 'Critical Alert' : student.riskScore > 30 ? 'High Monitor' : 'System Verified'}
                               </div>
                            </td>
                            <td className="px-10 py-6 text-right">
                               <div className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-[14px] text-slate-400 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary group-hover:scale-110 transition-all ml-auto shadow-sm">
                                  <ChevronRight size={18} />
                               </div>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
              <div className="p-8 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Showing 10 Units out of 1,240 Total Nodes</p>
                 <div className="flex gap-2">
                    {[1, 2, 3].map(n => <button key={n} className={cn("w-8 h-8 rounded-lg text-[10px] font-black transition-all", n === 1 ? "bg-slate-900 text-white" : "text-slate-400 hover:bg-white hover:shadow-sm")}>{n}</button>)}
                 </div>
              </div>
           </motion.div>
        </section>

        {/* Floating Chat Trigger */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onNavigate('ai-chat')}
          className="fixed bottom-10 right-10 w-20 h-20 bg-slate-900 text-white rounded-[32px] shadow-2xl flex items-center justify-center group z-[60] border border-slate-200 hover:-translate-y-2 transition-all overflow-hidden"
        >
          <div className="absolute inset-0 bg-brand-primary opacity-0 group-hover:opacity-30 transition-opacity"></div>
          <BrainCircuit size={32} className="relative z-10 group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-[3px] border-white shadow-sm animate-pulse"></div>
          <div className="ai-scanner absolute inset-0 opacity-10 pointer-events-none"></div>
        </motion.button>
        
        <NotificationCenter 
          isOpen={isNotificationOpen}
          notifications={notifications}
          onClose={() => setIsNotificationOpen(false)}
          onMarkAsRead={handleMarkAsRead}
        />
      </main>
    </div>
  );
};

const SidebarItem = ({ icon: Icon, label, active = false, onClick }: any) => (
  <button 
    onClick={onClick}
    className={cn(
    "w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-black text-[10px] uppercase tracking-[0.2em] relative overflow-hidden group",
    active ? "bg-slate-900 text-white shadow-2xl" : "text-slate-400 hover:text-slate-900 hover:bg-white/60"
  )}>
    <Icon size={18} className={cn("transition-transform group-hover:scale-110", active ? "text-brand-primary" : "")} />
    {label}
    {active && <div className="absolute top-0 right-0 h-full w-1.5 bg-brand-primary"></div>}
  </button>
);

const RecommendationItem = ({ icon: Icon, title, text, color }: any) => (
  <div className="flex gap-4 group cursor-pointer">
     <div className={cn("mt-1 w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shadow-inner group-hover:scale-110 transition-all duration-500", color)}>
        <Icon size={18} />
     </div>
     <div>
        <p className={cn("text-[10px] font-black uppercase tracking-widest mb-1", color)}>{title}</p>
        <p className="text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors">{text}</p>
     </div>
  </div>
);

export default Dashboard;
