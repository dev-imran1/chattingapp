import React, { Children } from 'react'
import './groupcard.css';
import { BsThreeDotsVertical } from "react-icons/bs";
import Home from '../../pages/home/Home';


const GroupCard = ({children, cardTitle, sarch}) => {
  return (
    <div className='groupcard'>
      {sarch && 
      <input type="text" />
      }
        <div className='group_heading'>
            <h4>{cardTitle}</h4>
        <div className='dots'>
            <BsThreeDotsVertical />
        </div>
        </div>
        {children}
    </div>
  )
}

export default GroupCard