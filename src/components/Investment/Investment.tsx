import { useRef } from "react";
import mentorshipPhoto from "../../assets/images/investment-mentorship.png";
import FadeInSection from "../FadeInSection/FadeInSection";
import { CardIcon, ICONS } from "./icons";

type CardId = keyof typeof ICONS;

/**
 * hoverTint is the card's own hue re-expressed at a flat 12% alpha — the
 * hover state overlays this on top of the existing bg rather than
 * introducing an unrelated color (each card keeps its own identity on hover).
 */
const CARD_CONTENT: Record<
  CardId,
  { title: string; description: string; bg: string; hoverTint: string }
> = {
  industry: {
    title: "Industry Insights",
    description:
      "Exclusive masterclasses with diverse industry leaders and experts.",
    bg: "bg-[rgba(10,2,171,0.1)]",
    hoverTint: "bg-[rgba(10,2,171,0.12)]",
  },
  community: {
    title: "Community",
    description: "Year-round access to a global community of women leaders.",
    bg: "bg-[rgba(67,139,148,0.1)]",
    hoverTint: "bg-[rgba(67,139,148,0.12)]",
  },
  library: {
    title: "Resource Library",
    description: "The Royal Table Vault (lifetime access to all resources).",
    bg: "bg-[rgba(255,140,0,0.1)]",
    hoverTint: "bg-[rgba(255,140,0,0.12)]",
  },
  strategy: {
    title: "Strategy",
    description: "Quarterly vision & goal-setting workshops.",
    bg: "bg-[rgba(2,64,0,0.1)]",
    hoverTint: "bg-[rgba(2,64,0,0.12)]",
  },
  faith: {
    title: "Faith Accountability",
    description: "Continuous spiritual accountability and prayer support.",
    bg: "bg-[rgba(93,173,223,0.1)]",
    hoverTint: "bg-[rgba(93,173,223,0.12)]",
  },
  safe: {
    title: "Safe Space",
    description: "A home where you're known, seen, and celebrated",
    bg: "bg-[rgba(222,212,31,0.16)]",
    hoverTint: "bg-[rgba(222,212,31,0.12)]",
  },
  network: {
    title: "Network",
    description: "Strategic networking across the 7 Mountains of Culture.",
    bg: "bg-[rgba(171,2,2,0.1)]",
    hoverTint: "bg-[rgba(171,2,2,0.12)]",
  },
};

const MENTORSHIP_DESCRIPTION =
  "12 monthly live mentorship virtual gatherings with Dr. Omofisayo Kayode.";

/**
 * The 6 small Mobile carousel cards (everything but the featured Mentorship
 * card) get a uniform fixed height regardless of copy length. At h-[160px]
 * (bumped from 150px — 150 clipped the 2nd description line on some cards)
 * every description now has enough room for 2 full lines at 14px/leading-snug;
 * line-clamp-2 plus the card's own overflow-hidden (set in BenefitCard's base
 * classes) is kept as a safety net for a description that would otherwise
 * run to a 3rd line.
 */
const MOBILE_SMALL_CARD_GAP = "gap-[8px]";
const MOBILE_SMALL_CARD_PADDING = "px-[18px] py-[20px]";
const MOBILE_SMALL_CARD_DESC = "leading-snug line-clamp-2";

/**
 * No hover variant exists on these card components in Figma — confirmed via
 * get_design_context: the "list 1" etc. instances render as a plain
 * `function List1()` with zero props, unlike NavLinks/CtaButton which
 * expose an explicit `state` variant. This hover treatment is therefore a
 * best-effort addition (not a spec match) — flag for design review. Scoped
 * to Web/Tablet only: Mobile's cards sit inside a touch-scroll carousel,
 * where a lingering post-tap :hover would read as a visual bug rather than
 * feedback.
 *
 * Tailwind v4 renders `-translate-y-*` via the standalone CSS `translate`
 * property (not the legacy `transform`), so that's what gets transitioned —
 * transitioning `transform` here would silently no-op since nothing ever
 * sets that property directly.
 */
const CARD_HOVER =
  "group relative transition-[translate,box-shadow] duration-[200ms] ease-[ease] hover:-translate-y-1 hover:shadow-[2px_2px_2px_rgba(0,0,0,0.2)]";

