import React, {useContext} from 'react';
import {CurrentUserContext} from '../../index';
import {Box, Button, Avatar, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function UserBug (props) {

    const {user, setUser} = useContext(CurrentUserContext);

    function handleSignOut () {
        const config = {
            url: '/api/service/logout',
            method: 'POST'
        }
        axios(config)
        .then(r => {
            setUser(null)
        })
        .catch(err => {
            console.log(err)
        })
    }

    if(user) {
        // pull the first letter out of the email in the user object
        const firstName = user.user_email[0];

        return (
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
            }}>
               <Avatar
                sx={{
                    bgcolor: `${user.color}`
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
                        variant='h5'
                        sx={{
                            color: 'white'
                        }}
                    >
                        {user.user_email}
                    </ Typography>
                    <Button
                        variant="contained"
                        onClick={() => handleSignOut()}
                    >
                        logout
                    </Button>
                </Box>
            </Box>
        )
    } else {
        // if there is no user, show a login button
        return(
            <Button variant="contained">
                <Link style={{textDecoration: 'none'}} to="/login">Login</Link>
            </Button>
        )
    }

}

