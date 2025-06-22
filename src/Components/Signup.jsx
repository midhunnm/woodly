import { Button, TextField } from '@mui/material'
import React from 'react'
import './Signup.css'
const Signup = () => {
    return (
        <div class="signup">
            <TextField id="standard-basic" label='Username'  variant="outlined" /><br /><br />
            <TextField id="standard-basic" label='Email' variant="outlined" /><br /><br />
            <TextField id="standard-basic" label='Password' type='password' variant="outlined" /><br /><br />
            <TextField id="standard-basic"label=' Confirm Password' type='password ' variant="outlined" /><br /><br />
            <Button variant="outlined">SIGNUP</Button><br />
        </div>
    )
}

export default Signup
