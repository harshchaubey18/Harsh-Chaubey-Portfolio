const Footer = () => {
  const year = new Date().getFullYear();

  const LINKS = [
    { label: "GitHub", href: "https://github.com/harshchaubey18" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/harsh-chaubey-794657321/",
    },
    { label: "Email", href: "mailto:harshchaubey566@gmail.com" },
  ];

  return (
    <footer
      className="py-10"
      style={{
        background: "var(--footer-bg)",
        borderTop: "2px solid #1a1a1a",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 flex items-center justify-center font-bold text-sm"
            style={{
              background: "var(--accent)",
              border: "1.5px solid #ffffff",
              color: "#fff",
              borderRadius: "4px",
              boxShadow: "2px 2px 0px rgba(255,255,255,0.25)",
            }}
          >
            HC
          </div>

          <div>
            <p className="font-bold text-sm text-white">Harsh Chaubey</p>
            <p className="font-mono-custom text-xs text-white opacity-70">
              Backend Developer
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center flex-wrap justify-center gap-3">
          {LINKS.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="font-mono-custom text-xs px-4 py-2 transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "4px",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              {s.label} ↗
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="font-mono-custom text-xs text-white opacity-60">
          © {year} Harsh Chaubey
        </p>
      </div>
    </footer>
  );
};

export default Footer;
