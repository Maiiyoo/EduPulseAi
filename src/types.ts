export interface Student {
  id: string;
  name: string;
  photoUrl?: string;
  class: string;
  attendance: number; // 0-100
  grades: {
    math: number;
    science: number;
    english: number;
    history: number;
  };
  performanceTrend: number[]; // Last 6 months
  absentCount: number;
  lateCount: number;
  violations: number;
  riskScore: number; // 0-100
  riskStatus: 'Safe' | 'Warning' | 'High Risk';
  nis: string;
  aiConfidence: number; // 0-100
  timeline: {
    date: string;
    type: 'Academic' | 'Attendance' | 'Behavior';
    content: string;
    impact: 'positive' | 'negative' | 'neutral';
  }[];
  lastMonthPerformance: number;
  currentPerformance: number;
  aiInsights?: string;
  aiRecommendations?: string[];
}

export interface Notification {
  id: string;
  type: 'critical' | 'warning' | 'info' | 'recommendation';
  title: string;
  message: string;
  timestamp: Date;
  isRead: boolean;
  studentId?: string;
  studentName?: string;
  impactValue?: string;
}

export type ViewType = 'landing' | 'dashboard' | 'student-detail' | 'ai-analysis' | 'settings' | 'ai-chat' | 'executive-overview' | 'ai-voice';
