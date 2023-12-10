import Image from 'next/image'

export default function Contato() {
  return (
    <div className="my-6 flex w-[90%] flex-col space-y-6 pl-[5%] lg:mt-10 lg:w-[100%] lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
      <div className="max-w-xl space-y-2">
        <h2 className="text-2xl font-bold lg:text-3xl">
          Entre em contato conosco e agende um orçamento
        </h2>
        <p>
          Entre em contato e marque uma visita para realizar um orçamento e
          definir a melhor forma de alcançar seu sonho!
        </p>
        <form className="flex flex-col gap-4 text-white">
          <input
            type="text"
            placeholder="Nome"
            className="input input-bordered input-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-md"
          />
          <input
            type="number"
            placeholder="Telefone (XX) XXXXX-XXXX"
            className="input input-bordered input-md"
          />
          <textarea
            placeholder="Mensagem"
            className="input input-bordered input-md"
          />
          <button type="submit" className="btn btn-error">
            Enviar
          </button>
        </form>
      </div>
      <div className="hidden flex-1 lg:flex lg:justify-end">
        <Image
          src="/assets/images/contato-1.png"
          alt="Contato"
          width={778}
          height={655}
          className="max-w-md"
        />
      </div>
    </div>
  )
}
