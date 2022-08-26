import React from 'react';
import { useState, useContext } from 'react';
import axios from 'axios';

import { Container, Box, Button, TextField } from '@mui/material';
import {CurrentUserContext} from '../index';

export default function LoginPage (props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [mode, setMode] = useState('login')
    const [message, setMessage] = useState(null)
    const [loading, isLoading] = useState('')

    // context hook for current user
    const {user, setUser} = useContext(CurrentUserContext);

    // verify users passwords match on new account creation
    function verifyEmailAndPassword () {
        if(password !== '' && email !== '') {
            return true
        } else {
            setMessage('Email/Password cannot be blank')
            return false
        }
    }

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

    // sumbit the sign in form to the user login service
    function handleSignIn () {
        if (!verifyEmailAndPassword()) {
            setMessage('You cannot submit a blank form')
            return
        }
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
            const {user_id, user_email} = r.data.data
            setUser({user_id, user_email})
            setMessage('Login Success');
        })
        .catch(err => {
            console.log(err)
            setMessage(err.data.message);
        })
    }

    // submit user creation form data to user service
    function handleCreateUser () {
        if(!verifySignUpForm()){
            return
        }
        const config = {
            url: '/api/user',
            method: 'POST',
            data: {
                'user_email': email,
                'password': password
            }
        }
        axios(config)
        .then(r => {
           setMode('login')
           setMessage('Created new user, You can now sign in')
        })
        .catch(err => {
            console.log(err)
            setMessage(err.data.message);
        })
    }

    if(mode === 'login') {
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
                    <h2 style={{ color: '#fff', position: 'absolute', top: '25%'}}>
                        Login
                    </h2>
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
                            setMode('create')
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
                    <h2 style={{
                            color: '#fff',
                            position: 'absolute',
                            top: '20%'
                       }}
                    >
                        Sign Up
                    </h2>
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
                        onClick={() => handleCreateUser()}
                    >
                        Create Account
                    </Button>
                    <Button
                        variant='text'
                        onClick={() => {
                            setMode('login')
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