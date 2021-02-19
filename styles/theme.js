import { extendTheme } from "@chakra-ui/react";

const colors = {
    primary: {
        100: "#bee3f8",
        200: "#90cdf4",
        300: "#63b3ed",
        400: "#4299e1",
        500: "#3182ce",
        600: "#2b6cb0",
        700: "#2c5282",
        800: "#2a4365",
        900: "#1A365D"
    }
};

const customTheme = extendTheme({ colors });

export default customTheme;
