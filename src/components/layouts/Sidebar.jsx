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


const Sidebar = () => {
  return (
    <>
    <div className='sidebar_box'>
        <div className='sidebar_img-box'>
            <Image source='/' alt="image" style='sidebar_logo'/>
            <div>

            <h3 className='username'>Siam Talukder</h3>
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
            <IoMdLogOut className='sidebar_menu'/>
        </div>
        <p>28.00 minute</p>
    </div>
    </>
  )
}

export default Sidebar