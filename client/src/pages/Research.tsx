import React, { useState } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Download, FileText, Calendar, User } from "lucide-react";
import { withBase } from "@/lib/basePath";
import { HeroTitle } from "@/components/HeroTitle";

export default function Research() {
  const { language, t } = useLanguage();
  const isKa = language === "ka";
  const [downloadedId, setDownloadedId] = useState<number | null>(null);

  const reports = [
    { id: 1, titleKa: "ციფრული ტრანსფორმაციის ტრენდები 2024", titleEn: "Digital Transformation Trends 2024", descriptionKa: "ამ ანგარიშში წარმოდგენილია ციფრული ტრანსფორმაციის ახალი ტრენდები და რეკომენდაციები ბიზნესებისთვის.", descriptionEn: "This report presents new trends in digital transformation and recommendations for businesses.", date: "2024-04-15", author: "Xperience Research Team", pages: 45, fileSize: "2.5 MB", pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
    { id: 2, titleKa: "კლაუდ კომპიუტინგის ეკოსისტემა", titleEn: "Cloud Computing Ecosystem", descriptionKa: "კლაუდ ტექნოლოგიის სრული ანალიზი და მისი გამოყენება სხვადსხვა ინდუსტრიებში.", descriptionEn: "Complete analysis of cloud technology and its applications across various industries.", date: "2024-04-10", author: "Xperience Research Team", pages: 52, fileSize: "3.1 MB", pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
    { id: 3, titleKa: "ხელოვნური ინტელექტი ბიზნესში", titleEn: "Artificial Intelligence in Business", descriptionKa: "AI-ის გამოყენება ბიზნეს პროცესებში და მისი ეკონომიკური გავლენა.", descriptionEn: "AI applications in business processes and its economic impact.", date: "2024-04-05", author: "Xperience Research Team", pages: 38, fileSize: "2.2 MB", pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
    { id: 4, titleKa: "კიბერუსაფრთხოების ეკოსისტემა", titleEn: "Cybersecurity Landscape", descriptionKa: "კიბერ შეტევების ანალიზი და დაცვის სტრატეგიები.", descriptionEn: "Analysis of cyber threats and defense strategies.", date: "2024-03-30", author: "Xperience Research Team", pages: 41, fileSize: "2.8 MB", pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
    { id: 5, titleKa: "ბიგ დატა ანალიტიკა ინდუსტრიაში", titleEn: "Big Data Analytics in Industry", descriptionKa: "ბიგ დატა ტექნოლოგიების გამოყენება სხვადსხვა ინდუსტრიებში.", descriptionEn: "Applications of big data technologies across various industries.", date: "2024-03-25", author: "Xperience Research Team", pages: 48, fileSize: "3.0 MB", pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
    { id: 6, titleKa: "DevOps პრაქტიკები", titleEn: "DevOps Best Practices", descriptionKa: "DevOps კულტურის დანერგვა და ეფექტური პრაქტიკები.", descriptionEn: "Implementing DevOps culture and effective practices.", date: "2024-03-20", author: "Xperience Research Team", pages: 35, fileSize: "1.9 MB", pdfUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" },
  ];

  const handleDownload = (reportId: number) => {
    setDownloadedId(reportId);
    setTimeout(() => setDownloadedId(null), 2000);
  };

  return (
    <div className="w-full">
      {/* ===== HERO ===== */}
      <section className="sp-hero">
        <div className="hero-blobs">
          <div className="blob blob-coral" />
          <div className="blob blob-sky" />
        </div>
        <div className="wrap">
          <div className="kicker">{t("nav.research")}</div>
          <h1><HeroTitle text={t("research.title")} /></h1>
          <p>{t("research.subtitle")}</p>
        </div>
      </section>

      {/* ===== REPORTS ===== */}
      <section className="section">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {reports.map((report, i) => (
              <div
                key={report.id}
                className="xp-card reveal"
                style={{ overflow: "hidden", display: "flex", flexDirection: "column", ["--d" as any]: `${(i % 2) * 0.08}s` }}
              >
                <div className="ph ph-coral" style={{ height: 120 }}>
                  <FileText className="text-[color:var(--purple)]" size={40} />
                </div>
                <div style={{ padding: "22px 24px 26px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.3, marginBottom: 10 }}>{isKa ? report.titleKa : report.titleEn}</h3>
                  <p style={{ color: "var(--ink-soft)", lineHeight: 1.6, marginBottom: 18 }}>{isKa ? report.descriptionKa : report.descriptionEn}</p>
                  <div style={{ display: "grid", gap: 8, marginBottom: 20, fontSize: 14, color: "var(--ink-soft)" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}><Calendar size={15} />{new Date(report.date).toLocaleDateString()}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}><User size={15} />{report.author}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 8 }}><FileText size={15} />{report.pages} {t("researchPage.pages")} • {report.fileSize}</span>
                  </div>
                  <a
                    href={report.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    download
                    onClick={() => handleDownload(report.id)}
                    className="btn btn-coral"
                    style={{ marginTop: "auto", justifyContent: "center" }}
                  >
                    {downloadedId === report.id ? (
                      <span>✓ {t("research.download")}</span>
                    ) : (
                      <>
                        <Download size={16} />
                        <span>{t("research.pdf")}</span>
                      </>
                    )}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA (cream band) ===== */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="kicker" style={{ justifyContent: "center" }}>{t("researchPage.moreResearch")}</div>
          <h2 className="section-title" style={{ marginBottom: 14 }}>{t("researchPage.moreResearch")}</h2>
          <p style={{ color: "var(--ink-soft)", fontSize: 17, lineHeight: 1.6, maxWidth: 620, margin: "0 auto 28px" }}>{t("researchPage.moreResearchDesc")}</p>
          <Link href={withBase("/contact")} className="btn btn-purple" style={{ display: "inline-flex" }}>
            <span>{t("nav.contact")}</span>
            <span className="arr">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
