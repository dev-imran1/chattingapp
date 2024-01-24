import React from 'react'
import GroupCard from '../../components/home/GroupCard'
import Image from '../../utilities/Image'
import { FaPlus } from 'react-icons/fa6'
import './home.css'

const UserList = () => {
  return (
    <>
          <GroupCard cardTitle="User List" >
        <div className='usermainbox'>
          {[0,1,2,3,4,5,6,7].map((item,index)=>(
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
                  <FaPlus />
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

export default UserList