import React from "react";
import { Typography } from "@mui/material";

interface subtitleProps {
    label: string;
}

export const Subtitle: React.FC<subtitleProps> = ({ label }) => {
    return (
        <Typography
            marginBottom="16px"
            color="#F5B700"
            fontSize="1.5rem"
            variant="h3"
        >
            {label}
        </Typography>
    );
};
