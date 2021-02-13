import { extendTheme } from "@chakra-ui/react";

const colors = {
    primary: {
        100: "#C4F1F9",
        200: "#9DECF9",
        300: "#76E4F7",
        400: "#0BC5EA",
        500: "#00B5D8",
        600: "#00A3C4",
        700: "#0987A0",
        800: "#086F83",
        900: "#065666"
    }
};

const customTheme = extendTheme({ colors });

export default customTheme;
