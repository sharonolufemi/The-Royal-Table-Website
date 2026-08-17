import externalLinkIcon from "../../assets/icons/external-link.svg";
import aboutHero from "../../assets/images/about/about-hero.png";
import founderPhoto from "../../assets/images/about/founder-photo.png";
import FadeInSection from "../FadeInSection/FadeInSection";

const LEARN_MORE_URL = "https://www.thesarahmandate.org/";

const VISION_PARA_2 =
  "As one expression of that vision, The Royal Table provides a place where women can grow in faith, leadership, and community through consistent mentorship, accountability, and meaningful relationships.";

/**
 * One shared rule now covers Web/Tablet/Mobile instead of three hardcoded
 * per-breakpoint sizes (was 40/32/24px): 42px with a comfortable 1.2 leading
 * (up from an overly tight 1.04, which cramped the now-2-line Web layout)
 * and a slight -0.01em tracking for display size, with "bigger vision" in
 * italic purple.
 */
function VisionHeadline({ className = "" }: { className?: string }) {
  return (
    <h1
      className={`font-helvetica text-grey text-[42px] leading-[1.2] tracking-[-0.01em] ${className}`}
    >
      The Royal Table is part of a
      <br className="hidden lg:block" />{" "}
      <em className="text-[#7A2E8A] italic">bigger vision</em>.
    </h1>
  );
}

function VisionPara1() {
  return (
    <>
      The Royal Table is a year-round mentorship community created by{" "}
      <span className="font-bold">The Sarah Mandate®</span>—a global movement
      committed to equipping women to thrive spiritually, personally, and
      professionally.
    </>
  );
}

const FOUNDER_NAME = "Dr. Omofisayo Kayode ( h.c.)";
const EXPERTISE = ["Spiritual Depth", "Strategic Mastery", "Practical Wisdom"];

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LEARN_MORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-main-purple hover:text-main-purple/70 inline-flex w-fit items-center gap-[6px] underline decoration-1 underline-offset-4 transition-colors active:opacity-60 ${className}`}
    >
      <span className="font-open-sans text-[16px] font-bold whitespace-nowrap">
        Learn More About The Sarah Mandate
      </span>
      <img src={externalLinkIcon} alt="" className="size-[18px]" />
    </a>
  );
}

function HeroImage({
  heightClassName,
  roundedClassName,
  titleClassName,
}: {
  heightClassName: string;
  roundedClassName: string;
  titleClassName: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${heightClassName} ${roundedClassName}`}
    >
      <img
        src={aboutHero}
        alt="Women embracing in community"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="bg-main-purple/40 absolute inset-0" />
      <div className="absolute inset-0 flex items-center justify-center">
        <p
          className={`font-helvetica text-center tracking-[0.08em] text-white ${titleClassName}`}
        >
          OUR STORY
        </p>
      </div>
    </div>
  );
}

function ExpertiseBullet({
  label,
  textSize = "text-[16px]",
}: {
  label: string;
  textSize?: string;
}) {
  return (
    <div className="flex items-center gap-[12px]">
      <div className="border-main-purple bg-badge-border h-[8px] w-[16px] shrink-0 rounded-[8px] border" />
      <p className={`font-lora text-grey font-semibold whitespace-nowrap ${textSize}`}>
        {label}
      </p>
    </div>
  );
}

function FounderBio({ textSize = "text-[16px]" }: { textSize?: string }) {
  return (
    <div
      className={`font-open-sans text-grey flex flex-col gap-[21px] ${textSize} leading-[1.6]`}
    >
      <p>
        The visionary behind The Sarah Mandate and a global catalyst for
        women&rsquo;s transformation.
      </p>
      <p>
        A Certified Personal &amp; Executive Coach,{" "}
        <span className="font-bold">
          Certified Management Consultant (CMC Global)
        </span>{" "}
        and entrepreneur with an Honorary Doctorate in Transformational
        Leadership, she brings a powerhouse blend of corporate strategy and
        spiritual depth to her mentorship.
      </p>
      <p>
        As the co-founder of <span className="font-bold">INNVATE (Europe)</span>{" "}
        and{" "}
        <span className="font-bold">
          BIZMAVIN Consulting Service Ltd. (Africa)
        </span>
        , and a steward in Dominion City, Dr. Omofisayo doesn&rsquo;t just
        teach leadership; she lives the &quot;360° life.
      </p>
      <p>Her unique expertise bridges the gap between:</p>
    </div>
  );
}

