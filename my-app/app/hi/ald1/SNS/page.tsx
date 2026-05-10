'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function discography(){
    const router = useRouter()
    const [mounted, setMounted] = useState(false)
    return(
    <main className = "h-screen bg-black items-center justify-center flex flex-col font-netflix bg-[linear-gradient(to_bottom,#0C0C0C_37%,#3D3D3D_100%)] ">
        <h2 className = "absolute top-6 left-6 text-white text-4xl">Discography</h2>
        <Link href = "/hi">
            <Image src = "/home.png" alt = "home" height={50} width = {50} className = "absolute top-4 right-4"></Image>
        </Link>
        <Image src = "/euphoria.png" alt = "euphoria" height = {400} width = {400}></Image>
        <div className = " bg-[linear-gradient(to_bottom,#726D6D_27%,#0C0C0C_100%)] z-1 min-h-130 min-w-250 border-white border-2 hidden"> 

        </div>
    </main>
    )
}