/** The 12%-alpha tint overlay described above; fades in as its own layer so the color wash and the lift/shadow can ease independently. */
function HoverTint({ tint }: { tint: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-[800ms] ease-[ease] group-hover:opacity-100 ${tint}`}
    />
  );
}

function BenefitCard({
  id,
  className = "",
  gapClassName = "gap-[8px]",
  paddingClassName = "px-[24px] py-[30px]",
  iconClassName = "size-[48px]",
  titleClassName = "text-[14px] text-black",
  descriptionClassName = "text-[16px] text-grey-dark",
  description,
  align = "center",
}: {
  id: CardId;
  className?: string;
  /**
   * Kept as its own prop (rather than folded into className) for the same
   * reason as `align` below: gap-[8px] already lives in the base string,
   * so a second gap-* utility passed via className would just be a second,
   * order-dependent class on the same element — not a reliable override.
   */
  gapClassName?: string;
  /** Same reasoning as gapClassName, for the px/py padding utilities. */
  paddingClassName?: string;
  iconClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  /** Overrides the shared copy for the rare per-breakpoint text variant (e.g. mobile's Safe Space trailing period). */
  description?: string;
  /**
   * "center" (Web/Tablet) vs "left" (Mobile). Kept as a single prop rather
   * than letting callers pass items-start/text-left through className,
   * since two alignment utilities for the same axis on one element is a
   * cascade-order footgun (Tailwind doesn't respect className string order).
   */
  align?: "center" | "left";
}) {
  const card = CARD_CONTENT[id];
  const alignClass =
    align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-xl ${gapClassName} ${paddingClassName} ${alignClass} ${card.bg} ${className}`}
    >
      <HoverTint tint={card.hoverTint} />
      <CardIcon spec={ICONS[id]} className={`shrink-0 ${iconClassName}`} />
      <p
        className={`font-lora shrink-0 font-bold uppercase ${titleClassName}`}
      >
        {card.title}
      </p>
      <p className={`font-helvetica ${descriptionClassName}`}>
        {description ?? card.description}
      </p>
    </div>
  );
}

/** Web (lg): headline + 3-column grid, big Mentorship card centered in column 2. */
function WebInvestment() {
  return (
    <div className="hidden flex-col items-center gap-[55px] lg:flex lg:py-[64px] lg:px-[40px] xl:pl-[110px] xl:pr-[109px]">
      <div className="flex flex-col items-center gap-[12px]">
        <p className="font-helvetica text-[35px] font-medium whitespace-nowrap text-black">
          Your Investment = A Year of Transformation
        </p>
        <p className="font-open-sans text-wine w-[472px] text-center text-[20px]">
          Here&rsquo;s what you&rsquo;ll experience inside this journey
        </p>
      </div>

      <div className="flex w-full items-center justify-center gap-[16px]">
        <div className="flex max-w-[415px] min-w-0 flex-1 flex-col items-start gap-[16px]">
          <BenefitCard id="industry" className={`w-full ${CARD_HOVER}`} />
          <BenefitCard id="community" className={`w-full ${CARD_HOVER}`} />
          <BenefitCard id="library" className={`w-full ${CARD_HOVER}`} />
        </div>

        <div className="flex min-w-0 flex-1 flex-col items-start gap-[16px]">
          <div
            className={`flex w-full flex-col items-center gap-[8px] rounded-xl bg-[rgba(154,100,22,0.14)] px-[32px] pt-[34px] pb-[55px] ${CARD_HOVER}`}
          >
            <div className="relative h-[237px] w-[335px] max-w-full overflow-hidden rounded-[20px]">
              <img
                src={mentorshipPhoto}
                alt="Dr. Omofisayo Kayode"
                className="absolute inset-0 h-full w-full object-cover object-[center_37%]"
              />
            </div>
            <p className="font-lora w-full text-center text-[16px] font-bold text-black">
              MENTORSHIP
            </p>
            <p className="font-helvetica w-full text-center text-[16px] text-grey-dark">
              {MENTORSHIP_DESCRIPTION}
            </p>
            <HoverTint tint="bg-[rgba(154,100,22,0.12)]" />
          </div>
          <BenefitCard id="safe" className={`w-full ${CARD_HOVER}`} />
        </div>

        <div className="flex max-w-[419px] min-w-0 flex-1 flex-col items-center justify-center gap-[16px]">
          <BenefitCard id="network" className={`w-full ${CARD_HOVER}`} />
          <BenefitCard id="strategy" className={`w-full ${CARD_HOVER}`} />
          <BenefitCard
            id="faith"
            className={`w-full ${CARD_HOVER}`}
            descriptionClassName="text-[16px] text-grey"
          />
        </div>
      </div>
    </div>
  );
}

