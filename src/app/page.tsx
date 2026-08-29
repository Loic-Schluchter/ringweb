import {
  Search,
  Globe,
  Earth,
  Moon,
  FingerprintPattern,
  Square,
  ArrowRight,
} from "lucide-react";
import FooterCard from "@/components/footerCard";
import Link from "next/link";

const response = await fetch("https://ringapi.onrender.com/stats")
const stats = await response.json()


export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="grid min-h-24 grid-cols-3 items-center px-6 font-headline text-xl uppercase tracking-wider">
        <h1 className="justify-self-start text-4xl tracking-tighter text-[#E5E7EB]">
          Ring // API
        </h1>

        <nav>
          <ul className="flex justify-center gap-8">
            <li className="nav-item">Systems</li>
            <li className="nav-item">Planets</li>
            <li className="nav-item">Species</li>
            <li className="nav-item">Api Docs</li>
          </ul>
        </nav>

        <div className="flex items-center justify-self-end gap-2 text-[#CE937E]">
          <span>[ Explore ]</span>
          <Search size={20} color="#E5E7EB" />
        </div>
      </header>

      {/* Hero */}
      <main className="flex flex-1 items-center bg-[linear-gradient(rgba(10,19,31,0.5),rgba(10,19,31,1)),url('/background.webp')] bg-cover bg-center p-14">
        <div className=" flex w-full max-w-3xl flex-col gap-10">
          <p className="flex items-center gap-1 border border-white/10 bg-white/10 px-2 py-1 text-sm font-bold uppercase text-[#A8B0BA]">
            <Square size={14} fill="orange" color="orange" />
            sys_status: online
            <span className="mx-4">//</span>
            sector 76
          </p>

          <h1 className="font-headline text-6xl font-semibold uppercase tracking-tight text-[#E5E7EB]">
            Explore
            <br />
            <span className="text-[#CE937E]">The Expanse</span>
          </h1>

          <Link
            href="/systems"
            className="flex w-fit items-center justify-center gap-4 border border-white/10 bg-[#CE937E]/10 px-6 py-4 text-sm font-semibold uppercase text-[#CE937E] transition hover:bg-[#CE937E]/20"
          >
            [ Explore the universe ]
            <ArrowRight size={18} />
          </Link>
        </div>
      </main>

      {/* Database navigation */}
      <footer className="flex flex-col items-center justify-center bg-[#07101B] bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px] px-6">
        <div className="my-12 flex gap-18">
          <FooterCard
            title="db_query // Systems"
            icon={Globe}
            iconColor="#11232C"
            count={stats.systems}
          />

          <FooterCard
            title="db_query // Planets"
            icon={Earth}
            iconColor="#202229"
            count={stats.planets}
          />

          <FooterCard
            title="db_query // Moons"
            icon={Moon}
            iconColor="#11232C"
            count={stats.moons}
          />

          <FooterCard
            title="db_query // Species"
            icon={FingerprintPattern}
            iconColor="#202229"
            count={stats.species}
          />
        </div>

        <div className="flex w-screen justify-between border border-white/10 bg-[#07101B] px-12 py-4 text-sm font-bold uppercase tracking-wider text-[#A8B0BA]">
          <p>2350 ring systems // ring_api_v4.2</p>

          <ul className="flex gap-8">
            <li>terminal</li>
            <li>deep scan</li>
            <li>logistics</li>
            <li>protocol</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

