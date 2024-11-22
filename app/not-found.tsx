'use client'
import Link from 'next/link'
import { radjhani } from './fonts/fonts'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <div className="absolute w-full h-full flex justify-center items-center -z-10">
        <Image
          src={'/sortie-de-route.png'}
          alt={'image de trace de pneu'}
          width={2000}
          height={2000}
          className="aspect-square h-full object-fill"
          priority={true}
        />
      </div>
      <div
        className={`flex items-center justify-center gap-20 text-[300px] ${radjhani.className}`}
      >
        <p>4</p>
        <p>0</p>
        <p>4</p>
      </div>
      <p className="text-3xl">🚨 Oups vous avez fait une sortie de route 🚨</p>
      <Link
        href="/"
        className="px-10 py-5 bg-garage-red hover:bg-garage-red-hover text-white rounded-2xl text-xl font-semibold mt-5 cursor-pointer"
      >
        Retour sur la piste ...
      </Link>
    </div>
  )
}
