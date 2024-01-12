import React from "react";
import { Stack, Typography } from "@mui/material";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
        bodyPart === item.type
          ? {
              opacity: "1",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
              background: "#fff",
              borderRadius: "40px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
          : {
              background: "#fff",
              borderRadius: "50%",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
      }
      onClick={() => {
        setBodyPart(item.type);
        window.scrollTo({ top: 1700, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={item.Icon}
        alt="dumbbell"
        style={{ width: "100px", height: "100px" }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item.type}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
