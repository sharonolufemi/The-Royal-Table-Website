import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import ReserveButton from "../ReserveButton";
import { CloseIcon, MenuIcon } from "./icons";
import { NAV_LINKS } from "./navLinks";

function NavLinkItem({
  href,
  label,
  active,
  className = "",
  onClick,
}: {
  href: string;
  label: string;
  active?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const handleClick = () => {
    // React Router only re-triggers navigation (and our scroll-to-top
    // effect) when the pathname actually changes — clicking a link back to
    // the page you're already on is a no-op to the router, so it wouldn't
    // otherwise scroll back up.
    if (href === window.location.pathname) {
      window.scrollTo(0, 0);
    }
    onClick?.();
  };

  return (
    <Link
      to={href}
      onClick={handleClick}
      aria-current={active ? "page" : undefined}
      className={`font-helvetica font-normal whitespace-nowrap transition-colors ${
        active
          ? "text-black"
          : "text-black/70 hover:text-black lg:[-webkit-text-stroke:0.1px_#000000]"
      } ${className}`}
    >
      {label}
    </Link>
  );
}

export default function NavBar({
  bgClassName = "bg-white",
}: {
  bgClassName?: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isMenuOpen) return;

    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-[rgba(236,214,241,0.5)] ${bgClassName}`}
    >
      <div className="mx-auto flex max-w-[1512px] items-center justify-between px-[20px] py-[32px] md:px-[40px] md:py-[21px] lg:px-[60px]">
        <Link
          to="/"
          onClick={() => {
            if (window.location.pathname === "/") window.scrollTo(0, 0);
          }}
          aria-label="The Sarah Mandate — home"
          className="shrink-0"
        >
          <img
            src={logo}
            alt="The Sarah Mandate"
            className="h-9 w-16 md:h-[54px] md:w-24"
          />
        </Link>

        {/* Tablet / Web navigation */}
        <div className="hidden items-center gap-[24px] md:flex">
          <nav className="flex items-center gap-[24px]" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLinkItem
                key={link.label}
                href={link.href}
                label={link.label}
                active={pathname === link.href}
                className="p-[2px] text-base lg:text-lg lg:text-center"
              />
            ))}
          </nav>
          <ReserveButton className="px-4 py-2 text-[18px] lg:px-5" />
        </div>

        {/* Mobile hamburger trigger */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="flex size-6 items-center justify-center text-grey transition-opacity active:opacity-50 md:hidden"
        >
          <MenuIcon className="size-[22px]" />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className={`fixed inset-x-0 top-0 z-50 flex flex-col bg-white shadow-lg transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[rgba(236,214,241,0.5)] px-[20px] py-[32px]">
          <img src={logo} alt="The Sarah Mandate" className="h-9 w-16" />
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="flex size-6 items-center justify-center text-grey transition-opacity active:opacity-50"
          >
            <CloseIcon className="size-[22px]" />
          </button>
        </div>

        <nav
          className="flex flex-col gap-[4px] px-[20px] py-[16px]"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <NavLinkItem
              key={link.label}
              href={link.href}
              label={link.label}
              active={pathname === link.href}
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-[rgba(103,103,103,0.12)] py-[14px] text-lg active:bg-gold-10"
            />
          ))}
        </nav>

        <div className="px-[20px] pb-[32px] pt-[8px]">
          <ReserveButton className="w-full px-[20px] py-[12px] text-[18px]" />
        </div>
      </div>
    </header>
  );
}
