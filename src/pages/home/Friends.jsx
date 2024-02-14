import React, { useEffect, useState } from 'react';
import GroupCard from '../../components/home/GroupCard'
import Image from '../../utilities/Image';
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux'

const Friends = () => {
  const db = getDatabase();
  const [friendLists, setfriendList] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.loginuserdata.value);

  console.log(friendLists)
  useEffect(() => {
    const friendRef = ref(db, 'friends');
    onValue(friendRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if (data.uid == item.val().whoreciveid) {
          arr.push({ ...item.val(), id: item.key });
          setfriendList(arr)
        }
        // console.log(item.key)
      })
    });
  }, [])
  return (
    <>
    <GroupCard cardTitle="Friend" >
        <div className='usermainbox'>
            {friendLists && friendLists.map((item,index)=>(
          <div className='useritem' key={index}>
            <div className='userimgbox'>
              <Image source={friendLists.whosendimg} alt="image"/>
            </div>
            <div className='user_info-box'>
              <div>
                <h3>{item.whosendName}</h3>
                <p>backend developer</p>
              </div>
              <div>
                <button className='addbtn'>
                  <p>Block</p>
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

export default Friends