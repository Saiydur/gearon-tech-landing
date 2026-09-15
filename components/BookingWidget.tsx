import Button from "@/components/ui/Button";
import { BOOKING_URL, CALENDAR_ACTIVE, CALENDAR_DAYS } from "@/lib/data";

const currentMonthLabel = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });
const isDirectBooking = !BOOKING_URL.startsWith("mailto:");

export default function BookingWidget() {
  return (
    <div className="min-w-0 flex-[1_1_340px] border-l-2 border-divider bg-surface p-7 sm:p-10">
      <div className="mb-4.5 font-mono text-[13px] text-text/62">30-minute discovery call</div>
      <div className="rounded-lg border border-divider bg-bg p-5">
        <div className="mb-3.5 flex items-baseline justify-between">
          <span className="font-heading text-[15px] font-bold">{currentMonthLabel}</span>
          <span className="text-xs text-text/55">GMT+6</span>
        </div>
        <div className="mb-4.5 grid grid-cols-7 gap-1">
          {CALENDAR_DAYS.map((day) => {
            const active = CALENDAR_ACTIVE.has(day);
            return (
              <div
                key={day}
                className="flex aspect-square items-center justify-center rounded text-[11px]"
                style={{
                  background: active ? "var(--color-accent)" : "var(--color-surface)",
                  color: active ? "var(--color-bg)" : "color-mix(in srgb, var(--color-text) 65%, transparent)",
                }}
              >
                {day}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-2 border-t border-divider pt-3.5">
          <div className="flex justify-between text-[13px]">
            <span>Highlighted days</span>
            <span className="text-accent-300">Open</span>
          </div>
        </div>
      </div>
      <Button href={BOOKING_URL} target="_blank" variant="primary" className="mt-4 w-full justify-start px-4! py-3! text-sm!">
        Pick a time
      </Button>
      <p className="mt-3 text-xs text-text/58">
        {isDirectBooking
          ? "Opens our live calendar - pick any open slot."
          : "Email us your availability - we reply the same business day."}
      </p>
    </div>
  );
}
