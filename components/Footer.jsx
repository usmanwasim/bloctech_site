import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import logo from "../assets/logo.svg";
import footer1 from "../assets/footer/footer1.svg";
import footer2 from "../assets/footer/footer2.svg";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: "#CDEEFF",
      }}
    >
      <Container maxWidth="xl">
        <Box px={{ xs: 0, sm: 3, md: 5, lg: 10 }} p="1px">
          <Box sx={{ position: "relative", pt: 3 }}>
            <Grid
              container
              spacing={{ md: 8, xs: 5 }}
              pt={5}
              sx={{
                justifyContent: { xs: "center" },
                my: 3,
              }}
            >
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <Box>
                  <Box
                    sx={{
                      width: "300px",
                      //   maxWidth: { sm: "280px", xs: "220px" },
                    }}
                  >
                    <Image
                      src={logo}
                      alt="logo"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      mt: { xs: 3 },
                      fontSize: { md: "16px", xs: "14px" },
                      fontWeight: "400",
                      color: `${theme.palette.text.secondary}`,
                      //   textAlign: "justify",
                    }}
                  >
                    We help to empower businesses with Next-Generation
                    Blockchain Development. Experience the future of secure and
                    efficient transactions, seamless processes, and accelerated
                    success
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={2} md={3} sm={6} xs={12}>
                <Box width="100%" display="flex" justifyContent="center">
                  <Box>
                    {["About", "Career", "Faqs", "About us", "Sitemap"].map(
                      (item, i) => {
                        return (
                          <Box
                            display="flex"
                            alignItems="left"
                            gap={1}
                            mt={1}
                            key={i}
                          >
                            <Typography
                              sx={{
                                fontSize: {
                                  md: "16px",
                                  xs: "14px",
                                },
                                fontWeight: i === 0 ? "700" : "400",
                                color:
                                  i === 0
                                    ? `${theme.palette.text.primary}`
                                    : `${theme.palette.text.secondary}`,
                              }}
                            >
                              {item}
                            </Typography>
                          </Box>
                        );
                      }
                    )}
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={2} md={3} sm={6} xs={12}>
                <Box width="100%" display="flex" justifyContent="center">
                  <Box>
                    {[
                      "Support",
                      "Privacy",
                      "Terms",
                      "Cookies Policy",
                      "Delivery Policy",
                      "Refund Policy",
                    ].map((item, i) => {
                      return (
                        <Box
                          display="flex"
                          alignItems="left"
                          gap={1}
                          mt={1}
                          key={i}
                        >
                          <Typography
                            sx={{
                              fontSize: { md: "16px", xs: "14px" },
                              fontWeight: i === 0 ? "700" : "400",
                              color:
                                i === 0
                                  ? `${theme.palette.text.primary}`
                                  : `${theme.palette.text.secondary}`,
                            }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <Box textAlign="right">
                  <Typography
                    sx={{
                      fontSize: { md: "20px", sm: "16", xs: "14px" },
                      fontWeight: "700",

                      mb: 2,
                    }}
                  >
                    Our Partners
                  </Typography>
                  <Box
                    display="flex"
                    gap={{ xs: 4, sm: 2 }}
                    // flexDirection={{ xs: 'column', sm: 'row' }}
                    justifyContent={{
                      xs: "space-evenly",
                      sm: "space-evenly",
                      lg: "right",
                    }}
                    alignItems="center"
                  >
                    <Image src={footer1} alt="footer1" />
                    <Image src={footer2} alt="footer2" />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Divider sx={{ bgcolor: "#9EBECE" }} />
      <Container maxWidth="xl">
        <Box
          px={{ xs: 0, sm: 3, md: 5, lg: 16 }}
          display="flex"
          justifyContent="center"
          p="10px"
        >
          <Typography
            sx={{
              fontSize: { lg: "16px", md: "14px", xs: "12px" },
              fontWeight: "400",
            }}
          >
            All rights Reserved @ bloctechsolutions 2022
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
