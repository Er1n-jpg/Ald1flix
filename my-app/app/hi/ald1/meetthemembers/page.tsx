'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image';


export default function meetmem() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  return (
    <main className = " flex flex-col bg-black font-netflix h-screen items-center justify-center"> 
        <div className = " flex-row"></div>
          <Image src  = "/PO1.png" alt = "sangwon" width = {300} height = {400}></Image>
          <div className = "flex-col"></div>
          <Image src = "/PO2.png" alt = "anxin" width = {10} height = {20}></Image>
    </main>
  )

}