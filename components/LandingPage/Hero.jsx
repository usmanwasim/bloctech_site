import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";

import heroImg from "../../assets/landingPage/mainSection/hero-img.svg";

export default function Hero() {
  const theme = useTheme();
  return (
    <>
      <Box>
        <Container>
          <Grid
            container
            rowSpacing={{ xs: 5, sm: 7, md: 0 }}
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  fontFamily: "Jost",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: { xs: "16px", sm: "22px", md: "38px" },
                  lineHeight: { xs: "25px", sm: "30px", md: "35px" },
                }}
              >
                We are
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Audiowide",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: { xs: "30px", sm: "40px", md: "50px" },
                  color: `${theme.palette.text.herotext}`,
                  lineHeight: { xs: "25px", sm: "35px", md: "45px" },
                }}
              >
                Blockchain
              </Typography>
              <Typography
                sx={{
                  //   mt: 1,
                  fontFamily: "Jost",
                  fontStyle: "normal",
                  fontWeight: "900",
                  fontSize: { xs: "28px", sm: "38px", md: "55px" },
                  color: `${theme.palette.text.primary}`,
                  lineHeight: { xs: "35px", sm: "40px", md: "45px" },
                }}
              >
                Development Company
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  fontFamily: "Jost",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: { xs: "11px", sm: "15px", md: "17px" },
                  //   lineHeight: "27px",
                }}
              >
                We are a blockchain consulting, design, and development company
                leveraging Ethereum, EVMs, and Solana to deliver secure and
                transformative solutions, including DAOs, dApps, NFTs, asset
                tokenization, and more
              </Typography>
              <Stack direction="row" gap={3} mt={5}>
                <Button
                  variant="gradient"
                  sx={{ fontSize: { xs: "11px", sm: "15px" }, p: "7px 20px " }}
                >
                  Explore Services
                </Button>
                <Button
                  sx={{
                    fontSize: { xs: "11px", sm: "15px" },
                    p: "7px 20px ",
                    borderRadius: "11px",
                    border: `1px solid ${theme.palette.text.primary}`,
                    color: `${theme.palette.text.primary}`,
                  }}
                >
                  Contact Us
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ width: "100%" }}>
                <Image
                  src={heroImg}
                  alt="hero"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
