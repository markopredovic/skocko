import React, { useState, useEffect } from 'react';

const SkockoTime = ({time, updateTime, stopGame, is_game_ended}) => {
  useEffect(() => {
    const timer = setInterval(() => {
      if(time === 60 || is_game_ended) {
        stopGame()
        return clearInterval(timer);;
      }
      updateTime(time + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [time])

  return(
    <div className="l-time">
      <div className="l-inner-content" style={{height: `${time/60*100}%`, backgroundColor: "yellow"}}></div>
    </div>
  )
}

export default SkockoTime;