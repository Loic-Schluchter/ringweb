
async function SystemPage() {
    const response = await fetch("https://ringapi.onrender.com/systems");
    const systemList = await response.json();
    console.log(systemList);

    type systemType = {
        id: number;
        name: string;
        slug: string;
        description: string;

    };

    const systemArray: systemType[] = systemList.data;
    const system = systemArray.map((system: systemType) => (
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
            <ul>{system}</ul>
        </main>
    );
}

export default SystemPage;
