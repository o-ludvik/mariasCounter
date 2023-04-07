import Link from "next/link"
import PocketBase from 'pocketbase';


async function getSessions() {
    const pb = new PocketBase('https://mariascounter.fly.dev/')
    const sessions = await pb.collection('sessions').getFullList({sort:'+date', expand: 'players, games'})
    return sessions
}

export default async function gameStats() {
    const sessions = await getSessions()
    console.log(sessions)
    console.log('hello')

    const getTable = () => {
        return (
            <div>
                {sessions.map((sesh:any) => {
                    return (
                        <Link key={sesh.id} href={`/gameStats/${sesh.id}`}>
                            <div>
                                <p>{sesh.locations}</p>
                                <p>{sesh.date}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }


    return (
        <div className="flex column">
            <Link href={'./'} className="link">Go back</Link>
            {getTable()}
        </div>
    )
}