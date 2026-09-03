'use client'
import { useState } from "react"




function FilterBar() {

    const [filterStatus, setFilterStatus] = useState("ALL");
    const [filterSpecies, setFilterSpecies] = useState("HUMAN");
    const isActive = (status: string) => filterStatus === status;

    return (
        <section className="grid grid-cols-[1fr_1fr_auto] border h-40 bg-white/5 px-6 font-mono text-[#A9ABB3] tracking-widest">
            <div className="flex flex-col justify-center gap-4 h-full">
                <label>FILTER // STATUS</label>
                <div className="flex gap-4">
                    <button
                        className={`filterButton ${isActive('ALL') ? 'filterButtonActive' : ''}`}
                        onClick={() => setFilterStatus('ALL')}
                    >
                        ALL
                    </button>
                    <button
                        className={`filterButton ${isActive('LACONIAN_EMPIRE') ? 'filterButtonActive' : ''}`}
                        onClick={() => setFilterStatus('LACONIAN_EMPIRE')}
                    >
                        LACONIAN EMPIRE
                    </button>
                    <button
                        className={`filterButton ${isActive('RING_BUILDER_EMPIRE') ? 'filterButtonActive' : ''}`}
                        onClick={() => setFilterStatus('RING_BUILDER_EMPIRE')}
                    >
                        RING BUILDER EMPIRE
                    </button>
                    <button
                        className={`filterButton ${isActive('UNKNOWN') ? 'filterButtonActive' : ''}`}
                        onClick={() => setFilterStatus('UNKNOWN')}
                    >
                        UNKNOWN
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-4 h-full">
                <label>FILTER // SPECIES</label>
                <div className="flex gap-4">
                    <button
                        className={`filterButton ${filterSpecies === 'HUMAN' ? 'filterButtonActive' : ''}`}
                        onClick={() => setFilterSpecies('HUMAN')}
                    >
                        HUMAN
                    </button>
                    <button
                        className={`filterButton ${filterSpecies === 'MIXED' ? 'filterButtonActive' : ''}`}
                        onClick={() => setFilterSpecies('MIXED')}
                    >
                        MIXED
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-4 h-full items-end ">
                <div className="flex gap-4 flex-col">
                    <label htmlFor="sortSelect">SORT // TELEMETRY</label>
                    <select className="filterButton w-60">
                        <option className="bg-[#111827]" value="NAME_ASC">NAME_ASC</option>
                        <option className="bg-[#111827]" value="NAME_DESC">NAME_DESC</option>
                    </select>
                </div>
            </div>

        </section>
    )
}

export default FilterBar