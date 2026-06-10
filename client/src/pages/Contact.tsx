import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success(t("contactPage.success"));
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    { icon: Phone, label: t("contact.phone_label"), value: "+995 (0) 32 2 999 999", href: "tel:+995322999999" },
    { icon: Mail, label: t("contact.email_label"), value: "info@xperience.ge", href: "mailto:info@xperience.ge" },
    { icon: MapPin, label: t("contact.address"), value: "Tbilisi, Georgia", href: "#" },
    { icon: Clock, label: t("contactPage.workingHours"), value: t("contactPage.workingHoursValue"), href: "#" },
  ];

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
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
          <div className="kicker">{t("contact.subtitle")}</div>
          <h1>{t("contact.title")}</h1>
          <p>{t("contactPage.infoTitle")}</p>
        </div>
      </section>

      {/* ===== CONTACT + FORM ===== */}
      <section className="section">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* info */}
            <div className="lg:col-span-1 reveal">
              <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 24 }}>{t("contactPage.infoTitle")}</h2>
              <div style={{ display: "grid", gap: 18 }}>
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <a key={i} href={info.href} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <span style={{ width: 46, height: 46, flex: "none", borderRadius: 12, display: "grid", placeItems: "center", background: "rgba(53,32,125,0.08)", color: "var(--purple)" }}>
                        <Icon size={20} />
                      </span>
                      <span>
                        <span style={{ display: "block", fontSize: 13, fontWeight: 700, color: "var(--ink-soft)" }}>{info.label}</span>
                        <span style={{ display: "block", fontWeight: 600 }}>{info.value}</span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* form */}
            <div className="lg:col-span-2 reveal">
              <form onSubmit={handleSubmit} className="xp-card" style={{ padding: "32px 32px 36px", display: "grid", gap: 18 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800 }}>{t("contactPage.sendMessage")}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="field-label">{t("contact.name")}</label>
                    <input className="field-input" type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t("contact.name")} required />
                  </div>
                  <div>
                    <label className="field-label">{t("contact.email")}</label>
                    <input className="field-input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t("contact.email")} required />
                  </div>
                </div>
                <div>
                  <label className="field-label">{t("contact.phone")}</label>
                  <input className="field-input" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+995 (0) 32 2 999 999" />
                </div>
                <div>
                  <label className="field-label">{t("contact.message")}</label>
                  <textarea className="field-input" name="message" value={formData.message} onChange={handleChange} placeholder={t("contact.message")} required rows={6} style={{ resize: "vertical" }} />
                </div>
                <button type="submit" className="btn btn-coral" disabled={isSubmitting} style={{ justifyContent: "center" }}>
                  {isSubmitting ? (
                    <span>{t("contactPage.sending")}</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>{t("contact.send")}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP (cream band) ===== */}
      <section className="section" style={{ background: "var(--cream)" }}>
        <div className="wrap">
          <div className="section-head reveal" style={{ justifyContent: "center", textAlign: "center" }}>
            <div>
              <div className="kicker" style={{ justifyContent: "center" }}>{t("contactPage.location")}</div>
              <h2 className="section-title">{t("contactPage.location")}</h2>
            </div>
          </div>
          <div className="ph ph-sky reveal" style={{ height: 360, borderRadius: 22 }}>
            <span>map · Tbilisi, Georgia</span>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal" style={{ justifyContent: "center", textAlign: "center" }}>
            <div>
              <div className="kicker" style={{ justifyContent: "center" }}>FAQ</div>
              <h2 className="section-title">{t("contactPage.faq")}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ maxWidth: 820, margin: "0 auto" }}>
            {faqs.map((item, i) => (
              <div key={i} className="xp-card reveal" style={{ padding: "24px 26px", ["--d" as any]: `${i * 0.06}s` }}>
                <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8 }}>{item.q}</h3>
                <p style={{ color: "var(--ink-soft)", lineHeight: 1.6 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
