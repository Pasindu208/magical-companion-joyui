import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import axios from 'axios';
import BackButton from '../components/backbtn';
import { Card, AspectRatio, Typography, Sheet, Skeleton, Input } from '@mui/joy';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const fetchAllBooks = async () => {
        try {
            const response = await axios.get(
                "https://magical-companion-api.vercel.app/books"
            );
            setBooks(response.data);
        } catch (error) {
            console.error("Error fetching books:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllBooks();
    }, []);

    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: "120px", display: "flex", justifyContent: "center" }}>
                <Input
                    placeholder="Search books..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{
                        width: { xs: '80%', sm: '400px' },
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
                        <Card 
                            key={`skeleton-${index}`}
                            variant="outlined"
                            sx={{ width: 250 }}
                        >
                            <Skeleton variant="rectangular" height={300} />
                            <Skeleton variant="text" width="80%" sx={{ mt: 1 }} />
                            <Skeleton variant="text" width="60%" />
                        </Card>
                    ))
                    : books
                        .filter((book) =>
                            book.title
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        )
                        .map((book) => (
                            <Card
                                key={book.serial}  // Changed from serial to id
                                component={Link}
                                to={`/books/${book.serial}`}  // Changed from serial to id
                                sx={{
                                    width: 250,
                                    textDecoration: 'none',
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'scale(1.02)'
                                    }
                                }}
                            >
                                <AspectRatio ratio="2/3">
                                    <img
                                        src={book.cover || 'https://via.placeholder.com/200x300?text=No+Cover'}
                                        alt={book.title}
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/200x300?text=No+Cover';
                                        }}
                                    />
                                </AspectRatio>
                                <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                                    {book.title}
                                </Typography>
                                <Typography level="body-sm" sx={{ mb: 1 }}>
                                    Released: {book.release_date}
                                </Typography>
                            </Card>
                        ))}
            </div>
        </div>
    );
};

export default Books;