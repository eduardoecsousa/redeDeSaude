
import React from 'react'
import { DialogClose, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Calendar, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from 'antd'

function DialogContentContect() {
  return (
    <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="flex items-center text-xl text-blue-900">
                      <Phone className="h-5 w-5 mr-2" />
                      Entre em Contato
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    {/* Logo no modal */}
                    <div className="text-center">
                      <div className="inline-block bg-blue-50 p-4 rounded-lg mb-4">
                        <img
                          src="/images/logo-grupo-saude-completo.png"
                          alt="Grupo Saúde Vale do Jurumirim"
                          className="h-20 w-auto object-contain mx-auto"
                        />
                      </div>
                    </div>

                    {/* Informações de contato */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                        <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Telefone</p>
                          <p className="text-blue-600 font-medium">
                            (14) 3193-0025
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                        <MapPin className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-900">
                            Endereço Principal
                          </p>
                          <p className="text-gray-600 text-sm">
                            Rua Salvador de Freitas, 1316, Térreo
                            <br />
                            Centro - Itaí/SP
                            <br />
                            CEP 18730-027
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                        <Calendar className="h-5 w-5 text-purple-600 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">
                            Horário de Atendimento
                          </p>
                          <p className="text-gray-600 text-sm">
                            Segunda a Sexta: 7h às 17h
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                        <Mail className="h-5 w-5 text-orange-600 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">
                            Agendamentos
                          </p>
                          <p className="text-gray-600 text-sm">
                            Disponível em todas as unidades
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Botões de ação */}
                    <div className="flex flex-col sm:flex-row gap-2 pt-4">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        <Phone className="h-4 w-4 mr-2" />
                        Ligar Agora
                      </Button>
                      <Button className="flex-1 bg-transparent">
                        <MapPin className="h-4 w-4 mr-2" />
                        Ver Localização
                      </Button>
                      <DialogClose asChild>
                        <Button
                          className="flex-1 bg-gray-200 text-gray-700"
                        >
                          Voltar
                        </Button>
                      </DialogClose>
                    </div>

                    <div className="text-center pt-2">
                      <p className="text-sm text-gray-500">
                        Nossa equipe está preparada para acolher sua necessidade
                        com eficiência, empatia e segurança.
                      </p>
                    </div>
                  </div>
                </DialogContent>
  )
}

export default DialogContentContect