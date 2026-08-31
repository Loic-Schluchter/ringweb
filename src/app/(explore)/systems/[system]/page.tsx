
type Props = {
    params: Promise<{
        system: string
    }>
}
export default async function SystemPage({params}: Props) {
   const {system} = await params

    const response = await fetch(
        `https://ringapi.onrender.com/systems/${system}`
    )
    const systemData = await response.json()
  return (
    <main>
        <h1>{systemData.name}</h1>
        <p>{systemData.description}</p>
        </main>
  )
}