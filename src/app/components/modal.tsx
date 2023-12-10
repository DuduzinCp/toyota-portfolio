'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="static lg:hidden">
      <label
        onClick={() => setIsOpen(true)}
        className="btn btn-circle swap swap-rotate border-white bg-white text-red-500 hover:border-white hover:bg-white"
      >
        <input type="checkbox" checked={isOpen} readOnly />

        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 overflow-hidden"
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
            enter="transform transition duration-300 ease-in-out"
            enterFrom="-translate-y-full"
            enterTo="translate-y-0"
            leave="transform transition duration-300 ease-in-out"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"
          >
            <Dialog.Panel className="fixed left-0 top-0 flex w-full flex-col justify-center bg-white/80 p-4 outline-none">
              <label
                onClick={() => setIsOpen(false)}
                className="btn btn-circle swap swap-rotate self-end border-white bg-white text-red-500 hover:border-white hover:bg-white"
              >
                <input type="checkbox" checked={isOpen} readOnly />

                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
              <div className="flex flex-col items-center gap-6 text-center">
                <a
                  href="/"
                  className="underline-offset-0 transition-all hover:text-red-600 hover:underline hover:underline-offset-8"
                >
                  Ínicio
                </a>
                <a
                  href="/modelos"
                  className="underline-offset-0 transition-all hover:text-red-600 hover:underline hover:underline-offset-8"
                >
                  Modelos
                </a>
                <a
                  href="/financiamento"
                  className="underline-offset-0 transition-all hover:text-red-600 hover:underline hover:underline-offset-8"
                >
                  Financiamento
                </a>
                <a
                  href="/nossa-historia"
                  className="underline-offset-0 transition-all hover:text-red-600 hover:underline hover:underline-offset-8"
                >
                  Nossa História
                </a>
                <a
                  href="/contato"
                  className="underline-offset-0 transition-all hover:text-red-600 hover:underline hover:underline-offset-8"
                >
                  Contato
                </a>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
