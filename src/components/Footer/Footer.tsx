import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import facebookIcon from "../../assets/icons/footer-facebook.svg";
import instagramIcon from "../../assets/icons/footer-instagram.svg";
import linkedinIcon from "../../assets/icons/footer-linkedin.svg";
import youtubeIcon from "../../assets/icons/footer-youtube.svg";
import { RESERVE_URL } from "../../constants";
import FadeInSection from "../FadeInSection/FadeInSection";

const CONTACT_EMAIL = "trt@thesarahmandate.org";
const CONTACT_HREF = `mailto:${CONTACT_EMAIL}`;
const COPYRIGHT = "© 2026 The Sarah Mandate®. All Rights Reserved.";

/**
 * Figma doesn't specify an href for "Contact Us" on any breakpoint (it's an
 * <a>/<button> with no target wired) — mailto to the email shown right next
 * to it is the only sensible destination, so that's what this links to.
 * Home/FAQs route through React Router now that real pages exist; FAQs
 * targets "/#faq" so it works whether you're already on the homepage or
 * navigating in from About/Contact — Home.tsx scrolls to the hash on mount.
 */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "FAQs", href: "/#faq" },
  { label: "Reserve", href: RESERVE_URL, external: true },
];

/**
 * Real URLs confirmed directly from Figma's Web and Mobile footer instances
 * (identical on both). Tablet's own instance has the same icons with no
 * href wired at all — an apparent oversight there, not a genuine breakpoint
 * difference — so the same real links are applied to Tablet too.
 */
const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/thesarahmandate/",
    icon: instagramIcon,
  },
  {
    name: "Facebook",
    href: "https://web.facebook.com/thesarahmandatepage/?_rdc=1&_rdr#",
    icon: facebookIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/thesarahmandate/",
    icon: linkedinIcon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@thesarahmandate",
    icon: youtubeIcon,
  },
];

function NavLinkAnchor({
  href,
  external,
  className = "",
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={href}
      onClick={() => {
        // Plain-path links (no hash) that point at the page you're already
        // on are a no-op to React Router, so our route-change-based
        // scroll-to-top effect never fires for them — force it here.
        if (!href.includes("#") && href === window.location.pathname) {
          window.scrollTo(0, 0);
        }
      }}
      className={className}
    >
      {children}
    </Link>
  );
}

/**
 * Web (lg): cream FooterContent row (brand left, Navigation/Contact columns
 * right) over a purple CopyrightBar. Figma's own 604px brand-to-links gap is
 * a fixed-width artifact of the 1512px reference frame — justify-between
 * reproduces the same visual result responsively instead of baking in a
 * gap that would break at any other lg+ viewport width.
 */
