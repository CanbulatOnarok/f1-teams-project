import React from 'react'
import "../style/Form.scss"
const Form = () => {
  return (

    <div className='form'>
      <h1>Create New F1 Team </h1>
      <input type="text" placeholder='Team Name:' />
      <input type="text" placeholder='Drivers:' />
      <input type="text" placeholder='Base:' />
      <input type="text" placeholder='Team Chief:' />
      <input type="text" placeholder='Chassis:' />
      <input type="text" placeholder='Logo(url):' />
      <button>Create Team</button>

    </div>
  )
}

export default Form