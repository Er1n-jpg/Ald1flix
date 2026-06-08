'use client'

import Link from 'next/link' 
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter() 

  return (
    <main className="flex items-center justify-center h-screen bg-black">
      {}
      <Link 
        href="/hi"
        className="font-bebas text-9xl text-center tracking-[0.20em] font-medium text-red-600 hover:scale-120 duration-300 cursor-pointer">
        ALD1FLIX 
      </Link>
      {children}
    </main>
  )
}