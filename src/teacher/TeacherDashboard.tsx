import React, { useState } from 'react';
import {
  GraduationCap,
  Users,
  Video,
  FileText,
  CheckSquare,
  DollarSign,
  MessageSquare,
  Calendar,
  Clock,
  Plus,
  Search,
  CheckCircle2,
  AlertCircle,
  Download,
  Upload,
  Sparkles,
  ArrowLeft,
  Sun,
  Moon,
  TrendingUp,
  Award,
  BookOpen,
  Send,
  Eye,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface TeacherDashboardProps {
  teacherName?: string;
  subject?: string;
  onNavigateHome: () => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({
  teacherName = 'Eng. R. Jeyakumar',
  subject = 'Combined Mathematics',
  onNavigateHome,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<'classes' | 'materials' | 'assignments' | 'students' | 'earnings' | 'chat'>('classes');

  // Interactive State Mock Data
  const [scheduledClasses, setScheduledClasses] = useState([
    {
      id: '1',
      title: 'Combined Maths — Complex Numbers & Trigonometry Revision',
      batch: '2026 A/L Theory & Revision',
      date: 'Aug 04, 2026',
      time: '08:30 AM - 12:30 PM',
      studentsCount: 1240,
      status: 'upcoming' as 'upcoming' | 'live' | 'completed',
      zoomLink: 'https://zoom.us/j/987654321',
    },
    {
      id: '2',
      title: 'Integration & Differential Equations Masterclass',
      batch: '2026 A/L Revision Pass',
      date: 'Aug 06, 2026',
      time: '09:00 AM - 01:00 PM',
      studentsCount: 1480,
      status: 'upcoming' as 'upcoming' | 'live' | 'completed',
      zoomLink: 'https://zoom.us/j/123456789',
    },
  ]);

  const [studentAssignments, setStudentAssignments] = useState([
    {
      id: 'a1',
      studentName: 'Kavindu Perera',
      indexNo: 'AL-2026-8812',
      subject: 'Combined Mathematics',
      title: 'Calculus & Integration Paper 03 Submissions',
      submittedDate: 'Aug 01, 2026 at 04:15 PM',
      status: 'Pending Review' as 'Pending Review' | 'Graded',
      marks: null as number | null,
    },
    {
      id: 'a2',
      studentName: 'Nimasha Fernando',
      indexNo: 'AL-2026-9042',
      subject: 'Combined Mathematics',
      title: 'Complex Numbers & Vectors Assignment 02',
      submittedDate: 'Jul 30, 2026 at 11:20 AM',
      status: 'Graded' as 'Pending Review' | 'Graded',
      marks: 94,
    },
    {
      id: 'a3',
      studentName: 'Subashini Ramanathan',
      indexNo: 'AL-2026-7731',
      subject: 'Combined Mathematics',
      title: 'Trigonometric Series & Limits Homework 04',
      submittedDate: 'Jul 29, 2026 at 08:45 PM',
      status: 'Graded' as 'Pending Review' | 'Graded',
      marks: 88,
    },
  ]);

  const [gradingInput, setGradingInput] = useState<{ [id: string]: string }>({});

  const handleGradeAssignment = (id: string) => {
    const markVal = parseInt(gradingInput[id] || '0', 10);
    setStudentAssignments((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'Graded', marks: markVal } : item))
    );
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300 font-sans pb-16">
      {/* TOP TEACHER DASHBOARD HEADER */}
      <header className="sticky top-0 z-40 bg-[var(--bg-nav)] backdrop-blur-xl border-b border-[var(--border-primary)] py-4 px-4 sm:px-8">
        <div className="max-w-[1700px] mx-auto flex items-center justify-between gap-4">
          {/* Left: Brand & Return Home */}
          <div className="flex items-center gap-4">
            <button
              onClick={onNavigateHome}
              className="p-2.5 rounded-xl bg-[var(--bg-pill)] border border-[var(--border-primary)] text-[var(--text-primary)] hover:bg-[var(--btn-hover-overlay)] transition-all flex items-center gap-2 text-xs font-mono font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Landing Page</span>
            </button>

            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--brand-primary)] to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-extrabold text-[var(--text-primary)] block leading-tight">
                  Educator Portal
                </span>
                <span className="text-[10px] text-[var(--text-secondary)] font-mono uppercase tracking-wider">
                  {subject} Faculty
                </span>
              </div>
            </div>
          </div>

          {/* Right: Theme Toggle & Teacher Profile Badge */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-[var(--bg-pill)] border border-[var(--border-primary)] text-[var(--text-primary)] hover:bg-[var(--btn-hover-overlay)] transition-all"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-[var(--border-primary)] font-mono">
              <div className="w-9 h-9 rounded-xl bg-[var(--bg-pill)] text-[var(--brand-primary)] border border-[var(--border-brand)] flex items-center justify-center font-black text-xs">
                RJ
              </div>
              <div>
                <span className="text-xs font-bold text-[var(--text-primary)] block">{teacherName}</span>
                <span className="text-[10px] text-[var(--color-success)] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)] animate-pulse" /> Verified Educator
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1700px] mx-auto px-4 sm:px-8 mt-6">
        {/* EDUCATOR BANNER & STATS CARDS */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-xl relative overflow-hidden mb-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--brand-primary)]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[var(--bg-pill)] text-[var(--brand-primary)] border border-[var(--border-brand)] inline-flex items-center gap-1.5 mb-2 font-mono">
                <Sparkles className="w-3.5 h-3.5" /> 2026 Advanced Level Academy Portal
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] tracking-tight">
                Welcome Back, {teacherName}!
              </h1>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                Senior Lecturer in <span className="text-[var(--brand-primary)] font-bold">{subject}</span> • Hatton Main Auditorium & Online Stream
              </p>
            </div>

            {/* Live Class Schedule Quick CTA Button */}
            <button
              onClick={() => alert('New Live HD Class Session initialized!')}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[var(--brand-primary)] via-indigo-600 to-[var(--brand-secondary)] text-white font-extrabold text-sm shadow-xl shadow-[var(--brand-glow)] hover:scale-105 transition-all flex items-center gap-2 shrink-0 font-mono"
            >
              <Video className="w-5 h-5" />
              <span>Go Live Now (HD Stream)</span>
            </button>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-[var(--border-primary)] font-mono">
            <div className="p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-primary)]">
              <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] mb-1">
                <span>Active Students</span>
                <Users className="w-4 h-4 text-[var(--brand-primary)]" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">1,480</span>
              <span className="text-[10px] text-[var(--color-success)] block mt-0.5">↑ +14% this month</span>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-primary)]">
              <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] mb-1">
                <span>Live Sessions</span>
                <Video className="w-4 h-4 text-purple-500" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">48</span>
              <span className="text-[10px] text-[var(--text-secondary)] block mt-0.5">Completed in 2026</span>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-primary)]">
              <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] mb-1">
                <span>Papers Graded</span>
                <CheckSquare className="w-4 h-4 text-amber-500" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">312</span>
              <span className="text-[10px] text-amber-500 block mt-0.5">1 Pending Review</span>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-primary)]">
              <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] mb-1">
                <span>Monthly Class Fees</span>
                <DollarSign className="w-4 h-4 text-emerald-500" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-emerald-500">LKR 4.4M</span>
              <span className="text-[10px] text-emerald-500 block mt-0.5">August 2026 Settled</span>
            </div>
          </div>
        </div>

        {/* TEACHER DASHBOARD NAVIGATION TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[var(--border-primary)] mb-6 font-mono">
          {[
            { id: 'classes', label: 'Live & Scheduled Classes', icon: <Video className="w-4 h-4" /> },
            { id: 'materials', label: 'Notes & Study Modules', icon: <FileText className="w-4 h-4" /> },
            { id: 'assignments', label: 'Student Homework & Papers', icon: <CheckSquare className="w-4 h-4" /> },
            { id: 'students', label: 'Student Roster & Attendance', icon: <Users className="w-4 h-4" /> },
            { id: 'earnings', label: 'Fee Earnings & Collections', icon: <TrendingUp className="w-4 h-4" /> },
            { id: 'chat', label: 'Direct Student Q&A', icon: <MessageSquare className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-extrabold shrink-0 transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-[var(--brand-primary)] text-white shadow-lg shadow-[var(--brand-glow)]'
                  : 'bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--btn-hover-overlay)]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* TAB 1: LIVE & SCHEDULED CLASSES */}
        {activeTab === 'classes' && (
          <div className="space-y-6 font-mono">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h2 className="text-lg font-bold text-[var(--text-primary)]">Upcoming Scheduled Live Streams</h2>
              <button
                onClick={() => alert('Schedule New Lecture modal initialized!')}
                className="px-4 py-2 rounded-xl bg-[var(--bg-pill)] text-[var(--brand-primary)] border border-[var(--border-brand)] text-xs font-bold flex items-center gap-1.5 hover:bg-[var(--btn-hover-overlay)] transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Schedule New Lecture Session</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scheduledClasses.map((cls) => (
                <div
                  key={cls.id}
                  className="p-5 rounded-3xl glass-panel bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-md space-y-4"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-[var(--bg-pill)] text-[var(--brand-primary)] border border-[var(--border-brand)]">
                      {cls.batch}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                      Confirmed
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-[var(--text-primary)]">{cls.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)] mt-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[var(--brand-primary)]" /> {cls.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-500" /> {cls.time}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[var(--border-primary)] flex items-center justify-between gap-2">
                    <div className="text-xs">
                      <span className="text-[var(--text-secondary)]">Enrolled Students:</span>{' '}
                      <span className="font-bold text-[var(--text-primary)]">{cls.studentsCount}</span>
                    </div>
                    <button
                      onClick={() => alert(`Starting Live Broadcast: ${cls.title}`)}
                      className="px-4 py-2 rounded-xl bg-emerald-500 text-white font-bold text-xs shadow hover:scale-105 transition-all flex items-center gap-1.5"
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Start Class Stream</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: STUDENT ASSIGNMENTS & HOMEWORK GRADED */}
        {activeTab === 'assignments' && (
          <div className="space-y-6 font-mono">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">Student Homework & Model Paper Submissions</h2>

            <div className="divide-y divide-[var(--border-primary)] rounded-3xl glass-panel bg-[var(--bg-card)] border border-[var(--border-primary)] overflow-hidden shadow-md">
              {studentAssignments.map((item) => (
                <div key={item.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold text-[var(--text-primary)]">{item.studentName}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-[var(--bg-pill)] text-[var(--brand-primary)] font-bold">
                        {item.indexNo}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">{item.title}</p>
                    <span className="text-[10px] text-[var(--text-subtle)] block mt-0.5">Submitted on {item.submittedDate}</span>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {item.status === 'Graded' ? (
                      <div className="text-right">
                        <span className="text-base font-extrabold text-emerald-500 block">{item.marks} / 100 Marks</span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 inline-flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Graded
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          placeholder="Marks (0-100)"
                          value={gradingInput[item.id] || ''}
                          onChange={(e) => setGradingInput({ ...gradingInput, [item.id]: e.target.value })}
                          className="w-28 px-3 py-2 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] text-xs text-[var(--text-primary)] outline-none font-bold"
                        />
                        <button
                          onClick={() => handleGradeAssignment(item.id)}
                          className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] text-white text-xs font-bold hover:scale-105 transition-all"
                        >
                          Submit Marks
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: STUDENT ROSTER */}
        {activeTab === 'students' && (
          <div className="space-y-4 font-mono">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">Enrolled Student Directory (Hatton Hall & Online)</h2>
            <div className="p-4 rounded-2xl glass-panel bg-[var(--bg-card)] border border-[var(--border-primary)] space-y-3">
              {[
                { name: 'Kavindu Perera', index: 'AL-2026-8812', batch: 'Combined Maths 2026', fees: 'Paid (Aug 2026)', attendance: '96%' },
                { name: 'Nimasha Fernando', index: 'AL-2026-9042', batch: 'Combined Maths 2026', fees: 'Paid (Aug 2026)', attendance: '100%' },
                { name: 'Subashini Ramanathan', index: 'AL-2026-7731', batch: 'Combined Maths 2026', fees: 'Paid (Aug 2026)', attendance: '92%' },
                { name: 'Tharusha Bandara', index: 'AL-2026-6109', batch: 'Combined Maths 2026', fees: 'Pending Slip', attendance: '88%' },
              ].map((st, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] flex items-center justify-between gap-3 text-xs">
                  <div>
                    <span className="font-bold text-[var(--text-primary)] block">{st.name} ({st.index})</span>
                    <span className="text-[10px] text-[var(--text-secondary)]">{st.batch} • Attendance: {st.attendance}</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                    {st.fees}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: EARNINGS & FEE COLLECTIONS */}
        {activeTab === 'earnings' && (
          <div className="space-y-6 font-mono">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">Class Fee Revenue & Monthly Payouts</h2>
            <div className="p-6 rounded-3xl glass-panel bg-[var(--bg-card)] border border-[var(--border-primary)] space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--border-primary)] pb-4">
                <div>
                  <span className="text-xs text-[var(--text-secondary)] block">August 2026 Net Revenue Collection</span>
                  <span className="text-3xl font-black text-emerald-500 mt-1 block">LKR 4,440,000</span>
                </div>
                <button
                  onClick={() => alert('Payout Request submitted to Bank Account!')}
                  className="px-5 py-3 rounded-2xl bg-emerald-500 text-white text-xs font-extrabold shadow-md hover:scale-105 transition-all"
                >
                  Request Bank Payout
                </button>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-2 border-b border-[var(--border-primary)]">
                  <span>Enrolled Paid Students (1,480 @ LKR 3,000)</span>
                  <span className="font-bold">LKR 4,440,000</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[var(--border-primary)]">
                  <span>Platform Gateway Commission (8%)</span>
                  <span className="text-red-500 font-bold">- LKR 355,200</span>
                </div>
                <div className="flex justify-between py-2 font-extrabold text-sm text-[var(--text-primary)]">
                  <span>Net Educator Payable Amount</span>
                  <span className="text-emerald-500">LKR 4,084,800</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: CHAT & OTHER DEFAULT TABS */}
        {(activeTab === 'materials' || activeTab === 'chat') && (
          <div className="p-8 rounded-3xl glass-panel bg-[var(--bg-card)] border border-[var(--border-primary)] text-center space-y-3 font-mono">
            <BookOpen className="w-10 h-10 text-[var(--brand-primary)] mx-auto" />
            <h3 className="text-base font-bold text-[var(--text-primary)]">
              {activeTab === 'materials' ? 'Module Upload Center Active' : 'Student Direct Messaging Ready'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] max-w-md mx-auto">
              Upload PDF theory notes, model papers, or reply to student queries directly.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};
