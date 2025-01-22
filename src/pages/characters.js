import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Card from "../components/characterCard.js";
import { CircularProgress } from "@mui/joy";
import Autocomplete from "@mui/joy/Autocomplete";
import Input from "@mui/joy/Input";
import SearchIcon from "@mui/icons-material/Search";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get(
                    "https://magical-companion-api.vercel.app/characters"
                );
                setCharacters(response.data);
                setFilteredCharacters(response.data);
            } catch (error) {
                console.error("Error fetching characters:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCharacters();
    }, []);

    const handleSearch = (event, newValue) => {
        // If newValue is null or empty string
        if (!newValue) {
            setSearch("");
            setFilteredCharacters(characters);
            return;
        }

        // If newValue is a string (user typing)
        if (typeof newValue === 'string') {
            setSearch(newValue);
            const filtered = characters.filter((character) =>
                character.name.toLowerCase().includes(newValue.toLowerCase())
            );
            setFilteredCharacters(filtered);
            return;
        }

        // If newValue is an object (user selected from dropdown)
        setSearch(newValue.name);
        setFilteredCharacters([newValue]);
    };

    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: "120px" }}>
                <Autocomplete
                    freeSolo
                    autoSelect
                    autoHighlight
                    placeholder="Search characters..."
                    startDecorator={<SearchIcon />}
                    options={characters}
                    value={search}
                    onChange={handleSearch}
                    inputValue={search}
                    onInputChange={(event, newInputValue) => {
                        handleSearch(event, newInputValue);
                    }}
                    getOptionLabel={(option) => 
                        typeof option === 'string' ? option : option.name
                    }
                    renderOption={(props, option) => (
                        <li {...props} style={{
                            padding: '12px 16px',  // Increased padding for touch
                            minHeight: '48px',     // Minimum height for touch targets
                        }}>
                            <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '16px',
                                width: '100%'
                            }}>
                                <img 
                                    src={option.image_url} 
                                    alt={option.name}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <span style={{
                                    fontSize: '16px',
                                    flex: 1
                                }}>
                                    {option.name}
                                </span>
                            </div>
                        </li>
                    )}
                    slotProps={{
                        listbox: {
                            sx: {
                                maxHeight: '60vh',
                                overflowY: 'auto',
                                '& li': {
                                    borderBottom: '1px solid rgba(0,0,0,0.1)'
                                },
                                '& li:last-child': {
                                    borderBottom: 'none'
                                }
                            }
                        }
                    }}
                    sx={{
                        width: {
                            xs: "90%",   // Increased width on mobile
                            sm: "70%",
                            md: "50%",
                        },
                        margin: "auto",
                        '& .MuiAutocomplete-input': {
                            padding: '12px 8px',  // Larger input on mobile
                        },
                    }}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "30px",
                    padding: "40px",
                    overflow: "auto",
                    justifyContent: "center",
                    paddingTop: "20px",
                }}>
                {loading
                    ? Array.from(new Array(15)).map((_, index) => (
                          <Card key={`skeleton-${index}`} loading={true} />
                      ))
                    : filteredCharacters.map((character) => (
                          <Card
                              key={character.id}
                              name={character.name}
                              imageUrl={character.image_url}
                              loading={false}
                          />
                      ))}
            </div>
        </div>
    );
};

export default Characters;
