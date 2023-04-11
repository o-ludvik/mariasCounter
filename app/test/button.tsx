'use client'
import { useState } from 'react';
import srv from './serverbutton';

export default function Bttn(props:any) {

    const [msg, setMsg] = useState('basic')

    async function Handler() {
        const data = await srv()
        console.log(data)
        setMsg(data[0].name)
    }

    return (
        <div>
            <h1>{msg}</h1>
            <button onClick={Handler}>Hello</button>
        </div>
    )
}