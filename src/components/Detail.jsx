import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.svg";
import TargetImage from "../assets/icons/target.svg";
import EquipmentImage from "../assets/icons/equipment.svg";
const Detail = ({ exerciseDetail }) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const {
    bodyPart,
    gifUrl,
    name,
    target,
    instructions,
    secondaryMuscles,
    equipment,
  } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          variant="h3"
          textTransform={"capitalize"}
          fontFamily="Advent Pro"
          fontWeight="700"
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          fontSize="18px"
          textAlign="center"
          fontFamily="Roboto Mono"
          whiteSpace="balance"
        >
          {instructions.join(" ")}
        </Typography>
        <Stack direction="row" gap="24px" alignItems="center">
          <Typography
            sx={{
              fontFamily: "Roboto Mono",

              fontSize: "17px",
            }}
          >
            Also Targets :
          </Typography>
          {secondaryMuscles.map((item) => (
            <Typography
              key={item}
              textTransform={"capitalize"}
              sx={{
                padding: "10px",
                width: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "500",
                bgcolor: "#1d2d44",
                borderRadius: "10px",
                fontSize: "14px",
                color: "#fff",
                textWrap: "nowrap",
                fontFamily: "Roboto Mono",
              }}
            >
              {item}
            </Typography>
          ))}
        </Stack>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button>
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ marginRight: "20px" }}
              />
              <Typography variant="h5" textTransform={"capitalize"}>
                {item.name}
              </Typography>
            </Button>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
