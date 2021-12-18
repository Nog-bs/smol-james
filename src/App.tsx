import React from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "./components/header";
import "./App.css";
import { RandomPictures } from "./components/randomPictures";
import { Socials } from "./components/socials";
import About from "./components/about";

export const App: React.FC = () => {
    return (
        <>
            <Header />
            <Box
                display="flex"
                flexDirection="column"
                height="fit-content"
                width="100%"
                bgcolor="#4B8F8C"
                color="#89FC00"
                padding="16px"
                fontSize="1.25rem"
            >
                <Box display="flex" flexDirection="column">
                    <About />
                    <RandomPictures />
                    <Socials />
                    <Typography textAlign="center">
                        Coded in React | Material MUI | TypeScript
                    </Typography>
                </Box>
            </Box>
        </>
    );
};
