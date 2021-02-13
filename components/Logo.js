import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

export default function Logo(props) {
    return (
        <Box {...props}>
            <Link href="/">
                <Text fontSize="lg" fontWeight="bold">
                    Serg & Co
      </Text>
            </Link>
        </Box>
    );
}
