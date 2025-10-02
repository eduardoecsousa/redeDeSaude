import { Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              {/* Logo no footer */}
              <div className="bg-white p-3 rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ndeimyWMlkTO5DS3JG5eSWfMvlXnYS.png"
                  alt="Grupo Saúde Vale do Jurumirim"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold">Portfólio Institucional</h4>
                <p className="text-gray-400">Grupo Saúde Vale do Jurumirim</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-justify">
              Transformamos nossa estrutura em inteligência a serviço do
              cuidado, combinando escala, especialização e proximidade para
              levar saúde de qualidade a todos os brasileiros.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Serviços Principais</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Exames Diagnósticos</li>
              <li>Gestão de Diagnóstico</li>
              <li>Implantação de Serviços</li>
              <li>Transformação Digital</li>
              <li>Medicina do Trabalho</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Contato</h5>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Agendamentos disponíveis em todas as unidades</p>
              <p>Atendimento especializado</p>
              <p>Parcerias institucionais</p>
              <p>Consultoria em saúde</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">©  2024 Grupo Saúde - Vale do Jurumirim. Todos os direitos
              reservados.</div>

            <div className="flex items-center gap-4">
              <span className="text-sm">Siga nossas redes sociais:</span>
              <div className="flex gap-3">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
