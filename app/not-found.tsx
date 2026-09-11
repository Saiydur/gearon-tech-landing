import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center border-b-2 border-divider">
      <div className="mx-auto max-w-[1560px] px-5 py-16 sm:px-8 lg:px-16">
        <div className="mb-6 font-mono text-[13px] text-accent-300">404</div>
        <h1 className="mb-6 max-w-[18ch] font-heading text-[36px] leading-[1.05] font-bold tracking-[-0.025em] sm:text-[52px]">
          This route isn&apos;t in the system.
        </h1>
        <p className="mb-8 max-w-[52ch] text-[17px] leading-[1.65] text-text/78">
          The page you&apos;re looking for doesn&apos;t exist, or moved. Try the work you came for.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/" variant="primary">
            Back to home
          </Button>
          <Button href="/work" variant="secondary">
            See the work
          </Button>
        </div>
      </div>
    </div>
  );
}
