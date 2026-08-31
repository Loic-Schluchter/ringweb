import React from 'react'
import {BackButtons, MainNav, AppFooter} from '../../components'
import {Search} from 'lucide-react'
export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="grid min-h-24 grid-cols-[1fr_auto_1fr_auto] items-center mx-16 my-2 font-headline text-2xl uppercase tracking-widergrid tracking-wider">
        <h1 className="justify-self-start text-4xl tracking-wider text-[#E5E7EB]">
          MCRN_OS // NAV_SYS
        </h1>
        <div className='flex gap-16 '>
         <BackButtons />
        <MainNav />
        </div>
        <div className="flex items-center justify-self-end gap-2 text-[#CE937E]">
          <span>[ Explore ]</span>
          <Search size={20} color="#E5E7EB" />
        </div>
      </header>
      {children}
      <AppFooter/>
    </>
  );
}