function WebFooter() {
  return (
    <div className="hidden lg:block">
      <div className="bg-gold-10 w-full">
        <div className="mx-auto flex h-[240px] max-w-[1512px] items-center justify-between px-[60px]">
          <div className="flex w-[360px] flex-col items-start gap-[11px]">
            <img
              src={logo}
              alt="The Sarah Mandate"
              className="h-[55.338px] w-[105px] object-contain"
            />
            <p className="font-open-sans text-[14px] leading-normal text-[#1d1d1d]">
              The Sarah Mandate is an initiative of
              <br />
              The Sarah Ora Empowerment Foundation.
              <br />
              Founded by Dr. Omofisayo Kayode (h.c.)
            </p>
          </div>

          <div className="flex items-start gap-[80px]">
            <div className="flex w-[84px] flex-col items-start gap-[16px]">
              <p className="font-open-sans text-main-purple text-[16px] font-semibold">
                Navigation
              </p>
              <div className="flex flex-col items-start gap-[12px]">
                {NAV_LINKS.map((link) => (
                  <NavLinkAnchor
                    key={link.label}
                    href={link.href}
                    external={link.external}
                    className="font-open-sans w-fit border-b border-[#1d1d1d] text-[16px] whitespace-nowrap text-[#1d1d1d]"
                  >
                    {link.label}
                  </NavLinkAnchor>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-[16px]">
              <p className="font-open-sans text-main-purple text-[16px] font-semibold">
                Contact
              </p>
              <div className="flex flex-col items-start gap-[12px]">
                <p className="font-open-sans w-[228px] text-[16px] text-[#1d1d1d]">
                  {CONTACT_EMAIL}
                </p>
                <a
                  href={CONTACT_HREF}
                  className="font-open-sans w-fit border-b border-black text-[16px] text-[#1d1d1d]"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-main-purple border-gold-10 w-full border-t">
        <div className="mx-auto flex max-w-[1512px] items-center justify-between px-[60px] py-[16px]">
          <p className="font-open-sans text-[16px] font-semibold whitespace-nowrap text-white">
            {COPYRIGHT}
          </p>
          <div className="flex items-center gap-[20px]">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="block size-[28px] shrink-0"
              >
                <img src={social.icon} alt="" className="size-full" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Tablet (md): same two-row shape as Web, but Navigation/Contact labels are
 * main-gold here (Web's are main-purple) — confirmed directly in Figma, a
 * genuine per-breakpoint difference, not an oversight.
 */
function TabletFooter() {
  return (
    <div className="hidden md:block lg:hidden">
      <div className="bg-gold-10 w-full">
        <div className="mx-auto flex h-[225px] max-w-[1512px] flex-col justify-center px-[40px]">
          <div className="flex w-full items-start justify-between">
            <div className="flex w-[360px] flex-col items-start gap-[11px]">
            <img
              src={logo}
              alt="The Sarah Mandate"
              className="h-[54px] w-24 object-contain"
            />
            <p className="font-open-sans text-[14px] leading-normal text-[#1d1d1d]">
              The Sarah Mandate is an initiative of
              <br />
              The Sarah Ora Empowerment Foundation.
              <br />
              Founded by Dr. Omofisayo Kayode (h.c.)
            </p>
          </div>

          <div className="flex items-start gap-[80px]">
            <div className="flex w-[84px] flex-col items-start gap-[16px]">
              <p className="font-open-sans text-main-gold text-[16px] font-semibold">
                Navigation
              </p>
              <div className="flex flex-col items-start gap-[12px]">
                {NAV_LINKS.map((link) => (
                  <NavLinkAnchor
                    key={link.label}
                    href={link.href}
                    external={link.external}
                    className="font-open-sans w-fit border-b border-[#1d1d1d] text-[16px] whitespace-nowrap text-[#1d1d1d]"
                  >
                    {link.label}
                  </NavLinkAnchor>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-[16px]">
              <p className="font-open-sans text-main-gold text-[16px] font-semibold">
                Contact
              </p>
              <div className="flex flex-col items-start gap-[12px]">
                <p className="font-open-sans w-[228px] text-[16px] text-[#1d1d1d]">
                  {CONTACT_EMAIL}
                </p>
                <a
                  href={CONTACT_HREF}
                  className="font-open-sans w-fit text-[16px] text-[#1d1d1d]"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="bg-main-purple border-gold-10 w-full border-t">
        <div className="mx-auto flex h-[65px] max-w-[1512px] items-center justify-between px-[40px]">
          <p className="font-open-sans text-[16px] font-semibold whitespace-nowrap text-white">
            {COPYRIGHT}
          </p>
          <div className="flex items-center gap-[20px]">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="block size-[28px] shrink-0"
              >
                <img src={social.icon} alt="" className="size-full" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Mobile (base): a genuinely different single-column purple layout, not a
 * cream-row-plus-copyright-bar like Web/Tablet — built independently rather
 * than forced into that shared shape (per the Place-section lesson). Every
 * nav/social link here already carries a real href straight from Figma
 * (Reserve Table -> Selar, all 4 socials -> real profiles), unlike Web/
 * Tablet where Figma left them unwired.
 */
function MobileFooter() {
  return (
    <div className="bg-main-purple flex w-full flex-col items-start gap-[32px] px-[24px] py-[40px] md:hidden">
      <div className="flex w-full flex-col items-start gap-[12px]">
        <img
          src={logo}
          alt="The Sarah Mandate"
          className="h-9 w-16 object-contain brightness-0 invert"
        />
        <p className="font-open-sans text-gold-10 text-[13px] leading-[1.4]">
          The Sarah Mandate is an initiative of The Sarah Ora Empowerment
          Foundation.
          <br />
          Founded by Dr. Omofisayo Kayode (h.c.)
        </p>
      </div>

      <div className="flex w-full flex-col items-start gap-[12px]">
        <p className="font-open-sans text-gold-10 text-[15px] font-bold">
          Navigation
        </p>
        <Link
          to="/"
          onClick={() => {
            if (window.location.pathname === "/") window.scrollTo(0, 0);
          }}
          className="font-open-sans text-[14px] text-white"
        >
          Home
        </Link>
        <Link to="/#faq" className="font-open-sans text-[14px] text-white">
          FAQs
        </Link>
        <a
          href={RESERVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-open-sans text-[14px] text-white"
        >
          Reserve Table
        </a>
        <a
          href={CONTACT_HREF}
          className="font-open-sans text-[14px] text-white"
        >
          Contact Us
        </a>
      </div>

      <div className="flex w-full flex-col items-start gap-[12px]">
        <p className="font-open-sans text-gold-10 text-[15px] font-bold whitespace-nowrap">
          Connect
        </p>
        <div className="flex items-center gap-[16px]">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex size-[24px] items-center justify-center"
            >
              <img src={social.icon} alt="" className="size-[22px]" />
            </a>
          ))}
        </div>
      </div>

      <div className="flex w-full items-start border-t border-[rgba(236,214,241,0.5)] pt-[16px]">
        <p className="font-open-sans text-gold-10 flex-1 text-[13px] leading-[1.4]">
          {COPYRIGHT}
        </p>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <FadeInSection>
      <footer className="w-full">
        <WebFooter />
        <TabletFooter />
        <MobileFooter />
      </footer>
    </FadeInSection>
  );
}
