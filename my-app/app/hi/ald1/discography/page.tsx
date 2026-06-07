'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function discography(){
    const router = useRouter()
    const [mounted, setMounted] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    return(
    <main className = "h-screen bg-black items-center justify-center flex flex-col font-netflix bg-[linear-gradient(to_bottom,#0C0C0C_37%,#3D3D3D_100%)] ">
        <h2 className = "absolute top-6 left-6 text-white text-4xl">Discography</h2>
        <Link href = "/hi">
            <Image src = "/home.png" alt = "home" height={50} width = {50} className = "absolute top-4 right-4"></Image>
        </Link>
            <div className = "flex flex-row items-center justify-center gap-15 -ml-5">
            <button className = {`flex transition-all duration-500 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`} >
                <Image src = "/buttonleft.png" alt = "button" height ={100} width = {200} className ="w-20 h-20"></Image>
            </button>
           
        <div className={`transition-all duration-500 z-1 ${isOpen ? "-translate-x-50" : "translate-x-0"}`}  onClick={() => setIsOpen(!isOpen)} >
            <Image src="/euphoria.png" alt="euphoria" height={400} width={400} />
        </div>
         <div className = {`transition-all duration-500 overflow-hidden bg-white h-150 z-0 -ml-30 ${isOpen ? "opacity-100 w-300" : "opacity-0 w-0"}`}></div>
        <button className =  {`flex transition-all duration-500 -ml-20 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <Image src = "/buttonright.png" alt = "button" height = {100} width = {200} className = "w-20 h-20"></Image>
        </button>
        </div>
    </main>
    )
}