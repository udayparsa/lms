import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { Line, Bar } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [loanStats, setLoanStats] = useState({
    totalLoans: 0,
    acceptedLoans: 0,
    rejectedLoans: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoanData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/loanCounts');
        const { totalLoans, acceptedLoans, rejectedLoans } = response.data;
        setLoanStats({ totalLoans, acceptedLoans, rejectedLoans });
        console.log(totalLoans);
      } catch (error) {
        console.error('Error fetching loan stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoanData();
  }, []);

  const { totalLoans, acceptedLoans, rejectedLoans } = loanStats;

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue',
        data: [1200, 1900, 3000, 5000, 4200, 5300],
        fill: false,
        borderColor: '#4A90E2',
        tension: 0.1,
      },
    ],
  };

  const barData = {
    labels: ['Personal Loans', 'Home Loans', 'Car Loans', 'Education Loans'],
    datasets: [
      {
        label: 'Loans',
        data: [300, 500, 400, 700],
        backgroundColor: ['#4A90E2', '#34c38f', '#f46a6a', '#f1b44c'],
      },
    ],
  };

  const cardStyle = {
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  return (
    <Box sx={{ padding: 5, backgroundColor: '#006064', minHeight: '100vh' }}>
      <Typography variant="h4" align="center" sx={{ color: 'white', fontWeight: 600 }}>
        Dashboard
      </Typography>

      {loading ? (
        <Typography variant="h6" align="center" sx={{ color: 'white', marginTop: 3 }}>
          Loading loan statistics...
        </Typography>
      ) : (
        <Grid container spacing={3} sx={{ marginTop: 3 }}>
          <Grid item xs={12} md={4}>
            <Paper sx={cardStyle}>
              <Typography variant="h5">Total Loans</Typography>
              <Typography variant="h6">{totalLoans}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={cardStyle}>
              <Typography variant="h5">Accepted Loans</Typography>
              <Typography variant="h6">{acceptedLoans}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={cardStyle}>
              <Typography variant="h5">Rejected Loans</Typography>
              <Typography variant="h6">{rejectedLoans}</Typography>
            </Paper>
          </Grid>
        </Grid>
      )}

      <Grid container spacing={3} sx={{ marginTop: 5 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 3 }}>
            <Typography variant="h6" align="center" sx={{ marginBottom: 3 }}>
              Revenue Over Time
            </Typography>
            <Line data={lineData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 3 }}>
            <Typography variant="h6" align="center" sx={{ marginBottom: 3 }}>
              Loan Types Distribution
            </Typography>
            <Bar data={barData} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
