import { Moon, Sun, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function Header() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Glass Background */}
      <div className="absolute inset-0 glass border-b border-border/50" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-5" />
      
      <div className="container mx-auto px-6 h-16 flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="font-bold text-xl text-gradient">
            Prasanth
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { href: "#about", label: "About" },
            { href: "#work", label: "Work" },
            { href: "#contact", label: "Contact" }
          ].map((link) => (
            <a 
              key={link.href}
              href={link.href}
              onClick={(event) => {
                event.preventDefault()
                const targetId = link.href.replace('#', '')
                const section = document.getElementById(targetId)
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' })
                }
              }} 
              className="text-muted-foreground hover:text-black dark:hover:!text-white transition-all duration-300 relative group"
            >
              {link.label}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Fixed Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="rounded-full glass border border-border/50 hover:border-primary/50 transition-all duration-300 relative group overflow-hidden"
          title={`Currently in ${theme} mode - Click to switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {/* Sun Icon - Visible in light mode */}
          <Sun className={`h-5 w-5 transition-all duration-500 text-yellow-500 ${
            theme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-0"
          }`} />
          
          {/* Moon Icon - Visible in dark mode */}
          <Moon className={`absolute h-5 w-5 transition-all duration-500 text-blue-400 ${
            theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
          }`} />
          
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}