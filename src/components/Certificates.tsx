import { Award, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import type { CertificateItem } from "../content/site";

type CertificatesProps = {
  items: readonly CertificateItem[];
};

export function Certificates({ items }: CertificatesProps) {
  const { t } = useTranslation();
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const loopItems = items.length > 3 ? [...items, ...items] : items;

  function normalizeLoopPosition() {
    const track = trackRef.current;
    if (!track || items.length <= 3) {
      return;
    }

    const midpoint = track.scrollWidth / 2;
    if (track.scrollLeft >= midpoint) {
      track.scrollLeft -= midpoint;
    }

    if (track.scrollLeft < 0) {
      track.scrollLeft += midpoint;
    }
  }

  function scrollCertificates(direction: "previous" | "next", behavior: ScrollBehavior = "smooth") {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) {
      return;
    }

    const amount = direction === "next" ? track.clientWidth : -track.clientWidth;

    if (direction === "previous" && track.scrollLeft <= 8 && items.length > 3) {
      track.scrollLeft += track.scrollWidth / 2;
    }

    track.scrollBy({ left: amount, behavior });
  }

  useEffect(() => {
    if (paused || items.length <= 3) {
      return;
    }

    const interval = window.setInterval(() => scrollCertificates("next"), 3600);

    return () => window.clearInterval(interval);
  }, [items.length, paused]);

  return (
    <section id="certificates" className="mx-auto max-w-6xl pt-[clamp(4.5rem,8vw,6.2rem)]">
      <div className="mx-auto max-w-4xl space-y-3 text-center">
        <p className="inline-flex rounded-full border border-[color:color-mix(in_srgb,var(--acid-2)_32%,var(--line))] bg-[color:color-mix(in_srgb,var(--acid-2)_10%,transparent)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--acid-2)]">
          {t("sections.certificates.eyebrow")}
        </p>
        <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.04] tracking-[-0.045em] text-[var(--text)] md:text-5xl">
          {t("sections.certificates.title")}
        </h2>
        <p className="mx-auto max-w-4xl text-base leading-8 text-[var(--muted)] md:text-lg">
          {t("sections.certificates.description")}
        </p>
      </div>

      <div
        className="certificates-simple mt-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <button
          type="button"
          className="certificates-arrow certificates-arrow--left"
          onClick={() => scrollCertificates("previous")}
          aria-label={t("sections.certificates.previous")}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div ref={trackRef} className="certificates-track no-scrollbar" onScroll={normalizeLoopPosition}>
          {loopItems.map((item, index) => (
            <article key={`${item.title}-${item.issuer}-${index}`} className="certificate-card">
              <div className="certificate-media">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="certificate-placeholder">
                    <ImageIcon className="h-6 w-6" />
                  </div>
                )}
              </div>
              <div className="certificate-body">
                <div className="certificate-icon">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="certificate-title">{item.title}</h3>
                  <p className="certificate-meta">
                    {item.issuer}
                    {item.year ? ` / ${item.year}` : ""}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="certificates-arrow certificates-arrow--right"
          onClick={() => scrollCertificates("next")}
          aria-label={t("sections.certificates.next")}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
