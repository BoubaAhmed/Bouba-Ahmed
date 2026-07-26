import { Heart, Mail, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";
import { profile, socialLinks } from "../content/site";

type FooterProps = {
  onNavigate: (href: string) => void;
};

const quickLinks = [
  { labelKey: "footer.quickLinks.home", href: "/" },
  { labelKey: "footer.quickLinks.projects", href: "#work" },
  { labelKey: "footer.quickLinks.profile", href: "#profile" },
  { labelKey: "footer.quickLinks.experience", href: "#experience" },
  { labelKey: "footer.quickLinks.skills", href: "#stack" },
  { labelKey: "footer.quickLinks.certificates", href: "#certificates" },
  { labelKey: "footer.quickLinks.contact", href: "#contact" },
];

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-[var(--line)] bg-transparent px-4">
      <div className="mx-auto max-w-6xl py-12">
        <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:items-end md:text-left">
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("/");
            }}
            className="logo-lockup cursor-pointer justify-center text-left md:justify-start"
          >
            <span className="flex flex-col items-center gap-3 md:items-start">
              <span className="inline-flex items-center gap-3">
                <span className="logo-mark" aria-hidden="true">
                  <span className="logo-mark-core">
                    <Rocket className="h-4 w-4" />
                  </span>
                </span>
                <span>
                  <span className="logo-wordmark">
                    <span className="logo-wordmark-main">Bouba</span>
                    <span className="logo-wordmark-dot">.</span>
                    <span className="logo-wordmark-accent">Dev</span>
                  </span>
                </span>
              </span>
              <span className="text-sm text-[var(--muted)]">
                &copy; {currentYear} Ahmed Bouba. {t("footer.rights")}
              </span>
            </span>
          </a>

          <div className="flex flex-col items-center gap-3 md:items-center">
            <div className="flex items-center gap-1 text-sm text-[var(--muted)]">
              <span>{t("footer.madeWith")}</span>
              <Heart className="h-3.5 w-3.5 text-indigo-600" />
              <span>{t("footer.location")}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
              {quickLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => onNavigate(link.href)}
                  className="cursor-pointer transition hover:text-[var(--acid)]"
                >
                  {t(link.labelKey)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--acid)]"
            >
              <Mail className="h-4 w-4" />
              <span>{profile.email}</span>
            </a>
            <div className="flex justify-center gap-3 md:justify-end">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
