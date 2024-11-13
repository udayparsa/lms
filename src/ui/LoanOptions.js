import React, { useState } from 'react';
import { Box, TextField, Typography, Button, MenuItem } from '@mui/material';
import axios from 'axios';

export default function LoanOptions() {
  const [formData, setFormData] = useState({
    file: null,
    name: '',
    creditscore: '',
    empstatus: '',
    address: '',
    age: ''
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit= async(event)=>{
    event.preventDefault();
    console.log(formData);
    try{
      const response= await axios.post('http://localhost:8080/upload',formData);
      console.log(response)
    }catch(error){
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    }
  }

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: 'auto',
        padding: 4,
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: 3,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#006064', fontWeight: 600 }}>
        Apply for Loan
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        
        <TextField
          label="Credit Score"
          name="creditscore"
          type="number"
          value={formData.creditscore}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        
        <TextField
          label="Employment Status"
          name="empstatus"
          select
          value={formData.empstatus}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        >
          <MenuItem value="Employed">Employed</MenuItem>
          <MenuItem value="Unemployed">Unemployed</MenuItem>
          <MenuItem value="Self-Employed">Self-Employed</MenuItem>
        </TextField>

        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        
        <TextField
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />

        <Box mt={2}>
          <Typography variant="body1" gutterBottom>
            Upload Document
          </Typography>
          <input
            type="file"
            onChange={handleFileChange}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            marginTop: 3,
            padding: 1.5,
            backgroundColor: '#006064',
            color: '#fff',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#004d40',
            },
          }}
        >
          Submit Application
        </Button>
      </form>
    </Box>
  );
}
