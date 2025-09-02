import { Header } from "@/components/portfolio/Header"
import { Hero } from "@/components/portfolio/Hero"
import { About } from "@/components/portfolio/About"
import { Work } from "@/components/portfolio/Work"
import { SocialLinks } from "@/components/portfolio/SocialLinks"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { Heart, Coffee, Sparkles } from "lucide-react"

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 bg-gradient-mesh opacity-5 pointer-events-none" />
      
      <Header />
      <Hero />
      <About />
      <Work />
      <SocialLinks />
      <ScrollToTop />
      
      {/* Enhanced Footer */}
      <footer className="relative py-12 sm:py-16 px-4 sm:px-6 border-t border-border overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-pattern-grid opacity-5" />
        <div className="absolute bottom-10 left-10 w-16 h-16 morph-shape animate-float opacity-10" />
        <div className="absolute top-10 right-10 w-12 h-12 morph-shape animate-float-delayed opacity-15" />
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 px-2">
            {/* Logo and Tagline */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="font-bold text-xl text-gradient">Portfolio</div>
            </div>
            
            <p className="text-muted-foreground text-base sm:text-lg px-2">
              Crafting digital experiences that inspire and engage
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {[
                { href: "https://www.linkedin.com/in/prasanth-c-8b84771b9/", label: "LinkedIn" },
                { href: "https://www.behance.net/prasanthbvn", label: "Behance" },
                { href: "https://dribbble.com/Prasanthbvn", label: "Dribbble" },
                // { href: "#", label: "GitHub" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            {/* Copyright */}
            <div className="pt-6 sm:pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm sm:text-base flex items-center justify-center gap-2 flex-wrap px-2 text-center">
                © 2025  Designed with 
                <Heart className="h-4 w-4 text-red-500 animate-pulse" /> 
                {/* and lots of 
                <Coffee className="h-4 w-4 text-amber-600" />
                using React & Tailwind CSS */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;


