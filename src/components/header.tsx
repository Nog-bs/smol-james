import React from "react";
import { Box, Typography } from "@mui/material";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <Box display="flex" justifyContent="center">
            <Typography typography="h1" color="white">
                Merry Chrysler
            </Typography>
        </Box>
    );
};
