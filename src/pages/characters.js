import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Card from "../components/characterCard.js";
import { CircularProgress } from "@mui/joy";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get(
                    "https://magical-companion-api.vercel.app/characters"
                );
                setCharacters(response.data);
            } catch (error) {
                console.error("Error fetching characters:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCharacters();
    }, []);

    return (
        <div>
            <Navbar />
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "30px",
                    padding: "40px",
                    overflow: "auto",
                    justifyContent: "center",
                    paddingTop: "120px",
                }}>
                {loading
                    ? Array.from(new Array(8)).map((_, index) => (
                          <Card key={`skeleton-${index}`} loading={true} />
                      ))
                    : characters.map((character) => (
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
