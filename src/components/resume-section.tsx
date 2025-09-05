import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Download, 
  ExternalLink, 
  FileText, 
  MapPin, 
  Calendar,
  Award,
  Code,
  GraduationCap,
  Briefcase
} from "lucide-react"

interface ResumeSectionProps {
  onNavigate: (page: string) => void
}

export const ResumeSection = ({ onNavigate }: ResumeSectionProps) => {
  const resumeUrl = "https://drive.google.com/file/d/10PJLBDx9AsF1Fa6hsPQHvTo88V7UwETI/view?usp=sharing"
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Personal Projects",
      period: "2023 - Present",
      location: "Chennai, India",
      description: "Developed multiple web applications using React, Node.js, and modern technologies. Focused on creating responsive, user-friendly interfaces and robust backend systems.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript"]
    },
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "2022 - 2023",
      location: "Remote",
      description: "Created responsive web applications and landing pages for various clients. Specialized in React.js and modern CSS frameworks.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science",
      institution: "University",
      period: "2020 - 2024",
      location: "Chennai, India",
      achievements: ["Relevant coursework in Data Structures, Algorithms, Database Systems"]
    }
  ]

  const achievements = [
    {
      title: "Open Source Contributor",
      description: "Active contributor to various open-source projects on GitHub",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Problem Solver",
      description: "Solved 200+ coding problems across various platforms",
      icon: <Award className="w-5 h-5" />
    },
    {
      title: "Full Stack Projects",
      description: "Built 15+ complete web applications from scratch",
      icon: <Briefcase className="w-5 h-5" />
    }
  ]

  const skills = {
    "Frontend": ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js", "Python", "Java"],
    "Database": ["MongoDB", "MySQL", "PostgreSQL"],
    "Tools": ["Git", "Docker", "AWS", "VS Code"]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  const handleResumeClick = () => {
    window.open(resumeUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="full-height relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-cyan/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-10" />
      
      <div className="relative z-10 container mx-auto px-4 py-20 max-h-screen overflow-y-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              My Resume
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              A comprehensive overview of my professional journey, skills, and achievements 
              in software development and technology.
            </p>
            
            {/* Resume Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={handleResumeClick}
                  size="lg"
                  className="glass hover:glow-hover"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Full Resume
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={handleResumeClick}
                  variant="outline"
                  size="lg"
                  className="glass hover:bg-primary/10"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Experience */}
              <motion.div variants={itemVariants}>
                <Card className="glass border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <Briefcase className="w-5 h-5 text-primary" />
                      Professional Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {experiences.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                        className="border-l-2 border-primary/20 pl-6 pb-6 last:pb-0"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                          <span className="font-medium text-primary">{exp.company}</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-3">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Education */}
              <motion.div variants={itemVariants}>
                <Card className="glass border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + 0.4 }}
                        className="border-l-2 border-primary/20 pl-6"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </div>
                        </div>
                        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                          <span className="font-medium text-primary">{edu.field}</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                        </div>
                        <p className="text-muted-foreground">{edu.institution}</p>
                        <ul className="mt-2 text-sm text-muted-foreground">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Achievements */}
              <motion.div variants={itemVariants}>
                <Card className="glass border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <Award className="w-5 h-5 text-primary" />
                      Key Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="text-primary mt-1">{achievement.icon}</div>
                        <div>
                          <h4 className="font-medium text-foreground mb-1">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Skills Summary */}
              <motion.div variants={itemVariants}>
                <Card className="glass border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <Code className="w-5 h-5 text-primary" />
                      Technical Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {Object.entries(skills).map(([category, skillList], index) => (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                      >
                        <h4 className="font-medium text-foreground mb-2">{category}</h4>
                        <div className="flex flex-wrap gap-1">
                          {skillList.map((skill) => (
                            <Badge key={skill} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Actions */}
              <motion.div variants={itemVariants}>
                <Card className="glass border-border/50">
                  <CardContent className="pt-6 space-y-3">
                    <Button 
                      onClick={() => onNavigate('contact')}
                      className="w-full glass hover:glow-hover"
                    >
                      Get In Touch
                    </Button>
                    <Button 
                      onClick={() => onNavigate('projects')}
                      variant="outline"
                      className="w-full glass hover:bg-primary/10"
                    >
                      View My Projects
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}