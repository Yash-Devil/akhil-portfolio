import {
  Smartphone,
  Globe,
  Server,
  LayoutDashboard,
  Boxes,
  Palette,
  Workflow,
  Building2,
} from "lucide-react";
import {
  SiFlutter,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFirebase,
  SiSupabase,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandFlutter } from "react-icons/tb";
import type {
  NavLink,
  Service,
  Tech,
  Stat,
  Project,
  Testimonial,
  TrustItem,
} from "@/types";

/* ----------------------------------------------------------------
   Navigation
   ---------------------------------------------------------------- */
export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const HERO_SKILLS = [
  "Flutter",
  "FlutterFlow",
  "React.js",
  "Next.js",
  "Node.js",
];

export const HERO_ROTATING = [
  "Building Scalable SaaS Platforms",
  "Creating Premium Digital Experiences",
  "Engineering Modern Applications",
  "Developing High-Performance Systems",
];

/* ----------------------------------------------------------------
   Services
   ---------------------------------------------------------------- */
export const SERVICES: Service[] = [
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "Cross-platform iOS & Android apps built with Flutter — pixel-perfect, performant, and store-ready.",
    icon: Smartphone,
    features: ["Flutter & FlutterFlow", "Native performance", "App Store ready"],
  },
  {
    id: "web",
    title: "Full Stack Web Development",
    description:
      "Modern, blazing-fast web platforms with React & Next.js, engineered for scale and conversion.",
    icon: Globe,
    features: ["Next.js App Router", "SEO-optimized", "Edge-ready"],
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Robust APIs and services with Node.js, designed around clean architecture and reliability.",
    icon: Server,
    features: ["REST & realtime APIs", "Auth & security", "Scalable services"],
  },
  {
    id: "admin",
    title: "Admin Panel Development",
    description:
      "Data-dense dashboards and internal tools with thoughtful UX and powerful controls.",
    icon: LayoutDashboard,
    features: ["Role-based access", "Analytics views", "CRUD systems"],
  },
  {
    id: "saas",
    title: "SaaS Development",
    description:
      "End-to-end SaaS products — multi-tenant architecture, billing, and subscription flows.",
    icon: Boxes,
    features: ["Multi-tenant", "Subscriptions", "Production-grade"],
  },
  {
    id: "design",
    title: "UI/UX Design",
    description:
      "Premium interface design systems with motion, accessibility, and a strong visual language.",
    icon: Palette,
    features: ["Design systems", "Motion design", "Prototyping"],
  },
  {
    id: "automation",
    title: "Workflow Automation",
    description:
      "Custom automations and integrations that remove manual work and connect your tools end-to-end.",
    icon: Workflow,
    features: ["API integrations", "Webhooks & jobs", "Process design"],
  },
  {
    id: "enterprise",
    title: "Enterprise Platforms",
    description:
      "Robust, secure platforms built for scale — multi-tenant, role-based, and audit-ready.",
    icon: Building2,
    features: ["Scalable infra", "Security-first", "High availability"],
  },
];

/* ----------------------------------------------------------------
   Tech stack
   ---------------------------------------------------------------- */
