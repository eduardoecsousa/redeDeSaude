import { Card, CardContent } from "@/components/ui/card"
import { Building2, CheckCircle2, Handshake } from "lucide-react"
import Unimed from "../pictures/Unimed Avare.jpeg"
import Funeraria from "../pictures/Funeraria dois irmãos.jpeg"
import Image from "next/image"

export function PartnershipsSection() {
  const partnerships = [
    {
      name: "Santa Casa da Misericórdia de Avaré",
      type: "Parceria Comercial",
      exames: ["Eletroencefalograma", "Eletrocardiograma", "Espirometria"]
    },
    {
      name: "Hospital Unimed Avaré",
      type: "Parceria Comercial",
      exames: ["Densitometria óssea"]
    },
    {
      name: "Unimed Saúde Ocupacional",
      type: "Parceria Comercial",
      exames: ["Eletroencefalograma", "Eletrocardiograma", "Espirometria"]
    },
  ]

  const accredited = [
    {
      name: "Unimed Avaré",
      logo: Unimed,
    },
    {
      name: "Funerária Dois Irmãos",
      logo: Funeraria,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Parcerias Comerciais */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Handshake className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Parcerias Comerciais</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerships.map((partner, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{partner.type}</p>
                      <h3 className="font-semibold text-lg text-balance">{partner.name}</h3>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold text-sm mb-3">Exames Disponíveis:</h4>
                    <ul className="space-y-2">
                      {partner.exames.map((exame, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{exame}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Credenciados */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Credenciados</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {accredited.map((partner, index) => (
              <Card key={index} className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center gap-6">
                    <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden bg-white p-4">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-xl text-center">{partner.name}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
