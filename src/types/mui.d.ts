import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    backgroundIcon?: string;
  }

  interface PaletteOptions {
    backgroundIcon?: string;
    backgroundCard?: string;
  }
}