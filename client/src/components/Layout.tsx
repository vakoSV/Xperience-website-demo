import React, { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import Header from "./Header";
import Footer from "./Footer";
import LiveChat from "./LiveChat";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const progressRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();

  // Enable motion (gates the handoff's animations) + scroll progress bar.
  useEffect(() => {
    document.documentElement.dataset.motion = "full";
    const onScroll = () => {
      const h =
        document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${p})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Scroll-reveal: add `.in` to `.reveal` elements as they enter the viewport.
  // Re-run when the route changes so newly mounted pages animate too.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach(el => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    // safety: reveal anything already on screen on next frame
    const raf = requestAnimationFrame(() => {
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add("in");
      });
    });
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [location]);

  // Scroll to top on route change.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <div ref={progressRef} className="scroll-progress" />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <LiveChat />
    </div>
  );
}
