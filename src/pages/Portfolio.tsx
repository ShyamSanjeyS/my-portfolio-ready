import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ThemeProvider } from "@/components/theme-provider"

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('hero')

  const handleNavigate = (page: string) => {
    setCurrentPage(page)
  }

  const pageVariants = {
    initial: { 
      opacity: 0,
      scale: 0.8,
      rotateY: -90 
    },
    in: { 
      opacity: 1,
      scale: 1,
      rotateY: 0 
    },
    out: { 
      opacity: 0,
      scale: 1.2,
      rotateY: 90 
    }
  }

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.8
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'hero':
        return <HeroSection onNavigate={handleNavigate} />
      case 'about':
        return <AboutSection onNavigate={handleNavigate} />
      case 'projects':
        return (
          <div className="full-height flex items-center justify-center">
            <h1 className="text-4xl gradient-text">Projects - Coming Soon</h1>
          </div>
        )
      case 'skills':
        return (
          <div className="full-height flex items-center justify-center">
            <h1 className="text-4xl gradient-text">Skills - Coming Soon</h1>
          </div>
        )
      case 'articles':
        return (
          <div className="full-height flex items-center justify-center">
            <h1 className="text-4xl gradient-text">Articles - Coming Soon</h1>
          </div>
        )
      case 'profiles':
        return (
          <div className="full-height flex items-center justify-center">
            <h1 className="text-4xl gradient-text">Coding Profiles - Coming Soon</h1>
          </div>
        )
      case 'resume':
        return (
          <div className="full-height flex items-center justify-center">
            <h1 className="text-4xl gradient-text">Resume - Coming Soon</h1>
          </div>
        )
      case 'contact':
        return (
          <div className="full-height flex items-center justify-center">
            <h1 className="text-4xl gradient-text">Contact - Coming Soon</h1>
          </div>
        )
      default:
        return <HeroSection onNavigate={handleNavigate} />
    }
  }

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-background">
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
        
        <main className="pt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              {renderCurrentPage()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </ThemeProvider>
  )
}