import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Hidden,
  Stack,
  Typography,
  SwipeableDrawer,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../assets/header/logo.svg";

const data = ["Home", "Services", "About Us", "Contact Us", "Blog"];
const Header = () => {
  const theme = useTheme();
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => {
    setState((prevState) => !prevState);
  };
  const list = () => (
    <Box
      sx={{ width: 250, my: 5 }}
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <Box sx={{ width: "170px", mx: "auto" }}>
        <Image
          src={logo}
          alt="logo"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      {data.map((item) => (
        <Typography
          key={item}
          sx={{
            mt: 2,
            textAlign: "center",
            fontFamily: "jost",
            fontSize: "16px",
            fontWeight: "500",
            color: `${theme.palette.text.secondary}`,
            "&:hover": {
              color: `${theme.palette.text.primary}`,
              fontWeight: "600",
            },
          }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
  return (
    <>
      <Box py={2}>
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box sx={{ width: { xs: "170px", sm: "225px", md: "280px" } }}>
              <Image
                src={logo}
                alt="logo"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Hidden mdDown>
              <Stack direction="row" gap={5}>
                {data.map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      fontFamily: "jost",
                      fontSize: { xs: "12px", sm: "15px", md: "18px" },
                      fontWeight: "500",
                      color: `${theme.palette.text.secondary}`,
                      "&:hover": {
                        color: `${theme.palette.text.primary}`,
                        fontWeight: "600",
                      },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
              <Button
                variant="gradient"
                sx={{ fontSize: "15px", p: "7px 20px " }}
              >
                Get A Quote
              </Button>
            </Hidden>
            <Hidden mdUp>
              <Box>
                <Button onClick={() => toggleDrawer(true)}>
                  <MenuIcon sx={{ color: `${theme.palette.text.primary}` }} />
                </Button>
                <SwipeableDrawer
                  anchor={"left"}
                  open={state}
                  onClose={() => toggleDrawer(false)}
                  onOpen={() => toggleDrawer(true)}
                >
                  {list()}
                </SwipeableDrawer>
              </Box>
            </Hidden>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Header;
