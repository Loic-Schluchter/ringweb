import {  Square,
  ArrowRight} from 'lucide-react'
import Link from 'next/link'
function mainHero() {
  return (
    <div className=" flex w-full max-w-3xl flex-col gap-10">
          <p className="flex items-center gap-1 border border-white/10 bg-white/10 px-2 py-1 text-xl font-bold font-mono uppercase text-[#A8B0BA]">
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
            className="flex w-fit items-center justify-center gap-4 border border-white/10 bg-[#CE937E]/10 px-6 py-4 text-2xl font-semibold font-mono uppercase text-[#CE937E] transition hover:bg-[#CE937E]/20"
          >
            [ Explore the universe ]
            <ArrowRight size={18} />
          </Link>
        </div>
  )
}

export default mainHero