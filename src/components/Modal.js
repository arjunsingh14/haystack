import React from 'react'

const Modal = ({style, game, setChar}) => {
const handleClick = (index) => {
    setChar(game[index]);
}
  return (
    <nav className='active'  style={{display: style ? 'block':'none'}}>
        <ul className='modal'>
            {game.map((char, index)=>{
                return <button key = {index} onClick={()=>handleClick(index)}>{char.name}</button>
            })}
        </ul>
    </nav>
  )
}

export default Modal