import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        display: 'center', 
        justifyContent: 'center', 
        alignItems: 'center',
        height: '40vh', 
      }}
      noValidate
      autoComplete="off"
    >
      <div className="row">
        <h1>Registration Form</h1>
        <div className="col-3">
        Name
          <TextField id="standard-basic" label="Enter Name" variant="standard" />
        </div>
        
        <div className="col-3">
        Email
          <TextField id="standard-basic" label="Enter Email" variant="standard" />
        </div>
        <div className="col-3">
        Passw
          <TextField id="standard-basic" label="Enter Password" variant="standard" />
        </div>
        
      </div>
    </Box>
  );
}
