import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import './login.css';
import SectionHeading from '../../components/SectionHeading';
import GoogleSvg from '../../../public/google.svg';
import Input from '../../components/Input';
import CustomButton from '../../components/CustomButton';
import AuthNavigate from '../../components/AuthNavigate';
import LoginImg from '../../assets/images/login.jpg';
import Image from '../../utilities/Image';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Box,Modal} from '@mui/material';
import { SlClose } from "react-icons/sl";
import Alert from '@mui/material/Alert';






// modal state start
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}; 
// modal state end
const Login = () => {

  let [password, setPassowrd] = useState(false);
  let [open, setOpen] = React.useState(false);
  let [fromData, SetfromData] = useState({
    email : "",
    password : "",
    forgotEmail : ""
  })
  let [error, setError] = useState({
    email : "",
    password : "",
    forgotEmail : ""
  })


  let emailRegex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  let passRegex = /^[A-Za-z]\w{7,14}$/


  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  let handelFrom = (e) =>{
    let {name, value} = e.target;
    SetfromData({
      ...fromData,
      [name] : value
    })
  }

  let handleModalClose =()=>{
    if(!fromData.forgotEmail){
      setError({forgotEmail: "type your Email"})
    }else if(!fromData.forgotEmail.match(emailRegex)){
      setError({forgotEmail: "Wrong Formate"})
    }else{
      handleClose(false)
      setError({forgotEmail: ""})
      console.log("ok");
    }
  }
  let handelLogin = () =>{
    if(!fromData.email){
      setError({email : "type your email"})
    }
    else if(!fromData.email.match(emailRegex)){
      setError({email : "Wrong Email"})
    }
    else if(!fromData.password){
    setError({password: "input your password"})
  }
  else if(fromData.password.match(passRegex)){
    setError({password: "Please type strong password"})
    }
    else{
      setError({
        email : "",
        password : "",
        forgotEmail : ""
      })
      console.log("ok all");
    }
  }

  // console.log(fromData.forgotEmail);

  return (
    <>    
    <div>
    <Grid container>
      <Grid item xs={6}>
        <div className='loginbox'>
          <div className='loginbox__inner'>
            <SectionHeading style='auth_heading' text='Login to your account!'/>
            <div className="provider_login">
              <img src={GoogleSvg} alt="/" />
              <span>Login with Google</span>
            </div>
            <div className='from_main'>

              <div>
               <Input onChange={handelFrom} name="email" variant="standard" labelText="Email Add" style="login__input-field" type="email"/>              
               {
                error.email &&
               <Alert variant="filled" severity="error">
                  {error.email}
                </Alert>
               }
              </div>

              <div className='eye'>
              <Input onChange={handelFrom} name="password" variant="standard" labelText="Type Password" style="login__input-field" type={password ? "text" : "password"}/>
              {
              error.password &&
                <Alert variant="filled" severity="error">
                  {error.password}
                </Alert>
              }
                <div>
                {
                  password
                  ?
                  <FaEye className='eyeBtn' onClick={()=> setPassowrd(!password)}/>
                  :
                  <FaEyeSlash className='eyeBtn' onClick={()=> setPassowrd(!password)}/>
                }
                </div>
              </div>
             <CustomButton  onClick={handelLogin} styleing="loginBtn" variant="contained" btnText="Login to Continue"/>
            </div>
            <p className='login__auth'>
              Forgot Password ?
              <span onClick={handleOpen} >Click here</span>
            </p>
            <AuthNavigate style="login__auth" link="/registration" text="Don’t have an account ? " linkText="Sign up"/>
          </div>
        </div>
      </Grid>
      <Grid item xs={6}>
       <h1 className='loginimg'>
        <Image source={LoginImg} alt="login image"/>
       </h1>
      </Grid>
    </Grid>
  </div>

  {/*forgot password modal start */}
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <div className='modal__btn'>
        <button className='close_modal' onClick={handleModalClose}><SlClose className='close_modal--icon'/></button>
      </div>
      <div className='forgot_box'>
      <h2>Forgot Password</h2>
      <div>
      <Input onChange={handelFrom} name="forgotEmail" variant="standard" labelText="Email Add" style="login__input-field" type="email"/>
      {
        error.forgotEmail &&
        <Alert variant="filled" severity="error">
        {error.forgotEmail}
      </Alert>
      }
      </div>
        <CustomButton onClick={handleModalClose} btnText="Send Link" styleing="loginBtn" variant="contained"/>
        {/* {
          fromData.forgotEmail &&
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          Here is a gentle confirmation that your action was successful.
        </Alert>
        } */}
      </div>
    </Box>
  </Modal>

  {/* modal end */}
    </>
  
  )
}

export default Login