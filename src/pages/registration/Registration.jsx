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
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import { Rings } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";



const Registration = () => {
  const auth = getAuth();
  const navigate = useNavigate();


  let [loader, setLoader] = useState(false);
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
      setLoader(true)
      setError({
        email : '',
        fullname: '',
        password : ''
      })
      createUserWithEmailAndPassword(auth, singupData.email, singupData.password).then((userCredential)=>{
        sendEmailVerification(auth.currentUser)
        console.log(auth.currentUser);
        navigate("/")
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode == "auth/email-already-in-use"){
          setError({email: "your email already exits"});
        }else{
          setError({email: ""})
          console.log("your email verify pleace");
        }
      });
      setSignupdata({
        email: "",
        fullname : "",
        password: ""
      })
      setTimeout(() => {
        setLoader(false)
      }, 2000);
      
      // setLoader(false)
      
      
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
                <Input onChange={handelFrom} value={singupData.email} name="email" variant="outlined" labelText="Email Add" style="login__input-field" type="email"/>
                {error.email 
                && 
                // <p className='error'>{error.email}</p>
                <Alert variant="filled" severity="error">
                  {error.email}
                </Alert>
                }
              </div>
              <div>
                <Input onChange={handelFrom} value={singupData.fullname} name="fullname" variant="outlined" labelText="Full Name" style="login__input-field" type="text"/>
                {error.fullname 
                && 
                <Alert variant="filled" severity="error">
                  {error.fullname}
                </Alert>
                }
              </div>
              <div>
                <Input onChange={handelFrom} value={singupData.password} name="password" variant="outlined" labelText="Type Password" style="login__input-field" type="password"/>
                {error.password 
                &&
                <Alert variant="filled" severity="error">
                  {error.password}
                </Alert>
                }
              </div>

              {loader
              ?
              <Rings
               visible={true}
               height="80"
               width="80"
               color="#4fa94d"
               ariaLabel="rings-loading"
               wrapperStyle={{}}
               wrapperClass=""
               />
              :
              <CustomButton onClick={handelSubmit} styleing="loginBtn" variant="contained" btnText="Login to Continue"/>
              }

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