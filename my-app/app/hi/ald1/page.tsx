'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image';



export default function aboutaldq() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [showSNS, setShowSNS] = useState(false)

  return (
    <main className = "bg-black min-h-screen font-netlfix flex-col flex text-white justify-center overflow-y-hidden">
      <Link href = "/hi">
      <Image src = "/home.png" alt = "hi" width = {50} height = {50} className="absolute top-4 right-4"></Image>
      </Link>
        <div className = "flex flex-row items-center justify-center h-screen bg-black gap-30 text-center" >

      <Link href = "/hi/ald1/meetthemembers">
        <div className = "flex-collum hover:scale-110 duration-300">
          <Image src = "/meetmember.png" alt="Meet the members " width={300} height={300}></Image>
          <h1 className = "font-netflix text-4xl mt-5">Meet the members</h1>
        </div>
      </Link>

      <Link href = "/hi/ald1/discography">
        <div className = "flex-collum hover:scale-110 duration-300">
          <Image src = "/discography.png" alt = "Discography" width = {300} height = {300}></Image>
          <h1 className = "font-netflix text-4xl mt-5 ">Discography</h1>
        </div>
        </Link>

    {showSNS && (
        <Link href="/hi/ald1/SNS">
        <div className="flex-collum hover:scale-110 duration-300">
        <Image src="/SNS.png" alt="SNS" width={300} height={300}></Image>
        <h1 className="font-netflix text-4xl mt-5">SNS</h1>
          </div>
    </Link>
    )}




  </div>
      </main>
  )

  
}


