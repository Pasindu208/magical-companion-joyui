import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import {
    Typography,
    Card,
    CardContent,
    CircularProgress,
    Grid,
    Box,
    Divider,
} from "@mui/joy";
import { useParams } from "react-router-dom";

const CharacterInfo = () => {
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { name } = useParams();

    useEffect(() => {
        axios
            .get(`https://magical-companion-api.vercel.app/characters/${name}`)
            .then((response) => {
                setCharacter(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [name]);

    if (loading) return <CircularProgress sx={{ mt: "200px" }} />;
    if (error) return <Typography color="danger">{error}</Typography>;
    if (!character) return <Typography>No character found</Typography>;

    return (
        <div>
            <Navbar />
            <Box
                sx={{
                    width: "100%",
                    // maxWidth: '1800px',
                    minWidth: { xs: "100px", md: "1200px" },
                    margin: "0 auto",
                    padding: { xs: 0, md: 4 },
                    paddingTop: { xs: "120px", md: "120px" },
                }}>
                <Typography
                    level="h1"
                    sx={{
                        textAlign: "center",
                        mb: { xs: 2, md: 3 },
                        fontSize: { xs: "2rem", md: "2.5rem" },
                        color: "text.primary",
                    }}>
                    {character.name}
                </Typography>

                <Card
                    sx={{
                        boxShadow: "lg",
                        overflow: "hidden",
                        p: { xs: 2, sm: 3, md: 4 },
                        m: 2,
                        bgcolor: "background.surface",
                    }}>
                    <CardContent>
                        <Grid container spacing={{ xs: 2, md: 4 }}>
                            <Grid xs={12} md={4}>
                                <Box
                                    sx={{
                                        position: "relative",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "flex-start",
                                    }}>
                                    <img
                                        src={character.image_url}
                                        alt={character.name}
                                        onError={(e) => {
                                            e.target.src =
                                                "https://via.placeholder.com/200x200?text=No+Image";
                                        }}
                                        style={{
                                            width: "100%",
                                            maxWidth: "350px",
                                            height: "auto",
                                            borderRadius: "12px",
                                            boxShadow:
                                                "0 4px 8px rgba(0,0,0,0.2)",
                                        }}
                                    />
                                </Box>
                            </Grid>
                            <Grid xs={12} md={8}>
                                {character.alternate_names.length > 0 && (
                                    <Typography
                                        level="body-lg"
                                        sx={{
                                            fontStyle: "italic",
                                            color: "text.secondary",
                                            mb: 3,
                                            fontSize: {
                                                xs: "1.1rem",
                                                md: "1.2rem",
                                            },
                                        }}>
                                        Also known as:{" "}
                                        {character.alternate_names.join(", ")}
                                    </Typography>
                                )}

                                <Box
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns: {
                                            xs: "1fr 1fr",
                                            sm: "repeat(2, 1fr)",
                                            md: "repeat(2, 1fr)",
                                        },
                                        gap: { xs: 2, md: 3 },
                                        mb: 4,
                                    }}>
                                    <InfoItem
                                        label="House"
                                        value={character.house}
                                    />
                                    <InfoItem
                                        label="Date of Birth"
                                        value={character.dateOfBirth}
                                    />
                                    <InfoItem
                                        label="Species"
                                        value={character.species}
                                    />
                                    <InfoItem
                                        label="Gender"
                                        value={character.gender}
                                    />
                                    <InfoItem
                                        label="Ancestry"
                                        value={character.ancestry}
                                    />
                                    <InfoItem
                                        label="Eye Color"
                                        value={character.eyeColour}
                                    />
                                    <InfoItem
                                        label="Hair Color"
                                        value={character.hairColour}
                                    />
                                    <InfoItem
                                        label="Patronus"
                                        value={character.patronus}
                                    />
                                </Box>

                                <Divider sx={{ my: 4 }} />

                                {character.wand &&
                                    (character.wand.wood ||
                                        character.wand.core ||
                                        character.wand.length) && (
                                        <Box sx={{ mb: 4 }}>
                                            <Typography
                                                level="h3"
                                                sx={{
                                                    mb: 3,
                                                    fontSize: {
                                                        xs: "1.4rem",
                                                        md: "1.6rem",
                                                    },
                                                    color: "text.primary",
                                                }}>
                                                Wand
                                            </Typography>
                                            <Box
                                                sx={{
                                                    display: "grid",
                                                    gridTemplateColumns: {
                                                        xs: "1fr 1fr",
                                                        sm: "repeat(2, 1fr)",
                                                        md: "repeat(3, 1fr)",
                                                    },
                                                    gap: 3,
                                                }}>
                                                <InfoItem
                                                    label="Wood"
                                                    value={character.wand.wood}
                                                />
                                                <InfoItem
                                                    label="Core"
                                                    value={character.wand.core}
                                                />
                                                <InfoItem
                                                    label="Length"
                                                    value={
                                                        character.wand.length
                                                            ? `${character.wand.length} inches`
                                                            : "Unknown"
                                                    }
                                                />
                                            </Box>
                                            <Divider sx={{ my: 4 }} />
                                        </Box>
                                    )}

                                <Box
                                    sx={{
                                        display: "grid",
                                        gridTemplateColumns: {
                                            xs: "1fr 1fr",
                                            sm: "repeat(2, 1fr)",
                                            md: "repeat(3, 1fr)",
                                        },
                                        gap: 3,
                                    }}>
                                    <InfoItem
                                        label="Hogwarts Status"
                                        value={
                                            character.hogwartsStudent
                                                ? "Student"
                                                : character.hogwartsStaff
                                                ? "Staff"
                                                : "Not Affiliated"
                                        }
                                    />
                                    <InfoItem
                                        label="Portrayed by"
                                        value={character.actor}
                                    />
                                    <InfoItem
                                        label="Status"
                                        value={
                                            character.alive
                                                ? "Alive"
                                                : "Deceased"
                                        }
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
};

// Helper component for displaying info items
const InfoItem = ({ label, value }) => {
    if (!value) return null;
    return (
        <Box sx={{ mb: { xs: 1, md: 0 } }}>
            <Typography
                component="span"
                level="body-md"
                sx={{
                    fontWeight: "bold",
                    color: "text.primary",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                }}>
                {label}:{" "}
            </Typography>
            <Typography
                component="span"
                level="body-md"
                sx={{
                    color: "text.secondary",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                }}>
                {value}
            </Typography>
        </Box>
    );
};

export default CharacterInfo;
