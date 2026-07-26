import { Code2, ExternalLink, Handshake, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { ProfileMeta } from "../content/site";

type ContactProps = {
  profile: ProfileMeta;
};

export function Contact({ profile }: ContactProps) {
  const { t } = useTranslation();
  const tags = t("sections.contact.tags", { returnObjects: true }) as string[];

  return (
    <section id="contact" className="mx-auto max-w-6xl pt-[clamp(4.5rem,8vw,6.2rem)]">
      <div className="mx-auto max-w-4xl space-y-3 text-center">
        <p className="inline-flex rounded-full border border-[color:color-mix(in_srgb,var(--deep)_34%,var(--line))] bg-[color:color-mix(in_srgb,var(--deep)_10%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--deep)]">
          {t("sections.contact.eyebrow")}
        </p>
        <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[var(--text)] md:text-5xl">
          {t("sections.contact.title")}
        </h2>
        <p className="mx-auto max-w-4xl text-base leading-8 text-[var(--muted)] md:text-lg">
          {t("sections.contact.description")}
        </p>
      </div>

      <div className="contact-hub-grid mt-12">
        <div className="grid gap-4">
          <article className="panel-rich rounded-[1.45rem] p-6 md:p-7">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface-strong)_88%,transparent)] text-[var(--acid)]">
              <Handshake className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[var(--text)]">
              {t("sections.contact.cardTitle")}
            </h3>
            <p className="mt-4 text-base leading-8 text-[var(--muted)]">{t("sections.contact.cardDescription")}</p>
          </article>

          <div className="grid gap-4">
            <a href={`mailto:${profile.email}`} className="panel-rich contact-hub-card rounded-[1.3rem] p-4 md:p-5">
              <span className="contact-hub-icon">
                <Mail className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <p className="contact-hub-label">{t("sections.contact.email")}</p>
                <p className="contact-hub-value">{profile.email}</p>
              </div>
            </a>

            <a href={`tel:${profile.phone.replaceAll(" ", "")}`} className="panel-rich contact-hub-card rounded-[1.3rem] p-4 md:p-5">
              <span className="contact-hub-icon">
                <Phone className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <p className="contact-hub-label">{t("sections.contact.phone")}</p>
                <p className="contact-hub-value">{profile.phone}</p>
              </div>
            </a>

            <div className="panel-rich contact-hub-card rounded-[1.3rem] p-4 md:p-5">
              <span className="contact-hub-icon">
                <MapPin className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <p className="contact-hub-label">{t("sections.contact.location")}</p>
                <p className="contact-hub-value">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <article className="panel-rich rounded-[1.45rem] p-6 md:p-7">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                {t("sections.contact.social")}
              </p>
              <ExternalLink className="h-4 w-4 text-[var(--acid)]" />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={profile.github} target="_blank" rel="noreferrer" className="contact-social-link">
                <Code2 className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-social-link">
                <ExternalLink className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </article>

          <article className="panel-rich rounded-[1.45rem] p-6 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              {t("sections.contact.availability")}
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--text)]">{t("sections.contact.availabilityText")}</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[color-mix(in_srgb,var(--surface-strong)_82%,transparent)] px-3 py-2 text-sm text-[var(--muted)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e] shadow-[0_0_12px_rgba(34,197,94,0.6)]" />
              {t("sections.contact.availableNow")}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((item) => (
                <span key={item} className="skill-pill">
                  {item}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
