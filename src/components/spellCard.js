import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useTheme } from '@mui/joy/styles';

export default function SpellCard({ name, description }) {
  const theme = useTheme();

  const cardBaseStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
    backgroundColor: 'background.surface',
    transition: 'all 0.3s ease-in-out',
    p: 0,
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 8px 24px',
    },
  };

  return (
    <Card sx={cardBaseStyles}>
      <CardContent sx={{ 
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        height: '100%'
      }}>
        <Typography
          level="title-lg"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 0.5
          }}
        >
          {name}
        </Typography>
        <Typography
          level="body-md"
          sx={{
            // textAlign: 'center',
            textAlign: {
                xs: 'center',
                sm: 'left'
            },
            color: 'text.secondary',
            lineHeight: 1.5
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
