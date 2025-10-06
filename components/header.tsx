import { Button } from "@/components/ui/button"
import { Menu, Phone, Search } from "lucide-react"
import Logo from "../pictures/Grupo_Saude_Vale_Jurumirim.png"
import Image from "next/image"
import { Dialog, DialogTrigger } from "./ui/dialog"
import DialogContentContect from "./dialogContentContect"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="Logo" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://entregadeexames.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="focus:outline-none focus:ring-0 focus-visible:outline-none "
          >
            <Button className="hidden md:flex">Solicitar Resultado</Button>
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Phone className="h-4 w-4 mr-2" />
                Contato
              </Button>
            </DialogTrigger>
            <DialogContentContect/>
          </Dialog>
        </div>
      </div>
    </header>
  )
}
