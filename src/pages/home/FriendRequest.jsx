import React, { useEffect, useState } from 'react'
import GroupCard from '../../components/home/GroupCard';
import Image from '../../utilities/Image';
import { getDatabase, ref, set, onValue, remove, push } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux'
import './home.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FriendRequest = () => {
  const db = getDatabase();
  const [fRequest, setFRequest] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.loginuserdata.value);

  useEffect(() => {
    const fRequestRef = ref(db, 'frequest');
    onValue(fRequestRef, (snapshot) => {
      let arr = []
      snapshot.forEach((item) => {
        if (data.uid == item.val().reciverid) {
          arr.push({ ...item.val(), id: item.key });
          setFRequest(arr)
        }
        // console.log(data.uid == item.val().reciverid)
      })
    });
  }, [])

  let handelCancelFrequest = (cancelinfo) => {
    remove(ref(db, "frequest/" + cancelinfo.id)).then(() => {
    })
  }

  let handelAceptFrequest = (acceptinfo) => {
    set(push(ref(db, 'friends')), {
      whosendid: acceptinfo.senderid,
      whosendName: acceptinfo.senderName,
      whosendimg: acceptinfo.senderimg,
      whosendemail: acceptinfo.senderemail,
      whoreciveid: data.uid,
      whoreciveName: data.displayName,
      whoreciveimg: data.photoURL,
      whoreciveemail: data.email
    }).then(() => {
      remove(ref(db, "frequest/" + acceptinfo.id))
      toast("Friend request Accept")
    })
  }

  return (
    <>
      <GroupCard cardTitle="Friend Request" >
        <div className='usermainbox'>
          {fRequest && fRequest.length > 0
            ?
            fRequest.map((item, index) => (
              <div key={index} className='useritem'>
                <div className='userimgbox'>
                  <Image source={item.senderimg} alt="image" />
                </div>
                <div className='user_info-box'>
                  <div>
                    <h3>{item.senderName}</h3>
                    <p>backend developer</p>
                  </div>
                  <div className='parentBtn'>
                    <button onClick={() => handelAceptFrequest(item)} className='addbtn'>
                      <p>Accept</p>
                    </button>
                    <button onClick={() => handelCancelFrequest(item)} className='addbtn'>
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