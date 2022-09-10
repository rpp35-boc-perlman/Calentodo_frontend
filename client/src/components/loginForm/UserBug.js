import React, {useContext, useState} from 'react';
import {CurrentUserContext} from '../../index';
import {Paper, Box, Button, Avatar, Typography} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function UserBug (props) {

    const {user, setUser} = useContext(CurrentUserContext);
    const [showButton, setShowButton] = useState(false);

    const navigate = useNavigate();

    function handleSignOut () {
        const config = {
            url: '/api/service/logout',
            method: 'POST'
        }
        axios(config)
        .then(r => {
            localStorage.removeItem('user')
            setUser(null)
            // remove user info from local storage
            navigate('/loggedOut', {replace: true})
        })
        .catch(err => {
            console.log(err)
        })
    }

    if(user) {
        // pull the first letter out of the email in the user object
        const firstName = user.user_email[0].toUpperCase();

        return (
            <Box
                onMouseEnter={() => setShowButton(true)}
                onMouseLeave={() => setShowButton(false)}
             sx={{
                    display: 'flex',
                    gap: '.5em',
                    alignItems: 'center',
                    backgroundColor: user.color ? `${user.color}` : '#3a3a3a',
                    borderBottom: '1px solid white',
                    padding: '.25em',
                    height: '10em',
                    fontSize: '13.7px',
                    lineHeight: '24px',
                    maxHeight: showButton ? '10em' : '4em',
                    transition: 'max-height .5s ease-in-out',
                }}>
               <Avatar
                sx={{
                    bgcolor: `${user.color}`,
                    border: '1px solid white',
                }}
                >
                   {firstName}
                </Avatar>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                   <Typography
                        variant='subtitle1'
                        sx={{
                            color: 'white',
                            fontSize: '13.7px',
                        }}
                    >
                        Hello, {user.user_email}
                    </ Typography>
                    {/* button hides and shows with animations */}
                    <Button
                        onClick={() => {
                            handleSignOut()
                        }}
                        sx={{
                            position: 'absolute',
                            left: showButton ? '5em' : '-30em',
                            top: '7em',
                            border: '1px solid white',
                            backgroundColor: `${user.color}`,
                            transition: ' .5s ease-in-out',
                            fontSize: '12px',
                            fontWeight: '500',
                        }}
                        variant='contained'
                        size="medium"
                    >
                        Sign Out
                    </Button>
                </Box>
            </Box>
        )
    } else {
        // if there is no user, show a login button
        return(
            <div style={{
                width: '100%',
                display: 'grid',
                placeItems: 'center',
                padding: "1em 0"
            }}>
                <Button
                    onClick={() => navigate('/login')}
                    variant="contained"
                    size="large"
                    sx={{
                        backgroundColor: '#F99F03',
                        '&hover': {
                            backgroundColor: '#F99F03',
                            padding: '.5em 2em',
                        }
                    }}
                >
                    <Link style={{textDecoration: 'none', color: '#fff'}} to="/login">Login</Link>
                </Button>
            </div>
        )
    }

}

