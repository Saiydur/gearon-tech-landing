import Image from "next/image";

export default function ProjectImage({
  src,
  alt,
  className,
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  if (!src) {
    return (
      <div
        className={`flex items-center justify-center border border-dashed border-divider bg-surface font-mono text-xs text-text/45 ${className ?? ""}`}
      >
        add screenshot
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-surface ${className ?? ""}`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
    </div>
  );
}
