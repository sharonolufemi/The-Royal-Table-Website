import type { ReactNode } from "react";
import FadeInSection from "../FadeInSection/FadeInSection";

type Point = {
  number: string;
  title: string;
  description: ReactNode;
};

const POINTS: Point[] = [
  {
    number: "01",
    title: "Accountability",
    description: "When the momentum slows down.",
  },
  {
    number: "02",
    title: "A Safe Space",
    description: "To process leadership challenges as a woman.",
  },
  {
    number: "03",
    title: "A True Community",
    description: "With women who understand your 360° life. Thriving in EVERY area of life.",
  },
  {
    number: "04",
    title: "A Love Environment",
    description:
      "Where you're seen. Known. Challenged. Celebrated. Held accountable. Prayed for.",
  },
];

const KICKER = "Leading Alone is Exhausting";
const HEADLINE_PART_1 = "You’ve done the work, but the";
const HEADLINE_PART_2_ITALIC = "weight of the win";
const HEADLINE_PART_2_TAIL = "feels heavy.";
const HEADLINE_PART_3 = "You’re looking for:";

function OrnamentalDivider() {
  return (
    <div className="flex w-full items-center gap-[12px] px-[20px] pt-[8px] md:gap-[16px] md:px-[40px] lg:gap-[20px] lg:px-[60px] lg:pt-[12px]">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-main-gold/60" />
      <span className="border-main-gold size-[7px] shrink-0 rotate-45 border" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-main-gold/60" />
    </div>
  );
}

function SectionHeader({
  wrapperClassName,
  kickerClassName,
  headlineClassName,
  breakBeforeWeight = false,
}: {
  wrapperClassName: string;
  kickerClassName: string;
  headlineClassName: string;
  breakBeforeWeight?: boolean;
}) {
  const separator = breakBeforeWeight ? <br /> : " ";
  return (
    <div className={wrapperClassName}>
      <p className={kickerClassName}>{KICKER}</p>
      <p className={headlineClassName}>
        {HEADLINE_PART_1}
        {separator}
        <em className="font-normal italic">{HEADLINE_PART_2_ITALIC}</em> {HEADLINE_PART_2_TAIL}
        {separator}
        {HEADLINE_PART_3}
      </p>
    </div>
  );
}

/**
 * Web (lg): 5-column grid, equal-width columns. Index 0's description gets a
 * manual break before "slows down." on Web only — Tablet/Mobile render the
 * plain string and wrap naturally.
 */
function WebGrid() {
  return (
    <div className="hidden grid-cols-4 gap-[40px] px-[60px] pb-[89px] lg:grid">
      {POINTS.map((point, i) => (
        <div
          key={point.number}
          className={`flex flex-col items-start gap-[12px] ${
            i < POINTS.length - 1 ? "border-faint-underline border-r" : ""
          }`}
        >
          <p className="font-lora text-main-gold text-[14px] font-bold">
            {point.number}
          </p>
          <p className="font-helvetica text-main-gold text-[24px] leading-[1.2] font-normal">
            {point.title}
          </p>
          {point.description && (
            <p className="font-open-sans text-grey-dark pr-[24px] text-[16px] leading-[1.5]">
              {i === 0 ? (
                <>
                  When the momentum
                  <br />
                  slows down.
                </>
              ) : (
                point.description
              )}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * Tablet/Mobile: the 5-column grid can't fit readable text at these widths,
 * so it's adapted to a single stacked column — numeral/heading/body per row.
 */
function StackedList({
  containerClassName,
  dividerPadClassName,
  numberClassName,
  titleClassName,
  descClassName,
}: {
  containerClassName: string;
  dividerPadClassName: string;
  numberClassName: string;
  titleClassName: string;
  descClassName: string;
}) {
  return (
    <div className={containerClassName}>
      {POINTS.map((point, i) => (
        <div
          key={point.number}
          className={`flex flex-col items-start gap-[8px] ${
            i > 0 ? `border-faint-underline border-t ${dividerPadClassName}` : ""
          }`}
        >
          <p className={numberClassName}>{point.number}</p>
          <p className={titleClassName}>{point.title}</p>
          {point.description && <p className={descClassName}>{point.description}</p>}
        </div>
      ))}
    </div>
  );
}

export default function IntroPoints() {
  return (
    <FadeInSection>
      <section className="bg-grey-5 w-full">
        <div className="mx-auto max-w-[1512px]">
          <OrnamentalDivider />

          {/* Web */}
          <div className="hidden lg:block">
            <SectionHeader
              wrapperClassName="flex flex-col items-start gap-[16px] px-[60px] pt-[49px] pb-[46px]"
              kickerClassName="font-open-sans text-wine text-[13px] font-semibold whitespace-nowrap uppercase"
              headlineClassName="font-helvetica text-[#3c424c] max-w-[900px] text-[35px] leading-[1.3] font-medium"
              breakBeforeWeight
            />
            <WebGrid />
          </div>

          {/* Tablet */}
          <div className="hidden md:block lg:hidden">
            <SectionHeader
              wrapperClassName="flex flex-col items-start gap-[12px] px-[40px] pt-[56px] pb-[36px]"
              kickerClassName="font-open-sans text-wine text-[13px] font-semibold whitespace-nowrap uppercase"
              headlineClassName="font-helvetica text-[#3c424c] text-[32px] leading-[1.3] font-medium"
              breakBeforeWeight
            />
            <StackedList
              containerClassName="flex flex-col gap-[24px] px-[40px] pb-[64px]"
              dividerPadClassName="pt-[24px]"
              numberClassName="font-lora text-main-gold text-[14px] font-bold"
              titleClassName="font-helvetica text-main-gold text-[24px] leading-[1.2] font-normal"
              descClassName="font-open-sans text-grey-dark text-[15px] leading-[1.5]"
            />
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <SectionHeader
              wrapperClassName="flex flex-col items-start gap-[10px] px-[20px] pt-[40px] pb-[28px]"
              kickerClassName="font-open-sans text-wine text-[13px] font-semibold whitespace-nowrap uppercase"
              headlineClassName="font-helvetica text-[#3c424c] text-[24px] leading-[1.3] font-medium"
            />
            <StackedList
              containerClassName="flex flex-col gap-[20px] px-[20px] pb-[40px]"
              dividerPadClassName="pt-[20px]"
              numberClassName="font-lora text-main-gold text-[13px] font-bold"
              titleClassName="font-helvetica text-main-gold text-[20px] leading-[1.2] font-normal whitespace-nowrap"
              descClassName="font-open-sans text-grey-dark text-[14px] leading-[1.5]"
            />
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}
