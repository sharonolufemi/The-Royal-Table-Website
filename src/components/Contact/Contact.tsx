import { useState } from "react";
import { Link } from "react-router-dom";
import checkIcon from "../../assets/icons/contact-success-check.svg";
import FadeInSection from "../FadeInSection/FadeInSection";

const CONTACT_EMAIL = "trt@thesarahmandate.org";

function Field({
  label,
  name,
  required,
  type = "text",
  bgClassName = "bg-[#f8f8f8]",
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: "text" | "email" | "textarea";
  bgClassName?: string;
}) {
  const fieldClasses = `font-open-sans w-full rounded-[4px] border border-[#c0bebe] px-[8px] py-[12px] text-[14px] text-[#1d1d1d] placeholder:text-[#c0bebe] ${bgClassName}`;

  return (
    <label className="flex w-full flex-col items-start gap-[8px]">
      <span className="font-open-sans flex items-center gap-[6px]">
        <span className="text-[14px] text-[#1d1d1d]">{label}</span>
        <span className="text-[13px] text-[#c0bebe]">
          ({required ? "required" : "optional"})
        </span>
      </span>
      {type === "textarea" ? (
        <textarea
          name={name}
          required={required}
          placeholder={label}
          className={`${fieldClasses} h-[165px] resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={label}
          className={`${fieldClasses} h-[48px]`}
        />
      )}
    </label>
  );
}

/**
 * No backend exists in this project to actually send the message, so
 * "submit" just runs native HTML validation (required fields, email format)
 * then transitions to the success state — demonstrating the UI Figma
 * specifies rather than performing a real send.
 */
function ContactForm({
  fieldBg,
  onSubmitted,
}: {
  fieldBg?: string;
  onSubmitted: () => void;
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitted();
      }}
      className="flex w-full flex-col items-start gap-[24px]"
    >
      <Field label="Name" name="name" required bgClassName={fieldBg} />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        bgClassName={fieldBg}
      />
      <Field label="Subject" name="subject" bgClassName={fieldBg} />
      <Field
        label="Message"
        name="message"
        type="textarea"
        required
        bgClassName={fieldBg}
      />
      <button
        type="submit"
        className="rounded-[6px] border border-[#eeccf6] bg-[#ecd6f1] px-[20px] py-[8px]"
      >
        <span className="font-helvetica text-main-purple text-[18px]">
          Submit
        </span>
      </button>
    </form>
  );
}

/**
 * Figma's "Back to Home" CTA is wired to the external Selar reserve link on
 * every breakpoint — almost certainly a copy-paste artifact from reusing the
 * CtaButton component, not an intentional destination for a button whose
 * label literally says "Back to Home". Routed to "/" instead.
 */
function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#8c8c8c]/90"
      role="dialog"
      aria-modal="true"
      aria-label="Message sent"
    >
      <div className="bg-grey-5 flex w-[320px] flex-col items-center gap-[18px] rounded-[16px] px-[32px] pt-[40px] pb-[32px] text-center md:w-[400px] md:gap-[20px] md:px-[40px] md:pt-[48px] md:pb-[40px] lg:w-[480px] lg:gap-[24px] lg:px-[48px] lg:pt-[56px] lg:pb-[48px]">
        <img
          src={checkIcon}
          alt=""
          className="size-[56px] md:size-[60px] lg:size-[72px]"
        />
        <p className="font-helvetica text-[22px] text-[#1d1d1d] md:text-[24px] lg:text-[28px]">
          We&rsquo;ve got your message.
        </p>
        <p className="font-lora text-[14px] text-[#3c424c] italic md:text-[16px] lg:text-[18px]">
          Expect to hear from us soon.
        </p>
        <Link
          to="/"
          onClick={onClose}
          className="bg-main-purple font-helvetica rounded-[6px] border border-[rgba(237,204,246,0.2)] px-[20px] py-[8px] text-[20px] text-white"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

/** Web (lg): title + email on the left, form on the right. */
function WebContact({ onSubmitted }: { onSubmitted: () => void }) {
  return (
    <div className="mx-auto hidden max-w-[1512px] items-stretch justify-between gap-[60px] px-[60px] py-[64px] lg:flex">
      <div className="flex flex-col justify-center gap-[16px]">
        <p className="font-open-sans text-[32px] font-semibold text-[#1d1d1d] capitalize">
          Contact
        </p>
        <p className="font-open-sans text-[16px] text-[#1d1d1d] lowercase">
          {CONTACT_EMAIL}
        </p>
      </div>
      <div className="w-[707px] shrink-0">
        <ContactForm onSubmitted={onSubmitted} />
      </div>
    </div>
  );
}

/** Tablet (md): single column, title/email above the form. */
function TabletContact({ onSubmitted }: { onSubmitted: () => void }) {
  return (
    <div className="mx-auto hidden max-w-[1512px] flex-col items-start gap-[24px] px-[40px] py-[80px] md:flex lg:hidden">
      <p className="font-open-sans text-[35px] font-medium whitespace-nowrap text-[#1d1d1d] capitalize">
        Contact
      </p>
      <p className="font-open-sans text-[16px] text-[#1d1d1d] lowercase">
        {CONTACT_EMAIL}
      </p>
      <ContactForm onSubmitted={onSubmitted} />
    </div>
  );
}

/** Mobile (base): single column, tighter copy; form fields are white (Web/Tablet are #f8f8f8) — confirmed directly in Figma. */
function MobileContact({ onSubmitted }: { onSubmitted: () => void }) {
  return (
    <div className="mx-auto flex max-w-[1512px] flex-col items-start gap-[24px] px-[24px] py-[40px] md:hidden">
      <p className="font-helvetica text-[32px] text-[#1d1d1d] capitalize">
        Contact
      </p>
      <p className="font-open-sans text-[16px] font-semibold text-[#1d1d1d] lowercase">
        {CONTACT_EMAIL}
      </p>
      <div className="w-full pt-[24px]">
        <ContactForm fieldBg="bg-white" onSubmitted={onSubmitted} />
      </div>
    </div>
  );
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <FadeInSection>
      <div className="w-full bg-white">
        <WebContact onSubmitted={() => setIsSubmitted(true)} />
        <TabletContact onSubmitted={() => setIsSubmitted(true)} />
        <MobileContact onSubmitted={() => setIsSubmitted(true)} />
      </div>
      {isSubmitted && <SuccessModal onClose={() => setIsSubmitted(false)} />}
    </FadeInSection>
  );
}
