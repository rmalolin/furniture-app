import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import NextLink from 'next/link'

export default function Logo(props) {
    return (
        <Box {...props}>
            <Link >
                <NextLink href="/">
                    <Text fontSize="lg" fontWeight="bold">
                        Serg & Co
                    </Text>
                </NextLink>
            </Link>
        </Box>
    );
}
