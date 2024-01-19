import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import SectionHeading from '../../components/SectionHeading';
import GoogleSvg from '../../../public/google.svg';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import AuthNavigate from '../../components/AuthNavigate';
import ReginImg from '../../assets/images/regimg.png';
import Image from '../../utilities/Image';
import '../registration/registration.css'
import Alert from '@mui/material/Alert';


const Registration = () => {

  let [singupData, setSignupdata] = useState({
    email : '',
    fullname: '',
    password : ''
  });
  let [error, setError] = useState({
    email : '',
    fullname: '',
    password : ''
  })



  let handelFrom = (e) =>{
    let {name, value} = e.target;
    setSignupdata({
      ...singupData,
      [name]:value
    })
  }

  let emailRegex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  
  let handelSubmit = () =>{
    if(!singupData.email){
      setError({email: "Type Your email"});
    }
    else if(!singupData.email.match(emailRegex)){
      setError({email: "wrong email"});
    }
    else if(!singupData.fullname){
      setError({fullname: "fullName error"});
    }
    else if(!singupData.password){     
      setError({password: "password error"});
    }
    else{
      setError({
        email : '',
        fullname: '',
        password : ''
      })
      console.log('done');
    }
  }
  return (
    <div>
    <Grid container>
      <Grid item xs={6}>
        <div className='loginbox'>
          <div className='loginbox__inner'>
            <SectionHeading style='auth_heading' text='Get started with easily register'/>
            <div className='from_main'>
              <div>
                <Input onChange={handelFrom} name="email" variant="outlined" labelText="Email Add" style="login__input-field" type="email"/>
                {error.email 
                && 
                // <p className='error'>{error.email}</p>
                <Alert variant="filled" severity="error">
                  {error.email}
                </Alert>
                }
              </div>
              <div>
                <Input onChange={handelFrom} name="fullname" variant="outlined" labelText="Full Name" style="login__input-field" type="text"/>
                {error.fullname 
                && 
                <Alert variant="filled" severity="error">
                  {error.fullname}
                </Alert>
                }
              </div>
              <div>
                <Input onChange={handelFrom} name="password" variant="outlined" labelText="Type Password" style="login__input-field" type="password"/>
                {error.password 
                &&
                <Alert variant="filled" severity="error">
                  {error.password}
                </Alert>
                }
              </div>
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