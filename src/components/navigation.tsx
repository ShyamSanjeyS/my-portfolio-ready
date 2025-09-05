import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Home, User, Briefcase, Code, Mail, FileText, BookOpen, ExternalLink } from "lucide-react"

interface NavigationProps {
  currentPage: string
  onNavigate: (page: string) => void
}

const navItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'articles', label: 'Articles', icon: BookOpen },
  { id: 'profiles', label: 'Profiles', icon: ExternalLink },
  { id: 'resume', label: 'Resume', icon: FileText },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export const Navigation = ({ currentPage, onNavigate }: NavigationProps) => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">SS</span>
          </div>
          <span className="font-bold text-lg gradient-text">Shyam Sanjey S</span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-2 glass px-4 py-2 rounded-full">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.div key={item.id} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={currentPage === item.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onNavigate(item.id)}
                  className={`${currentPage === item.id ? "glow" : ""} transition-all duration-300`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              </motion.div>
            )
          })}
        </div>

        <ThemeToggle />
      </div>
    </motion.nav>
  )
}