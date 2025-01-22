import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Card from "../components/characterCard.js";
import { CircularProgress, Input } from "@mui/joy";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

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
            <div style={{ paddingTop: "120px", display: "flex", justifyContent: "center" }}>
                <Input
                    placeholder="Search characters..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{
                        width: "80%",
                        maxWidth: 400,
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
                    : characters
                          .filter((character) =>
                              character.name
                                  .toLowerCase()
                                  .includes(search.toLowerCase())
                          )
                          .map((character) => (
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
