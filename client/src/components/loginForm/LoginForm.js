
import React, {useState} from 'react';
import {Box, Container, Button, TextField, Typography} from '@mui/material';


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

    if(props.mode === 'login') {
        return (
            <Container sx={{
                display: 'grid',
                placeItems: 'center',
                height: '100vh',
                maxWidth: '80%'
            }}>
                <Box sx={{
                        width: '80%',
                        height: '30%',
                        borderRadius: '.5em',
                        justifyContent: 'center',
                        background: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1em',
                        padding: '1.5em'
                        }}
                >
                    <Typography variant='h3' style={{ color: '#fff', position: 'absolute', top: '25%'}}>
                        Login
                    </ Typography>
                    {message ? <span>{message}</span> : null}
                    <TextField
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        variant="filled"
                        label="Email"
                    />
                    <TextField
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        variant="filled"
                        label="Password"
                        type="password"
                    />
                    <Button
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
            </Container>
        )
    } else {
        return (
            <Container sx={{
                display: 'grid',
                placeItems: 'center',
                height: '100vh',
                maxWidth: '80%'
            }}>
                <Box sx={{
                        width: '80%',
                        height: '40%',
                        borderRadius: '.5em',
                        justifyContent: 'center',
                        background: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1em',
                        padding: '1.5em'
                        }}
                >
                    <Typography variant='h2' style={{
                            color: '#fff',
                            position: 'absolute',
                            top: '20%'
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
            </Container>
        )
    }
}