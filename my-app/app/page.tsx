import Image from "next/image";
import type { Metadata } from 'next'

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-black">
      <h1 className="font-bebas text-9xl text-center tracking-[0.20em] font-medium text-red-600 hover:scale-120 duration-300">
        ALD1FLIX
      </h1>
    </main>
  );
}
