"use client";

import { createTheme } from "@mui/material/styles";

const themeObj = {
  light: {
    text: {
      primary: "#000",

      secondary: "#707070",
      herotext: "#0FA6E4",
      anticolor: "#fff",
    },
    background: {
      hard: "#fff",
      medium: "#fdfdfd",
      light: "#efefef",
      borderLight: "#707070",
      shadow: "#000",
      bgdark: "#0FA6E4",
      bgmedium: "#CDEEFF",
      bglight: "#E8F7FF",
    },
  },

  dark: {
    text: {
      primary: "#fff",
      secondary: "#707070",
      herotext: "#0FA6E4",
      anticolor: "#000",
    },
    background: {
      hard: "#000",
      medium: "#151515",
      light: "#212121",
      borderLight: "#707070",
      shadow: "#000",
    },
  },
};

export const createCustomTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...themeObj[mode],
    },
    typography: {
      fontFamily: [
        "Jost",
        "Gilroy-Bold",
        "Gilroy-Light",
        "Gilroy-Medium",
        "sans-serif",
      ].join(","),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => `
		    body {
		      background-color: ${theme.palette.mode === "dark" ? "#131213" : "#fdfdfd"}
		    }
		  `,
      },
      MuiButton: {
        variants: [
          {
            props: { variant: "gradient" },
            style: {
              background: "#0FA6E4",
              color: "#fff",
              fontFamily: "jost",
              fontStyle: "normal",
              fontWeight: "700",
              borderRadius: "11px",
              border: "1px solid transparent",
              "&:hover": {
                background: "transparent",
                border: "1px solid  #0FA6E4",
                color: "#0FA6E4",
              },
            },
          },
        ],
      },
    },
  });
