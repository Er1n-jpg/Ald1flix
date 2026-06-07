"use client"

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://pxsziiptruxpbufqpodz.supabase.co",
  "sb_publishable_wjp-J-diOQaFASLUSASnDQ_oI1DnZBS"
);

type Item = {
  type: string;
  title: string;
  caption: string;
  image: string;
  date: string;
};

function ContentItems({
  title,
  caption,
  image,
  date,
  isDuplicate,
}: {
  title: string;
  caption: string;
  image: string;
  date: string;
  isDuplicate?: boolean;
}) {
  return (
    <div className="content-card" aria-hidden={isDuplicate ? "true" : undefined}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bg-cover bg-center h-25 w-50 bg-white group relative"
      />
      <div>
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition">
          <div className="flex flex-col items-start">
            <h1>{title}</h1>
            <h2>{caption}</h2>
            <h3>{date}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

function Irows({ items, label }: { items: Item[]; label: string }) {
  const iItems = [...items, ...items];

  return (
    <section className="row-section">
      <h2 className="row-label">{label}</h2>
      <div className="row-wrapper">
        <div className="row-track">
          {iItems.map((item, index) => (
            <ContentItems
              key={`${label}-${index}`}
              title={item.title}
              image={item.image}
              date={item.date}
              caption={item.caption}
              isDuplicate={index >= items.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MainPage() {
  const [varietyItems, setVarietyItems] = useState<Item[]>([]);
  const [tvItems, setTvItems] = useState<Item[]>([]);
  const [liveItems, setLiveItems] = useState<Item[]>([]);
  const [moreItems, setMoreItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function fetchItems() {
  const { data, error } = await supabase.from("items").select("*");
  const items = (data ?? []) as Item[];

    console.log("data:", data);
    console.log("error:", error);

      if(data){

      setVarietyItems(items.filter((item) => item.type === "variety"));
      setTvItems(items.filter((item) => item.type === "tv"));
      setLiveItems(items.filter((item) => item.type === "live"));
      setMoreItems(items.filter((item) => item.type === "more"));
      }
      setLoading(false);
    }

    const subscription = supabase
    .channel("items-channel")
    .on(
      "postgres_changes",
      {event: "*", schema: "public", table: "items"},
      () => fetchItems()
    )
    .subscribe()

    fetchItems();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if(loading){
    return(
      <div className = "h-screen bg-black flex flex-col items-center justify-center">
        <p className = "text-white"> Loading </p>
      </div>
    )
  }

  return (
    <div className = "h-screen bg-black flex flex-col overflow-y-auto overflow-x-hidden">
      <h1 className = "font-netflix text-3xl text-white p-6"></h1>
      {/* Each row gets its own category array */}
      <Irows items={varietyItems} label="Variety" />
      <Irows items={tvItems} label="TV" />
      <Irows items={liveItems} label="Live" />
      <Irows items={moreItems} label="More" />
    </div>
  );
}