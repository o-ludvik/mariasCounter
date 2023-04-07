import Link from "next/link"
import PocketBase from 'pocketbase';

async function getSession(id:string) {
    const pb = new PocketBase('https://mariascounter.fly.dev/')
    const session = pb.collection('sessions').getOne(id, {expand: 'players, games, games.povinnost, games.micha, games.kope'})
    return session
}

export default async function sessionStats({ params }: any) {
    const { sessionId } = params
    const session = await getSession(sessionId)
    //console.log(session)

    const playersBalance = ([{id:69, name:'tom', balance:-50},{id:420, name:'ondra', balance:50}])

    const Stats = () => {
        return (
            <table>
                <caption>Global stats</caption>
                <tbody>
                    <tr>
                        <th>players</th>
                        <th>balance</th>
                    </tr>
                    {playersBalance.map((pb:any) => {
                        return(
                            <tr key={pb.id}>
                                <td>{pb.name}</td>
                                <td>{pb.balance}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    const PlayersTable = () => {
        return  <h1> DODELAT </h1>
    }

    const Table = () => {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>povinnost</th>
                        <th>kope</th>
                        <th>micha</th>
                        <th>Typ hry</th>
                        <th>Trumf</th>
                        <th>Cena</th>
                    </tr>
                    {session.expand.games.map((game:any) => {
                        const table = (
                            <tr key={game.id}>
                                <td style={game.povinnostWins ? {backgroundColor :'rgba(0,255,0,0.7)'} : {backgroundColor : 'rgba(255,0,0,0.7)'}}>{game.expand.povinnost.name}</td>
                                <td style={game.povinnostWins ? {backgroundColor :'rgba(255,0,0,0.7)'} : {backgroundColor : 'rgba(0,255,0,0.7)'}}>{game.expand.kope.name}</td>
                                <td style={game.povinnostWins ? {backgroundColor :'rgba(255,0,0,0.7)'} : {backgroundColor : 'rgba(0,255,0,0.7)'}}>{game.expand.micha.name}</td>
                                <td>{game.gameType}</td>
                                <td>{game.gameTrumph}</td>
                                <td>{game.gameValue}</td>
                            </tr>
                        )

                        return table
                    })}
                </tbody>
            </table>
        )
    }
    return (
        <div className="flex column">
            <Link href={'./'} className="link" >Go back</Link>
            <div className="flex evenly">
                < Stats />
                < PlayersTable />
                < Table />
            </div>
        </div>
    )
}