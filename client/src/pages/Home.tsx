import React, { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { withBase } from "@/lib/basePath";

// Each title is [before, gradientWord, after] — the middle word renders in the
// animated coral→sky gradient (design handoff hero <em>).
const heroSlides = [
  {
    eyebrowKa: "ციფრული ტრანსფორმაცია",
    eyebrowEn: "Digital Transformation",
    titleKa: ["ბიზნესის ციფრული ტრანსფორმაცია ", "შედეგებით", ""],
    titleEn: ["Digital transformation with measurable business ", "impact", ""],
    textKa: "ვქმნით სტრატეგიას, ვაშენებთ ტექნოლოგიას და ვზრდით ეფექტურობას მკაფიო KPI-ებით.",
    textEn: "We design strategy, build technology, and improve efficiency with clear KPI tracking.",
  },
  {
    eyebrowKa: "AI და მონაცემები",
    eyebrowEn: "AI & Data",
    titleKa: ["AI და მონაცემები ზრდის ახალი ", "ძრავა", ""],
    titleEn: ["AI and data as your next ", "growth", " engine"],
    textKa: "ანალიტიკა, ავტომატიზაცია და პროგნოზული მოდელები რეალური გადაწყვეტილებების მისაღებად.",
    textEn: "Analytics, automation, and predictive models to power better executive decisions.",
  },
  {
    eyebrowKa: "ღრუბლოვანი ინფრასტრუქტურა",
    eyebrowEn: "Cloud Infrastructure",
    titleKa: ["ინფრასტრუქტურა, რომელიც თქვენს გუნდთან ერთად ", "იზრდება", ""],
    titleEn: ["Infrastructure that ", "scales", " with your team"],
    textKa: "უსაფრთხო, მოქნილი და ღრუბლოვან გარემოზე დაფუძნებული გადაწყვეტილებები.",
    textEn: "Secure, flexible, cloud-first architecture built for continuous delivery.",
  },
];

const DURATION = 6500;

export default function Home() {
  const { language, t } = useLanguage();
  const isKa = language === "ka";

  // ----- hero slider -----
  const [activeSlide, setActiveSlide] = useState(0);
  const activeRef = useRef(0);
  const pausedRef = useRef(false);
  const startRef = useRef(0);
  const prevNowRef = useRef(0);
  const dotsRef = useRef<(HTMLButtonElement | null)[]>([]);
  activeRef.current = activeSlide;

  useEffect(() => {
    let raf = 0;
    startRef.current = performance.now();
    prevNowRef.current = startRef.current;
    const tick = (now: number) => {
      if (pausedRef.current) {
        startRef.current += now - prevNowRef.current;
      } else {
        const p = Math.min((now - startRef.current) / DURATION, 1);
        const dot = dotsRef.current[activeRef.current];
        if (dot) dot.style.setProperty("--p", String(p));
        if (p >= 1) {
          startRef.current = now;
          setActiveSlide(s => (s + 1) % heroSlides.length);
        }
      }
      prevNowRef.current = now;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // reset progress fills whenever the active slide changes
  useEffect(() => {
    startRef.current = performance.now();
    dotsRef.current.forEach((d, i) => d && d.style.setProperty("--p", i === activeSlide ? "0" : "0"));
  }, [activeSlide]);

  const goTo = (i: number) => setActiveSlide(((i % heroSlides.length) + heroSlides.length) % heroSlides.length);

  // ----- testimonials rail -----
  const railRef = useRef<HTMLDivElement>(null);
  const scrollRail = (dir: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>(".testi-card");
    const step = card ? card.offsetWidth + 24 : rail.clientWidth / 3;
    rail.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // ----- data (existing content) -----
  const services = [1, 2, 3, 4, 5, 6].map(id => ({
    id,
    name: t(`services.service${id}.name`),
    description: t(`services.service${id}.description`),
  }));

  const news = [
    {
      id: 1,
      titleKa: "ციფრული ტრანსფორმაცია 2024 წელს",
      titleEn: "Digital Transformation in 2024",
      date: "2024-04-15",
      ph: "ph-sky",
      tag: "tag-sky",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      titleKa: "კლაუდ არქიტექტურის მომავალი",
      titleEn: "The future of cloud architecture",
      date: "2024-04-10",
      ph: "ph-coral",
      tag: "tag-coral",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      titleKa: "AI ოპერაციებში: რეალური მაგალითები",
      titleEn: "AI in operations: practical examples",
      date: "2024-04-05",
      ph: "",
      tag: "tag-purple",
      image: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const clients = [
    { name: "Banking Co", dot: "var(--coral)" },
    { name: "Retail Group", dot: "var(--sky)" },
    { name: "Logistics Hub", dot: "var(--purple-400)" },
    { name: "HealthNet", dot: "var(--coral)" },
    { name: "EduTech", dot: "var(--sky)" },
    { name: "TelecomX", dot: "var(--purple-300)" },
    { name: "FinServe", dot: "var(--coral)" },
    { name: "MediaOne", dot: "var(--sky)" },
  ];

  const testimonials = [
    {
      name: "დავით გოგიშვილი", nameEn: "David Gogishvili", company: "TechCorp Georgia", c: "var(--coral)",
      text: "Xperience-ის გუნდმა ჩვენი ოპერაციული პროცესები ერთიან პლატფორმაში გადაიტანა და დრო 30%-ით დაგვიზოგა.",
      textEn: "Xperience unified our fragmented operations into one platform and reduced process time by 30%.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "ნინო ხარაძე", nameEn: "Nino Kharadze", company: "Innovation Hub", c: "var(--sky)",
      text: "სერვისის ხარისხი, ვადები და კომუნიკაცია იყო ზუსტად იმ დონეზე, რასაც enterprise პროექტში ვითხოვდით.",
      textEn: "Delivery quality, timelines, and communication were exactly what we needed for an enterprise rollout.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "გიორგი მელიქიძე", nameEn: "Giorgi Melikidze", company: "Digital Solutions Ltd", c: "var(--purple-300)",
      text: "გუნდმა სტრატეგიიდან განხორციელებამდე სრული პასუხისმგებლობა აიღო და შედეგიც სწრაფად მივიღეთ.",
      textEn: "The team took ownership from strategy through execution, and we saw results faster than expected.",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "მარიამ ჯაში", nameEn: "Mariam Jashi", company: "Vela Group", c: "var(--coral)",
      text: "პროფესიონალური, გულითადი და გულწრფელი — ისინი გეუბნებიან იმას, რაც უნდა გაიგო, და არა იმას, რისი მოსმენაც გსურს.",
      textEn: "Professional, warm and honest — they tell you what you need to hear, not what you want to hear.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
  ];

  const svcClass = (i: number) =>
    i === 0 ? "svc-card span2" : i === 1 ? "svc-card c-sky" : i === 3 ? "svc-card c-coral" : "svc-card";

  return (
    <div className="w-full">
      {/* ===== HERO SLIDER ===== */}
      <section
        className="hero"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        <div className="hero-blobs">
          <div className="blob blob-coral" />
          <div className="blob blob-sky" />
          <div className="blob blob-lilac" />
        </div>
        <div className="hero-shapes">
          <div className="shape shape-ring" />
          <div className="shape shape-dot" />
          <div className="shape shape-pill" />
          <div className="shape shape-sq" />
        </div>
        <div className="wrap hero-inner">
          <div className="hero-slides">
            {heroSlides.map((slide, i) => (
              <div key={i} className={`hero-slide${i === activeSlide ? " active" : ""}`}>
                <div className="hero-eyebrow">{isKa ? slide.eyebrowKa : slide.eyebrowEn}</div>
                <h1>
                  {(isKa ? slide.titleKa : slide.titleEn)[0]}
                  <em>{(isKa ? slide.titleKa : slide.titleEn)[1]}</em>
                  {(isKa ? slide.titleKa : slide.titleEn)[2]}
                </h1>
                <p>{isKa ? slide.textKa : slide.textEn}</p>
                <div className="hero-ctas">
                  <Link href={withBase("/contact")} className="btn btn-coral">
                    <span>{t("home.heroCTA")}</span>
                    <span className="arr">→</span>
                  </Link>
                  <Link href={withBase("/services")} className="btn btn-ghost-light">
                    <span>{t("home.heroSecondary")}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="hero-controls">
            <div className="hero-dots">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  ref={el => {
                    dotsRef.current[i] = el;
                  }}
                  className={`hero-dot${i === activeSlide ? " active" : ""}`}
                  aria-label={`Slide ${i + 1}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <div className="hero-arrows">
              <button type="button" aria-label="Previous" onClick={() => goTo(activeSlide - 1)}>←</button>
              <button type="button" aria-label="Next" onClick={() => goTo(activeSlide + 1)}>→</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LATEST NEWS ===== */}
      <section className="section" id="news">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <div className="kicker">{t("nav.blog")}</div>
              <h2 className="section-title">{t("home.latestNews")}</h2>
            </div>
            <Link className="section-link" href={withBase("/blog")}>
              <span>{t("blog.readMore")}</span>
              <span className="arr">→</span>
            </Link>
          </div>
          <div className="news-grid">
            {news.map((article, i) => (
              <Link
                key={article.id}
                className="news-card reveal"
                href={withBase("/blog")}
                style={{ ["--d" as any]: `${i * 0.1}s` }}
              >
                <div className={`ph ${article.ph}`} style={{ aspectRatio: "16 / 10" }}>
                  <img src={article.image} alt={isKa ? article.titleKa : article.titleEn} />
                </div>
                <div className="news-body">
                  <div className="news-meta">
                    <span className={`tag ${article.tag}`}>{t("nav.blog")}</span>
                    <span className="news-date">{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <h3>{isKa ? article.titleKa : article.titleEn}</h3>
                  <span className="news-read">
                    <span>{t("blog.readMore")}</span>
                    <span className="arr">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAIN SERVICES (cream band) ===== */}
      <section className="section home-services">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <div className="kicker">{t("nav.services")}</div>
              <h2 className="section-title">{t("home.servicesTitle")}</h2>
            </div>
            <Link className="section-link" href={withBase("/services")}>
              <span>{t("services.title")}</span>
              <span className="arr">→</span>
            </Link>
          </div>
          <div className="svc-grid">
            {services.map((service, i) => (
              <Link
                key={service.id}
                className={`${svcClass(i)} reveal`}
                href={withBase(`/services/${service.id}`)}
                style={{ ["--d" as any]: `${i * 0.08}s` }}
              >
                <div className="svc-num">{String(service.id).padStart(2, "0")}</div>
                <h3>{service.name}</h3>
                <p className="svc-blurb">{service.description}</p>
                <span className="svc-go">
                  <span>{t("blog.readMore")}</span>
                  <span className="arr">→</span>
                </span>
              </Link>
            ))}
            <Link className="svc-all reveal" href={withBase("/services")} style={{ ["--d" as any]: "0.5s" }}>
              <span className="big-arr">→</span>
              <span>{t("services.title")}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CLIENT MARQUEE ===== */}
      <section className="marquee-band">
        <div className="wrap reveal" style={{ marginBottom: 34 }}>
          <div className="kicker">{t("home.clientsTitle")}</div>
        </div>
        <div className="marquee-row m-left">
          {[...clients, ...clients].map((c, i) => (
            <div key={i} className="logo-chip">
              <span className="dot" style={{ background: c.dot }} />
              {c.name}
            </div>
          ))}
        </div>
        <div className="marquee-row m-right">
          {[...clients, ...clients].map((c, i) => (
            <div key={i} className="logo-chip">
              <span className="dot" style={{ background: c.dot }} />
              {c.name}
            </div>
          ))}
        </div>
      </section>

      {/* ===== VIDEO ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <div className="kicker">{isKa ? "ვიდეო" : "Watch"}</div>
              <h2 className="section-title">
                {isKa ? "ნახეთ Xperience მოქმედებაში" : "See Xperience in action"}
              </h2>
            </div>
          </div>
          <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-6">
            <YouTubeEmbed videoId="ScMzIvxBSi4" title="Xperience process overview" />
            <YouTubeEmbed videoId="ScMzIvxBSi4" title="Xperience product walkthrough" />
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <div className="kicker">{isKa ? "შეფასებები" : "Kind words"}</div>
              <h2 className="section-title">{t("home.testimonialsTitle")}</h2>
            </div>
            <div className="testi-nav">
              <button type="button" aria-label="Scroll back" onClick={() => scrollRail(-1)}>←</button>
              <button type="button" aria-label="Scroll forward" onClick={() => scrollRail(1)}>→</button>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="testi-rail reveal" ref={railRef}>
            {testimonials.map((tm, i) => (
              <div key={i} className="testi-card" style={{ ["--c" as any]: tm.c }}>
                <p className="testi-quote">“{isKa ? tm.text : tm.textEn}”</p>
                <div className="testi-person">
                  <div className="testi-avatar">
                    <img src={tm.image} alt={isKa ? tm.name : tm.nameEn} />
                  </div>
                  <div>
                    <strong>{isKa ? tm.name : tm.nameEn}</strong>
                    <small>{tm.company}</small>
                  </div>
                </div>
              </div>
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
