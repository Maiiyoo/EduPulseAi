import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  Bot, 
  User, 
  ArrowLeft, 
  Sparkles, 
  ShieldAlert, 
  TrendingDown, 
  Users, 
  MessageSquare,
  Search,
  MoreHorizontal,
  BrainCircuit,
  Zap,
  Target,
  ChevronRight,
  Activity,
  Maximize2,
  Terminal,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { DUMMY_STUDENTS } from '../constants';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  type?: 'text' | 'analysis' | 'recommendation';
  data?: any;
}

interface Props {
  onBack: () => void;
}

const AIChat = ({ onBack }: Props) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'System initialized. Neural link established. I am EduPulse Intelligence v4.0. I have full access to current biometric cohorts. How shall we proceed with the strategic analysis?',
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "Identify high-risk units",
    "Analyze cohort XI-IPA-2",
    "Predict dropout trajectory",
    "Generate intervention strategy",
    "Engagement anomaly detected"
  ];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAIResponse(text);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.text,
        timestamp: new Date(),
        type: response.type,
        data: response.data
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (query: string) => {
    const q = query.toLowerCase();
    
    if (q.includes('risk') || q.includes('risiko')) {
      const highRiskStudents = DUMMY_STUDENTS.filter(s => s.riskScore > 70);
      return {
        text: `Neural scan complete. Identified ${highRiskStudents.length} biometric units with high risk indices. Primary vector warning for ${highRiskStudents[0].name} (Score: ${highRiskStudents[0].riskScore}). Strategy suggested: Immediate parental synchronization.`,
        type: 'analysis' as const,
        data: highRiskStudents
      };
    }

    if (q.includes('counseling') || q.includes('strategy') || q.includes('intervensi')) {
      const warningStudents = DUMMY_STUDENTS.filter(s => s.riskStatus === 'Warning');
      return {
        text: `Based on behavioral drift analysis, I recommend deploying preventive protocols for ${warningStudents.length} units in 'Warning' status. These units exhibit negative engagement trajectories.`,
        type: 'recommendation' as const,
        data: warningStudents
      };
    }

    return {
      text: "Query received. Processing multi-dimensional data vectors... I require further input parameters to provide a non-destructive analysis of specific biometric clusters.",
      type: 'text' as const
    };
  };

  return (
    <div className="flex bg-brand-background bg-mesh min-h-screen">
      {/* Sidebar - Terminal Style */}
      <aside className="w-80 bg-white border-r border-slate-100 hidden lg:flex flex-col h-screen sticky top-0">
          <div className="p-8 border-b border-slate-100 flex items-center gap-4 relative z-10">
             <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-2xl">
                <BrainCircuit size={28} />
             </div>
             <div>
                <h1 className="text-slate-900 text-lg font-display font-black tracking-tighter">Neural Chat</h1>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Assistant v4.0.2</p>
             </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
             <div>
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                   <Target size={12} className="text-brand-primary" />
                   Priority Vectors
                </h3>
                <div className="space-y-3">
                   {DUMMY_STUDENTS.slice(0, 3).map(s => (
                     <div key={s.id} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-3 hover:bg-white hover:shadow-xl transition-all cursor-pointer group">
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 overflow-hidden shrink-0">
                           <img src={`https://i.pravatar.cc/100?u=${s.id}`} alt="" referrerPolicy="no-referrer" />
                        </div>
                        <div className="flex-1 min-w-0">
                           <p className="text-xs font-bold text-slate-900 truncate">{s.name}</p>
                           <p className="text-[9px] font-bold text-rose-600 uppercase tracking-widest">{s.riskScore}% RISK</p>
                        </div>
                        <ChevronRight size={14} className="text-slate-400 group-hover:text-slate-900" />
                     </div>
                   ))}
                </div>
             </div>

             <div>
                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                   <Terminal size={12} className="text-slate-900" />
                   Recent Analysis
                </h3>
                <div className="space-y-2">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-3 hover:bg-white hover:shadow-sm transition-all cursor-pointer">
                        <MessageSquare size={14} className="text-slate-400" />
                        <p className="text-[10px] font-medium text-slate-500 truncate">Cognitive drift report #{i}42</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>

          <div className="p-6 border-t border-slate-100">
             <div className="p-5 bg-blue-50 border border-blue-100 rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                   <Cpu size={16} className="text-brand-primary" />
                   <p className="text-[10px] font-black text-brand-primary uppercase tracking-widest">Neural Load</p>
                </div>
                <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                   <motion.div animate={{ width: '42%' }} className="h-full bg-brand-primary"></motion.div>
                </div>
             </div>
          </div>
      </aside>

      {/* Main Chat Interface */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Chat Header */}
        <header className="h-20 bg-white/40 backdrop-blur-3xl border-b border-slate-200/50 px-10 flex items-center justify-between z-40 sticky top-0">
           <div className="flex items-center gap-6">
              <button 
                onClick={onBack}
                className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-brand-primary hover:border-brand-primary transition-all active:scale-95 shadow-sm"
              >
                <ArrowLeft size={20} />
              </button>
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-xl shadow-slate-900/20">
                    <Activity size={20} />
                 </div>
                 <div>
                    <p className="text-sm font-black text-slate-900 leading-none mb-1">Strategic AI Module</p>
                    <div className="flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-brand-success rounded-full animate-pulse px-0 py-0"></span>
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Realtime Synapse ACTIVE</span>
                    </div>
                 </div>
              </div>
           </div>

           <div className="flex items-center gap-4">
              <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-slate-900 transition-all shadow-sm">
                 <Maximize2 size={18} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-slate-900 transition-all shadow-sm">
                 <MoreHorizontal size={20} />
              </button>
           </div>
        </header>

        {/* Message Pool */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-10 space-y-10 no-scrollbar scroll-smooth"
        >
          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={cn(
                  "flex gap-6 max-w-4xl",
                  message.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-2xl shrink-0 flex items-center justify-center shadow-2xl transition-all duration-500",
                  message.role === 'assistant' ? "bg-slate-900 text-brand-primary" : "bg-brand-primary text-white"
                )}>
                  {message.role === 'assistant' ? <Bot size={24} /> : <User size={24} />}
                </div>
                <div className={cn(
                  "space-y-4 flex-1",
                  message.role === 'user' ? "text-right" : ""
                )}>
                  <div className={cn(
                    "p-8 rounded-[32px] text-sm font-medium leading-relaxed shadow-xl border relative overflow-hidden",
                    message.role === 'assistant' ? "bg-white border-slate-100 text-slate-900 hologram-effect" : "bg-slate-900 border-white/10 text-white"
                  )}>
                    {message.role === 'assistant' && <div className="ai-scan-line opacity-[0.03]"></div>}
                    <div className="whitespace-pre-wrap relative z-10">{message.content}</div>
                    
                    {/* Visual Rich Components */}
                    {message.type === 'analysis' && message.data && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                         {message.data.slice(0, 2).map((s: any) => (
                           <div key={s.id} className="p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:border-brand-primary transition-all cursor-pointer group/item">
                              <div className="flex items-center gap-4 mb-4">
                                 <div className="w-10 h-10 rounded-xl overflow-hidden grayscale group-hover/item:grayscale-0 transition-all">
                                    <img src={`https://i.pravatar.cc/100?u=${s.id}`} alt="" referrerPolicy="no-referrer" />
                                 </div>
                                 <div className="flex-1 min-w-0">
                                    <p className="text-sm font-black text-slate-900 truncate">{s.name}</p>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.class}</p>
                                 </div>
                              </div>
                              <div className="flex justify-between items-center py-2 border-t border-slate-200/50">
                                 <span className="text-[9px] font-black text-slate-400 uppercase">Neural Risk Index</span>
                                 <span className="text-sm font-black text-rose-600">{s.riskScore}.00</span>
                              </div>
                           </div>
                         ))}
                      </div>
                    )}
                  </div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-4">
                     {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-6 mr-auto">
               <div className="w-12 h-12 rounded-2xl bg-slate-900 text-brand-primary flex items-center justify-center">
                  <Bot size={24} />
               </div>
               <div className="p-6 bg-white border border-slate-100 rounded-[32px] flex items-center gap-2 shadow-xl">
                  <span className="w-2 h-2 bg-brand-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-brand-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-brand-primary rounded-full animate-bounce"></span>
               </div>
            </motion.div>
          )}
        </div>

        {/* Interaction Surface */}
        <div className="p-10 border-t border-slate-200/50 bg-white/30 backdrop-blur-xl">
           {/* Dynamic Commands */}
           <div className="flex gap-3 overflow-x-auto pb-6 no-scrollbar">
              {suggestions.map((s, i) => (
                <button 
                  key={i}
                  onClick={() => handleSend(s)}
                  className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-black text-slate-500 uppercase tracking-widest hover:border-brand-primary hover:text-brand-primary hover:scale-105 active:scale-95 transition-all shadow-sm whitespace-nowrap"
                >
                   {s}
                </button>
              ))}
           </div>

           <form 
             onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
             className="relative max-w-5xl mx-auto"
           >
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400">
                 <Zap size={20} />
              </div>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Synchronize with intelligence network..."
                className="w-full bg-white border-2 border-slate-100 rounded-[32px] px-16 py-6 text-sm font-bold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 transition-all shadow-2xl"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isTyping}
                className="absolute right-3 top-3 bottom-3 px-8 bg-slate-900 text-brand-primary rounded-[24px] flex items-center justify-center gap-3 hover:bg-black transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                 <span className="text-[10px] font-black uppercase tracking-widest text-white">Execute</span>
                 <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
           </form>
           <p className="text-center mt-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest">End-to-end encrypted neural session. System logs active.</p>
        </div>
      </main>
    </div>
  );
};

export default AIChat;
