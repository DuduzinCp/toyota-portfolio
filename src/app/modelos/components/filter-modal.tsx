'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function FilterModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsOpen(true)} className="btn-link link">
        Filtrar
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
            <div className="fixed inset-0 bg-black/50" />
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
            <Dialog.Panel className="fixed m-4 rounded-md bg-white p-4">
              <div>
                <div className="flex items-center justify-between gap-6">
                  <h2 className="font-bold">Lista de Filtros</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="btn btn-error btn-xs text-white"
                  >
                    Fechar
                  </button>
                </div>
                <div className="mt-4 flex flex-col space-y-4">
                  <div className="flex flex-col space-y-2">
                    <label>Categorias</label>
                    <select className="select select-bordered select-warning select-xs w-full max-w-xs bg-white">
                      <option selected>Todas as Categorias</option>
                      <option value="">Carros de Passeio</option>
                      <option value="">Esportivos</option>
                      <option value="">SUVs</option>
                      <option value="">Pick-ups</option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label>Modelos</label>
                    <select className="select select-bordered select-warning select-xs w-full max-w-xs bg-white">
                      <option selected>Todos os Modelos</option>
                      <option value="">Corolla</option>
                      <option value="">Etios</option>
                      <option value="">Yaris</option>
                      <option value="">Supra</option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label>Ano</label>
                    <select className="select select-bordered select-warning select-xs w-full max-w-xs bg-white">
                      <option selected>Todos os Anos</option>
                      <option value="">2022</option>
                      <option value="">2021</option>
                      <option value="">2020</option>
                      <option value="">2019</option>
                    </select>
                  </div>
                  <button className="btn btn-success btn-sm">Aplicar</button>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
