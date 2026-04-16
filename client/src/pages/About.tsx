import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

export default function About() {
  const { language, t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      titleKa: 'ინოვაცია',
      description: 'We constantly innovate to provide cutting-edge solutions',
      descriptionKa: 'ჩვენ მუდმივად ვიხელმძღვანელთ ინოვაციებით',
    },
    {
      icon: Eye,
      title: 'Transparency',
      titleKa: 'გამჭვირვალობა',
      description: 'We believe in open communication and transparency',
      descriptionKa: 'ჩვენ გვჯერა ღია კომუნიკაციაში',
    },
    {
      icon: Heart,
      title: 'Excellence',
      titleKa: 'ქვესიტელობა',
      description: 'We strive for excellence in everything we do',
      descriptionKa: 'ჩვენ ვისწრაფვით სამეწამულოსთან ყველაფერში',
    },
  ];

  const team = [
    {
      name: 'ლევან ბერიძე',
      nameEn: 'Levan Beridze',
      role: 'CEO & Founder',
      roleKa: 'დირექტორი და დამფუძნებელი',
      bio: 'ტექნოლოგიის ინდუსტრიაში 15+ წლის გამოცდილება',
      bioEn: '15+ years of experience in technology industry',
    },
    {
      name: 'ელენე ხარაძე',
      nameEn: 'Elene Kharadze',
      role: 'CTO',
      roleKa: 'ტექნოლოგიის დირექტორი',
      bio: 'ღრმა ტექნიკური ცოდნა და ლიდერობის უნარი',
      bioEn: 'Deep technical knowledge and leadership skills',
    },
    {
      name: 'გიორგი მელიქიძე',
      nameEn: 'Giorgi Melikidze',
      role: 'Head of Operations',
      roleKa: 'ოპერაციების ხელმძღვანელი',
      bio: 'ბიზნეს პროცესების ოპტიმიზაციის ექსპერტი',
      bioEn: 'Expert in business process optimization',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('about.missionText')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('about.mission')}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t('about.missionText')}
              </p>
              <p className="text-muted-foreground">
                {t('aboutPage.missionExtra')}
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('about.vision')}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t('about.visionText')}
              </p>
              <p className="text-muted-foreground">
                {t('aboutPage.visionExtra')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('about.values')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <CardTitle>
                      {language === 'ka' ? value.titleKa : value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {language === 'ka' ? value.descriptionKa : value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('aboutPage.ourTeam')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5"></div>
                <CardHeader>
                  <CardTitle>
                    {language === 'ka' ? member.name : member.nameEn}
                  </CardTitle>
                  <div className="text-sm text-primary font-semibold">
                    {language === 'ka' ? member.roleKa : member.role}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {language === 'ka' ? member.bio : member.bioEn}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{t('about.founder')}</h2>
            <Card>
              <CardHeader>
                <CardTitle>{language === 'ka' ? 'ლევან ბერიძე' : 'Levan Beridze'}</CardTitle>
                <CardDescription className="text-base">
                  CEO & Founder
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t('about.founderBio')}
                </p>
                <p className="text-muted-foreground">
                  {t('aboutPage.founderExtra')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
