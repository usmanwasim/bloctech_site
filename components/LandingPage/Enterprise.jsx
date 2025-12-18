import React from "react";

import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import cardimg1 from "../../assets/landingPage/Enterprise/cardimg1.png";
import Image from "next/image";

const Enterprise = () => {
  const theme = useTheme();
  return (
    <Box>
      <Container>
        <Typography
          component="h1"
          sx={{
            fontSize: { md: "52px", sm: "35px", xs: "24px" },
            textAlign: "center",
            fontFamily: "Gilroy-Bold",
          }}
        >
          Enterprise-grade Blockchain Solutions
        </Typography>
        <Typography
          component="h3"
          sx={{
            fontSize: { md: "19px", xs: "14px" },
            fontFamily: "Jost",
            fontWeight: "400",
            textAlign: "center",
            color: `${theme.palette.text.secondary}`,
            mt: 4,
          }}
        >
          We empower businesses to thrive in the digital era by leveraging
          modern blockchain solutions, unlocking new efficiencies, enhancing
          security, and driving innovation for sustainable growth.
        </Typography>

        <Box mt={7}>
          <Grid container spacing={4}>
            {[1, 2, 3, 4, 5, 6].map((item, i) => {
              return (
                <Grid item xs={12} lg={4} sm={6} key={i}>
                  <Box
                    sx={{
                      padding: {
                        md: "2rem 1rem 1rem ",
                        xs: "1.2rem 0.8rem ",
                      },
                      border: `1px solid ${theme.palette.text.herotext}`,
                      borderRadius: "10px",
                      mt: 3,
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: "55px", md: "70px" },
                        ml: 2,
                        mt: { xs: -5.5, md: -8 },
                      }}
                    >
                      <Image
                        src={cardimg1}
                        alt="cardimg1"
                        style={{
                          // transform: "translate(20%,-100%)",
                          // position: "absolute",

                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Box>
                    <Typography
                      component="h2"
                      sx={{
                        fontSize: { md: "24px", xs: "18px" },
                        mt: 2,
                        fontFamily: "Gilroy-Medium",
                      }}
                    >
                      Defi Development Services 
                    </Typography>
                    <Typography
                      component="h2"
                      sx={{
                        fontSize: { md: "16px", xs: "13px" },
                        fontFamily: "Jost",
                        fontWeight: "400",
                        color: `${theme.palette.text.secondary}`,
                        mt: 1,
                      }}
                    >
                      A leading blockchain development company nurturing
                      innovation practices in Web 3.0 and inspiring product
                      companies and non-IT enterprises to built reliable
                      blockchain solutions
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Enterprise;
