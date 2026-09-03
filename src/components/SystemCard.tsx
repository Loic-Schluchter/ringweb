import { governmentType } from "@/app/types/governmentType"
import Image from "next/image"
import Link from "next/link"


type systemCard = {
    id: number
    name: string
    slug: string
    description: string
    status: string
    species: SpeciesTypes
    stars: number
    government: governmentType[]
}

export type SpeciesTypes = {
    name: string
}

function getGovernmentColor(government?: string) {
    switch (government) {
        case "Laconian Empire":
            return "text-[#8CF5E4]"

        case "United Nations":
            return "text-blue-400"

        case "Martian Congressional Republic":
            return "text-orange-400"
        case "Ring Builder Empire":
            return "text-yellow-400"
        default:
            return "text-red-400"
    }
}

function SystemCard({ systemData }: { systemData: systemCard }) {

    return (
        <div className="flex flex-col text-xl w-full h-200 border-2 border-[#006A60] px-8 pb-20 gap-4 font-mono bg-white/5">

            <div className="flex relative -left-8 w-100 h-14 shrink-0
            border-2 border-t-0 border-l-0 border-[#6FD8C8]/70
            bg-linear-to-r from-[#006A60]/50 via-[#006A60]/20 to-transparent
            backdrop-blur-sm
            shadow-[0_0_15px_rgba(111,216,200,0.08)]">

                <div className="flex h-full w-full items-center justify-center gap-4
                p-4 text-[#8CF5E4]">
                    <p>SYS_0{systemData.id}</p>
                    <span className="text-[#6FD8C8]/50">//</span>
                    <p>{systemData.name}</p>
                </div>
            </div>
            <h1 className="text-2xl font-bold">
                {systemData.name}
            </h1>
            <div className="flex justify-between gap-4">
                <span>STATUS:</span>

                <span
                    className={getGovernmentColor(
                        systemData.government[0]?.name
                    )}
                >
                    {systemData.government[0]?.name ?? "Unknown"}
                </span>
            </div>
            <div className="flex justify-between border-b-2 pb-2">
                <span>STAR_COUNT:</span>
                <span>{systemData.stars}</span>
            </div>
            <div className="flex justify-between border-b-2 pb-2">
                <span>DOM_SPECIES:</span>
                <span>{systemData.species.name}</span>
            </div>
            <p className="overflow-auto flex-1">
                {systemData.description}
            </p>
            <Link
                href={`/systems/${systemData.slug}`}
                className="w-full py-3 border border-[#6FD8C8]/50 text-center
                   hover:bg-[#006A60]/30 transition-colors"
            >
                VIEW DATA
            </Link>

        </div>
    )
}

export default SystemCard