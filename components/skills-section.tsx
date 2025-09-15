"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Programación",
    skills: [
      { name: "Python", level: 90 },
      { name: "R", level: 85 },
      { name: "MATLAB", level: 80 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    title: "Matemáticas",
    skills: [
      { name: "Estadística", level: 95 },
      { name: "Modelización", level: 90 },
      { name: "Análisis de Datos", level: 88 },
      { name: "Series Temporales", level: 85 },
      { name: "Muestreo No Paramétrico", level: 80 },
    ],
  },
  {
    title: "Tecnologías",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MQTT", level: 75 },
      { name: "Airflow", level: 70 },
      { name: "Git", level: 85 },
    ],
  },
]

const technologies = [
  "Python",
  "R",
  "MATLAB",
  "SQL",
  "PostgreSQL",
  "MQTT",
  "Airflow",
  "Estadística",
  "Modelización Matemática",
  "Análisis de Datos",
  "Series Temporales",
  "Muestreo No Paramétrico",
  "Git",
  "Matemáticas Aplicadas",
  "Computación Científica",
]

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState("progress")

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">
            Mis <span className="text-primary">Habilidades</span>
          </h2>

          <div className="flex justify-center mb-8">
            <div className="flex bg-background rounded-lg p-1">
              <button
                onClick={() => setActiveTab("progress")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeTab === "progress"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Vista de Progreso
              </button>
              <button
                onClick={() => setActiveTab("tags")}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeTab === "tags"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Tecnologías
              </button>
            </div>
          </div>

          {activeTab === "progress" ? (
            <div className="grid md:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <Card key={category.title} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-center text-primary">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
                {technologies.map((tech, index) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
