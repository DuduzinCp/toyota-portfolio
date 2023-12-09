import Image from 'next/image'
import Logo from '../../../public/assets/svgs/logo.svg'

export default function Nav() {
  return (
    <nav className="flex items-center justify-between">
      <Image src={Logo} alt="Toyota Logo" width={50} height={50} />
      <div className="flex gap-4">
        <a
          href="#"
          className="underline-offset-0 transition-all hover:text-red-600 hover:underline hover:underline-offset-8"
        >
          Ínicio
        </a>
        <a
          href="#"
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
    </nav>
  )
}
