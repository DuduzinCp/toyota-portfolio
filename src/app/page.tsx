import Image from 'next/image'
import Nav from './components/nav'
import Main from './components/main'

export default function Home() {
  return (
    <div className="relative flex h-screen flex-col items-center overflow-hidden pt-4">
      <div className="h-full w-[90%]">
        <Nav />
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
