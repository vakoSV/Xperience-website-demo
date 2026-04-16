import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success(t('contactPage.success'));
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.phone_label'),
      value: '+995 (0) 32 2 999 999',
      href: 'tel:+995322999999',
    },
    {
      icon: Mail,
      label: t('contact.email_label'),
      value: 'info@xperience.ge',
      href: 'mailto:info@xperience.ge',
    },
    {
      icon: MapPin,
      label: t('contact.address'),
      value: 'Tbilisi, Georgia',
      href: '#',
    },
    {
      icon: Clock,
      label: t('contactPage.workingHours'),
      value: t('contactPage.workingHoursValue'),
      href: '#',
    },
  ];

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-8">
                {t('contactPage.infoTitle')}
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={i}
                      href={info.href}
                      className="flex items-start gap-4 hover:opacity-80 transition-opacity group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground font-semibold">
                          {info.label}
                        </div>
                        <div className="text-foreground font-medium">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Live Chat Widget Placeholder */}
              <Card className="mt-8 border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {t('contactPage.liveChat')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t('contactPage.liveChatDesc')}
                  </p>
                  <Button className="w-full cursor-pointer" size="sm">
                    {t('contactPage.startChat')}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {t('contactPage.sendMessage')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t('contact.name')}
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t('contact.name')}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          {t('contact.email')}
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t('contact.email')}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t('contact.phone')}
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+995 (0) 32 2 999 999"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {t('contact.message')}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('contact.message')}
                        required
                        rows={6}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full cursor-pointer"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          {t('contactPage.sending')}
                        </>
                      ) : (
                        <>
                          <Send size={16} className="mr-2" />
                          {t('contact.send')}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t('contactPage.location')}
          </h2>
          <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg border border-border flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">
                {t('contactPage.mapPlaceholder')}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Tbilisi, Georgia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {t('contactPage.faq')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {faqs.map((item, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="text-base">{item.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
