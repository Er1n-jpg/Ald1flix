'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image';



const handleBack = () => {
  window.history.back();
};

export default function aboutaldq() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  return(
    <main className = "flex-col flex bg-black font-netflix h-screen items-center justify-center">
        <h2 className = " text-white mb-20 cursor-pointer absolute top-4 right-4 text-3xl hover:underline" onClick = {handleBack}> Back </h2>
        <h1 className = "text-9xl text-red-500"> Sorry...</h1>
        <p className = "text-3xl text-red-500 mt-5"> This page is not done yet... come back later!</p>
    </main>
  )
}
