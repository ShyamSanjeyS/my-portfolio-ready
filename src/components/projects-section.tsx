import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, GitFork } from "lucide-react"

interface ProjectsSectionProps {
  onNavigate: (page: string) => void
}

interface Repository {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  updated_at: string
}

export const ProjectsSection = ({ onNavigate }: ProjectsSectionProps) => {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ShyamSanjeyS/repos?sort=updated&per_page=50')
        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }
        const data = await response.json()
        
        // Filter out forks and empty repos, sort by stars and recent activity
        const filteredRepos = data
          .filter((repo: Repository) => !repo.name.includes('fork') && repo.description)
          .sort((a: Repository, b: Repository) => {
            const scoreA = a.stargazers_count * 2 + a.forks_count + (new Date(a.updated_at).getTime() / 1000000000)
            const scoreB = b.stargazers_count * 2 + b.forks_count + (new Date(b.updated_at).getTime() / 1000000000)
            return scoreB - scoreA
          })
          .slice(0, 12) // Show top 12 projects
        
        setRepositories(filteredRepos)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchRepositories()
  }, [])

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
      rotateX: -15
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  }

  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: '#f7df1e',
      TypeScript: '#3178c6',
      Python: '#3776ab',
      Java: '#ed8b00',
      'C++': '#00599c',
      HTML: '#e34c26',
      CSS: '#1572b6',
      React: '#61dafb',
      Vue: '#4fc08d',
      Angular: '#dd0031'
    }
    return colors[language || ''] || '#6b7280'
  }

  if (loading) {
    return (
      <div className="full-height flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
        />
      </div>
    )
  }

  if (error) {
    return (
      <div className="full-height flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Unable to load projects</h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="full-height relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-purple/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-10" />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              My Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my development work, featuring web applications, algorithms, 
              and open-source contributions built with modern technologies.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {repositories.map((repo) => (
              <motion.div
                key={repo.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.02
                }}
                className="group"
              >
                <Card className="glass h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </CardTitle>
                      <div className="flex gap-2">
                        <motion.a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                        {repo.homepage && (
                          <motion.a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground line-clamp-3">
                      {repo.description || 'No description available'}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>

                    {/* Language & Topics */}
                    <div className="space-y-3">
                      {repo.language && (
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: getLanguageColor(repo.language) }}
                          />
                          <span className="text-sm font-medium text-foreground">{repo.language}</span>
                        </div>
                      )}
                      
                      {repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <Badge key={topic} variant="secondary" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                          {repo.topics.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{repo.topics.length - 3}
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center">
            <Button 
              onClick={() => onNavigate('contact')}
              size="lg"
              className="glass hover:glow-hover"
            >
              Let's Work Together
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}