import plusUrl from "../../assets/icons/faq-plus.svg";

/**
 * Figma only defines one icon asset for this toggle ("iconamoon:sign-plus-
 * bold") — every accordion instance in the file references the exact same
 * plus glyph, with no distinct "open"/minus asset and no component-variant
 * node I could locate (checked metadata on the underlying component and
 * searched the design system; found neither). Rotating the plus 45° into an
 * "×" on open is a standard, predictable pattern for this exact icon family,
 * not a directly-confirmed Figma spec — flagging that distinction.
 */
export function PlusIcon({ className = "size-[24px]" }: { className?: string }) {
  return <img src={plusUrl} alt="" className={className} />;
}
