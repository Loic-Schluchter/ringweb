import {
  Globe,
  Earth,
  Moon,
  FingerprintPattern,
} from 'lucide-react'
import FooterCard from './footerCard'




async function dbFooter() {
  const response = await fetch("https://ringapi.onrender.com/stats", {
    cache: 'no-store'
  })
  const stats = await response.json()
  return (
    <section className="my-12 flex gap-18">
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
    </section>
  )
}

export default dbFooter