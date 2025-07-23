import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Button,
} from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ApprovalIcon from '@mui/icons-material/Approval';

import axios from 'axios';

export default function Main() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const email = localStorage.getItem('email');
      console.log("Fetched email from localStorage:", email);

      if (!email) {
        navigate('/');
        return;
      }

      try {
        const res = await axios.get(`http://localhost:8080/${email}`);
        console.log("Backend response:", res.data);
        setUsername(res.data.name || 'User');
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('email');
    navigate('/');
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        '& .MuiDrawer-paper': {
          width: 250,
          backgroundColor: '#e0f7fa',
          color: '#006064',
          paddingTop: 2,
        },
      }}
    >
      <Typography variant="h6" align="center" sx={{ mb: 2 }}>
        Loan Management System
      </Typography>

      {username ? (
        <Typography variant="body1" sx={{ paddingLeft: 2, paddingBottom: 2 }}>
          Welcome, {username}!
        </Typography>
      ) : (
        <Typography variant="body2" sx={{ paddingLeft: 2, paddingBottom: 2 }}>
          Loading user...
        </Typography>
      )}

      <List>
        <ListItem button component={Link} to="/layout/dashboard">
          <ListItemIcon>
            <DashboardIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button component={Link} to="/layout/applied-loans">
          <ListItemIcon>
            <AccountBalanceIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Applied Loans" />
        </ListItem>

        <ListItem button component={Link} to="/layout/applyloans">
          <ListItemIcon>
            <ApprovalIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Apply Loans" />
        </ListItem>

        <ListItem button component={Link} to="/layout/repayment-schedule">
          <ListItemIcon>
            <ScheduleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Repayment Schedule" />
        </ListItem>

        <ListItem button component={Link} to="/layout/settings">
          <ListItemIcon>
            <SettingsIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>

        <ListItem button component={Link} to="/layout/support">
          <ListItemIcon>
            <SupportAgentIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
      </List>

      <Button
        onClick={handleLogout}
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#006064',
          color: '#fff',
          width: '80%',
          '&:hover': {
            backgroundColor: '#004d40',
          },
        }}
      >
        Logout
      </Button>
    </Drawer>
  );
}
