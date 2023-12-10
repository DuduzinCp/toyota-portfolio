import { IoLocationSharp, IoFlash } from 'react-icons/io5'
import { PiEngineFill } from 'react-icons/pi'
import MoreModal from './more-modal'

export default function CardModel() {
  return (
    <div className="flex flex-col space-y-2 rounded-md p-4 shadow-[0_0_10px_0_rgba(0,0,0,0.2)]">
      <div className="flex gap-2 text-xs text-white">
        <span className="rounded-sm bg-orange-500 p-1">Automático</span>
        <span className="rounded-sm bg-red-500 p-1">Hibrido</span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.discordapp.com/attachments/1175875497687789689/1183005950962061392/image.png?ex=6586c325&is=65744e25&hm=01ae25c6f8d4d206cdf4dfb371ec006a14992c656ce91a48e554b437ac6d425c&"
        alt="Toyota"
      />
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold">Toyota corolla 2023</h3>
        <div>
          <p className="text-xs">
            12X de <br />{' '}
            <strong className="text-sm font-bold text-gray-900">R$1800</strong>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-xs">
          <IoLocationSharp />
          <strong>0km</strong>
        </div>
        <div className="h-full w-[1px] bg-black"></div>
        <div className="flex items-center gap-1 text-xs">
          <IoFlash />
          <strong>Híbrido</strong>
        </div>
        <div className="h-full w-[1px] bg-black"></div>
        <div className="flex items-center gap-1 text-xs">
          <PiEngineFill />
          <strong>V6 automático</strong>
        </div>
      </div>
      <MoreModal />
    </div>
  )
}
