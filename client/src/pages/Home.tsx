import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Star } from 'lucide-react';

export default function Home() {
  const { language, t } = useLanguage();

  const services = [
    { id: 1, name: t('services.service1.name'), description: t('services.service1.description') },
    { id: 2, name: t('services.service2.name'), description: t('services.service2.description') },
    { id: 3, name: t('services.service3.name'), description: t('services.service3.description') },
    { id: 4, name: t('services.service4.name'), description: t('services.service4.description') },
    { id: 5, name: t('services.service5.name'), description: t('services.service5.description') },
    { id: 6, name: t('services.service6.name'), description: t('services.service6.description') },
  ];

  const news = [
    {
      id: 1,
      title: 'ციფრული ტრანსფორმაცია 2024 წელს',
      titleEn: 'Digital Transformation in 2024',
      excerpt: 'აღმოაჩინეთ ახალი ტრენდები ციფრული ტრანსფორმაციის სფეროში',
      excerptEn: 'Discover new trends in digital transformation',
      date: '2024-04-15',
    },
    {
      id: 2,
      title: 'კლაუდ ტექნოლოგიის ფუტურე',
      titleEn: 'The Future of Cloud Technology',
      excerpt: 'კლაუდ კომპიუტინგის ახალი საზღვრები',
      excerptEn: 'New horizons in cloud computing',
      date: '2024-04-10',
    },
    {
      id: 3,
      title: 'AI-ის გამოყენება ბიზნესში',
      titleEn: 'AI Applications in Business',
      excerpt: 'როგორ გამოიყენოთ ხელოვნური ინტელექტი თქვენი კომპანიაში',
      excerptEn: 'How to leverage AI in your company',
      date: '2024-04-05',
    },
  ];

  const testimonials = [
    {
      name: 'დავით გოგიშვილი',
      nameEn: 'David Gogishvili',
      company: 'TechCorp Georgia',
      text: 'Xperience-ის გადაწყვეტილებები მნიშვნელოვნად გაუმჯობესა ჩვენი ბიზნეს პროცესები.',
      textEn: 'Xperience solutions significantly improved our business processes.',
      rating: 5,
    },
    {
      name: 'ნინო ხარაძე',
      nameEn: 'Nino Kharadze',
      company: 'Innovation Hub',
      text: 'პროფესიონალური მიდგომა და ღრმა ტექნიკური ცოდნა.',
      textEn: 'Professional approach and deep technical knowledge.',
      rating: 5,
    },
    {
      name: 'გიორგი მელიქიძე',
      nameEn: 'Giorgi Melikidze',
      company: 'Digital Solutions Ltd',
      text: 'ბესტ-ინ-კლასის სერვისი და აღორძინებელი ჯგუფი.',
      textEn: 'Best-in-class service and an amazing team.',
      rating: 5,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {t('home.heroTitle')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {t('home.heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="cursor-pointer">
                  {t('home.heroCTA')}
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="cursor-pointer">
                  {t('home.heroSecondary')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('home.servicesTitle')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('home.servicesSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <ChevronRight className="text-primary" size={24} />
                  </div>
                  <CardTitle>{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link href={`/services/${service.id}`}>
                    <a className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
                      {t('blog.readMore')} <ChevronRight size={16} />
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg" className="cursor-pointer">
                {t('nav.services')} <ChevronRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('home.latestNews')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5"></div>
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <CardTitle className="line-clamp-2">
                    {language === 'ka' ? article.title : article.titleEn}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {language === 'ka' ? article.excerpt : article.excerptEn}
                  </p>
                  <Link href="/blog">
                    <a className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
                      {t('blog.readMore')} <ChevronRight size={16} />
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('home.clientsTitle')}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="h-24 bg-background border border-border rounded-lg flex items-center justify-center hover:shadow-md transition-shadow"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Client {i}</div>
                  <div className="text-xs text-muted-foreground">Logo</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('home.testimonialsTitle')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">
                    {language === 'ka' ? testimonial.name : testimonial.nameEn}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "{language === 'ka' ? testimonial.text : testimonial.textEn}"
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
