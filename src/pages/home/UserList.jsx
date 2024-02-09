import React, { useEffect, useState } from 'react'
import GroupCard from '../../components/home/GroupCard'
import Image from '../../utilities/Image'
import { FaPlus } from 'react-icons/fa6'
import './home.css';
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux'


const UserList = () => {

  const db = getDatabase();
  const userCountRef = ref(db, 'users');
  const [userLists, setUserList] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state)=> state.loginuserdata.value)


  // console.log(data.uid)
    

  useEffect(()=>{
    const userRef = ref(db, 'users');
    onValue(userRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item)=>{
        if(data.uid != item.key){
          arr.push({...item.val(), id:item.key});
          setUserList(arr)
        }
        // console.log(item.key)
      })
    });
  },[])
  // console.log(data)
  let handelFRequest = (frequestinfo) =>{
    set(ref(db, 'frequest'), {
      senderid: data.uid,
      senderName: data.displayName,
      senderimg: data.photoURL,
      senderemail: data.email,
      reciverid: frequestinfo.id,
      reciverName: frequestinfo.username,
      reciverimg: frequestinfo.profileimg
    });
  }
  return (
    <>
          <GroupCard cardTitle="User List" >
        <div className='usermainbox'>
          {userLists && userLists.length > 0 
          ?
          userLists.map((item,index)=>(
            <div className='useritem' key={index}>
            <div className='userimgbox'>
              <Image source={item.profileimg} alt="image"/>
            </div>
            <div className='user_info-box'>
              <div>
                <h3>{item.username}</h3>
                <p>backend developer</p>
              </div>
              <div>
                <button className='addbtn' onClick={()=>handelFRequest(item)}>
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
          ))
          :
          <h2>not found</h2>
          }
        </div>
      </GroupCard>
    </>
  )
}

export default UserList