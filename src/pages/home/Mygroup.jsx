import React from 'react';
import GroupCard from '../../components/home/GroupCard'
import Image from '../../utilities/Image'

const Mygroup = () => {
  return (
    <GroupCard cardTitle="My Group" >
    <div className='usermainbox'>
        {[0,1,2,3,4,5,6,7,8].map((item,index)=>(
      <div className='useritem' key={index}>
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
              <p>2 pmo
              </p>
            </button>
          </div>
        </div>
      </div>
        ))}
    </div>
  </GroupCard>
  )
}

export default Mygroup