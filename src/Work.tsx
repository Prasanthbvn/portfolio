import { ExternalLink, Eye, ArrowRight, Star, TrendingUp, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import loginSignup from "@/assets/images/login-signup.png"
import fileManager from "@/assets/images/file-manager.png"
import constructionSite from "@/assets/images/construction-site.png"
import otpVerification from "@/assets/images/otp-verification.png"
import foodieSite from "@/assets/images/foodie-site.png"
import logoDesign from "@/assets/images/logo-design.png"
import vaccinationManagement from "@/assets/images/vaccination-management.png"

const projects = [
  {
    title: "Login & Signup Flow",
    description: "A clean, modern design system that ensures a seamless flow from landing to signup, keeping the user journey smooth and efficient.",
    image: loginSignup,
    imageType: "file",
    tags: ["Mobile Design", "User Research", "Prototyping"],
    type: "Case Study",
    // stats: { engagement: "+40%", conversion: "+25%", users: "50K+" },
    color: "from-blue-500 to-purple-600",
    caseStudyUrl: "https://www.behance.net/gallery/232936851/UIUX-Case-Study-Login-Signup-Flow"
  },
  {
    title: "Files Manager",
    description: "A modern, intuitive file management solution that transforms how users interact with their digital content. This design showcases a clean, minimalist interface that prioritizes user experience while maintaining powerful functionality.",
    image: fileManager,
    imageType: "file",
    tags: ["Mobile App", "File Manager", "Accessibility"],
    type: "UI Design",
    // stats: { efficiency: "+60%", adoption: "+80%", clients: "200+" },
    color: "from-green-500 to-blue-600",
    caseStudyUrl: "https://www.behance.net/gallery/235128185/File-Manager-App-Design-Case-Study"
  },
  {
    title: "Veterinary Vaccination Management",
    description: "A modern and intuitive veterinary vaccination management system designed to streamline and digitalize the entire process. This solution ensures seamless reminders, easy record access, and improved pet health tracking for veterinarians and pet owners alike.",
    image: vaccinationManagement,
    imageType: "file",
    tags: ["Mobile App", "Vaccination Management", "Accessibility"],
    type: "App Design",
    // stats: { efficiency: "+60%", adoption: "+80%", clients: "200+" },
    color: "from-green-500 to-blue-600",
    caseStudyUrl: "https://www.behance.net/gallery/236524649/Veterinary-Vaccination-Management-App"
  },
  {
    title: "Modern Construction Site",
    description: "A clean and modern UI concept designed for a construction company website, focusing on bold visuals, structured layouts, and easy navigation. The design highlights services, projects, and contact details in a professional yet approachable way, ensuring a strong digital presence for the brand.",
    image: constructionSite,
    imageType: "file",
    tags: ["Web Design", "Design System"],
    type: "UX Research",
    // stats: { satisfaction: "95%", security: "100%", downloads: "1M+" },
    color: "from-emerald-500 to-teal-600",
    caseStudyUrl: "https://dribbble.com/shots/26294716-Modern-Construction-Site-UI-Design"
  },
  {
    title: "OTP Verification",
    description: "A simple and secure OTP verification UI, designed with a clean layout and intuitive flow to enhance user trust and ensure smooth authentication.",
    image: otpVerification,
    imageType: "file",
    tags: ["Security", "UX Design"],
    type: "Security",
    // stats: { recognition: "+70%", consistency: "100%", touchpoints: "50+" },
    color: "from-pink-500 to-rose-600",
    caseStudyUrl: "https://dribbble.com/shots/25059323-OTP-Verification"
  },
  {
    title: "Foodie Site",
    description: "A visually engaging food website concept featuring vibrant imagery, easy navigation, and a modern layout to showcase dishes and enhance the dining experience online.",
    image: foodieSite,
    imageType: "file",
    tags: ["Web Design", "Accessibility"],
    type: "Web Design",
    // stats: { efficiency: "+50%", satisfaction: "92%", patients: "10K+" },
    color: "from-indigo-500 to-purple-600",
    caseStudyUrl: "https://dribbble.com/shots/24939982-Foodie-Site"
  },
  {
    title: "Logo Design",
    description: "A minimal and versatile logo design created for an academy, reflecting professionalism, knowledge, and growth through clean typography and symbolic elements.",
    image: logoDesign,
    imageType: "file",
    tags: ["Branding", "Innovation"],
    type: "Concept Design",
    stats: { engagement: "+300%", conversion: "+45%", innovation: "First" },
    color: "from-orange-500 to-red-600",
    caseStudyUrl: "https://dribbble.com/shots/17455090-Logo-Design"
  }
]

export function Work() {
  return (
    <section id="work" className="relative py-24 px-6 scroll-mt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-10 left-10 w-20 h-20 morph-shape animate-float opacity-10" />
      <div className="absolute bottom-10 right-10 w-16 h-16 morph-shape animate-float-delayed opacity-15" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-gradient">Portfolio</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 text-gradient-hero">Featured Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects showcasing my design process, problem-solving skills, and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group card-3d hover:shadow-float transition-all duration-500 border-2 hover:border-primary/30 overflow-hidden glass"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Project Image with Gradient Overlay */}
                <div className={`aspect-video bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {project.imageType === "file" ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      project.image
                    )}
                  </div>
                  
                  {/* Floating Stats */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {/* {Object.entries(project.stats).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white">
                        {value}
                      </div>
                    ))} */}
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Project Type Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                    <Star className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  {/* Project Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Project Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs bg-muted/50 px-3 py-1 rounded-full border border-border/50 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      variant="outline"
                      asChild={!!project.caseStudyUrl}
                    >
                      {project.caseStudyUrl ? (
                        <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                          <Eye className="mr-2 h-4 w-4" />
                          View Case Study
                        </a>
                      ) : (
                        <>
                          <Eye className="mr-2 h-4 w-4" />
                          View Case Study
                        </>
                      )}
                    </Button>
                    {/* <Button 
                      size="sm"
                      variant="ghost"
                      className="group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl glass border-2 border-primary/20 w-full max-w-2xl mx-auto">
            <div className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Ready to see more?</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Explore my complete portfolio and case studies</p>
            </div>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full glass border-2 hover:border-primary transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="https://dribbble.com/Prasanthbvn" target="_blank" rel="noopener noreferrer">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}