import React, { useEffect, useState } from 'react'
import GroupCard from '../../components/home/GroupCard';
import Image from '../../utilities/Image';
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux'

const FriendRequest = () => {
  const db = getDatabase();
  const userCountRef = ref(db, 'users');
  const [fRequest, setFRequest] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state)=> state.loginuserdata.value);

  useEffect(()=>{
    const fRequestRef = ref(db, 'frequest');
    onValue(fRequestRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item)=>{
        if(data.uid == item.val().reciverid){
          arr.push({...item.val(), id:item.key});
          setFRequest(arr)
        }
        console.log(data.uid == item.val().reciverid)
      })
    });
  },[])

  return (
    <>
        <GroupCard cardTitle="Friend Request" >
        <div className='usermainbox'>
            {fRequest && fRequest.length > 0 
            ?
            fRequest.map((item,index)=>(
                <div key={index} className='useritem'>
                    <div className='userimgbox'>
                    <Image source={fRequest.profileimg} alt="image"/>
                    </div>
                    <div className='user_info-box'>
                    <div>
                        <h3>{fRequest.username}</h3>
                        <p>backend developer</p>
                    </div>
                    <div>
                        <button className='addbtn'>
                        <p>Accept</p>
                        </button>
                    </div>
                    </div>
                </div>
            ))
          :
          <h2>No friend request</h2>
          }
        </div>
      </GroupCard>
    
    </>
  )
}

export default FriendRequest