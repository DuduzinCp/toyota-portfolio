import Image from 'next/image'
import BgRetangle from '../../../public/assets/svgs/bg-retangle.svg'

export default function Main() {
  return (
    <div className="flex h-full flex-col items-center pt-6">
      <div className="relative flex h-full flex-col items-center justify-end text-center lg:-space-y-20">
        <h2 className="text-6xl font-bold text-[#220A0A] lg:text-7xl">
          Toyota Corolla <span className="text-[#FC8585]">2023</span>
        </h2>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.discordapp.com/attachments/1175875497687789689/1182862532281643038/image.png?ex=65863d94&is=6573c894&hm=9c97cc6ee1462c7a9bbc92935a0b323ef7813d2a53c47274b237fabfaee17c43&"
          alt="Toyota"
          className="w-full opacity-40 lg:static lg:z-0 lg:w-[88%] lg:opacity-100"
        />
        <div className="visible flex gap-4 lg:invisible">
          <button className="rounded-md bg-red-500 p-2 text-white transition-colors hover:bg-red-600">
            Saiba Mais
          </button>
          <button className="rounded-md border border-red-500 p-2 text-red-500 transition-colors hover:border-opacity-0 hover:bg-red-600 hover:text-white">
            Contato
          </button>
        </div>
        <div className="invisible absolute bottom-1/4 right-0 -z-10 w-[400px] lg:visible">
          <div className="relative">
            <Image
              src={BgRetangle}
              alt="retangle"
              className="absolute bottom-0 -z-10"
            />
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
  )
}
