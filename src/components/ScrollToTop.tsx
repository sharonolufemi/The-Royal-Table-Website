import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router's BrowserRouter does NOT reset scroll position on navigation
 * the way a normal full-page load does — the new route renders wherever the
 * previous page happened to be scrolled to. That's the "Home link doesn't
 * land on the hero" bug: clicking Home from the Footer (scrolled to the very
 * bottom of About/Contact) navigated to "/" but kept that same scroll
 * position, landing somewhere in the middle of the Home page instead of the
 * top. This scrolls to top on every path change, or to the matching element
 * when the URL carries a hash (e.g. Footer's "/#faq" link).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      // The target section may not exist in the DOM yet on the first paint
      // of a freshly-mounted page, so retry briefly instead of giving up.
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "instant" as ScrollBehavior });
        } else if (attempts < 10) {
          attempts += 1;
          requestAnimationFrame(tryScroll);
        }
      };
      tryScroll();
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
