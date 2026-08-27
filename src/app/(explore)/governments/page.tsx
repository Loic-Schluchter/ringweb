import { governmentType } from "@/app/types/governmentType";


async function GovernmentPage() {
    const response = await fetch("https://ringapi.onrender.com/government");
    const governmentList = await response.json();
    console.log(governmentList);

    const governmentArray: governmentType[] = governmentList.data;
    const governments = governmentArray.map((government: governmentType) => (
        <li key={government.id} className="grid grid-cols-3 grid-rows-2 gap-4 m-4">
            <h1 className="text-xl">{government.name}</h1>
            <div className="text-center">
                <h1 className="text-center text-2xl">Description</h1>
                <p>{government.type}</p>
            </div>
        </li>
    ));

    return (
        <main>
            <ul>{governments}</ul>
        </main>
    );
}

export default GovernmentPage;
