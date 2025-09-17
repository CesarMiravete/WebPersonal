"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react"
import emailjs from "@emailjs/browser"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        "service_wsmduq8", // <- reemplaza con tu Service ID
        "template_0k8get6", // <- reemplaza con tu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "LtakNYcswhCJCd5l2" // <- reemplaza con tu Public Key
      )
      .then(() => {
        alert("✅ Mensaje enviado con éxito")
        setFormData({ name: "", email: "", subject: "", message: "" })
      })
      .catch((error) => { 
        console.error("Error EmailJS:", error)
        alert("❌ Hubo un error al enviar el mensaje")
      })
      .finally(() => setLoading(false))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">
            Ponte en <span className="text-primary">Contacto</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info (igual que antes) */}
            <div className="space-y-8">
              <div className="animate-slide-up">
                <h3 className="text-2xl font-semibold mb-6">Conectemos</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes. Ya sea que tengas una
                  pregunta, quieras colaborar, o simplemente saludar, ¡no dudes en contactarme!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 animate-slide-up">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">csarmiravete@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 animate-slide-up">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Teléfono</div>
                    <div className="text-muted-foreground">+34 601 05 45 53</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 animate-slide-up">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Ubicación</div>
                    <div className="text-muted-foreground">Zaragoza, España</div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-medium mb-4">Sígueme</h4>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                    asChild
                  >
                    <a href="https://linkedin.com/in/CésarMiravete" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Enviar Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Tu Nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Tu Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Input
                      name="subject"
                      placeholder="Asunto"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tu Mensaje"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full group" disabled={loading}>
                    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {loading ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
