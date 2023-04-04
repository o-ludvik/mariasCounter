import Link from "next/link"
import '../global.css'

async function listPlayerStats() {
    const responce =  await fetch('http://127.0.0.1:8090/api/collections/hrac/records')
    const data = await responce.json()
    return data?.items as any[]
}


export default async function playerStats() {
    const players = await listPlayerStats()
    const playersTable = (
        <table>
            <tbody>
                <tr>
                    <th>Jméno</th>
                    <th>Příjmení</th>
                    <th>Peníze</th>
                </tr>
                {players.map((player) => {
                    return (
                        <tr key={player.id}>
                            <td>{player.jmeno}</td>
                            <td>{player.prijmeni}</td>
                            <td>{player.penize}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
    return(
        <div className="playerStats">
            <Link href={'./'} className="link">Go back</Link>
            {playersTable}
        </div>
    )
}