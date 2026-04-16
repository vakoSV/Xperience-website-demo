import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { Facebook, Linkedin, Twitter, Copy, Check } from 'lucide-react';

export default function Blog() {
  const { language, t } = useLanguage();
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const articles = [
    {
      id: 1,
      titleKa: 'ციფრული ტრანსფორმაცია 2024 წელს',
      titleEn: 'Digital Transformation in 2024',
      excerptKa: 'აღმოაჩინეთ ახალი ტრენდები ციფრული ტრანსფორმაციის სფეროში და როგორ შეიძლება ისინი თქვენი ბიზნესის ზრდას უწყობდეს ხელს.',
      excerptEn: 'Discover new trends in digital transformation and how they can accelerate your business growth.',
      contentKa: 'ციფრული ტრანსფორმაცია აღარ არის ოპციონალური - ეს აუცილებელია. 2024 წელს, ბიზნესები, რომლებიც ციფრულ ტრანსფორმაციას მოახდენენ, უფრო კონკურენტული და მოქნილი იქნებიან. ჩვენი ანალიზი აჩვენებს, რომ ორგანიზაციები, რომლებიც ტექნოლოგიაში ინვესტირებენ, 40% უფრო სწრაფი ზრდის მიღწევას აკეთებენ.',
      contentEn: 'Digital transformation is no longer optional - it\'s essential. In 2024, businesses that embrace digital transformation will be more competitive and agile. Our analysis shows that organizations investing in technology achieve 40% faster growth.',
      date: '2024-04-15',
      author: 'ლევან ბერიძე',
      authorEn: 'Levan Beridze',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 2,
      titleKa: 'კლაუდ ტექნოლოგიის ფუტურე',
      titleEn: 'The Future of Cloud Technology',
      excerptKa: 'კლაუდ კომპიუტინგის ახალი საზღვრები და როგორ უნდა მოემზადოთ ამ ცვლილებებისთვის.',
      excerptEn: 'New horizons in cloud computing and how to prepare for these changes.',
      contentKa: 'კლაუდი უკვე ინდუსტრიის სტანდარტი გახდა, მაგრამ ის ჯერ კიდევ ვითარდება. მულტი-კლაუდ სტრატეგიები, edge computing, და serverless architecture არის ის ტრენდები, რომელიც 2024 წელს დომინირებს.',
      contentEn: 'Cloud has already become the industry standard, but it\'s still evolving. Multi-cloud strategies, edge computing, and serverless architecture are the trends that will dominate 2024.',
      date: '2024-04-10',
      author: 'ელენე ხარაძე',
      authorEn: 'Elene Kharadze',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 3,
      titleKa: 'AI-ის გამოყენება ბიზნესში',
      titleEn: 'AI Applications in Business',
      excerptKa: 'როგორ გამოიყენოთ ხელოვნური ინტელექტი თქვენი კომპანიაში და რა სარგებელი შეიძლება მოიტანოს.',
      excerptEn: 'How to leverage AI in your company and what benefits it can bring.',
      contentKa: 'ხელოვნური ინტელექტი აქვე ბიზნესის ტრანსფორმაციის ცენტრში არის. მანქანური სწავლა, ბუნებრივი ენის დამუშავება, და კომპიუტერული ხედვა ხელოვნური ინტელექტის ის სფეროები, რომლებიც ყველაზე მეტი ღირებულება ქმნის.',
      contentEn: 'Artificial intelligence is now at the center of business transformation. Machine learning, natural language processing, and computer vision are the areas of AI that create the most value.',
      date: '2024-04-05',
      author: 'გიორგი მელიქიძე',
      authorEn: 'Giorgi Melikidze',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 4,
      titleKa: 'კიბერუსაფრთხოების საუკეთესო პრაქტიკები',
      titleEn: 'Cybersecurity Best Practices',
      excerptKa: 'თქვენი ბიზნესის დაცვა კიბერ შეტევებისგან - სახელმძღვანელო.',
      excerptEn: 'Protecting your business from cyber attacks - a guide.',
      contentKa: 'კიბერ შეტევები ყოველ წელს უფრო რთული ხდება. ჩვენი ექსპერტები გთავაზობენ საუკეთესო პრაქტიკებს თქვენი ორგანიზაციის დაცვისთვის.',
      contentEn: 'Cyber attacks become more sophisticated every year. Our experts recommend best practices to protect your organization.',
      date: '2024-03-30',
      author: 'ლევან ბერიძე',
      authorEn: 'Levan Beridze',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 5,
      titleKa: 'ბიგ დატა ანალიტიკა ინდუსტრიაში',
      titleEn: 'Big Data Analytics',
      excerptKa: 'დიდი მონაცემების ანალიზი და მისი ბიზნეს გამოყენება.',
      excerptEn: 'Analyzing big data and its business applications.',
      contentKa: 'ბიგ დატა ანალიტიკა ბიზნეს გადაწყვეტილებების გაუმჯობესების მძლავრი ხელსაწყოა. რეალ-დროის ინსაითები, პროგნოზული მოდელირება, და ბიზნეს ინტელექტი ის ძირითადი სარგებელი, რომელიც მონაცემების ანალიზი მოიტანს.',
      contentEn: 'Big data analytics is a powerful tool for improving business decisions. Real-time insights, predictive modeling, and business intelligence are the key benefits of data analysis.',
      date: '2024-03-25',
      author: 'ელენე ხარაძე',
      authorEn: 'Elene Kharadze',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 6,
      titleKa: 'DevOps კულტურა',
      titleEn: 'DevOps Culture',
      excerptKa: 'DevOps კულტურის დანერგვა თქვენი ორგანიზაციაში.',
      excerptEn: 'Implementing DevOps culture in your organization.',
      contentKa: 'DevOps არის არა მხოლოდ ტექნოლოგია, არამედ კულტურა. ეფექტური DevOps პრაქტიკები უზრუნველყოფენ სწრაფ დეპლოიმენტს, მაღალ ხელმისაწვდომობას, და უფრო კარგ გამოცდილებას.',
      contentEn: 'DevOps is not just technology, it\'s a culture. Effective DevOps practices ensure fast deployment, high availability, and better experience.',
      date: '2024-03-20',
      author: 'გიორგი მელიქიძე',
      authorEn: 'Giorgi Melikidze',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ];

  const handleShare = (articleId: number, platform: string) => {
    const url = `${window.location.origin}/blog#article-${articleId}`;
    const article = articles.find(a => a.id === articleId);
    const title = language === 'ka' ? article?.titleKa : article?.titleEn;

    if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      setCopiedId(articleId);
      setTimeout(() => setCopiedId(null), 2000);
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title || '')}`, '_blank');
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('blog.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('blog.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <Card key={article.id} id={`article-${article.id}`} className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                {/* Thumbnail */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5"></div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                    <span className="text-xs text-primary font-semibold">
                      {language === 'ka' ? article.author : article.authorEn}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2">
                    {language === 'ka' ? article.titleKa : article.titleEn}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {language === 'ka' ? article.excerptKa : article.excerptEn}
                  </p>

                  {/* YouTube Video */}
                  <div className="mb-6">
                    <YouTubeEmbed videoId="dQw4w9WgXcQ" title={language === 'ka' ? article.titleKa : article.titleEn} />
                  </div>

                  {/* Social Share Buttons */}
                  <div className="mt-auto">
                    <div className="flex gap-2 flex-wrap">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShare(article.id, 'facebook')}
                        className="flex-1 min-w-fit cursor-pointer"
                      >
                        <Facebook size={16} className="mr-2" />
                        Facebook
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShare(article.id, 'linkedin')}
                        className="flex-1 min-w-fit cursor-pointer"
                      >
                        <Linkedin size={16} className="mr-2" />
                        LinkedIn
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShare(article.id, 'twitter')}
                        className="flex-1 min-w-fit cursor-pointer"
                      >
                        <Twitter size={16} className="mr-2" />
                        Twitter
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleShare(article.id, 'copy')}
                        className="flex-1 min-w-fit cursor-pointer"
                      >
                        {copiedId === article.id ? (
                          <>
                            <Check size={16} className="mr-2" />
                            {t('blogPage.copied')}
                          </>
                        ) : (
                          <>
                            <Copy size={16} className="mr-2" />
                            {t('blogPage.copy')}
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