function FounderClosing({ textSize = "text-[16px]" }: { textSize?: string }) {
  return (
    <div
      className={`font-open-sans text-grey flex flex-col gap-[21px] ${textSize} leading-[1.6]`}
    >
      <p>
        Her mission is rooted in 1 Peter 2:9: empowering women to walk in
        their royal priesthood identity across every sphere of influence
      </p>
      <p>
        <span className="font-bold">The Royal Table</span> is her heart&rsquo;s
        work - a permanent global home where leaders thrive through close,
        expert mentorship.
      </p>
    </div>
  );
}

function FounderBadge({
  className = "",
  textClassName = "text-[13px]",
  paddingClassName = "px-[12px] py-[6px]",
  roundedClassName = "rounded-[10px]",
}: {
  className?: string;
  textClassName?: string;
  paddingClassName?: string;
  roundedClassName?: string;
}) {
  return (
    <div
      className={`bg-gold-10 flex items-center justify-center ${roundedClassName} ${paddingClassName} ${className}`}
    >
      <p className={`font-open-sans whitespace-nowrap text-[#3c424c] ${textClassName}`}>
        About the Founder
      </p>
    </div>
  );
}

/** Web (lg): hero + two-column vision split (headline left, copy + CTA right), then a two-column founder section (bio left, full-bleed photo right). */
function WebAbout() {
  return (
    <div className="hidden flex-col lg:flex">
      <div className="mx-auto flex max-w-[1512px] flex-col gap-[24px] px-[60px] pt-[16px] pb-[64px]">
        <HeroImage
          heightClassName="h-[509px]"
          roundedClassName="rounded-[16px]"
          titleClassName="text-[48px]"
        />

        <div className="flex items-start gap-[80px]">
          <VisionHeadline className="flex-1" />
          <div className="flex flex-1 flex-col items-start gap-[24px]">
            <p className="font-open-sans text-grey text-[18px] leading-[1.6]">
              <VisionPara1 />
            </p>
            <p className="font-open-sans text-grey text-[18px] leading-[1.6]">
              {VISION_PARA_2}
            </p>
            <CtaButton />
          </div>
        </div>
      </div>

      <div className="bg-grey-5 border-faint-underline w-full border-t">
        <div className="mx-auto flex w-full max-w-[1512px] flex-col items-start gap-[16px] px-[60px] pt-[40px] pb-[80px]">
          <FounderBadge
            textClassName="text-[18px]"
            paddingClassName="px-[18px] py-[9px]"
            roundedClassName="rounded-[8px]"
          />
          <div className="flex items-stretch gap-[64px]">
            <div className="flex min-w-0 flex-1 flex-col items-start gap-[24px]">
              <p className="font-lora text-main-gold text-[36px] font-semibold whitespace-nowrap">
                {FOUNDER_NAME}
              </p>
              <FounderBio textSize="text-[16px]" />
              <div className="flex flex-col items-start gap-[12px] p-[4px]">
                {EXPERTISE.map((label) => (
                  <ExpertiseBullet key={label} label={label} />
                ))}
              </div>
              <FounderClosing textSize="text-[16px]" />
            </div>

            <div className="relative min-h-[480px] w-[36%] shrink-0 overflow-hidden rounded-[16px]">
              <img
                src={founderPhoto}
                alt="Dr. Omofisayo Kayode"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Tablet (md): single column throughout — hero, then stacked vision copy, then stacked founder section. */
function TabletAbout() {
  return (
    <div className="hidden flex-col items-center md:flex lg:hidden">
      <div className="mx-auto flex w-full max-w-[1512px] flex-col gap-[20px] px-[40px] pt-[16px] pb-0">
        <HeroImage
          heightClassName="h-[420px]"
          roundedClassName="rounded-[12px]"
          titleClassName="text-[40px]"
        />

        <div className="flex flex-col items-center gap-[24px] text-center">
          <VisionHeadline />
          <p className="font-open-sans text-grey text-[18px] leading-[1.6]">
            <VisionPara1 />
          </p>
          <p className="font-open-sans text-grey text-[18px] leading-[1.6]">
            {VISION_PARA_2}
          </p>
          <CtaButton className="self-start" />
        </div>
      </div>

      <div className="bg-grey-5 border-faint-underline w-full border-t">
        <div className="mx-auto flex w-full max-w-[1512px] flex-col items-start gap-[32px] px-[40px] pt-[56px] pb-[64px]">
          <FounderBadge
            textClassName="text-[18px]"
            paddingClassName="px-[18px] py-[9px]"
            roundedClassName="rounded-[8px]"
          />
          <div className="relative mt-[16px] h-[500px] w-full overflow-hidden rounded-[16px]">
            <img
              src={founderPhoto}
              alt="Dr. Omofisayo Kayode"
              className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
            />
          </div>
          <p className="font-lora text-main-gold text-[32px] font-semibold">
            {FOUNDER_NAME}
          </p>
          <div className="flex w-full flex-col items-start gap-[16px]">
            <FounderBio />
            <div className="flex flex-col items-start gap-[12px] p-[4px]">
              {EXPERTISE.map((label) => (
                <ExpertiseBullet key={label} label={label} />
              ))}
            </div>
            <FounderClosing />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Mobile (base): single column, left-aligned, tighter copy; founder bio in its own cream card. */
function MobileAbout() {
  return (
    <div className="flex flex-col items-center md:hidden">
      <div className="mx-auto flex w-full max-w-[1512px] flex-col gap-[16px] px-[20px] pt-[16px] pb-0">
        <HeroImage
          heightClassName="h-[220px]"
          roundedClassName="rounded-[12px]"
          titleClassName="text-[24px]"
        />

        <div className="flex flex-col items-start gap-[16px]">
          <VisionHeadline />
          <p className="font-open-sans text-grey text-[14px] leading-[1.5]">
            <VisionPara1 />
          </p>
          <p className="font-open-sans text-grey text-[14px] leading-[1.5]">
            {VISION_PARA_2}
          </p>
          <CtaButton />
        </div>
      </div>

      <div className="bg-grey-5 border-faint-underline w-full border-t">
        <div className="mx-auto flex w-full max-w-[1512px] flex-col items-start gap-[16px] px-[20px] pt-[56px] pb-[32px]">
          <FounderBadge
            textClassName="text-[15px]"
            paddingClassName="px-[14px] py-[7px]"
            roundedClassName="rounded-[8px]"
          />
          <div className="relative mt-[16px] h-[280px] w-full overflow-hidden rounded-[12px]">
            <img
              src={founderPhoto}
              alt="Dr. Omofisayo Kayode"
              className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
            />
          </div>
          <div className="flex w-full flex-col items-start gap-[16px] rounded-[8px] px-[8px] py-[16px]">
            <p className="font-lora text-main-gold text-[24px] font-semibold">
              {FOUNDER_NAME}
            </p>
            <FounderBio textSize="text-[14px]" />
            <div className="flex flex-col items-start gap-[12px] p-[4px]">
              {EXPERTISE.map((label) => (
                <ExpertiseBullet key={label} label={label} textSize="text-[14px]" />
              ))}
            </div>
            <FounderClosing textSize="text-[14px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <FadeInSection>
      <div className="bg-grey-5 border-faint-underline w-full border-t">
        <WebAbout />
        <TabletAbout />
        <MobileAbout />
      </div>
    </FadeInSection>
  );
}
