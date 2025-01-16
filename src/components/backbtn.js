import React from 'react';
import IconButton from '@mui/joy/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useLocation } from 'react-router-dom';

const BackBtn = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <IconButton
      variant="outlined"
      color="neutral"
      size="lg"
      onClick={() => navigate(-1)}
      sx={{
        borderRadius: '50%',
        width: 48,
        backgroundColor: 'background.level1',
        height: 48,
        visibility: location.pathname === '/' ? 'hidden' : 'visible'
      }}
    >
      <ArrowBackIcon />
    </IconButton>
  );
};

export default BackBtn;