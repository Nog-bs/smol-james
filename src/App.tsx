import React from "react";
import { Box } from "@mui/material";
import { Header } from "./components/header";
import "./App.css";
import { RandomPictures } from "./components/randomPictures";
import { RandomFacts } from "./components/randomFacts";

export const App: React.FC = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            height="100vh"
            width="100%"
            bgcolor="brown"
        >
            <Header />
            <Box display="flex" justifyContent="space-around">
                <RandomPictures />
                <RandomFacts />
            </Box>
        </Box>
    );
};
