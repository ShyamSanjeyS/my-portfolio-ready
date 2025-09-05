import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FooterProps {
  onNavigate: (page: string) => void
}

export const Footer = ({ onNavigate }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: <Github className="w-4 h-4" />,
      href: "https://github.com/ShyamSanjeyS",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      href: "https://linkedin.com/in/shyam-sanjey-s",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-4 h-4" />,
      href: "mailto:shyamsanjeys@gmail.com",
      label: "Email"
    }
  ]

  const quickLinks = [
    { label: "About", page: "about" },
    { label: "Projects", page: "projects" },
    { label: "Skills", page: "skills" },
    { label: "Contact", page: "contact" },
    { label: "Resume", page: "resume" }
  ]

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-background/80 backdrop-blur-sm border-t border-border/50 mt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent-purple/5" />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">Shyam S</h3>
            <p className="text-muted-foreground">
              Full Stack Developer passionate about creating 
              innovative web solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => onNavigate(link.page)}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Social & Scroll to Top */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center md:text-right"
          >
            <div className="flex justify-center md:justify-end items-center gap-3 mb-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="glass hover:bg-primary/10"
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              Back to Top
            </Button>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="border-t border-border/30 mt-8 pt-6 text-center"
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1 flex-wrap">
            © {new Date().getFullYear()} Shyam S. Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.span>
            using React, Framer Motion & Three.js
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}