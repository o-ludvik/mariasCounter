'use client'
import { useState } from "react";
import ShortUniqueId from 'short-unique-id'


const CreateNewSession = (props:any) => {
  const { players } = props
  const [location, setLocation] = useState('')

  const handleSubmit = (e:any) => {
    e.preventDefault()

    const playersChecks = players.filter((player:any) => (document.getElementById(player.id) as HTMLInputElement).checked)
    console.log(playersChecks)

    const uid = new ShortUniqueId({ length: 15 });
    const id = uid()
    fetch('https://mariascounter.fly.dev/api/collections/sessions/records', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(
          {
            "id":id, 
            "location":location, 
            "paid":'false',
            "players": playersChecks.map((player:any) => player.id),
            "date": new Date().toUTCString()
          }
        ),
    }).then((e) => {
      console.log(e)
      window.location.replace(`/play/${id}`)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Lokace</label>
        <input type="text" required value={location} onChange={(e) => {setLocation(e.target.value)}} /><br />
        <div>
          {players.map((player:any) => {
            return (
              <div key={player.id}>
                <label>{player.name}</label>
                <input type="checkbox" id={player.id} />
              </div>
            )
          })}
        </div>
        <button>Add Blog</button>
      </form>
    </div>
  )
}

export default CreateNewSession