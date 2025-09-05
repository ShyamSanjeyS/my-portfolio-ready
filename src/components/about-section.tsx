import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Award, Calendar, MapPin } from "lucide-react"

interface AboutSectionProps {
  onNavigate: (page: string) => void
}

export const AboutSection = ({ onNavigate }: AboutSectionProps) => {
  const achievements = [
    { title: "Full Stack Development", description: "3+ years experience", icon: "💻" },
    { title: "Problem Solving", description: "500+ problems solved", icon: "🧩" },
    { title: "Team Leadership", description: "Led multiple projects", icon: "👥" },
    { title: "Open Source", description: "Active contributor", icon: "🌟" },
  ]

  const technologies = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java",
    "MongoDB", "PostgreSQL", "AWS", "Docker", "Git", "Next.js"
  ]

  return (
    <section className="full-height py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-card/30" />
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Passionate developer with expertise in full-stack development, 
            problem-solving, and creating innovative digital solutions.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <Card className="glass glow-hover">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Chennai, Tamil Nadu, India</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>Available for new opportunities</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-primary" />
                    <span>Computer Science Engineering Student</span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button 
                    className="w-full glow-hover"
                    onClick={() => onNavigate('resume')}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="hover:scale-110 transition-transform cursor-pointer glass"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <Card className="glass glow-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{achievement.icon}</div>
                      <div>
                        <h4 className="text-xl font-semibold">{achievement.title}</h4>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold mb-4">Ready to work together?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="glow-hover"
              onClick={() => onNavigate('contact')}
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass hover:glow-hover"
              onClick={() => onNavigate('projects')}
            >
              View My Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}