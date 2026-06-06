'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function HomeClient() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="font-netflix text-white text-7xl mb-10">
        Who's watching?
      </h1>
      <div className="flex flex-row gap-30 justify-center items-center">
      <Link href = "/inprogress">
        <div className = "flex flex-col hover:scale-110 duration-300">
          <Image src="/allyz.png" alt="description" width={300} height={300}></Image>
          <h5 className = "font-netflix text-white text-center text-4xl mt-4">Allyz</h5>
        </div>
      </Link>
      <Link href = "/hi/ald1">
        <div className = "flex flex-col hover:scale-110 duration-300">
        <Image src="/ald2.png" alt="Alpha drive one" width={300} height={300}></Image>
          <h5 className = "font-netflix text-white text-center text-4xl mt-4">Alpha Drive One</h5>
        </div>
      </Link>
      
      <Link href = "/hi/ald1flixq">
        <div className = "flex flex-col hover:scale-110 duration-300 ">
          <Image src = "/ald1flix.png" alt = "ALD1FLIX" width = {300} height = {300}></Image>
            <h5 className = "font-netflix text-white text-center text-4xl mt-4">ALD1FLIX</h5>
        </div>
      </Link>
      </div>
    </main>
  )
}