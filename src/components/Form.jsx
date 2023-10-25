import React from 'react'
import "../style/Form.scss"
const Form = () => {
  return (

    <div className='form'>
      <h1>Create New F1 Team </h1>
      <select name="" id="">
        <option value="">Team Name</option>
        <option value="">Red Bull</option>
        <option value="">Mercedes</option>
        <option value="">Scuderia Ferrari</option>
        <option value="">McLaren</option>
        <option value="">Aston Martin"</option>
        <option value="">Alpine</option>
        <option value="">Williams</option>
        <option value="">Alfa Romeo</option>
        <option value="">Haas</option>
        <option value="">Alpha Tauri</option>


      </select>
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