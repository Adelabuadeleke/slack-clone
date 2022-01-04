import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth, provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () =>{
    auth.signInWithPopup(provider)
    .then(result =>{
      console.log(result);
      dispatch({
        type:actionTypes.SET_USER,
        user:result.user,
      })
    })
    .catch(error =>{
      alert(error.message)
    })
  }
  return (
   
    <div className='login'>
      <div className='login__container'>
        {/* <img src='https://cdn.mos.cms.futurecdn.net/SD' alt='Slack_logo' /> */}
        <img src='https://res.cloudinary.com/adelabuadeleke/image/upload/v1641299409/slack_efyis1.png' alt='Slack_logo' />
        <h1>Sign in to Agba Coder!</h1>
        <p>Agbacoder.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  )
}

export default Login
