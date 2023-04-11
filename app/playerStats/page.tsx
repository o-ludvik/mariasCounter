import Link from "next/link"
import '../global.css'
import PocketBase from 'pocketbase';
import GeneratePlayersTable from './playersTable'
const pb = new PocketBase('https://mariascounter.fly.dev')

async function listPlayerStats() {
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

async function generateTable() {
    const players = await listPlayerStats()
    return (
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
}

export default async function playerStats() {
    const playersTable = await generateTable()
    const players = await listPlayerStats()
    return(
        <div className="playerStats">
            <Link href={'./'} className="link" style={{margin: '0px 10px'}}>Go back</Link>
            <GeneratePlayersTable players={players} />
        </div>
    )
}
