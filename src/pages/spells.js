import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import axios from 'axios'
import { Box } from '@mui/joy'
import SpellCard from '../components/spellCard'

const Spells = () => {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await axios.get('https://magical-companion-api.vercel.app/spells');
        setSpells(response.data);
      } catch (error) {
        console.error('Error fetching spells:', error);
      }
    };

    fetchSpells();
  }, []);

  return (
    <div>
      <Navbar />
      <Box
        component="ul"
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(auto-fill, minmax(240px, 1fr))',
          },
          gap: 2,
          p: { xs: 2, sm: 3, md: 4 },
          mx: 'auto',
          maxWidth: '1800px',
          width: 'auto',
          boxSizing: 'border-box',
          listStyle: 'none',
          mt: '100px',
          '& > li': {
            height: '100%',
            display: 'flex'
          }
        }}
      >
        {spells.map((spell) => (
          <li key={spell.id}>
            <SpellCard
              name={spell.name}
              description={spell.description}
            />
          </li>
        ))}
      </Box>
    </div>
  )
}

export default Spells