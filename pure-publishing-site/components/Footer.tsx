import Link from "next/link";

const aiSolutionsLinks = [
  { label: "AI Copywriting", href: "/ai-solutions" },
  { label: "Content Strategy", href: "/ai-solutions" },
  { label: "SEO Optimisation", href: "/ai-solutions" },
  { label: "Brand Voice", href: "/ai-solutions" },
];

const websiteDesignLinks = [
  { label: "Website Design", href: "/website-design" },
  { label: "Landing Pages", href: "/website-design" },
  { label: "Redesign & Refresh", href: "/website-design" },
  { label: "Maintenance", href: "/website-design" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/" },
  { label: "Blog", href: "/" },
];

/* Placeholder social links — replace hrefs when live accounts are ready */
const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X (Twitter)", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="text-white mt-auto"
      style={{ backgroundColor: "var(--deep-indigo)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* ── Top section ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center font-syne font-bold text-xl tracking-tight mb-4">
              <span style={{ color: "var(--coral)" }}>Pure</span>
              <span className="text-white">&nbsp;Publishing</span>
            </Link>
            <p className="font-nunito text-white/70 text-sm leading-relaxed mt-4 max-w-xs">
              Words that work. Websites that win. We combine AI-powered
              copywriting with beautiful web design to help your business
              grow online.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="font-nunito text-xs text-white/50 hover:text-coral transition-colors duration-200"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* AI Solutions links */}
          <div>
            <h3 className="font-syne font-bold text-sm uppercase tracking-widest text-white/50 mb-5">
              AI Solutions
            </h3>
            <ul className="space-y-3 list-none">
              {aiSolutionsLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-nunito text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Website Design links */}
          <div>
            <h3 className="font-syne font-bold text-sm uppercase tracking-widest text-white/50 mb-5">
              Website Design
            </h3>
            <ul className="space-y-3 list-none">
              {websiteDesignLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-nunito text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links + Get in Touch */}
          <div className="space-y-8">
            <div>
              <h3 className="font-syne font-bold text-sm uppercase tracking-widest text-white/50 mb-5">
                Quick Links
              </h3>
              <ul className="space-y-3 list-none">
                {quickLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="font-nunito text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-syne font-bold text-sm uppercase tracking-widest text-white/50 mb-5">
                Get in Touch
              </h3>
              <address className="not-italic space-y-2">
                <p className="font-nunito text-sm text-white/70">
                  St Leonards-on-Sea
                </p>
                <p className="font-nunito text-sm text-white/70">
                  Hastings, East Sussex
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center mt-3 font-nunito text-sm font-semibold transition-colors duration-200"
                  style={{ color: "var(--coral)" }}
                >
                  Book a Free Chat →
                </Link>
              </address>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────── */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p className="font-nunito text-xs text-white/40">
            &copy; 2025 Pure Publishing. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="font-nunito text-xs text-white/40 hover:text-white/70 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="font-nunito text-xs text-white/40 hover:text-white/70 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
