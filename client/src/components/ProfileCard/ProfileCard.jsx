import React from 'react'
import './ProfileCard.css'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'

const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
        <div className="profileImg">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
        </div>
   
        {/* profileName */}
        <div className="profileName">
            <span>Zendaya Mj</span>
            <span>Senior UI/UX Designer</span>
        </div>

        {/* followStatus */}
        <div className="followStatus">
            <hr />
            <div>
            <div className="follow">
                <span>6,900</span>
                <span>Followings</span>
            </div>
            {/* VerticalLine */}
            <div className="vl"></div>
            <div className="follow">
                <span>1</span>
                <span>Followers</span>
            </div>
            </div>
            <hr />
        </div>
        

    </div>
  )
}

export default ProfileCard
