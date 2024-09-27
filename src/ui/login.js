import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', {
                email: email,
                password: password,
            });
            console.log(response);
            setStatus('success');
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        position: 'relative',
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
        zIndex: -1,
    };

    const boxStyle = {
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        zIndex: 1,
        width: '100%',
        maxWidth: '400px',
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
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        id="email"
                        margin="normal"
                        required
                        sx={inputStyle}
                        variant="outlined"
                        onChange={(e) => { setEmail(e.target.value); }}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        id="password"
                        margin="normal"
                        required
                        sx={inputStyle}
                        variant="outlined"
                        onChange={(e) => { setPassword(e.target.value); }}
                    />
                    <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        sx={buttonStyle}
                    >
                        Login
                    </Button>
                    {status === 'success' && <Alert severity="success">Logged in successfully!</Alert>}
                    {status === 'error' && <Alert severity="error">Login failed. Please try again.</Alert>}
                </form>
            </Box>
        </Box>
    );
}
