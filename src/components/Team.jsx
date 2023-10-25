import React from 'react'
import "../style/Team.scss"
const Team = ({f1}) => {
  return (
    f1.map(team=>
        <div key={team.id} className='team-detail'>
         <img src={team.logo} alt="" />
         <h1>{team.teamName}</h1>
         <p><b>Drivers:</b>{team.drivers}</p>
         <p><b>Base:</b>{team.base}</p>
         <p><b>Team Chief:</b>{team.teamChief}</p>
         <p><b>Chassis:</b>{team.chassis}</p>
        </div> 
         
         )
  )
}

export default Team