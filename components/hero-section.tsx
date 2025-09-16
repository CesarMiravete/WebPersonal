import { Button } from "@/components/ui/button"
import { Download, Linkedin, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background to-muted"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6">
            <span className="text-foreground">Hola, soy </span>
            <span className="text-primary">César Miravete Zarazaga</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 text-balance">
            Matemático & Analista de Datos | Python, R, MATLAB
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Especialista en análisis de datos y modelado matemático. Graduado de la Universidad de Zaragoza con
            experiencia en consultoría y desarrollo de aplicaciones industriales usando Python, R y MATLAB.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="group" asChild>
              <a href="/cv-cesar-miravete-zarazaga.pdf" download aria-label="Descargar CV de César Miravete Zarazaga">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Descargar CV
              </a>
            </Button>
            <Button variant="outline" size="lg" className="group bg-transparent" asChild>
              <a
                href="https://linkedin.com/in/CésarMiravete"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil de LinkedIn de César Miravete"
              >
                <Linkedin className="mr-2 h-5 w-5 group-hover:text-blue-600 transition-colors" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Ir a la sección Sobre Mí"
        >
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  )
}
