import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Sheet from "@mui/joy/Sheet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { mainSheetStyles } from "./styles/sheetStyles";
import Home from "./pages/home";
import Characters from "./pages/characters";
import CharacterInfo from "./pages/characterInfo";
import Spells from "./pages/spells";
import Books from "./pages/books";
import BookInfo from "./pages/bookInfo.js";
import Movies from "./pages/movies";
import MovieInfo from "./pages/movieInfo.js";
import UnderConstruction from "./components/underConstruction.js";
import NoPage from "./components/noPage.js";

export default function App() {
    return (
        <CssVarsProvider defaultMode="system">
            <GlobalStyles
                styles={{
                    "html, body": {
                        margin: 0,
                        padding: 0,
                        height: "100vh",
                        overflow: "auto", // Changed from hidden to auto
                    },
                }}
            />
            <Router>
                <Sheet 
                    sx={{ 
                        ...mainSheetStyles,
                        maxHeight: '100vh',
                        overflow: 'auto'
                    }}
                >
                    {/* <Navbar /> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/characters" element={<Characters />} />
                        <Route path="/characters/:name" element={<CharacterInfo />} />
                        <Route path="/spells" element={<Spells />} />
                        <Route path="/books" element={<Books />} />
                        <Route path="/movies" element={<Movies />} />
                        <Route path="/sorting-hat" element={<UnderConstruction />} />
                        <Route path="/chat" element={<UnderConstruction />} />
                        <Route path="/houses" element={<UnderConstruction />} />
                        <Route path="/houses/:name" element={<UnderConstruction />} />
                        <Route path="/movies/:serial" element={<MovieInfo />} />
                        <Route path="/books/:serial" element={<BookInfo />} />
                        <Route path="*" element={<NoPage message="Page Not Found" />} />
                    </Routes>
                </Sheet>
            </Router>
        </CssVarsProvider>
    );
}
