import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { withBase } from "@/lib/basePath";
import { HeroTitle } from "@/components/HeroTitle";

export default function Blog() {
  const { language, t } = useLanguage();
  const isKa = language === "ka";

  const articles = [
    { id: 1, titleKa: "ციფრული ტრანსფორმაცია 2024 წელს", titleEn: "Digital Transformation in 2024", excerptKa: "აღმოაჩინეთ ახალი ტრენდები ციფრული ტრანსფორმაციის სფეროში და როგორ შეიძლება ისინი თქვენი ბიზნესის ზრდას უწყობდეს ხელს.", excerptEn: "Discover new trends in digital transformation and how they can accelerate your business growth.", date: "2024-04-15", author: "ლევან ბერიძე", authorEn: "Levan Beridze", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80" },
    { id: 2, titleKa: "კლაუდ ტექნოლოგიის ფუტურე", titleEn: "The Future of Cloud Technology", excerptKa: "კლაუდ კომპიუტინგის ახალი საზღვრები და როგორ უნდა მოემზადოთ ამ ცვლილებებისთვის.", excerptEn: "New horizons in cloud computing and how to prepare for these changes.", date: "2024-04-10", author: "ელენე ხარაძე", authorEn: "Elene Kharadze", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80" },
    { id: 3, titleKa: "AI-ის გამოყენება ბიზნესში", titleEn: "AI Applications in Business", excerptKa: "როგორ გამოიყენოთ ხელოვნური ინტელექტი თქვენი კომპანიაში და რა სარგებელი შეიძლება მოიტანოს.", excerptEn: "How to leverage AI in your company and what benefits it can bring.", date: "2024-04-05", author: "გიორგი მელიქიძე", authorEn: "Giorgi Melikidze", image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?auto=format&fit=crop&w=1000&q=80" },
    { id: 4, titleKa: "კიბერუსაფრთხოების საუკეთესო პრაქტიკები", titleEn: "Cybersecurity Best Practices", excerptKa: "თქვენი ბიზნესის დაცვა კიბერ შეტევებისგან - სახელმძღვანელო.", excerptEn: "Protecting your business from cyber attacks - a guide.", date: "2024-03-30", author: "ლევან ბერიძე", authorEn: "Levan Beridze", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1000&q=80" },
    { id: 5, titleKa: "ბიგ დატა ანალიტიკა ინდუსტრიაში", titleEn: "Big Data Analytics", excerptKa: "დიდი მონაცემების ანალიზი და მისი ბიზნეს გამოყენება.", excerptEn: "Analyzing big data and its business applications.", date: "2024-03-25", author: "ელენე ხარაძე", authorEn: "Elene Kharadze", image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1000&q=80" },
    { id: 6, titleKa: "DevOps კულტურა", titleEn: "DevOps Culture", excerptKa: "DevOps კულტურის დანერგვა თქვენი ორგანიზაციაში.", excerptEn: "Implementing DevOps culture in your organization.", date: "2024-03-20", author: "გიორგი მელიქიძე", authorEn: "Giorgi Melikidze", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80" },
  ];

  const handleShare = (articleId: number, platform: string) => {
    const url = `${window.location.origin}${withBase("/blog")}#article-${articleId}`;
    const article = articles.find(a => a.id === articleId);
    const title = isKa ? article?.titleKa : article?.titleEn;
    if (platform === "facebook") {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
    } else if (platform === "linkedin") {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
    } else if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title || "")}`, "_blank");
    }
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
          <div className="kicker">{t("nav.blog")}</div>
          <h1><HeroTitle text={t("blog.title")} /></h1>
          <p>{t("blog.subtitle")}</p>
        </div>
      </section>

      {/* ===== ARTICLES ===== */}
      <section className="section">
        <div className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {articles.map((article, i) => (
              <article
                key={article.id}
                id={`article-${article.id}`}
                className="xp-card reveal"
                style={{ overflow: "hidden", display: "flex", flexDirection: "column", ["--d" as any]: `${(i % 3) * 0.08}s` }}
              >
                {/* Featured image only (no video) */}
                <div className="ph" style={{ aspectRatio: "16 / 9", flex: "none" }}>
                  <img src={article.image} alt={isKa ? article.titleKa : article.titleEn} />
                </div>
                <div style={{ padding: "22px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div className="news-meta">
                    <span className="tag tag-purple">{isKa ? article.author : article.authorEn}</span>
                    <span className="news-date">{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.3, marginBottom: 10 }}>{isKa ? article.titleKa : article.titleEn}</h3>
                  <p style={{ color: "var(--ink-soft)", lineHeight: 1.6, marginBottom: 20 }}>{isKa ? article.excerptKa : article.excerptEn}</p>

                  {/* footer: Read more button (left) + social-share circles (right) */}
                  <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 12 }}>
                    <a href={`#article-${article.id}`} className="btn btn-purple" style={{ padding: "11px 20px", fontSize: 14 }}>
                      <span>{t("blog.readMore")}</span>
                      <span className="arr">→</span>
                    </a>
                    <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                      <button type="button" className="share-circle" aria-label="Share on Facebook" onClick={() => handleShare(article.id, "facebook")}>
                        <Facebook size={16} />
                      </button>
                      <button type="button" className="share-circle" aria-label="Share on LinkedIn" onClick={() => handleShare(article.id, "linkedin")}>
                        <Linkedin size={16} />
                      </button>
                      <button type="button" className="share-circle" aria-label="Share on Twitter" onClick={() => handleShare(article.id, "twitter")}>
                        <Twitter size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
