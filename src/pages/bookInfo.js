import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import { Box, Card, AspectRatio, Typography, Skeleton, Divider, Link } from '@mui/joy';

const BookInfo = () => {
    const { serial } = useParams();
    const [bookInfo, setBookInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);  // Add loading state

    useEffect(() => {
        fetchBookInfo();
    }, []);

    const fetchBookInfo = async () => {
        try {
            setIsLoading(true);  // Set loading true before fetch
            const response = await axios.get(
                `https://magical-companion-api.vercel.app/books/${serial}`
            );
            setBookInfo(response.data);
        } catch (error) {
            console.error("Error fetching books:", error);
        } finally {
            setIsLoading(false);  // Set loading false after fetch
        }
    };

    return (
        <div>
            <Navbar />
            <Box
                sx={{
                    maxWidth: 1200,
                    mx: 'auto',
                    p: 3,
                    pt: { xs: '120px', md: '120px' }
                }}
            >
                <Typography level="h1" sx={{ mb: 3 }}>Book Information</Typography>
                {isLoading ? (
                    <Card variant="outlined" sx={{ display: 'flex', gap: 3, p: 3 }}>
                        {/* <Skeleton variant="rectangular" width={300} height={450} />
                        <Box sx={{ flex: 1 }}>
                            <Skeleton variant="text" width="60%" height={40} sx={{ mb: 2 }} />
                            <Skeleton variant="text" width="40%" sx={{ mb: 1 }} />
                            <Skeleton variant="text" width="30%" sx={{ mb: 1 }} />
                            <Skeleton variant="text" width="25%" sx={{ mb: 1 }} />
                            <Skeleton variant="text" width="20%" sx={{ mb: 3 }} />
                            <Skeleton variant="rectangular" height={100} sx={{ mb: 2 }} />
                            <Skeleton variant="rectangular" height={80} />
                        </Box> */}
                    </Card>
                ) : bookInfo ? (
                    <Card
                        variant="outlined"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: 3,
                            p: 3
                        }}
                    >
                        <AspectRatio
                            ratio="2/3"
                            sx={{
                                width: { xs: '100%', md: 300 },
                                borderRadius: 'sm',
                                overflow: 'hidden'
                            }}
                        >
                            <img
                                src={bookInfo.cover || 'https://via.placeholder.com/300x450?text=No+Cover'}
                                alt={bookInfo.title}
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/300x450?text=No+Cover';
                                }}
                            />
                        </AspectRatio>
                        <Box sx={{ flex: 1 }}>
                            <Typography level="h2" sx={{ mb: 2 }}>{bookInfo.title}</Typography>
                            <Typography level="body-md" sx={{ mb: 1 }}><strong>Author:</strong> J.K. Rowling</Typography>
                            <Typography level="body-md" sx={{ mb: 1 }}><strong>Release Date:</strong> {bookInfo.release_date}</Typography>
                            <Typography level="body-md" sx={{ mb: 1 }}><strong>Pages:</strong> {bookInfo.pages}</Typography>
                            <Typography level="body-md" sx={{ mb: 2 }}><strong>Serial:</strong> {bookInfo.serial}</Typography>
                            
                            <Divider sx={{ my: 2 }} />
                            
                            <Typography level="title-md" sx={{ mb: 1 }}>Summary</Typography>
                            <Typography level="body-md" sx={{ mb: 2 }}>{bookInfo.summary}</Typography>
                            
                            <Typography level="title-md" sx={{ mb: 1 }}>Dedication</Typography>
                            <Typography level="body-md" sx={{ mb: 2 }}>{bookInfo.dedication}</Typography>
                            
                            <Link
                                href={bookInfo.wiki}
                                target="_blank"
                                rel="noopener noreferrer"
                                level="title-sm"
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 0.5,
                                    mt: 2,
                                    '&:hover': { textDecoration: 'none' }
                                }}
                            >
                                Read more on Wiki →
                            </Link>
                        </Box>
                    </Card>
                ) : (
                    <Typography level="h3" color="danger">Error loading book information.</Typography>
                )}
            </Box>
        </div>
    );
};

export default BookInfo;
