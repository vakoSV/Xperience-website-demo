import React from "react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { homeWithBase, withBase } from "@/lib/basePath";

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    { href: homeWithBase(), label: t("nav.home") },
    { href: withBase("/about"), label: t("nav.about") },
    { href: withBase("/services"), label: t("nav.services") },
    { href: withBase("/blog"), label: t("nav.blog") },
    { href: withBase("/research"), label: t("nav.research") },
    { href: withBase("/contact"), label: t("nav.contact") },
  ];

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                X
              </div>
              <span className="font-bold text-lg">Xperience</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("home.heroSubtitle")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.sitemap")}</h3>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t("contact.title")}</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-1 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  +995 (0) 32 2 999 999
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  info@xperience.ge
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Tbilisi, Georgia
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.followUs")}</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                title="Facebook"
              >
                <Facebook
                  size={20}
                  className="text-muted-foreground hover:text-primary"
                />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                title="LinkedIn"
              >
                <Linkedin
                  size={20}
                  className="text-muted-foreground hover:text-primary"
                />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                title="Twitter"
              >
                <Twitter
                  size={20}
                  className="text-muted-foreground hover:text-primary"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
