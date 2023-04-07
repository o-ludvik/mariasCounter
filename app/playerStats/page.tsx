import Link from "next/link"
import '../global.css'
import PocketBase from 'pocketbase';

async function listPlayerStats() {
    const pb = new PocketBase('https://mariascounter.fly.dev')
    const resultList = await pb.collection('players').getFullList({sort: '-bankBalance'})
    return resultList.map((player:any) => {
        return {
            id:player.id,
            name:player.name,
            surname:player.surname,
            bankBalance:player.bankBalance,
        }
    })
}

export default async function playerStats() {
    const players = await listPlayerStats()
    const playersTable = (
        <table>
            <tbody>
                <tr>
                    <th>Jmeno</th>
                    <th>Prijmeni</th>
                    <th>penize</th>
                </tr>
                {players.map((player:any) => {
                    return(
                        <tr key={player.id}>
                            <td>{player.name}</td>
                            <td>{player.surname}</td>
                            <td>{player.bankBalance}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    ) //dodelat new player
    return(
        <div className="playerStats">
            <Link href={'./'} className="link" style={{margin: '0px 10px'}}>Go back</Link>
            {playersTable}
        </div>
    )
}