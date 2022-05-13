import React from 'react'
import { Link } from 'react-router-dom'

const Setup = () => {
  return (
    <main className='setup-page'>
        <Link to = "/scoreboard" className= 'scores setup'>Scoreboard</Link>
    </main>
  )
}

export default Setup