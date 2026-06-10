import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Eye, Heart } from "lucide-react";

export default function About() {
  const { language, t } = useLanguage();
  const isKa = language === "ka";

  const values = [
    { icon: Target, title: "Innovation", titleKa: "ინოვაცია", description: "We constantly innovate to provide cutting-edge solutions", descriptionKa: "ჩვენ მუდმივად ვიხელმძღვანელთ ინოვაციებით" },
    { icon: Eye, title: "Transparency", titleKa: "გამჭვირვალობა", description: "We believe in open communication and transparency", descriptionKa: "ჩვენ გვჯერა ღია კომუნიკაციაში" },
    { icon: Heart, title: "Excellence", titleKa: "ბრწყინვალება", description: "We strive for excellence in everything we do", descriptionKa: "ჩვენ ვისწრაფვით ბრწყინვალებისკენ ყველაფერში" },
  ];

  const team = [
    { name: "ლევან ბერიძე", nameEn: "Levan Beridze", role: "CEO & Founder", roleKa: "დირექტორი და დამფუძნებელი", bio: "ტექნოლოგიის ინდუსტრიაში 15+ წლის გამოცდილება", bioEn: "15+ years of experience in technology industry" },
    { name: "ელენე ხარაძე", nameEn: "Elene Kharadze", role: "CTO", roleKa: "ტექნოლოგიის დირექტორი", bio: "ღრმა ტექნიკური ცოდნა და ლიდერობის უნარი", bioEn: "Deep technical knowledge and leadership skills" },
    { name: "გიორგი მელიქიძე", nameEn: "Giorgi Melikidze", role: "Head of Operations", roleKa: "ოპერაციების ხელმძღვანელი", bio: "ბიზნეს პროცესების ოპტიმიზაციის ექსპერტი", bioEn: "Expert in business process optimization" },
  ];

  return (
    <div className="w-full">
      {/* ===== HERO ===== */}
      <section className="sp-hero">
        <div className="hero-blobs">
          <div className="blob blob-coral" />
          <div className="blob blob-sky" />
        </div>
        <div className="wrap">
          <div className="kicker">{t("nav.about")}</div>
          <h1>{t("about.title")}</h1>
          <p>{t("about.missionText")}</p>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="section">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 reveal">
            <div>
              <div className="kicker">{t("about.mission")}</div>
              <h2 className="section-title" style={{ marginBottom: 16 }}>{t("about.mission")}</h2>
              <p style={{ color: "var(--ink-soft)", fontSize: 17, lineHeight: 1.65, marginBottom: 14 }}>{t("about.missionText")}</p>
              <p style={{ color: "var(--ink-soft)", lineHeight: 1.65 }}>{t("aboutPage.missionExtra")}</p>
            </div>
            <div>
              <div className="kicker">{t("about.vision")}</div>
              <h2 className="section-title" style={{ marginBottom: 16 }}>{t("about.vision")}</h2>
              <p style={{ color: "var(--ink-soft)", fontSize: 17, lineHeight: 1.65, marginBottom: 14 }}>{t("about.visionText")}</p>
              <p style={{ color: "var(--ink-soft)", lineHeight: 1.65 }}>{t("aboutPage.visionExtra")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES (cream band) ===== */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="wrap">
          <div className="section-head reveal" style={{ justifyContent: "center", textAlign: "center" }}>
            <div>
              <div className="kicker" style={{ justifyContent: "center" }}>{t("about.values")}</div>
              <h2 className="section-title">{t("about.values")}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="xp-card reveal" style={{ padding: "30px 28px", ["--d" as any]: `${i * 0.08}s` }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, display: "grid", placeItems: "center", background: "rgba(53,32,125,0.08)", color: "var(--purple)", marginBottom: 18 }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>{isKa ? v.titleKa : v.title}</h3>
                  <p style={{ color: "var(--ink-soft)", lineHeight: 1.6 }}>{isKa ? v.descriptionKa : v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal" style={{ justifyContent: "center", textAlign: "center" }}>
            <div>
              <div className="kicker" style={{ justifyContent: "center" }}>{t("aboutPage.ourTeam")}</div>
              <h2 className="section-title">{t("aboutPage.ourTeam")}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <div key={i} className="xp-card reveal" style={{ overflow: "hidden", ["--d" as any]: `${i * 0.08}s` }}>
                <div className="ph ph-sky" style={{ height: 200 }}>
                  <span>team photo · 1:1</span>
                </div>
                <div style={{ padding: "22px 24px 26px" }}>
                  <h3 style={{ fontSize: 19, fontWeight: 800 }}>{isKa ? m.name : m.nameEn}</h3>
                  <div style={{ color: "var(--purple)", fontWeight: 700, fontSize: 14, marginBottom: 10 }}>{isKa ? m.roleKa : m.role}</div>
                  <p style={{ color: "var(--ink-soft)", lineHeight: 1.6 }}>{isKa ? m.bio : m.bioEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDER (cream band) ===== */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="wrap">
          <div className="xp-card reveal" style={{ maxWidth: 760, margin: "0 auto", padding: "40px 40px" }}>
            <div className="kicker">{t("about.founder")}</div>
            <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 4 }}>{isKa ? "ლევან ბერიძე" : "Levan Beridze"}</h2>
            <div style={{ color: "var(--purple)", fontWeight: 700, marginBottom: 18 }}>CEO &amp; Founder</div>
            <p style={{ color: "var(--ink-soft)", fontSize: 16.5, lineHeight: 1.65, marginBottom: 14 }}>{t("about.founderBio")}</p>
            <p style={{ color: "var(--ink-soft)", lineHeight: 1.65 }}>{t("aboutPage.founderExtra")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
