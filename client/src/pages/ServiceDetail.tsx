import React from "react";
import { useRoute, Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { withBase } from "@/lib/basePath";
import { HeroTitle } from "@/components/HeroTitle";

export default function ServiceDetail() {
  const [, params] = useRoute(withBase("/services/:id"));
  const { language, t } = useLanguage();
  const isKa = language === "ka";
  const routeId = (params as Record<string, string | undefined> | undefined)?.id;
  const serviceId = routeId ? parseInt(routeId) : 1;

  const serviceDetails: Record<number, any> = {
    1: { name: t("services.service1.name"), description: t("services.service1.description"), fullDescription: "ციფრული ტრანსფორმაცია არის თქვენი ბიზნეს ოპერაციების თანამედროვე ტექნოლოგიებით ოპტიმიზაციის პროცესი.", fullDescriptionEn: "Digital transformation is the process of optimizing your business operations with modern technologies.", benefits: ["გაზრდილი ეფექტურობა / Increased Efficiency", "ხარჯების შემცირება / Cost Reduction", "გაუმჯობესებული კლიენტის გამოცდილება / Improved Customer Experience", "ბიზნეს მოქნილობა / Business Agility"] },
    2: { name: t("services.service2.name"), description: t("services.service2.description"), fullDescription: "კლაუდ სოლიუშნები უზრუნველყოფენ მასშტაბირებადობას, უსაფრთხოებას და ხარჯების ეფექტურობას.", fullDescriptionEn: "Cloud solutions provide scalability, security, and cost efficiency.", benefits: ["მაღალი ხელმისაწვდომობა / High Availability", "ავტომატური მასშტაბირება / Auto Scaling", "ენტერპრაიზ უსაფრთხოება / Enterprise Security", "გლობალური მიმოწვევა / Global Reach"] },
    3: { name: t("services.service3.name"), description: t("services.service3.description"), fullDescription: "მონაცემების ანალიზი გვეხმარება გამოვიტანოთ ღირებული ინსაითები ბიზნეს გადაწყვეტილებებისთვის.", fullDescriptionEn: "Data analytics helps extract valuable insights for business decisions.", benefits: ["რეალ-დროის ინსაითები / Real-time Insights", "პროგნოზული ანალიტიკა / Predictive Analytics", "ბიზნეს ინტელექტი / Business Intelligence", "მონაცემის ვიზუალიზაცია / Data Visualization"] },
    4: { name: t("services.service4.name"), description: t("services.service4.description"), fullDescription: "კიბერუსაფრთხოება დაცავს თქვენი ციფრული აქტივებს ყველა სახის საფრთხიდან.", fullDescriptionEn: "Cybersecurity protects your digital assets from all types of threats.", benefits: ["მუქარის დეტექცია / Threat Detection", "დაკომპლექტება და რეაგირება / Compliance & Response", "პენეტრაციული ტესტირება / Penetration Testing", "24/7 მონიტორინგი / 24/7 Monitoring"] },
    5: { name: t("services.service5.name"), description: t("services.service5.description"), fullDescription: "AI და მანქანური სწავლა ხელოვნური ინტელექტის ძალას გამოიყენებს ბიზნესის ავტომატიზაციისთვის.", fullDescriptionEn: "AI and machine learning leverage artificial intelligence for business automation.", benefits: ["ავტომატიზაცია / Automation", "პროგნოზული მოდელირება / Predictive Modeling", "ბუნებრივი ენის დამუშავება / Natural Language Processing", "მანქანური ხედვა / Computer Vision"] },
    6: { name: t("services.service6.name"), description: t("services.service6.description"), fullDescription: "კონსულტაციები გთავაზობთ სტრატეგიულ გაიდლაინებს ტექნოლოგიის ინვესტიციებისთვის.", fullDescriptionEn: "Consulting provides strategic guidance for technology investments.", benefits: ["სტრატეგიული დაგეგმვა / Strategic Planning", "ტექნოლოგიის შეფასება / Technology Assessment", "ბიზნეს პროცესის ოპტიმიზაცია / Process Optimization", "ტიმის ტრენინგი / Team Training"] },
  };

  const service = serviceDetails[serviceId] || serviceDetails[1];

  return (
    <div className="w-full">
      {/* ===== HERO ===== */}
      <section className="sp-hero">
        <div className="hero-blobs">
          <div className="blob blob-coral" />
          <div className="blob blob-sky" />
        </div>
        <div className="wrap">
          <Link href={withBase("/services")} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--sky)", fontWeight: 700, marginBottom: 18 }}>
            <ChevronLeft size={18} /> {t("nav.services")}
          </Link>
          <div className="svc-num" style={{ color: "var(--sky)", marginBottom: 8 }}>{String(serviceId).padStart(2, "0")}</div>
          <h1><HeroTitle text={service.name} /></h1>
          <p>{service.description}</p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="section">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 reveal">
              <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>{isKa ? "დეტალური აღწერა" : "Detailed Description"}</h2>
              <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.7, marginBottom: 32 }}>{isKa ? service.fullDescription : service.fullDescriptionEn}</p>

              <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 18 }}>{isKa ? "სარგებელი" : "Benefits"}</h3>
              <ul style={{ display: "grid", gap: 14, listStyle: "none", marginBottom: 32 }}>
                {service.benefits.map((benefit: string, i: number) => (
                  <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                    <span style={{ width: 26, height: 26, flex: "none", borderRadius: "50%", display: "grid", placeItems: "center", background: "rgba(255,131,115,0.2)", color: "#c2402e", marginTop: 2 }}>
                      <Check size={15} />
                    </span>
                    <span style={{ color: "var(--ink-soft)" }}>{benefit}</span>
                  </li>
                ))}
              </ul>

              <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 14 }}>{isKa ? "ჩვენი მიდგომა" : "Our Approach"}</h3>
              <p style={{ color: "var(--ink-soft)", lineHeight: 1.7 }}>
                {isKa
                  ? "ჩვენი ექსპერტი გუნდი იყენებს ინდუსტრიის საუკეთესო პრაქტიკებს და ინოვაციური ტექნოლოგიებს თქვენი ბიზნეს მოწოდებების გადასაწყვეტად. ჩვენ ვიმუშავებთ თქვენთან მჭიდროდ, რათა უზრუნველვყოთ წარმატება."
                  : "Our expert team uses industry best practices and innovative technologies to solve your business challenges. We work closely with you to ensure success."}
              </p>
            </div>

            <div className="lg:col-span-1 reveal">
              <div className="xp-card" style={{ padding: "28px 28px", position: "sticky", top: 96 }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 10 }}>{isKa ? "დაიწყეთ" : "Get Started"}</h3>
                <p style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
                  {isKa ? "მზადაა ეს სერვისი თქვენი ბიზნესისთვის? დაგვიკავშირდით დღეს." : "Ready for this service for your business? Contact us today."}
                </p>
                <Link href={withBase("/contact")} className="btn btn-coral" style={{ width: "100%", justifyContent: "center", marginBottom: 12 }}>
                  <span>{t("nav.contact")}</span>
                  <span className="arr">→</span>
                </Link>
                <Link href={withBase("/services")} className="btn btn-purple" style={{ width: "100%", justifyContent: "center" }}>
                  <span>{t("nav.services")}</span>
                  <span className="arr">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RELATED (cream band) ===== */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="wrap">
          <h2 className="section-title reveal" style={{ marginBottom: 32 }}>{isKa ? "სხვა სერვისები" : "Other Services"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].filter(id => id !== serviceId).slice(0, 3).map(id => {
              const other = serviceDetails[id];
              return (
                <Link key={id} href={withBase(`/services/${id}`)} className="xp-card reveal" style={{ padding: "26px 26px", display: "block" }}>
                  <div className="svc-num" style={{ marginBottom: 8 }}>{String(id).padStart(2, "0")}</div>
                  <h3 style={{ fontSize: 19, fontWeight: 800, marginBottom: 8 }}>{other.name}</h3>
                  <p style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.6 }}>{other.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
