import { socialLinks } from "../content/site";

type FooterProps = {
  copy: string;
  onNavigate: (href: string) => void;
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Profile", href: "#profile" },
  { label: "Skills", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export function Footer({ copy, onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg)] px-4">
      <div className="mx-auto max-w-6xl py-12">
        <div className="space-y-6 text-center">
          <button
            type="button"
            onClick={() => onNavigate("/")}
            className="inline-flex items-center gap-3 text-left"
          >
            <span className="logo-mark">
              <span className="logo-mark-core">AB</span>
            </span>
            <span className="text-lg font-semibold tracking-[-0.04em] text-[var(--text)]">
              Bouba.Dev
            </span>
          </button>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
            {quickLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => onNavigate(link.href)}
                className="transition hover:text-[var(--acid)]"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--line)] text-[var(--muted)] transition hover:border-[var(--acid)] hover:text-[var(--acid)]"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-[var(--muted)]">{copy}</p>
          <p className="text-sm text-[var(--muted)]">&copy; {currentYear} Ahmed Bouba</p>
        </div>
      </div>
    </footer>
  );
}
