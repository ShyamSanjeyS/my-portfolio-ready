import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { Animated3DScene } from "@/components/animated-3d-icons"
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react"
import profileImage from "@/assets/profile.jpg"

interface HeroSectionProps {
  onNavigate: (page: string) => void
}

export const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  }

  return (
    <section className="full-height relative overflow-hidden">
      <ParticlesBackground />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-purple/20 dark:from-primary/10 dark:to-accent-purple/10" />
      
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left side - Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold leading-tight"
                variants={itemVariants}
              >
                Hi, I'm{" "}
                <span className="gradient-text">Shyam Sanjey S</span>
              </motion.h1>
              
              <motion.div 
                variants={itemVariants}
                className="text-2xl md:text-3xl font-medium text-muted-foreground"
              >
                <span className="font-mono">{'>'} </span>
                Full Stack Developer & Problem Solver
              </motion.div>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Passionate about creating innovative digital experiences with modern technologies. 
              I specialize in building scalable applications and solving complex problems through clean, efficient code.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button 
                size="lg" 
                className="glow-hover group"
                onClick={() => onNavigate('contact')}
              >
                <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Let's Connect
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="glass hover:glow-hover group"
                onClick={() => onNavigate('projects')}
              >
                <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                View Projects
              </Button>

              <Button 
                variant="ghost" 
                size="lg" 
                className="glass hover:glow-hover group"
                onClick={() => onNavigate('resume')}
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download CV
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-4 pt-4"
            >
              <motion.a
                href="https://github.com/ShyamSanjeyS"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-full hover:glow-hover"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/shyamsanjeys"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 glass rounded-full hover:glow-hover"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - 3D Scene & Profile */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-96 lg:h-[600px]"
          >
            {/* Profile image */}
            <motion.div 
              className="absolute top-8 right-8 z-10"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, delay: 1 }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden glass glow animate-float">
                <img 
                  src={profileImage} 
                  alt="Shyam Sanjey S" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* 3D Scene */}
            <div className="w-full h-full">
              <Animated3DScene />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="cursor-pointer"
          onClick={() => onNavigate('about')}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}