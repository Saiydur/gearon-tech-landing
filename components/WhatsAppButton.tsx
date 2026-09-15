import { SiWhatsapp } from "@icons-pack/react-simple-icons";

// Renders nothing until NEXT_PUBLIC_WHATSAPP_NUMBER is set - add it in .env / hosting
// config (international format, digits only, e.g. 8801XXXXXXXXX) and this goes live
// with no code change.
export default function WhatsAppButton() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (!number) return null;

  const href = `https://wa.me/${number}?text=${encodeURIComponent("Hi GearON Tech, I'd like to talk about a project.")}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="Chat with GearON Tech on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-accent text-bg shadow-[0_0_22px_-6px_var(--color-accent)] transition-[filter,transform] duration-150 hover:bg-accent-600 hover:shadow-[0_0_28px_-4px_var(--color-accent)] active:scale-[0.94] sm:bottom-7 sm:right-7"
    >
      <SiWhatsapp size={24} color="currentColor" title="" />
    </a>
  );
}
