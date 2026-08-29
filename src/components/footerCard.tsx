
import { LucideIcon } from "lucide-react"

type CardProps = {
  icon: LucideIcon
  iconColor: string
  title: string
  count: number;
}



export default function FooterCard({ icon: Icon, title, iconColor, count }: CardProps) {

    

  return (
    <div className=" flex flex-col bg-[#07101B] px-6 py-4 justify-center border border-white/10 rounded ">
      <div className="flex gap-8">
        <h2 className="uppercase tracking-widest text-sm text-[#6B7280]">{title}</h2>
        <Icon size={60} color={iconColor} />
      </div>
      <p className="text-4xl relative -top-6">{count}</p>
      <p className="border "></p>
    </div>
  )
}
