import {Search} from "lucide-react";
import {MainNav, MainHero, DbFooter, AppFooter} from '../components'
export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="grid min-h-24 grid-cols-3 items-center px-6 font-headline text-xl uppercase tracking-wider">
        <h1 className="justify-self-start text-4xl tracking-tighter text-[#E5E7EB]">Ring // API</h1>
        <MainNav />
        <div className="flex items-center justify-self-end gap-2 text-[#CE937E]">
          <span>[ Explore ]</span>
          <Search size={20} color="#E5E7EB" />
        </div>
      </header>
      {/* Hero */}
      <main className="flex flex-1 items-center bg-[linear-gradient(rgba(10,19,31,0.5),rgba(10,19,31,1)),url('/background.webp')] bg-cover bg-center p-14">
        <MainHero />
      </main>
      {/* Footer */}
      <footer className="flex  flex-col justify-center items-center bg-[#07101B] bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px] px-6">
        <DbFooter />
        <AppFooter />
      </footer>
    </>
  );
}

