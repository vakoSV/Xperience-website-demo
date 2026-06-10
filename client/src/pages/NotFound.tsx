import React from "react";
import { Link } from "wouter";
import { Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { homeWithBase } from "@/lib/basePath";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div style={{ minHeight: "72vh", display: "grid", placeItems: "center", padding: "80px 0" }}>
      <div className="wrap" style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "clamp(80px, 16vw, 160px)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            background: "linear-gradient(92deg, var(--coral), var(--sky))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: 8,
          }}
        >
          404
        </div>
        <h1 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, marginBottom: 14 }}>{t("notFound.title")}</h1>
        <p style={{ color: "var(--ink-soft)", fontSize: 17, lineHeight: 1.6, maxWidth: 440, margin: "0 auto 28px" }}>{t("notFound.description")}</p>
        <Link href={homeWithBase()} className="btn btn-coral" style={{ display: "inline-flex" }}>
          <Home size={18} />
          <span>{t("notFound.goHome")}</span>
        </Link>
      </div>
    </div>
  );
}
