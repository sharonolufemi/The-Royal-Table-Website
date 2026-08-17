import type { ReactNode } from "react";
import { useScrollFadeIn } from "../../hooks/useScrollFadeIn";

/**
 * Wraps content in a subtle, scroll-triggered fade-in (opacity 0 -> 1 only,
 * no slide/scale). Fires once the first time the element enters the
 * viewport and never fades back out on scroll-back.
 *
 * Reuse for any future section:
 *
 *   <FadeInSection>
 *     <YourSection />
 *   </FadeInSection>
 *
 * Pass `className` through for layout (the wrapper is a plain <div>, so
 * apply width/flex classes there same as you would on any container).
 * `threshold` (0-1, default 0.15) controls how much of the element must
 * be visible before the fade triggers; `durationMs` (default 500) controls
 * the fade speed.
 *
 * Respects `prefers-reduced-motion`: users who request reduced motion see
 * the content immediately, with no animation.
 */
export default function FadeInSection({
  children,
  className = "",
  threshold = 0.15,
  durationMs = 500,
}: {
  children: ReactNode;
  className?: string;
  threshold?: number;
  durationMs?: number;
}) {
  const { ref, isVisible } = useScrollFadeIn<HTMLDivElement>(threshold);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      ref={ref}
      className={className}
      style={
        prefersReducedMotion
          ? undefined
          : {
              opacity: isVisible ? 1 : 0,
              transition: `opacity ${durationMs}ms ease-out`,
            }
      }
    >
      {children}
    </div>
  );
}
