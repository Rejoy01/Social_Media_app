import React from 'react'
import "./InfoCard"
import {UilPen} from '@iconscout/react-unicons'


const InfoCard = () => {
  return (
    <div className='InfoCard'>
      <div className="infHead">
        <h4>Your info</h4>
        <UilPen />
      </div>

      <div className="info">
        <span>
            <b>Status</b>
        </span>
        <span>in Relationships</span>
      </div>

      <div className="info">
        <span>
            <b>Lives in</b>
        </span>
        <span>Multan</span>
      </div>

      <div className="info">
        <span>
            <b>Works at</b>
        </span>
        <span>IT</span>
      </div>

    <button className='button'>
        Logout
    </button>

    </div>
  )
}

export default InfoCard
