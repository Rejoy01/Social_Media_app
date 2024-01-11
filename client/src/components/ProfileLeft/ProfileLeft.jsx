import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import FollowerCard from '../FollowerCard/FollowerCard'
import InfoCard from '../InfoCard/InfoCard'

const ProfileLeft = () => {
  return (
    <div className='ProfileLeft'>
      <LogoSearch />
      <InfoCard />
      <FollowerCard />
    </div>
  )
}

export default ProfileLeft
