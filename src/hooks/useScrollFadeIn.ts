import { useEffect, useRef, useState } from "react";

/**
 * Fires `isVisible: true` once, the first time the returned ref's element
 * scrolls into the viewport. Never resets back to false on scroll-out.
 */
export function useScrollFadeIn<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, isVisible]);

  return { ref, isVisible };
}
