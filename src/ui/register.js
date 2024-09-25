import React, { useState } from 'react';
import { TextField, Button, Typography, Box,Alert } from '@mui/material';
import axios from 'axios';
export default function Register() {
  const[status,setStatus]=useState(false);
  const[name,setName]=useState('');
  const[age,setAge]=useState(0);
  const[email,setEmail]=useState('');
  const[aadharno,setAadharno]=useState('');
  const[password,setPassword]=useState('');
  const[jobtitle,setJobtitle]=useState('');
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/insert', {
        name: name,
        age: age,
        email: email,
        aadharno:aadharno,
        password:password,
        jobtitle:jobtitle,
      });
      if (response.status === 200) {
        setStatus(true);
      } else {
        console.log('Unexpected response status:', response.status);
      }
    } catch (error) {
      console.log(status);
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    }
  };

  const containerStyle = {
    position: 'relative',
    minHeight: '100vh', // Full viewport height
    overflow: 'hidden',
  };

  const backgroundStyle = {
    backgroundImage: 'url(https://img.freepik.com/free-photo/financial-income-economic-diagram-money-concept_53876-121065.jpg?size=626&ext=jpg&ga=GA1.1.2076430500.1706848681&semt=ais_hybrid)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1, // Keep it behind other elements
  };

  const boxStyle = {
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background for form
    zIndex: 1, // Ensure it is above the background
    width: '100%', // Full width for the form box
    maxWidth: '400px', // Set a max width for better appearance
    margin: 'auto', // Center the form box
  };

  const titleStyle = {
    marginBottom: '1.5rem',
    color: '#333',
  };

  const inputStyle = {
    marginBottom: '1rem',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#007bff',
      },
      '&:hover fieldset': {
        borderColor: '#0056b3',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0056b3',
      },
    },
  };

  const buttonStyle = {
    marginTop: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <Box sx={containerStyle}>
      <Box sx={backgroundStyle} />
      <Box sx={boxStyle}>
        <Typography variant="h5" align="center" sx={titleStyle}>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField 
            fullWidth 
            label="Name"
            id='name' 
            margin="normal" 
            required 
            sx={inputStyle} 
            variant="outlined"
            onChange={(e)=>{setName(e.target.value)}}
          />
          <TextField 
            fullWidth 
            label="Age" 
            id='age'
            type="number" 
            margin="normal" 
            required 
            sx={inputStyle} 
            variant="outlined"
            onChange={(e)=>{setAge(e.target.value)}}
          />
          <TextField 
            fullWidth 
            label="Email" 
            type="email" 
            id='email'
            margin="normal" 
            required 
            sx={inputStyle} 
            variant="outlined"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <TextField 
            fullWidth 
            label="Aadhaar Number" 
            type="text" 
            id='aadharno'
            inputProps={{ pattern: "\\d{12}" }} 
            margin="normal" 
            title="Aadhaar number must be 12 digits." 
            required 
            sx={inputStyle} 
            variant="outlined"
            onChange={(e)=>{setAadharno(e.target.value)}}
          />
          <TextField 
            fullWidth 
            label="Password" 
            type="password" 
            id='password'
            margin="normal" 
            required 
            sx={inputStyle} 
            variant="outlined"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <TextField 
            fullWidth 
            label="Job Title" 
            id='jobtitle'
            margin="normal" 
            required 
            sx={inputStyle} 
            variant="outlined"
            onChange={(e)=>{setJobtitle(e.target.value)}}
          />
          <Button 
            variant="contained" 
            type="submit" 
            fullWidth 
            sx={buttonStyle}
          >
            Register
          </Button>
          {status && <Alert severity="success"> Registered successfully</Alert>}
        </form>
      </Box>
    </Box>
  );
}
