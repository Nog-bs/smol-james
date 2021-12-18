import { Box, Typography } from "@mui/material";
import React from "react";
import bossShot from "../assets/images/boss-shot.png";
import bamBam from "../assets/images/bam-bam.png";

interface RandomPicturesProps {}

export const RandomPictures: React.FC<RandomPicturesProps> = ({}) => {
    return (
        <Box
            width="50vw"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Typography typography="h2" color="white">
                Random Pictures
            </Typography>
            <img
                style={{ height: "400px", width: "400px" }}
                src={bamBam}
                alt="random pic"
            />
        </Box>
    );
};
