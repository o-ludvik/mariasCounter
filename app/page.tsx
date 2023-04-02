import Link from 'next/link';

async function createNewPlayer() {
    const responce =  await fetch('http://127.0.0.1:8090/api/collections/players/records')
    const data = await responce.json()
    return data.items
}


export default async function HomePage() {
    console.log(await createNewPlayer())
    return (
        <div id='global'>
            <Link href={'/newGame'} className='link'>Nová hra</Link><br />
            <Link href={'/gameStats'} className='link'>Minulé hry</Link><br />
            <Link href={'/playerStats'} className='link'>Statistiky hráčů</Link><br />
        </div>
    )
}