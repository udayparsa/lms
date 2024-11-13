import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, CardActions, Button, Grid, Dialog, DialogContent } from '@mui/material';
import LoanOptions from './LoanOptions'; // Ensure this path is correct based on your file structure

const loanTypes = [
  {
    title: "Personal Loans",
    description: "Flexible loans for personal use.",
    imageUrl: "https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/personal-loan/5-ways-you-can-use-a-personal-loan-for-career-development-717x404.jpg",
  },
  {
    title: "Home Loans",
    description: "Loans to buy your dream home.",
    imageUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Car Loans",
    description: "Finance your next vehicle.",
    imageUrl: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Education Loans",
    description: "Support your educational expenses.",
    imageUrl: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2016/10/24/513072-student-loan-thinkstockphotos-102316.jpg",
  },
];

export default function Applyloan() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ 
      textAlign: 'center', 
      p: 5, 
      backgroundColor: '#e0f7fa', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center' 
    }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#444' }}>
        Apply Loans Here..!
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {loanTypes.map((loan, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ maxWidth: 345, borderRadius: 3, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={loan.imageUrl}
                alt={loan.title}
                sx={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#1a73e8' }}>
                  {loan.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {loan.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', paddingBottom: 2 }}>
                <Button variant="contained" color="primary" sx={{ borderRadius: 2 }} onClick={handleClickOpen}>
                  Apply Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center', color: '#777' }}>
        <Typography variant="body2">© PARSA UDAY KUMAR | All Rights Reserved</Typography>
      </Box>

      {/* Dialog Component */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogContent>
          <LoanOptions />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
