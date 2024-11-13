import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  CssBaseline,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Link } from 'react-router-dom';

const loanTypes = [
  {
    title: 'Personal Loans',
    description: 'Flexible loans for personal use.',
    details: 'Personal loans can be used for various purposes like consolidating debt, home improvement, or unexpected expenses.',
    image: 'https://images.pexels.com/photos/7731323/pexels-photo-7731323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    interestRate: '10.5% - 15.5% per annum',
    loanAmount: '₹10,000 to ₹20,00,000',
    tenure: '1 to 6 years',
    processingFee: 'Up to 2% of the loan amount',
  },
  {
    title: 'Home Loans',
    description: 'Loans to buy your dream home.',
    details: 'Home loans are typically secured against the property you are purchasing, and they come with different interest rates.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600',
    interestRate: '8.5% - 9.5% per annum',
    loanAmount: '₹3,00,000 to ₹5,00,00,000',
    tenure: '10 to 30 years',
    processingFee: 'Up to 1% of the loan amount',
  },
  {
    title: 'Car Loans',
    description: 'Finance your next vehicle.',
    details: 'Car loans can help you purchase a vehicle with a fixed payment plan over time. Interest rates can vary significantly.',
    image: 'https://images.pexels.com/photos/10843557/pexels-photo-10843557.jpeg?auto=compress&cs=tinysrgb&w=600',
    interestRate: '7.0% - 9.5% per annum',
    loanAmount: '₹1,00,000 to ₹1,00,00,000',
    tenure: '1 to 7 years',
    processingFee: 'Up to 1% of the loan amount',
  },
  {
    title: 'Education Loans',
    description: 'Support your educational expenses.',
    details: 'Education loans help students pay for their higher education expenses, often with favorable repayment options.',
    image: 'https://tse2.mm.bing.net/th?id=OIP.KjT7jbNEuSTQh7P6z57JJQHaEo&pid=Api&P=0&h=180',
    interestRate: '8.5% - 10.5% per annum',
    loanAmount: '₹10,000 to ₹20,00,000',
    tenure: '5 to 15 years',
    processingFee: 'Varies, often around ₹500 to ₹1,000',
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(null);

  const handleClickOpen = (loan) => {
    setSelectedLoan(loan);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedLoan(null);
  };

  return (
    <Box
      sx={{
        backgroundImage:
          'url(https://plus.unsplash.com/premium_photo-1661763036649-2c4c70e8a97b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
        backdropFilter: 'blur(8px)', // Background blur effect for a more polished look
      }}
    >
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', boxShadow: 4 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" color="inherit">Loan Management</Typography>
          <Box>
            <Button color="inherit" sx={{ mx: 1 }} component={Link} to="/register">
              Sign Up
            </Button>
            <Button color="inherit" sx={{ mx: 1 }} component={Link} to="/login">
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container
        component="main"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          borderRadius: '10px',
          padding: '40px',
          mt: 6,
          boxShadow: 3,
          backdropFilter: 'blur(5px)', // Adding blur to content area for smooth effect
        }}
      >
        <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 700, fontSize: '36px', color: '#333', letterSpacing: '2px' }}>
          Welcome to the Loan Management System
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {loanTypes.map((loan) => (
            <Grid item key={loan.title} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '400px',
                  boxShadow: 4,
                  borderRadius: '12px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease', // Smooth hover transitions
                  '&:hover': {
                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
                    transform: 'scale(1.05)',
                    filter: 'brightness(1.1)', // Brighten on hover
                  },
                }}
              >
                <img
                  src={loan.image}
                  alt={loan.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                  }}
                />
                <CardContent sx={{ flexGrow: 1, padding: '20px', textAlign: 'center' }}>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: '#3f51b5' }}>
                    {loan.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: '#555' }}>
                    {loan.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 3,
                      backgroundColor: '#3f51b5',
                      color: 'white',
                      '&:hover': { backgroundColor: '#2c387e' },
                      padding: '10px 20px',
                      borderRadius: '20px',
                    }}
                    onClick={() => handleClickOpen(loan)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <footer style={{ marginTop: '40px', padding: '20px 0', textAlign: 'center', backgroundColor: '#3f51b5' }}>
        <Typography variant="body2" color="white">
          © 2024 Loan Management System | All Rights Reserved
        </Typography>
      </footer>

      {/* Dialog for displaying loan details */}
      <Dialog open={open} onClose={handleClose} sx={{ '& .MuiDialog-paper': { borderRadius: '12px', padding: '30px' } }}>
        <DialogTitle sx={{ backgroundColor: '#3f51b5', color: 'white', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}>
          {selectedLoan ? selectedLoan.title : ''}
        </DialogTitle>
        <DialogContent sx={{ padding: '20px' }}>
          <Typography variant="body1" sx={{ color: '#333' }}>
            {selectedLoan ? selectedLoan.details : ''}
          </Typography>
          {selectedLoan && (
            <>
              <Typography variant="body2" sx={{ mt: 2 }}>
                <strong>Interest Rate:</strong> {selectedLoan.interestRate}
              </Typography>
              <Typography variant="body2">
                <strong>Loan Amount:</strong> {selectedLoan.loanAmount}
              </Typography>
              <Typography variant="body2">
                <strong>Tenure:</strong> {selectedLoan.tenure}
              </Typography>
              <Typography variant="body2">
                <strong>Processing Fee:</strong> {selectedLoan.processingFee}
              </Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: '#3f51b5' }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
