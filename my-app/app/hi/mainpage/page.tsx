"use client"

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://pxsziiptruxpbufqpodz.supabase.co",
  "sb_publishable_wjp-J-diOQaFASLUSASnDQ_oI1DnZBS"
);

type Item = {
  URL: string;
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
  URL,
  isDuplicate,
}: {
  title: string;
  caption: string;
  image: string;
  date: string;
  URL: string;
  isDuplicate?: boolean;
}) {
  return (
  <a href={URL} target="_blank" rel="noopener noreferrer">
    <div className="relative flex-shrink-0 w-69 h-40 cursor-pointer group rounded-xl" aria-hidden={isDuplicate ? "true" : undefined}>
      <img src={image} className="w-full h-full object-cover rounded-2xl" />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2">
        <h1 className="text-white text-lg font-bold font-netflix">{title}</h1>
        <h2 className="text-white/70 text-xs">{caption}</h2>
        <h3 className="text-white/50 text-xs">{date}</h3>
      </div>
    </div>
  </a>
  );
}

function Irows({ items, label, id }: { items: Item[]; label: string; id?: string }) {
  return (
    <section id={id} className="mb-6 relative z-10">
      <h2 className="text-white text-3xl px-6 mb-2 font-netflix">{label}</h2>
      <div className="overflow-hidden">
      <div className="flex gap-3 px-6 overflow-x-auto hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {items.map((item, index) => (
            <ContentItems
              key={`${label}-${index}`}
              title={item.title}
              image={item.image}
              date={item.date}
              URL={item.URL}
              caption={item.caption}
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
  const [form, setForm] = useState({ type: '', title: '', caption: '', image: '', date: '', URL: '' });
  const [showForm, setShowForm] = useState(false);
  const [toast, setToast] = useState('');
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  const handleAdd = async () => {
    const { data, error } = await supabase.from('items').insert([form]).select();
    if (error) {
      setToast('Failed to add item :(');
    } else {
      setToast('Item added! Thanks for contributing Allyz, Fighting!');
      setForm({ type: '', title: '', caption: '', image: '', date: '', URL: '' });
      const { data: fresh } = await supabase.from('items').select('*');
      const items = (fresh ?? []) as Item[];
      setVarietyItems(items.filter(i => i.type === 'variety'));
      setTvItems(items.filter(i => i.type === 'tv'));
      setLiveItems(items.filter(i => i.type === 'live'));
      setMoreItems(items.filter(i => i.type === 'more'));
    }
    setTimeout(() => setToast(''), 3000);
  };

  const filtered = (items: Item[]) =>
    items
      .filter(i =>
        i.title.toLowerCase().includes(search.toLowerCase()) ||
        i.caption.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) =>
        sortOrder === 'newest'
          ? new Date(b.date).getTime() - new Date(a.date).getTime()
          : new Date(a.date).getTime() - new Date(b.date).getTime()
      );

  useEffect(() => {
    async function fetchItems() {
      const { data, error } = await supabase.from("items").select("*");
      const items = (data ?? []) as Item[];
      console.log("data:", data);
      console.log("error:", error);
      if (data) {
        setVarietyItems(items.filter((item) => item.type === "variety"));
        setTvItems(items.filter((item) => item.type === "tv"));
        setLiveItems(items.filter((item) => item.type === "live"));
        setMoreItems(items.filter((item) => item.type === "more"));
      }
      setLoading(false);
    }

    const subscription = supabase
      .channel("items-channel")
      .on("postgres_changes", { event: "*", schema: "public", table: "items" }, () => fetchItems())
      .subscribe();

    fetchItems();
    return () => { subscription.unsubscribe(); };
  }, []);

  if (loading) {
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center">
        <p className="text-white">Loading</p>
      </div>
    );
  }

  return (
    <div className="h-full bg-black flex flex-col overflow-y-auto overflow-x-hidden text-white">
      <div className="relative h-140 bg-center bg-[length:100%] flex flex-col z-0 font-netflix" style={{ backgroundImage: "url('/header.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />


        <div className="flex flex-row mt-5 font-netflix justify-between ml-5">
          <a href="/hi">
            <h1 className="font-bebas text-6xl text-red-500 tracking-wider">ALD1FLIX</h1>
          </a>
          <div className="flex flex-row gap-8 font-netflix text-xl mr-5 items-center">
            <a href="#variety"><h3 className="hover:text-white/60 cursor-pointer">Variety</h3></a>
            <a href="#tv"><h3 className="hover:text-white/60 cursor-pointer">TV</h3></a>
            <a href="#live"><h3 className="hover:text-white/60 cursor-pointer">Live</h3></a>
            <a href="#more"><h3 className="hover:text-white/60 cursor-pointer">More</h3></a>
          </div>
        </div>

        <div className="justify-between flex-row flex">
          <div className="flex flex-row ml-5 items-end mt-10 z-10">
            <h1 className="font-bebas mr-3 text-6xl text-red-500 z-10">A</h1>
            <h2 className="font-netflix tracking-widest text-xl mb-2 z-10">Series</h2>
          </div>
          <div className="relative mx-6 mt-4 z-10">
            <input
              placeholder="Search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-80 bg-zinc-800 text-white p-2 pl-4 rounded-full border border-white/20 placeholder:text-white/40 outline-none focus:border-white/50"
            />
          </div>
        </div>

        {/* Hero content */}
        <img src="/euphoriat.png" className="w-160 -mt-5 z-10 -ml-3" />
        <h3 className="ml-6 tracking-wider text-xl z-10">Jan 5, 2026</h3>
        <h3 className="text-xl ml-6 w-120 z-10">Alpha Drive One's debut album. Tracklist: Formula, Freak alarm, Raw Flame, Chains, Never Been 2 Heaven, Cinnamon Shake</h3>
        <a href="https://www.youtube.com/watch?v=P8VVnopM610&list=RDP8VVnopM610&start_radio=1" target="_blank" rel="noopener noreferrer" className="z-10">
          <button className="ml-2 flex items-center gap-2 w-40 text-black px-4 py-2 rounded-lg font-bold z-10 mt-2 hover:scale-110 duration-300">
            <img src="/playbutton.png" className="w-52" />
          </button>
        </a>
      </div>

      {/* Sort button */}
      <button onClick={() => setSortOrder(s => s === 'newest' ? 'oldest' : 'newest')} className="text-white/60 text-sm px-4 mt-2 text-left">
        {sortOrder === 'newest' ? 'Newest first' : 'Oldest first'}
      </button>

      <Irows items={filtered(varietyItems)} label="Variety" id="variety" />
      <Irows items={filtered(tvItems)} label="TV" id="tv" />
      <Irows items={filtered(liveItems)} label="Live" id="live" />
      <Irows items={filtered(moreItems)} label="More" id="more" />

      <div className="mb-30"></div>

      {/* Add button */}
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 bg-white text-black rounded-full w-12 h-12 text-2xl font-bold shadow-lg hover:scale-110 transition-transform z-50"
      >
        +
      </button>

      {toast && (
        <div className="fixed bottom-20 right-6 bg-zinc-800 text-white px-4 py-2 rounded-lg border border-white/20 z-50">
          {toast}
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setShowForm(false)}>
          <div className="bg-zinc-900 p-6 rounded-xl flex flex-col gap-3 w-96 border border-white/20" onClick={e => e.stopPropagation()}>
            <h2 className="text-white text-xl font-bold mb-2">Add New Item</h2>

            {form.image && (
              <img src={form.image} className="w-full h-32 object-cover rounded border border-white/20" />
            )}

            <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="bg-zinc-800 text-white p-2 rounded border border-white/20">
              <option value="">Select type...</option>
              <option value="variety">Variety</option>
              <option value="tv">TV</option>
              <option value="live">Live</option>
              <option value="more">More</option>
            </select>

            <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="bg-zinc-800 text-white p-2 rounded border border-white/20 placeholder:text-white/40" />
            <input placeholder="Caption" value={form.caption} onChange={e => setForm({ ...form, caption: e.target.value })} className="bg-zinc-800 text-white p-2 rounded border border-white/20 placeholder:text-white/40" />
            <input placeholder="Image URL" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} className="bg-zinc-800 text-white p-2 rounded border border-white/20 placeholder:text-white/40" />
            <input placeholder="Date (YYYY-MM-DD)" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="bg-zinc-800 text-white p-2 rounded border border-white/20 placeholder:text-white/40" />
            <input placeholder="URL" value={form.URL} onChange={e => setForm({ ...form, URL: e.target.value })} className="bg-zinc-800 text-white p-2 rounded border border-white/20 placeholder:text-white/40" />

            <div className="flex gap-2 mt-2">
              <button onClick={() => setShowForm(false)} className="flex-1 bg-zinc-700 text-white p-2 rounded hover:bg-zinc-600">Cancel</button>
              <button onClick={async () => { await handleAdd(); setShowForm(false); }} className="flex-1 bg-white text-black p-2 rounded font-bold hover:bg-zinc-200">Add Item</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}