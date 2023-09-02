import React from 'react'
import PlayerCard from './PlayerCard'
import { playersdb } from '../Database/playersdb'



function Player() {
  return (
    <div className="d-flex gap-5 ms-5">
      {playersdb.map((item, index) => (
        <PlayerCard key={index} player={item} />
      ))}
    </div>
    
  )
}

export default Player;