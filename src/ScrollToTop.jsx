import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center font-bold text-lg text-white transition-transform duration-150 hover:-translate-y-1"
      style={{
        background: "var(--accent)",
        border: "var(--border)",
        boxShadow: "var(--shadow-md)",
        borderRadius: "4px",
      }}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
