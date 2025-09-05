import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Smartphone, 
  Cpu,
  GitBranch,
  Palette
} from "lucide-react"

interface SkillsSectionProps {
  onNavigate: (page: string) => void
}

interface Skill {
  name: string
  level: number
  icon: React.ReactNode
  category: string
  color: string
}

export const SkillsSection = ({ onNavigate }: SkillsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState('all')

  const skills: Skill[] = [
    // Frontend
    { name: 'React.js', level: 90, icon: <Code />, category: 'frontend', color: '#61dafb' },
    { name: 'JavaScript', level: 92, icon: <Code />, category: 'frontend', color: '#f7df1e' },
    { name: 'TypeScript', level: 85, icon: <Code />, category: 'frontend', color: '#3178c6' },
    { name: 'HTML/CSS', level: 95, icon: <Globe />, category: 'frontend', color: '#e34c26' },
    { name: 'Tailwind CSS', level: 90, icon: <Palette />, category: 'frontend', color: '#06b6d4' },
    { name: 'Next.js', level: 80, icon: <Globe />, category: 'frontend', color: '#000000' },
    
    // Backend
    { name: 'Node.js', level: 85, icon: <Server />, category: 'backend', color: '#339933' },
    { name: 'Python', level: 88, icon: <Server />, category: 'backend', color: '#3776ab' },
    { name: 'Java', level: 82, icon: <Server />, category: 'backend', color: '#ed8b00' },
    { name: 'Express.js', level: 80, icon: <Server />, category: 'backend', color: '#000000' },
    
    // Database
    { name: 'MongoDB', level: 85, icon: <Database />, category: 'database', color: '#47a248' },
    { name: 'MySQL', level: 80, icon: <Database />, category: 'database', color: '#4479a1' },
    { name: 'PostgreSQL', level: 75, icon: <Database />, category: 'database', color: '#336791' },
    
    // Tools & Others
    { name: 'Git/GitHub', level: 90, icon: <GitBranch />, category: 'tools', color: '#f05032' },
    { name: 'Docker', level: 70, icon: <Cpu />, category: 'tools', color: '#2496ed' },
    { name: 'AWS', level: 65, icon: <Cpu />, category: 'tools', color: '#ff9900' },
    { name: 'Mobile Dev', level: 75, icon: <Smartphone />, category: 'mobile', color: '#a4c639' },
  ]

  const categories = [
    { id: 'all', name: 'All Skills', count: skills.length },
    { id: 'frontend', name: 'Frontend', count: skills.filter(s => s.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: skills.filter(s => s.category === 'backend').length },
    { id: 'database', name: 'Database', count: skills.filter(s => s.category === 'database').length },
    { id: 'tools', name: 'Tools', count: skills.filter(s => s.category === 'tools').length },
    { id: 'mobile', name: 'Mobile', count: skills.filter(s => s.category === 'mobile').length },
  ]

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

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
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  const SkillCard = ({ skill, index }: { skill: Skill, index: number }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0)

    useEffect(() => {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level)
      }, index * 100 + 500)

      return () => clearTimeout(timer)
    }, [skill.level, index])

    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ 
          scale: 1.05,
          rotateY: 10,
          z: 50
        }}
        className="group"
      >
        <Card className="glass border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 h-full">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="p-3 rounded-xl bg-muted group-hover:bg-primary/10 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                style={{ color: skill.color }}
              >
                {skill.icon}
              </motion.div>
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground capitalize">
                  {skill.category}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Proficiency</span>
                <motion.span 
                  className="text-sm font-medium text-primary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                >
                  {animatedLevel}%
                </motion.span>
              </div>
              
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${animatedLevel}%` }}
                  transition={{ 
                    duration: 1.5, 
                    delay: index * 0.1 + 0.5,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </div>

            {/* Skill Level Indicator */}
            <div className="mt-4 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`h-1 flex-1 rounded-full ${
                    i < Math.floor(skill.level / 20) 
                      ? 'bg-primary' 
                      : 'bg-muted'
                  }`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ 
                    delay: index * 0.1 + 0.7 + i * 0.1,
                    duration: 0.3
                  }}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <div className="full-height relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-purple/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary))_0%,transparent_50%)] opacity-10" />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              My Skills
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels 
              across various technologies and tools.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={`glass transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'hover:glow-hover' 
                    : 'hover:bg-primary/10'
                }`}
              >
                {category.name}
                <span className="ml-2 text-xs opacity-70">({category.count})</span>
              </Button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12"
            key={activeCategory} // Force re-render when category changes
          >
            {filteredSkills.map((skill, index) => (
              <SkillCard key={`${skill.name}-${activeCategory}`} skill={skill} index={index} />
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onNavigate('projects')}
                size="lg"
                variant="outline"
                className="glass hover:bg-primary/10"
              >
                View My Projects
              </Button>
              <Button 
                onClick={() => onNavigate('contact')}
                size="lg"
                className="glass hover:glow-hover"
              >
                Let's Collaborate
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}