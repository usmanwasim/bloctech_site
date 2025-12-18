import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import ArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import ArrowRight from "@mui/icons-material/KeyboardArrowRight";

import img1 from "../../assets/landingPage/clientsReviews/client1.svg";
import img2 from "../../assets/landingPage/clientsReviews/client2.svg";
import img3 from "../../assets/landingPage/clientsReviews/client3.svg";
import { useState } from "react";
const imgData = [
  {
    id: 0,
    img: img1,
  },
  {
    id: 1,
    img: img2,
  },
  {
    id: 2,
    img: img3,
  },
];

export default function ClientsReviews() {
  const [state, setState] = useState(0);
  const theme = useTheme();

  const handleNext = () => {
    setState((pre) => (pre === 2 ? 0 : pre + 1));
    let arr = imgData.splice(0, 1);
    imgData.push(...arr);
  };
  const handlePrevious = () => {
    setState((pre) => (pre === 0 ? imgData.length - 1 : pre - 1));
    let arr = imgData.splice(-1, 1);
    imgData.unshift(...arr);
  };
  console.log(state, "state for item");
  return (
    <>
      <Box my={{ xs: 5, sm: 7, md: 10 }}>
        <Container>
          <Box
            width={{ xs: "100%", sm: "80%", md: "60%" }}
            mx="auto"
            textAlign="center"
          >
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Gilroy-Bold",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: { xs: "20px", sm: "26px", md: "35px" },
                color: `${theme.palette.text.primary}`,
              }}
            >
              What Our Valued Clients Think About BlocTech Solutions
            </Typography>
            <Typography
              variant="p"
              sx={{
                mt: { xs: 1, sm: 2 },
                fontFamily: "Gilroy-Bold",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: { xs: "12px", sm: "12px", md: "16px" },
                color: `${theme.palette.text.secondary}`,
              }}
            >
              Discover the real stories and experiences shared by our valued
              customers and how our services have transformed their businesses.
            </Typography>
          </Box>

          <Stack
            direction="row"
            sx={{
              px: { xs: 3, sm: 5 },
              py: { xs: 5, sm: 7, md: 10 },
              position: "relative",
            }}
          >
            <Box
              onClick={() => handlePrevious()}
              sx={{
                cursor: "pointer",
                width: { xs: "30px", sm: "50px" },
                height: { xs: "30px", sm: "50px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: `1px solid ${theme.palette.text.secondary}`,
                borderRadius: "100%",
                position: "absolute",
                top: "50%",
                left: { xs: "2%", sm: "0%" },
                transform: "translate(-50%,-50%)",
              }}
            >
              <ArrowLeft sx={{ color: `${theme.palette.text.secondary}` }} />
            </Box>
            <Box
              onClick={() => handleNext()}
              sx={{
                cursor: "pointer",
                width: { xs: "30px", sm: "50px" },
                height: { xs: "30px", sm: "50px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: `1px solid ${theme.palette.text.secondary}`,
                borderRadius: "100%",
                position: "absolute",
                top: "50%",
                left: { xs: "98%", sm: "100%" },
                transform: "translate(-50%,-50%)",
              }}
            >
              <ArrowRight sx={{ color: `${theme.palette.text.secondary}` }} />
            </Box>
            <Grid
              container
              spacing={5}
              sx={{
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Grid item xs={12} md={5} order={{ xs: 2, md: 1 }}>
                <Box height={"100%"}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "Gilroy-Bold",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: { xs: "14px", sm: "17px", md: "20px" },
                      color: `${theme.palette.text.primary}`,
                    }}
                  >
                    Nathan D. Wosnack (US)
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      fontFamily: "jost",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: { xs: "12px", sm: "12px", md: "16px" },
                      color: `${theme.palette.text.primary}`,
                    }}
                  >
                    &ldquo;We had a great experience with this team. They
                    developed everything we needed and more. They solved bugs
                    that existed with this software and they continue to be
                    supportive. Highly recommended!&rdquo;
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={7} order={{ xs: 1, md: 2 }}>
                <Stack
                  direction="row"
                  sx={{
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {imgData?.map(({ img }, i) => (
                    <Stack
                      justifyContent={"center"}
                      alignItems={"center"}
                      key={i}
                      sx={{
                        bgcolor: "#fff",
                        minWidth: "33%",
                      }}
                    >
                      <Box
                        sx={{
                          width: i === 0 ? "100%" : "70%",
                          p: { xs: 0.5, sm: 1, md: 2 },
                          borderRight: `1px solid ${theme.palette.text.secondary}`,
                          borderRadius: "0% 100% 100% 0%",
                          transition: "all 3s",
                        }}
                      >
                        <Image
                          src={img}
                          alt=""
                          style={{ width: "100%", height: "100%" }}
                        />
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
