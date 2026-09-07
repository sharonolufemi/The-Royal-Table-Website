import { useState } from "react";
import communityImage from "../../assets/images/community-table.png";
import Badge from "../Badge";
import FadeInSection from "../FadeInSection/FadeInSection";
import { DotIcon } from "./icons";

const KICKER = "What Happens at The Royal Table";
const HEADLINE =
  "The Royal Table is a year-round mentorship community for women committed to 360° Wholeness.";
const SPHERES_INTRO = "Not just one sphere. ALL spheres.";
const SPHERES_HIGHLIGHT = "Spiritual. Professional. Relational. Influential.";
const SPHERES_OUTRO = "This is 360° living - together.";
const DETAILS =
  "Where women gather monthly virtually for teaching, coaching, daily accountability, and deep community.";
const BULLETS = [
  "Your monthly reset and refocus",
  "Your daily accountability circle",
  "Your safe space to be real",
  "Your community of like-minded women",
  "Your continued growth in ALL of life",
];

/**
 * Web's BulletList wrapper has no width in Figma, so each row hugs its own
 * text instead of stretching the border across the whole column — Tablet's
 * is w-full (rows stretch full width, centered). Sharing one component
 * needs a mode switch rather than forcing both to stretch.
 *
 * Divider color also genuinely differs per breakpoint now (re-confirmed):
 * Web's row divider changed to the new #EDEDED "faint underline" token,
 * while Tablet's stayed the original rgba(135,2,171,0.3) purple tint — not
 * a uniform site-wide recolor, so it's a prop, not a shared hardcoded value.
 */
