import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "Máster en Modelización Matemática, Estadística y Computación",
    school: "Universidad de Zaragoza",
    location: "Zaragoza, España",
    period: "2024 - 2025",
    description:
      "Especialización en técnicas avanzadas de modelización matemática y análisis estadístico. Desarrollo de competencias en computación científica y análisis de datos complejos.",
    achievements: ["Proyecto TFM en Series Temporales", "Análisis de Datos Industriales"],
  },
  {
    degree: "Intercambio Erasmus",
    school: "Mälardalens University",
    location: "Västerås, Suecia",
    period: "2023",
    description:
      "Programa de intercambio internacional enfocado en matemáticas aplicadas y computación. Experiencia multicultural que amplió mi perspectiva académica y personal.",
    achievements: ["Experiencia Internacional", "Matemáticas Aplicadas"],
  },
  {
    degree: "Grado en Matemáticas",
    school: "Universidad de Zaragoza",
    location: "Zaragoza, España",
    period: "2020 - 2024",
    description:
      "Formación integral en matemáticas puras y aplicadas, incluyendo álgebra, análisis, estadística, y métodos numéricos. Base sólida para la resolución de problemas complejos.",
    achievements: ["Formación Integral", "Matemáticas Puras y Aplicadas"],
  },
]

const certifications = [
  {
    name: "Certificación Cambridge B2",
    issuer: "Cambridge English",
    date: "2023",
    credentialId: "CAMBRIDGE-B2-2023",
  },
  {
    name: "Técnicas de Muestreo y Estimación No Paramétrica",
    issuer: "Formación Complementaria",
    date: "2024",
    credentialId: "SAMPLING-2024",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">
            Educación & <span className="text-primary">Certificaciones</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">Educación</h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <Card key={index} className="animate-slide-up hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">{edu.degree}</CardTitle>
                      <div className="space-y-2">
                        <div className="font-semibold text-foreground">{edu.school}</div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{edu.description}</p>
                      <div className="space-y-2">
                        <div className="text-sm font-medium">Aspectos Destacados:</div>
                        <div className="flex flex-wrap gap-2">
                          {edu.achievements.map((achievement) => (
                            <Badge key={achievement} variant="secondary" className="text-xs">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center lg:text-left">Certificaciones</h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="animate-scale-in hover:shadow-lg transition-shadow"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary mb-1">{cert.name}</h4>
                          <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>Emitido: {cert.date}</span>
                            <span>ID: {cert.credentialId}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="ml-4">
                          Verificado
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
