import { APPLICATIONS, PROJECTS, SERVICES, SITE_URL } from "@/lib/data";

// llms.txt (llmstxt.org) - a plain-markdown summary of the site for AI
// crawlers/answer engines to ingest directly, alongside sitemap.xml/robots.txt
// for classic search crawlers. Generated from the same data as the rest of
// the site so it can't drift out of sync.
export const dynamic = "force-static";

export async function GET() {
  const lines: string[] = [];

  lines.push("# GearON Tech");
  lines.push("");
  lines.push(
    "> Independent software practice building custom web and mobile apps, enterprise software and ERP, AI-powered solutions, and dedicated engineering support. Founder-led, based in Dhaka, Bangladesh, founded 2025.",
  );
  lines.push("");

  lines.push("## Services");
  lines.push("");
  for (const service of SERVICES) {
    lines.push(`- ${service.title}: ${service.copy}`);
  }
  lines.push("");

  lines.push("## Solutions");
  lines.push("");
  for (const app of APPLICATIONS) {
    lines.push(`- [${app.title}](${SITE_URL}/solutions/${app.slug}): ${app.copy}`);
  }
  lines.push("");

  lines.push("## Case studies");
  lines.push("");
  for (const project of PROJECTS) {
    lines.push(
      `- [${project.name}](${SITE_URL}/work/${project.slug}): ${project.summary} (${project.metric} ${project.metricLabel})`,
    );
  }
  lines.push("");

  lines.push("## Company");
  lines.push("");
  lines.push(`- [Home](${SITE_URL}): overview, selected work, services and how we work.`);
  lines.push(`- [Work](${SITE_URL}/work): full case study list, filterable by sector, service and stack.`);
  lines.push(`- [Solutions](${SITE_URL}/solutions): the application categories listed above, in full.`);
  lines.push(`- [Book a call](${SITE_URL}/#book): 30-minute discovery call, no deck, no discovery fee.`);
  lines.push("- Contact: hello@gearon.ai");

  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
