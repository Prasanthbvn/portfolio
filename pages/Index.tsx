import { Header } from "@/components/portfolio/Header"
import { Hero } from "@/components/portfolio/Hero"
import { About } from "@/components/portfolio/About"
import { Work } from "@/components/portfolio/Work"
import { SocialLinks } from "@/components/portfolio/SocialLinks"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Work />
      <SocialLinks />
      
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 UI/UX Designer Portfolio. Designed with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;