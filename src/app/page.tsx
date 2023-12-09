import Image from 'next/image'
import Main from './components/main'

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center pt-4">
      <div className="flex w-[90%] justify-center">
        <Main />
      </div>
      <Image
        src="/assets/images/bg-decoration.png"
        alt="Toyota Logo"
        width={785}
        height={165}
        className="absolute left-0 top-0 -z-20 opacity-60"
      />
    </div>
  )
}
