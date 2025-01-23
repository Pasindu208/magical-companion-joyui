import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import axios from "axios";
import BackButton from "../components/backbtn";
import {
    Card,
    AspectRatio,
    Typography,
    Sheet,
    Skeleton,
    Input,
    Box,
} from "@mui/joy";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const fetchAllMovies = async () => {
        try {
            const response = await axios.get(
                "https://magical-companion-api.vercel.app/movies"
            );
            setMovies(response.data);
        } catch (error) {
            console.error("Error fetching movies:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllMovies();
    }, []);

    return (
        <div>
            <Navbar />
            <div
                style={{
                    paddingTop: "120px",
                    display: "flex",
                    justifyContent: "center",
                }}>
                <Input
                    placeholder="Search movies..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{
                        width: { xs: "80%", sm: "400px" },
                    }}
                />
            </div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px", // Reduced from 30px
                    padding: "20px", // Reduced from 40px
                    overflow: "auto",
                    justifyContent: "center",
                    paddingTop: "20px",
                }}>
                {loading
                    ? Array.from(new Array(15)).map((_, index) => (
                          <Card
                              key={`skeleton-${index}`}
                              variant="outlined"
                              sx={{ width: 250, p: 0 }}>
                              {" "}
                              // Added p: 0
                              <Skeleton variant="rectangular" height={300} />
                              <Skeleton
                                  variant="text"
                                  width="80%"
                                  sx={{ mt: 1 }}
                              />
                              <Skeleton variant="text" width="60%" />
                          </Card>
                      ))
                    : movies
                          .filter((movie) =>
                              movie.title
                                  .toLowerCase()
                                  .includes(search.toLowerCase())
                          )
                          .map((movie) => (
                              <Card
                                  key={movie.serial}
                                  component={Link}
                                  to={`/movies/${movie.serial}`}
                                  sx={{
                                      width: 250, // Match books width
                                      textDecoration: "none",
                                      transition: "transform 0.2s",
                                      "&:hover": {
                                          transform: "scale(1.02)",
                                      },
                                      //   backgroundColor: "transparent",
                                  }}>
                                  {/* <AspectRatio objectFit="contain"> */}
                                  <img
                                      src={
                                          movie.poster ||
                                          "https://via.placeholder.com/200x300?text=No+Poster"
                                      }
                                      alt={movie.title}
                                      onError={(e) => {
                                          e.target.src =
                                              "https://via.placeholder.com/200x300?text=No+Poster";
                                      }}
                                  />
                                  {/* </AspectRatio> */}
                                  <Typography
                                      level="h2"
                                      sx={{ fontSize: "md", mt: 2 }}>
                                      {movie.title}
                                  </Typography>
                                  <Typography level="body-sm" sx={{ mb: 1 }}>
                                      Released: {movie.release_date}
                                  </Typography>
                              </Card>
                          ))}
            </div>
        </div>
    );
};

export default Movies;
