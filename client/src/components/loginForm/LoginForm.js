
import React, {useState} from 'react';
import {Box, Container, Button, TextField, Typography, useMediaQuery} from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import calendar from '../../svg/calendar.jpg';


export default function LoginForm (props) {

    // state to toggle create and login mode

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // state for confirming password - should match password field
    const [password2, setPassword2] = useState('')
    const [message, setMessage] = useState(props.message || null)

    // the user should not be able to submti a blank creation form
    function verifySignUpForm () {
        if( verifyEmailAndPassword() ){
            if(password === password2){
                return true
            } else {
                setMessage('Passwords do not match')
                return false
            }
        } else {
            return false
        }
    }

    // verify that email password fields are not blank
    function verifyEmailAndPassword () {
        if(email === ''){
            setMessage('Email is required')
            return false
        } else if(password === ''){
            setMessage('Password is required')
            return false
        } else {
            return true
        }
    }

    function handleSignIn () {
        if(verifyEmailAndPassword()){
            props.handleSignIn(email, password)
        }
    }

    function handleSignUp () {
        if (verifySignUpForm()) {
            props.handleSignUp(email, password)
        }
    }

    const tablet = useMediaQuery('(max-width: 650px)');
    const laptop = useMediaQuery('(max-width: 1000px)');
    const desktop = useMediaQuery('(min-width: 1250px)');

    if(props.mode === 'login') {
        return (
            <Box sx={{
                display: tablet ? 'grid' : 'flex',
                flexDirection: tablet ? 'column' : 'row',
                alignItems: 'center',
                margin: '0 auto',
                // gap: tablet ? '5em' : 'none',
                height: '100vh',
                width: desktop ? "40em" : 'auto',
                maxWidth: '98%',
                // paddingTop: tablet ? '25%' : 'none',
            }}>
                {/* top title */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    width: desktop ? "80%" : '80%',
                    height: tablet ? 'auto' : '19em',
                    background: tablet ? '#fff' : `url(${calendar})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: tablet ? '10px' : '10px 0 0 10px',
                    padding: '1em',
                    color:'black'
                }}>
                    <Typography 
                        variant='h5'
                        sx={{
                            textAlign: 'center',
                            marginTop: tablet ? 'none' : '10em',
                        }}
                    >
                        Calentodo
                    </Typography>
                    <EventAvailableIcon sx={{
                        fontSize: '2em',
                        marginTop: tablet ? 'none' : '7.5em',
                    }}/>                 
                </Box>
                {/* login form container */}
                <Box sx={{
                        width: desktop ? '100%' : '80%',
                        height: '18em',
                        borderRadius: tablet ? '.5em' : '0 10px 10px 0',
                        justifyContent: 'center',
                        background: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1em',
                        padding: '1.5em'
                        }}
                >
                    <Typography variant='h4' style={{
                        color: 'black',
                        }}
                    >
                        Login
                    </ Typography>
                    {message ? <Typography variant='button' sx={{color: 'black'}}>{message}</Typography> : null}
                    <TextField
                        id='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        variant="filled"
                        label="Email"
                    />
                    <TextField
                        id='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        variant="filled"
                        label="Password"
                        type="password"
                    />
                    <Button
                        id='login-btn'
                        variant="contained"
                        onClick={() => handleSignIn()}
                    >
                        Login
                    </Button>
                    <Button
                        variant="text"
                        onClick={() => {
                            props.setMode('create')
                            setMessage(null)
                        }}
                    >
                        Don't have an account yet?
                    </Button>
                </Box>
            </Box>
        )
    } else {
        return (
            <Box sx={{
                display: tablet ? 'grid' : 'flex',
                flexDirection: tablet ? 'column' : 'row',
                alignItems: 'center',
                margin: '0 auto',
                // gap: tablet ? '5em' : 'none',
                height: '100vh',
                width: desktop ? "40em" : 'auto',
                maxWidth: '98%',
                // paddingTop: tablet ? '25%' : 'none',
            }}>
                {/* top title */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    width: '80%',
                    height: tablet ? 'auto' : '26em',
                    background: tablet ? '#fff' : `url(${calendar})`,
                    backgroundSize: laptop ? "fill" : 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: tablet ? '10px' : '10px 0 0 10px',
                    padding: '1em',
                    color:'black'
                }}>
                    <Typography 
                        variant='h5'
                        sx={{
                            textAlign: 'center',
                            marginTop: tablet ? 'none' : '10em',
                        }}
                    >
                        Calentodo
                    </Typography>
                    <EventAvailableIcon sx={{
                        fontSize: '2em',
                        marginTop: tablet ? 'none' : '7.5em',
                    }}/>                 
                </Box>
                {/* sign up form */}
                <Box sx={{
                        width: desktop ? '100%' : '80%',
                        height: '25em',
                        borderRadius: tablet ? '.5em' : '0 10px 10px 0',
                        justifyContent: 'center',
                        background: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1em',
                        padding: '1.5em'
                        }}
                >
                    <Typography variant='h4' style={{
                            color: 'black',
                       }}
                    >
                        Sign Up
                    </Typography>
                    {message ? <span>{message}</span> : null}
                    <TextField
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required={true}
                        variant="filled"
                        label="Email"
                    />
                    <TextField
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required={true}
                        variant="filled"
                        label="Password"
                        type="password"
                    />
                    <TextField
                        onChange={(e) => setPassword2(e.target.value)}
                        value={password2}
                        required={true}
                        label="Confirm Password"
                        variant="filled"
                        type="password"
                    />
                    <Button
                        variant="contained"
                        onClick={() => handleSignUp()}
                    >
                        Create Account
                    </Button>
                    <Button
                        variant='text'
                        onClick={() => {
                            props.setMode('login')
                            setMessage(null)
                        }}
                    >
                        Already have an Account?
                    </Button>
                </Box>
            </Box>
        )
    }
}