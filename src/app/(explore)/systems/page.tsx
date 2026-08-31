import { systemType } from "@/app/types/systemType";
import MainNav from "@/components/mainNav";
import { Search } from 'lucide-react'


async function SystemPage() {
    const response = await fetch("https://ringapi.onrender.com/systems");
    const systemList = await response.json();
    console.log(systemList);



    const systemArray: systemType[] = systemList.data;
    const systems = systemArray.map((system: systemType) => (
        <li key={system.id} className="grid grid-cols-3 grid-rows-2 gap-4 m-4">
            <h1 className="text-xl">{system.name}</h1>
            <div className="text-justify">
                <h1 className="text-center text-2xl">Description</h1>
                <p>{system.description}</p>
            </div>
        </li>
    ));

    return (
        <main>
            <header className="grid min-h-24 grid-cols-3 items-center px-6 font-headline text-xl uppercase tracking-wider">
                <h1 className="justify-self-start text-4xl tracking-tighter text-[#E5E7EB]">Ring // API</h1>
                <MainNav />
                <div className="flex items-center justify-self-end gap-2 text-[#CE937E]">
                    <span>[ Explore ]</span>
                    <Search size={20} color="#E5E7EB" />
                </div>
            </header>
            <ul>{systems}</ul>
        </main>
    );
}

export default SystemPage;
