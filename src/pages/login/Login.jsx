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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // let handelPassword =()=>{
  //   if(open){
  //     setOpen(false)
  //   }else{
  //     setOpen(true)
  //   }
  // }
  

  let handleModalClose =()=>{
    setOpen(false)
  }
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
               <Input name="email" variant="standard" labelText="Email Add" style="login__input-field" type="email"/>
              </div>
              <div className='eye'>
                  <Input name="password" variant="standard" labelText="Type Password" style="login__input-field" type={password ? "text" : "password"}/>
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
             <CustomButton styleing="loginBtn" variant="contained" btnText="Login to Continue"/>
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

  {/* modal start */}
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
      <Input name="email" variant="standard" labelText="Email Add" style="login__input-field" type="email"/>
      <CustomButton onClick={handleModalClose} btnText="Send Link" styleing="loginBtn" variant="contained"/>
      </div>
    </Box>
  </Modal>

  {/* modal end */}
    </>
  
  )
}

export default Login