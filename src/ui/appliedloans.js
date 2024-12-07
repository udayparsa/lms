import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';

export default function AppliedLoans() {
  const [appliedLoans, setAppliedLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPdfUrl, setSelectedPdfUrl] = useState('');

  // Fetch the email from localStorage
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      console.error('User email is not found in localStorage.');
    }
  }, []);

  useEffect(() => {
    const fetchLoans = async () => {
      if (!email) {
        console.error('User email is not provided');
        setLoading(false);
        return;
      }
      try {
        console.log(`Fetching loans for email: ${email}`);
        const response = await axios.get(`http://localhost:8080/userloans?email=${email}`);
        setAppliedLoans(response.data || []);
      } catch (error) {
        console.error('Error fetching applied loans:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLoans();
  }, [email]);

  const viewPdf = async (email, loanType) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/pdf/view/${email}/${loanType}`, {
        responseType: 'blob',
      });
      const fileURL = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
      setSelectedPdfUrl(fileURL);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error viewing PDF:', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPdfUrl('');
  };

  if (loading) {
    return (
      <Box sx={{ textAlign: 'center', marginTop: 5 }}>
        <Typography variant="h6">Loading your applied loans...</Typography>
      </Box>
    );
  }

  if (appliedLoans.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', marginTop: 5 }}>
        <Typography variant="h6">You have not applied for any loans yet.</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 5, backgroundColor: '#006064', minHeight: '100vh' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: 'white', fontWeight: 600 }}>
        Your Applied Loans
      </Typography>

      <TableContainer component={Paper} sx={{ marginTop: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Loan Type</strong></TableCell>
              <TableCell><strong>Applicant Name</strong></TableCell>
              <TableCell><strong>Credit Score</strong></TableCell>
              <TableCell><strong>Employment Status</strong></TableCell>
              <TableCell><strong>Age</strong></TableCell>
              <TableCell><strong>Address</strong></TableCell>
              <TableCell><strong>Phone Number</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Documents</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appliedLoans.map((loan, index) => (
              <TableRow key={index}>
                <TableCell>{loan.loanType}</TableCell>
                <TableCell>{loan.name}</TableCell>
                <TableCell>{loan.creditscore}</TableCell>
                <TableCell>{loan.empstatus}</TableCell>
                <TableCell>{loan.age}</TableCell>
                <TableCell>{loan.address}</TableCell>
                <TableCell>{loan.phno}</TableCell>
                <TableCell>{loan.status || 'Pending'}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => viewPdf(loan.email, loan.loanType)}>
                    <VisibilityIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Popup for PDF Viewer */}
      {isModalOpen && (
        <div style={popupOverlayStyle}>
          <div style={popupContainerStyle}>
            <div style={popupHeaderStyle}>
              <Typography variant="h6">PDF Viewer</Typography>
              <button style={closeButtonStyle} onClick={closeModal}>
                ✖
              </button>
            </div>
            <iframe src={selectedPdfUrl} style={iframeStyle} title="PDF Viewer" />
          </div>
        </div>
      )}
    </Box>
  );
}

// Popup styles
const popupOverlayStyle = { /* same as before */ };
const popupContainerStyle = { /* same as before */ };
const popupHeaderStyle = { /* same as before */ };
const closeButtonStyle = { /* same as before */ };
const iframeStyle = { /* same as before */ };
