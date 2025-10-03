"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function FloatingAppointmentButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <a
        href="https://entregadeexames.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="focus:outline-none focus:ring-0 focus-visible:outline-none "
      >
        <Button
          size="lg"
          className="h-12 w-35 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          Solicitar Resultado
        </Button>
      </a>
    </div>
  )
}
