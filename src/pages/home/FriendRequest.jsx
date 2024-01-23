import React from 'react'
import GroupCard from '../../components/home/GroupCard'
import Image from '../../utilities/Image'


const FriendRequest = () => {
  return (
    <>
        <GroupCard cardTitle="Friend Request" >
        <div className='usermainbox'>
            {[0,1,2,3,4,5,6,7,8].map((item,index)=>(
                <div key={index} className='useritem'>
                    <div className='userimgbox'>
                    <Image source="/" alt="image"/>
                    </div>
                    <div className='user_info-box'>
                    <div>
                        <h3>siam talukder</h3>
                        <p>backend developer</p>
                    </div>
                    <div>
                        <button className='addbtn'>
                        <p>Accept</p>
                        </button>
                    </div>
                    </div>
                </div>
            ))}
        </div>
      </GroupCard>
    
    </>
  )
}

export default FriendRequest