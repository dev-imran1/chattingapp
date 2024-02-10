import React, { useEffect, useState } from 'react'
import GroupCard from '../../components/home/GroupCard';
import Image from '../../utilities/Image';
import { getDatabase, ref, set, onValue, remove } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux'
import './home.css';

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
        // console.log(data.uid == item.val().reciverid)
      })
    });
  },[])

  let handelCancelFrequest = (cancelinfo) =>{
    console.log(cancelinfo);
    remove(ref(db, "frequest/" + cancelinfo.id)).then(()=>{
      // console.log("request cancel")
    })
  }

  return (
    <>
        <GroupCard cardTitle="Friend Request" >
        <div className='usermainbox'>
            {fRequest && fRequest.length > 0 
            ?
            fRequest.map((item,index)=>(
                <div key={index} className='useritem'>
                    <div className='userimgbox'>
                    <Image source={item.senderimg} alt="image"/>
                    </div>
                    <div className='user_info-box'>
                    <div>
                        <h3>{item.senderName}</h3>
                        <p>backend developer</p>
                    </div>
                    <div className='parentBtn'>
                        <button className='addbtn'>
                        <p>Accept</p>
                        </button>
                        <button onClick={()=>handelCancelFrequest(item)} className='addbtn'>
                        <p>Cancel</p>
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