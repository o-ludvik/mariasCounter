import Link from 'next/link';

export default async function HomePage() {
    return (
        <div id='global'>
            <Link href={'/newSession'} className='link'>Nové sezení</Link><br />
            <Link href={'/continueSessions'} className='link'>Pokračovat v sezení</Link><br />
            <Link href={'/gameStats'} className='link'>Minulé hry</Link><br />
            <Link href={'/playerStats'} className='link'>Statistiky hráčů</Link><br />
        </div>
    )
}