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
        img: "/omg.png",
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

function DisplayItem({ title, caption, img, songs, spotifyURL, appleURL, ytmusicURL, bgGradient }: {
    title: string, caption: string, img: string, songs: string[],
    spotifyURL: string, appleURL: string, ytmusicURL: string, bgGradient: string,
}) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div
            className={`flex items-center overflow-hidden cursor-pointer transition-all bg-white duration-600 text-white ${isOpen ? "w-[900px] h-[500px]" : "w-90"} ${bgGradient}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <img src={img} className="h-80 w-80 object-cover flex-shrink-0" />

            <div className={`flex flex-row ml-5 transition-all duration-500 whitespace-nowrap ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none"}`}>
                <div>
                <h1 className="text-6xl mb-1">{title}</h1>
                <p className="mb-2">{caption}</p>
                <h4 className="font-bold">Track List</h4>
                <ul className="mb-3">
                    {songs.map((song, index) => (
                        <li key={index}>{song}</li>
                    ))}
                </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <a href={spotifyURL} onClick={e => e.stopPropagation()}>
                        <img src="/spotify.png" className="h-8 w-8 hover:scale-110 transition-transform" />
                    </a>
                    <a href={appleURL} onClick={e => e.stopPropagation()}>
                        <img src="/applemusic.png" className="h-8 w-8 hover:scale-110 transition-transform" />
                    </a>
                    <a href={ytmusicURL} onClick={e => e.stopPropagation()}>
                        <img src="/ytmusic.png" className="h-8 w-8 hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default function discography(){
    const router = useRouter()
    const [mounted, setMounted] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
    const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
}

    const handleLeft = () => {
        setCurrentIndex(prev => (prev - 1 + songDisplay.length) % songDisplay.length)
    }

    const handleRight = () => {
        setCurrentIndex(prev => (prev + 1) % songDisplay.length)
    }

return (
    <main className="h-screen items-center justify-center flex flex-col font-netflix bg-[linear-gradient(to_bottom,#0C0C0C_37%,#3D3D3D_100%)]">
        <h2 className="absolute top-6 left-6 text-white text-7xl">Discography</h2>
        <Link href="/hi">
            <Image src="/home.png" alt="home" height={50} width={50} className="absolute top-4 right-4" />
        </Link>

        <div className="flex flex-row items-center justify-center gap-15">
            <button onClick={handleLeft}>
                <Image src="/buttonleft.png" alt="button" className="w-20 h-20" height={100} width={200} />
            </button>

            <DisplayItem key={currentIndex} {...songDisplay[currentIndex]} />

            <button onClick={handleRight}>
                <Image src="/buttonright.png" alt="button" className="w-20 h-20" height={100} width={200} />
            </button>
        </div>
    </main>
)
    
}

