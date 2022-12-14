import React from 'react';
import { useState, useContext } from 'react';
import axios from 'axios';
import backgroundSVG from '../svg/liquid-cheese.svg';

import {
  Box,
  Backdrop,
  CircularProgress,
} from '@mui/material';
import { CurrentUserContext } from '../index';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/loginForm/LoginForm';

export default function LoginPage(props) {
  const [mode, setMode] = useState('login');
  const [message, setMessage] = useState(null);
  const [loading, isLoading] = useState(false);

  // context hook for current user
  const { user, setUser } = useContext(CurrentUserContext);

  // use Nagivate hook to navigate to different pages - must be called in the component body
  const navigate = useNavigate();

  // sumbit the sign in form to the user login service
  function handleSignIn(email, password) {
    isLoading(true);
    const config = {
      url: '/api/service/login',
      method: 'POST',
      data: {
        user_email: email,
        password: password,
      },
    };
    axios(config)
      .then((r) => {
        // pull the user_id, email, and color out of the respsonse
        const { user_id, user_email, color } = r.data.data;
        setUser({ user_id, user_email, color, expires: Date.now() + 3600000 });
        isLoading(false);
        // redirect user back to the app after they login
        navigate('/');
      })
      .catch((err) => {
        isLoading(false);
        console.log(err);
        setMessage(err.message);
      });
  }

    // sumbit the sign in form to the user login service
    function handleSignIn (email, password) {
        isLoading(true)
        const config = {
            url: '/api/service/login',
            method: 'POST',
            data: {
                'user_email': email,
                'password': password
            }
        }
        axios(config)
        .then(r => {
            // pull the user_id, email, and color out of the respsonse
            const {user_id, user_email, color} = r.data.data
            setUser({user_id, user_email, color})
            // create a timestamp that expires in 1 hour
            const expires = new Date(Date.now() + 3600000)
            // store the current users info in local storage
            localStorage.setItem('user', JSON.stringify({user_id, user_email, color, expires}))
            isLoading(false)
            // redirect user back to the app after they login
            navigate('/')
        })
        .catch(err => {
            isLoading(false)
            setMessage(err.response.data.message);
        })
    }

    // submit user creation form data to user service
    function handleCreateUser (email, password) {
        isLoading(true)
        const config = {
            url: '/api/users',
            method: 'POST',
            data: {
                'user_email': email,
                'password': password
            }
        }
        axios(config)
        .then(r => {
            isLoading(false)
            setMode('login')
            setMessage(`Created ${email}, Welcome!`)
        })
        .catch(err => {
            isLoading(false)
            setMessage(err.response.data.message);
        })
    }

    return (
        <Box sx={{
            display: 'grid',
            // flexDirection: 'column',
            placeItems: 'center',
            height: '100vh',
            width: '100vw',
            background: `url(${backgroundSVG})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <Backdrop
                open={loading}
                sx={{
                    zIndex: '2000',
                }}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <LoginForm
                mode={mode}
                setMode={setMode}
                message={message}
                setMessage={setMessage}
                handleSignIn={handleSignIn}
                handleSignUp={handleCreateUser}
            />
        </ Box>
    )

}

