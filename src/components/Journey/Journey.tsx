import journeyBanner from "../../assets/images/journey-banner.png";
import Badge from "../Badge";
import FadeInSection from "../FadeInSection/FadeInSection";
import ReserveButton from "../ReserveButton";

const KICKER = "Begin Your Journey";
const HEADLINE_LINE_1 = "The vision God gave you needs a community to flourish.";
const HEADLINE_LINE_2 = "Don’t let another season pass in isolation.";
const CTA_TEXT = "Claim your seat";
const IMPACT_TITLE = "One Seed. Two Impacts.";
const IMPACT_SUBTITLE = "Your registration creates impact in two powerful ways.";
const AT_YOUR_TABLE_DESC =
  "When you claim your seat at The Royal Table, you invest in your own growth through mentorship, masterclasses, accountability, and community.";

/**
 * Web (lg): two-column row — text + CTA on the left, a static two-card
 * ImpactPanel on the right, both flush top-aligned. No badge pill here — a
 * plain uppercase kicker, matching the
 * same Web-only "no pill" convention already seen in IntroPoints/Mentorship.
 * Section padding is asymmetric (pl-58 / pr-158) straight from Figma, not a
 * typo — kept exactly as specified.
 */
function WebJourney() {
  return (
    <div className="hidden gap-[112px] lg:flex lg:items-start lg:py-[64px] lg:pl-[58px] lg:pr-[158px]">
      <div className="flex flex-1 flex-col items-start gap-[36px]">
        <div className="flex flex-col items-start gap-[16px]">
          <p className="font-open-sans text-wine text-[13px] font-semibold whitespace-nowrap uppercase">
            {KICKER}
          </p>
          <div className="font-helvetica text-[35px] leading-[1.3] text-[#3c424c] font-medium">
            <p className="m-0">{HEADLINE_LINE_1}</p>
            <p className="m-0">{HEADLINE_LINE_2}</p>
          </div>
        </div>
        <ReserveButton className="px-5 py-2 text-base">
          {CTA_TEXT}
        </ReserveButton>
      </div>

      <div className="w-[496px] shrink-0">
        <div className="shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex w-full flex-col items-start gap-[24px] rounded-[8px] bg-white px-[16px] py-[24px]">
          <div className="flex flex-col items-start gap-[12px]">
            <p className="font-helvetica text-grey text-[28px] font-medium">
              {IMPACT_TITLE}
            </p>
            <p className="font-lora text-grey text-[16px]">
              {IMPACT_SUBTITLE}
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-[24px]">
            <div className="bg-gold-10 border-main-gold flex flex-col items-start gap-[8px] rounded-[4px] border-l-[3px] py-[16px] pr-[10px] pl-[16px]">
              <p className="font-helvetica text-grey text-[20px] whitespace-nowrap">
                At Your Table
              </p>
              <p className="font-open-sans text-grey-dark w-[430px] text-[15px] leading-[22px]">
                {AT_YOUR_TABLE_DESC}
              </p>
            </div>
            <div className="bg-gold-10 border-main-gold flex flex-col items-start gap-[8px] rounded-[4px] border-l-[3px] py-[16px] pr-[10px] pl-[16px]">
              <p className="font-helvetica text-grey text-[20px] whitespace-nowrap">
                Beyond Your Table
              </p>
              <p className="font-open-sans text-grey-dark w-[430px] text-[15px] leading-[22px]">
                Your registration also fuels{" "}
                <span className="font-bold">Ignite Outreach Missions</span>
                , supporting undeserved women and children across Nigeria
                through empowerment grants and rescue interventions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Tablet (md): vertical, centered — badge+headline group, then the
 * ImpactPanel card, then the CTA standalone below (not beside the text like
 * Web). Note: the badge-to-headline gap here is 24px, not the established
 * 36px pattern from IntroPoints/Mentorship — confirmed directly in Figma
 * (the "Frame" wrapper around Badge+Headline uses gap-[24px]), so kept as
 * specified rather than forced to 36px. Flagging this as a genuine
 * per-section difference, not an oversight.
 */
function TabletJourney() {
  return (
    <div className="hidden flex-col items-center gap-[28px] md:flex md:px-[40px] md:py-[80px] lg:hidden">
      <div className="flex flex-col items-center gap-[5px]">
        <Badge className="self-center" textClassName="text-[13px]">
          {KICKER}
        </Badge>
        <div className="font-helvetica w-[604px] text-center text-[32px] leading-[1.3] text-[#3c424c] font-medium">
          <p className="m-0">{HEADLINE_LINE_1}</p>
          <p className="m-0">{HEADLINE_LINE_2}</p>
        </div>
      </div>

      <div className="w-[496px]">
        <div className="shadow-[0px_4px_2px_rgba(0,0,0,0.25)] flex w-full flex-col items-start gap-[24px] rounded-[8px] bg-white px-[16px] py-[24px]">
          <div className="flex flex-col items-start gap-[8px]">
            <p className="font-helvetica text-grey text-[24px] font-medium">
              {IMPACT_TITLE}
            </p>
            <p className="font-lora text-grey text-[16px]">
              {IMPACT_SUBTITLE}
            </p>
          </div>

          <div className="flex w-full flex-col items-start gap-[24px]">
            <div className="bg-gold-10 border-main-gold flex flex-col items-start gap-[8px] rounded-[4px] border-l-[3px] py-[16px] pr-[10px] pl-[16px]">
              <p className="font-helvetica text-grey text-[20px] whitespace-nowrap">
                At Your Table
              </p>
              <p className="font-open-sans text-grey-dark w-[430px] text-[14px]">
                {AT_YOUR_TABLE_DESC}
              </p>
            </div>
            <div className="bg-gold-10 border-main-gold flex flex-col items-start gap-[8px] rounded-[4px] border-l-[3px] py-[16px] pr-[10px] pl-[16px]">
              <p className="font-helvetica text-grey text-[20px] whitespace-nowrap">
                Beyond Your Table
              </p>
              <p className="font-open-sans text-grey-dark w-[430px] text-[14px]">
                Your registration also fuels{" "}
                <span className="font-bold">Ignite Outreach Missions</span>
                , supporting undeserved women and children across Nigeria
                through empowerment grants and rescue interventions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ReserveButton className="px-4 py-2 text-base">
        {CTA_TEXT}
      </ReserveButton>
    </div>
  );
}

/**
 * Mobile (base): left-aligned. Uniquely includes a photo banner between the
 * headline and the impact content — Web/Tablet have no equivalent image in
 * this section at all. The impact cards are also a horizontal-scroll row
 * here (no chevron nav, unlike Investment's carousel — just plain native
 * scroll), not the stacked column used on Web/Tablet.
 *
 * Note: Figma's "Beyond Your Table" mobile card currently repeats Card 1's
 * "At Your Table" body copy verbatim, rather than the distinct "Ignite
 * Outreach Missions" copy Web/Tablet both use for that same card. That reads
 * as a content authoring slip in the file (the heading and body would be
 * thematically mismatched otherwise), so I used the correct/distinct copy
 * here instead of replicating the duplicate — flagging this so you can
 * confirm or revert if the duplication was actually intentional.
 */
function MobileJourney() {
  return (
    <div className="flex w-full flex-col items-start gap-[16px] px-[20px] py-[32px] md:hidden">
      <div className="flex w-full flex-col items-start gap-[4px]">
        <Badge textClassName="text-[13px]">{KICKER}</Badge>

        <div className="font-helvetica w-[330px] text-[24px] leading-[1.3] text-[#3c424c] font-medium">
          <p className="m-0">{HEADLINE_LINE_1}</p>
          <p className="m-0">{HEADLINE_LINE_2}</p>
        </div>
      </div>

      <div className="relative h-[180px] w-full overflow-hidden rounded-[6px]">
        <img
          src={journeyBanner}
          alt="Women embracing in community together"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="flex w-full flex-col items-start gap-[12px]">
        <div className="flex flex-col items-start gap-[8px]">
          <p className="font-helvetica text-[20px] text-[#3c424c] font-medium">
            {IMPACT_TITLE}
          </p>
          <p className="font-lora text-grey text-[13px] whitespace-nowrap">
            {IMPACT_SUBTITLE}
          </p>
        </div>

        <div className="flex w-full gap-[24px] overflow-x-auto pr-[14px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="bg-gold-10 border-main-gold flex shrink-0 flex-col items-start gap-[4px] rounded-[4px] border-l-2 py-[12px] pr-[20px] pl-[8px]">
            <p className="font-helvetica text-grey text-[15px] whitespace-nowrap">
              At Your Table
            </p>
            <p className="font-open-sans text-grey-dark w-[253px] text-[12px] leading-[18px]">
              {AT_YOUR_TABLE_DESC}
            </p>
          </div>
          <div className="bg-gold-10 border-main-gold flex w-[302px] shrink-0 flex-col items-start gap-[4px] rounded-[4px] border-l-2 py-[12px] pr-[20px] pl-[8px]">
            <p className="font-helvetica text-grey text-[15px] whitespace-nowrap">
              Beyond Your Table
            </p>
            <p className="font-open-sans text-grey-dark w-full text-[12px] leading-[18px]">
              Your registration also fuels{" "}
              <span className="font-bold">Ignite Outreach Missions</span>,
              supporting undeserved women and children across Nigeria through
              empowerment grants and rescue interventions.
            </p>
          </div>
        </div>

        <div className="w-full pt-[8px]">
          <ReserveButton className="px-5 py-2 text-xl">
            {CTA_TEXT}
          </ReserveButton>
        </div>
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <FadeInSection>
      <section className="bg-grey-5 w-full">
        <div className="mx-auto max-w-[1512px]">
          <WebJourney />
          <TabletJourney />
          <MobileJourney />
        </div>
      </section>
    </FadeInSection>
  );
}
