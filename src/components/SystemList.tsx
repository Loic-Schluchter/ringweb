import { systemType } from "@/app/types/systemType";
import { SystemCard } from '../components'




async function SystemList() {
  const response = await fetch("https://ringapi.onrender.com/systems");
  const { data } = await response.json();
  const systemsList: systemType[] = data
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {systemsList.map((system) => (
          <SystemCard key={system.id} systemData={system} />
        ))}
      </section>
  
    </>
  )
}

export default SystemList