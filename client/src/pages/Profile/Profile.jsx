import React from 'react'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import FollowerCard from '../../components/FollowerCard/FollowerCard'
import "./Profile.css"
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import PostSide from '../../components/PostSide/PostSide'
import RightSide from '../../components/RightSide/RightSide'
const Profile = () => {
  return (
    <div className='Profile'>
      <ProfileLeft />
      <div className='Profile-center'>
        <ProfileCard />
        <PostSide/>
        </div>
        <RightSide />     
    </div>
  )
}

export default Profile
