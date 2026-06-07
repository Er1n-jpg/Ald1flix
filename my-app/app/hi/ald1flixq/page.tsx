
'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect, SetStateAction } from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function aboutald1flix() {
  return (
    

      <div className = "flex flex-row items-center justify-center h-screen bg-black text-center" >
          <Link href = "/hi">
    <Image src = "/home.png" alt = "hi" width = {50} height = {50} className="absolute top-4 right-4"></Image>
    </Link>
      <div className=" flex max-h-30 bg-white min-h-130 min-w-280 rounded-xl text-center flex-row items-center justify-center  gap-15">
        <div className = "flex flex-col font-netflix text-left">
        <h1 className="text-7xl font-bebas tracking-wider"> About Ald1flix </h1>
        <div className = "text-lg">
        <p> Hi, I'm Koi! A 16 year old allyz based in Canada and the developer behind Ald1flix</p>
        <p className = "mt-5"> I'm currently looking for people who would be willing to update the site!</p>
        <p> 
          click 
          <a href = "https://docs.google.com/forms/d/e/1FAIpQLScdtIwp1ryOl3oHu6TxIyu_PZUeylvc2Xw8xDEz77whpYbtpQ/viewform?usp=header" className = "hover:underline font-bold"> here </a>
          if you're interested in helping me out
        </p>
            </div>
           </div>
        <div>
          <Image src = "/allyz.png" alt = "placeholder" width = {300} height = {300}></Image>
        </div>
      </div>
    </div>

  )
}
