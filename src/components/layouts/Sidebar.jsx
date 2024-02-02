import React from 'react'
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


const Sidebar = () => {
    
    const auth = getAuth();
    const navigate = useNavigate()

    let handelLogout = () =>{
        
        signOut(auth).then(()=>{
            console.log("logOut done");
            navigate("/")
        })
    }

    const user = auth.currentUser;
    // const userInfo = user.displayName
    console.log(user)
  return (
    <>
    <div className="sidebar__wrapper">
    <div className='sidebar_box'>
        <div className='sidebar_img-box'>
            <Image source={user && user.photoURL} alt="image" style='sidebar_logo'/>
            <div>
            <h3 className='username'>{user && user.displayName}</h3>
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