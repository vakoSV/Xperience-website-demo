// Bilingual content system for Georgian and English
export type Language = 'ka' | 'en';

export const translations = {
  ka: {
    // Navigation
    nav: {
      home: 'მთავარი',
      about: 'ჩვენ შესახებ',
      services: 'სერვისები',
      blog: 'სიახლეები',
      research: 'კვლევები',
      contact: 'კონტაქტი',
    },
    // Header
    header: {
      language: 'ენა',
      georgian: 'ქართული',
      english: 'English',
    },
    // Home Page
    home: {
      heroTitle: 'ხელმისაწვდომი ხარისხის სერვისები',
      heroSubtitle: 'ჩვენ გვეხმარებით ბიზნესის განვითარებაში თანამედროვე ტექნოლოგიებისა და ინოვაციური გადაწყვეტილებების მাშინებლობით',
      heroCTA: 'დაიწყეთ ახლა',
      heroSecondary: 'გაიგეთ მეტი',
      servicesTitle: 'ჩვენი სერვისები',
      servicesSubtitle: 'ჩვენ გთავაზობთ სრულ სპექტრს სერვისებს თქვენი ბიზნესის ზრდისთვის',
      latestNews: 'ბოლო სიახლეები',
      clientsTitle: 'ჩვენი კლიენტები',
      testimonialsTitle: 'რა ამბობენ ჩვენი კლიენტები',
    },
    // Services
    services: {
      title: 'სერვისები',
      subtitle: 'ჩვენი სერვისების სრული კატალოგი',
      service1: {
        name: 'ციფრული ტრანსფორმაცია',
        description: 'თქვენი ბიზნესის ციფრული ტრანსფორმაცია თანამედროვე ტექნოლოგიებით',
      },
      service2: {
        name: 'კლაუდ სოლიუშნები',
        description: 'უსაფრთხო და მასშტაბური კლაუდ ინფრასტრუქტურა',
      },
      service3: {
        name: 'ডেটა ანალიტიკა',
        description: 'მონაცემების ანალიზი და ბიზნეს ინტელექტი',
      },
      service4: {
        name: 'კიბერუსაფრთხოება',
        description: 'ყოვლისმომცველი კიბერუსაფრთხოების გადაწყვეტილებები',
      },
      service5: {
        name: 'AI და მანქანური სწავლა',
        description: 'ხელოვნური ინტელექტი და მანქანური სწავლის გამოყენება',
      },
      service6: {
        name: 'კონსულტაციები',
        description: 'სტრატეგიული კონსულტაციები ტექნოლოგიის სფეროში',
      },
    },
    // About
    about: {
      title: 'ჩვენ შესახებ',
      mission: 'ჩვენი მისია',
      missionText: 'ჩვენი მისია არის ბიზნესების დახმარება თანამედროვე ტექნოლოგიების საშუალებით მათი პოტენციალის სრულად გამოვლენაში.',
      vision: 'ჩვენი ხედვა',
      visionText: 'ხედვა: ვიყოთ ტექნოლოგიის ლიდერი რეგიონში, რომელიც ცვლის ბიზნეს ინდუსტრიას.',
      values: 'ჩვენი ღირებულებები',
      founder: 'დამფუძნებელი',
      founderBio: 'ჩვენი კომპანია დაარსდა 2010 წელს ტექნოლოგიის ენთუზიაზმით და ბიზნესის ტრანსფორმაციის მოწოდებით.',
    },
    // Blog
    blog: {
      title: 'სიახლეები და სტატიები',
      subtitle: 'ბოლო განახლებები ტექნოლოგიის სამყაროდან',
      readMore: 'წაიკითხეთ სრულად',
      share: 'გაზიარება',
    },
    // Research
    research: {
      title: 'კვლევები და ინსაითები',
      subtitle: 'ღრმა ანალიზი ინდუსტრიის ტრენდებზე',
      download: 'ჩამოტვირთვა',
      pdf: 'PDF ანგარიში',
    },
    // Contact
    contact: {
      title: 'კონტაქტი',
      subtitle: 'დაგვიკავშირდით',
      name: 'სახელი',
      email: 'ელფოსტა',
      phone: 'ტელეფონი',
      message: 'შეტყობინება',
      send: 'გაგზავნა',
      address: 'მისამართი',
      phone_label: 'ტელეფონი',
      email_label: 'ელფოსტა',
    },
    // Footer
    footer: {
      sitemap: 'საიტის რუკა',
      followUs: 'ჩვენი მიყოლა',
      copyright: '© 2024 Xperience. ყველა უფლება დაცულია.',
    },
    // Contact Page Additions
    contactPage: {
      infoTitle: 'საკონტაქტო ინფორმაცია',
      workingHours: 'სამუშაო დრო',
      workingHoursValue: 'ორშ - პარ: 9:00 - 18:00',
      liveChat: 'ლაივ ჩატი',
      liveChatDesc: 'ჩვენი ჩატ ასისტენტი მზადაა თქვენი კითხვებზე პასუხის გასაცემად.',
      startChat: 'ჩატი დაიწყეთ',
      sendMessage: 'გამოგვიწერეთ',
      sending: 'გაგზავნა...',
      success: 'თქვენი შეტყობინება გაიგზავნა წარმატებით!',
      location: 'ჩვენი ლოკაცია',
      mapPlaceholder: 'რუკა აქ იქნება',
      faq: 'ხშირი კითხვები',
    },
    // Blog Page Additions
    blogPage: {
      share: 'გაზიარება',
      copied: 'კოპირებულია',
      copy: 'კოპირება',
    },
    // Research Page Additions
    researchPage: {
      pages: 'გვერდი',
      moreResearch: 'მეტი კვლევა',
      moreResearchDesc: 'დაიწყეთ თქვენი კვლევა ჩვენი ექსპერტი გუნდის დახმარებით. ჩვენ გთავაზობთ მორგებულ ანალიტიკას და რეკომენდაციებს.',
    },
    // About Page Additions
    aboutPage: {
      missionExtra: 'ჩვენი მიზანია თითოეული კლიენტის ბიზნეს გადაწყვეტილებებში ღირებული პარტნერი გახდეთ, რომელიც მათ ციფრული ტრანსფორმაციის გზაზე ხელმძღვანელობს.',
      visionExtra: 'ჩვენი ხედვა არის ხელოვნური ინტელექტი და თანამედროვე ტექნოლოგიების მეშვეობით ბიზნეს ინდუსტრიის ტრანსფორმაცია.',
      ourTeam: 'ჩვენი გუნდი',
      founderExtra: 'ლევანი ხელმძღვანელობს Xperience-ის ვიზიის განხორციელებას, რომელიც მიმართულია ტექნოლოგიის ინოვაციური გამოყენებაზე. მის ლიდერობის ქვეშ, კომპანია გახდა ერთ-ერთი წამყვანი ტექნოლოგიის პროვაიდერი რეგიონში.',
    },
    // Services Page Additions
    servicesPage: {
      ctaTitle: 'დაიწყეთ თქვენი ტრანსფორმაცია',
      ctaDesc: 'ჩვენი ექსპერტი გუნდი მზადაა თქვენი ბიზნეს მოწოდებების გასაგებად და სტრატეგიული გადაწყვეტილებების შემოთავაზებისთვის.',
    },
    // Live Chat Additions
    chat: {
      title: 'ონლაინ მხარდაჭერა',
      welcome: 'გამარჯობა! რით შეგვიძლია დაგეხმაროთ?',
      placeholder: 'ჩაწერეთ შეტყობინება...',
      response: 'გმადლობთ შეტყობინებისთვის. ჩვენი გუნდი მალე დაგიკავშირდებათ!',
    },
    // Not Found Additions
    notFound: {
      title: 'გვერდი ვერ მოიძებნა',
      description: 'უკაცრავად, გვერდი, რომელსაც ეძებთ, არ არსებობს. შესაძლოა ის გადატანილია ან წაშლილია.',
      goHome: 'მთავარზე დაბრუნება',
    },
    // FAQ Additions
    faq: {
      q1: 'რა არის თქვენი პასუხის დრო?',
      a1: 'ჩვენ ჩვეულებრივ პასუხობთ 24 საათის განმავლობაში.',
      q2: 'რა სერვისები გთავაზობთ?',
      a2: 'ჩვენ გთავაზობთ ციფრული ტრანსფორმაციის სრულ სპექტრს.',
      q3: 'რა არის თქვენი ფასი?',
      a3: 'ფასი დამოკიდებულია პროექტის მოცულობაზე.',
      q4: 'როგორ დაიწყო თანამშრომლობა?',
      a4: 'დაგვიკავშირდით ფორმის მეშვეობით ან მოწონეთ ჩვენი ნომერი.',
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      blog: 'News',
      research: 'Research',
      contact: 'Contact',
    },
    // Header
    header: {
      language: 'Language',
      georgian: 'ქართული',
      english: 'English',
    },
    // Home Page
    home: {
      heroTitle: 'Accessible Quality Services',
      heroSubtitle: 'We help businesses grow with modern technologies and innovative solutions',
      heroCTA: 'Get Started',
      heroSecondary: 'Learn More',
      servicesTitle: 'Our Services',
      servicesSubtitle: 'We offer a complete spectrum of services for your business growth',
      latestNews: 'Latest News',
      clientsTitle: 'Our Clients',
      testimonialsTitle: 'What Our Clients Say',
    },
    // Services
    services: {
      title: 'Services',
      subtitle: 'Complete catalog of our services',
      service1: {
        name: 'Digital Transformation',
        description: 'Transform your business with modern technologies',
      },
      service2: {
        name: 'Cloud Solutions',
        description: 'Secure and scalable cloud infrastructure',
      },
      service3: {
        name: 'Data Analytics',
        description: 'Data analysis and business intelligence',
      },
      service4: {
        name: 'Cybersecurity',
        description: 'Comprehensive cybersecurity solutions',
      },
      service5: {
        name: 'AI & Machine Learning',
        description: 'Artificial intelligence and machine learning applications',
      },
      service6: {
        name: 'Consulting',
        description: 'Strategic consulting in technology',
      },
    },
    // About
    about: {
      title: 'About Us',
      mission: 'Our Mission',
      missionText: 'Our mission is to help businesses realize their full potential through modern technology.',
      vision: 'Our Vision',
      visionText: 'To be the technology leader in the region, transforming the business industry.',
      values: 'Our Values',
      founder: 'Founder',
      founderBio: 'Our company was founded in 2010 with a passion for technology and a commitment to business transformation.',
    },
    // Blog
    blog: {
      title: 'News & Articles',
      subtitle: 'Latest updates from the technology world',
      readMore: 'Read More',
      share: 'Share',
    },
    // Research
    research: {
      title: 'Research & Insights',
      subtitle: 'Deep analysis of industry trends',
      download: 'Download',
      pdf: 'PDF Report',
    },
    // Contact
    contact: {
      title: 'Contact',
      subtitle: 'Get in Touch',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      send: 'Send',
      address: 'Address',
      phone_label: 'Phone',
      email_label: 'Email',
    },
    // Footer
    footer: {
      sitemap: 'Sitemap',
      followUs: 'Follow Us',
      copyright: '© 2024 Xperience. All rights reserved.',
    },
    // Contact Page Additions
    contactPage: {
      infoTitle: 'Contact Information',
      workingHours: 'Working Hours',
      workingHoursValue: 'Mon - Fri: 9:00 - 18:00',
      liveChat: 'Live Chat',
      liveChatDesc: 'Our chat assistant is ready to answer your questions.',
      startChat: 'Start Chat',
      sendMessage: 'Send us a Message',
      sending: 'Sending...',
      success: 'Your message has been sent successfully!',
      location: 'Our Location',
      mapPlaceholder: 'Map will be displayed here',
      faq: 'Frequently Asked Questions',
    },
    // Blog Page Additions
    blogPage: {
      share: 'Share',
      copied: 'Copied',
      copy: 'Copy',
    },
    // Research Page Additions
    researchPage: {
      pages: 'pages',
      moreResearch: 'More Research',
      moreResearchDesc: 'Start your research with the help of our expert team. We offer tailored analytics and recommendations.',
    },
    // About Page Additions
    aboutPage: {
      missionExtra: 'Our goal is to become a valuable partner in each client\'s business decisions, guiding them on the path of digital transformation.',
      visionExtra: 'Our vision is to transform the business industry through artificial intelligence and modern technologies.',
      ourTeam: 'Our Team',
      founderExtra: 'Levan leads the implementation of Xperience\'s vision, which is focused on the innovative use of technology. Under his leadership, the company has become one of the leading technology providers in the region.',
    },
    // Services Page Additions
    servicesPage: {
      ctaTitle: 'Start Your Transformation',
      ctaDesc: 'Our expert team is ready to understand your business challenges and offer strategic solutions.',
    },
    // Live Chat Additions
    chat: {
      title: 'Live Chat Support',
      welcome: 'Hello! How can we help you today?',
      placeholder: 'Type your message...',
      response: 'Thank you for your message. Our team will get back to you soon!',
    },
    // Not Found Additions
    notFound: {
      title: 'Page Not Found',
      description: 'Sorry, the page you are looking for doesn\'t exist. It may have been moved or deleted.',
      goHome: 'Go Home',
    },
    // FAQ Additions
    faq: {
      q1: 'What is your response time?',
      a1: 'We typically respond within 24 hours.',
      q2: 'What services do you offer?',
      a2: 'We offer a complete spectrum of digital transformation services.',
      q3: 'What is your pricing?',
      a3: 'Pricing depends on the project scope.',
      q4: 'How to start collaboration?',
      a4: 'Contact us via the form or call our number.',
    },
  },
};

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
}
