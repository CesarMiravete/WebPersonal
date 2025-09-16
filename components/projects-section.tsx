import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "La Transformación Wavelet y sus Aplicaciones en el Procesamiento de Imágenes",
    description:
      "Proyecto de Fin de Grado en Matemáticas (Universidad de Zaragoza, 2024). Estudio en profundidad sobre la transformada wavelet discreta (DWT), explorando su base matemática y aplicaciones prácticas en compresión de imágenes (JPEG2000) y reducción de ruido. Combina teoría rigurosa con aplicaciones en procesamiento digital.",
    image: "/wavelet-transform-project.jpg",
    technologies: [
      "Matemáticas",
      "Wavelets",
      "JPEG2000",
      "Procesamiento de Imágenes",
      "Análisis de Fourier",
      "Espacios de Hilbert",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Análisis de Series Temporales - TFM",
    description:
      "Proyecto de Trabajo de Fin de Máster enfocado en el análisis de series temporales de datos de bombas industriales. Implementación de tecnologías modernas para el procesamiento y análisis de datos en tiempo real.",
    image: "/industrial-data-analysis.jpg",
    technologies: ["Python", "MQTT", "PostgreSQL", "Airflow", "Series Temporales"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Sistema de Modelización Matemática",
    description:
      "Desarrollo de modelos matemáticos para la resolución de problemas industriales complejos. Aplicación de técnicas estadísticas avanzadas y métodos numéricos.",
    image: "/mathematical-modeling-system.jpg",
    technologies: ["MATLAB", "Python", "R", "Estadística", "Modelización"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Herramientas de Análisis Estadístico",
    description:
      "Conjunto de herramientas desarrolladas para el análisis estadístico de datos complejos, incluyendo técnicas de muestreo no paramétrico.",
    image: "/statistical-analysis-tools.jpg",
    technologies: ["R", "Python", "Estadística", "Muestreo No Paramétrico"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Aplicación de Enseñanza Matemática",
    description:
      "Plataforma educativa desarrollada para facilitar el aprendizaje de matemáticas y física a nivel de Secundaria y Bachillerato.",
    image: "/educational-math-platform.jpg",
    technologies: ["JavaScript", "HTML/CSS", "Pedagogía Digital"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">
            Proyectos <span className="text-primary">Destacados</span>
          </h2>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="group overflow-hidden animate-scale-in hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Proyecto
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  </div> */}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          {/* <div>
            <h3 className="text-2xl font-semibold text-center mb-8">Otros Proyectos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card
                  key={project.title}
                  className="group overflow-hidden animate-slide-up hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-primary">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Ver
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-1" />
                          Código
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
