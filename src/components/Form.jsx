import React from 'react'
import "../style/Form.scss"
import { useState } from 'react'
const Form = ({cretaTeam}) => {
  const [teamName, setTeamName] = useState("");
  const [drivers, setDrivers] = useState("");
  const [base, setBase] = useState("");
  const [teamChief, setTeamChief] = useState("");
  const [chassis, setChassis] = useState("");
  const [logo, setLogo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    cretaTeam({
      teamName: teamName,
      drivers: drivers,
      base: base,
      teamChief: teamChief,
      chassis: chassis,
      logo: logo
    })
    setTeamName("");
    setDrivers("");
    setBase("");
    setTeamChief("");
    setChassis("");
    setLogo("");
  }

  return (

    <div className='form'>
      <h1>Create New F1 Team </h1>

      <form  onSubmit={handleSubmit}>
      <input type="text" placeholder='Team Name:' onChange={e => setTeamName(e.target.value)} />
      <input type="text" placeholder='Drivers:' onChange={e => setDrivers(e.target.value)} />
      <input type="text" placeholder='Base:' onChange={e => setBase(e.target.value)} />
      <input type="text" placeholder='Team Chief:' onChange={e => setTeamChief(e.target.value)} />
      <input type="text" placeholder='Chassis:' onChange={e => setChassis(e.target.value)} />
      <input type="text" placeholder='Logo(url):' onChange={e => setLogo(e.target.value)} />
      </form>
      <input type="submit" value="Create Team" />

    </div>
  )
}

export default Form