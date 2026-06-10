import React from "react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { withBase } from "@/lib/basePath";
import { HeroTitle } from "@/components/HeroTitle";

export default function Services() {
  const { t } = useLanguage();

  const services = [1, 2, 3, 4, 5, 6].map(id => ({
    id,
    name: t(`services.service${id}.name`),
    description: t(`services.service${id}.description`),
  }));

  const phClass = (i: number) => (i % 3 === 1 ? "ph ph-sky" : i % 3 === 2 ? "ph ph-coral" : "ph");

  return (
    <div className="w-full">
      {/* ===== HERO STRIP ===== */}
      <section className="sp-hero">
        <div className="hero-blobs">
          <div className="blob blob-coral" />
          <div className="blob blob-sky" />
        </div>
        <div className="hero-shapes">
          <div className="shape shape-ring" />
          <div className="shape shape-pill" />
        </div>
        <div className="wrap">
          <div className="kicker">{t("nav.services")}</div>
          <h1><HeroTitle text={t("services.title")} /></h1>
          <p>{t("services.subtitle")}</p>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="section">
        <div className="wrap">
          <div className="sp-grid">
            {services.map((service, i) => (
              <Link
                key={service.id}
                className="sp-card reveal"
                href={withBase(`/services/${service.id}`)}
                style={{ ["--d" as any]: `${(i % 4) * 0.08}s` }}
              >
                <div className={phClass(i)} style={{ aspectRatio: "4 / 3" }}>
                  <span>service · 4:3</span>
                </div>
                <div className="sp-card-body">
                  <div className="svc-num">{String(service.id).padStart(2, "0")}</div>
                  <h3>{service.name}</h3>
                  <p className="svc-blurb">{service.description}</p>
                  <span className="svc-go">
                    <span>{t("blog.readMore")}</span>
                    <span className="arr">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="cta-band">
        <div className="wrap">
          <div className="cta-card reveal">
            <div>
              <h2>{t("servicesPage.ctaTitle")}</h2>
              <p>{t("servicesPage.ctaDesc")}</p>
            </div>
            <Link href={withBase("/contact")} className="btn btn-purple">
              <span>{t("nav.contact")}</span>
              <span className="arr">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
