import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">
            Sobre <span className="text-primary">César Miravete Zarazaga</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/professional-mathematician-portrait.jpg"
                    alt="César Miravete Zarazaga - Matemático especializado en análisis de datos de la Universidad de Zaragoza"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="animate-slide-up space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy <strong>César Miravete Zarazaga</strong>, matemático graduado de la{" "}
                <strong>Universidad de Zaragoza</strong>
                apasionado por la tecnología y el desarrollo de software que resuelve problemas reales. Mi formación en
                matemáticas me ha proporcionado una base sólida para el <strong>análisis de datos</strong> y la
                <strong>modelización matemática</strong>, áreas en las que me especializo actualmente.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Como <strong>consultor junior</strong> y <strong>tutor privado de matemáticas</strong>, estoy motivado a
                trabajar en empresas que fomenten la innovación y el trabajo en equipo. Me interesa especialmente el
                desarrollo de
                <strong>aplicaciones industriales</strong>, el <strong>análisis de series temporales</strong> y la
                implementación de soluciones tecnológicas creativas usando <strong>Python</strong>, <strong>R</strong> y{" "}
                <strong>MATLAB</strong>.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Años Enseñando Matemáticas</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">B2</div>
                  <div className="text-sm text-muted-foreground">Nivel de Inglés Certificado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
