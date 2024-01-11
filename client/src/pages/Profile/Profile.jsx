import React from 'react'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import FollowerCard from '../../components/FollowerCard/FollowerCard'
import "./Profile.css"
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
const Profile = () => {
  return (
    <div className='Profile'>
      <ProfileLeft />
      <div>Profile</div>
      <div>ProfileRight</div>
    </div>
  )
}

export default Profile
