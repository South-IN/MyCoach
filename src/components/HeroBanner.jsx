import { Box, Typography, Button } from "@mui/material";
import React from "react";
import HeroBannerImage from "../assets/images/banner-2.jpg";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
    >
      <Typography
        color="#ff2625"
        fontWeight="700"
        fontSize="50px"
        fontFamily="Advent Pro"
      >
        MyCoach
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        fontFamily="Advent Pro"
      >
        Browse From <br />
        Thousands of Exercises
      </Typography>
      <Typography
        fontWeight="600"
        fontSize="200px"
        color="#ff2625"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
        }}
      >
        Exercise
      </Typography>

      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
