import Image from 'next/image'

export default function NossaHistoria() {
  return (
    <div className="my-6 flex w-[90%] flex-col space-y-6 lg:space-y-20">
      <h2 className="text-3xl font-bold">Nossa História</h2>
      <section className="flex flex-col space-y-8 lg:flex-row lg:items-center lg:justify-center lg:gap-6">
        <Image
          src="/assets/images/toyota-1.png"
          alt="Toyota"
          width={500}
          height={500}
          className="flex-1 rounded-2xl brightness-50"
        />

        <div className="max-w-lg space-y-4">
          <h2 className="text-xl font-bold">A história da Toyota</h2>

          <p className="text-lg">
            Desde 1936, a Toyota se destaca oferecendo uma gama de veículos de
            alta qualidade e conforto. Nossas principais marcas incluem:
          </p>

          <ul className="list-disc space-y-2 pl-6 text-lg">
            <li>Toyota Corolla</li>
            <li>Toyota Camry</li>
            <li>Toyota Prius</li>
            <li>Toyota Rav4</li>
            <li>Toyota Camry Hybrid</li>
          </ul>
        </div>
      </section>

      <div className="h-[1px] max-w-full bg-gray-300"></div>

      <section className="mt-12 flex flex-col items-center space-y-4 lg:flex-row lg:items-center lg:gap-10">
        <div className="max-w-xl space-y-4">
          <h2 className="text-lg font-bold">
            A Toyota Corolla é uma das marcas de veículos mais vendidas em todo
            o mundo!
          </h2>

          <p>
            O Toyota Corolla é uma verdadeira lenda na indústria automotiva,
            sendo reconhecido como um dos veículos mais vendidos globalmente.
            Desde o seu lançamento em 1966, o Corolla tem sido um ícone de
            confiabilidade, eficiência e qualidade, conquistando a confiança e
            lealdade de motoristas em todo o mundo. Com um legado de mais de
            cinco décadas, o Corolla estabeleceu um padrão elevado de excelência
            automotiva. Sua reputação é construída sobre a durabilidade,
            economia de combustível e baixos custos de manutenção, o que o
            tornou uma escolha popular em muitos mercados.
          </p>
        </div>

        <Image
          src="/assets/images/toyota-2.png"
          alt="Toyota"
          width={700}
          height={700}
          className="h-80 w-full rounded-2xl brightness-50"
        />
      </section>
    </div>
  )
}
