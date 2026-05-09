import { Student } from './types';

export const DUMMY_STUDENTS: Student[] = [
  {
    id: '1',
    name: 'Andi Saputra',
    class: 'XII-IPA-1',
    attendance: 85,
    grades: { math: 75, science: 78, english: 82, history: 80 },
    performanceTrend: [80, 82, 81, 79, 77, 75],
    absentCount: 5,
    lateCount: 3,
    violations: 1,
    riskScore: 25,
    riskStatus: 'Safe',
    nis: '1240001',
    aiConfidence: 94,
    timeline: [
      { date: '2026-05-02', type: 'Academic', content: 'Kuis Matematika: 78 (Stabil)', impact: 'neutral' },
      { date: '2026-04-28', type: 'Attendance', content: 'Terlambat 10 menit (Jam Pertama)', impact: 'negative' },
      { date: '2026-04-25', type: 'Behavior', content: 'Aktif dalam diskusi kelompok Sejarah', impact: 'positive' }
    ],
    lastMonthPerformance: 79,
    currentPerformance: 75,
    aiInsights: "Siswa menunjukkan sedikit penurunan performa namun masih dalam batas aman.",
    aiRecommendations: ["Mentoring belajar ringan", "Monitoring bulanan"]
  },
  {
    id: '2',
    name: 'Budi Santoso',
    class: 'XII-IPA-1',
    attendance: 65,
    grades: { math: 45, science: 50, english: 55, history: 60 },
    performanceTrend: [75, 70, 65, 55, 50, 48],
    absentCount: 15,
    lateCount: 10,
    violations: 4,
    riskScore: 82,
    riskStatus: 'High Risk',
    nis: '1240002',
    aiConfidence: 98,
    timeline: [
      { date: '2026-05-05', type: 'Attendance', content: 'Alpa tanpa keterangan (3 hari berturut-turut)', impact: 'negative' },
      { date: '2026-05-01', type: 'Academic', content: 'Ujian Tengah Semester Fisika: 42 (Critical)', impact: 'negative' },
      { date: '2026-04-20', type: 'Behavior', content: 'Pelanggaran atribut seragam (Teguran 2)', impact: 'negative' }
    ],
    lastMonthPerformance: 55,
    currentPerformance: 48,
    aiInsights: "Siswa mengalami penurunan performa akademik drastis selama 3 bulan terakhir disertai peningkatan absensi dan keterlambatan.",
    aiRecommendations: ["Panggil orang tua segera", "Evaluasi psikologis", "Konseling intensif"]
  },
  {
    id: '3',
    name: 'Citra Lestari',
    class: 'XII-IPS-2',
    attendance: 98,
    grades: { math: 92, science: 90, english: 95, history: 88 },
    performanceTrend: [88, 89, 90, 92, 93, 94],
    absentCount: 1,
    lateCount: 0,
    violations: 0,
    riskScore: 5,
    riskStatus: 'Safe',
    nis: '1240003',
    aiConfidence: 99,
    timeline: [
      { date: '2026-05-08', type: 'Academic', content: 'Tugas Bahasa Inggris: 98 (Excellence)', impact: 'positive' },
      { date: '2026-05-04', type: 'Behavior', content: 'Terpilih menjadi ketua panitia pentas seni', impact: 'positive' },
      { date: '2026-04-30', type: 'Attendance', content: 'Kehadiran sempurna selama bulan April', impact: 'positive' }
    ],
    lastMonthPerformance: 92,
    currentPerformance: 94,
    aiInsights: "Performa sangat stabil dan cenderung meningkat. Pertahankan motivasi belajar.",
    aiRecommendations: ["Beri apresiasi akademik"]
  },
  // Adding more dummy data with random base values
  ...Array.from({ length: 27 }).map((_, i) => {
    const id = `${i + 4}`;
    const score = Math.floor(Math.random() * 60);
    return {
      id,
      name: `Siswa ${id}`,
      class: i % 2 === 0 ? 'XII-IPA-2' : 'XII-IPS-1',
      attendance: 70 + Math.random() * 30,
      grades: { 
        math: 60 + Math.random() * 30, 
        science: 60 + Math.random() * 30, 
        english: 60 + Math.random() * 30, 
        history: 60 + Math.random() * 30 
      },
      performanceTrend: Array.from({ length: 6 }).map(() => 60 + Math.random() * 30),
      absentCount: Math.floor(Math.random() * 10),
      lateCount: Math.floor(Math.random() * 8),
      violations: Math.floor(Math.random() * 3),
      riskScore: score,
      riskStatus: (score > 50 ? 'High Risk' : score > 20 ? 'Warning' : 'Safe') as any,
      nis: `12400${id.padStart(2, '0')}`,
      aiConfidence: 80 + Math.random() * 15,
      timeline: [
        { date: '2026-05-01', type: 'Academic' as const, content: 'Sinkronisasi data mingguan selesai', impact: 'neutral' as const }
      ],
      lastMonthPerformance: 75,
      currentPerformance: 78,
      aiInsights: "Analisis AI dalam proses.",
      aiRecommendations: ["Monitoring standar"]
    };
  })
];
