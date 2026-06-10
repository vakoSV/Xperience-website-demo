import React from "react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { withBase } from "@/lib/basePath";

export default function About() {
  const { language, t } = useLanguage();
  const isKa = language === "ka";

  const values = [
    { num: "01", c: "var(--coral)", d: 0, tEn: "Empathy first", tKa: "ჯერ ემპათია", bEn: "We listen before we measure. Every project starts with real people and real feelings.", bKa: "ჯერ ვუსმენთ, მერე ვზომავთ. ყოველი პროექტი რეალური ადამიანებით იწყება." },
    { num: "02", c: "var(--sky)", d: 0.08, tEn: "Honest findings", tKa: "გულწრფელი მიგნებები", bEn: "We report what the data says — even when it's uncomfortable. Especially then.", bKa: "ვამბობთ იმას, რასაც მონაცემები ამბობს — მაშინაც, როცა ეს უხერხულია." },
    { num: "03", c: "var(--purple-300)", d: 0.16, tEn: "Curiosity", tKa: "ცნობისმოყვარეობა", bEn: "We keep asking “why” until the answer is useful, not just interesting.", bKa: "ვკითხავთ „რატომ“-ს, სანამ პასუხი სასარგებლო არ გახდება." },
    { num: "04", c: "var(--coral)", d: 0.24, tEn: "Impact over reports", tKa: "შედეგი და არა ანგარიში", bEn: "Success isn't a slide deck — it's the change your customers actually feel.", bKa: "წარმატება პრეზენტაცია არ არის — არამედ ცვლილება, რომელსაც მომხმარებელი რეალურად გრძნობს." },
  ];

  const team = [
    { c: "var(--coral)", ph: "ph", d: 0, roleEn: "Research Lead", roleKa: "კვლევის ხელმძღვანელი" },
    { c: "var(--sky)", ph: "ph ph-sky", d: 0.08, roleEn: "Senior CX Consultant", roleKa: "უფროსი CX კონსულტანტი" },
    { c: "var(--purple-300)", ph: "ph ph-coral", d: 0.16, roleEn: "Data Analyst", roleKa: "მონაცემთა ანალიტიკოსი" },
    { c: "var(--sky)", ph: "ph ph-coral", d: 0, roleEn: "EX Consultant", roleKa: "EX კონსულტანტი" },
    { c: "var(--coral)", ph: "ph ph-sky", d: 0.08, roleEn: "Project Manager", roleKa: "პროექტის მენეჯერი" },
    { c: "var(--purple-300)", ph: "ph", d: 0.16, roleEn: "Field Coordinator", roleKa: "საველე სამუშაოების კოორდინატორი" },
  ];

  const teamName = isKa ? "სახელი გვარი" : "Name Surname";

  return (
    <div className="w-full">
      {/* ===== HERO ===== */}
      <section className="sp-hero">
        <div className="hero-blobs">
          <div className="blob blob-coral" />
          <div className="blob blob-sky" />
        </div>
        <div className="hero-shapes">
          <div className="shape shape-ring" style={{ top: "16%", right: "9%" }} />
          <div className="shape shape-pill" style={{ bottom: "18%", right: "16%" }} />
        </div>
        <div className="wrap">
          <div className="kicker">{isKa ? "ჩვენ შესახებ" : "About us"}</div>
          <h1>
            {isKa ? "ყველა გამოცდილებას " : "We make every experience "}
            <em>{isKa ? "მნიშვნელობა" : "count"}</em>
            {isKa ? " აქვს" : ""}
          </h1>
          <p>
            {isKa
              ? "Xperience არის კვლევითი და საკონსულტაციო სტუდია თბილისიდან. ვსწავლობთ, რას გრძნობენ მომხმარებლები და თანამშრომლები სინამდვილეში — და ვეხმარებით ორგანიზაციებს იმოქმედონ ამის მიხედვით."
              : "Xperience is a research & consulting studio from Tbilisi. We study how customers and employees really feel — and help organisations act on it."}
          </p>
        </div>
      </section>

      {/* ===== MISSION + VIEW ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <div className="kicker">{isKa ? "ვინ ვართ ჩვენ" : "Who we are"}</div>
            </div>
          </div>
          <div className="mv-grid">
            <div className="mv-card m-purple reveal" style={{ ["--d" as any]: "0s" }}>
              <div className="mv-label">{isKa ? "ჩვენი მისია" : "Our mission"}</div>
              <p>
                {isKa
                  ? "რეალური ადამიანური ინსაითი ყველა ბიზნეს-გადაწყვეტილების ცენტრში — რომ სერვისი ყველასთვის გაუმჯობესდეს."
                  : "To put real human insight at the heart of every business decision in Georgia — so service gets better for everyone."}
              </p>
            </div>
            <div className="mv-card m-sky reveal" style={{ ["--d" as any]: "0.1s" }}>
              <div className="mv-label">{isKa ? "ჩვენი ხედვა" : "Our view"}</div>
              <p>
                {isKa
                  ? "გვჯერა, რომ კომპანიები გამოცდილებით უნდა ეჯიბრებოდნენ და არა მხოლოდ ფასით. მონაცემები გზას გვიჩვენებს — მაგრამ ორგანიზაციებს ემპათია ამოძრავებს."
                  : "We believe companies should compete on experience, not just price. Data shows the way — but empathy is what makes organisations move."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES (cream band) ===== */}
      <section className="section values-band">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <div className="kicker">{isKa ? "რისი გჯერა გვაქვს" : "What we stand for"}</div>
              <h2 className="section-title">{isKa ? "ჩვენი ღირებულებები" : "Our values"}</h2>
            </div>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card reveal" style={{ ["--c" as any]: v.c, ["--d" as any]: `${v.d}s` }}>
                <div className="value-num">{v.num}</div>
                <h3>{isKa ? v.tKa : v.tEn}</h3>
                <p>{isKa ? v.bKa : v.bEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div>
              <div className="kicker">{isKa ? "ადამიანები" : "The people"}</div>
              <h2 className="section-title">{isKa ? "ჩვენი გუნდი" : "Our team"}</h2>
            </div>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <div key={i} className="team-card reveal" style={{ ["--c" as any]: m.c, ["--d" as any]: `${m.d}s` }}>
                <div className="team-photo">
                  <div className={m.ph}>
                    <span>team photo · 4:5</span>
                  </div>
                </div>
                <div className="team-body">
                  <strong>{teamName}</strong>
                  <small>{isKa ? m.roleKa : m.roleEn}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section className="section">
        <div className="wrap">
          <div className="founder-card reveal">
            <div className="founder-photo">
              <div className="ph">
                <span>founder photo · 4:5</span>
              </div>
            </div>
            <div className="founder-body">
              <div className="kicker">{isKa ? "დამფუძნებლის სიტყვა" : "A word from the founder"}</div>
              <p className="founder-quote">
                {isKa
                  ? "„Xperience დავიწყე მარტივი რწმენით: ორგანიზაციები მონაცემების გამო კი არ იცვლებიან — ემპათიის გამო იცვლებიან. ჩვენი საქმეა ერთი მეორედ ვაქციოთ.“"
                  : "“I started Xperience with a simple belief: organisations don't change because of data — they change because of empathy. Our job is to turn one into the other.”"}
              </p>
              <div className="founder-sig">
                <strong>{isKa ? "დამფუძნებლის სახელი" : "Founder Name"}</strong>
                <small>{isKa ? "დამფუძნებელი და მმართველი პარტნიორი" : "Founder & Managing Partner"}</small>
              </div>
              <p className="founder-bio">
                {isKa
                  ? "15 წელი კვლევასა და სერვის-დიზაინში — საბანკო, ტელეკომ და საცალო სექტორებში. სჯერა, რომ ყველა დიდი კომპანია, არსით, დიდი გამოცდილებაა."
                  : "15 years in research and service design across banking, telecom and retail. Believes every great company is, at its core, a great experience."}
              </p>
            </div>
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
