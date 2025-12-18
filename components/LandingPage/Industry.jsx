import React, { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import Icon1 from "@/assets/landingPage/industry/Icon1.svg";
import Icon2 from "@/assets/landingPage/industry/Icon2.svg";
import Icon3 from "@/assets/landingPage/industry/Icon3.svg";
import Icon4 from "@/assets/landingPage/industry/Icon4.svg";
import Icon5 from "@/assets/landingPage/industry/Icon5.svg";
import Icon6 from "@/assets/landingPage/industry/Icon6.svg";
import Icon7 from "@/assets/landingPage/industry/Icon7.svg";
import Icon8 from "@/assets/landingPage/industry/Icon8.svg";

const icons = [
  {
    icon: Icon1,
    text: "Healthcare",
  },
  {
    icon: Icon2,
    text: "Finance & payment",
  },
  {
    icon: Icon3,
    text: "Finance & payment",
  },
  {
    icon: Icon4,
    text: "Supply Chain Management",
  },
  {
    icon: Icon5,
    text: "Education & Learning",
  },
  {
    icon: Icon6,
    text: "Voting & Government",
  },
  {
    icon: Icon7,
    text: "Music & Entertainment",
  },
  {
    icon: Icon8,
    text: "Real Estate Solutions",
  },
];

const Industry = () => {
  const [hoveredItems, setHoveredItems] = useState(
    Array(icons.length).fill(false)
  );

  const handleHover = (index) => {
    setHoveredItems((prevHoveredItems) => {
      const updatedHoveredItems = [...prevHoveredItems];
      updatedHoveredItems[index] = true;
      return updatedHoveredItems;
    });
  };

  const handleMouseLeave = (index) => {
    setHoveredItems((prevHoveredItems) => {
      const updatedHoveredItems = [...prevHoveredItems];
      updatedHoveredItems[index] = false;
      return updatedHoveredItems;
    });
  };

  return (
    <Box py={5}>
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
        Blockchain Industries We Serve
      </Typography>
      <Container>
        <Box mt={5}>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "space-between" },
              flexWrap: "wrap",
              alignItems: "center",
              gap: { md: 0, sm: 4, xs: 0 },
            }}
          >
            {icons.map((Icon, index) => (
              <Box key={index} mt={3}>
                <Box
                  sx={{
                    boxSizing: "border-box",
                    width: "270.93px",
                    height: "240.42px",
                    background: hoveredItems[index] ? "#0FA6E4" : "#FFFFFF",
                    border: "1.8px solid #E3F6FF",
                    borderRadius: "15.6625px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "0.2s ease-in-out",
                    color: hoveredItems[index] ? "#fff" : "inherit",
                  }}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Icon.icon isHovered={hoveredItems[index]} />
                    <Typography
                      sx={{
                        fontFamily: "'Gilroy-Medium'",
                        fontSize: "22px",
                        lineHeight: "28px",
                        textAlign: "center",
                        mt: 0.7,
                      }}
                    >
                      {Icon.text}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Industry;
