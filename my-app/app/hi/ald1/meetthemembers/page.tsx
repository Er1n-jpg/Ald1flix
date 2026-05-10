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
  const[expandedIndexBottom, setExpandedIndexBottom] = useState<number| null>(null)

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)

}

const handleClickBottom = (index: number) => {
  setExpandedIndexBottom(expandedIndexBottom == index ? null : index)
}



  return (
    <main className = "flex flex-col bg-black font-netflix h-screen items-center justify-center">
    <Link href = "/hi">
    <Image src = "/home.png" alt = "home" height={50} width = {50} className = "absolute top-4 right-4"></Image>
    </Link>

    <h1 className = "absolute top-6 left-6 text-white font-netflix text-5xl font-thin "> Meet the members</h1>
    <div className = " flex flex-row mb-20 gap-5 ">
  <div className={`flex items-center transition-all duration-500 ${expandedIndex !== null && expandedIndex !== 0 ? 'hidden' : 'flex'}`}>
     <Image src="/PO1.png" onClick={() => handleClick(0)} className="cursor-pointer hover:scale-110 duration-300 z-1" width= {expandedIndex === 0 ? 270: 270} height={350} alt="sangwon"/>
     <div className={`overflow-hidden bg-orange-50 transition-all duration-500 rounded-xl z-0 ${expandedIndex === 0 ? 'w-260 p-5 h-60' : 'w-0 h-60'}`}>
        <h1 className = " text-5xl"> Lee Sangwon (이상원)</h1>
        <p className = "font-netflix mt-2 text-xl">Stage Name: Sangwon <br />Birthday: May 8 2003 <br/>Height: 177cm <br/>MBTI: INFP <br/>Position: Center, Lead Dancer </p>
     </div>
  </div>
<div className={`flex items-center transition-all duration-500 ${expandedIndex !== null && expandedIndex !== 1 ? 'hidden' : 'flex'}`}>
     <Image src="/PO2.png" onClick={() => handleClick(1)}  className="cursor-pointer transition-all hover:scale-110 duration-300" width={expandedIndex === 0 ? 300: 300} height={350} alt="anxin" />
     <div className={`overflow-hidden bg-orange-50 transition-all duration-500 ${expandedIndex === 1 ? 'w-250 p-5 h-60' : 'w-0 h-60 '}`}>
        <h1 className = "text-5xl"> Zhou Anxin (주안신)(周安信)</h1>
          <div className = "flex justify-between text-xl mt-2">
            <span>Stage Name: Anxin</span>
            <span className = "mr-30">Nationality: Chinese</span>
          </div>
        <p className = "font-netflix text-xl">Birthday: December 26, 2006 <br/>Height: 178cm <br/>MBTI: ISTP <br/>Position: Main Vocalist</p>
     </div>
  </div>
<div className={`flex items-center transition-all duration-500 ${expandedIndex !== null && expandedIndex !== 2 ? 'hidden' : 'flex'}`}>
      <Image src="/PO3.png" onClick={() => handleClick(2)}  className="cursor-pointer transition-all hover:scale-110 duration-300" width={expandedIndex === 0 ? 300: 300} height={350} alt="xinlong" />
          <div className={`overflow-hidden bg-orange-50 transition-all duration-500 ${expandedIndex === 2 ? 'w-260 p-5 h-60' : 'w-0 h-60 '}`}>
            <h1 className = "text-5xl"> He Xinlong (하흠룡)(贺鑫隆)</h1>
              <div className = "flex justify-between text-xl mt-2">
              <span>Stage Name: Xinlong</span>
            <span className = "mr-30">Nationality: Chinese</span>
            </div>
            <p className = "text-xl">Birthday: March 11, 2005 <br/>Height: 177cm <br/>MBTI: INFJ <br/>Position: Main Rapper</p>
          </div>
</div>


<div className = {`flex items-center transition-all duration-500 ${expandedIndex !== null && expandedIndex !== 3? 'hidden' : 'flex'}`}>
        <Image src = "/PO4.png" alt = "geonwoo" width = {expandedIndex === 3 ? 310: 310} height = {350} className = "hover:scale-110 duration-300" onClick = {() => handleClick(3)}></Image>
          <div className = {`overflow-hidden bg-orange-50 transition-all duration-500 ${expandedIndex === 3 ? 'w-250 p-5 h-60' : 'w-0 h-60'}`}> 
            <h1 className = "text-5xl">Kim Geonwoo (김건우) </h1>
              <div className = "flex justify-between text-xl mt-2">
                <span>Stage Name: Geonwoo</span>
                <span className = "mr-30">Nationality: Korean</span>
              </div>
              <p className = "text-xl">Birthday:April 11, 2003 <br/>Height: 184cm <br/>MBTI: ESTJ <br/>Position: Main Vocalist</p>
            </div>
  </div>
</div>
      <div className = "flex flex-row gap-5 -ml-6">
        <div className={`flex items-center transition-all duration-500 ${expandedIndexBottom !== null && expandedIndexBottom !== 0 ? 'hidden' : 'flex'}`}>
        <Image src = "/PO5.png" alt = "arno" width = {expandedIndexBottom === 0 ? 310 : 310} height = {350} className = "hover:scale-110 duration-300" onClick = {() => handleClickBottom(0)}></Image>
        <div className = {`overflow-hidden bg-orange-50 transition-all duration-500 rounded-xl ${expandedIndexBottom === 0 ? 'w-250 p-5 h-60' : 'w-0 h-60'}`}>
          <h1 className = "text-5xl">  Zhang Jiahao (张家豪)(장가호) </h1>
          <div className = "flex justify-between text-xl mt-2">
            <span> Stage Name: Arno</span>
            <span className = "mr-30">Nationality: Chinese </span>
          </div>
            <p className = "text-xl">Birthday:July 7, 2002 <br/>Height: 178cm <br/>MBTI: ISTJ <br/>Position: Main Dancer</p>
        </div>
      </div>

        <div className={`flex items-center transition-all duration-500 ${expandedIndexBottom !== null && expandedIndexBottom !== 1 ? 'hidden' : 'flex'}`}>
        <Image src = "/PO6.png" alt = "Leo" width = {expandedIndexBottom === 0 ? 310 : 310} height = {350} className = "hover:scale-110 duration-300" onClick = {() => handleClickBottom(1)}></Image>
        <div className = {`overflow-hidden bg-orange-50 transition-all duration-500 rounded-xl ${expandedIndexBottom === 1 ? 'w-250 p-5 h-60' : 'w-0 h-60'}`}>
          <h1 className = "text-5xl">  Lee Leo (이리오) </h1>
          <div className = "flex justify-between text-xl mt-2">
            <span> Stage Name: Leo</span>
            <span className = "mr-30">Nationality: Korean/Australian</span>
          </div>
            <p className = "text-xl">Birthday:August 22, 2002 <br/>Height: 179cm <br/>MBTI: INTP <br/>Position: Leader, Main Vocalist</p>
        </div>
      </div>

        <div className={`flex items-center transition-all duration-500 ${expandedIndexBottom !== null && expandedIndexBottom !== 1 ? 'hidden' : 'flex'}`}>
        <Image src = "/PO7.png" alt = "Sanghyeon" width = {expandedIndexBottom === 0 ? 310 : 310} height = {350} className = "hover:scale-110 duration-300" onClick = {() => handleClickBottom(1)}></Image>
        <div className = {`overflow-hidden bg-orange-50 transition-all duration-500 rounded-xl ${expandedIndexBottom === 1 ? 'w-250 p-5 h-60' : 'w-0 h-60'}`}>
          <h1 className = "text-5xl">  Lee Leo (이리오) </h1>
          <div className = "flex justify-between text-xl mt-2">
            <span> Stage Name: Leo</span>
            <span className = "mr-30">Nationality: Korean/Australian</span>
          </div>
            <p className = "text-xl">Birthday:August 22, 2002 <br/>Height: 179cm <br/>MBTI: INTP <br/>Position: Leader, Main Vocalist</p>
        </div>
      </div>

        <Image src = "/PO8.png" alt = "junseo" width = {300} height = {350} className = "hover:scale-110 duration-300"></Image> 
          <div className = "flex flex-col"></div>
      </div>
    </main>
  )
}