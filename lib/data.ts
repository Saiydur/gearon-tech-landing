export const SITE_URL = "https://tech.gearon.ai";

// Swap in the real Calendly/Cal.com link via NEXT_PUBLIC_BOOKING_URL when it's ready -
// no code change needed. Falls back to a working mailto so the CTA is never dead.
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL || "mailto:hello@gearon.ai?subject=Discovery%20call";

export type Project = {
  slug: string;
  name: string;
  client: string;
  sector: string;
  service: string;
  metric: string;
  metricLabel: string;
  status: "Live" | "In build";
  summary: string;
  arch: string;
  stack: string[];
  home: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "gearon-ai",
    name: "GearON.ai",
    client: "GearON Group - flagship SaaS product",
    sector: "SaaS",
    service: "SaaS platform",
    metric: "3,000+",
    metricLabel: "users on the platform",
    status: "Live",
    summary:
      "The group's own product, engineered in-house: web, mobile and service layers on one queue-driven platform.",
    arch: "Microservice architecture",
    stack: ["Next.js", "NestJS", "ASP.NET Core", "React Native", "PostgreSQL", "MongoDB", "Redis"],
    home: true,
  },
  {
    slug: "automotive-erp",
    name: "Automotive ERP",
    client: "Multi-brand car dealer group",
    sector: "Automotive",
    service: "ERP",
    metric: "10+",
    metricLabel: "car dealers onboarded",
    status: "Live",
    summary:
      "Inventory, service jobs, parts and invoicing in one system, rolled out dealer by dealer without stopping the floor.",
    arch: "Modular monolith",
    stack: ["Next.js", "NestJS", "PostgreSQL"],
    home: true,
  },
  {
    slug: "property-preservation-maintenance",
    name: "Property Preservation & Maintenance",
    client: "US field-services operators",
    sector: "Field services",
    service: "ERP",
    metric: "15+",
    metricLabel: "LLCs onboarded",
    status: "Live",
    summary:
      "Work orders, crews, photo evidence and client reporting for property preservation contractors across the US.",
    arch: "Semi-microservice",
    stack: ["Next.js", "NestJS", "PostgreSQL", "MongoDB"],
    home: true,
  },
  {
    slug: "real-estate-management",
    name: "Real Estate Management",
    client: "Boshomoti Construction Ltd",
    sector: "Real estate",
    service: "Enterprise software",
    metric: "50+",
    metricLabel: "staff working in the system",
    status: "Live",
    summary:
      "Property, project and tenancy management for a construction group, built on their existing Microsoft stack.",
    arch: "ASP.NET Core MVC",
    stack: ["ASP.NET Core", "C#", "MSSQL"],
    home: true,
  },
  {
    slug: "connects-bd",
    name: "Connects BD",
    client: "connectsbd.com",
    sector: "Digital services",
    service: "Web platform",
    metric: "3,500+",
    metricLabel: "registered users",
    status: "Live",
    summary:
      "A public-facing services platform taken from zero to a few thousand users on a lean managed backend.",
    arch: "Managed backend",
    stack: ["Next.js", "NestJS", "Supabase"],
    home: true,
  },
  {
    slug: "ota-platform",
    name: "OTA Platform",
    client: "Confidential - travel",
    sector: "Travel",
    service: "Marketplace",
    metric: "Soon",
    metricLabel: "launching in India, travel packages",
    status: "In build",
    summary: "A packages-first online travel agency for the Indian market. Under NDA until launch.",
    arch: "Details under NDA",
    stack: ["Next.js", "NestJS"],
    home: true,
  },
  {
    slug: "bondi-pathshala",
    name: "Bondi Pathshala",
    client: "bondipathshala.education",
    sector: "Education",
    service: "Web platform",
    metric: "500,000+",
    metricLabel: "users on the platform",
    status: "Live",
    summary:
      "We run the whole Bondi Pathshala technical estate - courses, enrolment and delivery for Bangladeshi students at scale.",
    arch: "Full-stack platform ownership",
    stack: ["Next.js", "NestJS", "PostgreSQL", "MongoDB", "Redis", "MQTT", "Datadog", "Kubernetes"],
    home: true,
  },
  {
    slug: "Topperon",
    name: "Topperon",
    client: "topperon.com",
    sector: "Education",
    service: "SaaS platform",
    metric: "Live",
    metricLabel: "edtech ecosystem",
    status: "Live",
    summary: "A multi-product edtech ecosystem, built and run as one connected platform rather than separate tools.",
    arch: "Details on request",
    stack: ["Next.js", "NestJS"],
    home: false,
  },
  {
    slug: "testiphy",
    name: "Testiphy",
    client: "testiphy.com",
    sector: "Education",
    service: "Assessment platform",
    metric: "Live",
    metricLabel: "online exam system",
    status: "Live",
    summary: "A digital exam system - built, run and iterated on for the institutions using it to test students online.",
    arch: "Details on request",
    stack: ["Next.js", "NestJS"],
    home: false,
  },
  {
    slug: "sales-marketing-crm",
    name: "Sales & Marketing CRM",
    client: "Confidential - sales & marketing",
    sector: "Sales & marketing",
    service: "CRM platform",
    metric: "Live",
    metricLabel: "pipeline & marketing tracking",
    status: "Live",
    summary: "A CRM built around a real sales process - pipeline stages, marketing attribution and lead handoff in one system.",
    arch: "Details on request",
    stack: ["Next.js", "NestJS"],
    home: false,
  },
];

