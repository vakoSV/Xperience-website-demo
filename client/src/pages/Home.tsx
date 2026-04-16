import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Star } from "lucide-react";
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
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide(current => (current + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

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

  const currentSlide = heroSlides[activeSlide];

  return (
    <div className="w-full">
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <img
          src={currentSlide.image}
          alt="Business transformation"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="container relative z-10 py-20 md:py-28 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              {language === "ka" ? currentSlide.titleKa : currentSlide.titleEn}
            </h1>
            <p className="text-lg md:text-xl text-slate-100/90 mb-8">
              {language === "ka" ? currentSlide.textKa : currentSlide.textEn}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={withBase("/contact")}>
                <Button size="lg">{t("home.heroCTA")}</Button>
              </Link>
              <Link href={withBase("/services")}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 text-white border-white/40 hover:bg-white/20"
                >
                  {t("home.heroSecondary")}
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${index === activeSlide ? "w-8 bg-white" : "w-2.5 bg-white/50"}`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
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
                  <Link href={withBase(`/services/${service.id}`)}>
                    <a className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                      {t("blog.readMore")} <ChevronRight size={16} />
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {language === "ka"
                  ? "როგორ ვმართავთ ტრანსფორმაციას"
                  : "How we lead transformation programs"}
              </h2>
              <p className="text-muted-foreground mb-6">
                {language === "ka"
                  ? "მოკლე მიმოხილვა ჩვენი მიდგომის შესახებ: შეფასება, სტრატეგია, ტექნიკური განხორციელება და უწყვეტი გაუმჯობესება."
                  : "A quick overview of our process: assessment, strategy, technical delivery, and continuous optimization."}
              </p>
              <Link href={withBase("/about")}>
                <Button variant="outline">{t("nav.about")}</Button>
              </Link>
            </div>
            <YouTubeEmbed
              videoId="ScMzIvxBSi4"
              title="Xperience process overview"
              className="shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
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
                  alt={language === "ka" ? article.titleKa : article.titleEn}
                  className="h-44 w-full object-cover"
                />
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <CardTitle>
                    {language === "ka" ? article.titleKa : article.titleEn}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {language === "ka" ? article.excerptKa : article.excerptEn}
                  </p>
                  <Link href={withBase("/blog")}>
                    <a className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                      {t("blog.readMore")} <ChevronRight size={16} />
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-border bg-background">
        <div className="container overflow-hidden">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
            {t("home.clientsTitle")}
          </h2>
          <div className="relative">
            <div className="marquee-track">
              {[...clients, ...clients].map((client, index) => (
                <div key={`${client}-${index}`} className="marquee-item">
                  <div className="h-16 px-8 rounded-lg border border-border bg-card text-muted-foreground flex items-center justify-center font-semibold whitespace-nowrap">
                    {client}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("home.testimonialsTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.image}
                      alt={
                        language === "ka"
                          ? testimonial.name
                          : testimonial.nameEn
                      }
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">
                        {language === "ka"
                          ? testimonial.name
                          : testimonial.nameEn}
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
                    "{language === "ka" ? testimonial.text : testimonial.textEn}
                    "
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
