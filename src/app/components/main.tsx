import Image from 'next/image'
import BgRetangle from '../../../public/assets/svgs/bg-retangle.svg'

export default function Main() {
  return (
    <div className="flex h-full flex-col items-center pt-10">
      <div className="relative flex h-full flex-col items-center justify-start text-center lg:justify-end lg:-space-y-20">
        <div className="space-y-8 lg:-space-y-8">
          <h2 className="text-6xl font-bold text-[#220A0A] lg:text-7xl">
            Toyota Corolla <span className="text-[#FC8585]">2023</span>
          </h2>
          <div className="flex flex-col items-center space-y-4 lg:items-start lg:-space-y-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn.discordapp.com/attachments/1175875497687789689/1183005950962061392/image.png?ex=6586c325&is=65744e25&hm=01ae25c6f8d4d206cdf4dfb371ec006a14992c656ce91a48e554b437ac6d425c&"
              alt="Toyota"
              className="w-full opacity-40 lg:w-[88%] lg:opacity-100"
            />
            <div className="visible flex gap-4 lg:invisible">
              <button className="btn btn-error text-white">
                Comprar Agora
              </button>
              <button className="btn btn-primary">Saiba Mais</button>
            </div>
            <div className="invisible absolute right-0 top-0 -z-10 w-[400px] lg:visible">
              <Image src={BgRetangle} alt="retangle" />
              <div className="absolute bottom-2 right-5">
                <p className="text-left font-bold text-white">
                  Adquira o seu <strong className="text-[#FC8585]">0 KM</strong>
                  <br />
                  por 42X DE <br />
                  <strong className="text-lg text-[#771a1a]">R$ 249,90</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
