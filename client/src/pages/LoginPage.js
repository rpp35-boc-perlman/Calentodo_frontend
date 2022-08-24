import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import Btn from '../components/Button';
import TextInput from '../components/TextField';
import { Container, Box } from '@mui/material';


export default function LoginPage (props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [mode, setMode] = useState('login')

    // verify users passwords match on new account creation
    function verifyPassword () { 
        return password === password2
    }

    function handleSignIn () {
        const config = {
            url: '/userService/login',
            method: 'POST',
            data: {
                'user_email': email,
                'password': password
            }
        }
        axios(config)
        .then(r => {
            console.log(r)
        })
        .catch(err => {
            console.log(err)
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
                    <TextInput
                        onChange={setEmail}
                        value={email}
                        label="Email"
                    />
                    <TextInput 
                        onChange={setPassword}
                        value={password}
                        label="Password"
                        type="password"
                    />
                    <Btn 
                        text="Login"
                        onClick={() => handleSignIn()}
                    />
                    <Btn
                        variant="text"
                        text="Don't have an account yet?"
                        onClick={() => setMode('create')}
                    />
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
                    <h2 style={{ color: '#fff', position: 'absolute', top: '20%'}}>
                        Sign Up
                    </h2>
                    <TextInput
                        onChange={setEmail}
                        value={email}
                        label="Email"
                    />
                    <TextInput 
                        onChange={setPassword}
                        value={password}
                        label="Password"
                        type="password"
                    />
                    <TextInput 
                        onChange={setPassword2}
                        value={password2}
                        label="Confirm Password"
                        type="password"
                    />
                    <Btn text="Create Account" />
                    <Btn
                        text="Already have an Account?"
                        variant='text'
                        onClick={() => setMode('login')}
                    />

                </Box>
            </Container>
        )
    }

}