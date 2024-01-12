import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import { FaRegCopyright } from "react-icons/fa6";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
const Footer = () => {
  return (
    <Box
      className="footer-container"
      width="100%"
      sx={{
        marginTop: "20px",
        height: { lg: "150px", xs: "70px" },
        paddingTop: { lg: "50px", xs: "30px" },
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography fontFamily="Monospace" fontWeight="500">
        Copyright <FaRegCopyright />{" "}
        <span style={{ color: "#ff2625", fontWeight: "bolder" }}>MyCoach</span>
      </Typography>
      <Stack direction="row" className="link-container">
        <a
          href="https://www.linkedin.com/in/saurav-singh-228554281/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} />
        </a>
        <a href="https://github.com/South-IN" target="_blank" rel="noreferrer">
          <img src={githubIcon} />
        </a>
      </Stack>
    </Box>
  );
};

export default Footer;
