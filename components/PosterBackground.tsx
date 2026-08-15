import { POSTER_GRADIENTS } from "@/lib/poster-gradients";

interface Props {
  /** Number of grid cells to render (default 88) */
  count?: number;
  /** Tailwind opacity class for the grid layer (default "opacity-[0.22]") */
  opacity?: string;
  /** Extra Tailwind column classes for the grid (default "grid-cols-6 sm:grid-cols-8 md:grid-cols-11") */
  cols?: string;
}

/**
 * Full-viewport fixed cinematic poster-grid background.
 * Shared by FAQ, Contact, Pricing, and Policy pages.
 * Rendered server-side — zero client JS.
 */
export default function PosterBackground({
  count = 88,
  opacity = "opacity-[0.22]",
  cols = "grid-cols-6 sm:grid-cols-8 md:grid-cols-11",
}: Props) {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
      <div className={`grid ${cols} gap-px h-full ${opacity}`}>
        {Array.from({ length: count }, (_, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${POSTER_GRADIENTS[i % POSTER_GRADIENTS.length]}`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/65 to-[#0a0a0a]/85" />
      <div className="absolute inset-0 bg-[#0a0a0a]/20 backdrop-blur-[1px]" />
    </div>
  );
}
