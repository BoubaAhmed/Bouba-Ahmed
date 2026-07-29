import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { siGithub } from "simple-icons";
import type { ProfileMeta } from "../content/site";

type ContactProps = {
  profile: ProfileMeta;
};

const linkedinPath =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

export function Contact({ profile }: ContactProps) {
  const { t } = useTranslation();
  const tags = t("sections.contact.tags", { returnObjects: true }) as string[];

  return (
    <section id="contact" className="mx-auto max-w-6xl pt-[clamp(4.5rem,8vw,6.2rem)]">
      <div className="mx-auto max-w-5xl space-y-3 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_srgb,var(--acid)_32%,var(--line))] bg-[color:color-mix(in_srgb,var(--acid)_10%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--acid)]">
          <Mail className="h-3.5 w-3.5" aria-hidden="true" />
          {t("sections.contact.eyebrow")}
        </p>
        <h2 className="mx-auto max-w-5xl text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-[var(--text)] md:text-4xl">
          {t("sections.contact.title")}
        </h2>
        <p className="mx-auto max-w-5xl text-base leading-8 text-[var(--muted)] md:text-lg">
          {t("sections.contact.description")}
        </p>
      </div>

      <div className="contact-simple mt-12">
        <div className="contact-simple-intro">
          <h3 className="contact-simple-title">{t("sections.contact.cardTitle")}</h3>
          <p className="contact-simple-copy">{t("sections.contact.cardDescription")}</p>
          <div className="contact-availability">
            <span className="contact-availability-dot" />
            <span>{t("sections.contact.availableNow")}</span>
          </div>
          <div className="contact-tags">
            {tags.map((item) => (
              <span key={item} className="contact-tag">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="contact-simple-list">
          <a href={`mailto:${profile.email}`} className="contact-simple-row">
            <span className="contact-simple-icon">
              <Mail className="h-4 w-4" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="contact-simple-label">{t("sections.contact.email")}</p>
              <p className="contact-simple-value">{profile.email}</p>
            </div>
          </a>

          <a href={`tel:${profile.phone.replaceAll(" ", "")}`} className="contact-simple-row">
            <span className="contact-simple-icon">
              <Phone className="h-4 w-4" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="contact-simple-label">{t("sections.contact.phone")}</p>
              <p className="contact-simple-value">{profile.phone}</p>
            </div>
          </a>

          <div className="contact-simple-row">
            <span className="contact-simple-icon">
              <MapPin className="h-4 w-4" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="contact-simple-label">{t("sections.contact.location")}</p>
              <p className="contact-simple-value">{profile.location}</p>
            </div>
          </div>

          <div className="contact-simple-socials" aria-label={t("sections.contact.social")}>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact-social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                <path d={siGithub.path} />
              </svg>
              <span>GitHub</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                <path d={linkedinPath} />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