/** Tablet (md): headline + wrapping grid — big Mentorship card first, then 7 cards flow. */
function TabletInvestment() {
  return (
    <div className="hidden flex-col items-center gap-[36px] md:flex md:px-[40px] md:py-[80px] lg:hidden">
      <div className="flex flex-col items-center gap-[12px] text-center">
        <p className="font-helvetica text-[35px] font-medium text-[#3c424c]">
          Your Investment = A Year of Transformation
        </p>
        <p className="font-open-sans text-wine text-[20px]">
          Here&rsquo;s what you&rsquo;ll experience inside this journey
        </p>
      </div>

      <div className="flex flex-wrap items-start justify-center gap-[24px]">
        <div
          className={`flex w-[574px] flex-col items-center gap-[8px] rounded-xl bg-[#f5efe8] px-[32px] py-[48px] ${CARD_HOVER}`}
        >
          <div className="relative h-[337px] w-[494px] overflow-hidden rounded-[8px]">
            <img
              src={mentorshipPhoto}
              alt="Dr. Omofisayo Kayode"
              className="absolute inset-0 h-full w-full object-cover object-[center_37%]"
            />
          </div>
          <p className="font-lora w-full text-center text-[16px] font-bold text-black">
            MENTORSHIP
          </p>
          <p className="font-helvetica text-grey-dark w-full text-center text-[20px]">
            {MENTORSHIP_DESCRIPTION}
          </p>
          <HoverTint tint="bg-[rgba(245,239,232,0.12)]" />
        </div>

        <BenefitCard id="industry" className={`w-[336px] ${CARD_HOVER}`} />
        <BenefitCard id="community" className={`w-[336px] ${CARD_HOVER}`} />
        <BenefitCard id="library" className={`w-[336px] ${CARD_HOVER}`} />
        <BenefitCard id="strategy" className={`w-[336px] ${CARD_HOVER}`} />
        <BenefitCard id="faith" className={`w-[336px] ${CARD_HOVER}`} />
        <BenefitCard id="safe" className={`w-[336px] ${CARD_HOVER}`} />
        <BenefitCard id="network" className={`w-[336px] ${CARD_HOVER}`} />
      </div>
    </div>
  );
}

/**
 * Mobile (base): horizontal swipeable carousel, snap-to-card.
 * Figma's active carousel has visible chevron prev/next buttons below the
 * track (not progress dots — a hidden "Progress-Dots" layer exists in the
 * file but is switched off, confirming no dots). It also drops the "Faith
 * Accountability" card entirely (7 cards here vs. 8 on Web/Tablet) and
 * shortens the headline to "Your Year" instead of "A Year".
 */
