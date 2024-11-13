import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HistoryIcon from '@mui/icons-material/History';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ApprovalIcon from '@mui/icons-material/Approval';
export default function Sidebar() {
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
        <ListItem button component={Link} to="/layout/loan-history">
          <ListItemIcon>
            <HistoryIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Loan History" />
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
    </Drawer>
  );
}
