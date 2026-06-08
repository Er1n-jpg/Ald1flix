'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image';

const songDisplay = [
    {
        title: "Freak Alarm",
        caption: "1st mini album",
        img: "/euphoria.png",
        songs: [
            "Freak Alarm",
            "Chains",
            "Raw Flame",
            "Formula",
            "Cinnamon Shake",
            "Never Been 2 heaven"
        ],
        spotifyURL: "https://open.spotify.com/track/44V5j1NOwRWBV8krmLnr4J",
        appleURL: "https://music.apple.com/ca/song/freak-alarm/1863635187",
        ytmusicURL: "https://www.youtube.com/watch?v=P8VVnopM610",
        bgGradient: "bg-[linear-gradient(to_bottom,%#454545_0% ,#FFFFF_100%)]"
    },{
        title: "No School Tommorow",
        caption: "1st single album",
        img: "",
        songs: [
            "OMG!",
            "Good Life"
        ], 
        spotifyURL: "https://open.spotify.com/album/6nRIRE0BPMRd2lrixYYXjN",
        appleURL: "https://music.apple.com/us/album/no-school-tomorrow-single/6772011177",
        ytmusicURL: "https://music.youtube.com/playlist?list=OLAK5uy_lVJR2EnMXvaNzVCCc2puoFTGvC_BVNpI0",
        bgGradient: "bg-[linear-gradient(to_bottom,%#609DC8_0%, #FFFFFF_100% )]",
    }
]


function DisplayItem({
    title,
    caption,
    img,
    songs,
    spotifyURL,
    appleURL,
    ytmusicURL,
    bgGradient,
    }:{
    title: string,
    caption: string,
    img: string,
    songs: string[],
    spotifyURL: string,
    appleURL: string,
    ytmusicURL: string,
    bgGradient: string,
}) {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className = "flex justify-between align-center items-center gap-10 border-sm border-white ${bgGradient}" onClick = {() => setIsOpen(!isOpen)}>
            <img src = {img}
            className = {`h-48 w-48 object-cover flex-shrink-0 transition-all duration-500 ${isOpen ? "translate-x-0" : ""}`}></img> 
            <div className = {`align-between flex flex-col ml-5 transition-all duration-500 whitespace-nowrap ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none"}`}>
                <div>
                <h1 className = "mb-5">{title}</h1>
                <p>{caption}</p>
                <h4 className = "font-bold">Track List</h4>
                <ul>
                    {songDisplay.map((item, index) => (
                        <DisplayItem key={index}{...item}/>
                    ))}
                </ul>
            </div>

            <div className = "flex flex-col gap-3">
                <img src = "/spotify.png" className = "h-12 w-12">
                    <a href = {spotifyURL}></a>
                </img>
                <img src = "/applemusic.png" className = "h-12 w-12">
                    <a href = {appleURL}></a>
                </img>
                <img src = "/ytmusic.png" className = "h-12 w-12">
                    <a href = {ytmusicURL}></a>                
                </img>
            </div>
        </div>
        </div>
    )
}


export default function discography(){
    const router = useRouter()
    const [mounted, setMounted] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
    const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
}

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

        
           
         <div className = {`transition-all duration-500 overflow-hidden bg-white h-150 z-0 -ml-30 ${isOpen ? "opacity-100 w-300" : "opacity-0 w-0"}`}></div>
        <button className =  {`flex transition-all duration-500 -ml-20 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <Image src = "/buttonright.png" alt = "button" height = {100} width = {200} className = "w-20 h-20"></Image>
        </button>
        </div>
    </main>
    )
}

