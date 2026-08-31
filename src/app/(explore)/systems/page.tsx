
import { SystemList} from '../../../components'

async function SystemPage() {

    return (
        <>
            <main className="m-16 flex flex-col gap-6 ">
                <div className="flex flex-col gap-6">
                    <h1 className="text-6xl font-bold font-headline">STELLAR SYSTEMS</h1>
                    <p className="text-xl text-[#A9ABB3] font-mono">SELECT A SYSTEM FOR DETAILED TELEMTRY AND NAVIGATION DATA</p>
                </div>
                <SystemList />

            </main>
        </>

    );
}

export default SystemPage;
