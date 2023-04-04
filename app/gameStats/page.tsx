import Link from "next/link"
import PocketBase from 'pocketbase';


async function getSessions() {
    const pb = new PocketBase('http://127.0.0.1:8090')
    const sessions = await pb.collection('sezeni').getFullList({sort:'+datum', expand: 'hraci, hry'})
    console.log(sessions[0])
    return sessions
}

export default async function gameStats() {
    const sessions = await getSessions()

    const table = (
        <div>
            {sessions.map((sesh:any) => {
                return(
                    <Link href={`./gameStats/sessionId/${sesh.id}`} key={sesh.id}>
                        <h3>{sesh.kde}</h3>
                        <p>{`proplaceno: ${sesh.proplaceno? 'ano':'ne'}`}</p>
                        <div>hraci</div>
                        {sesh.expand.hraci.map((hrac:any) => <div key={hrac.id}>{`${hrac.jmeno} ${hrac.prijmeni}`}</div>)}
                    </Link>
                )
            })}
        </div>
    )

    return (
        <div className="flex column">
            <Link href={'./'} className="link">Go back</Link>
            <div>
                {table}
            </div>
        </div>
    )
}