import React from "react";
import { Box, Typography } from "@mui/material";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <Box
            position="sticky"
            top="0"
            display="flex"
            justifyContent="center"
            bgcolor="#F5B700"
            padding="6px"
        >
            <Typography fontSize="2rem" variant="h1">
                Merry Chrysler
            </Typography>
        </Box>
    );
};
