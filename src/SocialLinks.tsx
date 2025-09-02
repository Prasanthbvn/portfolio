import { ExternalLink, MessageCircle, Heart, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const socialLinks = [
  {
    name: "LinkedIn",
    description: "Professional network and experience",
    url: "https://www.linkedin.com/in/prasanth-c-8b84771b9/",
    color: "from-blue-600 to-blue-700",
    icon: "💼",
    // followers: "2.5K+",
    // posts: "150+"
  },
  {
    name: "Behance",
    description: "Creative portfolio and case studies",
    url: "https://www.behance.net/prasanthbvn", 
    color: "from-purple-600 to-blue-600",
    icon: "🎨",
    // followers: "1.2K+",
    // posts: "45+"
  },
  {
    name: "Dribbble",
    description: "Design shots and inspiration",
    url: "https://dribbble.com/Prasanthbvn",
    color: "from-pink-500 to-rose-500",
    icon: "🏀",
    // followers: "3.8K+",
    // posts: "200+"
  }
]

export function SocialLinks() {
  return (
    <section id="contact" className="relative py-24 px-6 scroll-mt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="absolute top-20 left-20 w-24 h-24 morph-shape animate-float opacity-15" />
      <div className="absolute bottom-20 right-20 w-20 h-20 morph-shape animate-float-delayed opacity-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-gradient">Connect</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 text-gradient-hero">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find me across the web and see my work on various platforms. Let's create something amazing together!
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {socialLinks.map((link, index) => (
            <Card 
              key={link.name} 
              className="group card-3d hover:shadow-float transition-all duration-500 border-2 hover:border-primary/30 overflow-hidden glass"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-br ${link.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300" />
                  <div className="relative z-10">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{link.name}</h3>
                    <p className="text-white/80">{link.description}</p>
                  </div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-4 right-4 flex flex-col gap-1">
                    {/* <div className="bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium">
                      {link.followers}
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium">
                      {link.posts}
                    </div> */}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="space-y-4">
                    {/* <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Followers</span>
                      <span className="font-medium">{link.followers}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>Posts</span>
                      <span className="font-medium">{link.posts}</span>
                    </div> */}
                  </div>
                  
                  <Button 
                    asChild 
                    className="w-full mt-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
                    variant="outline"
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      Visit Profile
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA Section */}
        <div className="text-center">
          <Card className="card-3d border-2 border-primary/20 shadow-float glass overflow-hidden">
            <CardContent className="p-12">
              <div className="max-w-2xl mx-auto space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">Get In Touch</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gradient-hero">Ready to Start a Project?</h3>
                  <p className="text-lg text-muted-foreground">
                    I'm always excited to work on new projects and collaborate with creative teams. 
                    Let's discuss how we can bring your ideas to life!
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="px-10 py-7 text-lg rounded-full glow-primary-hover transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <a href="mailto:prasanthbvn@gmail.com">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Send Message
                    </a>
                  </Button>
                  {/* <Button 
                    variant="outline" 
                    size="lg" 
                    className="px-10 py-7 text-lg rounded-full glass border-2 hover:border-primary transition-all duration-300 transform hover:scale-105"
                  >
                    <Coffee className="mr-2 h-5 w-5" />
                    Schedule a Call
                  </Button> */}
                </div>

                {/* Quick Stats */}
                {/* <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                  {[
                    { icon: Heart, label: "Happy Clients", value: "50+" },
                    { icon: MessageCircle, label: "Projects Completed", value: "100+" },
                    { icon: Coffee, label: "Coffee Consumed", value: "∞" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                      <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                      <div className="text-lg font-bold text-gradient">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}