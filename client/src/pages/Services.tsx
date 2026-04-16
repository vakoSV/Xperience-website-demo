import React from 'react';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Zap, Cloud, BarChart3, Shield, Brain, MessageSquare } from 'lucide-react';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      name: t('services.service1.name'),
      description: t('services.service1.description'),
      icon: Zap,
    },
    {
      id: 2,
      name: t('services.service2.name'),
      description: t('services.service2.description'),
      icon: Cloud,
    },
    {
      id: 3,
      name: t('services.service3.name'),
      description: t('services.service3.description'),
      icon: BarChart3,
    },
    {
      id: 4,
      name: t('services.service4.name'),
      description: t('services.service4.description'),
      icon: Shield,
    },
    {
      id: 5,
      name: t('services.service5.name'),
      description: t('services.service5.description'),
      icon: Brain,
    },
    {
      id: 6,
      name: t('services.service6.name'),
      description: t('services.service6.description'),
      icon: MessageSquare,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('services.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.id} className="hover:shadow-lg transition-shadow overflow-hidden group">
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-colors">
                    <Icon className="text-primary" size={48} />
                  </div>
                  <CardHeader>
                    <CardTitle>{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <Link href={`/services/${service.id}`}>
                      <Button variant="outline" className="w-full cursor-pointer">
                        {t('blog.readMore')} <ChevronRight className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('servicesPage.ctaTitle')}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            {t('servicesPage.ctaDesc')}
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="cursor-pointer">
              {t('nav.contact')} <ChevronRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