function BulletList({
  className = "",
  stretch = true,
  dividerClassName = "border-[rgba(135,2,171,0.3)]",
}: {
  className?: string;
  stretch?: boolean;
  dividerClassName?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-[4px] ${stretch ? "w-full items-center" : "items-start"} ${className}`}
    >
      {BULLETS.map((text) => (
        <div
          key={text}
          className={`flex items-center gap-[8px] border-b py-[8px] ${dividerClassName} ${stretch ? "w-full" : "w-fit"}`}
        >
          <DotIcon className="size-[15px] shrink-0" />
          <p className="font-lora flex-1 text-[16px] text-[#3c424c] italic">
            {text}
          </p>
        </div>
      ))}
    </div>
  );
}

function ScriptureCaption({
  className = "",
  widthClassName = "w-[369px]",
  textClassName = "text-[14px]",
}: {
  className?: string;
  widthClassName?: string;
  textClassName?: string;
}) {
  return (
    <div
      className={`absolute bottom-0 left-1/2 flex max-w-[90%] -translate-x-1/2 items-center justify-center rounded-t-2xl bg-white px-[6px] py-[10px] ${widthClassName} ${className}`}
    >
      <p className={`font-open-sans text-grey text-center ${textClassName}`}>
        A community of royal priesthood women{" "}
        <span className="font-bold">(1 Peter 2:9) </span>
        thriving in EVERY sphere - spiritual, professional, relational, and
        influential.
      </p>
    </div>
  );
}

/** Web (lg): kicker text above a two-column row — copy left, image right. */
function WebMentorship() {
  return (
    <div className="hidden flex-col lg:flex">
      <div className="flex items-center gap-[40px] xl:gap-[120px]">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-[24px]">
          <div className="flex flex-col items-start gap-[24px]">
            <div className="flex flex-col items-start gap-[16px]">
              <p className="font-open-sans text-wine text-[13px] font-semibold whitespace-nowrap uppercase">
                {KICKER}
              </p>
              <p className="font-helvetica w-full text-[35px] leading-[1.3] font-medium text-[#3c424c]">
                {HEADLINE}
              </p>
            </div>
            <p className="font-lora text-fade-grey text-[16px] leading-[22px] font-medium">
              {SPHERES_INTRO}{" "}
              <span className="text-main-gold">{SPHERES_HIGHLIGHT}</span>
              <br />
              {SPHERES_OUTRO}
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-[24px]">
            <p className="font-lora text-fade-grey text-[16px] font-medium">
              Think of it as:
            </p>
            <BulletList
              stretch={false}
              className="-mt-[6px]"
              dividerClassName="border-faint-underline"
            />
          </div>
        </div>

        <div className="relative h-[593px] w-[660px] min-w-[380px] shrink overflow-hidden rounded-2xl">
          <img
            src={communityImage}
            alt="Women gathered around a table for a mentorship community gathering"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <ScriptureCaption widthClassName="w-[344px]" textClassName="text-[13px]" />
        </div>
      </div>
    </div>
  );
}

/** Tablet (md): centered single column — badge, header, image, then copy. */
function TabletMentorship() {
  return (
    <div className="hidden flex-col items-center gap-[36px] md:flex lg:hidden">
      <div className="flex flex-col items-center gap-[5px]">
        <Badge className="self-center" textClassName="text-[13px]">
          {KICKER}
        </Badge>

        <div className="flex flex-col items-center gap-[24px] text-center">
          <p className="font-helvetica w-full text-[32px] leading-[1.3] text-[#3c424c]">
            {HEADLINE}
          </p>
          <p className="font-lora text-fade-grey text-[16px] leading-[1.5] font-medium">
            {SPHERES_INTRO}
            <br />
            <span className="text-main-gold">{SPHERES_HIGHLIGHT}</span>
            <br />
            {SPHERES_OUTRO}
          </p>
        </div>
      </div>

      <div className="relative h-[608px] w-full overflow-hidden rounded-xl">
        <img
          src={communityImage}
          alt="Women gathered around a table for a mentorship community gathering"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <ScriptureCaption />
      </div>

      <div className="flex w-full flex-col items-center gap-[24px]">
        <p className="font-lora text-grey w-[562px] max-w-full text-center text-[16px]">
          {DETAILS}
        </p>
        <BulletList />
      </div>
    </div>
  );
}

/**
 * Mobile (base): left-aligned. Figma's mobile frame has no bullet list or
 * CTA in view — only a "See more" link — so those are modeled as a
 * client-side expand/collapse (Figma doesn't define an expanded state for
 * this instance, so the toggle's reveal behavior is an assumption).
 */
function MobileMentorship() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col items-start gap-[16px] md:hidden">
      <Badge textClassName="text-[13px]">{KICKER}</Badge>

      <div className="relative h-[240px] w-full overflow-hidden rounded-[6px]">
        <img
          src={communityImage}
          alt="Women gathered around a table for a mentorship community gathering"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </div>

      <div className="flex w-full flex-col items-start gap-[16px]">
        <p className="font-helvetica text-[24px] leading-[1.3] font-medium text-[#3c424c]">
          {HEADLINE}
        </p>
        <p className="font-lora text-[15px] leading-[1.5]">
          <span className="text-fade-grey">{SPHERES_INTRO} </span>
          <span className="font-semibold text-main-gold">
            {SPHERES_HIGHLIGHT}
          </span>{" "}
          <span className="text-fade-grey">{SPHERES_OUTRO}</span>
        </p>
        <p className="font-lora text-fade-grey text-[15px] leading-[1.5]">
          {DETAILS}
        </p>

        {!isExpanded && (
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            aria-expanded={false}
            className="font-open-sans text-[13px] font-semibold text-[#3c424c] underline active:opacity-60"
          >
            See more
          </button>
        )}

        {isExpanded && (
          <>
            <BulletList />
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              aria-expanded={true}
              className="font-open-sans text-[13px] font-semibold text-[#3c424c] underline active:opacity-60"
            >
              See less
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default function Mentorship() {
  return (
    <FadeInSection>
      <section className="w-full bg-grey-5">
        <div className="mx-auto max-w-[1512px] px-[20px] py-[32px] md:px-[40px] md:py-[80px] lg:px-[60px] lg:py-[48px]">
          <WebMentorship />
          <TabletMentorship />
          <MobileMentorship />
        </div>
      </section>
    </FadeInSection>
  );
}
