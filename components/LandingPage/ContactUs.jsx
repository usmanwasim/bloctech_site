import {
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  InputBase,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckedIcon from "@mui/icons-material/CheckCircleSharp";
import UncheckedIcon from "@mui/icons-material/RadioButtonUncheckedSharp";
import Image from "next/image";

import twitter from "../../assets/landingPage/contactUs/twitter.svg";
import facebook from "../../assets/landingPage/contactUs/facebook.svg";
import instagram from "../../assets/landingPage/contactUs/instagram.svg";
import linkedIn from "../../assets/landingPage/contactUs/linkedIn.svg";
import medium from "../../assets/landingPage/contactUs/medium.svg";

export default function ContactUs() {
  const theme = useTheme();
  return (
    <>
      <Box width="100%" mt={{ xs: 5, sm: 7, md: 10 }} mb={{ xs: 3, sm: 4 }}>
        <Container>
          <Box
            sx={{
              bgcolor: `${theme.palette.background.bgmedium}`,
              p: 1.5,
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <Grid container>
              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    height: "100%",
                    bgcolor: `${theme.palette.background.bgdark}`,
                    borderRadius: "10px",
                    p: { xs: 2, sm: 3.5, md: 5 },
                  }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: "Gilroy-Bold",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: { xs: "20px", sm: "26px", md: "35px" },
                      color: `${theme.palette.text.anticolor}`,
                    }}
                  >
                    Contact Information
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      mt: { xs: 0.5, sm: 1 },
                      fontFamily: "jost",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: { xs: "15px", sm: "17px", md: "20px" },
                      color: `${theme.palette.text.anticolor}`,
                    }}
                  >
                    Say something to start a conversation!
                  </Typography>
                  <Box sx={{ my: { xs: 3, sm: 4, md: 5 } }}>
                    <Typography
                      variant="p"
                      sx={{
                        fontFamily: "jost",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: { xs: "13px", sm: "15px", md: "18px" },
                        color: `${theme.palette.text.anticolor}`,
                      }}
                    >
                      contact@bloctechsolutions.com
                      <br />
                    </Typography>
                    <Typography
                      variant="p"
                      sx={{
                        fontFamily: "jost",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: { xs: "14px", sm: "16px", md: "19px" },
                        color: `${theme.palette.text.anticolor}`,
                      }}
                    >
                      Phone (+92)03138604818
                    </Typography>
                  </Box>
                  <Stack direction="row" spacing={2} my={2}>
                    <PhoneInTalkIcon
                      sx={{ color: `${theme.palette.text.anticolor}` }}
                    />
                    <Typography
                      variant="p"
                      sx={{
                        color: `${theme.palette.text.anticolor}`,
                        fontFamily: "jost",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                      }}
                    >
                      (+92)03138604818
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={2} my={2}>
                    <EmailIcon
                      sx={{ color: `${theme.palette.text.anticolor}` }}
                    />
                    <Typography
                      variant="p"
                      sx={{
                        color: `${theme.palette.text.anticolor}`,
                        fontFamily: "jost",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                      }}
                    >
                      demo@gmail.com
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={2} my={2}>
                    <LocationOnIcon
                      sx={{ color: `${theme.palette.text.anticolor}` }}
                    />
                    <Typography
                      variant="p"
                      sx={{
                        color: `${theme.palette.text.anticolor}`,
                        fontFamily: "jost",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: { xs: "12px", sm: "14px", md: "16px" },
                      }}
                    >
                      132 Dartmouth Street Boston,
                      <br /> Massachusetts 02156 United States
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={1}
                    mt={{ xs: 3, sm: 4, md: 5 }}
                  >
                    <Box
                      sx={{
                        width: { xs: "25px", sm: "30px" },
                        height: { xs: "25px", sm: "30px" },
                      }}
                    >
                      <Image
                        src={twitter}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: { xs: "25px", sm: "30px" },
                        height: { xs: "25px", sm: "30px" },
                      }}
                    >
                      <Image
                        src={instagram}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: { xs: "25px", sm: "30px" },
                        height: { xs: "25px", sm: "30px" },
                      }}
                    >
                      <Image
                        src={facebook}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: { xs: "25px", sm: "30px" },
                        height: { xs: "25px", sm: "30px" },
                      }}
                    >
                      <Image
                        src={linkedIn}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        width: { xs: "25px", sm: "30px" },
                        height: { xs: "25px", sm: "30px" },
                      }}
                    >
                      <Image
                        src={medium}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Box>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} md={7}>
                <Box sx={{ p: { xs: 2, sm: 3.5, md: 5 }, height: "100%" }}>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    gap={{ xs: 3, sm: 5 }}
                    sx={{ width: "100%" }}
                  >
                    <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                      <Typography
                        sx={{
                          fontFamily: "jost",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: { xs: "12px", sm: "14px", md: "16px" },
                          color: `${theme.palette.text.secondary}`,
                        }}
                      >
                        First Name
                      </Typography>
                      <InputBase
                        placeholder="First Name"
                        sx={{
                          width: "100%",
                          color: `${theme.palette.text.secondary}`,
                          borderBottom: `1px solid ${theme.palette.text.secondary}`,
                          fontSize: { xs: "12px", sm: "15px" },
                        }}
                      />
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                      <Typography
                        sx={{
                          fontFamily: "jost",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: { xs: "12px", sm: "14px", md: "16px" },
                          color: `${theme.palette.text.secondary}`,
                        }}
                      >
                        Last Name
                      </Typography>
                      <InputBase
                        placeholder="Last Name"
                        sx={{
                          width: "100%",
                          color: `${theme.palette.text.secondary}`,
                          borderBottom: `1px solid ${theme.palette.text.secondary}`,
                          fontSize: { xs: "12px", sm: "15px" },
                        }}
                      />
                    </Box>
                  </Stack>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    gap={{ xs: 3, sm: 5 }}
                    sx={{ width: "100%", mt: { xs: 3, sm: 5 } }}
                  >
                    <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                      <Typography
                        sx={{
                          fontFamily: "jost",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: { xs: "12px", sm: "14px", md: "16px" },
                          color: `${theme.palette.text.secondary}`,
                        }}
                      >
                        Email
                      </Typography>
                      <InputBase
                        placeholder="Email"
                        sx={{
                          width: "100%",
                          color: `${theme.palette.text.secondary}`,
                          borderBottom: `1px solid ${theme.palette.text.secondary}`,
                          fontSize: { xs: "12px", sm: "15px" },
                        }}
                      />
                    </Box>
                    <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                      <Typography
                        sx={{
                          fontFamily: "jost",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: { xs: "12px", sm: "14px", md: "16px" },
                          color: `${theme.palette.text.secondary}`,
                        }}
                      >
                        Phone Number
                      </Typography>
                      <InputBase
                        placeholder="Phone Number"
                        sx={{
                          width: "100%",
                          color: `${theme.palette.text.secondary}`,
                          borderBottom: `1px solid ${theme.palette.text.secondary}`,
                          fontSize: { xs: "12px", sm: "15px" },
                        }}
                      />
                    </Box>
                  </Stack>
                  <Stack
                    direction={{ xs: "column" }}
                    gap={{ xs: 3, sm: 5 }}
                    sx={{ width: "100%", mt: { xs: 3, sm: 5 } }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <InputBase
                        placeholder="Your company / Organization"
                        sx={{
                          width: "100%",
                          color: `${theme.palette.text.secondary}`,
                          borderBottom: `1px solid ${theme.palette.text.secondary}`,
                          fontSize: { xs: "12px", sm: "15px" },
                        }}
                      />
                    </Box>
                    <Box sx={{ width: "100%" }}>
                      <InputBase
                        placeholder="Share your requirement"
                        sx={{
                          width: "100%",
                          color: `${theme.palette.text.secondary}`,
                          borderBottom: `1px solid ${theme.palette.text.secondary}`,
                          fontSize: { xs: "12px", sm: "15px" },
                        }}
                      />
                    </Box>
                  </Stack>
                  <Stack
                    direction="row"
                    gap={{ xs: 1, sm: 2 }}
                    sx={{
                      width: "100%",
                      mt: { xs: 2, sm: 5 },
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      size="12px"
                      sx={{
                        width: { xs: "12px", sm: "14px", md: "14px" },
                        height: { xs: "12px", sm: "14px", md: "14px" },
                        color: `${theme.palette.text.secondary}`,
                      }}
                      icon={
                        <UncheckedIcon
                          sx={{ color: `${theme.palette.text.primary}` }}
                        />
                      }
                      checkedIcon={
                        <CheckedIcon
                          sx={{ color: `${theme.palette.text.primary}` }}
                        />
                      }
                    />
                    <Typography
                      variant="p"
                      sx={{ fontSize: { xs: "12px", sm: "15px" } }}
                    >
                      I agree, to terms and conditions
                    </Typography>
                  </Stack>
                  <Box
                    sx={{
                      width: "max-content",
                      ml: "auto",
                      mt: { xs: 3, sm: 4, md: 5 },
                    }}
                  >
                    <Button
                      variant="gradient"
                      sx={{
                        fontFamily: "jost",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: { xs: "12px", sm: "15px" },
                        textTransform: "capitalize",
                        p: "5px 20px",
                      }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
