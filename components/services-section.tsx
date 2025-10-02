import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, Activity, Heart, Brain } from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "Serviços Completos de Diagnóstico",
    description: "Exames de imagem, laboratoriais e diagnósticos especializados",
    items: ["Raio-X, Mamografia, Tomografia", "Ultrassonografia", "Ressonância Magnética", "Exames Laboratoriais"],
  },
  {
    icon: Activity,
    title: "Instalação de Equipamentos",
    description: "Modernização de ambientes para diagnósticos",
    items: ["Instalação de equipamentos", "Gestão de planta diagnóstica", "Armazenamento seguro", "Telediagnóstico"],
  },
  {
    icon: Heart,
    title: "Atendimento Especializado",
    description: "Equipe preparada para atender suas necessidades",
    items: ["Clínica de medicina", "Atendimento a exames", "Operação remota de exames", "Laudos especializados"],
  },
  {
    icon: Brain,
    title: "Cuidado e Respeito",
    description: "Atendimento humanizado com eficiência",
    items: ["Equipe qualificada", "Ambiente moderno", "Tecnologia de ponta", "Resultados rápidos"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Implantação de Serviços de Diagnósticos</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um modelo completo de planejamento, modernização e gestão de planta diagnóstica hospitalar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
