import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Consultor Junior (Prácticas de Máster)",
    company: "BeleroFontech, S.L.",
    location: "Zaragoza, España",
    period: "2025",
    description:
      "Desarrollo de soluciones tecnológicas para aplicaciones industriales. Trabajo en proyectos de análisis de datos y modelización matemática aplicada a sistemas industriales.",
    technologies: ["Python", "Análisis de Datos", "Modelización", "Sistemas Industriales"],
  },
  {
    title: "Profesor Particular",
    company: "Autónomo",
    location: "Zaragoza, España",
    period: "2020 - Presente",
    description:
      "Enseñanza de matemáticas y física a estudiantes de Secundaria y Bachillerato. Desarrollo de metodologías personalizadas para mejorar el rendimiento académico y fomentar el interés por las ciencias exactas.",
    technologies: ["Matemáticas", "Física", "Pedagogía", "Metodología Educativa"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">
            Experiencia <span className="text-primary">Laboral</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:transform md:-translate-x-1/2 z-10"></div>

                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                    <Card className="ml-8 md:ml-0 animate-slide-up hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                        <div className="space-y-2">
                          <div className="font-semibold text-foreground">{exp.company}</div>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
