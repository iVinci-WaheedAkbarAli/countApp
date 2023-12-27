import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "blue.100",
        color: "blue.800",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
        maxWidth: "1280px",
      }
    },
  },
});
