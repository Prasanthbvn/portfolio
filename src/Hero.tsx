import { ArrowDown, Sparkles, Zap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Particles } from "@/components/ui/particles"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 bg-pattern-dots opacity-30" />
      
      {/* Floating Particles */}
      <Particles />
      
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 morph-shape animate-float opacity-20" />
      <div className="absolute top-40 right-20 w-16 h-16 morph-shape animate-float-delayed opacity-15" />
      <div className="absolute bottom-40 left-20 w-12 h-12 morph-shape animate-float-slow opacity-25" />
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-glow rounded-full animate-float opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-glow rounded-full animate-float-delayed opacity-25" />

      <div className="container mx-auto text-center max-w-6xl relative z-10">
        <div className="space-y-12">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-animated ">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Creative Designer & Developer</span>
          </div>

          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="text-gradient-hero">
                Creative
              </span>
              <br />
              <span className="relative">
                UI/UX Designer
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full animate-float flex items-center justify-center">
                  <Star className="h-4 w-4 text-primary-foreground" />
                </div>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I craft digital experiences that blend beautiful aesthetics with intuitive functionality, 
              creating designs that users love and businesses trust.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="px-10 py-7 text-lg rounded-full glow-primary-hover transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const workSection = document.getElementById('work');
                if (workSection) {
                  workSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Zap className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-10 py-7 text-lg rounded-full glass border-2 hover:border-primary transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get In Touch
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8">
            {[
              { number: "7+", label: "Years Overall Experience" },
              { number: "3+", label: "Years in UI/UX Design" },
              
              { number: "Worked with", label: "Global Clients" }
            ].map((stat, index) => (
              <div key={index} className="text-center" style={{ animationDelay: `${index * 0.5}s` }}>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16">
            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-muted-foreground">Scroll to explore</span>
              <div className="relative">
                <ArrowDown className="h-6 w-6 text-primary animate-bounce" />
                <div className="absolute inset-0 w-8 h-8 bg-gradient-primary rounded-full opacity-20 animate-ping" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}