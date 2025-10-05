"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import {
  mamografia,
  reconaciaMag,
  densitometria,
  ultrasonografia,
  raiox,
  eletrocardiogra,
  eletroencefalograma,
  eletroneuromiografia,
  espirometria,
  audiometria,
  test_erg,
  ex_mapa,
  holter,
  ecocardiograma,
  tonal_vocal,
  imitanciometria,
  colonoscopia,
  endoscopia,
  biopsia,
  acuidadeVisual,
  clinico,
  laboratorio,
  espirometria2,
  imgAleatoria1,
  imgAleatoria2,
  grupoSaude,
  Tomografia,
  UltrassonConvencional,
  Tomografia64
} from "../pictures/importPictures"
import Image from "next/image"

const units = [
  {
    name: "Policlínica Vale do Jurumirim LTDA",
    address: "Rua Salvador de Freitas, 1316, Térreo - Centro, Itaí/SP",
    phone: "(14) 3193-0025",
    hours: "Seg-Sex: 7h às 19h | Sáb: 7h às 13h",
    image: "/modern-medical-clinic.png",
    exames: ['Tomografia Computadorizada 16 Canais', 'Eletrocardiograma', 'Eletroencefalograma', 'Mapa', 'Holter', 'Espirometria', 'Ultrassom Convencional', 'Doppler', 'Morfológico', 'Transvaginal', 'Mamografia Digital', 'Densitometria Óssea', 'Raio-X Digital', 'Audiometria', 'Acuidade Visual', 'Exames Complementares de Medicina do Trabalho', 'Exames Laboratorias'],
    examImages: [
      { url: ultrasonografia, name: "Ultrassom" },
      { url: raiox, name: "Raio-X" },
      { url: Tomografia, name: "Tomografia" },
      { url: eletrocardiogra, name: "Eletrocar" },
      { url: laboratorio, name: "Exames Laboratóriais" },
    ],
    parceria: { nome: "Santa Casa de Misericórdia de Itaí", exames: ['Colonoscopia', 'Endoscopia'] }
  },
  {
    name: "Santa Casa de Misericórdia de Taquarituba",
    address: "Rua Mal. Floriano Peixoto, 95 - Centro, Taquarituba/SP",
    phone: "(14) 3762-1700",
    hours: "Seg-Sex: 7h às 17h",
    exames: ['Densitometria óssea', 'Eletrocardiograma', 'Eletrocefalograma', 'Espirometria', 'Endoscopia', 'Colonoscopia', 'Ultrassom Convencional'],
    image: "/medical-center-entrance.jpg",
    examImages: [
      { url: espirometria, name: "Espirometria" },
      { url: UltrassonConvencional, name: "Ultrassom Convencional" },
      { url: eletrocardiogra, name: "Eletrocardiograma" },
      { url: endoscopia, name: "Endoscopia" },
    ],
  },
  {
    name: "Unidade Móvel de Saúde",
    exames: ["Audiometria", "Acuidade Visual", "Eletrocefalograma", "Eletrocardiograma", "Espirometria", "Posto de Coleta Laboratorial", "Consulta medica"],
    image: "/healthcare-facility-building.jpg",
    examImages: [
      { url: audiometria, name: "Audiometria" },
      { url: acuidadeVisual, name: "Acuidade Visual" },
      { url: eletroencefalograma, name: "Eletrocefalograma" },
      { url: laboratorio, name: "Coleta Laboratorial" },
    ],
  },
]

function ExamCarousel({ images }: { images: { url: any; name: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative group">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={images[currentIndex].url}
          alt={images[currentIndex].name}
          className="w-full h-48 object-cover transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <p className="text-white text-sm font-medium">{images[currentIndex].name}</p>
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-4 w-4 text-primary" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-1.5 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-4 w-4 text-primary" />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all ${index === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
                  }`}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export function UnitsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Unidades de Atendimento</h2>
            <p className="text-muted-foreground">Encontre a unidade mais próxima de você</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <ExamCarousel images={unit.examImages} />
              <CardHeader>
                <CardTitle className="text-xl">{unit.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {
                  unit.address ? <div className="flex items-start gap-2 text-sm">
                    <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{unit.address}</span>
                  </div> : <></>
                }
                {
                  unit.phone ?  <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{unit.phone}</span>
                </div> : <></>
                }
                {
                  unit.hours ?  <div className="flex items-start gap-2 text-sm">
                  <Clock className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{unit.hours}</span>
                </div> : <></>
                }
                <div className="pt-4 border-t">
                  <h4 className="font-semibold text-sm mb-3">Exames Disponíveis:</h4>
                  <ul className="space-y-2">
                    {unit.exames.map((exame, idx) => (
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
    </section>
  )
}
