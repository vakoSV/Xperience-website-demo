import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AlertCircle, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-transparent to-transparent">
      <div className="container text-center py-20">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
            <AlertCircle className="relative h-20 w-20 text-primary" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t('notFound.title')}
        </h2>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md mx-auto">
          {t('notFound.description')}
        </p>

        <Link href="/">
          <Button size="lg" className="cursor-pointer">
            <Home className="w-4 h-4 mr-2" />
            {t('notFound.goHome')}
          </Button>
        </Link>
      </div>
    </div>
  );
}
