import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Subtitle } from "./subtitle";
import bossShot from "../assets/images/boss-shot.png";
import Button from "@mui/material/Button";
import bamBam from "../assets/images/james-stuff/bam-bam.png";
import car from "../assets/images/james-stuff/car.png";
import glasses from "../assets/images/james-stuff/glasses.jpg";
import meme from "../assets/images/james-stuff/meme.png";
import peace from "../assets/images/james-stuff/peace.jpg";
import sexu from "../assets/images/james-stuff/sexu.jpg";
import waldo from "../assets/images/james-stuff/waldo.jpg";

interface RandomPicturesProps {}

const imageArr = [
    { img: bossShot, caption: "Testing image, my boss and I" },
    { img: bamBam, caption: "Bam Bam" },
    { img: car, caption: "Car" },
    { img: glasses, caption: "Glasses" },
    { img: meme, caption: "Meme" },
    { img: peace, caption: "Peace" },
    { img: sexu, caption: "Sexy" },
    { img: waldo, caption: "Waldo" },
];

export const RandomPictures: React.FC<RandomPicturesProps> = ({}) => {
    const [imageIndex, setImageIndex] = useState(0);

    const handleClick = () =>
        setImageIndex(imageIndex !== imageArr.length - 1 ? imageIndex + 1 : 0);

    return (
        <Box marginBottom="24px" display="flex" flexDirection="column">
            <Subtitle label="Amusing Pictures" />
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                width="100%"
            >
                <img
                    style={{
                        height: "300px",
                        width: "300px",
                        marginBottom: "12px",
                    }}
                    src={imageArr[imageIndex]?.img}
                    alt="random pic"
                />
                <Typography marginBottom="8px">
                    Description: {imageArr[imageIndex]?.caption}
                </Typography>
                <Box display="flex" justifyContent="center" width="300px">
                    <Button onClick={handleClick} variant="contained">
                        Generate
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
