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
  // Cover image and extra screenshots, e.g. "/projects/<slug>/cover.png".
  // Drop files into public/projects/<slug>/ and set these to show real
  // screenshots - components fall back to a placeholder while unset.
  image?: string;
  gallery?: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "gearon-ai",
    name: "GearON.ai",
    client: "Own product - SaaS platform",
    sector: "SaaS",
    service: "SaaS platform",
    metric: "3,000+",
    metricLabel: "users on the platform",
    status: "Live",
    summary:
      "My own product, engineered in-house: web, mobile and service layers on one queue-driven platform.",
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
    title: "Dedicated engineering support",
    copy: "Direct access to me, working only on your product, in your standups and your repo - billed monthly, scaled up or down as scope moves.",
  },
  {
    code: "ARCH",
    title: "Technical consulting & architecture",
    copy: "Architecture review, cloud cost control, legacy modernisation and the migration plan that gets you there without a freeze.",
  },
];

export type Application = {
  slug: string;
  title: string;
  copy: string;
  intro: string;
  relatedSlugs?: string[];
};

export const APPLICATIONS: Application[] = [
  {
    slug: "custom-ecommerce-platform",
    title: "Custom Ecommerce Platform",
    copy: "Storefronts, checkout and catalogue built around how you actually sell, not a template.",
    intro:
      "A custom ecommerce platform is a storefront, checkout and catalogue system built around your actual sales process instead of a page builder's defaults. For sellers who've outgrown a templated store - custom pricing logic, catalogue structure or checkout rules a generic platform can't express - we build the commerce layer as software.",
  },
  {
    slug: "pos-inventory-management",
    title: "POS & Inventory Management",
    copy: "Till, stock and multi-branch inventory synced in real time, on the floor and in the back office.",
    intro:
      "A POS and inventory management system connects the till to real-time stock across every branch, so a sale in one location updates inventory everywhere at once. We build this for multi-branch operators who need parts, stock and invoicing in one system instead of reconciling spreadsheets at month-end.",
    relatedSlugs: ["automotive-erp"],
  },
  {
    slug: "business-automation-software",
    title: "Business Automation Software",
    copy: "The manual steps between your systems, replaced with workflows that run themselves.",
    intro:
      "Business automation software replaces the manual steps between the systems you already run - copying data between tools, chasing approvals, re-entering the same record twice - with workflows that execute themselves. We build this into operations where manual handling breaks down: work orders, crews, field reporting.",
    relatedSlugs: ["property-preservation-maintenance"],
  },
  {
    slug: "hrm-business-management",
    title: "HRM & Business Management",
    copy: "Payroll, attendance, leave and workforce operations in one system your HR team actually uses.",
    intro:
      "An HRM system centralises payroll, attendance, leave and workforce records into one system of record instead of scattered spreadsheets and forms. We build these for growing teams where HR still runs on manual tracking and the gaps are starting to cost real time.",
  },
  {
    slug: "modern-lms",
    title: "Modern LMS",
    copy: "Course delivery, enrolment and progress tracking built to hold thousands of concurrent learners.",
    intro:
      "A modern LMS delivers courses, tracks enrolment and manages learner progress at a scale a templated platform can't hold. We run the full technical estate behind Bondi Pathshala's 500,000+ users, from content delivery to enrolment - live infrastructure, not a theoretical capability.",
    relatedSlugs: ["bondi-pathshala", "Topperon"],
  },
  {
    slug: "automated-examination-system",
    title: "Automated Examination System",
    copy: "Question banks, timed delivery and proctoring for institutions running exams online.",
    intro:
      "An automated examination system delivers question banks, timed exams and proctoring for institutions moving testing online. Testiphy, our live exam platform, is the proof: built, run and iterated on for the institutions using it to test students at scale.",
    relatedSlugs: ["testiphy"],
  },
  {
    slug: "ai-powered-assessment",
    title: "AI-Powered Assessment",
    copy: "Grading and evaluation that scales past what a human marking team can carry alone.",
    intro:
      "AI-powered assessment applies automated grading and evaluation to work that would otherwise need a human marking team - scoring and feedback at a volume manual grading can't match. We build this into examination and learning platforms where grading is the bottleneck.",
    relatedSlugs: ["testiphy"],
  },
  {
    slug: "ai-chatbot",
    title: "AI Chatbot",
    copy: "A support and sales agent trained on your product, not a generic script.",
    intro:
      "An AI chatbot handles support and sales conversations using your product's actual documentation and data, not a generic scripted flow. We build these to sit inside the systems you already run, trained on your content rather than answering from a blank slate.",
  },
  {
    slug: "automated-customer-support",
    title: "Automated Customer Support",
    copy: "Ticketing, routing and responses that resolve the repeat questions before a human has to.",
    intro:
      "Automated customer support routes, triages and resolves the repeat questions in your ticket queue before a human has to touch them, freeing your support team for the cases that actually need a person. We build this into the support stack, not as a bolt-on widget.",
  },
  {
    slug: "whatsapp-marketing-automation",
    title: "WhatsApp Marketing Automation",
    copy: "Campaigns, broadcasts and lead follow-up run where your customers already are.",
    intro:
      "WhatsApp marketing automation runs campaigns, broadcasts and lead follow-up on the channel your customers already use daily, rather than email they may not open. This matters most in markets like Bangladesh and South Asia, where WhatsApp is the default channel for business communication.",
  },
  {
    slug: "smart-reporting",
    title: "Smart Reporting",
    copy: "Dashboards that turn operational data into the number your management meeting actually needs.",
    intro:
      "Smart reporting turns operational data scattered across your systems into the specific number your management meeting needs, instead of a dashboard nobody opens. We built this into Property Preservation & Maintenance's client reporting, where operators needed a real answer, not a chart.",
    relatedSlugs: ["property-preservation-maintenance"],
  },
  {
    slug: "intelligent-business-assistance",
    title: "Intelligent Business Assistance",
    copy: "AI wired into daily operations - decisions, drafting and lookups, not a chatbot bolted on the side.",
    intro:
      "Intelligent business assistance wires AI into daily operations - decisions, drafting, lookups - directly inside the tools your team already uses, rather than as a separate chatbot they have to remember to open.",
  },
  {
    slug: "modern-erp-solutions",
    title: "Modern ERP Solutions",
    copy: "Finance, operations and inventory unified for enterprises that outgrew spreadsheets years ago.",
    intro:
      "A modern ERP unifies finance, operations and inventory into one system for a business that has outgrown spreadsheets. We've built and run ERPs for a multi-brand car dealer group and a construction firm managing property, projects and tenancy - live systems, not a demo.",
    relatedSlugs: ["automotive-erp", "real-estate-management"],
  },
];

