import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
  Box,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function main() {
  return (
    <Container>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">Loan Management System</Typography>
        </Toolbar>
      </AppBar>

      <Box mt={4} mb={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to the Loan Management System
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary">
          Manage your loans efficiently and effectively.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Personal Loans</Typography>
              <Typography variant="body2" color="textSecondary">
                Get funds for your personal needs at flexible terms.
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Home Loans</Typography>
              <Typography variant="body2" color="textSecondary">
                Financing your dream home with low interest rates.
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
              Apply Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Business Loans</Typography>
              <Typography variant="body2" color="textSecondary">
                Grow your business with our tailored loan solutions.
              </Typography>
              <Button variant="contained" color="primary" fullWidth>
                Apply Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box mt={4}>
        <Paper elevation={3} style={{ padding: '16px' }}>
          <Typography variant="h6" align="center">Why Choose Us?</Typography>
          <Typography variant="body1" align="center" color="textSecondary">
            - Competitive interest rates
            <br />
            - Flexible repayment options
            <br />
            - Quick and easy application process
            <br />
            - Personalized customer support
          </Typography>
        </Paper>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box mt={4}>
        <Typography variant="h5" align="center">Features of Our Loan Management System</Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">User-Friendly Interface</Typography>
                <Typography variant="body2" color="textSecondary">
                  Navigate easily through our platform with an intuitive design.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Real-Time Updates</Typography>
                <Typography variant="body2" color="textSecondary">
                  Stay informed with real-time updates on your loan status.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Secure Transactions</Typography>
                <Typography variant="body2" color="textSecondary">
                  Your data is safe with us, thanks to advanced security measures.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box mt={4}>
        <Typography variant="h5" align="center">What Our Clients Say</Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2} style={{ padding: '16px', textAlign: 'center' }}>
              <Typography variant="body1">
                "This system made applying for a loan so simple and fast. Highly recommend!"
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">- Jane Doe</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={2} style={{ padding: '16px', textAlign: 'center' }}>
              <Typography variant="body1">
                "Great customer service and support throughout the process!"
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">- John Smith</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box mt={4}>
        <Typography variant="h5" align="center">Frequently Asked Questions</Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">What is the application process?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="textSecondary">
                  The application process is simple and can be completed online in just a few minutes.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">What documents are required?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="textSecondary">
                  You'll need to provide proof of identity, income, and any other relevant financial information.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">How long does it take to get approved?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="textSecondary">
                  Approval times vary, but most applications are processed within 24-48 hours.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box mt={4} mb={4}>
        <Typography variant="h5" align="center">Contact Us</Typography>
        <Typography variant="body1" align="center" color="textSecondary">
          Have questions? Reach out to us at:
        </Typography>
        <Typography variant="body1" align="center">
          Email: support@loanmanagement.com | Phone: (123) 456-7890
        </Typography>
      </Box>
    </Container>
  );
}
