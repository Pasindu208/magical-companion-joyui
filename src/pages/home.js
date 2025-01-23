import React from "react";
import Navbar from "../components/navbar";
import { Box, Typography, Grid, Link, Card, CardContent } from "@mui/joy";
import wand from "../assets/wand.png";
import quill from "../assets/quill.png";
import character from "../assets/character.png";
import house from "../assets/house.png";
import movies from "../assets/train.png";
import hp from "../assets/hp.png";
import sorting_hat from "../assets/sorting_hat.png";

const cardList = [
    {
        title: "Characters",
        img: character,
        path: "/characters",
    },
    {
        title: "Spells",
        img: wand,
        path: "/spells",
    },
    {
        title: "Books",
        img: quill,
        path: "/books",
    },
    {
        title: "Movies",
        img: movies,
        path: "/movies",
    },
    {
        title: "Houses",
        img: house,
        path: "/houses",
    },
    {
        title: "Chat",
        img: hp,
        path: "/chat",
    },
    {
        title: "Sorting Hat",
        img: sorting_hat,
        path: "/sorting-hat",
    },
];

const Home = () => {
    return (
        <Box sx={{ minHeight: "100vh" }}>
            <Navbar />
            <Box
                sx={{
                    maxWidth: "1200px",
                    mx: "auto",
                    px: { xs: 2, md: 4 },
                    pt: { xs: 12, md: 14 },
                }}>
                <Typography
                    level="h1"
                    className="heading"
                    sx={{
                        fontSize: { xs: "2.5rem", md: "3.5rem" },
                        fontWeight: "bold",
                        mb: 1,
                        mt: {
                            xs: 2,
                            md: 0,
                        },
                        background: "linear-gradient(to right, #fff, #e0e0e0)",
                        WebkitBackgroundClip: "text",
                        // WebkitTextFillColor: "transparent",
                        textAlign: "center",
                    }}>
                    Welcome to Magical Companion!
                </Typography>
                <Typography
                    level="body1"
                    className="description"
                    sx={{
                        fontSize: { xs: "1rem", md: "1.2rem" },
                        maxWidth: "800px",
                        mx: "auto",
                        mb: 4,
                        lineHeight: 1.6,
                        // color: "rgba(255, 255, 255, 0.9)",
                        justifyContent: "center",
                        textAlign: "center",
                        // fontWeight: "bold",
                    }}>
                    {/* Welcome to Magical Companion! 🪄✨*/} Step into a magical 
                    realm where the wonders of Harry Potter come to life.
                    Explore detailed information about your favourite characters
                    🧙‍♂️, iconic spells ✨, legendary books 📚, and unforgettable
                    movies 🎥. Dive into the rich history of Hogwarts and
                    uncover the secrets of the four houses 🦁🐍🦅🦡. Whether
                    you're a curious Muggle or a seasoned witch or wizard,
                    there's something enchanting here for everyone. So grab your
                    wand and let the adventure begin! ⚡🏰
                </Typography>
                <Grid
                    container
                    justifyContent={{ xs: "center" }}
                    spacing={3}
                    pb={4}
                    columns={{
                        xs: 1,
                        sm: 2,
                        md: 3,
                    }}>
                    {cardList.map((item, index) => (
                        <Grid key={index} xs={1} sx={{ mb: 3 }}>
                            <Card
                                component={Link}
                                href={item.path}
                                variant="solid"
                                sx={{
                                    boxShadow: "sm",
                                    height: "100%",
                                    backgroundColor: "background.level1",
                                    transition: "all 0.3s ease-in-out",
                                    textDecoration: "none",
                                    "&:hover": {
                                        boxShadow: "lg",
                                        transform:
                                            "translateY(-8px) scale(1.02)",
                                        backgroundColor: "background.level2",
                                        textDecoration: "none",
                                        "& img": {
                                            filter: "drop-shadow(0 0 30px rgba(255, 255, 255, 0.8))",
                                            transform: "scale(1.1)",
                                        },
                                    },
                                }}>
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            gap: 2,
                                        }}>
                                        <Box
                                            component="img"
                                            src={item.img}
                                            alt={item.title}
                                            sx={{
                                                width: "100px",
                                                height: "100px",
                                                objectFit: "contain",
                                                filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))",
                                                transition:
                                                    "all 0.3s ease-in-out",
                                            }}
                                        />
                                        <Typography
                                            level="h4"
                                            underline="none"
                                            fontWeight={700}
                                            sx={{
                                                textAlign: "center",
                                                mb: 0,
                                                textDecoration: "none",
                                                "&:hover": {
                                                    textDecoration: "none",
                                                },
                                                color: "text.primary",
                                            }}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Home;
