import React from 'react'
import "../style/TeamList.scss"
import Team from './Team'
const TeamList = ({f1}) => {
  return (
  <div className='team-list'>
<Team f1={f1}/>
  </div>
  )
}

export default TeamList


