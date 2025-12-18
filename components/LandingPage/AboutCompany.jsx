import React from "react";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

import { ArrowRightAlt } from "@mui/icons-material";

import comRight from "../../assets/landingPage/aboutCompany/comRight.svg";
import Image from "next/image";

const AboutCompany = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          background: `${theme.palette.background.bglight}`,
          padding: "8rem 0rem",
          width: "100%",
        }}
        mt={5}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "left",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Divider
                    sx={{
                      color: `${theme.palette.text.secondary}`,
                      width: "70px",
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Gilroy-Medium",
                      fontSize: {
                        md: "20px",
                        xs: "15px",
                        color: `${theme.palette.text.secondary}`,
                      },
                    }}
                  >
                    Why Choose Us
                  </Typography>
                </Box>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: {
                      lg: "52px",
                      md: "40px",
                      sm: "30px",
                      xs: "25px",
                    },
                    lineHeight: "60px",
                    fontFamily: " Gilroy-Bold",
                    mt: 2,
                  }}
                >
                  6 Years of Blockchain Development Expertise
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      md: "16px",
                      xs: "13px",
                    },
                    fontWeight: "400",
                    lineHeight: "30px",
                    letterSpacing: "0em",
                    textAlign: "left",
                    mt: 3,
                  }}
                >
                  When you partner with us, you can expect exceptional results
                  that set you apart in the blockchain landscape. Our extensive
                  experience and expertise enable us to craft secure and
                  user-friendly blockchain solutions that will enhance the
                  outcome of your products, services, and systems as well. We
                  have a proven track record of successfully delivering projects
                  on time and within budget.
                </Typography>
                <Box
                  display="flex"
                  gap={2}
                  alignItems="center"
                  sx={{ cursor: "pointer" }}
                  mt={2}
                >
                  <Typography
                    sx={{
                      fontFamily: "Jost",
                      fontSize: { md: "24px", xs: "15px" },
                      fontWeight: "500",
                      lineHeight: "35px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: `${theme.palette.text.herotext}`,
                    }}
                  >
                    Explore More
                  </Typography>
                  <ArrowRightAlt
                    sx={{
                      color: `${theme.palette.text.herotext}`,
                      fontSize: "2rem",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box width="100%" display={"flex"} justifyContent={"center"}>
                <Image
                  src={comRight}
                  alt="comRight"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          background: `${theme.palette.background.bgmedium}`,
          padding: "2rem 0rem",
          width: "100%",
        }}
      >
        <Container>
          <Box
            display="flex"
            justifyContent={{ md: "space-between", xs: "center" }}
            gap={2}
            flexWrap="wrap"
          >
            <Typography
              sx={{
                fontFamily: "Jost",
                fontSize: { md: "30px", xs: "15px" },
                fontWeight: "400",
                lineHeight: "24px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Supercharge your business with our unparalleled blockchain
              expertise.
            </Typography>
            <Button variant="gradient">Get Started Now</Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AboutCompany;
