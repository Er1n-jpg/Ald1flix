
'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect, SetStateAction } from 'react'
import Link from 'next/link'
import Image from 'next/image';

export default function aboutald1flix() {
  return (
    <div className=" bg-black grid h-screen place-items-center">
      <div className=" flex max-h-30 bg-white min-h-120 min-w-250 rounded-sm text-center flex-row justify-center items-center gap-20">
        <div className = "flex flex-col font-netflix text-left">
        <h1 className="text-7xl font-bebas"> About Ald1flix </h1>
        <p> Hi, I'm Koi! A 16 year old allyz based in canada and the developer behind Ald1flix</p>
        <p className = "mt-5"> I'm currently looking for people who would be willing to update the site!</p>
        <p> 
          click 
          <a href = "https://docs.google.com/forms/d/e/1FAIpQLScdtIwp1ryOl3oHu6TxIyu_PZUeylvc2Xw8xDEz77whpYbtpQ/viewform?usp=header" className = "hover:underline"> here </a>
          if you're interested in helping me out
        </p>
        </div>
        <div>
          <Image src = "/allyz.png" alt = "placeholder" width = {300} height = {300}></Image>
        </div>
      </div>
    </div>
  )
}
