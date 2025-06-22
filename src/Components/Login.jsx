import { Button, TextField } from '@mui/material'
import React from 'react'
import './Login.css'
const Login = () => {
    return (
        <div class="login">
            <TextField id="standard-basic" label='Email' variant="outlined" /><br /><br />
            <TextField id="standard-basic" label='Password' type='password' variant="outlined" /><br /><br />
            <Button variant="contained">Login</Button><br />
        </div>
    )
}

export default Login
