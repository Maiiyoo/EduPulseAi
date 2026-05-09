import React from 'react';
import { 
  Bell, 
  X, 
  ShieldAlert, 
  AlertTriangle, 
  Info, 
  Lightbulb, 
  CheckCircle2, 
  Clock, 
  Activity,
  MoreVertical,
  ChevronRight,
  Filter,
  Eye,
  Zap,
  Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Notification } from '../types';

interface Props {
  notifications: Notification[];
  isOpen: boolean;
  onClose: () => void;
  onMarkAsRead: (id: string) => void;
}

const NotificationCenter = ({ notifications, isOpen, onClose, onMarkAsRead }: Props) => {
  const [filter, setFilter] = React.useState<Notification['type'] | 'all'>('all');

  const filteredNotifications = notifications.filter(n => 
    filter === 'all' ? true : n.type === filter
  );

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'critical': return <ShieldAlert size={20} className="text-rose-400" />;
      case 'warning': return <AlertTriangle size={20} className="text-amber-400" />;
      case 'info': return <Info size={20} className="text-brand-primary" />;
      case 'recommendation': return <Lightbulb size={20} className="text-indigo-400" />;
      default: return <CheckCircle2 size={20} className="text-emerald-400" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
          />

          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[500px] bg-slate-950/95 border-l border-white/10 backdrop-blur-3xl z-[101] flex flex-col shadow-[-40px_0_100px_rgba(0,0,0,0.5)]"
          >
            {/* Header - Dark Mode Cinematic */}
            <div className="p-10 border-b border-white/5 flex items-center justify-between relative overflow-hidden">
              <div className="flex items-center gap-6 relative z-10">
                 <div className="w-14 h-14 bg-brand-primary/10 border border-brand-primary/30 rounded-[20px] flex items-center justify-center text-brand-primary glow-blue relative">
                    <Bell size={28} />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full border-4 border-slate-950"></div>
                 </div>
                 <div>
                    <h2 className="text-2xl font-display font-black text-white tracking-tighter">Neural Alerts</h2>
                    <div className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse px-0 py-0"></span>
                       <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Surveillance: ONLINE</p>
                    </div>
                 </div>
              </div>
              <button 
                onClick={onClose}
                className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-slate-500 hover:text-white transition-all hover:rotate-90 active:scale-90"
              >
                <X size={24} />
              </button>
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-[80px]"></div>
            </div>

            {/* Matrix Filter Bar */}
            <div className="px-8 py-6 border-b border-white/5 flex gap-3 overflow-x-auto no-scrollbar bg-black/20">
               {['all', 'critical', 'warning', 'info', 'recommendation'].map((f) => (
                 <button 
                  key={f}
                  onClick={() => setFilter(f as any)}
                  className={cn(
                    "px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] border transition-all whitespace-nowrap",
                    filter === f 
                      ? "bg-brand-primary text-white border-brand-primary shadow-[0_0_15px_rgba(37,99,235,0.4)]" 
                      : "bg-white/5 text-slate-500 border-white/10 hover:border-white/20 hover:text-slate-300"
                  )}
                 >
                   {f}
                 </button>
               ))}
            </div>

            {/* Neural Feed */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar">
               {filteredNotifications.length === 0 ? (
                 <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                    <Activity size={64} className="text-slate-700 mb-6 animate-pulse" />
                    <p className="text-xs font-black text-slate-600 uppercase tracking-[0.3em]">Neural link scanning for signals...</p>
                 </div>
               ) : (
                 filteredNotifications.map((n, i) => (
                   <motion.div 
                    key={n.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => onMarkAsRead(n.id)}
                    className={cn(
                      "group p-8 border rounded-[32px] transition-all cursor-pointer relative overflow-hidden",
                      n.type === 'critical' ? "bg-rose-500/5 border-rose-500/20" : 
                      n.type === 'warning' ? "bg-amber-500/5 border-amber-500/20" : 
                      "bg-white/5 border-white/10",
                      !n.isRead ? "shadow-2xl shadow-black/20" : "opacity-50"
                    )}
                   >
                     {!n.isRead && (
                       <div className="absolute top-8 right-8 w-2 h-2 bg-brand-primary rounded-full shadow-[0_0_10px_#2563eb]"></div>
                     )}

                     <div className="flex gap-6 relative z-10">
                        <div className="w-14 h-14 bg-black/40 border border-white/10 rounded-2xl flex items-center justify-center shadow-inner shrink-0 group-hover:scale-110 transition-transform duration-500">
                           {getIcon(n.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                           <div className="flex items-center justify-between mb-2">
                              <p className={cn(
                                "text-[10px] font-black uppercase tracking-[0.2em]",
                                n.type === 'critical' ? "text-rose-400" : "text-brand-primary"
                              )}>{n.type} Signal</p>
                              <span className="text-[9px] font-bold text-slate-500 flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full">
                                <Clock size={10} />
                                {n.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </span>
                           </div>
                           <h3 className="text-lg font-display font-black text-white mb-2 group-hover:text-brand-primary transition-colors tracking-tight">{n.title}</h3>
                           <p className="text-sm font-medium text-slate-400 leading-relaxed mb-6">{n.message}</p>
                           
                           {n.studentName && (
                             <div className="p-4 bg-black/40 border border-white/5 rounded-2xl flex items-center justify-between group/student hover:border-brand-primary/30 transition-all">
                                <div className="flex items-center gap-4">
                                   <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 grayscale group-hover/student:grayscale-0 transition-all">
                                      <img src={`https://i.pravatar.cc/100?u=${n.studentId}`} alt="" referrerPolicy="no-referrer" />
                                   </div>
                                   <div>
                                      <p className="text-xs font-black text-white leading-none mb-1">{n.studentName}</p>
                                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                                        <Target size={10} /> Behavior Vector Locked
                                      </p>
                                   </div>
                                </div>
                                <div className={cn(
                                  "px-3 py-1.5 rounded-xl text-[10px] font-black tracking-widest border",
                                  n.type === 'critical' ? "text-rose-400 border-rose-500/20 bg-rose-500/10" : "text-brand-primary border-brand-primary/20 bg-brand-primary/10"
                                )}>
                                   {n.impactValue}
                                </div>
                             </div>
                           )}

                           <div className="mt-8 flex items-center justify-between">
                              <div className="flex -space-x-2">
                                 {[1, 2].map(i => (
                                   <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-[8px] font-black text-slate-500">AI</div>
                                 ))}
                              </div>
                              <button className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2 hover:bg-brand-primary hover:border-brand-primary transition-all group/btn">
                                <Eye size={14} />
                                Audit Data
                                <ChevronRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                              </button>
                           </div>
                        </div>
                     </div>
                     
                     <div className="ai-scanner absolute inset-0 opacity-10 pointer-events-none"></div>
                   </motion.div>
                 ))
               )}
            </div>

            {/* Footer - Command Bar */}
            <div className="p-10 bg-black/60 border-t border-white/5 flex flex-col gap-6">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <Zap size={16} className="text-indigo-400" />
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Neural Encryption Key Locked</p>
                  </div>
                  <button className="text-[10px] font-black text-brand-primary hover:text-brand-secondary transition-all uppercase tracking-[0.2em] underline underline-offset-4">Archive All Signals</button>
               </div>
               <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="w-1/3 h-full bg-brand-primary shadow-[0_0_10px_#2563eb]"></motion.div>
               </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotificationCenter;
