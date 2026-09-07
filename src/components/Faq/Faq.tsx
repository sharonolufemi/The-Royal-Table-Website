import { useState, type ReactNode } from "react";
import FadeInSection from "../FadeInSection/FadeInSection";
import { PlusIcon } from "./icons";

type FaqItem = { question: string; answer: ReactNode };

/** One line of an answer body; `strong` renders as an Open Sans SemiBold inline span, matching Figma's bolded phrases within an otherwise-Regular paragraph. */
function B({ children }: { children: ReactNode }) {
  return <span className="font-semibold text-[#1d1d1d]">{children}</span>;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Who is The Royal Table for?",
    answer: (
      <div className="flex flex-col gap-[21px]">
        <p>
          The Royal Table is for <B>women leaders</B> globally who are
          committed to sustaining kingdom influence.
        </p>
        <p>
          You may be an entrepreneur, ministry leader, professional,
          creative, educator, or policy-maker. You may be a graduate of The
          School of Influence (our free leadership program), or you may be
          discovering The Sarah Mandate for the first time.
        </p>
        <div>
          <p className="font-semibold text-[#1d1d1d]">
            The Royal Table is for women who:
          </p>
          <ul className="list-disc pl-[21px]">
            <li>Are building something meaningful in their sphere</li>
            <li>Desire continuous mentorship and accountability</li>
            <li>Crave deep spiritual community with like-minded women</li>
            <li>Are ready to intentionally invest in their growth for a full year</li>
          </ul>
        </div>
        <p className="font-semibold text-[#1d1d1d]">
          If this describes you, then The Royal Table is for you.
        </p>
      </div>
    ),
  },
  {
    question: "Do I need to be an alumni of The School of Influence to join?",
    answer: (
      <div className="flex flex-col gap-[21px]">
        <div>
          <p className="font-semibold text-[#1d1d1d]">No!</p>
          <p>
            While some Royal Table members are <B>TSI alumni</B>, this is
            open to <B>all women globally</B> who align with our mission and
            values. You do not need to have taken any previous program with
            The Sarah Mandate.
          </p>
        </div>
        <p>
          However, if you&rsquo;re new to The Sarah Mandate and want to
          experience our scholarship sponsored leadership training first,
          you&rsquo;re welcome to join{" "}
          <B>The School of Influence (12-week program)</B>. Visit:{" "}
          <B>thesarahmandate.org/tsi</B>
        </p>
      </div>
    ),
  },
  {
    question: "Do you offer financial aid or scholarships?",
    answer: (
      <div className="flex flex-col gap-[21px]">
        <div>
          <p>
            Dr. Omofisayo Kayode (h.c.) is deeply committed to ensuring that
            no woman called to lead is left behind due to financial
            barriers.
          </p>
          <p>
            She believes that your current season should not limit your
            eternal impact. To honor this, we offer two pathways:
          </p>
        </div>
        <ul className="list-disc pl-[21px]">
          <li>
            <B>The School of Influence (TSI)</B>: If you are in a season
            where you cannot invest financially, we encourage you to apply
            for our 12-week School of Influence, which is
            scholarship-sponsored by the Sarah Ora Empowerment Foundation.
          </li>
        </ul>
        <ul className="list-disc pl-[21px]">
          <li>
            <B>The Royal Table: </B>As a high-level mentorship community,
            the membership fee is a seed that fuels our global outreach
            missions. However, if you are deeply called to this community
            but facing extreme financial hardship, the founder has made
            provision for a limited number of partial scholarships.
          </li>
        </ul>
        <p>
          Click this link <B>[</B>
          <a
            href="https://forms.gle/grcLcoeE9qhr4Sjz9"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#1d1d1d] underline"
          >
            https://forms.gle/grcLcoeE9qhr4Sjz9
          </a>
          <B>]</B> or contact our team to discuss a flexible installment
          plan. We believe in your growth and are committed to helping you
          take your seat at The Royal Table, regardless of your current
          season.
        </p>
      </div>
    ),
  },
  {
    question: "Is this a one-time payment or recurring?",
    answer: (
      <div className="flex flex-col gap-[21px]">
        <div>
          <p>The Royal Table is an annual membership.</p>
          <p>
            You pay once for the entire year{" "}
            <B>
              (12 months of mentorship, accountability, masterclasses,
              community, and resources
            </B>
            ).
          </p>
        </div>
        <p>
          After your first year, you&rsquo;ll have the option to renew your
          membership to continue at the table.
        </p>
      </div>
    ),
  },
  {
    question: "Can I join from any country? How do I pay?",
    answer: (
      <div className="flex flex-col gap-[21px]">
        <div>
          <p className="font-semibold text-[#1d1d1d]">Absolutely!</p>
          <p>
            The Royal Table is a global community. We currently have members
            from across Europe, UK, USA, Canada, Nigeria, South Africa,
            Zimbabwe, Asia and more.
          </p>
        </div>
        <div>
          <p>Payment options:</p>
          <ul className="list-disc pl-[21px]">
            <li>
              <B>Naira: Bank transfer, Flutterwave,</B>
            </li>
            <li>
              <B>Dollar/Euro: Bank transfer, Selar platform.</B>
            </li>
          </ul>
        </div>
        <p>
          We make it seamless for you to join from anywhere in the world.
          Your seat is reserved regardless of location.
        </p>
      </div>
    ),
  },
  {
    question:
      "What makes The Royal Table different from other mentorship programs?",
    answer: (
      <div className="flex flex-col gap-[21px]">
        <div>
          <p className="font-semibold text-[#1d1d1d]">
            Year-round, not a 6-12 week program - This is your permanent
            home
          </p>
          <p>
            <B>Global community of women leaders</B> - For intimate,
            meaningful, strategic relationships.
            <br />
            Exclusive masterclasses with diverse industry experts -
            You&rsquo;re not just learning from one person; you&rsquo;re
            learning from leaders across every mountain of culture.
          </p>
        </div>
        <div>
          <p className="font-semibold text-[#1d1d1d]">
            Rooted in 1 Peter 2:9 - Spiritual depth + practical strategy
          </p>
          <p>
            <B>Accessible pricing</B> - Complete access to premium
            mentorship for a fee less than a meal order at your favorite
            spot.
            <br />
            <B>₦36,000.00 / €60 / $60 (For the first 70 leaders)</B>
          </p>
        </div>
        <p className="font-semibold text-[#1d1d1d]">
          This is not a course. This is a covenant community.
        </p>
      </div>
    ),
  },
  {
    question: "What if I can't attend the live gatherings?",
    answer: (
      <div className="flex flex-col gap-[21px]">
        <div>
          <p className="font-semibold text-[#1d1d1d]">Life happens!</p>
          <p>
            Every live virtual gathering is <B>recorded</B> and{" "}
            <B>uploaded</B> to <B>The Royal Table Vault</B> within 48 hours.
            You&rsquo;ll have lifetime access to all recordings, so you can
            catch up at your convenience.
          </p>
        </div>
        <p>
          However, we strongly encourage live attendance because the real
          transformation happens in real-time interaction, coaching, and
          community.
        </p>
      </div>
    ),
  },
];

