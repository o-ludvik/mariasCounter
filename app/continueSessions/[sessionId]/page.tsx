

export default function gameStats({ params }: any) {
    console.log(params)
    return <h1>{params.sessionId}</h1>
}