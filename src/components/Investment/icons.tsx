import brain from "../../assets/icons/icon-brain.svg";
import community from "../../assets/icons/icon-community.svg";
import faithDove from "../../assets/icons/icon-faith-dove.svg";
import libraryGroup from "../../assets/icons/icon-library-group.svg";
import networkGroup from "../../assets/icons/icon-network-group.svg";
import safeSpace from "../../assets/icons/icon-safe-space.svg";
import strategy from "../../assets/icons/icon-strategy.svg";

/**
 * Some Figma icon exports wrap the glyph in nested inset frames (the vector
 * has baked-in padding that Figma crops via inset% wrappers) rather than a
 * flat image — reproduced here so crop/bleed matches exactly.
 */
type IconSpec =
  | { kind: "flat"; src: string }
  | { kind: "nested"; src: string; outerInset: string; innerInset: string }
  | { kind: "asymmetric"; src: string; inset: string };

export function CardIcon({
  spec,
  className = "",
}: {
  spec: IconSpec;
  className?: string;
}) {
  if (spec.kind === "flat") {
    return (
      <img src={spec.src} alt="" className={`shrink-0 ${className}`} />
    );
  }
  if (spec.kind === "nested") {
    return (
      <div className={`relative shrink-0 overflow-hidden ${className}`}>
        <div className="absolute" style={{ inset: spec.outerInset }}>
          <div className="absolute" style={{ inset: spec.innerInset }}>
            <img src={spec.src} alt="" className="block size-full max-w-none" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={`relative shrink-0 ${className}`}>
      <div className="absolute" style={{ inset: spec.inset }}>
        <img src={spec.src} alt="" className="block size-full max-w-none" />
      </div>
    </div>
  );
}

export const ICONS: Record<
  "industry" | "community" | "library" | "strategy" | "faith" | "safe" | "network",
  IconSpec
> = {
  industry: { kind: "flat", src: brain },
  community: { kind: "flat", src: community },
  library: {
    kind: "nested",
    src: libraryGroup,
    outerInset: "8.33%",
    innerInset: "-3.75%",
  },
  strategy: { kind: "flat", src: strategy },
  faith: { kind: "asymmetric", src: faithDove, inset: "0 -4.21% 0 -4.2%" },
  safe: { kind: "flat", src: safeSpace },
  network: {
    kind: "nested",
    src: networkGroup,
    outerInset: "4.17%",
    innerInset: "-2.27%",
  },
};
