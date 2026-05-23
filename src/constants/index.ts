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
// Root-absolute hashes (`/#id`) so the links work from any route — on the
// homepage they smooth-scroll; from /work or a case study they navigate home
// and then scroll (handled in SmoothScroll).
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Stack", href: "/#stack" },
  { label: "Work", href: "/#work" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
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
  { name: "Next.js", icon: SiNextdotjs, color: "#0F2A24", category: "Frontend" },
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
    id: "condition-pro",
    slug: "condition-pro",
    title: "Condition Pro",
    tagline: "Personalized workout & progress tracking.",
    category: "Mobile App",
    type: "Fitness & Workout Tracking App",
    year: "2024",
    platforms: ["App"],
    overview:
      "A fitness companion app that tailors indoor and outdoor workout plans based on user metrics like weight, height, and goals. It offers daily progress tracking, personalized exercise routines, and the ability to plan the next workout session seamlessly.",
    challenge:
      "Generic fitness apps hand everyone the same plan and bury progress in cluttered dashboards, so users lose motivation within weeks.",
    solution:
      "We built a Flutter app that generates routines from each user's metrics and goals, with a focused daily progress view and one-tap planning for the next session.",
    outcome:
      "A workout companion that adapts to the individual and keeps people coming back day after day.",
    features: [
      "Metric-based plan personalization",
      "Indoor & outdoor routines",
      "Daily progress tracking",
      "Next-session planning",
      "Goal-driven insights",
    ],
    deliverables: ["iOS & Android App", "Realtime Sync", "Progress Analytics"],
    technologies: ["Flutter", "Firebase", "Firestore"],
    status: "Live",
    accent: "from-[#34D399] to-[#089473]",
    image: "/images/projects/condition-pro.png",
    links: [
      { kind: "app-store", label: "App Store", url: "https://apps.apple.com/us/app/condition-pro/id6756789424" },
      { kind: "play-store", label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.mycompany.conditionpro" },
    ],
  },
  {
    id: "daydone",
    slug: "daydone",
    title: "Daydone",
    tagline: "Comprehensive job & task management.",
    category: "SaaS",
    type: "Productivity & Task Management SaaS",
    year: "2024",
    platforms: ["Web", "SaaS", "Admin"],
    overview:
      "A productivity SaaS platform that integrates employee task tracking, job scheduling, and daily work management. It provides tools for assigning tasks, monitoring progress, and optimizing team productivity — all in one streamlined system.",
    challenge:
      "Teams managed jobs across scattered spreadsheets and chat threads, with no single place to assign work, track progress, or see daily priorities.",
    solution:
      "We unified task assignment, job scheduling, and progress monitoring into one clean platform, with admin controls and analytics that surface where work is stuck.",
    outcome:
      "A single source of truth for daily work that turns busy teams into productive ones.",
    features: [
      "Task assignment & tracking",
      "Job scheduling",
      "Daily work management",
      "Progress monitoring",
      "Team productivity analytics",
    ],
    deliverables: ["Web Platform", "Task Engine", "Admin Dashboard"],
    technologies: ["Next.js", "Node.js", "MongoDB"],
    status: "Live",
    accent: "from-[#10B488] to-[#0B6E57]",
    image: "/images/projects/daydone.png",
    links: [{ kind: "web", label: "Visit site", url: "https://web.daydone.co.uk" }],
  },
  {
    id: "stage-connect",
    slug: "stage-connect",
    title: "Stage Connect",
    tagline: "Booking for artists, venues & audiences.",
    category: "Web Platform",
    type: "Events & Booking Platform",
    year: "2023",
    platforms: ["App", "Web", "Admin"],
    overview:
      "A comprehensive platform that connects performers, booking agents, and venues. It streamlines ticket sales, event scheduling, artist bookings, and the entire performance coordination process — perfect for concerts and live events.",
    challenge:
      "Live events were coordinated over calls and spreadsheets, leaving artists, agents, and venues without a trusted layer for bookings and ticketing.",
    solution:
      "We built a multi-sided platform with verified artist profiles, availability-aware booking, ticket sales, and event scheduling in one coordinated flow.",
    outcome:
      "Bookings and ticketing that just work — building real trust between performers, venues, and audiences.",
    features: [
      "Artist & venue profiles",
      "Availability-aware booking",
      "Ticket sales",
      "Event scheduling",
      "Admin moderation",
    ],
    deliverables: ["Mobile App", "Booking System", "Ticketing"],
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    status: "Live",
    accent: "from-[#14B8A6] to-[#0F8165]",
    image: "/images/projects/stage-connect.png",
    links: [{ kind: "web", label: "Visit site", url: "https://thestageconnect.com/dashboard/explore" }],
  },
  {
    id: "linked-llc",
    slug: "linked-llc",
    title: "Linked LLC",
    tagline: "Global eSIM & travel connectivity.",
    category: "Mobile App",
    type: "Travel eSIM & Connectivity App",
    year: "2024",
    platforms: ["App", "API"],
    overview:
      "A mobile app offering digital eSIM provisioning across multiple countries and regions. Users can activate local eSIM plans instantly on their phone, ensuring seamless connectivity while traveling without physical SIM cards.",
    challenge:
      "Travelers faced expensive roaming and the hassle of buying physical SIM cards in every new country they visited.",
    solution:
      "We built an app for instant eSIM provisioning with regional plans, an in-app wallet, and a billing system that activates connectivity in seconds.",
    outcome:
      "Seamless connectivity in any region — no physical SIMs, no roaming surprises.",
    features: [
      "Instant eSIM provisioning",
      "Multi-region data plans",
      "In-app wallet & billing",
      "Plan management",
      "Secure payments",
    ],
    deliverables: ["Mobile App", "Provisioning API", "Billing"],
    technologies: ["Flutter", "Node.js", "PostgreSQL"],
    status: "Live",
    accent: "from-[#2DD4BF] to-[#0B6E57]",
    image: "/images/projects/linked-llc.png",
    links: [
      { kind: "play-store", label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.mycompany.linked_project" },
    ],
  },
  {
    id: "holiday-management-system",
    slug: "holiday-management-system",
    title: "Holiday Management System",
    tagline: "Streamlining workforce leave & scheduling.",
    category: "SaaS",
    type: "HR & Leave Management Platform",
    year: "2024",
    platforms: ["Web", "Admin", "SaaS"],
    overview:
      "A centralized platform designed to manage employee leave requests, holiday planning, and workforce availability. It provides HR teams and managers with real-time visibility into leave patterns, ensuring seamless resource planning and workload balance.",
    challenge:
      "Growing teams managed leave through spreadsheets and email threads, with no single source of truth for balances, approvals, or coverage.",
    solution:
      "We built a centralized platform with role-based approval workflows, real-time leave balances, and a manager view of workforce availability across teams.",
    outcome:
      "Approval cycles shrank from days to minutes, and HR gained a live view of capacity across every team and region.",
    features: [
      "Leave request workflows",
      "Holiday planning calendar",
      "Real-time availability",
      "Manager approvals",
      "Resource planning insights",
    ],
    deliverables: ["Web App", "Admin Dashboard", "Approval Workflows"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    status: "Live",
    accent: "from-[#10B488] to-[#047857]",
    image: "/images/projects/holiday-management-system.png",
    links: [{ kind: "web", label: "Visit site", url: "https://hol.darhpc.co.uk" }],
  },
  {
    id: "writeoffgenie",
    slug: "writeoffgenie",
    title: "WriteoffGenie",
    tagline: "Expense & tax deduction optimizer.",
    category: "SaaS",
    type: "Finance & Tax Automation SaaS",
    year: "2025",
    platforms: ["Web", "SaaS"],
    overview:
      "A financial tracking platform that automates expense categorization, monitors transactions, and maximizes tax deductions, ensuring users reduce their taxable income while maintaining a clear financial overview.",
    challenge:
      "Freelancers and small businesses leave money on the table every year because tracking deductions is tedious and error-prone.",
    solution:
      "We built automated expense categorization, transaction monitoring, and deduction rules that surface every eligible write-off in a clear dashboard.",
    outcome:
      "A platform that quietly maximizes deductions and keeps finances clear all year round.",
    features: [
      "Automated expense categorization",
      "Transaction monitoring",
      "Tax deduction maximization",
      "Financial overview dashboard",
      "Export-ready reports",
    ],
    deliverables: ["SaaS Web App", "Automation", "Dashboards"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    status: "Live",
    accent: "from-[#34D399] to-[#0F8165]",
    image: "/images/projects/writeoffgenie.png",
    links: [
      { kind: "web", label: "Visit site", url: "https://www.writeoffgenie.ai/" },
      { kind: "play-store", label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.writeoffgenie.app" },
    ],
  },
  {
    id: "check4you",
    slug: "check4you",
    title: "Check4You",
    tagline: "On-demand verification & safety checks.",
    category: "Mobile App",
    type: "Verification & Safety App",
    year: "2023",
    platforms: ["App", "API"],
    overview:
      "A secure mobile app designed to perform document verifications and safety checks in real time. It ensures users can reliably validate identities, credentials, or safety criteria on demand, providing trustworthy results.",
    challenge:
      "People needed a fast, trustworthy way to verify documents and credentials without navigating clunky, slow services.",
    solution:
      "We built a secure Flutter app backed by a verification API, with real-time checks, clear result states, and instant notifications.",
    outcome:
      "A dependable safety tool that returns trustworthy verification results in seconds.",
    features: [
      "Real-time document verification",
      "Identity & credential checks",
      "On-demand safety criteria",
      "Secure requests",
      "Verification history",
    ],
    deliverables: ["Mobile App", "Verification API", "Notifications"],
    technologies: ["Flutter", "Firebase", "Node.js"],
    status: "Live",
    accent: "from-[#10B488] to-[#0B6E57]",
    image: "/images/projects/check4you.png",
    links: [
      { kind: "play-store", label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.check4you.proapp" },
    ],
  },
  {
    id: "eunoia",
    slug: "eunoia",
    title: "Eunoia",
    tagline: "Mindfulness & emotional well-being.",
    category: "Mobile App",
    type: "Mental Wellness & Community App",
    year: "2023",
    platforms: ["App", "API"],
    overview:
      "A mental wellness app designed for mood tracking, one-on-one psychologist sessions, peer support chats, and community group discussions. It offers a safe and supportive space for users to enhance their emotional resilience with professional guidance and social support.",
    challenge:
      "People seeking mental wellness had to juggle separate tools for tracking mood, talking to professionals, and finding peer support.",
    solution:
      "We unified mood tracking, one-on-one psychologist sessions, peer chats, and community groups into one calm, safe Flutter experience.",
    outcome:
      "A supportive space that pairs professional guidance with community to build emotional resilience.",
    features: [
      "Mood tracking",
      "1:1 psychologist sessions",
      "Peer support chats",
      "Community group discussions",
      "Safe, private space",
    ],
    deliverables: ["Mobile App", "Sessions", "Community"],
    technologies: ["Flutter", "Supabase", "Node.js"],
    status: "Live",
    accent: "from-[#2DD4BF] to-[#089473]",
    image: "/images/projects/eunoia.png",
  },
  {
    id: "mincon",
    slug: "mincon",
    title: "Mincon",
    tagline: "Automated drilling operations management.",
    category: "Full Stack",
    type: "Industrial Operations Management System",
    year: "2022",
    platforms: ["Web", "Admin", "API"],
    overview:
      "A platform designed to automate and manage industrial drilling operations. It enables operators to log drilling activity, track equipment changes, and reduce paperwork errors through digital data entry. Admins can oversee operations, monitor risks, and export reports seamlessly.",
    challenge:
      "Drilling operations ran on paper logs prone to errors, leaving admins without reliable visibility into activity, equipment, or risk.",
    solution:
      "We built a system for operators to log activity and equipment changes digitally, with an admin layer for oversight, risk monitoring, and report exports.",
    outcome:
      "Paperwork errors dropped sharply and admins gained dependable, exportable visibility across every operation.",
    features: [
      "Digital drilling logs",
      "Equipment change tracking",
      "Risk monitoring",
      "Admin oversight",
      "Report exports",
    ],
    deliverables: ["Web App", "Admin Dashboard", "Reporting"],
    technologies: ["React.js", "Node.js", "PostgreSQL"],
    status: "In Development",
    accent: "from-[#14B8A6] to-[#0F8165]",
    image: "/images/projects/mincon.png",
  },
  {
    id: "arogyai",
    slug: "arogyai",
    title: "Arogyai",
    tagline: "Remote health monitoring for families.",
    category: "Mobile App",
    type: "Remote Health Monitoring App",
    year: "2025",
    platforms: ["App", "API"],
    overview:
      "A health companion app enabling families separated by distance to monitor a parent's health. It tracks medications, scans medical reports, records vitals (e.g. sugar, BP), and includes emergency alerts so children can respond quickly if needed — all ensuring peace of mind.",
    challenge:
      "Families living apart had no easy way to stay on top of an aging parent's medications, vitals, and emergencies from a distance.",
    solution:
      "We built an app that tracks medications, scans medical reports, records vitals, and fires emergency alerts so loved ones can respond in real time.",
    outcome:
      "Peace of mind for families — a parent's health is visible and emergencies reach the right people instantly.",
    features: [
      "Medication tracking",
      "Medical report scanning",
      "Vitals recording (sugar, BP)",
      "Emergency alerts",
      "Family sharing",
    ],
    deliverables: ["Mobile App", "Vitals API", "Alerts"],
    technologies: ["Flutter", "Firebase", "Node.js"],
    status: "In Development",
    accent: "from-[#34D399] to-[#047857]",
    image: "/images/projects/arogyai.png",
  },
  {
    id: "hollenbeck",
    slug: "hollenbeck",
    title: "Hollenbeck",
    tagline: "Comprehensive auto service management.",
    category: "SaaS",
    type: "Automotive Service Management Platform",
    year: "2024",
    platforms: ["Web", "SaaS", "Admin"],
    overview:
      "A SaaS platform for car maintenance shops, integrating customer management, vendor coordination, parts inventory, service scheduling, and invoicing. With distinct roles for technicians, admins, and customers, it ensures seamless end-to-end auto service operations.",
    challenge:
      "Auto shops ran customers, vendors, parts, scheduling, and invoicing across disconnected tools, creating friction at every step.",
    solution:
      "We built a role-based SaaS unifying customer management, vendor coordination, parts inventory, scheduling, and invoicing for technicians, admins, and customers.",
    outcome:
      "Seamless end-to-end operations for auto shops, from booking through invoicing, in one platform.",
    features: [
      "Customer management",
      "Vendor coordination",
      "Parts inventory",
      "Service scheduling",
      "Invoicing & role-based access",
    ],
    deliverables: ["SaaS Web App", "Admin Panel", "Invoicing"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    status: "In Development",
    accent: "from-[#10B488] to-[#0B6E57]",
    image: "/images/projects/hollenbeck.png",
  },
  {
    id: "aeroskai",
    slug: "aeroskai",
    title: "Aeroskai",
    tagline: "Private social network for aviation pros.",
    category: "Mobile App",
    type: "Aviation Social Networking App",
    year: "2025",
    platforms: ["App", "Admin", "API"],
    overview:
      "A dedicated social platform for aviation professionals to share posts, connect, follow peers, and chat in a secure environment. With admin controls for user management and subscriptions, it offers a private, aviation-focused social media experience.",
    challenge:
      "Aviation professionals lacked a private, focused space to network, share, and chat away from noisy mainstream social platforms.",
    solution:
      "We built a secure social app with posts, following, real-time chat, and admin controls for user management and subscriptions.",
    outcome:
      "A private, aviation-focused network where professionals connect and share with confidence.",
    features: [
      "Posts & feeds",
      "Follow & connect",
      "Secure real-time chat",
      "Subscription management",
      "Admin user controls",
    ],
    deliverables: ["Mobile App", "Admin Panel", "Chat"],
    technologies: ["Flutter", "Node.js", "MongoDB"],
    status: "In Development",
    accent: "from-[#2DD4BF] to-[#0F8165]",
    image: "/images/projects/aeroskai.png",
  },
  {
    id: "yesgurl",
    slug: "yesgurl",
    title: "Yes Gurl",
    tagline: "Friendship & community for women.",
    category: "Mobile App",
    type: "Social & Community App",
    year: "2025",
    platforms: ["App"],
    overview:
      "A friendship-first social app built for women to meet, connect, and build community. Yes Gurl pairs intentional matching with private group spaces, making it easy to form real-life friendships in a safe, welcoming environment.",
    challenge:
      "Mainstream social apps weren't built for women looking for genuine platonic friendships, leaving a gap for a safer, more focused community space.",
    solution:
      "We designed and shipped a Flutter app with verified profiles, interest-based matching, private group chats, and trust-first onboarding so every interaction feels safe.",
    outcome:
      "A growing community where women find real friendships — launched on both the App Store and Play Store.",
    features: [
      "Interest-based friend matching",
      "Verified women-only profiles",
      "Private group chats",
      "Trust-first onboarding",
      "Community events",
    ],
    deliverables: ["iOS & Android App", "Matching Engine", "Community Tools"],
    technologies: ["Flutter", "Firebase", "Node.js"],
    status: "Live",
    accent: "from-[#34D399] to-[#0B6E57]",
    image: "/images/projects/yesgurl.png",
    links: [
      { kind: "app-store", label: "App Store", url: "https://apps.apple.com/gb/app/yes-gurl-friendship-for-women/id6753656100" },
      { kind: "play-store", label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.mycompany.yesgurl" },
    ],
  },
];

/** Projects featured on the homepage (max 4) — the ones with real screenshots. */
export const FEATURED_PROJECTS: Project[] = PROJECTS.filter((p) => p.image).slice(0, 4);

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
