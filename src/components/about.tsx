import { Box, Typography } from "@mui/material";
import React from "react";
import { Subtitle } from "./subtitle";

const About = () => {
    return (
        <Box marginBottom="24px">
            <Subtitle label="Howdy" />
            <Typography>
                Merry Christmas brother. Sorry I had to lie to you about who my
                Secret Santa was. I hope this was passed off to you smoothly.
                You have been one of my closest of friends especially through
                these rough times and I am forever grateful despite how much of
                an asshole you can be. Merry Chrysler {"<3"}
            </Typography>
        </Box>
    );
};

export default About;
