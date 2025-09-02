import { Download, Mail, Award, Users, Clock, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
const handleResumeDownload = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}docs/Prasanth-UIUX-Product-Designer.pdf`;
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "Prasanth-UIUX-Product-Designer.pdf";
  link.target = "_blank";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};



  const skills = [
    { name: "Figma" },
    { name: "Photoshop" },
    { name: "Framer" },
    { name: "Adobe XD" },
    { name: "Miro" },
    { name: "User Research" },
    { name: "Wireframing" },
    { name: "Prototyping" },
    { name: "HTML/CSS" },
    { name: "Angular" },
    { name: "JavaScript" },
    { name: "SEO Optimization" },
    { name: "Web Development" },
    { name: "Design Systems" },
    { name: "User Testing" },
    { name: "Agile Methodologies" },
    { name: "User-Centric Design" },
    { name: "Design Thinking" },
  ]

  const achievements = [
    { icon: Award, number: "50+", label: "Website Designed" },
    { icon: Users, number: "100+", label: "Happy Clients" },
    { icon: Clock, number: "7+", label: "Years Experience" },
    // { icon: Target, number: "100%", label: "Success Rate" }
  ]

  return (
    <section id="about" className="relative py-24 px-6 bg-gradient-to-b from-muted/30 to-background scroll-mt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern-grid opacity-5" />
      <div className="absolute top-20 right-20 w-32 h-32 morph-shape animate-float opacity-10" />
      <div className="absolute bottom-20 left-20 w-24 h-24 morph-shape animate-float-delayed opacity-15" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-gradient">About Me</span>
          </div>
          <h2 className="text-5xl font-bold mb-6 text-gradient-hero">Crafting Digital Experiences</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate UI/UX designer with 5+ years of experience creating digital experiences 
            that users love. I believe great design is invisible – it just works seamlessly and beautifully.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-16 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8 lg:col-span-2">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines user research, creative thinking, and technical understanding to 
                deliver designs that not only look stunning but also solve real problems and drive 
                business results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in creating intuitive interfaces that bridge the gap between user needs 
                and business goals, ensuring every pixel serves a purpose.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 rounded-2xl glass card-3d">
                  <achievement.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-gradient">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleResumeDownload}
                size="lg" 
                className="px-8 py-6 text-lg rounded-full glow-primary-hover transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg rounded-full glass border-2 hover:border-primary transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <a href="mailto:prasanthbvn@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Skills Card */}
          <Card className="card-3d border-2 border-primary/20 shadow-float glass lg:col-span-2">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-gradient">Skills & Expertise</h3>
                  <p className="text-muted-foreground">Mastering the art of digital design</p>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary whitespace-nowrap"
                    >
                      {/* <span className="text-base leading-none">{skill.icon}</span> */}
                      <span className="text-sm font-medium leading-none">{skill.name}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <h4 className="font-bold mb-3 text-lg">Design Philosophy</h4>
                  <blockquote className="text-muted-foreground italic">
                    "Design is not just what it looks like and feels like. Design is how it works."
                  </blockquote>
                  <p className="text-sm text-muted-foreground mt-2">- Steve Jobs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}