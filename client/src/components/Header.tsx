import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { homeWithBase, withBase } from "@/lib/basePath";
import { socialLinks } from "./icons";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: homeWithBase(), label: t("nav.home") },
    { href: withBase("/about"), label: t("nav.about") },
    { href: withBase("/services"), label: t("nav.services") },
    { href: withBase("/blog"), label: t("nav.blog") },
    { href: withBase("/research"), label: t("nav.research") },
    { href: withBase("/contact"), label: t("nav.contact") },
  ];

  const isActive = (href: string) => {
    const home = homeWithBase();
    if (href === home) return location === home || location === "/";
    return location === href || location.startsWith(href + "/");
  };

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="wrap header-inner">
        <a className="header-logo" href={homeWithBase()} aria-label="Xperience — home">
          <img src={withBase("/assets/logos/logo-dark.png")} alt="Xperience" />
        </a>

        <nav className="main-nav">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "active" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-tools">
          <div className="socials">
            {socialLinks.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
          <div className="lang-bar">
            <button
              type="button"
              className={language === "en" ? "active" : undefined}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={language === "ka" ? "active" : undefined}
              onClick={() => setLanguage("ka")}
            >
              ქა
            </button>
          </div>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-nav" style={{ display: "block" }}>
          <div className="wrap">
            <nav>
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive(link.href) ? "active" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
