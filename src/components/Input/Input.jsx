import React from 'react';
import './input.css'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Input = (props) => {
    return (
        <Box
        component="div"
        sx={{
          '& > :not(style)': { m: 1, width: '30ch', p: 2, border: '1px solid blue',  color:"primary" },
        }}
      >
        <TextField variant="outlined" onChange={(event)=> props.setValue(event.target.value)}
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        />
      </Box>
    );
};

export default Input;

