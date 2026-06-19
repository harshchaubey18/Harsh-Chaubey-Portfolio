import { useEffect } from "react";

const SELECTOR = ".sr-hidden, .sr-left, .sr-right, .sr-scale";

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(SELECTOR);

    // Fallback: if IntersectionObserver is unavailable, just show everything.
    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("sr-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sr-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
