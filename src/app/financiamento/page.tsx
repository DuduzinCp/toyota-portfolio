import Image from 'next/image'
import { MdSupportAgent } from 'react-icons/md'

export default function Financiamento() {
  return (
    <div className="my-6 flex w-[90%] flex-col space-y-6 md:my-10 lg:flex-row lg:items-center lg:justify-center lg:gap-10 lg:space-y-0 lg:pt-10">
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl font-bold">
          Como funciona o financiamento toyota? 🤔
        </h2>
        <p className="text-lg">
          O financiamento da Toyota opera por meio de uma variedade de opções
          flexíveis que visam atender às necessidades individuais dos clientes.
          Os interessados em adquirir um veículo Toyota podem optar por
          financiamentos tradicionais, leasing ou consórcios, cada um com
          características específicas. No financiamento tradicional, o cliente
          realiza o pagamento mensal de uma quantia acordada, enquanto no
          leasing, ele tem a opção de usar o veículo por um período determinado,
          pagando apenas pelo tempo de uso.
        </p>
        <a href="/contato" className="btn btn-md">
          <MdSupportAgent />
          Entrar em contato
        </a>
      </div>
      <div className="hidden max-w-sm lg:block">
        <Image
          src="/assets/images/financiamento-1.png"
          alt="Toyota Logo"
          width={414}
          height={416}
          className="rounded-2xl brightness-75"
        />
      </div>
    </div>
  )
}
