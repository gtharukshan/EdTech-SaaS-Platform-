# SciEnce EdTech SaaS Platform — Comprehensive Frontend Documentation

## 1. Executive Technical Summary

The **SciEnce EdTech SaaS Platform** is an elite, high-performance web application designed for Sri Lankan Advanced Level (A/L) Physical & Bio Science students. The frontend architecture combines dynamic landing pages, interactive AI learning tools, smart classroom integrations, and a feature-complete **Student Management & Tuition Finance Dashboard**.

### Core Technical Architecture
- **Framework & Runtime**: [React 18.3](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/package.json#L17) + [TypeScript 5.7](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/package.json#L30) + [Vite 6.1](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/package.json#L31)
- **Styling Architecture**: [Tailwind CSS v3.4](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/tailwind.config.js) with extended HSL design tokens, glassmorphism utilities (`glass-panel`), and custom color gradients.
- **Animation Engine**: [Framer Motion 11.18](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/package.json#L15) for layout transitions, scroll-driven story timelines, and modal overlays.
- **Iconography**: [Lucide React 0.475](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/package.json#L16)
- **Visual Feedback**: [Canvas Confetti 1.9](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/package.json#L13) for celebratory student onboarding and payment completions.
- **Theme Engine**: Dual Dark/Light theme with system persistence handled via [ThemeContext.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/context/ThemeContext.tsx).

---

## 2. Design System & Aesthetics Architecture

The frontend follows an **Obsidian Dark & Brushed Metallic Gold** luxury aesthetic, inspired by high-end fintech and premium academic portals.

| Element | Hex / HSL Token | Usage & Component Target |
| :--- | :--- | :--- |
| **Obsidian Surface** | `#050505` / `#0A0B0E` / `#0C0D12` | Main page backgrounds, glass panels, card containers |
| **Primary Metallic Gold** | `#D4AF37` | Active navigation tabs, primary CTA buttons, headings, active step indicators |
| **Champagne Gold** | `#F5D061` | Gradient text highlights, hover focus borders, badge highlights, QR pass rings |
| **Deep Bronze Accent** | `#AA771C` / `#BF953F` | Secondary gradients, subtitled badges, pricing tier borders |
| **Glassmorphism Border** | `border-[#D4AF37]/30` / `border-white/10` | Interactive card borders and modal backdrop overlays |
| **Ambient Gold Glow** | `shadow-[0_0_35px_rgba(212,175,55,0.4)]` | Floating cards, CTA button hover states, centerpiece badges |

---

## 3. Directory & Component Hierarchy

```
src/
├── App.tsx                      # Root component, global layout, navigation router state
├── index.css                    # Tailwind imports, custom utility classes & glassmorphism definitions
├── main.tsx                     # Application entry point rendering ThemeProvider & App
├── context/
│   └── ThemeContext.tsx         # Dark/Light mode state management & localStorage sync
└── components/
    ├── Navbar.tsx               # Header navigation, brand logo, section anchors & mobile drawer
    ├── Hero.tsx                 # Hero showcase, 3D floating canvas, metrics & admission CTA
    ├── CinematicScrollStory.tsx # Scroll-driven particle story timeline of student journey
    ├── FeatureCards.tsx         # 4 Interactive core platform feature cards
    ├── CourseShowcase.tsx       # Subject syllabus catalog, module cards & syllabus modal
    ├── SubjectSyllabusPanel.tsx # Interactive syllabus inspector with search & progress bars
    ├── TeacherProfileContainer.tsx # Faculty spotlight (Maths, Physics, Chemistry, Bio) & auditorium
    ├── AiTutorDemo.tsx          # Interactive Gemini AI Tutor workspace simulation with confetti
    ├── AiDashboardShowcase.tsx  # Neural learning analytics, topic radar & grade predictor showcase
    ├── Pricing.tsx              # Tuition fee plans, billing cycle toggle & plan comparison
    ├── TeacherSection.tsx       # Secondary faculty spotlight grid with consultation booking
    ├── Testimonials.tsx         # Student success reviews, island ranks & university admissions
    ├── Footer.tsx               # Campus location, operational status, quick links & newsletter
    ├── AuthModal.tsx            # 3-step digital student admission portal modal with QR pass generator
    └── StudentDashboard.tsx     # Comprehensive 4500+ line Student Command Center & Finance Portal
```

---

## 4. Detailed Component & Feature Specifications

### 4.1 Root & Global State ([App.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/App.tsx))
- Controls page state (`landing` vs `dashboard`).
- Manages global admission modal (`AuthModal`) visibility and preset mode (`login` vs `register`).
- Houses global scroll-to-top behavior and background glow containers.

### 4.2 Navigation Header ([Navbar.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/Navbar.tsx))
- Sticky glassmorphism header with scroll-based backdrop blur (`backdrop-blur-md`).
- Navigation links with smooth scroll to section anchors (`#features`, `#courses`, `#teachers`, `#ai-tutor`, `#pricing`).
- Live operational status indicator badge (`Hatton Campus Open`).
- Theme switcher button (Dark / Light mode).
- Mobile responsive slide-over drawer menu.

### 4.3 Hero Showcase ([Hero.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/Hero.tsx))
- Dynamic header with Metallic Gold pill badge (`#1 A/L Science Platform in Hatton`).
- **3D Floating Book & Study Canvas**: Canvas-based animated floating study materials.
- Live statistical metrics counters (4.9/5 Rating, 2,500+ A/L Students, 98.4% Pass Rate).
- Interactive stream filter chips (Combined Maths, Physical Science, Bio Science).

### 4.4 Cinematic Scroll Story ([CinematicScrollStory.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/CinematicScrollStory.tsx))
- Canvas-based particle animation synchronized with window scroll.
- Story timeline mapping out the student journey:
  1. *Smart Gate Check-in & Attendance*
  2. *Interactive Whiteboard Captures & Note Vault*
  3. *Gemini AI Step-by-Step Problem Solving*
  4. *A/L Examination Success & Island Ranking*

### 4.5 Core Feature Showcase ([FeatureCards.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/FeatureCards.tsx))
- Glassmorphism feature cards with hover scale effects (`scale-105`) and gold border highlights:
  - **AI Personalization Engine**: Adaptive question recommendations.
  - **Smart Whiteboard Archiving**: Auto-synced high-res classroom board photos.
  - **NFC / QR Gate Verification**: Instant parental SMS & portal attendance sync.
  - **Predictive Exam Analytics**: Real-time rank calculation and topic weakness radar.

### 4.6 Course & Syllabus Explorer ([CourseShowcase.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/CourseShowcase.tsx) & [SubjectSyllabusPanel.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/SubjectSyllabusPanel.tsx))
- Filter tabs for **Combined Mathematics**, **Physics**, **Chemistry**, and **Biology**.
- Module cards displaying instructor credentials, lesson count, video duration, and syllabus depth.
- Detailed syllabus modal displaying lesson outlines, downloadable guides, and sample questions.

### 4.7 Faculty Spotlights ([TeacherProfileContainer.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/TeacherProfileContainer.tsx) & [TeacherSection.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/TeacherSection.tsx))
- Detailed profiles of master educators:
  - **Eng R. Jeyakumar** (Combined Mathematics)
  - **Eng S. Balamurugan** (Advanced Physics)
  - **Sivanesan Sir** (Advanced Chemistry)
  - **K. Umamaheswaran** (Biological Sciences)
- Includes teaching experience, student distinction counts, and smart classroom auditorium previews.

### 4.8 Interactive AI Tutor Workspace ([AiTutorDemo.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/AiTutorDemo.tsx))
- Live simulation of Gemini AI step-by-step problem solver.
- Features preset prompt chips (*Solve Integration Proof*, *Explain Quantum Photoelectric Effect*, *Organic Chemistry Reaction Mechanism*).
- Live neural step execution visualization with progress bars.
- Instant confetti burst (`canvas-confetti`) upon solving math equations.

### 4.9 Neural Dashboard Showcase ([AiDashboardShowcase.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/AiDashboardShowcase.tsx))
- Interactive preview of AI student command center.
- Displays grade predictions (`Target A/L Grade: A`), topic mastery progress bars, and weak area revision suggestions.

### 4.10 Admissions Portal Modal ([AuthModal.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/AuthModal.tsx))
- 3-step digital registration workflow:
  1. *Student Credentials & Contact Info*
  2. *Stream Selection (Physical vs Bio Science) & Core Subjects*
  3. *Digital Student Pass Generation*: Renders printable student ID card with unique QR code, stream badge, and instant confetti celebration.

---

## 5. Student Management Command Center & Finance Portal (`StudentDashboard.tsx`)

The [StudentDashboard.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/StudentDashboard.tsx) component is a massive 4500+ line module containing complete student management functionality.

### 5.1 Dashboard Navigation Views
1. **Overview / Home View**:
   - Welcome banner with student name and enrolled stream.
   - Quick statistics cards: Overall Attendance Rate (93.8%), Upcoming Model Exams (3), Average Score (88.4%), Unpaid Invoices count.
   - Live Noticeboard & Announcements.
   - Today's Class Schedule with live countdown timer.

2. **Upcoming Exams View**:
   - List of scheduled model papers with subject badges, dates, duration, syllabus topics covered, and revision PDF downloads.

3. **Exam History View**:
   - Past exam performance history.
   - Target vs achieved marks comparison bar charts.
   - Action trigger to view **Topper Answer Key Preview Modal**.

4. **Subject Exam Results View**:
   - Comprehensive score breakdown per subject.
   - Island Rank (`#42`), Batch Rank (`#3`), Grade Badges (`A+`), Paper 1 vs Paper 2 detailed marks.

5. **Attendance & Gate Verification Portal**:
   - Today's Gate Scan Status (`Verified Present at 08:52 AM`).
   - Digital Student Pass with animated live QR code.
   - **Monthly Attendance History Modal**:
     - Previous 3-year selector (2026, 2025, 2024).
     - Month navigation buttons and dropdowns.
     - Subject-wise attendance breakdown (Combined Maths 100%, Physics 100%, Chemistry 75%, Biology 100%).
     - Interactive 31-day calendar grid with Present/Absent badges and monthly attendance percentage (93.8%).

6. **Tuition Fee Payment & Finance Hub**:
   - **Dual-Tab System**: `Current Invoices` and `Monthly Payment History`.
   - **Current Invoices Tab**: Displays pending subject fees with instant "Pay Online Now" action.
   - **Monthly Payment History Tab**:
     - Month filter pill buttons (*All Months*, *July 2026*, *June 2026*, *May 2026*, etc.).
     - Search input filter for invoice numbers, subjects, or payment methods.
     - CSV Data Export capability.
     - Detailed data table listing Invoice No, Transaction Ref, Date, Time, Subject, Instructor, Amount (LKR), Payment Method, Status Badge (`Paid`), and Action button to launch printable **Official Receipt Preview Modal**.
   - **Multi-Step Pay Online Now Checkout Modal**:
     - **Step 1 (Subject & Month Selection)**: Checkboxes for subjects + 3-month period selector (Current Month, Next Month, 3rd Month) with live total price calculator.
     - **Step 2 (Order Review & Student Info)**: Name review, auto-filled date, itemized cost summary, and optional remarks textarea.
     - **Step 3 (Payment Method & Card Details)**: Switcher between Credit/Debit Card, Bank Transfer, and LANKAQR Direct. Form fields for Cardholder Name, Card Number, Expiry, and CVC.
     - **Step 4 (Official Payment Receipt)**: Renders official paid invoice receipt with digital stamp, transaction hash, instant PDF download trigger, and auto-insertion of newly created records into the live Payment History table.

7. **Subject Portals & Vaults**:
   - **Lecture Notes Vault**: Subject-wise downloadable lecture notes, tutorial worksheets, and past paper answers.
   - **Teacher Whiteboard Captures**:
     - Month/Year selector filtering class sessions.
     - Archived session cards displaying captured board photo grids with clean captions (*Photo 1*, *Photo 2*, *Photo 3*, *Photo 4*).
     - Download ZIP archive action.
     - **Full-Screen Photo Lightbox Modal**: High-res preview with Previous (`<`) and Next (`>`) navigation buttons.
   - **Direct Messaging with Teacher**:
     - Live chat interface with course faculty.
     - Online status indicator.
     - Voice/Audio call and Video call triggers.
     - Emoji popover selector.
     - Attachment popover menu (*Attach Photo*, *Attach PDF*, *Voice Note*, *Exam Paper*).
     - Voice note recording button.
   - **Academy AI Solver**: Dedicated AI step-by-step solver interface for physics proofs and calculus integration.

8. **Special Books & Products Catalog**:
   - Catalog of official study guides and past paper books with prices in LKR, subject filter chips, star ratings, and instant "Order Book" button.

9. **Account Settings View**:
   - Theme toggle button (Dark / Light mode).
   - Student profile information display.

---

## 6. Verification & Completeness Matrix

| Feature Area | Implementation File | Status | Visual Theme Compliance |
| :--- | :--- | :--- | :--- |
| **Landing Navigation & CTA** | [Navbar.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/Navbar.tsx) | Complete | Metallic & Champagne Gold |
| **3D Hero & Metrics** | [Hero.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/Hero.tsx) | Complete | Metallic & Champagne Gold |
| **Particle Story Scroll** | [CinematicScrollStory.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/CinematicScrollStory.tsx) | Complete | Metallic & Champagne Gold |
| **Syllabus & Modules** | [CourseShowcase.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/CourseShowcase.tsx) | Complete | Metallic & Champagne Gold |
| **Faculty Profiles** | [TeacherProfileContainer.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/TeacherProfileContainer.tsx) | Complete | Metallic & Champagne Gold |
| **Interactive AI Tutor** | [AiTutorDemo.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/AiTutorDemo.tsx) | Complete | Metallic & Champagne Gold |
| **3-Step Admissions Modal** | [AuthModal.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/AuthModal.tsx) | Complete | Metallic & Champagne Gold |
| **Student Command Dashboard**| [StudentDashboard.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/StudentDashboard.tsx) | Complete | Metallic & Champagne Gold |
| **Monthly Payment History** | [StudentDashboard.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/StudentDashboard.tsx#L2500) | Complete | Metallic & Champagne Gold |
| **PDF Receipt Modal** | [StudentDashboard.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/StudentDashboard.tsx#L4425) | Complete | Metallic & Champagne Gold |
| **Attendance History Modal** | [StudentDashboard.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/StudentDashboard.tsx#L3599) | Complete | Metallic & Champagne Gold |
| **Whiteboard Photo Lightbox** | [StudentDashboard.tsx](file:///d:/Wep%20Application/Personal%20Projects/EdTech-SaaS-Platform-/src/components/StudentDashboard.tsx#L3828) | Complete | Metallic & Champagne Gold |

---

## 7. How to Run & Build Locally

### Development Server
```bash
npm run dev
```
Launches Vite dev server at `http://localhost:5173`.

### Production Build
```bash
npm run build
```
Executes TypeScript type checking (`tsc`) and compiles optimized static assets into `dist/`.

---
*Documentation compiled automatically for SciEnce EdTech SaaS Platform Frontend codebase.*
