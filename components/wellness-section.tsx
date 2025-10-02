import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Briefcase, Home } from "lucide-react"

const wellnessCards = [
  {
    icon: Heart,
    title: "Saúde da Mulher",
    description: "Veja como um exercício de alta intensidade pode ser benéfico para a saúde mental",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Users,
    title: "Ajuda ao próximo (Overweight care)",
    description: "Dicas sobre políticas, cuidados e o perdão que levam a vida saudável",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Home,
    title: "Viver com mais qualidade de vida",
    description: "Descubra como suas escolhas diárias afetam a saúde mental",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Briefcase,
    title: "Saúde empresarial no trabalho",
    description: "Saiba por que é essencial falar sobre saúde mental no trabalho",
    color: "from-purple-500 to-violet-500",
  },
]

export function WellnessSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Viver Bem</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aqui você encontra informações de saúde, bem-estar e qualidade de vida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wellnessCards.map((card, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className={`h-32 bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                <card.icon className="h-16 w-16 text-white" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{card.title}</CardTitle>
                <CardDescription className="line-clamp-3">{card.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
