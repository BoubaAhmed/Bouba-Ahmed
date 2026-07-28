import { Award, Building2, CalendarDays, ExternalLink, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { CertificateItem } from "../content/site";

type CertificatesProps = {
  items: readonly CertificateItem[];
};

export function Certificates({ items }: CertificatesProps) {
  const { t } = useTranslation();

  return (
    <section id="certificates" className="mx-auto max-w-6xl pt-[clamp(4.5rem,8vw,6.2rem)]">
      <div className="mx-auto max-w-4xl space-y-3 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-[color:color-mix(in_srgb,var(--acid-2)_32%,var(--line))] bg-[color:color-mix(in_srgb,var(--acid-2)_10%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--acid-2)]">
          <Award className="h-3.5 w-3.5" aria-hidden="true" />
          {t("sections.certificates.eyebrow")}
        </p>
        <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[var(--text)] md:text-5xl">
          {t("sections.certificates.title")}
        </h2>
        <p className="mx-auto max-w-4xl text-base leading-8 text-[var(--muted)] md:text-lg">
          {t("sections.certificates.description")}
        </p>
      </div>

      <div className="certificates-journey mt-12">
        {items.map((item, index) => {
          const step = String(index + 1).padStart(2, "0");

          return (
            <article key={`${item.title}-${item.issuer}`} className="certificates-journey-item">
              <div className="certificates-journey-index">{step}</div>
              <div className="certificates-journey-icon">
                <Award className="h-4 w-4" aria-hidden="true" />
              </div>

              <div className="certificates-journey-content">
                <div className="certificates-journey-main">
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <p className="certificates-journey-issuer">
                        <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                        {item.issuer}
                      </p>
                      {item.year ? (
                        <p className="certificates-journey-year">
                          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                          {item.year}
                        </p>
                      ) : null}
                    </div>
                    <h3 className="certificates-journey-title">{item.title}</h3>
                  </div>

                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer" className="certificate-link">
                      <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                      {t("sections.certificates.verify")}
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
