import React, { useEffect } from 'react'
import "./layout.css";
import { IoChatbubblesSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import Image from '../../utilities/Image';
// import Logo from '../../../public/logo.jpg'
import { getAuth,signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { loginuser } from '../../slices/userSlice';


const Sidebar = () => {
    const data = useSelector((state)=> state.loginuserdata.value)
    const auth = getAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect (()=>{
        if(!data){
            navigate("/")
        }
    },[])

    let handelLogout = () =>{
        signOut(auth).then(()=>{
            localStorage.removeItem("user")
            dispatch(loginuser(null))
            console.log("logOut done");
            navigate("/")
        })
    }
    const user = auth.currentUser;
  return (
    <>
    <div className="sidebar__wrapper">
    <div className='sidebar_box'>
        <div className='sidebar_img-box'>
            <div>
             <Image source={data && data.photoURL} alt="image" style='sidebar_logo'/>
            </div>
            <div>
            <h3 className='username'>{data && data.displayName}</h3>
            <p>{data && data.email}</p>
            </div>
        </div>
        <div>
            
            <ul className='navigation'>
                <li>
                   <NavLink to={"/home"}><IoHomeOutline /></NavLink>
                </li>
                <li>
                   <NavLink to={"/message"}><IoChatbubbleEllipsesSharp /></NavLink>
                </li>
                <li>
                   <NavLink to={"/notification"}><IoMdNotificationsOutline /></NavLink>
                </li>
                <li>
                   <NavLink to={"/setting"}><CiSettings /></NavLink>
                </li>
            </ul>
        </div>
        <div></div>
        <div>
            <IoMdLogOut onClick={handelLogout} className='sidebar_menu'/>
        </div>
    </div>
    </div>
    </>
  )
}

export default Sidebar