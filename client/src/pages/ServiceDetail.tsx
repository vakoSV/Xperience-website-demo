import React from 'react';
import { useRoute, Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

export default function ServiceDetail() {
  const [match, params] = useRoute('/services/:id');
  const { language, t } = useLanguage();
  const serviceId = params?.id ? parseInt(params.id) : 1;

  const serviceDetails: Record<number, any> = {
    1: {
      name: t('services.service1.name'),
      description: t('services.service1.description'),
      fullDescription: 'ციფრული ტრანსფორმაცია არის თქვენი ბიზნეს ოპერაციების თანამედროვე ტექნოლოგიებით ოპტიმიზაციის პროცესი.',
      fullDescriptionEn: 'Digital transformation is the process of optimizing your business operations with modern technologies.',
      benefits: [
        'გაზრდილი ეფექტურობა / Increased Efficiency',
        'ხარჯების შემცირება / Cost Reduction',
        'გაუმჯობესებული კლიენტის გამოცდილება / Improved Customer Experience',
        'ბიზნეს მოქნილობა / Business Agility',
      ],
    },
    2: {
      name: t('services.service2.name'),
      description: t('services.service2.description'),
      fullDescription: 'კლაუდ სოლიუშნები უზრუნველყოფენ მასშტაბირებადობას, უსაფრთხოებას და ხარჯების ეფექტურობას.',
      fullDescriptionEn: 'Cloud solutions provide scalability, security, and cost efficiency.',
      benefits: [
        'მაღალი ხელმისაწვდომობა / High Availability',
        'ავტომატური მასშტაბირება / Auto Scaling',
        'ენტერპრაიზ უსაფრთხოება / Enterprise Security',
        'გლობალური მიმოწვევა / Global Reach',
      ],
    },
    3: {
      name: t('services.service3.name'),
      description: t('services.service3.description'),
      fullDescription: 'მონაცემების ანალიზი გვეხმარება გამოვიტანოთ ღირებული ინსაითები ბიზნეს გადაწყვეტილებებისთვის.',
      fullDescriptionEn: 'Data analytics helps extract valuable insights for business decisions.',
      benefits: [
        'რეალ-დროის ინსაითები / Real-time Insights',
        'პროგნოზული ანალიტიკა / Predictive Analytics',
        'ბიზნეს ინტელექტი / Business Intelligence',
        'მონაცემის ვიზუალიზაცია / Data Visualization',
      ],
    },
    4: {
      name: t('services.service4.name'),
      description: t('services.service4.description'),
      fullDescription: 'კიბერუსაფრთხოება დაცავს თქვენი ციფრული აქტივებს ყველა სახის საფრთხიდან.',
      fullDescriptionEn: 'Cybersecurity protects your digital assets from all types of threats.',
      benefits: [
        'მუქარის დეტექცია / Threat Detection',
        'დაკომპლექტება და რეაგირება / Compliance & Response',
        'პენეტრაციული ტესტირება / Penetration Testing',
        '24/7 მონიტორინგი / 24/7 Monitoring',
      ],
    },
    5: {
      name: t('services.service5.name'),
      description: t('services.service5.description'),
      fullDescription: 'AI და მანქანური სწავლა ხელოვნური ინტელექტის ძალას გამოიყენებს ბიზნესის ავტომატიზაციისთვის.',
      fullDescriptionEn: 'AI and machine learning leverage artificial intelligence for business automation.',
      benefits: [
        'ავტომატიზაცია / Automation',
        'პროგნოზული მოდელირება / Predictive Modeling',
        'ბუნებრივი ენის დამუშავება / Natural Language Processing',
        'მანქანური ხედვა / Computer Vision',
      ],
    },
    6: {
      name: t('services.service6.name'),
      description: t('services.service6.description'),
      fullDescription: 'კონსულტაციები გთავაზობთ სტრატეგიულ გაიდლაინებს ტექნოლოგიის ინვესტიციებისთვის.',
      fullDescriptionEn: 'Consulting provides strategic guidance for technology investments.',
      benefits: [
        'სტრატეგიული დაგეგმვა / Strategic Planning',
        'ტექნოლოგიის შეფასება / Technology Assessment',
        'ბიზნეს პროცესის ოპტიმიზაცია / Process Optimization',
        'ტიმის ტრენინგი / Team Training',
      ],
    },
  };

  const service = serviceDetails[serviceId] || serviceDetails[1];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
        <div className="container">
          <Link href="/services">
            <a className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
              <ChevronLeft size={20} />
              {t('nav.services')}
            </a>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.name}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-6">
                  {language === 'ka' ? 'დეტალური აღწერა' : 'Detailed Description'}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {language === 'ka' ? service.fullDescription : service.fullDescriptionEn}
                </p>

                <h3 className="text-2xl font-bold mb-6 mt-12">
                  {language === 'ka' ? 'სარგებელი' : 'Benefits'}
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit: string, i: number) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Check size={16} className="text-primary" />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold mb-6 mt-12">
                  {language === 'ka' ? 'ჩვენი მიდგომა' : 'Our Approach'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'ka' 
                    ? 'ჩვენი ექსპერტი გუნდი იყენებს ინდუსტრიის საუკეთესო პრაქტიკებს და ინოვაციური ტექნოლოგიებს თქვენი ბიზნეს მოწოდებების გადასაწყვეტად. ჩვენ ვიმუშავებთ თქვენთან მჭიდროდ, რათა უზრუნველვყოთ წარმატება.'
                    : 'Our expert team uses industry best practices and innovative technologies to solve your business challenges. We work closely with you to ensure success.'}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardHeader>
                  <CardTitle>
                    {language === 'ka' ? 'დაიწყეთ' : 'Get Started'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {language === 'ka' 
                      ? 'მზადაა ეს სერვისი თქვენი ბიზნესისთვის? დაგვიკავშირდით დღეს.'
                      : 'Ready for this service for your business? Contact us today.'}
                  </p>
                  <Link href="/contact">
                    <Button className="w-full cursor-pointer">
                      {t('nav.contact')} <ChevronRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" className="w-full cursor-pointer">
                      {t('nav.services')} <ChevronRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">
            {language === 'ka' ? 'სხვა სერვისები' : 'Other Services'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((id) => {
              if (id === serviceId) return null;
              const otherService = serviceDetails[id];
              return (
                <Link key={id} href={`/services/${id}`}>
                  <a className="group">
                    <Card className="hover:shadow-lg transition-shadow h-full">
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {otherService.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {otherService.description}
                        </p>
                      </CardContent>
                    </Card>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
