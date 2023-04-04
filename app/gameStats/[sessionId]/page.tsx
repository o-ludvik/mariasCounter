import PocketBase from 'pocketbase';


async function getSessionStats(sessionId:string) {
    const pb = new PocketBase('http://127.0.0.1:8090')
    const session = await pb.collection('sezeni').getOne(sessionId, {expand:'hraci'})
    console.log(session)


}

export default function sessionStats({ params }: any) {
    console.log(params)
    getSessionStats(params.sessionId)
    return <h1>{params.sessionId}</h1>
}