function MobileInvestment() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex w-full flex-col items-center gap-[24px] py-[36px] md:hidden">
      <div className="flex w-full flex-col items-start gap-[8px] px-[24px] text-center">
        <p className="font-helvetica text-grey w-full text-[24px] font-medium">
          Your Investment = Your Year of Transformation
        </p>
        <p className="font-open-sans text-wine w-full text-[14px] font-semibold whitespace-nowrap">
          Here&rsquo;s what you&rsquo;ll experience inside this journey
        </p>
      </div>

      <div
        ref={trackRef}
        className="flex w-full snap-x snap-mandatory items-start gap-[16px] overflow-x-auto px-[24px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex w-[303px] shrink-0 snap-center flex-col items-start gap-[8px] rounded-[8px] bg-[rgba(154,100,22,0.14)] px-[18px] py-[20px]">
          <div className="relative h-[192px] w-full overflow-hidden rounded-[4px]">
            <img
              src={mentorshipPhoto}
              alt="Dr. Omofisayo Kayode"
              className="absolute inset-0 h-full w-full object-cover object-[center_37%]"
            />
          </div>
          <p className="font-lora text-[14px] font-bold whitespace-nowrap text-[#1d1d1d]">
            MENTORSHIP
          </p>
          <p className="font-helvetica text-grey-dark text-[14px]">
            {MENTORSHIP_DESCRIPTION}
          </p>
        </div>

        <BenefitCard
          id="industry"
          align="left"
          className="h-[160px] w-[282px] shrink-0 snap-center rounded-md"
          gapClassName={MOBILE_SMALL_CARD_GAP}
          paddingClassName={MOBILE_SMALL_CARD_PADDING}
          iconClassName="size-[32px]"
          titleClassName="text-[14px] whitespace-nowrap text-[#1d1d1d]"
          descriptionClassName={`${MOBILE_SMALL_CARD_DESC} w-[232px] text-[14px] text-[#3c424c]`}
        />
        <BenefitCard
          id="community"
          align="left"
          className="h-[160px] w-[282px] shrink-0 snap-center rounded-md"
          gapClassName={MOBILE_SMALL_CARD_GAP}
          paddingClassName={MOBILE_SMALL_CARD_PADDING}
          iconClassName="size-[32px]"
          titleClassName="text-[14px] whitespace-nowrap text-[#1d1d1d]"
          descriptionClassName={`${MOBILE_SMALL_CARD_DESC} w-[255px] text-[14px] text-grey-dark`}
        />
        <BenefitCard
          id="network"
          align="left"
          className="h-[160px] w-[282px] shrink-0 snap-center rounded-md"
          gapClassName={MOBILE_SMALL_CARD_GAP}
          paddingClassName={MOBILE_SMALL_CARD_PADDING}
          iconClassName="size-[32px]"
          titleClassName="text-[14px] whitespace-nowrap text-[#1d1d1d]"
          descriptionClassName={`${MOBILE_SMALL_CARD_DESC} w-[245px] text-[14px] text-grey-dark`}
        />
        <BenefitCard
          id="strategy"
          align="left"
          className="h-[160px] w-[282px] shrink-0 snap-center rounded-md"
          gapClassName={MOBILE_SMALL_CARD_GAP}
          paddingClassName={MOBILE_SMALL_CARD_PADDING}
          iconClassName="size-[32px]"
          titleClassName="text-[14px] whitespace-nowrap text-[#1d1d1d]"
          descriptionClassName={`${MOBILE_SMALL_CARD_DESC} text-[14px] text-grey-dark`}
        />
        <BenefitCard
          id="library"
          align="left"
          className="h-[160px] w-[282px] shrink-0 snap-center rounded-md"
          gapClassName={MOBILE_SMALL_CARD_GAP}
          paddingClassName={MOBILE_SMALL_CARD_PADDING}
          iconClassName="size-[32px]"
          titleClassName="text-[14px] whitespace-nowrap text-[#1d1d1d]"
          descriptionClassName={`${MOBILE_SMALL_CARD_DESC} text-[14px] text-grey-dark`}
        />
        <BenefitCard
          id="safe"
          align="left"
          className="h-[160px] w-[282px] shrink-0 snap-center rounded-md"
          gapClassName={MOBILE_SMALL_CARD_GAP}
          paddingClassName={MOBILE_SMALL_CARD_PADDING}
          iconClassName="size-[32px]"
          titleClassName="text-[14px] whitespace-nowrap text-[#1d1d1d]"
          descriptionClassName={`${MOBILE_SMALL_CARD_DESC} w-[254px] text-[14px] text-grey-dark`}
          description="A home where you're known, seen, and celebrated."
        />
      </div>
    </div>
  );
}

export default function Investment() {
  return (
    <FadeInSection>
      <section className="w-full bg-grey-5">
        <div className="mx-auto max-w-[1512px]">
          <WebInvestment />
          <TabletInvestment />
          <MobileInvestment />
        </div>
      </section>
    </FadeInSection>
  );
}
