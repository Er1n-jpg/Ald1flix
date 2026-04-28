'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HomeClient() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  


  return (
    <main className="flex items-center justify-center h-screen bg-black">
      <h1
        onClick={() => router.push('/whowatching/hw.tsx')}
        className="font-bebas text-9xl text-center tracking-[0.20em] font-medium text-red-600 hover:scale-120 duration-300 cursor-pointer"
      >
        six seven
      </h1>
    </main>
  )
}