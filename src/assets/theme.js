import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    semibold: `'Poppins-semibold', sans-serif`,
    regular: `'Poppins-regular', sans-serif`,
    bold: `'Poppins-bold', sans-serif`,
    medium: `'Poppins-medium', sans-serif`,
    light: `'Poppins-light', sans-serif`,
  },
  colors: {
    gold: {
      color: "#D5A226",
    },
    blue: {
      color: "#191C6C",
    },
    green: {
      color: "#4BB065",
    },
    pitch: {
      color: "#F07C7D",
    },
    opaque: {
      color: "rgba(71, 121, 196, 0.25)",
    },
    wallet: {
      opacity: 0.5,
    },
  },
});

export default theme;
