import React from "react";

import { Box, Container, Typography } from "@mui/material";

import Icon1 from "@/assets/landingPage/perks/icon1.svg";
import Image from "next/image";

const Perks = () => {
  return (
    <Box py={5}>
      <Container>
        <Typography
          component={"h1"}
          sx={{
            fontFamily: "Gilroy-Bold",
            fontSize: { md: "48px", xs: "25px" },
            lineHeight: "56px",
            letterSpacing: "0em",
            textAlign: "center",
          }}
        >
          Perks of our Blockchain Solutions
        </Typography>

        <Box mt={10}>
          <Box
            display={"flex"}
            gap={3}
            flexWrap={"wrap"}
            justifyContent={"center"}
          >
            {[1, 2, 3, 4].map((item, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    width: "337px",
                    height: "147px",
                    background: "#FFFFFF",
                    boxShadow: "9px 1px 18px rgba(0, 0, 0, 0.1)",
                    padding: "0 2rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "87px",
                        height: "87px",
                        mt: -7,
                      }}
                    >
                      <Image
                        src={Icon1}
                        alt="alt"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "'Gilroy-Bold'",
                      fontSize: "16px",
                      lineHeight: "19px",
                      textAlign: "center",
                      mt: 1,
                    }}
                  >
                    Speed
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Jost'",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "21px",
                      textAlign: "center",
                      color: "#707070",
                      mt: 1,
                    }}
                  >
                    Experience faster transaction processing and data sharing
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Perks;
