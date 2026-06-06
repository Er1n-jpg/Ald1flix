import {useState, useEffect} from "react";
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  "https://pxsziiptruxpbufqpodz.supabase.co",
  "sb_publishable_wjp-J-diOQaFASLUSASnDQ_oI1DnZBS"
)

type Item = {
  title: string;
  caption: string;
  image: string;
  date: string;
  
}

function ContentItems({
  title,
  caption,
  image,
  date,
  isDuplicate
} : {
  title: string;
  caption: string;
  image: string;
  date: string;
  isDuplicate ?: boolean;
}) {
  return (
    <div
    className = "content-card" aria-hidden = {isDuplicate ? "true" : undefined}
    > 
    <div 
      style={{ backgroundImage: `url(${item.image})` }}
      className="bg-cover bg-center h-25 w-50 bg-white group relative"></div>
      <div>
        <div className = "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition">
          <div className = "flex flex-col items-start">
            <h1>{title}</h1>
            <h2>{caption}</h2>
            <h3> {date}</h3>

          </div>
        </div>
      </div>
    </div>
  );
}

function Irows({ items, label }: {items: Item[]; label: string}){
  const iItems = []
}

export default function MainPage() {
  return ( 
  );
}