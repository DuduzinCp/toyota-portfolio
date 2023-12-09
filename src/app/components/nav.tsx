import Image from 'next/image'
import Logo from '../../../public/assets/svgs/logo.svg'
import Modal from './modal'

export default function Nav() {
  return (
    <nav className="flex items-center justify-between pt-4">
      <Image src={Logo} alt="Toyota Logo" width={50} height={50} />
      <div className="hidden gap-4 lg:flex">
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
          href="#"
          className="underline-offset-0 transition-all hover:text-red-600 hover:underline hover:underline-offset-8"
        >
          Financiamento
        </a>
        <a
          href="#"
          className="underline-offset-0 transition-all hover:text-red-600 hover:underline hover:underline-offset-8"
        >
          Sobre Nós
        </a>
        <a
          href="#"
          className="underline-offset-0 transition-all hover:text-red-600 hover:underline hover:underline-offset-8"
        >
          Contato
        </a>
      </div>

      <Modal />
    </nav>
  )
}
