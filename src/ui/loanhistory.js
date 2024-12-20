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
  Button,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';

export default function LoanHistory() {
  const [appliedLoans, setAppliedLoans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPdfUrl, setSelectedPdfUrl] = useState('');

  // Fetch loans on component load
  useEffect(() => {
    const fetchLoans = async () => {
      try {
        const response = await axios.get('https://ingenious-expression-production.up.railway.app/allusers');
        setAppliedLoans(response.data || []);
        localStorage.setItem('appliedLoans', JSON.stringify(response.data || []));
      } catch (error) {
        console.error('Error fetching applied loans:', error);
        const storedLoans = localStorage.getItem('appliedLoans');
        if (storedLoans) {
          setAppliedLoans(JSON.parse(storedLoans));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLoans();
  }, []);

  // View PDF functionality
  const viewPdf = async (email, loanType) => {
    try {
      const response = await axios.get(
        `https://ingenious-expression-production.up.railway.app/api/pdf/view/${email}/${loanType}`,
        {
          responseType: 'blob',
        }
      );

      const fileURL = window.URL.createObjectURL(
        new Blob([response.data], { type: 'application/pdf' })
      );
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

  // Update loan status
  const handleStatusChange = async (email, loanType, status) => {
    try {
      const params = new URLSearchParams();
      params.append('email', email);
      params.append('loanType', loanType);
      params.append('status', status);

      const response = await axios.post(
        'https://ingenious-expression-production.up.railway.app/updateStatus',
        params,
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
      );

      if (response.status === 200) {
        console.log(`Loan status updated: ${email}, ${loanType}, ${status}`);
        
        const updatedResponse = await axios.get('https://ingenious-expression-production.up.railway.app/allusers');
        setAppliedLoans(updatedResponse.data || []);
        localStorage.setItem('appliedLoans', JSON.stringify(updatedResponse.data || []));
        alert(`Loan ${status} successfully!`);
      }
    } catch (error) {
      console.error('Error updating loan status:', error.response?.data || error.message);
      alert('Failed to update loan status. Please try again.');
    }
  };

  return (
    <Box sx={{ padding: 5, backgroundColor: '#006064', minHeight: '100vh' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: 'white', fontWeight: 600 }}
      >
        Loan Applications
      </Typography>

      {loading ? (
        <Typography variant="h6" align="center" sx={{ color: 'white' }}>
          Loading loans...
        </Typography>
      ) : appliedLoans.length === 0 ? (
        <Typography variant="h6" align="center" sx={{ color: 'white' }}>
          No loan applications found.
        </Typography>
      ) : (
        <TableContainer component={Paper} sx={{ marginTop: 3 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Loan Type</strong>
                </TableCell>
                <TableCell>
                  <strong>Applicant Name</strong>
                </TableCell>
                <TableCell>
                  <strong>Credit Score</strong>
                </TableCell>
                <TableCell>
                  <strong>Employment Status</strong>
                </TableCell>
                <TableCell>
                  <strong>Age</strong>
                </TableCell>
                <TableCell>
                  <strong>Address</strong>
                </TableCell>
                <TableCell>
                  <strong>Phone Number</strong>
                </TableCell>
                <TableCell>
                  <strong>Actions</strong>
                </TableCell>
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
                  <TableCell>
                    <Box display="flex" gap={1}>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() =>
                          handleStatusChange(loan.email, loan.loanType, 'Accepted')
                        }
                      >
                        Accept
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() =>
                          handleStatusChange(loan.email, loan.loanType, 'Rejected')
                        }
                      >
                        Reject
                      </Button>
                      <IconButton
                        color="primary"
                        onClick={() => viewPdf(loan.email, loan.loanType)}
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

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
            <iframe
              src={selectedPdfUrl}
              style={iframeStyle}
              title="PDF Viewer"
            />
          </div>
        </div>
      )}
    </Box>
  );
}

// Popup styles
const popupOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const popupContainerStyle = {
  backgroundColor: 'white',
  width: '80%',
  maxWidth: '800px',
  borderRadius: '8px',
  overflow: 'hidden',
  position: 'relative',
};

const popupHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  borderBottom: '1px solid #ddd',
  backgroundColor: '#f5f5f5',
};

const closeButtonStyle = {
  background: 'none',
  border: 'none',
  fontSize: '1.5rem',
  cursor: 'pointer',
  color: '#333',
};

const iframeStyle = {
  width: '100%',
  height: '600px',
  border: 'none',
};