export const TECH_STACK: Tech[] = [
  { name: "Flutter", icon: SiFlutter, color: "#02569B", category: "Frontend" },
  { name: "FlutterFlow", icon: TbBrandFlutter, color: "#5B6CFF", category: "Frontend" },
  { name: "React.js", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF", category: "Frontend" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28", category: "Backend" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", category: "Database" },
  { name: "Firestore", icon: SiFirebase, color: "#FFA000", category: "Database" },
];

export const TECH_CATEGORIES = ["Frontend", "Backend", "Database"] as const;

/* ----------------------------------------------------------------
   Stats
   ---------------------------------------------------------------- */
export const STATS: Stat[] = [
  {
    id: "projects",
    value: 50,
    suffix: "+",
    label: "Projects Completed",
    description: "Shipped across mobile, web & SaaS.",
  },
  {
    id: "clients",
    value: 20,
    suffix: "+",
    label: "International Clients",
    description: "Across multiple industries & timezones.",
  },
  {
    id: "startups",
    value: 12,
    suffix: "+",
    label: "Startup Collaborations",
    description: "From MVP to scale-ready products.",
  },
  {
    id: "team",
    value: 5,
    suffix: "+",
    label: "Years Building",
    description: "Including team & delivery management.",
  },
];

/* ----------------------------------------------------------------
   Portfolio projects
   ---------------------------------------------------------------- */
export const PROJECTS: Project[] = [
  {
    id: "holiday-management",
    slug: "holiday-management",
    title: "Holiday Management",
    tagline: "Leave & time-off, beautifully orchestrated.",
    category: "SaaS",
    type: "HR & Leave Management Platform",
    year: "2024",
    platforms: ["Web", "Admin", "SaaS"],
    overview:
      "A complete holiday and leave management system enabling teams to request, approve, and track time off with real-time balances and calendar sync.",
    challenge:
      "Growing teams were drowning in spreadsheets and email threads to manage leave, with no single source of truth for balances, approvals, or coverage.",
    solution:
      "We built a multi-tenant platform with role-based approval workflows, live balance calculations, and calendar integrations — wrapped in a clean, fast dashboard.",
    outcome:
      "Approval cycles dropped from days to minutes and HR gained a real-time view of capacity across every team and region.",
    features: [
      "Role-based approval workflows",
      "Real-time leave balances",
      "Calendar & holiday sync",
      "Team capacity overview",
      "Audit-ready history",
    ],
    deliverables: ["Web App", "Admin Dashboard", "Approval Workflows"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    status: "Live",
    accent: "from-[#7C5CFF] to-[#5B8CFF]",
  },
  {
    id: "condition-pro",
    slug: "condition-pro",
    title: "Condition Pro",
    tagline: "Health tracking that clinicians actually trust.",
    category: "Mobile App",
    type: "Health & Condition Tracking App",
    year: "2024",
    platforms: ["App"],
    overview:
      "Mobile application for monitoring health conditions with personalized insights, reminders, and clinician-friendly reports.",
    challenge:
      "Patients struggled to log symptoms consistently, and the data they did capture wasn't structured enough for clinicians to act on.",
    solution:
      "A friction-free Flutter app with smart reminders, structured symptom logging, and one-tap report exports designed around clinical review.",
    outcome:
      "Logging adherence improved dramatically and clinicians received reports in a format they could read in seconds.",
    features: [
      "Personalized health insights",
      "Smart medication reminders",
      "Clinician-ready reports",
      "Realtime cloud sync",
      "Secure private storage",
    ],
    deliverables: ["iOS & Android App", "Realtime Sync", "Reporting"],
    technologies: ["Flutter", "Firebase", "Firestore"],
    status: "Live",
    accent: "from-[#5B8CFF] to-[#22D3EE]",
  },
  {
    id: "yesgurl",
    slug: "yesgurl",
    title: "Yesgurl",
    tagline: "A lifestyle community built for engagement.",
    category: "Mobile App",
    type: "Lifestyle & Community Platform",
    year: "2023",
    platforms: ["App", "API"],
    overview:
      "A vibrant community lifestyle app with social feeds, profiles, and content discovery built for high engagement.",
    challenge:
      "The brand needed a social experience that felt alive and personal without the performance issues that plague feed-heavy apps.",
    solution:
      "We engineered an optimized feed, rich profiles, and a discovery system on Supabase, with push notifications to drive retention.",
    outcome:
      "A snappy, scalable community product that keeps users returning daily.",
    features: [
      "Personalized social feed",
      "Rich user profiles",
      "Content discovery",
      "Push notifications",
      "Realtime interactions",
    ],
    deliverables: ["Mobile App", "Social Feed", "Push Notifications"],
    technologies: ["Flutter", "Supabase", "Node.js"],
    status: "Live",
    accent: "from-[#9D7BFF] to-[#7C5CFF]",
  },
  {
    id: "daydone",
    slug: "daydone",
    title: "Daydone",
    tagline: "Turn daily intentions into real progress.",
    category: "SaaS",
    type: "Productivity & Task Platform",
    year: "2024",
    platforms: ["Web", "SaaS"],
    overview:
      "Productivity SaaS that turns daily intentions into structured, trackable progress with smart scheduling.",
    challenge:
      "Existing task tools were either too rigid or too chaotic, leaving users without a sense of momentum.",
    solution:
      "We designed a calm, opinionated planning engine with smart scheduling and progress analytics that reward consistency.",
    outcome:
      "Users shipped their MVP ahead of schedule and launched with a product that felt genuinely premium.",
    features: [
      "Smart daily planning",
      "Progress analytics",
      "Goal tracking",
      "Streaks & momentum",
      "Cross-device sync",
    ],
    deliverables: ["Web Platform", "Task Engine", "Analytics"],
    technologies: ["Next.js", "Node.js", "MongoDB"],
    status: "Live",
    accent: "from-[#7C5CFF] to-[#9D7BFF]",
  },
  {
    id: "stage-connect",
    slug: "stage-connect",
    title: "Stage Connect",
    tagline: "Where performers, venues & audiences meet.",
    category: "Web Platform",
    type: "Events & Networking Platform",
    year: "2023",
    platforms: ["Web", "Admin"],
    overview:
      "Platform connecting performers, venues, and audiences with booking, profiles, and discovery in one place.",
    challenge:
      "The live-events space was fragmented across messages, spreadsheets, and phone calls with no trusted booking layer.",
    solution:
      "A two-sided platform with verified profiles, an availability-aware booking system, and discovery tuned for the right matches.",
    outcome:
      "Bookings became effortless and the platform built genuine trust between performers and venues.",
    features: [
      "Two-sided marketplace",
      "Availability-aware booking",
      "Verified profiles",
      "Smart discovery",
      "Admin moderation",
    ],
    deliverables: ["Web App", "Booking System", "Profiles"],
    technologies: ["React.js", "Node.js", "PostgreSQL"],
    status: "Live",
    accent: "from-[#5B8CFF] to-[#7C5CFF]",
  },
  {
    id: "writeoffgenie",
    slug: "writeoffgenie",
    title: "WriteoffGenie",
    tagline: "Maximise deductions, automatically.",
    category: "SaaS",
    type: "Finance & Tax Automation",
    year: "2025",
    platforms: ["Web", "SaaS"],
    overview:
      "Automated expense and tax write-off tracker that maximizes deductions through smart categorization.",
    challenge:
      "Freelancers and small businesses leave money on the table every year because tracking deductions is tedious and error-prone.",
    solution:
      "We built smart categorization, automated rules, and clear dashboards that surface every eligible write-off in real time.",
    outcome:
      "Currently in active development, on track to turn a dreaded chore into a few confident taps.",
    features: [
      "Smart expense categorization",
      "Automated write-off rules",
      "Deduction dashboards",
      "Export-ready reports",
      "Secure data handling",
    ],
    deliverables: ["SaaS Web App", "Automation", "Dashboards"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    status: "In Development",
    accent: "from-[#9D7BFF] to-[#5B8CFF]",
  },
  {
    id: "check4you",
    slug: "check4you",
    title: "Check4You",
    tagline: "On-demand verification you can rely on.",
    category: "Mobile App",
    type: "Verification & Safety App",
    year: "2023",
    platforms: ["App", "API"],
    overview:
      "On-demand verification and safety checking app delivering trustworthy results with a clean mobile experience.",
    challenge:
      "People needed a fast, trustworthy way to verify information without navigating clunky, slow services.",
    solution:
      "A clean Flutter app backed by a verification API and instant notifications, focused on speed and clarity.",
    outcome:
      "A dependable safety tool that delivers clear results in seconds.",
    features: [
      "Instant verification",
      "Clear result states",
      "Realtime notifications",
      "Secure requests",
      "History tracking",
    ],
    deliverables: ["Mobile App", "Verification API", "Notifications"],
    technologies: ["Flutter", "Firebase", "Node.js"],
    status: "Live",
    accent: "from-[#5B8CFF] to-[#9D7BFF]",
  },
  {
    id: "kepasa-harmony",
    slug: "kepasa-harmony",
    title: "Kepasa Harmony",
    tagline: "A wellness ecosystem across web & mobile.",
    category: "Full Stack",
    type: "Wellness & Community Ecosystem",
    year: "2024",
    platforms: ["App", "Web"],
    overview:
      "A wellness ecosystem combining community, content, and personalized harmony tracking across web and mobile.",
    challenge:
      "Wellness users were scattered across disconnected tools with no unified place for content, community, and tracking.",
    solution:
      "We unified mobile and web around a shared content system and personalized tracking, with community at the core.",
    outcome:
      "A cohesive ecosystem where members engage with content and each other in one calm space.",
    features: [
      "Cross-platform ecosystem",
      "Personalized tracking",
      "Content library",
      "Community spaces",
      "Shared backend",
    ],
    deliverables: ["Web + Mobile", "Content System", "Community"],
    technologies: ["Flutter", "Next.js", "Supabase"],
    status: "Live",
    accent: "from-[#7C5CFF] to-[#5B8CFF]",
  },
  {
    id: "linked-llc",
    slug: "linked-llc",
    title: "Linked LLC",
    tagline: "Business formation, guided end-to-end.",
    category: "Web Platform",
    type: "Business Formation Platform",
    year: "2024",
    platforms: ["Web", "Admin"],
    overview:
      "Streamlined LLC formation and business management platform with guided flows and document automation.",
    challenge:
      "Forming and managing a business meant navigating confusing paperwork with little guidance and lots of room for error.",
    solution:
      "We built guided, validated flows with document automation and an admin panel to manage the entire pipeline.",
    outcome:
      "Founders form their businesses confidently, and operations are managed from a single dashboard. Investors praised the polish.",
    features: [
      "Guided formation flows",
      "Document automation",
      "Admin pipeline",
      "Validated data capture",
      "Status tracking",
    ],
    deliverables: ["Web Platform", "Document Engine", "Admin Panel"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    status: "Live",
    accent: "from-[#5B8CFF] to-[#7C5CFF]",
  },
  {
    id: "eunoia",
    slug: "eunoia",
    title: "Eunoia",
    tagline: "Mindfulness, designed to feel calm.",
    category: "Mobile App",
    type: "Mindfulness & Journaling App",
    year: "2023",
    platforms: ["App"],
    overview:
      "A calming mindfulness and journaling app with mood tracking, guided sessions, and beautiful minimal UI.",
    challenge:
      "Mindfulness apps often feel cluttered, undermining the very calm they promise.",
    solution:
      "We crafted a minimal, beautiful Flutter experience around journaling, mood tracking, and guided sessions.",
    outcome:
      "A serene daily companion that users genuinely look forward to opening.",
    features: [
      "Guided sessions",
      "Mood tracking",
      "Private journaling",
      "Insightful trends",
      "Minimal calming UI",
    ],
    deliverables: ["Mobile App", "Journaling", "Mood Insights"],
    technologies: ["Flutter", "Firebase", "Firestore"],
    status: "Live",
    accent: "from-[#9D7BFF] to-[#7C5CFF]",
  },
  {
    id: "mincon",
    slug: "mincon",
    title: "Mincon",
    tagline: "Industrial operations under one roof.",
    category: "Full Stack",
    type: "Industrial Management System",
    year: "2022",
    platforms: ["Web", "Admin"],
    overview:
      "Enterprise management system for industrial operations with inventory, scheduling, and reporting modules.",
    challenge:
      "Industrial operations ran on disconnected tools, making inventory, scheduling, and reporting slow and unreliable.",
    solution:
      "We delivered a modular system unifying inventory, scheduling, and reporting with a powerful admin dashboard.",
    outcome:
      "Operations gained a single, dependable system with clear reporting across every module.",
    features: [
      "Inventory management",
      "Operations scheduling",
      "Custom reporting",
      "Role-based admin",
      "Data exports",
    ],
    deliverables: ["Web App", "Admin Dashboard", "Reporting"],
    technologies: ["React.js", "Node.js", "MongoDB"],
    status: "Completed",
    accent: "from-[#5B8CFF] to-[#9D7BFF]",
  },
  {
    id: "aarogai",
    slug: "aarogai",
    title: "Aarogai",
    tagline: "An AI healthcare companion in your pocket.",
    category: "Mobile App",
    type: "AI Healthcare Assistant",
    year: "2025",
    platforms: ["App", "API"],
    overview:
      "AI-powered healthcare companion offering symptom guidance, reminders, and personalized health insights.",
    challenge:
      "People need trustworthy, accessible health guidance between doctor visits without wading through unreliable sources.",
    solution:
      "We're building an AI assistant for symptom guidance, reminders, and personalized insights, backed by secure health records.",
    outcome:
      "In active development — designed to make everyday health decisions clearer and calmer.",
    features: [
      "AI symptom guidance",
      "Personalized insights",
      "Medication reminders",
      "Secure health records",
      "Conversational UX",
    ],
    deliverables: ["Mobile App", "AI Integration", "Health Records"],
    technologies: ["Flutter", "Node.js", "Firebase"],
    status: "In Development",
    accent: "from-[#7C5CFF] to-[#22D3EE]",
  },
  {
    id: "hollen-break",
    slug: "hollen-break",
    title: "Hollen Break",
    tagline: "Getaways, booked in a few taps.",
    category: "Web Platform",
    type: "Travel & Booking Platform",
    year: "2023",
    platforms: ["Web"],
    overview:
      "Travel and getaway booking platform with rich listings, search, and a seamless reservation flow.",
    challenge:
      "Travelers abandoned bookings on slow, confusing flows with poor search and unclear availability.",
    solution:
      "We built rich listings, fast faceted search, and a frictionless reservation flow with a polished, image-led UI.",
    outcome:
      "A booking experience that's fast, beautiful, and built to convert.",
    features: [
      "Rich listings",
      "Faceted search",
      "Seamless reservations",
      "Availability calendar",
      "Image-led UI",
    ],
    deliverables: ["Web Platform", "Booking Engine", "Listings"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    status: "Live",
    accent: "from-[#9D7BFF] to-[#5B8CFF]",
  },
  {
    id: "aeroskai",
    slug: "aeroskai",
    title: "Aeroskai",
    tagline: "Aviation logistics, operationalized.",
    category: "SaaS",
    type: "Aviation & Logistics SaaS",
    year: "2025",
    platforms: ["Web", "SaaS", "Admin"],
    overview:
      "SaaS platform for aviation logistics with scheduling, tracking, and operational dashboards.",
    challenge:
      "Aviation logistics teams juggled scheduling and tracking across tools that weren't built for their complexity.",
    solution:
      "We're building scheduling, live tracking, and operational dashboards into one purpose-built SaaS platform.",
    outcome:
      "In active development — engineered for reliability at operational scale.",
    features: [
      "Operational scheduling",
      "Live tracking",
      "Operations dashboards",
      "Multi-role access",
      "Scalable architecture",
    ],
    deliverables: ["SaaS Web App", "Dashboards", "Tracking"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    status: "In Development",
    accent: "from-[#5B8CFF] to-[#7C5CFF]",
  },
  {
    id: "autoassists",
    slug: "autoassists",
    title: "Autoassists",
    tagline: "On-demand automotive help, anywhere.",
    category: "Full Stack",
    type: "Automotive Services Platform",
    year: "2024",
    platforms: ["App", "Web", "Admin"],
    overview:
      "Automotive assistance platform connecting drivers with on-demand services across web and mobile.",
    challenge:
      "Drivers needing roadside or routine help had no fast, reliable way to find and book trusted service providers.",
    solution:
      "We built a service-matching platform spanning mobile and web, with an admin panel to manage providers and requests.",
    outcome:
      "Drivers get help quickly, and providers manage demand from a single dashboard.",
    features: [
      "Service matching",
      "Cross-platform apps",
      "Provider management",
      "Request tracking",
      "Admin controls",
    ],
    deliverables: ["Web + Mobile", "Service Matching", "Admin Panel"],
    technologies: ["Flutter", "React.js", "Node.js"],
    status: "Live",
    accent: "from-[#7C5CFF] to-[#9D7BFF]",
  },
];

/** O(1) slug lookup for the dynamic case-study pages. */
export const getProjectBySlug = (slug: string): Project | undefined =>
  PROJECTS.find((p) => p.slug === slug);

export const PROJECT_FILTERS = [
  "All",
  "Mobile App",
  "Web Platform",
  "SaaS",
  "Full Stack",
] as const;

/* ----------------------------------------------------------------
   Testimonials
   ---------------------------------------------------------------- */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Akhil delivered our SaaS MVP faster than any team we'd worked with — the architecture was clean and the UI felt genuinely premium. We launched ahead of schedule.",
    name: "Sarah Lindqvist",
    role: "Founder & CEO",
    company: "Daydone",
    initials: "SL",
  },
  {
    id: "t2",
    quote:
      "The mobile app exceeded expectations. Performance is buttery smooth and the attention to detail on every interaction is exactly what our brand needed.",
    name: "Marcus Bennett",
    role: "Product Lead",
    company: "Condition Pro",
    initials: "MB",
  },
  {
    id: "t3",
    quote:
      "Working across timezones was effortless. Akhil thinks like a product partner, not just a developer — proactive, reliable, and technically excellent.",
    name: "Elena Rossi",
    role: "COO",
    company: "Stage Connect",
    initials: "ER",
  },
  {
    id: "t4",
    quote:
      "From backend architecture to the final pixel, everything was production-grade. Our investors were genuinely impressed by the polish of the platform.",
    name: "David Okafor",
    role: "Co-Founder",
    company: "Linked LLC",
    initials: "DO",
  },
];

/* ----------------------------------------------------------------
   Trust / collaboration
   ---------------------------------------------------------------- */
export const TRUST_ITEMS: TrustItem[] = [
  { value: "50+", label: "Projects shipped" },
  { value: "20+", label: "International clients" },
  { value: "12+", label: "Startup collaborations" },
  { value: "5+", label: "Years of experience" },
];

/** Industries served — rendered as a quiet marquee of trust signals. */
export const INDUSTRIES = [
  "Healthcare",
  "Fintech",
  "Travel",
  "Wellness",
  "Logistics",
  "Automotive",
  "Events",
  "Productivity",
  "Industrial",
  "Lifestyle",
];
