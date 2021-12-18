import { Box } from "@mui/material";
import React from "react";
import { Subtitle } from "./subtitle";
import Link from "@mui/material/Link";

interface RandomFactsProps {}

export const Socials: React.FC<RandomFactsProps> = ({}) => {
    return (
        <Box marginBottom="16px" display="flex" flexDirection="column">
            <Subtitle label="James' Socials" />
            <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/p/CXMfpbCLaHF/"
            >
                Sneak peak his about to be released single {":)"}
            </a>
            <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/Nog-bs/smol-james"
            >
                Github Code
            </a>
            <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/jamesyngson/"
            >
                LinkedIn
            </a>
            <a rel="noreferrer" target="_blank" href="https://sxulace.com/">
                His Website
            </a>
            <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/sxulace/"
            >
                Instagram
            </a>
            <a
                rel="noreferrer"
                target="_blank"
                href="https://www.youtube.com/watch?v=hDc28KwpIXk&ab_channel=ITENDSWITHUS"
            >
                It Ends With Us
            </a>
        </Box>
    );
};
