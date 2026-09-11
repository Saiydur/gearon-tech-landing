import {
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiDotnet,
  SiReact,
  SiSupabase,
  SiRedis,
} from "@icons-pack/react-simple-icons";
import type { ComponentType } from "react";

type IconProps = { size?: number; color?: string; title?: string };

const STACK_ICONS: Record<string, ComponentType<IconProps>> = {
  "Next.js": SiNextdotjs,
  NestJS: SiNestjs,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  "ASP.NET Core": SiDotnet,
  "React Native": SiReact,
  Supabase: SiSupabase,
  Redis: SiRedis,
};

export default function Tag({ children }: { children: string }) {
  const Icon = STACK_ICONS[children];

  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-divider px-2 py-1 font-mono text-[11px] leading-none text-text/70">
      {Icon && <Icon size={12} color="currentColor" title="" />}
      {children}
    </span>
  );
}
