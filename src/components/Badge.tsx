import type { ReactNode } from "react";

/**
 * The small eyebrow label (e.g. "Leading Alone is Exhausting"). Tablet keeps
 * the original pill treatment (bg-badge-bg / border-badge-border / side
 * padding / bold / letter-spacing). Mobile had all of that stripped in a
 * later Figma pass — no fill, no stroke, no side padding, Open Sans Regular,
 * no tracking — confirmed via fresh get_design_context on the mobile
 * composite, so those properties are now md:-only.
 */
export default function Badge({
  children,
  className = "",
  textClassName = "text-[13px]",
}: {
  children: ReactNode;
  className?: string;
  textClassName?: string;
}) {
  return (
    <div
      className={`inline-flex items-start rounded-md py-[6px] md:border-[0.5px] md:border-badge-border md:bg-badge-bg md:px-[14px] ${className}`}
    >
      <p
        className={`font-open-sans font-medium uppercase text-wine whitespace-nowrap md:font-bold md:tracking-[1.2px] ${textClassName}`}
      >
        {children}
      </p>
    </div>
  );
}
