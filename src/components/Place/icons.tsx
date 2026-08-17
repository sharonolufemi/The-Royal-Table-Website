import checkCircleUrl from "../../assets/icons/place-check-circle.svg";
import checkUrl from "../../assets/icons/place-check.svg";
import chevronDownUrl from "../../assets/icons/place-chevron-down.svg";
import crossUrl from "../../assets/icons/place-cross.svg";

export function CheckIcon({ className = "size-[24px]" }: { className?: string }) {
  return <img src={checkUrl} alt="" className={className} />;
}

export function CrossIcon({ className = "size-[24px]" }: { className?: string }) {
  return <img src={crossUrl} alt="" className={className} />;
}

/** Tablet/Mobile's checkmark treatment — a filled purple check, no circle backdrop (distinct from Web's circled CheckIcon). */
export function CheckCircleIcon({ className = "size-[24px]" }: { className?: string }) {
  return <img src={checkCircleUrl} alt="" className={className} />;
}

export function ChevronDownIcon({ className = "size-[28px]" }: { className?: string }) {
  return <img src={chevronDownUrl} alt="" className={className} />;
}
