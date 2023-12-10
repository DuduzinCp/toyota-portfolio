'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function MoreModal() {
  const [isOpen, setIsOpen] = useState(false)

  // Informações do Toyota Corolla (apenas como exemplo)
  const corollaInfo = {
    title: 'Toyota Corolla - 2023',
    image:
      'https://cdn.discordapp.com/attachments/1175875497687789689/1183525636082520154/COROLLA-ALTIS-PREMIUM-HYBRID-1.png?ex=6588a724&is=65763224&hm=eb19bf6cb248b914f5ee2acebd9b03b7d83708939917c7977f38e59c1bde5487&',
    description: `O design do Corolla é geralmente elegante e contemporâneo. Com linhas aerodinâmicas, o carro combina um estilo sóbrio com detalhes modernos, oferecendo uma estética atrativa tanto para motoristas urbanos quanto para aqueles que buscam um visual mais refinado.`,
    engineInfo: [
      {
        title: 'Ano',
        description: '2019/2020',
      },
      {
        title: 'KM',
        description: '00.000',
      },
      {
        title: 'Câmbio',
        description: 'Automático',
      },
      {
        title: 'Carroceria',
        description: 'Sedã',
      },
      {
        title: 'Motor',
        description: '1.8L 16V Flex.',
      },
    ],
  }

  return (
    <div className="flex flex-col">
      <button onClick={() => setIsOpen(true)} className="btn btn-sm">
        Saiba Mais
      </button>

      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex items-center justify-center"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black/50"
              onClick={() => setIsOpen(false)}
            />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Panel className="fixed m-4 max-w-3xl space-y-6 rounded-md bg-white p-4">
              <div className="flex items-center justify-between gap-6">
                <h2 className="font-bold">Mais Informações</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn btn-error btn-xs text-white"
                >
                  Fechar
                </button>
              </div>
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={corollaInfo.image}
                  alt={corollaInfo.title}
                  className="my-4 max-w-sm rounded-lg"
                />
                <div className="space-y-2">
                  <h2 className="font-bold">{corollaInfo.title}</h2>
                  <p className="text-sm">{corollaInfo.description}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {corollaInfo.engineInfo.map((engine) => (
                      <div key={engine.title}>
                        <label className="font-bold">{engine.title}</label>
                        <p className="text-sm">{engine.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="space-y-1">
                  <p className="text-xs">
                    <strong>Obs:</strong> Clique no botão para reservar a<br />
                    locação correta
                  </p>
                  <button className="btn btn-primary btn-md">
                    Reservar Agora
                  </button>
                </div>
                <div className="space-y-1">
                  <label className="text-md">Preço</label>
                  <p className="text-md font-bold">R$ 100.000,00</p>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
