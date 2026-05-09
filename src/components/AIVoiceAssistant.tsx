import React, { useState, useEffect, useRef } from 'react';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  X, 
  BrainCircuit, 
  Zap, 
  Target, 
  ShieldAlert, 
  TrendingUp, 
  ArrowRight,
  Sparkles,
  Cpu,
  Activity,
  MessageSquare,
  AlertTriangle,
  CheckCircle2,
  Lock,
  Terminal,
  Waves
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { DUMMY_STUDENTS } from '../constants';

interface Props {
  onBack: () => void;
}

const AIVoiceAssistant = ({ onBack }: Props) => {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<number | null>(null);
  const [transcript, setTranscript] = useState('');
  const [recommendations, setRecommendations] = useState<any[]>([]);

  const waveData = Array.from({ length: 40 }, (_, i) => i);

  const presets = [
    "Identify high-risk students",
    "Class performance summary",
    "Counseling recommendations",
    "Attendance anomalies",
    "Dropout prediction report"
  ];

  const handleListen = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const startListening = () => {
    setIsListening(true);
    setResponse(null);
    setTranscript('');
    setRecommendations([]);
    
    // Simulate speech recognition
    setTimeout(() => {
      setTranscript("Siswa mana yang paling berisiko minggu ini?");
      setTimeout(() => {
        stopListening();
      }, 2000);
    }, 1000);
  };

  const stopListening = () => {
    setIsListening(false);
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const result = generateAIResponse(transcript);
      setResponse(result.text);
      setConfidence(result.confidence);
      setRecommendations(result.data || []);
      setIsProcessing(false);
    }, 2500);
  };

  const generateAIResponse = (query: string) => {
    const q = query.toLowerCase();
    const highRisk = DUMMY_STUDENTS.filter(s => s.riskScore > 70);
    
    if (q.includes('risiko') || q.includes('risk')) {
      return {
        text: `Berdasarkan analisis Neural Core, terdapat ${highRisk.length} siswa dengan indeks risiko kritis. Prioritas tertinggi adalah ${highRisk[0].name} dengan skor risiko ${highRisk[0].riskScore} akibat anomali absensi di Kelas ${highRisk[0].class}.`,
        confidence: 98.4,
        data: highRisk.slice(0, 2)
      };
    }

    return {
      text: "Saya telah mensinkronisasi data matriks terbaru. Efektivitas akademik kelas XI meningkat 4.2% minggu ini, namun terdapat peringatan drift pada parameter kehadiran di blok B.",
      confidence: 95.8,
      data: DUMMY_STUDENTS.filter(s => s.riskStatus === 'Warning').slice(0, 2)
    };
  };

  return (
    <div className="fixed inset-0 z-[200] bg-brand-background text-slate-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Neural Grid */}
      <div className="absolute inset-0 neural-grid opacity-[0.05]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.02] via-transparent to-indigo-500/[0.02]"></div>
      
      {/* AI Scan Line */}
      <div className="ai-scan-line opacity-[0.05]"></div>

      {/* Header Nav */}
      <div className="absolute top-0 left-0 right-0 p-10 flex items-center justify-between z-50">
         <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-2xl">
               <BrainCircuit size={28} />
            </div>
            <div>
               <h2 className="text-2xl font-display font-black text-slate-900 tracking-tighter uppercase italic">EduPulse Voice AI</h2>
               <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse px-0 py-0 shadow-[0_0_8px_#10b981]"></div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Neural Link: ACTIVE</p>
               </div>
            </div>
         </div>
         <button 
           onClick={onBack}
           className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all active:scale-95 group shadow-sm"
         >
            <X size={24} className="group-hover:rotate-90 transition-transform" />
         </button>
      </div>

      {/* Central Voice Orb Visualization */}
      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl w-full px-10">
         <div className="relative mb-24">
            {/* Holographic Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-16 border border-dashed border-blue-500/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-dashed border-indigo-500/20 rounded-full"
            />
            
            {/* The Orb */}
            <div className="relative w-48 h-48">
               <motion.div 
                 animate={{ 
                    scale: isListening ? [1, 1.2, 1] : isProcessing ? [1, 1.05, 1] : 1,
                    opacity: isListening ? [0.6, 1, 0.6] : 1
                 }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className={cn(
                    "w-full h-full rounded-full blur-3xl absolute inset-0 transition-colors duration-1000",
                    isListening ? "bg-blue-500/40" : isProcessing ? "bg-indigo-500/40" : "bg-brand-primary/20"
                 )}
               />
               
               <button 
                 onClick={handleListen}
                 className={cn(
                    "w-full h-full rounded-full border-4 flex items-center justify-center relative z-20 group transition-all duration-500",
                    isListening ? "bg-blue-600 border-blue-400 shadow-[0_0_50px_rgba(37,99,235,0.5)]" : 
                    isProcessing ? "bg-indigo-600 border-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.5)]" :
                    "bg-slate-900 border-white/5 hover:border-brand-primary/50 shadow-2xl"
                 )}
               >
                  {isListening ? <Mic size={48} className="text-white animate-pulse" /> : 
                   isProcessing ? <Activity size={48} className="text-white animate-spin duration-[3s]" /> : 
                   <Mic size={48} className="text-brand-primary group-hover:scale-110 transition-transform" />}
               </button>

               {/* Waveform Animation */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] flex items-center justify-center gap-1.5 opacity-30 pointer-events-none">
                  {waveData.map((i) => (
                    <motion.div 
                      key={i}
                      animate={{ 
                        height: isListening ? [10, Math.random() * 80 + 20, 10] : 4,
                        opacity: isListening ? 1 : 0.2
                      }}
                      transition={{ 
                        duration: 0.4, 
                        repeat: Infinity, 
                        delay: i * 0.05,
                        ease: "easeInOut"
                      }}
                      className="w-1 bg-brand-primary rounded-full"
                    />
                  ))}
               </div>
            </div>
         </div>

         {/* Interaction Feed */}
         <AnimatePresence mode="wait">
            {isListening ? (
              <motion.div 
                key="listening"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center space-y-6"
              >
                 <p className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-400 animate-pulse">Listening for Voice Stream...</p>
                 <h3 className="text-3xl font-display font-black text-slate-900 italic tracking-tight">"{transcript || 'Waiting for input...'}"</h3>
              </motion.div>
            ) : isProcessing ? (
              <motion.div 
                key="processing"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                className="text-center space-y-8"
              >
                 <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-2">
                       {[0, 1, 2].map(i => (
                         <motion.div 
                           key={i}
                           animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                           transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                           className="w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_15px_#3b82f6]"
                         />
                       ))}
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">Synthesizing Neural Insight</p>
                 </div>
                 <p className="text-slate-500 font-bold max-w-sm mx-auto leading-relaxed">Processing multi-dimensional biometric markers against historical academic performance...</p>
              </motion.div>
            ) : response ? (
              <motion.div 
                key="response"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full space-y-12"
              >
                 <div className="p-10 bg-white border border-slate-100 rounded-[48px] relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-10 p-6 flex items-center gap-3">
                       <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Confidence Index</span>
                       <span className="text-sm font-black text-brand-primary">{confidence}%</span>
                    </div>
                    
                    <div className="flex gap-8 items-start relative z-10">
                       <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-brand-primary shrink-0 relative overflow-hidden">
                          <Cpu size={32} />
                       </div>
                       <div className="flex-1 pt-2">
                          <p className="text-xl font-medium leading-relaxed text-slate-900">
                             {response}
                          </p>
                       </div>
                    </div>
                    
                    {recommendations.length > 0 && (
                      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 pt-10 border-t border-slate-100">
                         {recommendations.map((s) => (
                           <div key={s.id} className="p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:border-brand-primary transition-all group flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                 <div className="w-10 h-10 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                                    <img src={`https://i.pravatar.cc/100?u=${s.id}`} alt="" referrerPolicy="no-referrer" />
                                 </div>
                                 <div>
                                    <p className="text-xs font-black text-slate-900 leading-none mb-1">{s.name}</p>
                                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                                       <ShieldAlert size={10} className="text-rose-600" />
                                       Risk Locked: {s.riskScore}%
                                    </p>
                                 </div>
                              </div>
                              <ArrowRight size={18} className="text-slate-400 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                           </div>
                         ))}
                      </div>
                    )}
                    
                    <div className="ai-scan-line opacity-[0.03]"></div>
                 </div>

                 <div className="flex items-center justify-center gap-6">
                    <button 
                      onClick={() => { setResponse(null); setRecommendations([]); }}
                      className="px-10 py-5 bg-white/5 border border-white/10 rounded-[28px] text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white/10 transition-all"
                    >
                       Clear Session
                    </button>
                    <button 
                      onClick={handleListen}
                      className="px-10 py-5 bg-brand-primary text-white rounded-[28px] text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl shadow-blue-500/20 hover:bg-brand-secondary transition-all flex items-center gap-3"
                    >
                       <Zap size={16} />
                       New Query
                    </button>
                 </div>
              </motion.div>
            ) : (
              <motion.div 
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center space-y-12"
              >
                  <div className="space-y-4">
                    <h3 className="text-3xl font-display font-black text-slate-900 tracking-tighter">Synchronize with Neural Voice Matrix</h3>
                    <p className="text-slate-500 font-bold max-w-lg mx-auto">Tap the neural orb to initiate high-fidelity institutional audit or strategic planning via voice commands.</p>
                 </div>

                 <div className="flex flex-wrap justify-center gap-3">
                    {presets.map((p, i) => (
                      <button 
                        key={i}
                        onClick={() => { 
                           setTranscript(p);
                           setTimeout(stopListening, 500);
                        }}
                        className="px-6 py-3 bg-white border border-slate-200 rounded-2xl text-[9px] font-black text-slate-400 uppercase tracking-widest hover:border-brand-primary hover:text-slate-900 hover:scale-105 transition-all shadow-sm"
                      >
                         {p}
                      </button>
                    ))}
                 </div>
              </motion.div>
            )}
         </AnimatePresence>
      </div>

      {/* Footer Simulation Details */}
      <div className="absolute bottom-12 left-12 flex gap-12 opacity-30 z-10">
         <div>
             <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Signal Strength</p>
             <div className="flex gap-0.5">
                {[1, 1, 1, 1, 0.4].map((v, i) => <div key={i} className="w-1.5 h-3 bg-brand-primary rounded-[2px]" style={{ opacity: v }}></div>)}
             </div>
          </div>
          <div>
             <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Voice Encryption</p>
             <p className="text-xs font-black text-slate-900 flex items-center gap-1"><Lock size={10} /> AES-256</p>
          </div>
      </div>

      {/* Side Status Indicators */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-8 opacity-20 z-10 items-end">
         <div className="text-right">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4">Neural Nodes</p>
            <div className="space-y-2">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="flex items-center gap-3 justify-end">
                    <span className="text-[8px] font-bold text-slate-400 italic tracking-widest">Node_Cluster_{i}</span>
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default AIVoiceAssistant;
