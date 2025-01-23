import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import {
    Box,
    Card,
    AspectRatio,
    Typography,
    Skeleton,
    Divider,
    Link,
} from "@mui/joy";

const MovieInfo = () => {
    const { serial } = useParams();
    const [movieInfo, setMovieInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchMovieInfo();
    }, []);

    const fetchMovieInfo = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(
                `https://magical-companion-api.vercel.app/movies/${serial}`
            );
            setMovieInfo(response.data);
        } catch (error) {
            console.error("Error fetching movie:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Add function to extract YouTube video ID
    const getYoutubeId = (url) => {
        const regExp =
            /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url?.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };

    return (
        <div>
            <Navbar />
            <Box
                sx={{
                    maxWidth: 1200,
                    mx: "auto",
                    p: 3,
                    pt: { xs: "120px", md: "120px" },
                }}>
                <Typography level="h1" sx={{ mb: 3 }}>
                    Movie Information
                </Typography>
                {isLoading ? (
                    <Card
                        variant="outlined"
                        sx={{ display: "flex", gap: 3, p: 3 }}>
                        <Skeleton
                            variant="rectangular"
                            width={300}
                            height={450}
                        />
                        <Box sx={{ flex: 1 }}>
                            <Skeleton
                                variant="text"
                                width="60%"
                                height={40}
                                sx={{ mb: 2 }}
                            />
                            <Skeleton
                                variant="text"
                                width="40%"
                                sx={{ mb: 1 }}
                            />
                            <Skeleton
                                variant="text"
                                width="30%"
                                sx={{ mb: 1 }}
                            />
                            <Skeleton
                                variant="text"
                                width="25%"
                                sx={{ mb: 1 }}
                            />
                            <Skeleton
                                variant="text"
                                width="20%"
                                sx={{ mb: 3 }}
                            />
                            <Skeleton
                                variant="rectangular"
                                height={100}
                                sx={{ mb: 2 }}
                            />
                        </Box>
                    </Card>
                ) : movieInfo ? (
                    <Card
                        variant="outlined"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            p: 3,
                        }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                gap: 3,
                            }}>
                            <AspectRatio
                                ratio="2/3"
                                sx={{
                                    width: { xs: "100%", md: 300 },
                                    borderRadius: "sm",
                                    overflow: "hidden",
                                }}>
                                <img
                                    src={
                                        movieInfo.poster ||
                                        "https://via.placeholder.com/300x450?text=No+Poster"
                                    }
                                    alt={movieInfo.title}
                                    onError={(e) => {
                                        e.target.src =
                                            "https://via.placeholder.com/300x450?text=No+Poster";
                                    }}
                                />
                            </AspectRatio>
                            <Box sx={{ flex: 1 }}>
                                <Typography level="h2" sx={{ mb: 2 }}>
                                    {movieInfo.title}
                                </Typography>

                                <Typography level="body-md" sx={{ mb: 1 }}>
                                    <strong>Release Date:</strong>{" "}
                                    {movieInfo.release_date}
                                </Typography>
                                <Typography level="body-md" sx={{ mb: 1 }}>
                                    <strong>Running Time:</strong>{" "}
                                    {movieInfo.running_time}
                                </Typography>
                                <Typography level="body-md" sx={{ mb: 1 }}>
                                    <strong>Box Office:</strong>{" "}
                                    {movieInfo.box_office}
                                </Typography>
                                <Typography level="body-md" sx={{ mb: 1 }}>
                                    <strong>Budget:</strong> {movieInfo.budget}
                                </Typography>
                                <Typography level="body-md" sx={{ mb: 1 }}>
                                    <strong>Rating:</strong> {movieInfo.rating}
                                </Typography>

                                <Divider sx={{ my: 2 }} />

                                <Typography level="title-md" sx={{ mb: 1 }}>
                                    Summary
                                </Typography>
                                <Typography level="body-md" sx={{ mb: 2 }}>
                                    {movieInfo.summary}
                                </Typography>

                                <Divider sx={{ my: 2 }} />

                                <Typography level="title-md" sx={{ mb: 1 }}>
                                    Crew
                                </Typography>
                                <Typography level="body-md" sx={{ mb: 1 }}>
                                    <strong>Directors:</strong>{" "}
                                    {movieInfo.directors?.join(", ")}
                                </Typography>
                                <Typography level="body-md" sx={{ mb: 1 }}>
                                    <strong>Producers:</strong>{" "}
                                    {movieInfo.producers?.join(", ")}
                                </Typography>
                                <Typography level="body-md" sx={{ mb: 1 }}>
                                    <strong>Screenwriters:</strong>{" "}
                                    {movieInfo.screenwriters?.join(", ")}
                                </Typography>
                                <Typography level="body-md" sx={{ mb: 1 }}>
                                    <strong>Cinematographers:</strong>{" "}
                                    {movieInfo.cinematographers?.join(", ")}
                                </Typography>
                                <Typography level="body-md" sx={{ mb: 1 }}>
                                    <strong>Music Composers:</strong>{" "}
                                    {movieInfo.music_composers?.join(", ")}
                                </Typography>

                                <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                                    <Link
                                        href={movieInfo.wiki}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        level="title-sm"
                                        sx={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 0.5,
                                            "&:hover": {
                                                textDecoration: "none",
                                            },
                                        }}>
                                        Read more on Wiki →
                                    </Link>
                                    {/* <Link
                                        href={movieInfo.trailer}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        level="title-sm"
                                        sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: 0.5,
                                            '&:hover': { textDecoration: 'none' }
                                        }}
                                    >
                                        Watch Trailer →
                                    </Link> */}
                                </Box>
                                <Divider sx={{ my: 2 }} />
                            </Box>
                        </Box>

                        <Box>
                            <AspectRatio ratio="16/9">
                                <iframe
                                    src={`https://www.youtube.com/embed/${getYoutubeId(
                                        movieInfo.trailer
                                    )}`}
                                    title={`${movieInfo.title} Trailer`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{
                                        border: "none",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                />
                            </AspectRatio>
                        </Box>
                    </Card>
                ) : (
                    <Typography level="h3" color="danger">
                        Error loading movie information.
                    </Typography>
                )}
            </Box>
        </div>
    );
};

export default MovieInfo;
