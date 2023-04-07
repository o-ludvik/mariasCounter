
import Create from "./form";

import PocketBase from 'pocketbase';
const pb = new PocketBase('https://mariascounter.fly.dev')


export default async function newSession() {
    const players = await pb.collection('players').getFullList()
    const minimalPlayers = players.map((player:any) => {
        return {id:player.id, name: player.name, surname: player.surname}
    })
    return < Create players={minimalPlayers}/>
}