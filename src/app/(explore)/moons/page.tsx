import { moonType } from "@/app/types/moonType";
import { planetType } from "@/app/types/planetType";


async function MoonsPage() {
    const response = await fetch("https://ringapi.onrender.com/moons");
    const moonList = await response.json();
    console.log(moonList);

    const moonArray: moonType[] = moonList.data;
    const moons = moonArray.map((moon: moonType) => (
        <li key={moon.id} className="grid grid-cols-3 grid-rows-2 gap-4 m-4">
            <h1 className="text-xl">{moon.name}</h1>
            <div className="text-justify">
                <h1 className="text-center text-2xl">Description</h1>
                <p>{moon.description}</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl text-center">Planet</h1>
                <p>{moon.planet.name}</p>
            </div>
        </li>
    ));

    return (
        <main>
            <ul>{moons}</ul>
        </main>
    );
}

export default MoonsPage;
