import React from "react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { homeWithBase, withBase } from "@/lib/basePath";
import { socialLinks } from "./icons";

export default function Footer() {
  const { t } = useLanguage();

  const siteMap = [
    { href: homeWithBase(), label: t("nav.home") },
    { href: withBase("/about"), label: t("nav.about") },
    { href: withBase("/services"), label: t("nav.services") },
    { href: withBase("/blog"), label: t("nav.blog") },
    { href: withBase("/research"), label: t("nav.research") },
    { href: withBase("/contact"), label: t("nav.contact") },
  ];

  const services = [
    t("services.service1.name"),
    t("services.service2.name"),
    t("services.service3.name"),
    t("services.service4.name"),
  ];

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={withBase("/assets/logos/logo-white.png")} alt="Xperience" />
            <p>{t("home.heroSubtitle")}</p>
          </div>

          <div>
            <h4>{t("footer.sitemap")}</h4>
            <ul>
              {siteMap.map(link => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{t("nav.services")}</h4>
            <ul>
              {services.map((name, i) => (
                <li key={i}>
                  <Link href={withBase("/services")}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{t("contact.title")}</h4>
            <ul className="footer-contact">
              <li>
                <span className="lbl">T</span>
                <a href="tel:+995322999999">+995 (0) 32 2 999 999</a>
              </li>
              <li>
                <span className="lbl">@</span>
                <a href="mailto:info@xperience.ge">info@xperience.ge</a>
              </li>
              <li>
                <span className="lbl">⌂</span>
                <span>Tbilisi, Georgia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t("footer.copyright")}</span>
          <div className="socials">
            {socialLinks.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
