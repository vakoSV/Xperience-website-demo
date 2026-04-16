import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Calendar, User } from "lucide-react";

export default function Research() {
  const { language, t } = useLanguage();
  const [downloadedId, setDownloadedId] = useState<number | null>(null);

  const reports = [
    {
      id: 1,
      titleKa: "ციფრული ტრანსფორმაციის ტრენდები 2024",
      titleEn: "Digital Transformation Trends 2024",
      descriptionKa:
        "ამ ანგარიშში წარმოდგენილია ციფრული ტრანსფორმაციის ახალი ტრენდები და რეკომენდაციები ბიზნესებისთვის.",
      descriptionEn:
        "This report presents new trends in digital transformation and recommendations for businesses.",
      date: "2024-04-15",
      author: "Xperience Research Team",
      pages: 45,
      fileSize: "2.5 MB",
      pdfUrl:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      id: 2,
      titleKa: "კლაუდ კომპიუტინგის ეკოსისტემა",
      titleEn: "Cloud Computing Ecosystem",
      descriptionKa:
        "კლაუდ ტექნოლოგიის სრული ანალიზი და მისი გამოყენება სხვადსხვა ინდუსტრიებში.",
      descriptionEn:
        "Complete analysis of cloud technology and its applications across various industries.",
      date: "2024-04-10",
      author: "Xperience Research Team",
      pages: 52,
      fileSize: "3.1 MB",
      pdfUrl:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      id: 3,
      titleKa: "ხელოვნური ინტელექტი ბიზნესში",
      titleEn: "Artificial Intelligence in Business",
      descriptionKa:
        "AI-ის გამოყენება ბიზნეს პროცესებში და მისი ეკონომიკური გავლენა.",
      descriptionEn:
        "AI applications in business processes and its economic impact.",
      date: "2024-04-05",
      author: "Xperience Research Team",
      pages: 38,
      fileSize: "2.2 MB",
      pdfUrl:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      id: 4,
      titleKa: "კიბერუსაფრთხოების ეკოსისტემა",
      titleEn: "Cybersecurity Landscape",
      descriptionKa: "კიბერ შეტევების ანალიზი და დაცვის სტრატეგიები.",
      descriptionEn: "Analysis of cyber threats and defense strategies.",
      date: "2024-03-30",
      author: "Xperience Research Team",
      pages: 41,
      fileSize: "2.8 MB",
      pdfUrl:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      id: 5,
      titleKa: "ბიგ დატა ანალიტიკა ინდუსტრიაში",
      titleEn: "Big Data Analytics in Industry",
      descriptionKa:
        "ბიგ დატა ტექნოლოგიების გამოყენება სხვადსხვა ინდუსტრიებში.",
      descriptionEn:
        "Applications of big data technologies across various industries.",
      date: "2024-03-25",
      author: "Xperience Research Team",
      pages: 48,
      fileSize: "3.0 MB",
      pdfUrl:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
    {
      id: 6,
      titleKa: "DevOps პრაქტიკები",
      titleEn: "DevOps Best Practices",
      descriptionKa: "DevOps კულტურის დანერგვა და ეფექტური პრაქტიკები.",
      descriptionEn: "Implementing DevOps culture and effective practices.",
      date: "2024-03-20",
      author: "Xperience Research Team",
      pages: 35,
      fileSize: "1.9 MB",
      pdfUrl:
        "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    },
  ];

  const handleDownload = (reportId: number, title: string) => {
    // Simulate download
    setDownloadedId(reportId);
    setTimeout(() => setDownloadedId(null), 2000);

    // In a real application, this would trigger an actual file download
    console.log(`Downloading: ${title}`);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-transparent to-transparent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("research.title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("research.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reports.map(report => (
              <Card
                key={report.id}
                className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
              >
                {/* Header Icon */}
                <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <FileText className="text-primary" size={48} />
                </div>

                <CardHeader>
                  <CardTitle className="line-clamp-2">
                    {language === "ka" ? report.titleKa : report.titleEn}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {language === "ka"
                      ? report.descriptionKa
                      : report.descriptionEn}
                  </p>

                  {/* Report Info */}
                  <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{new Date(report.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{report.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText size={16} />
                      <span>
                        {report.pages} {t("researchPage.pages")} •{" "}
                        {report.fileSize}
                      </span>
                    </div>
                  </div>

                  {/* Download Button */}
                  <a
                    href={report.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    download
                    onClick={() =>
                      handleDownload(
                        report.id,
                        language === "ka" ? report.titleKa : report.titleEn
                      )
                    }
                    className="mt-auto"
                  >
                    <Button className="w-full cursor-pointer">
                      {downloadedId === report.id ? (
                        <>✓ {t("research.download")}</>
                      ) : (
                        <>
                          <Download size={16} className="mr-2" />
                          {t("research.pdf")}
                        </>
                      )}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-muted/50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t("researchPage.moreResearch")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("researchPage.moreResearchDesc")}
          </p>
          <Button size="lg" className="cursor-pointer">
            {t("nav.contact")}
          </Button>
        </div>
      </section>
    </div>
  );
}
