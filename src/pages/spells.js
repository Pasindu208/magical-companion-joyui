import React, { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import axios from 'axios'
import { Box, Input } from '@mui/joy'
import SpellCard from '../components/spellCard'

const Spells = () => {
  const [spells, setSpells] = useState([]);
  const [search, setSearch] = useState("");

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
      <div style={{ paddingTop: "120px", display: "flex", justifyContent: "center" }}>
        <Input
          placeholder="Search spells..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: "80%",
            maxWidth: 400,
          }}
        />
      </div>
      <Box
        component="ul"
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(auto-fit, minmax(250px, 1fr))',
          },
          gap: 3,
          p: 3,
          mx: 'auto',
          maxWidth: '1800px',
          width: '100%',
          listStyle: 'none'
        }}
      >
        {spells
          .filter((spell) => 
            spell.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((spell) => (
            <li key={spell.id} style={{ display: 'flex', justifyContent: 'center' }}>
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