/**
 * Each breakpoint component calls this independently, so Web/Tablet/Mobile
 * each track their own open/closed state rather than sharing one. That's
 * intentional, not an oversight: only one is ever visible at a time, and
 * keeping the state local avoids prop-drilling for no real benefit.
 */
function useFaqState() {
  const [openItems, setOpenItems] = useState<boolean[]>(() =>
    FAQ_ITEMS.map(() => false),
  );
  const toggle = (index: number) =>
    setOpenItems((prev) => prev.map((v, i) => (i === index ? !v : v)));
  return { openItems, toggle };
}

/**
 * Matches Figma's accordion component exactly: the card is borderless/flat
 * while closed, and only gains the rounded purple-tinted border + white
 * answer panel once opened — it's not a static box with content sliding
 * inside it. The question text itself also switches from black to main
 * purple on open (confirmed across all 7 accordion components in Figma).
 */
function AccordionItem({
  item,
  isOpen,
  onToggle,
  questionClassName,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  questionClassName: string;
}) {
  return (
    <div
      className={`flex w-full flex-col items-start rounded-[8px] border transition-colors duration-200 ${
        isOpen ? "border-badge-border" : "border-transparent"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="focus-visible:ring-main-purple relative flex w-full cursor-pointer items-start gap-[10px] py-[16px] pr-[48px] pl-[16px] outline-none [-webkit-tap-highlight-color:transparent] focus-visible:ring-2"
      >
        <p
          className={`font-lora flex-1 text-left ${questionClassName} ${isOpen ? "text-main-purple" : "text-grey"}`}
        >
          {item.question}
        </p>
        <PlusIcon
          className={`absolute top-[16px] right-[16px] size-[24px] transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
        />
      </button>
      <div
        className={`grid w-full transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="font-open-sans border-badge-border text-grey border-t bg-white p-[10px] text-[14px] leading-[21px]">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Web (lg): two columns of 588px, items 0-3 left, 4-6 right. */
function WebFaq() {
  const { openItems, toggle } = useFaqState();

  const renderItem = (item: FaqItem, index: number) => (
    <AccordionItem
      key={item.question}
      item={item}
      isOpen={openItems[index]}
      onToggle={() => toggle(index)}
      questionClassName="text-[20px] font-medium"
    />
  );

  return (
    <div className="hidden flex-col items-center gap-[36px] py-[64px] lg:flex">
      <div className="flex flex-col items-center gap-[12px] text-center">
        <p className="font-lora text-wine text-[35px] font-medium">
          Frequently Asked Questions
        </p>
        <p className="font-lora text-[20px] text-[#3c424c] italic">
          Still have questions? We&rsquo;ve got you!
        </p>
      </div>

      <div className="flex w-full flex-col items-start px-[60px]">
        <div className="flex w-full items-start justify-center gap-[60px] xl:gap-[210px]">
          <div className="flex max-w-[588px] min-w-0 flex-1 flex-col items-start gap-[16px] px-[4px]">
            {FAQ_ITEMS.slice(0, 4).map((item, i) => renderItem(item, i))}
          </div>
          <div className="flex max-w-[588px] min-w-0 flex-1 flex-col items-start gap-[16px] px-[4px]">
            {FAQ_ITEMS.slice(4, 7).map((item, i) => renderItem(item, i + 4))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Tablet (md): single column inside a bordered/rounded FAQs-Container
 * (border-t-8/border-b-8 thick, border-l-2/border-r-2 thin, main-gold/16).
 * Title-to-container gap and question styling both confirmed independently
 * from Web's — 32px/18px title vs Web's 40px/20px, 16px question text vs
 * Web's 20px. No badge pill anywhere in this section on any breakpoint (the
 * title itself is the section heading, not an eyebrow label) — the 36px
 * title-to-container gap here still matches the established convention.
 */
function TabletFaq() {
  const { openItems, toggle } = useFaqState();

  return (
    <div className="hidden flex-col items-center gap-[36px] p-[40px] md:flex lg:hidden">
      <div className="flex flex-col items-center gap-[8px] text-center">
        <p className="font-lora text-wine text-[32px] font-semibold">
          Frequently Asked Questions
        </p>
        <p className="font-lora text-[18px] text-[#4b535f] italic">
          Still have questions? We&rsquo;ve got you
        </p>
      </div>

      <div className="border-main-gold/16 flex w-full flex-col items-start gap-[16px] rounded-[12px] border-t-8 border-b-8 border-l-2 border-r-2 bg-white px-[8px] py-[16px] shadow-[0px_1px_1px_rgba(0,0,0,0.25)]">
        {FAQ_ITEMS.map((item, index) => (
          <AccordionItem
            key={item.question}
            item={item}
            isOpen={openItems[index]}
            onToggle={() => toggle(index)}
            questionClassName="text-[16px] font-medium"
          />
        ))}
      </div>
    </div>
  );
}

/**
 * Mobile (base): the outer section itself carries its own cream background
 * + rounded-16 (unlike Web/Tablet, whose sections are plain/transparent) —
 * a genuine per-breakpoint difference, not a shared pattern, so it's kept
 * local to this component rather than pushed onto the shared outer
 * full-width wrapper. Title font is Open Sans SemiBold here (Web/Tablet use
 * Lora) — another confirmed, real difference. Question text is Lora
 * Regular 16px (Tablet's is Lora Medium 16px — the weight differs).
 */
function MobileFaq() {
  const { openItems, toggle } = useFaqState();

  return (
    <div className="bg-grey-5 flex w-full flex-col items-start gap-[16px] rounded-[16px] px-[20px] py-[56px] md:hidden">
      <div className="flex w-full flex-col items-start gap-[8px] text-center">
        <p className="font-open-sans text-wine w-full text-[24px] font-medium">
          Frequently Asked Questions
        </p>
        <p className="font-lora w-full text-[15px] text-[#3c424c] italic">
          Still have questions? We&rsquo;ve got you
        </p>
      </div>

      <div className="flex w-[350px] max-w-full flex-col items-start gap-[8px] rounded-[8px] bg-white p-[4px] shadow-[0px_1px_1px_rgba(0,0,0,0.25)]">
        {FAQ_ITEMS.map((item, index) => (
          <AccordionItem
            key={item.question}
            item={item}
            isOpen={openItems[index]}
            onToggle={() => toggle(index)}
            questionClassName="text-[16px]"
          />
        ))}
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <FadeInSection>
      <section id="faq" className="w-full bg-grey-5">
        <div className="mx-auto max-w-[1512px]">
          <WebFaq />
          <TabletFaq />
          <MobileFaq />
        </div>
      </section>
    </FadeInSection>
  );
}
