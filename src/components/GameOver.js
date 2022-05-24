import React from 'react'
import { useState } from 'react';
const GameOver = () => {
  const [userName, setUserName] = useState("");
  return (
    <form className='gameover-form' action="">
        <label>
            Userame:
            <input className='gameover-input' onChange={(e)=>{setUserName(e.value)}} type="text" />
        </label>
        <button className='gameover-btn'>Submit</button>
    </form>
  )
}

export default GameOver