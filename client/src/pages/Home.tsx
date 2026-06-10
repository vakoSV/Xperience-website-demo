import React, { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { withBase } from "@/lib/basePath";

const heroSlides = [
  {
    titleKa: "ბიზნესის ციფრული ტრანსფორმაცია შედეგებით",
    titleEn: "Digital transformation with measurable business impact",
    textKa:
      "ვქმნით სტრატეგიას, ვაშენებთ ტექნოლოგიას და ვზრდით ეფექტურობას მკაფიო KPI-ებით.",
    textEn:
      "We design strategy, build technology, and improve efficiency with clear KPI tracking.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
  },
  {
    titleKa: "AI და მონაცემები ზრდის ახალი ძრავა",
    titleEn: "AI and data as your next growth engine",
    textKa:
      "ანალიტიკა, ავტომატიზაცია და პროგნოზული მოდელები რეალური გადაწყვეტილებების მისაღებად.",
    textEn:
      "Analytics, automation, and predictive models to power better executive decisions.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
  },
  {
    titleKa: "ინფრასტრუქტურა, რომელიც თქვენს გუნდთან ერთად იზრდება",
    titleEn: "Infrastructure that scales with your team",
    textKa:
      "უსაფრთხო, მოქნილი და ღრუბლოვან გარემოზე დაფუძნებული გადაწყვეტილებები.",
    textEn:
      "Secure, flexible, cloud-first architecture built for continuous delivery.",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function Home() {
  const { language, t } = useLanguage();
  const isKa = language === "ka";

  // Hero carousel
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide(current => (current + 1) % heroSlides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);
  const goPrev = () =>
    setActiveSlide(i => (i - 1 + heroSlides.length) % heroSlides.length);
  const goNext = () => setActiveSlide(i => (i + 1) % heroSlides.length);

  // Clients carousel (horizontal scroll)
  const clientsRef = useRef<HTMLDivElement>(null);
  const scrollClients = (dir: number) => {
    clientsRef.current?.scrollBy({ left: dir * 260, behavior: "smooth" });
  };

  // Testimonials carousel (active-card highlight)
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const services = [
    {
      id: 1,
      name: t("services.service1.name"),
      description: t("services.service1.description"),
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: t("services.service2.name"),
      description: t("services.service2.description"),
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: t("services.service3.name"),
      description: t("services.service3.description"),
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: t("services.service4.name"),
      description: t("services.service4.description"),
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: t("services.service5.name"),
      description: t("services.service5.description"),
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: t("services.service6.name"),
      description: t("services.service6.description"),
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const news = [
    {
      id: 1,
      titleKa: "ციფრული ტრანსფორმაცია 2024 წელს",
      titleEn: "Digital Transformation in 2024",
      excerptKa:
        "ახალი ტრენდები, რომლებიც ქართულ კომპანიებს კონკურენტულ უპირატესობას მისცემს.",
      excerptEn:
        "The trends helping Georgian companies gain a competitive edge this year.",
      date: "2024-04-15",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      titleKa: "კლაუდ არქიტექტურის მომავალი",
      titleEn: "The future of cloud architecture",
      excerptKa:
        "როგორ შექმნათ უსაფრთხო და მასშტაბირებადი პლატფორმა მრავალ გუნდისთვის.",
      excerptEn:
        "How to build secure and scalable platforms for growing distributed teams.",
      date: "2024-04-10",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      titleKa: "AI ოპერაციებში: რეალური მაგალითები",
      titleEn: "AI in operations: practical examples",
      excerptKa:
        "ავტომატიზაციის ქეისები, რომლებმაც გუნდების დრო და ხარჯები შეამცირა.",
      excerptEn:
        "Automation cases that reduced team workload and operational costs.",
      date: "2024-04-05",
      image:
        "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const clients = [
    "Banking Co",
    "Retail Group",
    "Logistics Hub",
    "HealthNet",
    "EduTech",
    "TelecomX",
    "FinServe",
    "MediaOne",
  ];

  const testimonials = [
    {
      name: "დავით გოგიშვილი",
      nameEn: "David Gogishvili",
      company: "TechCorp Georgia",
      text: "Xperience-ის გუნდმა ჩვენი ოპერაციული პროცესები ერთიან პლატფორმაში გადაიტანა და დრო 30%-ით დაგვიზოგა.",
      textEn:
        "Xperience unified our fragmented operations into one platform and reduced process time by 30%.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "ნინო ხარაძე",
      nameEn: "Nino Kharadze",
      company: "Innovation Hub",
      text: "სერვისის ხარისხი, ვადები და კომუნიკაცია იყო ზუსტად იმ დონეზე, რასაც enterprise პროექტში ვითხოვდით.",
      textEn:
        "Delivery quality, timelines, and communication were exactly what we needed for an enterprise rollout.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "გიორგი მელიქიძე",
      nameEn: "Giorgi Melikidze",
      company: "Digital Solutions Ltd",
      text: "გუნდმა სტრატეგიიდან განხორციელებამდე სრული პასუხისმგებლობა აიღო და შედეგიც სწრაფად მივიღეთ.",
      textEn:
        "The team took ownership from strategy through execution, and we saw results faster than expected.",
      image:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=200&q=80",
    },
  ];

  const prevTestimonial = () =>
    setActiveTestimonial(i => (i - 1 + testimonials.length) % testimonials.length);
  const nextTestimonial = () =>
    setActiveTestimonial(i => (i + 1) % testimonials.length);

  const Eyebrow = ({ label }: { label: string }) => (
    <span className="inline-block mb-4 px-3 py-1 rounded-full bg-powder-light text-ink text-xs font-semibold uppercase tracking-wide">
      {label}
    </span>
  );

  const currentSlide = heroSlides[activeSlide];

  return (
    <div className="w-full">
      {/* ===== HERO CAROUSEL ===== */}
      <section className="relative overflow-hidden min-h-[72vh] flex items-center">
        {heroSlides.map((slide, i) => (
          <img
            key={i}
            src={slide.image}
            alt=""
            aria-hidden={i !== activeSlide}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Brand color overlay */}
        <div className="absolute inset-0 bg-[#1a103e]/65" />

        {/* Prev / Next arrows */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 grid place-items-center h-11 w-11 rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/30 transition-colors cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 grid place-items-center h-11 w-11 rounded-full bg-white/15 text-white backdrop-blur hover:bg-white/30 transition-colors cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>

        <div className="container relative z-10 py-20 md:py-28 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {isKa ? currentSlide.titleKa : currentSlide.titleEn}
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8">
              {isKa ? currentSlide.textKa : currentSlide.textEn}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={withBase("/contact")}>
                <Button size="lg">{t("home.heroCTA")}</Button>
              </Link>
              <Link href={withBase("/services")}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/40 hover:bg-white/20 hover:text-white"
                >
                  {t("home.heroSecondary")}
                </Button>
              </Link>
            </div>
            {/* Dot indicators */}
            <div className="mt-8 flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    index === activeSlide ? "w-8 bg-white" : "w-2.5 bg-white/50"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT (cream) ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow label={isKa ? "ჩვენ შესახებ" : "About Us"} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isKa
                ? "როგორ ვმართავთ ტრანსფორმაციას"
                : "How we lead transformation programs"}
            </h2>
            <p className="text-muted-foreground mb-8">
              {isKa
                ? "მოკლე მიმოხილვა ჩვენი მიდგომის შესახებ: შეფასება, სტრატეგია, ტექნიკური განხორციელება და უწყვეტი გაუმჯობესება."
                : "A quick overview of our process: assessment, strategy, technical delivery, and continuous optimization."}
            </p>
            <Link href={withBase("/about")}>
              <Button className="cursor-pointer bg-powder text-ink hover:bg-violet hover:text-white">
                {t("nav.about")} <ChevronRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SERVICES (white) ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <Eyebrow label={isKa ? "სერვისები" : "Services"} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("home.servicesTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("home.servicesSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <Card
                key={service.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-40 w-full object-cover"
                />
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  {/* Service card button — powder blue */}
                  <Link href={withBase(`/services/${service.id}`)}>
                    <Button className="cursor-pointer bg-powder text-ink hover:bg-violet hover:text-white">
                      {t("blog.readMore")} <ChevronRight size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENTS CAROUSEL (warm cream) ===== */}
      <section className="py-20 md:py-28 bg-cream-warm">
        <div className="container">
          <div className="text-center mb-12">
            <Eyebrow label={isKa ? "პარტნიორები" : "Partners"} />
            <h2 className="text-3xl md:text-4xl font-bold">
              {isKa ? "ჩვენი სანდო კლიენტები" : "Our Trusted Clients"}
            </h2>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <button
              type="button"
              onClick={() => scrollClients(-1)}
              aria-label="Scroll clients left"
              className="shrink-0 grid place-items-center h-11 w-11 rounded-full bg-[#2d1b69] text-white hover:bg-violet transition-colors cursor-pointer"
            >
              <ChevronLeft size={22} />
            </button>
            <div
              ref={clientsRef}
              className="flex-1 flex gap-4 overflow-x-auto scroll-smooth py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {clients.map((client, i) => (
                <div
                  key={`${client}-${i}`}
                  className="shrink-0 w-44 h-24 rounded-xl bg-white border border-border flex items-center justify-center text-muted-foreground font-semibold"
                >
                  {client}
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollClients(1)}
              aria-label="Scroll clients right"
              className="shrink-0 grid place-items-center h-11 w-11 rounded-full bg-[#2d1b69] text-white hover:bg-violet transition-colors cursor-pointer"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* ===== VIDEO (white) ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <Eyebrow label={isKa ? "ვიდეო" : "Video"} />
            <h2 className="text-3xl md:text-4xl font-bold">
              {isKa ? "ნახეთ Xperience მოქმედებაში" : "See Xperience in action"}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed
              videoId="ScMzIvxBSi4"
              title="Xperience process overview"
              className="shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS CAROUSEL (cream) ===== */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <div className="text-center mb-12">
            <Eyebrow label={isKa ? "შეფასებები" : "Testimonials"} />
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("home.testimonialsTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <Card
                key={i}
                className={`transition-opacity duration-300 ${
                  i === activeTestimonial ? "opacity-100 shadow-lg" : "opacity-50"
                }`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.image}
                      alt={isKa ? testimonial.name : testimonial.nameEn}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">
                        {isKa ? testimonial.name : testimonial.nameEn}
                      </CardTitle>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star
                        key={star}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "{isKa ? testimonial.text : testimonial.textEn}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              type="button"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="grid place-items-center h-11 w-11 rounded-full bg-[#2d1b69] text-white hover:bg-violet transition-colors cursor-pointer"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="grid place-items-center h-11 w-11 rounded-full bg-[#2d1b69] text-white hover:bg-violet transition-colors cursor-pointer"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* ===== NEWS (white) ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <Eyebrow label={isKa ? "სიახლეები" : "Insights"} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("home.latestNews")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map(article => (
              <Card
                key={article.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={article.image}
                  alt={isKa ? article.titleKa : article.titleEn}
                  className="h-44 w-full object-cover"
                />
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <CardTitle>
                    {isKa ? article.titleKa : article.titleEn}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {isKa ? article.excerptKa : article.excerptEn}
                  </p>
                  {/* News "Read More" button — peach blush */}
                  <Link href={withBase("/blog")}>
                    <Button className="cursor-pointer bg-peach text-white hover:bg-peach-dark hover:text-white">
                      {t("blog.readMore")} <ChevronRight size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
