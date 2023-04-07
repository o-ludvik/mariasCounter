'use server'
import PocketBase from 'pocketbase';

async function getSession(sessionId:string) {
    const pb = new PocketBase('https://mariascounter.fly.dev')
    const sesh = await pb.collection('sessions').getOne(sessionId)
    return sesh
}

export default async function play({ params }: any) {
    const { play } = params
    console.log('hello')
    const sesh = await getSession(play)
    console.log(sesh)
    console.log('hello')
    

    return (
        <div>
            <h1>HAAAAAAAAAAA</h1>
            <h3>{params.play}</h3>
        </div>
    )
}
