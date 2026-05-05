'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect, SetStateAction } from 'react'
import Link from 'next/link'
import Image from 'next/image';


export default function meetmem(){
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)


  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
}



  return (
    <main className = " flex flex-col bg-black font-netflix h-screen items-center justify-center">
    <Link href = "/hi">
    <Image src = "/home.png" alt = "home" height={50} width = {50} className = "absolute top-4 right-4"></Image>
    </Link>

    <h1 className = "absolute top-4 left-4 text-white font-netflix text-5xl font-thin"> Meet the members</h1>
        <div className = " flex flex-row mb-20 gap-5 ">
          <Image src  = "/PO1.png" alt = "sangwon" width = {250} height = {350} className = "hover:scale-110 duration-300 cursor-pointer" onClick ={() => handleClick(0)}></Image>
          <div className = {` overflow-hidden transition-all duration-300 ease-in-out bg-orange-50 text-white flex flex-col rounded-lg h-12 w-0 ${expandedIndex === 0 ? 'w-96' : 'w-0'}` }></div>
        <Image src = "/PO2.png" alt = "anxin" width = {300} height = {350} className = " cursor-pointer hover:scale-110 duration-300 " onClick = {() => handleClick(1)}></Image>
          <div className = {` overflow-hidden transition-all duration-300 ease-in-out bg-orange-50 text-white flex flex-col rounded-lg h-12 w-0 ${expandedIndex === 1 ? 'w-96' : 'w-0'}`}></div>
        <Image src = "/PO3.png" alt = "xinlong" width = {300} height = {350} className = "hover:scale-110 duration-300" onClick = {() => handleClick(2)}></Image>
          <div className = {` overflow-hidden transition-all duration-300 ease-in-out bg-orange-50 text-white flex flex-col rounded-lg h-12 w-0 ${expandedIndex ===2? 'w-96' : 'w-0'}`}></div>
        <Image src = "/PO4.png" alt = "geonwoo" width = {300} height = {350} className = "hover:scale-110 duration-300"></Image>
          <div className = "flex flex-col"></div>
      </div>
      <div className = "flex flex-row gap-5 -ml-6">
        <Image src = "/PO5.png" alt = "arno" width = {300} height = {350} className = "hover:scale-110 duration-300"></Image>
          <div className = "flex flex-col"></div>
        <Image src = "/PO6.png" alt = "LEOOOOO <3" width = {300} height = {350} className = "hover:scale-110 duration-300"></Image>
          <div className = "flex flex-col"></div>
        <Image src = "/PO7.png" alt = "Sanghyeon" width= {300} height = {350} className = "hover:scale-110 duration-300"></Image>
          <div className = "flex flex-col"></div>
        <Image src = "/PO8.png" alt = "junseo" width = {300} height = {350} className = "hover:scale-110 duration-300"></Image> 
          <div className = "flex flex-col"></div>
      </div>
    </main>
  )

}