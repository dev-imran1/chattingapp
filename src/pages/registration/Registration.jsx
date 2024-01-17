import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import SectionHeading from '../../components/SectionHeading';
import GoogleSvg from '../../../public/google.svg';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import AuthNavigate from '../../components/AuthNavigate';
import ReginImg from '../../assets/images/regimg.png';
import Image from '../../utilities/Image';

const Registration = () => {
  let [singnupData, setSignupData] = useState({
    name : "",
    fullname : "",
    password : ""
  })

  let handelFrom = (e) =>{
    let {a, b} =e.target;
    let {name, value} = e.target;
    console.log(value);
    setSignupData({
      ...singnupData,
      [name] : value
    })
  }

  let handelSubmit = () =>{
    console.log("ok");
  }
  return (
    <div>
    <Grid container>
      <Grid item xs={6}>
        <div className='loginbox'>
          <div className='loginbox__inner'>
            <SectionHeading style='auth_heading' text='Get started with easily register'/>
            <div className='from_main'>
             <Input onChange={handelFrom} name="email" variant="outlined" labelText="Email Add" style="login__input-field" type="email"/>
             <Input onChange={handelFrom} name="fullname" variant="outlined" labelText="Full Name" style="login__input-field" type="text"/>
             <Input onChange={handelFrom} name="password" variant="outlined" labelText="Type Password" style="login__input-field" type="password"/>
             <CustomButton onClick={handelSubmit} styleing="loginBtn" variant="contained" btnText="Login to Continue"/>
            </div>
            <AuthNavigate style="login__auth" link="/" text="Already have an account ?" linkText="Sign in"/>
          </div>
        </div>
      </Grid>
      <Grid item xs={6}>
       <h1 className='loginimg'>
        <Image source={ReginImg} alt="Registration image"/>
       </h1>
      </Grid>
    </Grid>
  </div>
  )
}

export default Registration