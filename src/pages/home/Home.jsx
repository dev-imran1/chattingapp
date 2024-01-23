import React from 'react';
import UserList from './UserList';
import Friends from './Friends';
import FriendRequest from './FriendRequest';
import BlockList from './BlockList';
import GroupList from './GroupList';
import Mygroup from './Mygroup';


const Home = () => {
  return (
    <div className='home_wrapper'>
      <GroupList />
      <Friends />
      <UserList />
      <FriendRequest />
      <Mygroup />
      <BlockList />

      {/* <GroupCard cardTitle="User List" sarch={true}>
        <div className='usermainbox'>
          <div className='useritem'>
            <div className='userimgbox'>
              <Image source="/" alt="image"/>
            </div>
            <div>
              <h1>home page</h1>
            </div>
          </div>
        </div>
      </GroupCard> */}
    </div>
  )
}

export default Home