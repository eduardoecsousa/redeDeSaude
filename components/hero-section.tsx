import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"
import cuidadoERespeito from "../pictures/CUIDADO-E-RESPEITO-COM-CADA-PACIENTE.jpg"
import Apresentacao from "../pictures/APRESENTAÇÃO2.jpg"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
      {/* Organic shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-secondary/25 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium ">
              Grupo Saúde - Vale do Jurumirim
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ">
              Sua saúde merece atenção de especialistas!
            </h1>

            <p className="text-lg md:text-xl text-white/90 ">
              Atendimento eficiente e humanizado com os melhores profissionais da região
            </p>
          </div>

          <div className="relative">
            <Image src={Apresentacao} alt="cuidado e respeito" className="rounded-md"/>
          </div>
        </div>
      </div>
    </section>
  )
}
