import React from 'react';
import { Link } from 'react-router-dom';


const AuthNavigate = ({text, link, linkText, style}) => {
  return (
    <>
    <p className={style}>
        {text}
        <Link to={link}>{linkText}</Link>
    </p> 
    </>
  )
}

export default AuthNavigate