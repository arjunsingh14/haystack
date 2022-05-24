import React, { useEffect, useState } from 'react'

const Timer = ( {isGameOver} ) => {
  const [time, setTimer] = useState(0);
  useEffect(()=> {
    let interval;
    if (!isGameOver){
        interval = setInterval(()=>{
            setTimer(time=>time+1);
        }, 1000)
    }
    else if(isGameOver){
        clearInterval(interval);
        setTimer(0);
    }
    return () => {
        clearInterval(interval)
    }
  }, [isGameOver])
  return (
    <>
        {formatTime(time)}
    </>
  )
}

const formatTime = (time) => {
    const getSeconds = `0${Math.round(time % 60)}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
}


export default Timer