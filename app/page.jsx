"use client";
import { Grid } from "@mui/material";
import HomePage from "../components/LandingPage/Home";
export default function Home() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <HomePage />
    </Grid>
  );
}