export const STEPS = [
  { n: "01", title: "Consult", copy: "Thirty minutes on the actual problem. No deck, no discovery fee." },
  { n: "02", title: "Discovery sprint", copy: "Two weeks to scope, architecture, risks and a number you can budget against." },
  { n: "03", title: "Design & build", copy: "UI/UX, then weekly increments with QA and CI from the first commit." },
  { n: "04", title: "Deploy", copy: "Cloud infrastructure, pipelines, monitoring and a rollout that does not stop your operation." },
  { n: "05", title: "Operate & scale", copy: "Maintenance, integrations and the person who already knows the codebase." },
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
    title: "Dedicated engineering",
    copy: "Direct access to me, working only on your product, reporting into your process.",
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

export const FAQS = [
  {
    question: "How much does a custom software project cost?",
    answer:
      "It depends on scope, which is exactly what the two-week discovery sprint is for - a fixed-price, fixed-length engagement that ends with requirements, architecture and a costed plan you can take anywhere, including elsewhere.",
  },
  {
    question: "How long does a discovery sprint take?",
    answer:
      "Two weeks, fixed length. You leave with scope, architecture, risks and a number you can budget against - before committing to the build.",
  },
  {
    question: "Do you only take greenfield builds, or can you take over an existing codebase?",
    answer:
      "Both. Product rescue exists specifically for a stalled or half-built product - we audit it first, then move it back into weekly delivery.",
  },
  {
    question: "What does dedicated engineering support look like?",
    answer:
      "Direct access to me, working only on your product, in your standups and your repo, billed monthly and scaled up or down as scope moves - not a rotating pool of contractors.",
  },
  {
    question: "What's your tech stack?",
    answer:
      "Mainly Next.js and NestJS on the web and service layer, plus ASP.NET Core, React Native, PostgreSQL, MongoDB and Redis depending on the system. The exact stack is listed on every case study on the work page.",
  },
  {
    question: "Who will actually build this?",
    answer:
      "Me, directly - based in Dhaka, Bangladesh, working across BD and overseas time zones. No account manager relaying to a team you never meet; you talk to the person writing the code.",
  },
  {
    question: "How do I start?",
    answer:
      "Book a 30-minute call. No deck, no discovery fee - bring the messy version, a spreadsheet, a stalled repo, a system that buckles at month-end, and you'll leave with scope, architecture and a number.",
  },
];

export const STATS = [
  { value: 15, suffix: "+", label: "projects delivered" },
  { value: 6, suffix: "", label: "clients, four in BD" },
  { value: 1, suffix: "", label: "founder, full-stack" },
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
