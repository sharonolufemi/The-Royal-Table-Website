import { useState } from "react";
import Badge from "../Badge";
import FadeInSection from "../FadeInSection/FadeInSection";
import { CheckCircleIcon, CheckIcon, ChevronDownIcon, CrossIcon } from "./icons";

const KICKER = "Is There a Place for You at The Royal Table?";

const YES_ITEMS = [
  'You Are the "Chosen" Leader',
  "You're Done with Isolation",
  "You Value Depth & Strategy",
  "You're Ready to Commit",
  "You Show Up",
];

const NO_ITEMS = [
  "You Want a Quick Fix",
  "You're a Spectator",
  "You're Transactional",
  "You Avoid the Spiritual",
  'You\'re "Program Hopping"',
];

function ClosingLine({ className = "" }: { className?: string }) {
  return (
    <p className={`font-open-sans text-wine text-[15px] ${className}`}>
      If you&rsquo;re nodding <span className="font-bold">&quot;YES,&quot;</span>{" "}
      welcome home. Your seat is waiting.
    </p>
  );
}

/** Web (lg): two side-by-side checklists — both always visible, no expand/collapse. Untouched. */
function WebPlace() {
  return (
    <div className="hidden flex-col items-start gap-[36px] lg:flex">
      <p className="font-open-sans text-wine text-[13px] font-semibold whitespace-nowrap uppercase">
        {KICKER}
      </p>

      <div className="flex w-full flex-col items-center gap-[28px]">
        <div className="flex w-full items-start justify-center gap-[60px] xl:gap-[173px]">
          <div className="flex max-w-[401px] min-w-0 flex-1 flex-col items-start gap-[10px]">
            <p className="font-lora text-main-purple w-full py-[10px] text-[24px] font-medium">
              THE ROYAL TABLE <span className="font-bold">IS</span> FOR YOU IF:
            </p>
            <div className="flex w-full flex-col items-start gap-[14px] py-[16px]">
              {YES_ITEMS.map((item) => (
                <div
                  key={item}
                  className="border-faint-underline flex w-full items-center gap-[28px] border-b-[0.5px] pb-[8px]"
                >
                  <CheckIcon />
                  <p className="font-helvetica min-w-0 flex-1 text-[18px] text-black">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex max-w-[447px] min-w-0 flex-1 flex-col items-start gap-[10px]">
            <p className="font-lora text-grey w-full py-[10px] text-[24px] font-medium">
              THE ROYAL TABLE IS <span className="font-bold">NOT</span> FOR YOU
              IF:
            </p>
            <div className="flex w-full flex-col items-start gap-[14px] py-[16px]">
              {NO_ITEMS.map((item) => (
                <div
                  key={item}
                  className="border-faint-underline flex w-full items-center gap-[28px] border-b-[0.5px] pb-[8px]"
                >
                  <CrossIcon />
                  <p className="font-helvetica min-w-0 flex-1 text-[18px] text-black">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ClosingLine className="w-full text-center" />
      </div>
    </div>
  );
}

/**
 * Tablet (md): rebuilt from TWO separate reference nodes, since the
 * component set (3328:1467) turned out to hold two genuinely different
 * examples, not one collapsed instance with an unverified toggle guess:
 *   - 3328:1468 "Property 1=Default" (h=408) — the COLLAPSED card: single
 *     white box, all four corners rounded, header has a 1.5px purple
 *     border-b, ends in a "See more" button.
 *   - 3328:1497 "Property 1=Default" (h=866, confusingly the same variant
 *     name on a different component) — the EXPANDED state: a 3-segment
 *     stack with a 2px gap between segments, each segment its own distinct
 *     background/rounding:
 *       1. yes-card: white, only top-left corner rounded, header border
 *          thins to 1px (not 1.5px), no button.
 *       2. no-card: grey-5 (cream) background, thin grey border
 *          (not purple), only bottom-right corner rounded, "NOT" header has
 *          no border, criteria text is #3C424C (not the grey token used
 *          elsewhere), icon shrinks to 20px.
 *       3. closing segment: white, thin grey border, fixed h-142px, only
 *          bottom-right corner rounded — holds the closing line in PURPLE
 *          (not the wine color used in the collapsed/Web closing line) and
 *          a chevron rotated 180° as an icon-only collapse toggle (no
 *          "See less" text label at all).
 * This is a real, verified reference — not a guess — so the collapsed→
 * expanded interaction now matches Figma's actual second example exactly.
 */
function TabletPlace() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="hidden flex-col items-center gap-[36px] md:flex lg:hidden">
      <Badge textClassName="text-[13px]">{KICKER}</Badge>

      <div className="flex w-[65.75%] flex-col items-start gap-[2px]">
        {/* yes-card: stays mounted across both states; only its corner rounding and the trailing "See more" region change. */}
        <div
          className={`border-main-purple/10 shadow-[0px_12px_12px_rgba(135,2,171,0.05)] flex w-full flex-col items-center gap-[20px] border bg-white p-[24px] transition-[border-radius] duration-300 ${
            isExpanded ? "rounded-tl-[8px]" : "rounded-[8px]"
          }`}
        >
          <div className="flex w-full items-start pb-[12px]">
            <p className="font-lora text-main-purple flex-1 text-center text-[18px] font-semibold">
              THE ROYAL TABLE <span className="font-bold">IS</span> FOR YOU
              IF:
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-[8px]">
            {YES_ITEMS.map((item) => (
              <div
                key={item}
                className="flex w-full items-center gap-[16px] border-b-[0.5px] border-[rgba(103,103,103,0.12)] px-[4px] py-[10px]"
              >
                <CheckCircleIcon className="size-[24px]" />
                <p className="font-helvetica text-grey flex-1 text-[18px] leading-[1.4]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div
            className={`grid w-full transition-all duration-300 ease-in-out ${isExpanded ? "grid-rows-[0fr]" : "grid-rows-[1fr]"}`}
          >
            <div className="flex justify-center overflow-hidden">
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                aria-expanded={false}
                className="flex items-center gap-[4px]"
              >
                <span className="font-open-sans text-[14px] font-semibold text-[#3c424c]">
                  See more
                </span>
                <ChevronDownIcon className="size-[28px]" />
              </button>
            </div>
          </div>
        </div>

        {/* no-card + closing segment: grows/shrinks in as one animated region. */}
        <div
          className={`grid w-full transition-all duration-300 ease-in-out ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className="flex w-full flex-col items-start gap-[2px] overflow-hidden">
            <div className="bg-grey-5 flex w-full flex-col items-center gap-[20px] rounded-br-[8px] border border-[rgba(103,103,103,0.12)] p-[24px]">
              <div className="flex w-full items-start pb-[12px]">
                <p className="font-lora text-grey flex-1 text-center text-[18px] font-semibold whitespace-nowrap">
                  THE ROYAL TABLE IS <span className="font-bold">NOT</span>{" "}
                  FOR YOU IF:
                </p>
              </div>
              <div className="flex w-full flex-col items-start gap-[8px]">
                {NO_ITEMS.map((item) => (
                  <div
                    key={item}
                    className="flex w-full items-center gap-[16px] border-b-[0.5px] border-[rgba(103,103,103,0.12)] px-[4px] py-[10px]"
                  >
                    <CrossIcon className="size-[20px]" />
                    <p className="font-helvetica flex-1 text-[18px] leading-[1.4] text-[#3c424c]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex h-[142px] w-full flex-col items-center justify-center rounded-br-[8px] border border-[rgba(103,103,103,0.12)] bg-white px-[24px] py-[12px]">
              <p className="font-open-sans text-main-purple w-full pb-[12px] text-center text-[16px]">
                If you&rsquo;re nodding{" "}
                <span className="font-bold">&quot;YES,&quot;</span> welcome
                home. Your seat is waiting.
              </p>
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                aria-label="Show less"
                aria-expanded={true}
                className="flex items-center justify-center"
              >
                <ChevronDownIcon className="size-[28px] rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`grid w-full transition-all duration-300 ease-in-out ${isExpanded ? "grid-rows-[0fr]" : "grid-rows-[1fr]"}`}
      >
        <div className="overflow-hidden">
          <ClosingLine className="text-center" />
        </div>
      </div>
    </div>
  );
}

/**
 * Mobile (base): collapsed state read directly from node 3165:1977
 * ("cards-stack mobile") — that node still only shows the collapsed card in
 * Figma (no expanded/"no-card" example exists there the way Tablet's
 * component set now has one at 3328:1497). The expanded state below mirrors
 * Tablet's now-verified 3-segment structure (no header borders, cream
 * no-card, purple closing segment with icon-only collapse) scaled to
 * Mobile's own established sizing (16px header, 15px criteria, 24px icons,
 * 2px inter-segment gap kept as-is since Figma treats it as a fixed seam
 * width, not something that scales per breakpoint) — flagged as inferred,
 * not verified, until an actual Mobile expanded reference exists to check.
 */
function MobilePlace() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex w-full flex-col items-start gap-[16px] md:hidden">
      <Badge textClassName="text-[13px]">{KICKER}</Badge>

      <div className="border-main-purple w-[350px] rounded-[6px] border-t-4 border-r border-b-4 border-l py-[2px]">
        <div className="flex w-full flex-col items-start gap-[2px]">
          {/* yes-card: stays mounted across both states; only its corner rounding and the trailing "See more" region change. */}
          <div
            className={`border-main-purple/10 shadow-[0px_12px_12px_rgba(135,2,171,0.05)] flex w-full flex-col items-center gap-[20px] border bg-white px-[24px] py-[32px] transition-[border-radius] duration-300 ${
              isExpanded ? "rounded-tl-[6px]" : "rounded-[6px]"
            }`}
          >
            <div className="flex w-full items-start pb-[12px]">
              <p className="font-lora text-main-purple flex-1 text-center text-[16px] font-semibold">
                THE ROYAL TABLE <span className="font-bold">IS</span> FOR YOU
                IF:
              </p>
            </div>

            <div className="flex w-full flex-col items-start gap-[4px]">
              {YES_ITEMS.map((item) => (
                <div
                  key={item}
                  className="flex w-full items-center gap-[16px] border-b-[0.5px] border-[rgba(103,103,103,0.12)] px-[4px] py-[10px]"
                >
                  <CheckCircleIcon className="size-[24px]" />
                  <p className="font-helvetica text-grey flex-1 text-[15px] leading-[1.4]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div
              className={`grid w-full transition-all duration-300 ease-in-out ${isExpanded ? "grid-rows-[0fr]" : "grid-rows-[1fr]"}`}
            >
              <div className="flex justify-center overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsExpanded(true)}
                  aria-expanded={false}
                  className="flex items-center gap-[4px]"
                >
                  <span className="font-open-sans text-[13px] font-semibold text-[#3c424c]">
                    See more
                  </span>
                  <ChevronDownIcon className="size-[24px]" />
                </button>
              </div>
            </div>
          </div>

          {/* no-card + closing segment: grows/shrinks in as one animated region. */}
          <div
            className={`grid w-full transition-all duration-300 ease-in-out ${isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
          >
            <div className="flex w-full flex-col items-start gap-[2px] overflow-hidden">
              <div className="bg-grey-5 flex w-full flex-col items-center gap-[20px] rounded-br-[6px] border border-[rgba(103,103,103,0.12)] px-[24px] py-[32px]">
                <div className="flex w-full items-start pb-[12px]">
                  <p className="font-lora text-grey flex-1 text-center text-[16px] font-semibold whitespace-nowrap">
                    THE ROYAL TABLE IS <span className="font-bold">NOT</span>{" "}
                    FOR YOU IF:
                  </p>
                </div>
                <div className="flex w-full flex-col items-start gap-[4px]">
                  {NO_ITEMS.map((item) => (
                    <div
                      key={item}
                      className="flex w-full items-center gap-[16px] border-b-[0.5px] border-[rgba(103,103,103,0.12)] px-[4px] py-[10px]"
                    >
                      <CrossIcon className="size-[24px]" />
                      <p className="font-helvetica flex-1 text-[15px] leading-[1.4] text-[#3c424c]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex w-full flex-col items-center justify-center rounded-br-[6px] border border-[rgba(103,103,103,0.12)] bg-white px-[24px] py-[16px]">
                <p className="font-open-sans text-main-purple w-full pb-[12px] text-center text-[14px]">
                  If you&rsquo;re nodding{" "}
                  <span className="font-bold">&quot;YES,&quot;</span> welcome
                  home. Your seat is waiting.
                </p>
                <button
                  type="button"
                  onClick={() => setIsExpanded(false)}
                  aria-label="Show less"
                  aria-expanded={true}
                  className="flex items-center justify-center"
                >
                  <ChevronDownIcon className="size-[24px] rotate-180" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Place() {
  return (
    <FadeInSection>
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[1512px] px-[20px] py-[48px] md:px-[40px] md:py-[80px] lg:py-[64px] lg:pr-[61px] lg:pl-[60px]">
          <WebPlace />
          <TabletPlace />
          <MobilePlace />
        </div>
      </section>
    </FadeInSection>
  );
}