export const SERVICES = [
  {
    code: "WEB",
    title: "Custom web & mobile apps",
    copy: "One engineering discipline across web, iOS and Android - Next.js and React Native, shipped in weekly increments you can see.",
  },
  {
    code: "ERP",
    title: "Enterprise software",
    copy: "ERP, operations and back-office systems for dealer groups, property operators and construction firms. Built to survive month-end.",
  },
  {
    code: "AI",
    title: "AI-powered solutions",
    copy: "Retrieval, automation and decision support wired into the systems you already run, not bolted on beside them.",
  },
  {
    code: "TEAM",
    title: "Dedicated development teams",
    copy: "A named squad - engineers, QA, DevOps - in your standups and your repo, billed monthly, scaled up or down as scope moves.",
  },
  {
    code: "ARCH",
    title: "Technical consulting & architecture",
    copy: "Architecture review, cloud cost control, legacy modernisation and the migration plan that gets you there without a freeze.",
  },
];

export type Application = {
  title: string;
  copy: string;
  relatedSlugs?: string[];
};

export const APPLICATIONS: Application[] = [
  {
    title: "Custom Ecommerce Platform",
    copy: "Storefronts, checkout and catalogue built around how you actually sell, not a template.",
  },
  {
    title: "POS & Inventory Management",
    copy: "Till, stock and multi-branch inventory synced in real time, on the floor and in the back office.",
    relatedSlugs: ["automotive-erp"],
  },
  {
    title: "Business Automation Software",
    copy: "The manual steps between your systems, replaced with workflows that run themselves.",
    relatedSlugs: ["property-preservation-maintenance"],
  },
  {
    title: "HRM & Business Management",
    copy: "Payroll, attendance, leave and workforce operations in one system your HR team actually uses.",
  },
  {
    title: "Modern LMS",
    copy: "Course delivery, enrolment and progress tracking built to hold thousands of concurrent learners.",
    relatedSlugs: ["bondi-pathshala", "Topperon"],
  },
  {
    title: "Automated Examination System",
    copy: "Question banks, timed delivery and proctoring for institutions running exams online.",
    relatedSlugs: ["testiphy"],
  },
  {
    title: "AI-Powered Assessment",
    copy: "Grading and evaluation that scales past what a human marking team can carry alone.",
    relatedSlugs: ["testiphy"],
  },
  {
    title: "AI Chatbot",
    copy: "A support and sales agent trained on your product, not a generic script.",
  },
  {
    title: "Automated Customer Support",
    copy: "Ticketing, routing and responses that resolve the repeat questions before a human has to.",
  },
  {
    title: "WhatsApp Marketing Automation",
    copy: "Campaigns, broadcasts and lead follow-up run where your customers already are.",
  },
  {
    title: "Smart Reporting",
    copy: "Dashboards that turn operational data into the number your management meeting actually needs.",
    relatedSlugs: ["property-preservation-maintenance"],
  },
  {
    title: "Intelligent Business Assistance",
    copy: "AI wired into daily operations - decisions, drafting and lookups, not a chatbot bolted on the side.",
  },
  {
    title: "Modern ERP Solutions",
    copy: "Finance, operations and inventory unified for enterprises that outgrew spreadsheets years ago.",
    relatedSlugs: ["automotive-erp", "real-estate-management"],
  },
];

export const STEPS = [
  { n: "01", title: "Consult", copy: "Thirty minutes on the actual problem. No deck, no discovery fee." },
  { n: "02", title: "Discovery sprint", copy: "Two weeks to scope, architecture, risks and a number you can budget against." },
  { n: "03", title: "Design & build", copy: "UI/UX, then weekly increments with QA and CI from the first commit." },
  { n: "04", title: "Deploy", copy: "Cloud infrastructure, pipelines, monitoring and a rollout that does not stop your operation." },
  { n: "05", title: "Operate & scale", copy: "Maintenance, integrations and the squad that already knows the codebase." },
];

export const OFFERS = [
  {
    tag: "Two weeks",
    title: "Discovery sprint",
    copy: "Requirements, architecture and a costed plan. Yours to take anywhere, including elsewhere.",
    terms: "Fixed price · fixed length",
  },
  {
    tag: "Monthly",
    title: "Dedicated squad",
    copy: "Named engineers, QA and DevOps working only on your product, reporting into your process.",
    terms: "Rolling · scale up or down",
  },
  {
    tag: "Advisory",
    title: "CTO-as-a-service",
    copy: "Architecture calls, hiring, vendor decisions and technical risk for founders without a CTO yet.",
    terms: "Retained · hours per month",
  },
  {
    tag: "Takeover",
    title: "Product rescue",
    copy: "A stalled or half-built product audited, stabilised and moved back into weekly delivery.",
    terms: "Audit first, then build",
  },
];

export const STATS = [
  { value: 15, suffix: "+", label: "projects delivered" },
  { value: 6, suffix: "", label: "clients, four in BD" },
  { value: 12, suffix: "", label: "engineers, hybrid" },
];

export const CALENDAR_DAYS = Array.from({ length: 21 }, (_, i) => i + 1);
export const CALENDAR_ACTIVE = new Set([6, 8, 13, 15, 20]);

export const STACK_OPTIONS = [
  "Next.js",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "ASP.NET Core",
  "React Native",
  "Supabase",
  "Redis",
  "MQTT",
  "Datadog",
  "Kubernetes",
];

export function uniqueValues<T, K extends keyof T>(items: T[], key: K): string[] {
  const values = items.map((item) => String(item[key]));
  return values.filter((value, index) => values.indexOf(value) === index);
}
