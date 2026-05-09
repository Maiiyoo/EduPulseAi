import { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import StudentDetail from './components/StudentDetail';
import AIChat from './components/AIChat';
import AIAnalytics from './components/AIAnalytics';
import ExecutiveOverview from './components/ExecutiveOverview';
import AIVoiceAssistant from './components/AIVoiceAssistant';
import { ViewType, Student } from './types';
import { DUMMY_STUDENTS } from './constants';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [view, setView] = useState<ViewType>('landing');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigate = (newView: ViewType, student?: Student) => {
    setIsLoading(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      if (student) {
        setSelectedStudent(student);
      }
      setView(newView);
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 800);
  };

  const handleSelectStudentById = (id: string) => {
    const student = DUMMY_STUDENTS.find(s => s.id === id);
    if (student) {
      handleNavigate('student-detail', student);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-[#f8fafc] relative overflow-hidden">
      {/* Global Cinematic Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
         <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-500/[0.03] rounded-full blur-[200px]"></div>
         <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-500/[0.03] rounded-full blur-[150px]"></div>
         <div className="absolute inset-0 neural-grid opacity-[0.15]"></div>
      </div>
      
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div 
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center text-slate-900 overflow-hidden"
          >
            {/* Background Grid */}
            <div className="absolute inset-0 neural-grid opacity-[0.05]"></div>
            
            <div className="relative mb-16">
               <motion.div 
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] absolute -inset-16"
               />
               
               <div className="relative z-10 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-48 h-48 border-[1px] border-dashed border-slate-200 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="w-40 h-40 border-[1px] border-dashed border-slate-200 rounded-full absolute"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                     <motion.div
                        animate={{ 
                          filter: ["drop-shadow(0 0 0px rgba(59,130,246,0))", "drop-shadow(0 0 20px rgba(59,130,246,0.2))", "drop-shadow(0 0 0px rgba(59,130,246,0))"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                     >
                        <GraduationCap size={64} className="text-slate-900" />
                     </motion.div>
                  </div>
               </div>
            </div>

            <div className="space-y-6 text-center relative z-10">
               <div className="space-y-2">
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-[10px] font-black uppercase tracking-[0.8em] text-blue-500"
                  >
                    Neural Synchronization
                  </motion.p>
                  <motion.h2 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-4xl font-display font-black tracking-tighter text-slate-900"
                  >
                    EduPulse <span className="text-blue-500">Intelligence</span>
                  </motion.h2>
               </div>

               <div className="flex flex-col items-center gap-4">
                  <div className="w-64 h-1 bg-slate-100 rounded-full overflow-hidden relative">
                     <motion.div 
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }} 
                      transition={{ duration: 3.5, ease: "easeInOut" }}
                      className="h-full bg-blue-500"
                     />
                  </div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Initializing Strategic Data Matrix...</p>
                  </motion.div>
               </div>
            </div>

            <div className="absolute bottom-12 left-12 flex gap-12 opacity-[0.15]">
               <div>
                  <p className="text-[8px] font-black text-slate-900 uppercase tracking-widest">System Load</p>
                  <p className="text-xs font-black">4.2 TB/s</p>
               </div>
               <div>
                  <p className="text-[8px] font-black text-slate-900 uppercase tracking-widest">Neural Links</p>
                  <p className="text-xs font-black">Active</p>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <AnimatePresence mode="wait">
          {view === 'landing' && (
            <motion.div 
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.8 }}
            >
              <LandingPage onGetStarted={() => handleNavigate('dashboard')} />
            </motion.div>
          )}
          
          {view === 'dashboard' && (
            <motion.div 
              key="dashboard"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
            >
              <Dashboard 
                onNavigate={(v) => handleNavigate(v as ViewType)} 
                onSelectStudent={handleSelectStudentById} 
              />
            </motion.div>
          )}
          
          {view === 'student-detail' && selectedStudent && (
            <motion.div 
              key="detail"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <StudentDetail 
                student={selectedStudent} 
                onBack={() => handleNavigate('dashboard')} 
              />
            </motion.div>
          )}

          {view === 'ai-chat' && (
            <motion.div 
              key="chat"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <AIChat 
                onBack={() => handleNavigate('dashboard')} 
              />
            </motion.div>
          )}
          
          {view === 'ai-analysis' && (
            <motion.div 
              key="analysis"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <AIAnalytics 
                onBack={() => handleNavigate('dashboard')} 
              />
            </motion.div>
          )}

          {view === 'executive-overview' && (
            <motion.div 
              key="executive"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ExecutiveOverview 
                onBack={() => handleNavigate('dashboard')} 
              />
            </motion.div>
          )}

          {view === 'ai-voice' && (
            <motion.div 
              key="voice"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <AIVoiceAssistant 
                onBack={() => handleNavigate('dashboard')} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
