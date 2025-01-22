import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Skeleton } from "@mui/joy";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";
import { useTheme } from "@mui/joy/styles";
import Link from "@mui/joy/Link";

export default function CharacterCard({ name, imageUrl, loading }) {
    const theme = useTheme();
    const placeholderSrc = "https://via.placeholder.com/800x400?text=Loading...";

    const boxStyles = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
        gap: 2,
        p: 0,
        m: 0,
        listStyle: "none",
    };

    const cardBaseStyles = {
        width: {
            xs: 300,
            sm: 220,
        },
        height: {
            xs: 340,
            sm: 340,
        },
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        flexShrink: 0,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        backgroundColor: "background.surface",
    };

    const renderLoader = () => (
        <Skeleton 
            variant="rectangular" 
            width="100%" 
            height="100%" 
            animation="pulse"
        />
    );

    if (loading) {
        return (
            <Box component="ul" sx={boxStyles}>
                <Card size="sm" sx={cardBaseStyles}>
                    <CardCover>
                        {renderLoader()}
                    </CardCover>
                    <CardContent
                        sx={{
                            position: "absolute",
                            bottom: 0,
                            width: "100%",
                            padding: "16px",
                        }}>
                        <Skeleton variant="text" width="80%" sx={{ mx: "auto" }} />
                    </CardContent>
                </Card>
            </Box>
        );
    }

    return (
        <Box component="ul" sx={boxStyles}>
            <Card
                size="sm"
                component={Link}
                href={`/characters/${name}`}
                sx={{
                    ...cardBaseStyles,
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px 24px",
                    },
                }}>
                
                <CardCover
                    sx={{
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                        }}>
                        <LazyLoadImage
                            src={imageUrl}
                            placeholderSrc={placeholderSrc}
                            effect="opacity"
                            beforeLoad={() => renderLoader()}
                            placeholder={renderLoader()}
                            alt={name}
                            onError={(e) => {
                                e.target.src =
                                    "https://via.placeholder.com/280x400?text=No+Image";
                            }}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                objectPosition: "center",
                                maxWidth: "200px",
                                maxHeight: "300px",
                            }}
                        />
                    </div>
                </CardCover>
                <CardContent
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        padding: "16px",
                        // backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    }}>
                    <Typography
                        level="title-lg"
                        sx={{
                            // color: 'white',
                            fontWeight: "bold",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            textAlign: "center",
                        }}>
                        {name}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}
