import { planetType } from "@/app/types/planetType";


async function PlanetsPage() {
  const response = await fetch("https://ringapi.onrender.com/planets");
  const planetList = await response.json();
  console.log(planetList);

 
  const planetArray: planetType[] = planetList.data;
  const planets = planetArray.map((planet: planetType) => (
    <li key={planet.id} className="grid grid-cols-3 grid-rows-2 gap-4 m-4">
      <h1 className="text-xl">{planet.name}</h1>
      <div className="text-justify">
        <h1 className="text-center text-2xl">Description</h1>
        <p>{planet.description}</p>
      </div>
      <div className="text-center">
        <h1 className="text-center text-2xl">Type</h1>
        <p>{planet.type}</p>
      </div>
      {planet.moons && planet.moons.length > 0 && (
        <div>
          <h1 className="text-2xl text-center">Moons</h1>
          <ul className="flex flex-col gap-4 text-center">
            {planet.moons.map((moon: moonType, index: number) => (
              <li key={index}>
                <h2>{moon.name}</h2>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  ));

  return (
    <main>
      <ul>{planets}</ul>
    </main>
  );
}

export default PlanetsPage;
