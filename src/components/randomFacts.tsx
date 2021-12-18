import { Box, Typography } from "@mui/material";
import React from "react";

interface RandomFactsProps {}

export const RandomFacts: React.FC<RandomFactsProps> = ({}) => {
    return (
        <Box
            width="50vw"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Typography typography="h2" color="white">
                Random Facts
            </Typography>
            <Typography typography="p" color="white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum voluptates ducimus possimus reiciendis rem eos illum
                laborum dolore similique temporibus nesciunt nisi vel sint,
                quasi, beatae ad omnis ex cumque.
            </Typography>
        </Box>
    );
};
